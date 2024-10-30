jQuery(document).ready(
    function ($) {

        addWidgetButton('image', 'vmutc-create-addimage', 'fas fa-image', 'Simple Image','basic');
        $(document).on('click', '#vmutc-create-addimage', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-imageID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditimage elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="imageWidget gridstackWidget" style="background-image: url(' + baseDir + 'assets/img/gallery/defaultImage.png);" data-parent="' + whatGrid + '" ' +
                'data-what="image" data-whatClass="imageWidget" ' +
                'data-imageurl="defaultImage.png" data-imagesize="cover" data-imageblend="normal"' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '</div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditimage', function () {
            $('div.ui-dialog-content').dialog('close');
            var imageID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(imageID);
            if ($('#vmutc_block_id').val() == '') {
                var sectionID = $('#' + imageID).closest('.sectionEnabled').attr('id');
                $('#vmutc_block_id').val(imageID);
            }
            createimage(imageID);
            saveWidgetInitialValues(imageID);
            $("#vmutc_imageWidgetContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '520',
                height: '560',
                resizable: false,
                title: 'Image/Text Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="imageWidget" data-title="' + cssmTranslate.imagetitle + '"></i>');
                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                },
                beforeClose: function () {
                    jQuery('.gsap-marker-start,.gsap-marker-end').remove();
                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(imageID);
                            $(this).dialog("close");
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                            var id_block = $('#' + imageID).attr('data-parent');
                            $('*').removeClass('vmutc-selected vmutc-elementOver');
                            var elementToSave = document.getElementById(id_block);
                            var clone = elementToSave.cloneNode(true);
                            var admin_clone = clone;

                            $(admin_clone).css('transform', '');
                            $(admin_clone).find('.grid-stack-item').css('transform', '');

                            $(admin_clone).removeClass(function (index, className) {
                                return (className.match(/(^|\s)grid-stack-instance-\S+/g) || []).join(' ');
                            });

                            $(admin_clone).removeClass('gridstack-editing');
                            jQuery(admin_clone).attr('data-parent','')
                            var front_clone = admin_clone;

                            var admin_content = admin_clone.outerHTML;

                            $(front_clone).find('.gridstask-toolbar').remove();
                            $(front_clone).find('.gridstack-column-toolbar').remove();
                            $(front_clone).find('.editorToolBar').remove();
                            var front_content = front_clone.outerHTML;

                            var values = {
                                admin_content: admin_content,
                                front_content: front_content,
                                id_theme: $('#cssm_id_theme').val(),
                                security: cssm_front_ajax_object.security,
                                id_block: id_block,
                                parent: $('#' + id_block).attr('data-parent'),
                                where: $('#' + id_block).attr('data-where'),
                                what: $('#' + id_block).attr('data-what'),
                                whatClass: $('#' + id_block).attr('data-whatClass'),
                                style: $('#' + id_block).attr('style'),
                                action: 'saveBlock',
                            };
                            $.ajax({
                                type: "POST",
                                url: cssm_front_ajax_object.ajaxurl,
                                data: values,
                                success: function (id) {
                                    $('#elementClose_' + id_block).attr('data-index', id);
                                    $('#' + id_block + ' .gridstack-save').hide();
                                }
                            });
                            $(this).dialog("close");
                            localStorage.clear();
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
                        }
                    }
                }
            }), $('.EditorContainer').draggable();
            $("#vmutc_imageWidgetContainer").dialog("open");
        });
        Dropzone.options.vmutcuploadimagewidgetdropzone = {
            url: cssm_front_ajax_object.ajaxurl + '?security=' + cssm_front_ajax_object.security + '&id_theme=' + $('#cssm_id_theme').val() + '&action=uploadImage',
            uploadMultiple: false,
            acceptedFiles: 'image/*',
            addRemoveLinks: true,
            dictDefaultMessage: cssmTranslate.vmutcdropzoneupload,
            dictRemoveFile: cssmTranslate.vmutcdropzoneremove,
            removedfile: function (file) {
                var filename = file.name;
                var values = {
                    id_theme: $('#cssm_id_theme').val(),
                    security: cssm_front_ajax_object.security,
                    action: 'deleteGalleryImage',
                    filename: filename,
                };
                $.ajax({
                    type: 'POST',
                    url: cssm_front_ajax_object.ajaxurl,
                    data: values,
                    dataType: 'html'
                });
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
            },
            init: function () {
                this.on("addedfile", function (file) {}, this.on("success", function (file) {
                    if ($('#openBackgroundGalleryDialog').is(':visible')) {
                        $('#openBackgroundGallery').dialog('destroy').remove();
                        if ($('div .popup_block').is(':visible'))
                            $('div .popup_block').hide();
                        $('div .popup_block a.closePopup').remove();
                        $('#vmutcchooseBackgroundImage').trigger('click');
                    }
                }));
            }
        };
        $("#vmutc_uploadimageWidgetImage").click(function () {
            popID = $("#vmutc_uploadimageWidgetImage").data("rel");
            popWidth = $("#vmutc_uploadimageWidgetImage").data("width");
            var position = $("body").find("[aria-describedby='vmutc_imageWidgetContainer']").position();
            if ($("#" + popID + ":visible").length == 0) {
                $("#" + popID).fadeIn().css({
                    "width": popWidth
                }).prepend('<a href="#" class="closePopup"><i class="fas fa-times btn_close"></i></a>');
                $("#" + popID).css({
                    "top": position.top,
                    "left": position.left,
                    "z-index": 1100000
                });
                $("#" + popID).draggable({
                    handle: "p",
                    containment: [, position.top, , ]
                });
            } else {
                $("#" + popID).fadeOut(function () {
                    $("#" + popID + " a.closePopup").remove();
                });
            }
        });
        $("#vmutc_imageWidget_Image").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundGalleryDialog').length)
                $('#openBackgroundGalleryDialog').remove();
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundImage',
                what: 'imageWidget',
            };
            var tag = $('<div id="' + popID + '"></div>');
            $.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (data) {
                    tag.html(data).dialog({
                        modal: false,
                        title: 'Gallery',
                        width: popWidth,
                        height: 'auto',
                        position: {
                            my: 'right top',
                            at: 'right top',
                            of: 'body'
                        },
                        create: function (event) {
                            $(event.target).parent().css('position', 'fixed');
                            $('#openBackgroundGallery').parent().attr('id', 'openBackgroundGalleryDialog');
                        },
                        open: function () {
                            $(this).css('overflow', 'hidden');
                            $(this).closest(".ui-dialog")
                            var closeBtn = $('.ui-dialog-titlebar-close');
                            $('.ui-dialog-titlebar-close span').remove();
                            closeBtn.removeClass('ui-button-icon-only');
                            closeBtn.append('<i class="fas fa-times"></i>');
                        },
                        close: function (event, ui) {
                            $(this).dialog('destroy').remove();
                            if ($('div .popup_block').is(':visible'))
                                $('div .popup_block').hide();
                            $('div .popup_block a.closePopup').remove();
                        }
                    }).dialog('open');
                }
            });
        });
        $(document).on('change', '#vmutc_imageWidget_Image_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-imageurl', $('#vmutc_imageWidget_Image_input').val());
            $('#' + what).css('background-image', 'url("' + baseDir + 'assets/img/gallery/' + $('#vmutc_imageWidget_Image_input').val() + '")');
            //    $('#openBackgroundGalleryDialog').remove();
        });
        $(document).on('click', '#vmutc_imageWidget_Image_remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-imageurl', '');
            $('#' + what).css('background-image', '');
            $('#vmutc_imageWidget_Image_input').val('');
        });
        $('#vmutc_imageWidget_Size').on('change', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var size = $(this).val();
            $('#' + what).attr('data-imagesize', size);
            if (size != 'size') {
                $('#' + what).css("background-size", size);
            } else {
                var height = $('#' + what).height();
                $('#' + what).css("background-size", '100% ' + height + 'px');
            }
        });
        $(document).on('change', '#vmutc_imageWidgetBlend', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var blend = $(this).val();
            $('#' + what).attr('data-imageblend', blend);
            $('#' + what).css("mix-blend-mode", blend);
        });

        function createimage(widgetID) {
            $('#vmutc_imageWidget_Image_input').val($('#' + widgetID).attr('data-imageurl'));
            $('#vmutc_imageWidget_Size').val($('#' + widgetID).attr('data-imagesize'));
            $('#vmutc_imageWidgetBlend').val($('#' + widgetID).attr('data-imageblend'));
            var type = $('#' + widgetID).attr('data-animatortype');
            var start = $('#' + widgetID).attr('data-animatorstart');
            var end = $('#' + widgetID).attr('data-animatorend');
            var duration = $('#' + widgetID).attr('data-animatorduration');
            var easeCode = $('#' + widgetID).attr('data-animatoreasecode');
            var ease = $('#' + widgetID).attr('data-animatorease');
            var reverse = $('#' + widgetID).attr('data-animatorreverse');
            var scrub = $('#' + widgetID).attr('data-animatorscrub');
        //    updateAnimatorValues(widgetID, type, start, 'vmutc_imageWidgetContainer', duration, easeCode, ease, reverse, scrub, end);
        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('imageurl', $('#' + widgetID).attr('data-imageurl'));
            localStorage.setItem('imagesize', $('#' + widgetID).attr('data-imagesize'));
            localStorage.setItem('imageblend', $('#' + widgetID).attr('data-imageblend'));
            localStorage.setItem('animatortype', $('#' + widgetID).attr('data-animatortype'));
            localStorage.setItem('animatorstart', $('#' + widgetID).attr('data-animatorstart'));
            localStorage.setItem('animatorend', $('#' + widgetID).attr('data-animatorend'));
            localStorage.setItem('animatorduration', $('#' + widgetID).attr('data-animatorduration'));
            localStorage.setItem('animatoreasecode', $('#' + widgetID).attr('data-animatoreasecode'));
            localStorage.setItem('animatorease', $('#' + widgetID).attr('data-animatorease'));
            localStorage.setItem('animatorreverse', $('#' + widgetID).attr('data-animatorreverse'));
            localStorage.setItem('animatorscrub', $('#' + widgetID).attr('data-animatorscrub'));
        }

        function restoreWidgetInitialValues(widgetID) {
            $('#' + widgetID).attr('data-imageurl', localStorage.getItem('imageurl'));
            var size = localStorage.getItem('imagesize');
            $('#' + widgetID).attr('data-imagesize', size);
            $('#' + widgetID).css('background-image', 'url("' + baseDir + 'assets/img/gallery/' + localStorage.getItem('imageurl') + '")');
            $('#' + widgetID).css('background-size', );
            if (size != 'size') {
                $('#' + widgetID).css('background-size', size);
            } else {
                var height = $('#' + widgetID).height();
                $('#' + widgetID).css("background-size", '100% ' + height + 'px');
            }
            var blend = localStorage.getItem('imageblend');
            $('#' + widgetID).attr('data-imageblend', blend);
            $('#' + widgetID).css("mix-blend-mode", blend);
            var type = localStorage.getItem('animatortype');
            var start = localStorage.getItem('animatorstart');
            var end = localStorage.getItem('animatorend');
            var duration = localStorage.getItem('animatorduration');
            var easecode = localStorage.getItem('animatoreasecode');
            var ease = localStorage.getItem('animatorease');
            if (type != 'none') {
                $('#' + widgetID).addClass('vmutc_animator');
            } else {
                $('#' + widgetID).removeClass('vmutc_animator');
            }
            var reverse = localStorage.getItem('animatorreverse');

            if (reverse == 1) {
                $('#vmutc_animator_reverse').prop('checked', true);
            } else {
                $('#vmutc_animator_reverse').prop('checked', false);
            }
            var scrub = localStorage.getItem('animatorscrub');

            if (scrub == 1) {
                $('#vmutc_animator_scrub').prop('checked', true);
            } else {
                $('#vmutc_animator_scrub').prop('checked', false);
            }
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_imageWidgetContainer', duration, easecode, ease, reverse, scrub, end);
        }

        function updateSection(id_block) {
            Swal.close();
            if (typeof (counter[id_block]) != 'undefined') {
                counter[id_block].destroy();
            }
            $('*').removeClass('vmutc-selected vmutc-elementOver');
            var elementToSave = document.getElementById(id_block);
            var clone = elementToSave.cloneNode(true);
            var admin_clone = clone;
            $(admin_clone).css('transform', '');
            $(admin_clone).find('.grid-stack-item').css('transform', '');

            $(admin_clone).removeClass(function (index, className) {
                return (className.match(/(^|\s)grid-stack-instance-\S+/g) || []).join(' ');
            });

            $(admin_clone).removeClass('gridstack-editing');
            jQuery(admin_clone).attr('data-parent','')
            var front_clone = admin_clone;
            var admin_content = admin_clone.outerHTML;
            $(front_clone).find('.gridstask-toolbar').remove();
            $(front_clone).find('.gridstack-column-toolbar').remove();
            $(front_clone).find('.editorToolBar').remove();
            var front_content = front_clone.outerHTML;
            var values = {
                admin_content: admin_content,
                front_content: front_content,
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                id_block: id_block,
                parent: $('#' + id_block).attr('data-parent'),
                where: $('#' + id_block).attr('data-where'),
                what: $('#' + id_block).attr('data-what'),
                whatClass: $('#' + id_block).attr('data-whatClass'),
                style: $('#' + id_block).attr('style'),
                action: 'saveBlock',
            };
            $.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (id) {
                    console.log('Section updated with success');
                    $('#elementClose_' + id_block).attr('data-index', id);
                    $('#' + id_block + ' .gridstack-save').hide();
                }
            });
        }
    });