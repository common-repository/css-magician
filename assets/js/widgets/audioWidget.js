jQuery(document).ready(
    function ($) {

        addWidgetButton('audio', 'vmutc-create-addaudio', 'fas fa-volume-up', 'Audio','basic');
        $(document).on('click', '#vmutc-create-addaudio', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-audioID-' + Math.random().toString(36).substr(2, 16);
            var editorToolBar = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditaudio elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>';
            var addWidget = '<div id="' + uniqueID + '" class="audioWidget gridstackWidget" data-parent="' + whatGrid + '" ' +
                'data-what="audio" data-whatClass="audioWidget" ' +
                'data-audiourl="" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0" ' +
                'data-audiotitle="Title" data-audiosubtitle="subtitle" data-audiourl="" data-audioimageurl="">' +
                '<div class="vmutc_audio_editorContainer">' +
                '<div class="vmutc_audio_imageContainer"></div>' +
                '<div class="vmutc_audio_audioContainer">' +
                '<div class="vmutc-audio_infos_container">' +
                '<span class="vmutc_audio_title">title</span><br>' +
                '<span class="vmutc_audio_subtitle">subtitle</span>' +
                '</div>' +
                '<div class="vmutc_audio_container">' +
                '<audio src="" alt="" controls />' +
                '</div>' +
                '</div>' +
                '</div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(editorToolBar + addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditaudio', function () {
            $('div.ui-dialog-content').dialog('close');
            var audioID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(audioID);
            if ($('#vmutc_block_id').val() == '') {
                var sectionID = $('#' + audioID).closest('.sectionEnabled').attr('id');
                $('#vmutc_block_id').val(audioID);
            }
            createaudio(audioID);
            saveWidgetInitialValues(audioID);
            $("#vmutc_audioWidgetContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '720',
                height: '700',
                resizable: false,
                title: cssmTranslate.audiowidgettitle,
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="audioWidget" data-title="' + cssmTranslate.audiowidgethelp + '"></i>');
                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                beforeClose: function () {
                    /*   if (typeof (scrollMagicScene[audioID]) != 'undefined') {
                           scrollMagicScene[audioID].removeIndicators().reverse(false);
                       }*/
                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(audioID);
                            $(this).dialog("close");
                            /*   if (typeof (scrollMagicScene[audioID]) != 'undefined') {
                                   scrollMagicScene[audioID].removeIndicators().reverse(false);
                               }*/
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                            $('#openBackgroundGalleryDialog,#openAudioGalleryDialog').remove();
                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                            var id_block = $('#' + audioID).attr('data-parent');
                            $('*').removeClass('vmutc-selected vmutc-elementOver');
                            $('#' + id_block).find('.vmutc-elementOver').removeClass('vmutc-elementOver');
                            $('#' + id_block + ' .editorToolBar').attr('style', '');
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
                            /*    if (typeof (scrollMagicScene[audioID]) != 'undefined') {
                                    scrollMagicScene[audioID].removeIndicators().reverse(false);
                                }*/
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                            $('#openBackgroundGalleryDialog,#openAudioGalleryDialog').remove();
                        }
                    }
                }
            }), $('.EditorContainer').draggable();
            $("#vmutc_audioWidgetContainer").dialog("open");
        });
        Dropzone.options.vmutcuploadaudiowidgetdropzone = {
            url: cssm_front_ajax_object.ajaxurl + '?security=' + cssm_front_ajax_object.security + '&id_theme=' + $('#cssm_id_theme').val() + '&action=uploadAudio',
            uploadMultiple: false,
            acceptedFiles: 'audio/mp3, audio/mpeg',
            addRemoveLinks: true,
            dictDefaultMessage: cssmTranslate.vmutcdropzoneuploadaudio,
            dictRemoveFile: cssmTranslate.vmutcdropzoneremove,
            removedfile: function (file) {
                var filename = file.name;

                var values = {
                    id_theme: $('#cssm_id_theme').val(),
                    security: cssm_front_ajax_object.security,
                    action: 'deleteAudio',
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
                    $('#vmutc_audioWidget_input').val(file['name']).trigger("change");
                }));
            }
        };
        $("#vmutc_uploadaudioWidgetAudio").click(function () {
            popID = $("#vmutc_uploadaudioWidgetAudio").data("rel");
            popWidth = $("#vmutc_uploadaudioWidgetAudio").data("width");
            if ($("#" + popID + ":visible").length == 0) {
                $("#" + popID).fadeIn().css({
                    "width": popWidth
                }).prepend('<a href="#" class="closePopup"><i class="fas fa-times btn_close"></i></a>');
                $("#" + popID).css({
                    "top": '100px',
                    "right": '50%',
                    "z-index": 1100000
                });
                $("#" + popID).draggable({
                    handle: "p",
                });
            } else {
                $("#" + popID).fadeOut(function () {
                    $("#" + popID + " a.closePopup").remove();
                });
            }
        });
        $("#vmutc_chooseaudioWidget_Audio").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");

            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseAudio',
                what: 'audioWidget',
            };
            var tag = $('<div id="' + popID + '"></div>');
            $.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (data) {
                    tag.html(data).dialog({
                        modal: false,
                        title: 'Audio Gallery',
                        width: popWidth,
                        height: '800',
                        position: {
                            my: 'right top',
                            at: 'right top',
                            of: 'body'
                        },
                        create: function (event) {
                            $(event.target).parent().css('position', 'fixed');
                            $('#openAudioGallery').parent().attr('id', 'openAudioGalleryDialog');
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
        $(document).on('click', '#vmutc_audioWidgetAudio_Remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#vmutc_audioWidget_input').val('');
            $('#' + what).attr('data-audiourl', '');
            $('#' + what + ' .vmutc_audio_container audio').attr('src', '');
        });
        $(document).on('change', '#vmutc_audioWidget_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var audioName = $('#vmutc_audioWidget_input').val();
            var imagename = $('#vmutc_audioWidget_Image_input').val();
            $('#' + what).attr('data-audiourl', audioName);
            $('#' + what + ' .vmutc_audio_container audio').attr('src', baseDir + 'assets/img/audio/' + audioName).attr('alt', audioName);
            //     $('#openAudioGalleryDialog').remove();
            if (imagename == '') {
                $('#' + what + ' .vmutc_audio_imageContainer ').css('width', '0');
                $('#' + what + ' .vmutc_audio_audioContainer ').css('width', '100%');
            }
        });
        Dropzone.options.vmutcuploadaudiowidgetimagedropzone = {
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
                    $('#vmutc_audioWidget_Image_input').val(file['name']).trigger("change");
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
        $("#vmutc_uploadaudioWidgetImage").click(function () {
            popID = $("#vmutc_uploadaudioWidgetImage").data("rel");
            popWidth = $("#vmutc_uploadaudioWidgetImage").data("width");
            var position = $("body").find("[aria-describedby='vmutc_audioWidgetContainer']").position();
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
        $("#vmutc_audioWidget_Image").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundGalleryDialog').length)
                $('#openBackgroundGalleryDialog').remove();
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundImage',
                what: 'audioWidget',
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
        $(document).on('change', '#vmutc_audioWidget_Image_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var imagename = $('#vmutc_audioWidget_Image_input').val();
            var imageurl = baseDir + 'assets/img/gallery/' + imagename;
            $('#' + what).attr('data-audioimageurl', imagename);
            $('#' + what + ' .vmutc_audio_editorContainer .vmutc_audio_imageContainer').html('<img src="">')
            $('#' + what + ' .vmutc_audio_editorContainer .vmutc_audio_imageContainer > img').css('background-image', 'url(' + imageurl + ')');
            if (imagename != '') {
                $('#' + what + ' .vmutc_audio_imageContainer ').css('width', '30%');
                $('#' + what + ' .vmutc_audio_audioContainer ').css('width', '70%');
            }
            //  $('#openBackgroundGalleryDialog').remove();
        });
        $(document).on('click', '#vmutc_audioWidget_Image_remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-audioimageurl', '');
            $('#vmutc_audioWidget_Image_input').val('');
            $('#' + what + ' .vmutc_audio_imageContainer ').css('width', '0');
            $('#' + what + ' .vmutc_audio_editorContainer .vmutc_audio_imageContainer > img').css('background-image', '');
            $('#' + what + ' .vmutc_audio_audioContainer ').css('width', '100%');
        });
        $(document).on('keyup', '#vmutc_audioWidgetTitle', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var title = this.value;
            $('#' + what).attr('data-audiotitle', title);
            $('#' + what + ' .vmutc_audio_title').html(title);
        });
        $(document).on('keyup', '#vmutc_audioWidgetSubTitle', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var subtitle = this.value;
            $('#' + what).attr('data-audiosubtitle', subtitle);
            $('#' + what + ' .vmutc_audio_subtitle').html(subtitle);
        });

        function createaudio(widgetID) {
            $('#vmutc_audioWidget_input').val($('#' + widgetID).attr('data-audiourl'));
            $('#vmutc_audioWidget_Image_input').val($('#' + widgetID).attr('data-audioimageurl'));
            $('#vmutc_audioWidgetTitle').val($('#' + widgetID).attr('data-audiotitle'));
            $('#vmutc_audioWidgetSubTitle').val($('#' + widgetID).attr('data-audiosubtitle'));
            var type = $('#' + widgetID).attr('data-animatortype');
            var start = $('#' + widgetID).attr('data-animatorstart');
            var end = $('#' + widgetID).attr('data-animatorend');
            var duration = $('#' + widgetID).attr('data-animatorduration');
            var easeCode = $('#' + widgetID).attr('data-animatoreasecode');
            var ease = $('#' + widgetID).attr('data-animatorease');
            var reverse = $('#' + widgetID).attr('data-animatorreverse');
            var scrub = $('#' + widgetID).attr('data-animatorscrub');
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_audioWidgetContainer', duration, easeCode, ease, reverse, scrub,end);
        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('audiohtml', $('#' + widgetID + ' > .vmutc_audio_editorContainer').html());
            localStorage.setItem('audiourl', $('#' + widgetID).attr('data-audiourl'));
            localStorage.setItem('audioimageurl', $('#' + widgetID).attr('data-audioimageurl'));
            localStorage.setItem('audiotitle', $('#' + widgetID).attr('data-audiotitle'));
            localStorage.setItem('audiosubtitle', $('#' + widgetID).attr('data-audiosubtitle'));
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
            $('#' + widgetID).attr('data-audiourl', localStorage.getItem('audiourl'));
            $('#' + widgetID).attr('data-audioimageurl', localStorage.getItem('audioimageurl'));
            $('#' + widgetID).attr('data-audiotitle', localStorage.getItem('audiotitle'));
            $('#' + widgetID).attr('data-audiosubtitle', localStorage.getItem('audiosubtitle'));
            $('#' + widgetID + ' > .vmutc_audio_editorContainer').html(localStorage.getItem('audiohtml'));
            var type = localStorage.getItem('animatortype');
            var start = localStorage.getItem('animatorstart');
            var end = localStorage.getItem('animatorend');
            var duration = localStorage.getItem('animatorduration');
            var easecode = localStorage.getItem('animatoreasecode');
            var ease = localStorage.getItem('animatorease');
            var reverse = localStorage.getItem('animatorreverse');
            var scrub = localStorage.getItem('animatorscrub');
            if (reverse == 1) {
                $('#vmutc_animator_reverse').prop('checked', true);
            } else {
                $('#vmutc_animator_reverse').prop('checked', false);
            }
            if (scrub == 1) {
                $('#vmutc_animator_scrub').prop('checked', true);
            } else {
                $('#vmutc_animator_scrub').prop('checked', false);
            }
            if (type != 'none') {
                $('#' + widgetID).addClass('vmutc_animator');
            } else {
                $('#' + widgetID).removeClass('vmutc_animator');
            }
          //  updateAnimatorValues(widgetID, type, start, 'vmutc_audioWidgetContainer', duration, easecode, ease, reverse, scrub, end);
        }

        function updateSection(id_block) {
            Swal.close();
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