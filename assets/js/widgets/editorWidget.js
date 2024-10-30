jQuery(document).ready(
    function ($) {
        addWidgetButton('editor', 'vmutc-create-addEditor', 'fas fa-edit', 'Html Editor');
        $(document).on('click', '#vmutc-create-addEditor', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-blockID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditEditor elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="editorWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="editor" data-whatClass="editorWidget" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '<p class="tinymcePlaceholder">Your content will be added here ...</p>' +
                '</div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditEditor', function () {
            $('div.ui-dialog-content').dialog('close');
            var editorID = $(this).attr('data-element');
            saveWidgetInitialValues(editorID);
            $("#vmutc_tinyContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '620',
                height: '700',
                resizable: false,
                title: 'Html Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="editorWidget" data-title="' + cssmTranslate.editortitle + '"></i>');
                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                },
                beforeClose: function () {
                    $('#vmutc_tiny').summernote('destroy');

                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(editorID);
                            $(this).dialog("close");
                            localStorage.clear();

                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                            var id_block = $('#' + editorID).attr('data-parent');
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

                        }
                    }
                }
            }), $('.EditorContainer').draggable();
            $("#vmutc_tinyContainer").dialog("open");
            createTiny(editorID);
        });

        function createTiny(editorID) {
            var content = $('#' + editorID).html();
            $('#vmutc_tiny').summernote({
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'underline', 'italic', 'clear']],
                    ['fontname', ['fontname']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['height', ['height']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture', 'video', 'hr']],
                    ['view', ['fullscreen', 'codeview']],
                    ['misc', ['redo', 'undo', ]],
                    ['misc', ['', 'help', ]],
                ],
                popover: {
                    image: [
                        ['image', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
                        ['float', ['floatLeft', 'floatRight', 'floatNone']],
                        ['remove', ['removeMedia']]
                    ],
                    link: [
                        ['link', ['linkDialogShow', 'unlink']]
                    ],
                    table: [
                        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
                        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
                    ],
                    air: [
                        ['color', ['color']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['para', ['ul', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture']]
                    ]
                },
            });
            $('#vmutc_tiny').summernote('code', content);
            $('#vmutc_tiny').on('summernote.change', function (we, contents, $editable) {
                $('#' + editorID).html(contents);
            });
            var type = $('#' + editorID).attr('data-animatortype');
            var start = $('#' + editorID).attr('data-animatorstart');
            var end = $('#' + editorID).attr('data-animatorend');
            var duration = $('#' + editorID).attr('data-animatorduration');
            var easeCode = $('#' + editorID).attr('data-animatoreasecode');
            var ease = $('#' + editorID).attr('data-animatorease');
            var reverse = $('#' + editorID).attr('data-animatorreverse');
            var scrub = $('#' + editorID).attr('data-animatorscrub');
        //    updateAnimatorValues(editorID, type, start, 'vmutc_tinyContainer', duration, easeCode, ease, reverse, scrub, end);
        }

        function saveWidgetInitialValues(widgetID) {
            $('#vmutc_blockColumn_id').val(widgetID);
            localStorage.setItem('tinyblock', $('#' + widgetID).html());
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
            $('#' + widgetID).html(localStorage.getItem('tinyblock'));
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
        //    updateAnimatorValues(widgetID, type, start, 'vmutc_tinyContainer', duration, easecode, ease, reverse, scrub, end);
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