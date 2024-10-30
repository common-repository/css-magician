jQuery(document).ready(
    function ($) {

        addWidgetButton('title', 'vmutc-create-addTitle', 'fas fa-heading', 'Title','basic');

        $(document).on('click', '#vmutc-create-addTitle', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();

            var uniqueID = 'vmutc-titleID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditTitle elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" title="Edit"></span>' +

                '</div>' +
                '<div id="' + uniqueID + '" class="titleWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="title" data-whatClass="titleWidget" ' +
                'data-titlegradientused="0" data-titletext="Example Title" data-titletag="span" data-titlealign="left" data-titlelink="" data-style="StyleNone" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '<span class="vmutc_titleWidget" data-titletext="Example Title">Example Title</span>' +
                '</div>';

            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });

        $(document).on('click', '.elementEditTitle', function () {
            var titleID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(titleID);
            $('div.ui-dialog-content').dialog('close');


            createTitle(titleID);
            saveWidgetInitialValues(titleID);

            $("#vmutc_titleContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '1380',
                height: '700',
                resizable: false,
                title: 'Title Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="titleWidget" data-title="' + cssmTranslate.titlewidgettitle + '"></i>');

                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(titleID);
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

                            var id_block = $('#' + titleID).attr('data-parent');

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
            $("#vmutc_titleContainer").dialog("open");
            $('#vmutc_titleText').focus();

        });

        $(document).on('keyup', '#vmutc_titleText', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var title = this.value;

            $('#' + what).attr('data-titletext', title);
            $('#' + what + ' .vmutc_titleWidget ').attr('data-titletext', title);

            $('#' + what + ' .vmutc_titleWidget').html(title);
        });

        $(document).on('click', '#vmutc_titleAlignChoose .btn', function () {
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

            $('#' + what).attr('data-titlealign', val);
        });

        $(document).on('click', '#vmutc_titleTagChoose .btn', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var val = $(this).find('input').val();
            $(this).closest('.cssm-btn-group').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#' + what + ' .vmutc_titleWidget').each(function () {
                var content = $("<" + val + ">");
                var html = $('#' + what + ' .vmutc_titleWidget').html();
                $(content).html(html);

                $.each(this.attributes, function () {
                    content.attr(this.name, this.value);
                });
                $(this).replaceWith(content);
            });

            $('#' + what).attr('data-titletag', val);
        });

        $(document).on('change', '#vmutc_titlegradientUsed', function () {
            var what = $('#vmutc_blockColumn_id').val();

            if ($(this).prop("checked") == false) {
                $('#vmutc_displayTitleGradientValues').hide();
                $('#' + what).attr('data-titlegradientused', 0);
                $('#' + what + ' .vmutc_gradientTitle').removeClass('vmutc_gradientTitle');

            } else {
                $('#vmutc_displayTitleGradientValues').show();
                $('#' + what).attr('data-titlegradientused', 1);
                $('#' + what + ' .vmutc_gradientTitle').addClass('vmutc_gradientTitle');
                $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
                var gradient = titlegradientPicker.getValue();
                $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                    'background-image': gradient,
                    '-webkit-background-clip': 'text'
                });

            }
        });

        titlegradientPicker = new Grapick({
            el: '#vmutc_titlegradientPicker',
            colorEl: '<input id="vmutc_titleGradientColor">'
        });

        titlegradientPicker.setColorPicker(handler => {
            var el = handler.getEl().querySelector('#vmutc_titleGradientColor');

            $(el).spectrum({
                preferredFormat: "hex",
                color: handler.getColor(),
                showAlpha: true,
                showInput: true,
                showInitial: true,
                allowEmpty: true,

                change(color) {
                    handler.setColor(color.toRgbString());
                    var what = $('#vmutc_blockColumn_id').val();
                    $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());

                    if ($('#' + what).attr('data-titlegradientused') == '1') {
                        var gradient = titlegradientPicker.getValue();
                        $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                            'background-image': gradient,
                            '-webkit-background-clip': 'text'
                        });
                    }
                },
                move(color) {
                    handler.setColor(color.toRgbString(), 0);
                    var what = $('#vmutc_blockColumn_id').val();
                    $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
                    if ($('#' + what).attr('data-titlegradientused') == '1') {
                        var gradient = titlegradientPicker.getValue();
                        $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                            'background-image': gradient,
                            '-webkit-background-clip': 'text'
                        });
                    }

                },
                hide(color) {
                    handler.setColor(color.toRgbString());
                    var what = $('#vmutc_blockColumn_id').val();
                    $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
                    if ($('#' + what).attr('data-titlegradientused') == '1') {
                        var gradient = titlegradientPicker.getValue();
                        $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                            'background-image': gradient,
                            '-webkit-background-clip': 'text'
                        });
                    }
                }
            });
        });

        titlegradientPicker.on('change', complete => {

            var what = $('#vmutc_blockColumn_id').val();
            allHandlersObj = {};
            $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
            var allHandlers = titlegradientPicker.getHandlers();

            for (var i = 0; i < allHandlers.length; i++) {
                var position = Number.parseFloat(allHandlers[i].position).toFixed(2)
                allHandlersObj[position] = allHandlers[i].color;
            }
            $('#' + what).attr('data-titlegradienthandlers', JSON.stringify(allHandlersObj));
            $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
            if ($('#' + what).attr('data-titlegradientused') == '1') {
                var gradient = titlegradientPicker.getValue();
                $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                    'background-image': gradient,
                    '-webkit-background-clip': 'text'
                });

            }


        });

        var titlegradientAngle = document.getElementById('vmutc_titlegradientAngle_slider');
        noUiSlider.create(titlegradientAngle, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 360
            },
        });
        titlegradientAngle.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var angle = Math.round(values);
            $('#vmutc_titlegradientAngle').val(angle);

            $('#' + what).attr('data-titlegradientangle', angle);
            titlegradientPicker.setDirection(angle + 'deg');
            $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
            if ($('#' + what).attr('data-titlegradientused') == '1') {
                var gradient = titlegradientPicker.getValue();
                $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                    'background-image': gradient,
                    '-webkit-background-clip': 'text'
                });
            }
        });

        $(document).on('change', '#vmutc_titlegradientAngle', function () {
            var what = $('#vmutc_blockColumn_id').val();
            titlegradientAngle.noUiSlider.set(this.value);
            $('#' + what).attr('data-titlegradientangle', this.value);

            titlegradientPicker.setDirection(this.value + 'deg');
            $('#' + what).attr('data-titlegradient', titlegradientPicker.getValue());
            if ($('#' + what).attr('data-titlegradientused') == '1') {
                var gradient = titlegradientPicker.getValue();
                $('#' + what + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                    'background-image': gradient,
                    '-webkit-background-clip': 'text'
                });
            }
        });

        $(document).on('change', '#vmutc_titleLink', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var link = this.value;
            $('#' + what).attr('data-titlelink', link);
            if (link != '') {
                $('#' + what).find('.vmutc_titleWidgetLink').remove();
                $('#' + what + ' .vmutc_titleWidget').append('<a class="vmutc_titleWidgetLink" href="' + link + '"></a>');
            } else {
                $('#' + what).find('.vmutc_titleWidgetLink').remove();
            }
        });

        $('.vmutc_titleWidget_select').on('click', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('.vmutc_titleWidget_select').removeClass('vmutc_titleWidget_selected');
            $(this).addClass('vmutc_titleWidget_selected');
            var currentStyle = $('#' + what).attr('data-style');
            var style = $(this).attr('data-style');

            $('#' + what + ' .vmutc_titleWidget ').removeClass('vmutc_titleWidgetStyle vmutc_title' + currentStyle);
            $('#' + what + ' .vmutc_titleWidget ').addClass('vmutc_titleWidgetStyle vmutc_title' + style);
            $('#' + what).attr('data-style', style);
        });

        $("#vmutc_titleWidgetBackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var style = $('#' + what).attr('data-style');
                color = color.toRgbString();
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');

                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {background-color:' + color + ';border-color:' + borderColor + ';color:' + fontColor + '}');

            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');


                $('#' + what).attr('data-titlebackcolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {background-color:' + color + ';border-color:' + borderColor + ';color:' + fontColor + '}');
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');


                $('#' + what).attr('data-titlebackcolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {background-color:' + color + ';border-color:' + borderColor + ';color:' + fontColor + '}');

            }
        });

        $("#vmutc_titleWidgetBorderColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var style = $('#' + what).attr('data-style');
                color = color.toRgbString();
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');


                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + color + ';background-color:' + backColor + ';color:' + fontColor + '}');

            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');


                $('#' + what).attr('data-titlebordercolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + color + ';background-color:' + backColor + ';color:' + fontColor + '}');

            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var fontColor = $('#' + what).attr('data-titlefontcolorhover');


                $('#' + what).attr('data-titlebordercolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + color + ';background-color:' + backColor + ';color:' + fontColor + '}');

            }
        });

        $("#vmutc_titleWidgetFontColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                var style = $('#' + what).attr('data-style');
                color = color.toRgbString();
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');

                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + borderColor + ';background-color:' + backColor + ';color:' + color + '}');

            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');


                $('#' + what).attr('data-titlefontcolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + borderColor + ';background-color:' + backColor + ';color:' + color + '}');

            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                var style = $('#' + what).attr('data-style');
                var backColor = $('#' + what).attr('data-titlebackcolorhover');
                var borderColor = $('#' + what).attr('data-titlebordercolorhover');


                $('#' + what).attr('data-titlefontcolorhover', color);
                $('#vmutc_titleWidgetStyle_' + what).html('#' + what + ' .vmutc_titleWidgetStyle.vmutc_title' + style + ':hover:after {border-color:' + borderColor + ';background-color:' + backColor + ';color:' + color + '}');

            }
        });


        function createTitle(widgetID) {

            $('#vmutc_blockColumn_id').val(widgetID);

            if ($('#vmutc_titleWidgetStyle_' + widgetID).length == 0) {
                $("<style id='vmutc_titleWidgetStyle_" + widgetID + "' type='text/css'></style>").appendTo("#vmutc_styles_container");

            }
            $('#vmutc_titleTagChoose .btn').removeClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h1')
                $('#vmutc_titleTagChoose .tagh1').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h2')
                $('#vmutc_titleTagChoose .tagh2').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h3')
                $('#vmutc_titleTagChoose .tagh3').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h4')
                $('#vmutc_titleTagChoose .tagh4').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h5')
                $('#vmutc_titleTagChoose .tagh5').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'h6')
                $('#vmutc_titleTagChoose .tagh6').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'span')
                $('#vmutc_titleTagChoose .tagspan').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'div')
                $('#vmutc_titleTagChoose .tagdiv').addClass('active');
            if ($('#' + widgetID).attr('data-titletag') == 'p')
                $('#vmutc_titleTagChoose .tagp').addClass('active');

            $('#vmutc_titleText').val($('#' + widgetID).attr('data-titletext'));
            $('#vmutc_titleLink').val($('#' + widgetID).attr('data-titlelink'));

            $('#vmutc_titleAlignChoose .btn').removeClass('active');
            if ($('#' + widgetID).attr('data-titlealign') == 'left')
                $('#vmutc_titleAlignChoose .fa-align-left').addClass('active');
            if ($('#' + widgetID).attr('data-titlealign') == 'center')
                $('#vmutc_titleAlignChoose .fa-align-center').addClass('active');
            if ($('#' + widgetID).attr('data-titlealign') == 'right')
                $('#vmutc_titleAlignChoose .fa-align-right').addClass('active');


            if ($('#' + widgetID).attr('data-titlegradientused') == 1) {
                $('#vmutc_titlegradientUsed').prop('checked', true);
                $('#vmutc_displayTitleGradientValues').show();
            } else {
                $('#vmutc_titlegradientUsed').prop('checked', false);
                $('#vmutc_displayTitleGradientValues').hide();
            }

            $('#vmutc_titlegradientAngle').val($('#' + widgetID).attr('data-titlegradientangle'));
            titlegradientAngle.noUiSlider.set($('#' + widgetID).attr('data-titlegradientangle'));

            var handlers = $('#' + widgetID).attr('data-titlegradienthandlers');
            titlegradientPicker.clear();
            if (typeof (handlers) != 'undefined' && handlers != '' && handlers != 'undefined') {
                handlers = JSON.parse(handlers);

                for (var property in handlers) {
                    titlegradientPicker.addHandler(property, handlers[property])
                }
            } else {
                titlegradientPicker.addHandler(0, '#fff');
                titlegradientPicker.addHandler(100, '#000');
            }
            var style = $('#' + widgetID).attr('data-style');

            $('.vmutc_titleWidget_select').removeClass('vmutc_titleWidget_selected');
            $('.vmutc_titleWidget_select[data-style=' + style + '').addClass('vmutc_titleWidget_selected');

            $('#vmutc_titleWidgetBackgroundColor').spectrum('set', $('#' + widgetID).attr('data-titlebackcolorhover'));
            $('#vmutc_titleWidgetBorderColor').spectrum('set', $('#' + widgetID).attr('data-titlebordercolorhover'));
            $('#vmutc_titleWidgetFontColor').spectrum('set', $('#' + widgetID).attr('data-titlefontcolorhover'));

            var type = $('#' + widgetID).attr('data-animatortype');
            var start = $('#' + widgetID).attr('data-animatorstart');
            var end = $('#' + widgetID).attr('data-animatorend');
            var duration = $('#' + widgetID).attr('data-animatorduration');
            var easeCode = $('#' + widgetID).attr('data-animatoreasecode');
            var ease = $('#' + widgetID).attr('data-animatorease');
            var reverse = $('#' + widgetID).attr('data-animatorreverse');
            var scrub = $('#' + widgetID).attr('data-animatorscrub');

       //     updateAnimatorValues(widgetID, type, start, 'vmutc_titleContainer', duration, easeCode, ease, reverse, scrub, end);

        }




        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('titletag', $('#' + widgetID).attr('data-titletag'));
            localStorage.setItem('titletext', $('#' + widgetID).attr('data-titletext'));
            localStorage.setItem('titlelink', $('#' + widgetID).attr('data-titlelink'));
            localStorage.setItem('titlealign', $('#' + widgetID).attr('data-titlealign'));
            localStorage.setItem('titlegradientused', $('#' + widgetID).attr('data-titlegradientused'));
            localStorage.setItem('titlegradientangle', $('#' + widgetID).attr('data-titlegradientangle'));
            localStorage.setItem('titlegradienthandlers', $('#' + widgetID).attr('data-titlegradienthandlers'));
            localStorage.setItem('titlegradient', $('#' + widgetID).attr('data-titlegradient'));
            localStorage.setItem('titlestyle', $('#' + widgetID).attr('data-style'));
            localStorage.setItem('titlebackcolorhover', $('#' + widgetID).attr('data-titlebackcolorhover'));
            localStorage.setItem('titlebordercolorhover', $('#' + widgetID).attr('data-titlebordercolorhover'));
            localStorage.setItem('titlefontcolorhover', $('#' + widgetID).attr('data-titlefontcolorhover'));

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

            var tag = localStorage.getItem('titletag');
            $('#' + widgetID + ' .vmutc_titleWidget').each(function () {
                var content = $("<" + tag + ">");
                var html = $('#' + widgetID + ' .vmutc_titleWidget').html();
                $(content).html(html);

                $.each(this.attributes, function () {
                    content.attr(this.name, this.value);
                });
                $(this).replaceWith(content);
            });
            $('#' + widgetID).attr('data-titletag', localStorage.getItem('titletag'));
            $('#' + widgetID).attr('data-titletext', localStorage.getItem('titletext'));
            $('#' + widgetID + ' .vmutc_titleWidget ').attr('data-titletext', localStorage.getItem('titletext'));

            $('#' + widgetID).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center');
            if (localStorage.getItem('titlealign') == 'left')
                $('#' + widgetID).addClass('vmutc_align_left');
            if (localStorage.getItem('titlealign') == 'right')
                $('#' + widgetID).addClass('vmutc_align_right');
            if (localStorage.getItem('titlealign') == 'center')
                $('#' + widgetID).addClass('vmutc_align_center');

            var currentStyle = $('#' + widgetID).attr('data-style');
            var oldstyle = localStorage.getItem('titlestyle');

            $('#' + widgetID + ' .vmutc_titleWidget ').removeClass('vmutc_titleWidgetStyle vmutc_title' + currentStyle);
            $('#' + widgetID + ' .vmutc_titleWidget ').addClass('vmutc_titleWidgetStyle vmutc_title' + oldstyle);
            $('#' + widgetID).attr('data-style', localStorage.getItem('titlestyle'));

            $('#' + widgetID).attr('data-titlegradientused', localStorage.getItem('titlegradientused'));
            $('#' + widgetID).attr('data-titlegradientangle', localStorage.getItem('titlegradientangle'));
            $('#' + widgetID).attr('data-titlegradienthandlers', localStorage.getItem('titlegradienthandlers'));
            $('#' + widgetID).attr('data-titlegradient', localStorage.getItem('titlegradient'));

            if (localStorage.getItem('titlegradientused') == '1') {
                var gradient = localStorage.getItem('titlegradient');
                $('#' + widgetID + ' .vmutc_titleWidget').addClass('vmutc_gradientTitle').css({
                    'background-image': gradient,
                    '-webkit-background-clip': 'text'
                });
            } else {
                $('#' + widgetID + ' .vmutc_titleWidget').removeClass('vmutc_gradientTitle');
            }

            var link = localStorage.getItem('titlelink');
            $('#' + widgetID).attr('data-titlelink', link);
            if (link != '') {
                $('#' + widgetID).find('.vmutc_titleWidgetLink').remove();
                $('#' + widgetID + ' .vmutc_titleWidget').append('<a class="vmutc_titleWidgetLink" href="' + link + '"></a>');
            } else {
                $('#' + widgetID).find('.vmutc_titleWidgetLink').remove();
            }

            var backColor = localStorage.getItem('titlebackcolorhover');
            var borderColor = localStorage.getItem('titlebordercolorhover');
            var fontColor = localStorage.getItem('titlefontcolorhover');
            $('#vmutc_titleWidgetStyle_' + widgetID).html('#' + widgetID + ' .vmutc_titleWidgetStyle.vmutc_title' + oldstyle + ':hover:after {border-color:' + borderColor + ';background-color:' + backColor + ';color:' + fontColor + '}');

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

        //    updateAnimatorValues(widgetID, type, start, 'vmutc_titleContainer', duration, easecode, ease, reverse, scrub, end);

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