jQuery(document).ready(
    function ($) {
        addWidgetButton('icon', 'vmutc-create-addIcon', 'far fa-smile', 'Icon','basic');
        $(document).on('click', '#vmutc-create-addIcon', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-iconID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditIcon elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="iconWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="icon" data-whatClass="iconWidget" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0" >' +
                '<i class="far fa-smile fa-target"></i>' +
                '</div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditIcon', function () {
            $('div.ui-dialog-content').dialog('close');
            var iconID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(iconID);
            createIcon(iconID);
            saveWidgetInitialValues(iconID);
            $("#vmutc_iconContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '620',
                height: '600',
                resizable: false,
                title: 'Icon Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="iconWidget" data-title="' + cssmTranslate.icontitle + '"></i>');
                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                beforeClose: function () {
                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(iconID);
                            $(this).dialog("close");
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton'
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                            $('*').removeClass('vmutc-selected vmutc-elementOver');
                            var id_block = $('#' + iconID).attr('data-parent');
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
            $("#vmutc_iconContainer").dialog("open");
        });
        $(document).on('click', '#vmutc_iconAlignChoose .btn', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var val = $(this).find('input').val();
            $(this).closest('.cssm-btn-group').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#' + what).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center');
            if (val == 'left')
                $('#' + what).addClass('vmutc_align_left');
            if (val == 'right')
                $('#' + what).addClass('vmutc_align_right');
            if (val == 'center')
                $('#' + what).addClass('vmutc_align_center');
            $('#' + what).attr('data-iconalign', val);
        });

        function createIcon(iconID) {
            $('#vmutc_blockColumn_id').val(iconID);
            $('#vmutc_iconSelectorContainer').iconpicker({
                animation: false,
                selected: $('#' + iconID).attr('data-icon'),
                templates: {
                    popover: '<div class="iconpicker-popover"><div class="arrow"></div>' +
                        '<div class="popover-title"></div><div class="popover-content"></div></div>',
                    buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">Cancel</button>' +
                        ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">Accept</button>',
                    search: '<input type="search" class="form-control iconpicker-search" placeholder="Type to filter" />',
                    iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                    iconpickerItem: '<a role="button" href="javascript:void(0);" class="iconpicker-item"><i></i></a>',
                }
            });
            $('#vmutc_iconAlignChoose .btn').removeClass('active');
            if ($('#' + iconID).attr('data-iconalign') == 'left')
                $('#vmutc_iconAlignChoose .fa-align-left').addClass('active');
            if ($('#' + iconID).attr('data-iconalign') == 'center')
                $('#vmutc_iconAlignChoose .fa-align-center').addClass('active');
            if ($('#' + iconID).attr('data-iconalign') == 'right')
                $('#vmutc_iconAlignChoose .fa-align-right').addClass('active');
            $('#vmutc_iconSelectorContainer').on('iconpickerSelected', function (e) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).find('.fa-target').remove();
                var iconClass = e.iconpickerValue;
                $('#' + what).append('<i class="' + iconClass + ' fa-target"></i>');
                $('#' + what).attr('data-icon', iconClass);
            });
            var type = $('#' + iconID).attr('data-animatortype');
            var start = $('#' + iconID).attr('data-animatorstart');
            var end = $('#' + iconID).attr('data-animatorend');
            var duration = $('#' + iconID).attr('data-animatorduration');
            var easeCode = $('#' + iconID).attr('data-animatoreasecode');
            var ease = $('#' + iconID).attr('data-animatorease');
            var reverse = $('#' + iconID).attr('data-animatorreverse');
            var scrub = $('#' + iconID).attr('data-animatorscrub');
        //    updateAnimatorValues(iconID, type, scroll, 'vmutc_iconContainer', duration, easeCode, ease, reverse, scrub, end);
        }
        $("#vmutc_iconWidget_Color").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                $('#' + what).attr('data-iconwidgetcolor', color).css('color', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                $('#' + what).attr('data-iconwidgetcolor', color).css('color', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                if (color != null) {
                    color = color.toRgbString();
                    $('#' + what).attr('data-iconwidgetcolor', color).css('color', color);
                } else {
                    $('#' + what).attr('data-iconwidgetcolor', color).css('color', 'inherit');
                }
            }
        });
        iconSize = document.getElementById('vmutc_iconWidget_size_slider');
        noUiSlider.create(iconSize, {
            start: 30,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        iconSize.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var size = Math.round(values);
            $('#vmutc_iconWidget_size').val(size);
            $('#' + what).attr('data-iconwidgetsize', size).css('font-size', size + 'px');
        });
        $('#vmutc_iconWidget_size').on('change', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var size = Math.round(this.value);
            iconSize.noUiSlider.set(size);
            $('#' + what).attr('data-iconwidgetsize', size).css('font-size', size + 'px');
        });

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('icon', $('#' + widgetID).attr('data-icon'));
            localStorage.setItem('iconalign', $('#' + widgetID).attr('data-iconalign'));
            localStorage.setItem('iconwidgetsize', $('#' + widgetID).attr('data-iconwidgetsize'));
            localStorage.setItem('iconwidgetcolor', $('#' + widgetID).attr('data-iconwidgetcolor'));
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
            $('#' + widgetID).attr('data-icon', localStorage.getItem('icon'));
            $('#' + widgetID).attr('data-iconalign', localStorage.getItem('iconalign'));
            var fontSize = localStorage.getItem('iconwidgetsize');
            $('#' + widgetID).attr('data-iconwidgetsize', fontSize);
            var color = localStorage.getItem('iconwidgetcolor');
            $('#' + widgetID).attr('data-iconwidgetcolor', color);
            if (localStorage.getItem('iconalign') == 'left')
                $('#' + widgetID).addClass('vmutc_align_left');
            if (localStorage.getItem('iconalign') == 'right')
                $('#' + widgetID).addClass('vmutc_align_right');
            if (localStorage.getItem('iconalign') == 'center')
                $('#' + widgetID).addClass('vmutc_align_center');
            $('#' + widgetID).find('.fa-target').remove();
            var iconClass = localStorage.getItem('icon');
            $('#' + widgetID).append('<i class="' + iconClass + ' fa-target"></i>');
            $('#' + widgetID).css({
                'color': color,
                'font-size': fontSize
            });
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
        //    updateAnimatorValues(widgetID, type, start, 'vmutc_iconContainer', duration, easecode, ease, reverse, scrub, end);
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