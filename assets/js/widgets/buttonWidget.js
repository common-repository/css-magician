jQuery(document).ready(
    function ($) {
        addWidgetButton('button', 'vmutc-create-addButton', 'fas fa-square', 'Button');
        $(document).on('click', '#vmutc-create-addButton', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-buttonID-' + Math.random().toString(36).substr(2, 16);
            //     var oldContent =  $('#'+whatColumn+' > .grid-stack-item-content').html();
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditButton elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="buttonWidget gridstackWidget vmutc_align_center" data-parent="' + whatGrid + '" data-what="button" data-whatClass="buttonWidget" ' +
                'data-button="default" data-buttonalign="center" data-buttonalignicon="left" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '<a class="vmutc_default_button" href="#" target="_blanck"><span>Give me a title !</span><i class="fa-target"></i></a>' +
                '</div>';
            //    $('#'+whatColumn+' > .grid-stack-item-content').html(oldContent+addWidget);
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditButton', function () {
            var buttonID = false;
            $('div.ui-dialog-content').dialog('close');
            if ($(this).hasClass('elementEdit'))
                var whatElement = $(this).attr('data-element');
            else
                var whatElement = $(this).attr('id');
            // button Editor
            if ($('#' + whatElement).hasClass('buttonWidget')) {
                buttonID = whatElement;
            }
            if (buttonID) {
                createButton(buttonID);
                saveWidgetInitialValues(buttonID);
                $("#vmutc_buttonContainer").dialog({
                    autoOpen: false,
                    modal: false,
                    dialogClass: 'EditorContainer',
                    width: '520',
                    height: '700',
                    resizable: false,
                    title: 'Button Editor',
                    open: function (event, ui) {
                        $(".ui-dialog-titlebar-close").hide();
                        $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="buttonWidget" data-title="'+cssmTranslate.buttonwidgettitle+'"></i>');
                    },
                    close: function () {
                        $(this).closest(".EditorContainer").find('.iconhelp').remove();
                        $(this).dialog('destroy');
                    },
                    beforeClose: function () {
                     /*   if (typeof (scrollMagicScene[buttonID]) != 'undefined') {
                            scrollMagicScene[buttonID].removeIndicators().reverse(false);
                        }*/
                        jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                    },
                    buttons: {
                        Cancel: {
                            click: function () {
                                restoreWidgetInitialValues(buttonID);
                                $(this).dialog("close");
                            /*    if (typeof (scrollMagicScene[buttonID]) != 'undefined') {
                                    scrollMagicScene[buttonID].removeIndicators().reverse(false);
                                }*/
                                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                            },
                            text: cssmTranslate.vmutccancel,
                            class: 'dialog-closeButton',
                        },
                        Save: {
                            text: cssmTranslate.vmutcsave,
                            click: function () {
                            $('*').removeClass('vmutc-selected vmutc-elementOver');
                            var id_block = $('#' + buttonID).attr('data-parent');
                            $('#' + id_block).find('.vmutc_widget_over').removeClass('vmutc_widget_over');
                            $('#' + id_block + ' .editorToolBar').attr('style', '');
                            var elementToSave = document.getElementById(id_block);
                            var clone = elementToSave.cloneNode(true);
                            var admin_clone = clone;
            
                            $(admin_clone).css('transform','');
                            $(admin_clone).find('.grid-stack-item').css('transform','');           
                       
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
                                    $('#'+id_block+' .gridstack-save').hide();
                                }
                            });
                            $(this).dialog("close");
                         /*   if (typeof (scrollMagicScene[buttonID]) != 'undefined') {
                                scrollMagicScene[buttonID].removeIndicators().reverse(false);
                            }*/
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                        }
                        },
                    }
                }), $('.EditorContainer').draggable();
                $("#vmutc_buttonContainer").dialog("open");
            }
        });
        $(document).on('keyup', '#vmutc_editorButtonText', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var content = this.value;
            $('#' + what + ' a span').text(content)
        });
        $(document).on('keyup', '#vmutc_editorButtonLink', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var content = this.value;
            $('#' + what + ' a').attr('href', content)
        });
        $(document).on('change', '#vmutc_editorButtonOpen', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what + ' a').attr('target', '_self');
            } else
                $('#' + what + ' a').attr('target', '_blanck');
        });
        $(document).on('click', '#vmutc_editorButtonAlignChoose .btn', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var val = $(this).find('input').val();
            $(this).closest('.cssm-btn-group').find('.active').removeClass('active');         
            $(this).addClass('active');
            $('#' + what).attr('data-buttonalign', val);
            $('#' + what).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center vmutc_align_justify');
            if (val == 'left') {
                $('#' + what).addClass('vmutc_align_left');
            }
            if (val == 'right') {
                $('#' + what).addClass('vmutc_align_right');
            }
            if (val == 'center') {
                $('#' + what).addClass('vmutc_align_center');
            }
            if (val == 'justify') {
                $('#' + what).addClass('vmutc_align_justify');
            }
        });
        $(document).on('click', '#vmutc_editorButtonIconAlignChoose .btn', function (event) {
            var what = $('#vmutc_blockColumn_id').val();
            var val = $(this).find('input').val();
            $(this).closest('.cssm-btn-group').find('.active').removeClass('active');
            $(this).addClass('active');
        
            $('#' + what + ' a').removeClass('vmutc_icon_align_left vmutc_icon_align_right');
            var allClasses = $('#' + what + ' a i').attr('class');
            var title = $('#' + what + ' a i').html();
            $('#' + what).attr('data-buttonalignicon', val);
            $('#' + what + ' a i').remove();
            if (val == 'left') {
                $('#' + what + ' a').addClass('vmutc_icon_align_left');
                $('#' + what + ' a').prepend('<i class="' + allClasses + '">' + title + '</i>');
            }
            if (val == 'right') {
                $('#' + what + ' a').addClass('vmutc_icon_align_right');
                $('#' + what + ' a').append('<i class="' + allClasses + '">' + title + '</i>');
            }
        });
        $(document).on('click', '.vmutc_button_select', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var what = $('#vmutc_blockColumn_id').val();
            var type = $(this).attr('data-button');
            $('#' + what).html($(this).html());
            $('#' + what).attr('data-button', type);
            $('#' + what).removeClass('social-btns');
            if (type == 'facebook2' || type == 'twitter2' || type == 'google' || type == 'dribbble' || type == 'skype')
                $('#' + what).addClass('social-btns');
            $(".vmutc_button_select").removeClass('vmutc_circularhover_selected');
            $(".vmutc_button_select[data-button=" + type + "]").addClass('vmutc_circularhover_selected');
            $('#vmutc_editorButtonBackgroundColorAfterContainer').hide();
            $('#vmutc_editorButtonBackgroundColorBeforeContainer').hide();
            if (type == 'facebook2' || type == 'twitter2' || type == 'google' || type == 'dribbble' || type == 'skype')
                $('#vmutc_editorButtonBackgroundColorBeforeContainer').show();
            if (type != 'facebook2' && type != 'twitter2' && type != 'google' && type != 'dribbble' && type != 'skype' && type != 'default')
                $('#vmutc_editorButtonBackgroundColorAfterContainer').show();
        });
        $("#vmutc_editorButtonBackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').css('background-color', color);
                } else {
                    $('#' + what + ' a').css('background-color', color);
                }
                $('#' + what).attr('data-buttonbackcolor', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').css('background-color', color);
                } else {
                    $('#' + what + ' a').css('background-color', color);
                }
                $('#' + what).attr('data-buttonbackcolor', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').css('background-color', color);
                } else {
                    $('#' + what + ' a').css('background-color', color);
                }
                $('#' + what).attr('data-buttonbackcolor', color);
            }
        });
        $("#vmutc_editorButtonBackgroundColorAfter").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + ' a.animated-button').focus();
                if (type != 'sandy-one' && type != 'sandy-two' && type != "sandy-three" && type != "sandy-four")
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{background-color:' + color + '}');
                else
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{border-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorafter', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + ' a.animated-button').focus();
                if (type != 'sandy-one' && type != 'sandy-two' && type != "sandy-three" && type != "sandy-four")
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{background-color:' + color + '}');
                else
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{border-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorafter', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + ' a.animated-button').focus();
                if (type != 'sandy-one' && type != 'sandy-two' && type != "sandy-three" && type != "sandy-four")
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{background-color:' + color + '}');
                else
                    $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + ' a.animated-button.' + type + ':after{border-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorafter', color);
            }
        });
        $("#vmutc_editorButtonBackgroundColorBefore").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + '.social-btns .btn').focus();
                $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + '.social-btns .btn.' + type + ':before{background-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorbefore', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + '.social-btns .btn').focus();
                $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + '.social-btns .btn.' + type + ':before{background-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorbefore', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what + '.social-btns .btn').focus();
                $('#vmutc_buttonWidgetStyle_' + what).html('#' + what + '.social-btns .' + type + ':before{background-color:' + color + '}');
                $('#' + what).attr('data-buttonbackcolorbefore', color);
            }
        });
        $("#vmutc_editorButtonTextColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#' + what + '.social-btns .btn.' + type + ' .fab').css('color', color);
                } else {
                    $('#' + what + ' a').css('color', color);
                }
                $('#' + what).attr('data-buttontextcolor', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#' + what + '.social-btns .btn.' + type + ' .fab').css('color', color);
                } else {
                    $('#' + what + ' a').css('color', color);
                }
                $('#' + what).attr('data-buttontextcolor', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#' + what + '.social-btns .btn.' + type + ' .fab').css('color', color);
                } else {
                    $('#' + what + ' a').css('color', color);
                }
                $('#' + what).attr('data-buttontextcolor', color);
            }
        });
        $("#vmutc_editorButtonTextColorHover").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + '.social-btns a.btn:focus .fab,#' + what + '.social-btns a.btn:hover .fab{color:' + color + '!important}');
                } else {
                    $('#' + what + ' a').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + ' a:focus ,#' + what + ' a:hover{color:' + color + '!important}');
                }
                $('#' + what).attr('data-buttontextcolorhover', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + '.social-btns a.btn:focus .fab,#' + what + '.social-btns a.btn:hover .fab{color:' + color + '!important}');
                } else {
                    $('#' + what + ' a').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + ' a:focus ,#' + what + ' a:hover{color:' + color + '!important}');
                }
                $('#' + what).attr('data-buttontextcolorhover', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var type = $('#' + what).attr('data-button');
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if (type == 'facebook2' || type == 'twitter2' || type == "dribbble" || type == "google" || type == "skype") {
                    $('#' + what + '.social-btns .btn').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + '.social-btns a.btn:focus .fab,#' + what + '.social-btns a.btn:hover .fab{color:' + color + '!important}');
                } else {
                    $('#' + what + ' a').focus();
                    $('#vmutc_buttonWidgetStyleText_' + what).html('#' + what + ' a:focus ,#' + what + ' a:hover{color:' + color + '!important}');
                }
                $('#' + what).attr('data-buttontextcolorhover', color);
            }
        });
        function createButton(buttonID) {
            $('#vmutc_blockColumn_id').val(buttonID);
            if ($('#vmutc_buttonWidgetStyle_' + buttonID).length == 0) {
                $("<style id='vmutc_buttonWidgetStyle_" + buttonID + "' type='text/css'></style>").appendTo("#vmutc_styles_container");
                $("<style id='vmutc_buttonWidgetStyleText_" + buttonID + "' type='text/css'></style>").appendTo("#vmutc_styles_container");
            }
            var text = $('#' + buttonID + ' a span').text();
            $('#vmutc_editorButtonText').val(text);
            var link = $('#' + buttonID + ' a').attr('href');
            $('#vmutc_editorButtonLink').val(link);
            var target = $('#' + buttonID + ' a').attr('target');
            if (target == '_blanck')
                $('#vmutc_editorButtonOpen').prop("checked", true);
            else
                $('#vmutc_editorButtonOpen').prop("checked", false)
            $('#vmutc_iconButtonContainer').iconpicker({
                animation: false,
                selected: $('#' + buttonID).attr('data-buttonicon'),
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
            $('#vmutc_iconButtonContainer').on('iconpickerSelected', function (e) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).find('.fa-target').remove();
                var iconClass = e.iconpickerValue;
                var iconalign = $('#' + what).attr('data-buttonalignicon');
                $('#' + what).attr('data-buttonicon', iconClass);
                if (iconalign == 'left') {
                    $('#' + what + ' a').addClass('vmutc_icon_align_left');
                    $('#' + what + ' a').prepend('<i class="' + iconClass + ' fa-target"></i>');
                }
                if (iconalign == 'right') {
                    $('#' + what + ' a').addClass('vmutc_icon_align_right');
                    $('#' + what + ' a').append('<i class="' + iconClass + ' fa-target"></i>');
                }
            });
            $('#vmutc_editorButtonAlignChoose .btn').removeClass('active');
            var buttonalign = $('#' + buttonID).attr('data-buttonalign');
            if (buttonalign == 'left')
                $('#vmutc_editorButtonAlignChoose .btn.fa-align-left').addClass('active');
            if (buttonalign == 'right')
                $('#vmutc_editorButtonAlignChoose .btn.fa-align-right').addClass('active');
            if (buttonalign == 'center')
                $('#vmutc_editorButtonAlignChoose .btn.fa-align-center').addClass('active');
            if (buttonalign == 'justify')
                $('#vmutc_editorButtonAlignChoose .btn.fa-align-justify').addClass('active');
            $('#vmutc_editorButtonIconAlignChoose .btn').removeClass('active');
            var iconalign = $('#' + buttonID).attr('data-buttonalignicon');
            if (iconalign == 'left')
                $('#vmutc_editorButtonIconAlignChoose .btn.fa-align-left').addClass('active');
            if (iconalign == 'right')
                $('#vmutc_editorButtonIconAlignChoose .btn.fa-align-right').addClass('active');
            $('#vmutc_editorButtonBackgroundColorAfterContainer').hide();
            $('#vmutc_editorButtonBackgroundColorBeforeContainer').hide();
            $(".vmutc_button_select").removeClass('vmutc_circularhover_selected');
            var type = $('#' + buttonID).attr('data-button');
            if (type != '')
                $(".vmutc_button_select[data-button=" + type + "]").addClass('vmutc_circularhover_selected');
            if (type == 'facebook2' || type == 'twitter2' || type == 'google' || type == 'dribbble' || type == 'skype')
                $('#vmutc_editorButtonBackgroundColorBeforeContainer').show();
            if (type != 'facebook2' && type != 'twitter2' && type != 'google' && type != 'dribbble' && type != 'skype' && type != 'default')
                $('#vmutc_editorButtonBackgroundColorAfterContainer').show();
            var backgroundColor = $('#' + buttonID).attr('data-buttonbackcolor');
            $('#vmutc_editorButtonBackgroundColor').spectrum('set', backgroundColor);
            var backgroundColorAfter = $('#' + buttonID).attr('data-buttonbackcolorafter');
            $('#vmutc_editorButtonBackgroundColorAfter').spectrum('set', backgroundColorAfter);
            var backgroundColorBefore = $('#' + buttonID).attr('data-buttonbackcolorbefore');
            $('#vmutc_editorButtonBackgroundColorBefore').spectrum('set', backgroundColorBefore);
            var textColor = $('#' + buttonID).attr('data-buttontextcolor');
            $('#vmutc_editorButtonTextColor').spectrum('set', textColor);
            var textColorHover = $('#' + buttonID).attr('data-buttontextcolorhover');
            $('#vmutc_editorButtonTextColorHover').spectrum('set', textColorHover);
            var type = $('#' + buttonID).attr('data-animatortype');
            var start = $('#' + buttonID).attr('data-animatorstart');
            var end = $('#' + buttonID).attr('data-animatorend');
            var duration = $('#' + buttonID).attr('data-animatorduration');
            var easeCode = $('#' + buttonID).attr('data-animatoreasecode');
            var ease = $('#' + buttonID).attr('data-animatorease');
            var reverse = $('#' + buttonID).attr('data-animatorreverse');
            var scrub = $('#' + buttonID).attr('data-animatorscrub');
         //   updateAnimatorValues(buttonID, type, start, 'vmutc_buttonContainer', duration, easeCode, ease,reverse, scrub,end);
        }
        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('buttonWidgettext', $('#' + widgetID + ' a span').text());
            localStorage.setItem('buttonWidgetlink', $('#' + widgetID + ' a').attr('href'));
            localStorage.setItem('buttonWidgetlinktarget', $('#' + widgetID + ' a').attr('target'));
            localStorage.setItem('buttonWidgeticon', $('#' + widgetID).attr('data-buttonicon'));
            localStorage.setItem('buttonWidgetalignicon', $('#' + widgetID).attr('data-buttonalignicon'));
            localStorage.setItem('buttonWidgetalign', $('#' + widgetID).attr('data-buttonalign'));
            localStorage.setItem('buttonWidget', $('#' + widgetID).attr('data-button'));
            localStorage.setItem('buttonWidgetBackColor', $('#' + widgetID).attr('data-buttonbackcolor'));
            localStorage.setItem('buttonWidgetBackColorAfter', $('#' + widgetID).attr('data-buttonbackcolorafter'));
            localStorage.setItem('buttonWidgetBackColorBefore', $('#' + widgetID).attr('data-buttonbackcolorbefore'));
            localStorage.setItem('buttonWidgetTextColor', $('#' + widgetID).attr('data-buttontextcolor'));
            localStorage.setItem('buttonWidgetTextColorHover', $('#' + widgetID).attr('data-buttontextcolorhover'));
            localStorage.setItem('buttonWidgetHtml', $('#' + widgetID).html());
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
            var text = localStorage.getItem('buttonWidgettext');
            var href = localStorage.getItem('buttonWidgetlink');
            var target = localStorage.getItem('buttonWidgetlinktarget');
            var icon = localStorage.getItem('buttonWidgeticon');
            var iconalign = localStorage.getItem('buttonWidgetalignicon');
            var buttonalign = localStorage.getItem('buttonWidgetalign');
            var buttontype = localStorage.getItem('buttonWidget');
            var html = localStorage.getItem('buttonWidgetHtml');
            var backgroundColor = localStorage.getItem('buttonWidgetBackColor');
            var backgroundColorAfter = localStorage.getItem('buttonbackcolorafter');
            var backgroundColorBefore = localStorage.getItem('buttonbackcolorbefore');
            var buttonWidgetTextColor = localStorage.getItem('buttontextcolor');
            var buttonWidgetTextColorHover = localStorage.getItem('buttonWidgetTextColorHover');
            $('#' + widgetID).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center');
            if (buttonalign == 'left') {
                $('#' + widgetID).addClass('vmutc_align_left');
            }
            if (buttonalign == 'right') {
                $('#' + widgetID).addClass('vmutc_align_right');
            }
            if (buttonalign == 'center') {
                $('#' + widgetID).addClass('vmutc_align_center');
            }
            $('#' + widgetID).attr('data-buttonalignicon', iconalign);
            $('#' + widgetID).attr('data-buttonicon', icon);
            $('#' + widgetID).removeClass('social-btns');
            $('#' + widgetID).attr('data-buttontype', buttontype)
            if (buttontype == 'facebook2' || buttontype == 'twitter2' || buttontype == 'google' || buttontype == 'dribbble' || buttontype == 'skype')
                $('#' + widgetID).addClass('social-btns');
            $('#' + widgetID).html(html);
            $('#' + widgetID).attr('data-buttonbackcolor', backgroundColor);
            if (buttontype != 'sandy-one' && buttontype != 'sandy-two' && buttontype != "sandy-three" && buttontype != "sandy-four")
                $('#vmutc_buttonWidgetStyle_' + widgetID).html('#' + widgetID + ' a.animated-button.' + buttontype + ':after{background-color:' + backgroundColorAfter + '}');
            else
                $('#vmutc_buttonWidgetStyle_' + widgetID).html('#' + widgetID + ' a.animated-button.' + buttontype + ':after{border-color:' + backgroundColorAfter + '}');
            $('#' + widgetID).attr('data-buttonbackcolorafter', backgroundColorAfter);
            if (buttontype == 'facebook2' || buttontype == 'twitter2' || buttontype == 'google' || buttontype == 'dribbble' || buttontype == 'skype') {
                $('#vmutc_buttonWidgetStyle_' + widgetID).html('#' + widgetID + '.social-btns .btn.' + buttontype + ':before{background-color:' + backgroundColorBefore + '}');
                $('#vmutc_buttonWidgetStyleText_' + widgetID).html('#' + widgetID + '.social-btns a.btn:focus .fab,#' + widgetID + '.social-btns a.btn:hover .fab{color:' + buttonWidgetTextColorHover + '!important}');
            } else {
                $('#vmutc_buttonWidgetStyleText_' + widgetID).html('#' + widgetID + ' a:focus ,#' + widgetID + ' a:hover{color:' + buttonWidgetTextColorHover + '!important}');
            }
            $('#' + widgetID).attr('data-buttonbackcolorbefore', backgroundColorBefore);
            $('#' + widgetID).attr('data-buttontextcolor', buttonWidgetTextColor);
            $('#' + widgetID).attr('data-buttontextcolorhover', buttonWidgetTextColorHover);
            var type = localStorage.getItem('buttonWidgetanimatortype');
           var duration = localStorage.getItem('animatorduration');
            var easecode = localStorage.getItem('animatoreasecode');
            var ease = localStorage.getItem('animatorease');
            if (type != 'none') {
                $('#' + widgetID).addClass('vmutc_animator');
            } else {
                $('#' + widgetID).removeClass('vmutc_animator');
            }
            var start = localStorage.getItem('animatorstart');
var end = localStorage.getItem('animatorend');
            if (type != 'none') {
                $('#' + widgetID).addClass('vmutc_animator');
            } else {
                $('#' + widgetID).removeClass('vmutc_animator');
            }
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
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_buttonContainer', duration, easecode, ease, reverse, scrub,end);
        }
        function updateSection(id_block) {
            Swal.close();
            $('*').removeClass('vmutc-selected vmutc-elementOver');
            var elementToSave = document.getElementById(id_block);
            var clone = elementToSave.cloneNode(true);
            var admin_clone = clone;
            $(admin_clone).css('transform','');
            $(admin_clone).find('.grid-stack-item').css('transform','');           
       
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
                    $('#'+id_block+' .gridstack-save').hide();
                }
            });
        }
    });