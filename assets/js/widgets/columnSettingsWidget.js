var columngradientPicker = false;
var columnallHandlersObj = {};
var columnHeight = false;
var columnrealParallaxDuration = false;
jQuery(document).ready(
    function ($) {
         $(document).on('click', '.gridstack-column-open', function (e) {
            var whatColumn = $(this).attr('data-id');
            var whatRow = $('#' + whatColumn).closest('.grid-stack').attr('id');
            $('#vmutc_block_id').val(whatRow);
            $('#vmutc_blockColumn_id').val(whatColumn);
            e.preventDefault();
            $(this).closest('.gridstack-column-toolbar').toggleClass('open');
        });
        $(document).on('click', '.gridstack-paste-widget', function (e) {
            var whatColumn = $(this).attr('data-id');
            var whatRow = $('#' + whatColumn).closest('.grid-stack').attr('id');
            $('#vmutc_block_id').val(whatRow);
            $('#vmutc_blockColumn_id').val(whatColumn);
            e.preventDefault();
            var clonedWidget = localStorage.getItem('clonedWidget');
           
            $('#' + whatColumn+' .gridstack-column-toolbar').after(clonedWidget);
            var whatWidgetType = $('#' + whatColumn).find('.gridstackWidget').attr('data-what');
            var widgetID = $('#' + whatColumn).find('.gridstackWidget').attr('id');
            switch (whatWidgetType) {
                case 'accordion':
                    $('#' + widgetID + ' .vmutc-accordion').on('click', function () {
                        this.classList.toggle("activeAccordion");
                        var panel = this.nextElementSibling;
                        if ($(this).hasClass('activeAccordion')) {
                            panel.style.height = 'auto';
                        } else {
                            panel.style.height = 0;
                        }
                    });
                    break;
                case 'tab':
                    $('#' + widgetID + ' .vmutc-tabs li').on('click', 'a', function (e) {
                        var parentContainer = $(this).closest('.vmutc_tab_container');
                        var tab = $(this).parent();
                        var index = tab.attr('data-index');
                        parentContainer.find('.active').removeClass('active');
                        tab.addClass('active');
                        parentContainer.find('.vmutc-tab-pane[data-index="' + index + '"]').addClass('active');
                    });
                    break;
                case 'counter':
                    //    var radius = $('#' + widgetID).attr('data-radius');
                    var strokeColorIn = $('#' + widgetID).attr('data-strokecolorin');
                    var strokeColorOut = $('#' + widgetID).attr('data-strokecolorout');
                    var strokeWidth = $('#' + widgetID).attr('data-strokewidth');
                    var counterValue = parseInt($('#' + widgetID).attr('data-countervalue'));
                    var counterMaxValue = parseInt($('#' + widgetID).attr('data-countermaxvalue'));
                    var counterPercent = $('#' + widgetID).attr('data-counterpercent');
                    var counterSpeed = $('#' + widgetID).attr('data-counterspeed');
                    if (counterPercent == '') {
                        counterSVG[counterid + '_circle'] = Circles.create({
                            id: widgetID + '_circle',
                            value: parseInt(counterValue),
                            maxValue: parseInt(counterMaxValue),
                            radius: parseInt(getCounterSVGWidth(widgetID, 2)),
                            width: parseInt(strokeWidth),
                            duration: parseInt(counterSpeed),
                            colors: [strokeColorIn, strokeColorOut]
                        });
                    } else {
                        counterSVG[counterid + '_circle'] = Circles.create({
                            id: widgetID + '_circle',
                            value: parseInt(counterValue),
                            maxValue: parseInt(counterMaxValue),
                            radius: parseInt(getCounterSVGWidth(widgetID, 2)),
                            width: parseInt(strokeWidth),
                            duration: parseInt(counterSpeed),
                            colors: [strokeColorIn, strokeColorOut],
                            text: function (value) {
                                return value + '%';
                            }
                        });
                    }
                    break;
                case 'countdown':
                    var initCount = new Date($('#' + widgetID).attr('data-countdown'));
                    $('#' + widgetID + ' .countdownWidget_countdown').countdown(initCount, function (e) {
                        $(this).html(e.strftime('%D days %H:%M:%S'));
                    });
                    break;
                case 'countdowncustom':
                    var initCount = new Date($('#' + widgetID).attr('data-countdowncustom'));
                    var currentDate = new Date();
                    var diff = initCount.getTime() / 1000 - currentDate.getTime() / 1000;
                    $('#' + widgetID + ' .countdownCustomWidget_countdownCustom').FlipClock(diff, {
                        clockFace: 'DailyCounter',
                        countdown: true,
                        language: $('#vmutc_lang').val()
                    });
                    break;
                case 'countercustom':
                    var start = $('#' + widgetID).attr('data-countercustom');
                    var end = $('#' + widgetID).attr('data-countercustomend');
                    var speed = $('#' + widgetID).attr('data-countercustomspeed');
                    var increment = Boolean(parseInt($('#' + widgetID).attr('data-countercustomincrement')));
                    clock[widgetID] = new FlipClock($('#' + widgetID + ' .counterCustomWidget_counterCustom'), start, {
                        clockFace: 'Counter',
                        autoStart: true,
                        countdown: increment,
                        interval: speed,
                        language: $('#vmutc_lang').val(),
                        callbacks: {
                            interval: function () {
                                var time = this.factory.getTime().time;
                                if (increment && time - 1 == end) {
                                    this.stop();
                                } else if (!increment && time + 1 == end) {
                                    this.stop();
                                }
                            }
                        }
                    });
                    break;
                case 'counterup':
                    var counterUpEl = $('#' + widgetID + ' .vmutc_counterUp');
                    counterUp(counterUpEl[0], {
                        duration: $('#' + widgetID).attr('data-counterupspeed'),
                        delay: 16
                    });
                    break;
                case 'swiperSlider':
                    var mode = $('#' + widgetID).attr('data-swiperslidermode');
                    var speed = parseInt($('#' + widgetID).attr('data-swipersliderspeed'), 10);
                    var delay = parseInt($('#' + widgetID).attr('data-swipersliderdelay'), 10);
                    if (delay == 0)
                        delay = false;
                    else
                        delay = {
                            delay: delay,
                        };
                    var view = parseInt($('#' + widgetID).attr('data-swipersliderview'), 10);
                    var space = parseInt($('#' + widgetID).attr('data-swipersliderspace'), 10);
                    swiperSlider[widgetID] = new Swiper('.swiper-container', {
                        autoplay: delay,
                        autoHeight: true,
                        effect: mode,
                        observer: true,
                        observeParents: true,
                        loop: true,
                        speed: speed,
                        slidesPerView: view,
                        spaceBetween: space,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    });
                    break;
                case 'particles':
                    updateParticle(widgetID);
                    break;
                case 'flyingCharacters':
                    var text = $('#' + widgetID).attr('data-flyingcharacterstext');
                    var repeat = $('#' + widgetID).attr('data-flyingcharactersrepeat');
                    var repeatDelay = $('#' + widgetID).attr('data-flyingcharactersrepeatdelay');
                    var yoyo = $('#' + widgetID).attr('data-flyingcharactersyoyo');
                    var stop = $('#' + widgetID).attr('data-flyingcharactersstop');
                    var whattype = $('#' + widgetID).attr('data-flyingcharacterswhat');
                    var align = $('#' + widgetID).attr('data-flyingcharactersalign');
                    var duration = $('#' + widgetID).attr('data-flyingcharactersduration');
                    var ease = $('#' + widgetID).attr('data-flyingcharacterseasecode');
                    var start = '0';
                    $('#' + widgetID).html('<span class="vmutc_flyingCharacters_split">' + text + '</span>');
                    flyingCharacters(widgetID, repeat, yoyo, repeatDelay, stop, start, align, whattype, duration, ease)
                    $('#' + widgetID).unbind();
                    break;
                case 'circularMenu':
                    var trigger = $('#' + widgetID).attr('data-trigger');
                    var triggercolorhover = $('#' + widgetID).attr('data-triggercolorhover');
                    var itemcolorhover = $('#' + widgetID).attr('data-itemcolorhover');
                    if (trigger == 'click') {
                        $('#' + widgetID + ' .circularMenuCenter').on('click', function (e) {
                            e.preventDefault();
                            $(e.target).closest('.circularMenu').toggleClass('circularMenuOpen');
                        });
                    }
                    if (trigger == 'mouseenter') {
                        $(document).on('mouseenter', '#' + widgetID + ' .circularMenuCenter', function () {
                            $(this).closest('.circularMenu').toggleClass('circularMenuOpen');
                        }).on('mouseleave', '#' + widgetID + ' .circularMenu', function () {
                            $(this).closest('.circularMenu').toggleClass('circularMenuOpen');
                        });
                    }
                    var circularMenuItems = $('#' + widgetID + ' .circularMenuItem');
                    for (var i2 = 0, l = circularMenuItems.length; i2 < l; i2++) {
                        circularMenuItems[i2].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i2 * Math.PI)).toFixed(4) + "%";
                        circularMenuItems[i2].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i2 * Math.PI)).toFixed(4) + "%";
                    }
                    break;
                case 'imagehotspot':
                    /*        var hotspot = $('#' + widgetID).find('.t_hotSpot');
                         
                            hotspot.each(function (i) {
                              var hotspotid = $(hotspot[i]).attr('id');
                              var pulsecolor = $(hotspot[i]).attr('data-pulsecolor');
                              var pluscolor = $(hotspot[i]).attr('data-pluscolor');
                              var backcolor = $(hotspot[i]).attr('data-backcolor');
                              $("<style type='text/css'>#" + imageHotSpotID + " .t_hotSpot[data-index='" + hotspotid + "']:after{border-color:" + pulsecolor + ";} </style>").appendTo("#vmutc_front_styles_container");
                              $("<style type='text/css'>#" + imageHotSpotID + " .t_hotSpot[data-index='" + hotspotid + "']:before{color:" + pluscolor + ";} </style>").appendTo("#vmutc_front_styles_container");
                              $("<style type='text/css'>#" + imageHotSpotID + " .t_hotSpot[data-index='" + hotspotid + "'] .t_tooltip_content_wrap{background-color:" + backcolor + ";} </style>").appendTo("#vmutc_front_styles_container");
                            });*/
                    break;
                case '':
                    break;
                default:
                    break;
            };
        });
        $(document).on('click', '.gridstack-column-settings', function (e) {
            var whatColumn = $(this).attr('data-id');
            var whatRow = $('#' + whatColumn).closest('.grid-stack').attr('id');
            $('#vmutc_block_id').val(whatRow);
            $('#vmutc_blockColumn_id').val(whatColumn);
            e.preventDefault();
            openColumnSettingsWidget(whatRow);
        });
        $(document).on('click', '.gridstack-addWidget', function (e) {
            var whatColumn = $(this).attr('data-id');
            var whatRow = $('#' + whatColumn).closest('.grid-stack').attr('id');
            $('#vmutc_blockColumn_id').val(whatColumn);
            $('#vmutc_block_id').val(whatRow);
            e.preventDefault();
            Swal.fire({
                title: '<strong><u>'+cssmTranslate.vmutcwidgetselectortitle+'</u></strong>',
                html: $('#vmutc_openWidgets').html(),
                showCloseButton: false,
                showCancelButton: true,
                showConfirmButton: false,
                customClass: 'swal-widgets',
                width: 'auto',
                cancelButtonText: cssmTranslate.vmutccancel,
                customClass: 'openWidgetsSwal'
            }), $(".swal2-popup").draggable({
                cursor: "move",
            });
        });
        $(document).on('click', '.gridstack-column-remove', function (e) {
            var whatColumn = $(this).attr('data-id');
            var whatRow = $('#' + whatColumn).closest('.grid-stack').attr('id');
            $('#vmutc_block_id').val(whatRow);
            $('#vmutc_blockColumn_id').val(whatColumn);
            e.preventDefault();
            Swal.fire({
                title: cssmTranslate.vmutcconfirm,
                text: cssmTranslate.vmutcconfirm2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: cssmTranslate.vmutcyesdelete,
                cancelButtonText: cssmTranslate.vmutccancel,
                customClass: {
                    container: 'always-on-top'
                }
            }).then((result) => {
                if (result.value) {
                    gridstack[whatRow].removeWidget($('#' + whatColumn));
                    updateSectionBackground(whatRow);
                } else {
                    return false;
                }
            });
        });
        Dropzone.options.vmutcuploadcolumnbackgroundropzone = {
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
                this.on("addedfile", function (file) {
                }, this.on("success", function (file) {
                    $('#vmutc_columnBackgroundImage_input').val(file['name']).trigger("change");
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
        Dropzone.options.vmutcuploadcolumnbackgroundvideodropzone = {
            url: cssm_front_ajax_object.ajaxurl + '?security=' + cssm_front_ajax_object.security + '&id_theme=' + $('#cssm_id_theme').val() + '&action=uploadVideo',
            uploadMultiple: false,
            acceptedFiles: 'video/mp4',
            addRemoveLinks: true,
            dictDefaultMessage: cssmTranslate.vmutcdropzoneupload,
            dictRemoveFile: cssmTranslate.vmutcdropzoneremove,
            removedfile: function (file) {
                var filename = file.name;
                var values = {
                    id_theme: $('#cssm_id_theme').val(),
                    security: cssm_front_ajax_object.security,
                    action: 'deleteVideo',
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
                this.on("addedfile", function (file) {
                }, this.on("success", function (file) {
                    $('#vmutc_columnBackgroundVideo_input').val(file['name']).trigger("change");
                    if ($('#openBackgroundVideoGalleryDialog').is(':visible')) {
                        $('#openBackgroundVideoGallery').dialog('destroy').remove();
                        if ($('div .popup_block').is(':visible'))
                            $('div .popup_block').hide();
                        $('div .popup_block a.closePopup').remove();
                        $('#vmutc_uploadcolumnBackgroundVideo').trigger('click');
                    }
                }));
            }
        };
        $("#vmutc_uploadcolumnBackgroundImage").click(function () {
            popID = $("#vmutc_uploadcolumnBackgroundImage").data("rel");
            popWidth = $("#vmutc_uploadcolumnBackgroundImage").data("width");
            var position = $("body").find("[aria-describedby='vmutc_columnSettingsContainer']").position();
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
        $("#vmutc_choosecolumnBackgroundImage").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundGalleryDialog').length)
                $('#openBackgroundGalleryDialog').remove();
            var tag = $('<div id="' + popID + '"></div>');
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundImage',
                what: 'column',
            };
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
        $("#vmutc_uploadcolumnBackgroundVideo").click(function () {
            popID = $("#vmutc_uploadcolumnBackgroundVideo").data("rel");
            popWidth = $("#vmutc_uploadcolumnBackgroundVideo").data("width");
            var position = $("body").find("[aria-describedby='vmutc_columnSettingsContainer']").position();
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
        $("#vmutc_choosecolumnBackgroundVideo").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundVideoGalleryDialog').length)
                $('#openBackgroundVideoGalleryDialog').remove();
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundVideo',
                what: 'column',
            };
            var tag = $('<div id="' + popID + '"></div>');
            $.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (data) {
                    tag.html(data).dialog({
                        modal: false,
                        title: 'Video Gallery',
                        width: popWidth,
                        height: 'auto',
                        position: {
                            my: 'right top',
                            at: 'right top',
                            of: 'body'
                        },
                        create: function (event) {
                            $(event.target).parent().css('position', 'fixed');
                            $('#openBackgroundVideoGallery').parent().attr('id', 'openBackgroundVideoGalleryDialog');
                        },
                        open: function () {
                            $(this).css('overflow', 'hidden');
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
      
        $("#vmutc_columnBackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                //        $('#vmutc_columnBackgroundColorStyle').html($('#' + what ).selector + "{background-color:" + color + ";}");
                $('#' + what).css('backgroundColor', color);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + what).attr('data-columnbackgroundcolor', color);
                //        $('#vmutc_columnBackgroundColorStyle').html($('#' + what ).selector + "{background-color:" + color + ";}");
                $('#' + what).css('backgroundColor', color);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                if (color != null) {
                    color = color.toRgbString();
                    $('#' + what).attr('data-columnbackgroundcolor', color);
                    //     $('#vmutc_columnBackgroundColorStyle').html($('#' + what ).selector + "{background-color:" + color + ";}");
                    $('#' + what).css('backgroundColor', color);
                } else {
                    color = 'transparent';
                    $('#' + what).attr('data-columnbackgroundcolor', '');
                    $('#' + what).css('backgroundColor', color);
                    //          $('#vmutc_columnBackgroundColorStyle').html($('#' + what ).selector + "{background-color:" + color + ";}");
                }
            }
        });
        $(document).on('change', '#vmutc_columnBackgroundImage_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columnbackgroundurl', $('#vmutc_columnBackgroundImage_input').val());
            if ($('#' + what).attr('data-columngradientused') == '1') {
                var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
                var columnallGradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
                $('#' + what).attr('data-columngradient', columnallGradientVendor);
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columnallGradientVendor + "important;" + "}");
            } else {
                $('#' + what).css({
                    'background-color': $('#' + what).attr('data-columnbackgroundcolor'),
                    'background-image': "url(" + baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val() + ")"
                });
                //     $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{background-color:" + $('#' + what).attr('data-columnbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val() + ") ;" + "}");
            }
          //  $('#openBackgroundGalleryDialog').remove();
        });
        $(document).on('click', '#vmutc_columnBackgroundImage_Remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columnbackgroundurl', '');
            $('#vmutc_columnBackgroundImage_input').val('');
            if ($('#' + what).attr('data-columngradientused') == '1') {
                var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
                var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + allcolumngradientVendor + "!important;" + "}");
            } else {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{background-color:" + $('#' + what).attr('data-columnbackgroundcolor') + ";background-image:none;" + "}");
              $('#' + what).css('background-image','');
            }
        });
        $(document).on('click', '#vmutc_columnBackgroundVideo_Remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#vmutc_columnBackgroundVideo_input').val('');
            $('#' + what).attr('data-columnbackgroundvideourl', '');
            $('#' + what).find(".vmutc_video_editorContainer").remove();
        });
        $(document).on('change', '#vmutc_columnBackgroundVideo_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var videoName = $('#vmutc_columnBackgroundVideo_input').val();
            $('#' + what).attr('data-columnbackgroundvideourl', videoName);
            $('#' + what).find('.vmutc_video_editorContainer').remove();
            $('#' + what).prepend('<div class="vmutc_video_editorContainer"><video autoplay loop src="' + baseDir + 'assets/img/video/' + videoName + '" alt="' + videoName + '" /></div>');
         //   $('#openBackgroundVideoGalleryDialog').remove();
        });
        $(document).on('change', '#vmutc_columnBackgroundMixBlend', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var mixBlend = $(this).val();
            $('#' + what).attr('data-columnbackgroundmixblend', mixBlend);
            $('#' + what + ' .grid-stack-item-content video').css("mix-blend-mode", mixBlend);
        });
        $(document).on('change', '#vmutc_columnBackgroundSize', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var size = $(this).val();
            $('#' + what).attr('data-columnbackgroundsize', size);
            if (size != 'size') {
                $('#' + what).css("background-size", size);
            } else {
                var height = $('#' + what).height();
                $('#' + what).css("background-size", '100% ' + height + 'px');
            }
        });
        $(document).on('change', '#vmutc_columnBackgroundRepeat', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columnbackgroundrepeat', $('#vmutc_columnBackgroundRepeat').val());
            $('#' + what).css("background-repeat", $('#vmutc_columnBackgroundRepeat').val());
        });
        $(document).on('change', '#vmutc_columnBackgroundPosition', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columnbackgroundposition', $('#vmutc_columnBackgroundPosition').val());
            $('#' + what).css("background-position", $('#vmutc_columnBackgroundPosition').val());
        });
        $(document).on('change', '#vmutc_columnBackgroundBlend', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columnbackgroundblend', $('#vmutc_columnBackgroundBlend').val());
            $('#' + what).css("background-blend-mode", $('#vmutc_columnBackgroundBlend').val());
        });
        $(document).on('change', '#vmutc_columngradientUsed', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#vmutc_displaycolumngradientValues').hide();
                $('#' + what).attr('data-columngradientused', 0);
                if ($('#' + what).attr('data-columnbackgroundurl') != '') {
                    $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{background-color:" + $('#' + what).attr('data-columnbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val() + ");" + "}");
                }
                if ($('#' + what).attr('data-columnbackgroundurl') == '') {
                    $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{background:" + $('#' + what).attr('data-columnbackgroundcolor') + "}");
                }
            } else {
                $('#vmutc_displaycolumngradientValues').show();
                $('#' + what).attr('data-columngradientused', 1);
                var columngradient = $('#' + what).attr('data-columngradient');
                if ($('#' + what).attr('data-columnbackgroundurl') != '') {
                    $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;" + "}");
                }
                if ($('#' + what).attr('data-columnbackgroundurl') == '') {
                    $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{background-color:" + $('#' + what).attr('data-columnbackgroundcolor') + ";" + columngradient + "!important;}");
                }
            }
        });
        columngradientPicker = new Grapick({
            el: '#vmutc_columngradientPicker',
            colorEl: '<input id="vmutc_columnBackgroundGradientColor">'
        });
        columngradientPicker.setColorPicker(handler => {
            var el = handler.getEl().querySelector('#vmutc_columnBackgroundGradientColor');
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
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
                    var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
                    $('#' + what).attr('data-columngradient', allcolumngradientVendor);
                    if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                        var columngradient = $('#' + what).attr('data-columngradient');
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;}");
                    }
                    if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "!important;}");
                    }
                },
                move(color) {
                    handler.setColor(color.toRgbString(), 0);
                    var what = $('#vmutc_blockColumn_id').val();
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
                    var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
                    $('#' + what).attr('data-columngradient', allcolumngradientVendor);
                    if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                        var columngradient = $('#' + what).attr('data-columngradient');
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;" + "}");
                    }
                    if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "!important;}");
                    }
                },
                hide(color) {
                    handler.setColor(color.toRgbString());
                    var what = $('#vmutc_blockColumn_id').val();
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
                    var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
                    $('#' + what).attr('data-columngradient', allcolumngradientVendor);
                    if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                        var columngradient = $('#' + what).attr('data-columngradient');
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;" + "}");
                    }
                    if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                        $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "!important;}");
                    }
                }
            });
        });
        columngradientPicker.on('change', complete => {
            var what = $('#vmutc_blockColumn_id').val();
            columnallHandlersObj = {};
            $('#' + what).attr('data-columngradient', columngradientPicker.getPrefixedValues().join(';'));
            var allHandlers = columngradientPicker.getHandlers();
            for (var i = 0; i < allHandlers.length; i++) {
                var position = Number.parseFloat(allHandlers[i].position).toFixed(2)
                columnallHandlersObj[position] = allHandlers[i].color;
            }
            $('#' + what).attr('data-columngradienthandlers', JSON.stringify(columnallHandlersObj));
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
            var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
            $('#' + what).attr('data-columngradient', allcolumngradientVendor);
            if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                var columngradient = $('#' + what).attr('data-columngradient');
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;" + "}");
            }
            if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "!important;}");
            }
        });
        $(document).on('change', '#vmutc_columngradientType', function () {
            columngradientPicker.setType(this.value);
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columngradienttype', this.value);
            if (this.value == 'linear' || this.value == 'repeating-linear') {
                $('#vmutc_columngradientPositionContainer').hide();
                $('#vmutc_columngradientAngle').val('90');
                columngradientAngle.noUiSlider.set(90);
                columngradientPicker.setDirection('90deg');
                $('#vmutc_columngradientAngleContainer').show();
            }
            if (this.value == 'radial' || this.value == 'repeating-radial') {
                $('#vmutc_columngradientAngleContainer').hide();
                $('#vmutc_columngradientPosition').val("center center");
                columngradientPicker.setDirection('center center');
                $('#vmutc_columngradientPositionContainer').show();
            }
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
            var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
            $('#' + what).attr('data-columngradient', allcolumngradientVendor);
            if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                var columngradient = $('#' + what).attr('data-columngradient');
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "!important;" + "}");
            }
            if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "important;}");
            }
        });
        $(document).on('change', '#vmutc_columngradientPosition', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-columngradientangle', this.value);
            columngradientPicker.setDirection(this.value);
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
            var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
            $('#' + what).attr('data-columngradient', allcolumngradientVendor);
            if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                var columngradient = $('#' + what).attr('data-columngradient');
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "important;" + "}");
            }
            if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "important;}");
            }
        });
        var columngradientAngle = document.getElementById('vmutc_columngradientAngle_slider');
        noUiSlider.create(columngradientAngle, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 360
            },
        });
        columngradientAngle.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var angle = Math.round(values);
            $('#vmutc_columngradientAngle').val(angle);
            $('#' + what).attr('data-columngradientangle', angle);
            columngradientPicker.setDirection(angle + 'deg');
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
            var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
            $('#' + what).attr('data-columngradient', allcolumngradientVendor);
            if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                var columngradient = $('#' + what).attr('data-columngradient');
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "important;" + "}");
            }
            if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "important;}");
            }
        });
        $(document).on('change', '#vmutc_columngradientAngle', function () {
            var what = $('#vmutc_blockColumn_id').val();
            columngradientAngle.noUiSlider.set(this.value);
            $('#' + what).attr('data-columngradientangle', this.value);
            columngradientPicker.setDirection(this.value + 'deg');
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_columnBackgroundImage_input').val();
            var allcolumngradientVendor = getColumnAllGradientVendor(link, columngradientPicker.getPrefixedValues());
            $('#' + what).attr('data-columngradient', allcolumngradientVendor);
            if ($('#' + what).attr('data-columnbackgroundurl') != '' && $('#' + what).attr('data-columngradientused') == '1') {
                var columngradient = $('#' + what).attr('data-columngradient');
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + columngradient + "important;" + "}");
            }
            if ($('#' + what).attr('data-columnbackgroundurl') == '' && $('#' + what).attr('data-columngradientused') == '1') {
                $('#vmutc_columnBackgroundColorStyle').html($('#' + what).selector + "{" + $('#' + what).attr('data-columngradient') + "important;}");
            }
        });
        $(document).on('change', '#vmutc_column_cssParallax', function () {
            Swal.fire({
                title: '<strong>Real Parallax Widget</strong>',
                icon: 'info',
                html:
                  'Only available with the Premium version !',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText:
                '<a href="//demo-css-magician-wp.presta-magician.com/realparallaxwidget" target="_blanck">'+cssmTranslate.seethatwidget+'</a>',
              });
        });
        columnrealParallaxDuration = document.getElementById('vmutc_column_realParallaxDuration_slider');
        noUiSlider.create(columnrealParallaxDuration, {
            start: 200,
            step: 1,
            range: {
                min: 0,
                max: 2000
            },
        });
        columnrealParallaxDuration.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var duration = Math.round(values);
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            $('#vmutc_column_realParallaxDuration').val(duration);
            $('#' + what).attr('data-columnrealparallaxDuration', duration);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
    
                ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });

        });
        $(document).on('change', '#vmutc_column_realParallaxDuration', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var duration = Math.round(this.value);
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            columnrealParallaxDuration.noUiSlider.set(duration);
            $('#' + what).attr('data-columnrealparallaxDuration', duration);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
                scrollMagicScene[what].removeIndicators().destroy(true);
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
                     ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        columnrealParallaxOffset = document.getElementById('vmutc_column_realParallaxOffset_slider');
        noUiSlider.create(columnrealParallaxOffset, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        columnrealParallaxOffset.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var offset = Math.round(values);;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            $('#vmutc_column_realParallaxOffset').val(offset);
            $('#' + what).attr('data-columnrealparallaxOffset', offset);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
             jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });
            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
                     ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        $(document).on('change', '#vmutc_column_realParallaxOffset', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var offset = this.value;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            columnrealParallaxOffset.noUiSlider.set(offset);
            $('#' + what).attr('data-columnrealparallaxOffset', offset);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
                  ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        $(document).on('change', '#vmutc_columnWidgetTypeFloat', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop('checked') == false) {
                $('#' + what).removeClass('disableCollision');
                $('#' + what).attr('data-columndisablecollision', 0);
            } else {
                $('#' + what).addClass('disableCollision');
                $('#' + what).attr('data-columndisablecollision', 1);
            }
        });
        columnZindex = document.getElementById('vmutc_columnWidgetZindex_slider');
        noUiSlider.create(columnZindex, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 89
            },
        });
        columnZindex.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var zindex = Math.round(values);
            $('#' + what).attr('data-columnzindex', zindex);
            $('#' + what).css('zIndex', zindex);
            $('#vmutc_columnWidgetZindex').val(zindex)
        });
        $(document).on('change', '#vmutc_columnWidgetZindex', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var zindex = this.value;
            $('#' + what).attr('data-columnzindex', zindex);
            $('#' + what).css('zIndex', zindex);
            columnZindex.noUiSlider.set(this.value);
        });
        ///////
        columnrealParallaxSizeX = document.getElementById('vmutc_column_realParallaxSizeX_slider');
        noUiSlider.create(columnrealParallaxSizeX, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        columnrealParallaxSizeX.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var sizeX = Math.round(values);;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            $('#vmutc_column_realParallaxSizeX').val(sizeX);
            $('#' + what).attr('data-columnrealparallaxsizex', sizeX);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
                   ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        $(document).on('change', '#vmutc_column_realParallaxSizeX', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var sizeX = this.value;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeY = $('#' + what).attr('data-columnrealparallaxsizey');
            columnrealParallaxSizeX.noUiSlider.set(sizeX);
            $('#' + what).attr('data-columnrealparallaxsizex', sizeX);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })

                 ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        ///////////
        columnrealParallaxSizeY = document.getElementById('vmutc_column_realParallaxSizeY_slider');
        noUiSlider.create(columnrealParallaxSizeY, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        columnrealParallaxSizeY.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var sizeY = Math.round(values);;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            $('#vmutc_column_realParallaxSizeY').val(sizeY);
            $('#' + what).attr('data-columnrealparallaxsizey', sizeY);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })

      
                ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
        $(document).on('change', '#vmutc_column_realParallaxSizeY', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var sizeY = this.value;
            var duration = $('#' + what).attr('data-columnrealparallaxDuration');
            var offset = $('#' + what).attr('data-columnrealparallaxOffset');
            var sizeX = $('#' + what).attr('data-columnrealparallaxsizex');
            columnrealParallaxSizeY.noUiSlider.set(sizeY);
            $('#' + what).attr('data-columnrealparallaxsizey', sizeY);
            if (typeof (backgroundTimeline[what]) != 'undefined') {
                backgroundTimeline[what].pause(0, true);
                backgroundTimeline[what].clear();
               jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[what] = new gsap.timeline();
            backgroundTimeline[what].set('#' + what, {
                x: 0,
                y: 0
            });

            backgroundTimeline[what].to('#' + what, {
                y: -sizeY + "px",
                x: sizeX + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })

               ScrollTrigger.create({
                    animation:  backgroundTimeline[what],
                    trigger:jQuery('#'+what),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                   end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:what+'-scrollTrigger'
                  });
        });
    });
////////

function openColumnSettingsWidget(sectionID) {
    jQuery('div.ui-dialog-content').dialog('close');
    var columnID = jQuery('#vmutc_blockColumn_id').val();
    saveColumnInitialValues(columnID);
    columnallHandlersObj = {};
    if (jQuery('#vmutc_columnBackgroundColorStyle').length == 0)
        jQuery("<style id='vmutc_columnBackgroundColorStyle' type='text/css'>}</style>").appendTo("#vmutc_styles_container");
    jQuery('#vmutc_columnBackgroundColor').spectrum('set', jQuery('#' + columnID).attr('data-columnbackgroundcolor'));
    jQuery('#vmutc_columnBackgroundImage_input').val(jQuery('#' + columnID).attr('data-columnbackgroundurl'));
    jQuery('#vmutc_columnBackgroundSize').val(jQuery('#' + columnID).attr('data-columnbackgroundsize'));
    jQuery('#vmutc_columnBackgroundRepeat').val(jQuery('#' + columnID).attr('data-columnbackgroundrepeat'));
    jQuery('#vmutc_columnBackgroundPosition').val(jQuery('#' + columnID).attr('data-columnbackgroundposition'));
    jQuery('#vmutc_columnBackgroundBlend').val(jQuery('#' + columnID).attr('data-columnbackgroundblend'));
    jQuery('#vmutc_columnBackgroundMixBlend').val(jQuery('#' + columnID).attr('data-columnbackgroundmixblend'));
    //  jQuery('#vmutc_columnHeight').val(jQuery('#' + columnID).attr('data-columnheight'));
    //  columnHeight.noUiSlider.set(jQuery('#' + columnID).attr('data-columnheight'));
    if (jQuery('#' + columnID).attr('data-columngradientused') == 1) {
        jQuery('#vmutc_columngradientUsed').prop('checked', true);
        jQuery('#vmutc_displaycolumngradientValues').show();
    } else {
        jQuery('#vmutc_columngradientUsed').prop('checked', false);
        jQuery('#vmutc_displaycolumngradientValues').hide();
    }
    if (jQuery('#' + columnID).attr('data-columndisablecollision') == 1) {
        jQuery('#vmutc_columnWidgetTypeFloat').prop('checked', true);
    } else {
        jQuery('#vmutc_columnWidgetTypeFloat').prop('checked', false);
    }
    jQuery('#vmutc_columnWidgetZindex').val(jQuery('#' + columnID).attr('data-columnzindex'));
    columnZindex.noUiSlider.set(jQuery('#' + columnID).attr('data-columnzindex'));
    jQuery('#vmutc_columngradientType').val(jQuery('#' + columnID).attr('data-columngradienttype'));
    if (jQuery('#vmutc_columngradientType').val() == 'linear' || jQuery('#vmutc_columngradientType').val() == 'repeating-linear') {
        jQuery('#vmutc_columngradientPositionContainer').hide();
        jQuery('#vmutc_columngradientAngleContainer').show();
    }
    if (jQuery('#vmutc_columngradientType').val() == 'radial' || jQuery('#vmutc_columngradientType').val() == 'repeating-radial') {
        jQuery('#vmutc_columngradientAngleContainer').hide();
        jQuery('#vmutc_columngradientPositionContainer').show();
    }
    jQuery('#vmutc_columngradientAngle').val(jQuery('#' + columnID).attr('data-columngradientangle'));
    var handlers = jQuery('#' + columnID).attr('data-columngradienthandlers');
    columngradientPicker.clear();
    if (typeof (handlers) != 'undefined' && handlers != '' && handlers != 'undefined') {
        handlers = JSON.parse(handlers);
        for (var property in handlers) {
            columngradientPicker.addHandler(property, handlers[property])
        }
    } else {
        columngradientPicker.addHandler(0, '#fff');
        columngradientPicker.addHandler(100, jQuery('#' + columnID).attr('data-columnbackgroundcolor'));
    }
    jQuery('#vmutc_columnBackgroundVideo_input').val(jQuery('#' + columnID).attr('data-columnbackgroundvideourl'));
    if (jQuery('#' + columnID).attr('data-columncssparallax') == 1) {
        jQuery('#vmutc_column_cssParallax').prop('checked', true);
    } else {
        jQuery('#vmutc_column_cssParallax').prop('checked', false);
    }
    if (jQuery('#' + columnID).attr('data-columnrealparallax') == 1) {
        jQuery('#vmutc_column_realParallax').prop('checked', true);
        jQuery('#vmutc_columnrealParallaxValuesContainer').show();
    } else {
        jQuery('#vmutc_column_realParallax').prop('checked', false);
        jQuery('#vmutc_columnrealParallaxValuesContainer').hide();
    }
    jQuery('#vmutc_column_realParallaxDuration').val(jQuery('#' + columnID).attr('data-columnrealparallaxDuration'));
    columnrealParallaxDuration.noUiSlider.set(jQuery('#' + columnID).attr('data-columnrealparallaxDuration'));
    jQuery('#vmutc_column_realParallaxOffset').val(jQuery('#' + columnID).attr('data-columnrealparallaxOffset'));
    columnrealParallaxOffset.noUiSlider.set(jQuery('#' + columnID).attr('data-columnrealparallaxOffset'));
    jQuery('#vmutc_column_realParallaxSizeX').val(jQuery('#' + columnID).attr('data-columnrealparallaxsizex'));
    columnrealParallaxSizeX.noUiSlider.set(jQuery('#' + columnID).attr('data-columnrealparallaxsizex'));
    jQuery('#vmutc_column_realParallaxSizeY').val(jQuery('#' + columnID).attr('data-columnrealparallaxsizey'));
    columnrealParallaxSizeY.noUiSlider.set(jQuery('#' + columnID).attr('data-columnrealparallaxsizey'));
 
    jQuery("#vmutc_columnSettingsContainer").dialog({
        autoOpen: false,
        modal: false,
        dialogClass: 'EditorContainer',
        width: '580',
        height: '900',
        resizable: false,
        title: cssmTranslate.columnwidgettitle,
        open: function (event, ui) {
            jQuery(".ui-dialog-titlebar-close").hide();
            jQuery(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="columnSettingsWidget" data-title="'+cssmTranslate.columnwidgethelp+'"></i>');
        },
        close: function () {
            jQuery(this).closest(".EditorContainer").find('.iconhelp').remove();
            jQuery(this).dialog('destroy');
        },
        buttons: {
            Cancel: {
                click: function () {
                    jQuery(this).dialog("close");
                    restoreColumnInitialValues(columnID);
                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                },
                text: cssmTranslate.vmutccancel,
                class: 'dialog-closeButton',
            },
            Save: {
                text: cssmTranslate.vmutcsave,
                click: function () {
                jQuery('*').removeClass('vmutc-selected vmutc-elementOver');
                var elementToSave = document.getElementById(sectionID);
                var clone = elementToSave.cloneNode(true);
                var admin_clone = clone;
                jQuery(admin_clone).css('transform', '');
                jQuery(admin_clone).find('.grid-stack-item').css('transform', '');
                jQuery(admin_clone).removeClass(function (index, className) {
                    return (className.match(/(^|\s)grid-stack-instance-\S+/g) || []).join(' ');
                });
                jQuery(admin_clone).removeClass('gridstack-editing');
                jQuery(admin_clone).attr('data-parent','')
                var front_clone = admin_clone;
                var admin_content = admin_clone.outerHTML;
                jQuery(front_clone).find('.gridstask-toolbar').remove();
                jQuery(front_clone).find('.gridstack-column-toolbar').remove();
                jQuery(front_clone).find('.editorToolBar').remove();
                var front_content = front_clone.outerHTML;
                var values = {
                    admin_content: admin_content,
                    front_content: front_content,
                    id_theme: jQuery('#cssm_id_theme').val(),
                    security: cssm_front_ajax_object.security,
                    id_block: sectionID,
                    parent: jQuery('#' + sectionID).attr('data-parent'),
                    where: jQuery('#' + sectionID).attr('data-where'),
                    what: jQuery('#' + sectionID).attr('data-what'),
                    whatClass: jQuery('#' + sectionID).attr('data-whatClass'),
                    style: jQuery('#' + sectionID).attr('style'),
                    action: 'saveBlock',
                };
                jQuery.ajax({
                    type: "POST",
                    url: cssm_front_ajax_object.ajaxurl,
                    data: values,
                    success: function (id) {
                        jQuery('#elementClose_' + sectionID).attr('data-index', id);
                        jQuery('#' + sectionID + ' .gridstack-save').hide();
                    }
                });
                jQuery(this).dialog("close");
                localStorage.clear();
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
        }
        }
    }), jQuery('.EditorContainer').draggable();
    jQuery("#vmutc_columnSettingsContainer").dialog("open");
}
function saveColumnInitialValues(columnID) {
    localStorage.setItem('columnbackgroundcolor', jQuery('#' + columnID).attr('data-columnbackgroundcolor'));
    localStorage.setItem('columnbackgroundurl', jQuery('#' + columnID).attr('data-columnbackgroundurl'));
    localStorage.setItem('columnbackgroundsize', jQuery('#' + columnID).attr('data-columnbackgroundsize'));
    localStorage.setItem('columnbackgroundrepeat', jQuery('#' + columnID).attr('data-columnbackgroundrepeat'));
    localStorage.setItem('columnbackgroundposition', jQuery('#' + columnID).attr('data-columnbackgroundposition'));
    localStorage.setItem('columnbackgroundblend', jQuery('#' + columnID).attr('data-columnbackgroundblend'));
    localStorage.setItem('columnbackgroundmixblend', jQuery('#' + columnID).attr('data-columnbackgroundmixblend'));
    localStorage.setItem('columngradientused', jQuery('#' + columnID).attr('data-columngradientused'));
    localStorage.setItem('columngradienttype', jQuery('#' + columnID).attr('data-columngradienttype'));
    localStorage.setItem('columngradientangle', jQuery('#' + columnID).attr('data-columngradientangle'));
    localStorage.setItem('columngradienthandlers', jQuery('#' + columnID).attr('data-columngradienthandlers'));
    localStorage.setItem('columngradient', jQuery('#' + columnID).attr('data-columngradient'));
    localStorage.setItem('columnbackgroundvideourl', jQuery('#' + columnID).attr('data-columnbackgroundvideourl'));
    localStorage.setItem('columncssparallax', jQuery('#' + columnID).attr('data-columncssparallax'));
    localStorage.setItem('columnrealparallax', jQuery('#' + columnID).attr('data-columnrealparallax'));
    localStorage.setItem('columnrealparallaxDuration', jQuery('#' + columnID).attr('data-columnrealparallaxDuration'));
    localStorage.setItem('columnrealparallaxOffset', jQuery('#' + columnID).attr('data-columnrealparallaxOffset'));
    localStorage.setItem('columnrealparallaxSizeX', jQuery('#' + columnID).attr('data-columnrealparallaxsizex'));
    localStorage.setItem('columnrealparallaxSizeY', jQuery('#' + columnID).attr('data-columnrealparallaxsizey'));
    localStorage.setItem('columndisablecollision', jQuery('#' + columnID).attr('data-columndisablecollision'));
    localStorage.setItem('columnzindex', jQuery('#' + columnID).attr('data-columnzindex'));
}
function restoreColumnInitialValues(columnID) {
    jQuery('#' + columnID).css({
            //   "height": localStorage.getItem('columnheight'),
            "background-size": localStorage.getItem('columnbackgroundsize'),
            "background-repeat": localStorage.getItem('columnbackgroundrepeat'),
            "background-position": localStorage.getItem('columnbackgroundposition'),
            "background-blend-mode": localStorage.getItem('columnbackgroundblend'),
            "mix-blend-mode": localStorage.getItem('columnbackgroundmixblend'),
            "background-color": localStorage.getItem('columnbackgroundcolor'),
            "z-index": localStorage.getItem('columnzindex'),
        })
        //    .attr('data-columnheight', localStorage.getItem('columnheight'))
        .attr('data-columnbackgroundsize', localStorage.getItem('columnbackgroundsize'))
        .attr('data-columnbackgroundrepeat', localStorage.getItem('columnbackgroundrepeat'))
        .attr('data-columnbackgroundposition', localStorage.getItem('columnbackgroundposition'))
        .attr('data-columnbackgroundblend', localStorage.getItem('columnbackgroundblend'))
        .attr('data-columnbackgroundmixblend', localStorage.getItem('columnbackgroundmixblend'))
        .attr('data-columngradientused', localStorage.getItem('columngradientused'))
        .attr('data-columnbackgroundurl', localStorage.getItem('columnbackgroundurl'))
        .attr('data-columngradient', localStorage.getItem('columngradient'))
        .attr('data-columngradienttype', localStorage.getItem('columngradienttype'))
        .attr('data-columngradienthandlers', localStorage.getItem('columngradienthandlers'))
        .attr('data-columngradientangle', localStorage.getItem('columngradientangle'))
        .attr('data-columnbackgroundvideourl', localStorage.getItem('columnbackgroundvideourl'))
        .attr('data-columncssparallax', localStorage.getItem('columncssparallax'))
        .attr('data-columnrealparallax', localStorage.getItem('columnrealparallax'))
        .attr('data-columnrealparallaxDuration', localStorage.getItem('columnrealparallaxDuration'))
        .attr('data-columnrealparallaxOffset', localStorage.getItem('columnrealparallaxOffset'))
        .attr('data-columnrealparallaxsizex', localStorage.getItem('columnrealparallaxSizeX'))
        .attr('data-columnrealparallaxsizey', localStorage.getItem('columnrealparallaxSizeY'))
        .attr('data-columndisablecollision', localStorage.getItem('columndisablecollision'))
        .attr('data-columnzindex', localStorage.getItem('columnzindex'))
    if (localStorage.getItem('columndisablecollision') == '1') {
        jQuery('#' + columnID).addClass('disableCollision');
    } else {
        jQuery('#' + columnID).removeClass('disableCollision');
    }
    if (localStorage.getItem('columngradientused') == '1') {
        if (localStorage.getItem('columnbackgroundurl') != '') {
            var columngradient = localStorage.getItem('columngradient');
            jQuery('#vmutc_columnBackgroundColorStyle').html(jQuery('#' + columnID).selector + "{" + columngradient + "important;}");
        } else {
            jQuery('#vmutc_columnBackgroundColorStyle').html(jQuery('#' + columnID).selector + "{background-color:" + jQuery('#' + what).attr('data-columnbackgroundcolor') + ";" + localStorage.getItem('columngradient') + "important;}");
        }
    } else {
        if (localStorage.getItem('columnbackgroundurl') != '') {
            jQuery('#vmutc_columnBackgroundColorStyle').html(jQuery('#' + columnID).selector + "{background-color:" + localStorage.getItem('columnbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + localStorage.getItem('columnbackgroundurl') + ")}");
        } else {
            jQuery('#vmutc_columnBackgroundColorStyle').html(jQuery('#' + columnID).selector + "{background-color:" + localStorage.getItem('columnbackgroundcolor') + ";background:" + localStorage.getItem('columnbackgroundcolor') + "}");
        }
    }
    if (localStorage.getItem('columnbackgroundvideourl') != '') {
        jQuery('#' + columnID).find(".vmutc_video_editorContainer").remove();
        jQuery('#' + columnID).prepend('<div class="vmutc_video_editorContainer"><video autoplay loop src="' + baseDir + 'assets/img/video/' + localStorage.getItem('columnbackgroundvideourl') + '" alt="' + localStorage.getItem('columnbackgroundvideourl') + '" /></div>');
    } else {
        jQuery('#' + columnID).find(".vmutc_video_editorContainer").remove();
    }
    if (localStorage.getItem('columncssparallax') == 1) {
        jQuery('#' + columnID).addClass('background_css_parallax');
    } else {
        jQuery('#' + columnID).removeClass('background_css_parallax');
    }
    if (localStorage.getItem('columnrealparallax') == 1) {
        var duration = localStorage.getItem('columnrealparallaxDuration');
        var offset = localStorage.getItem('columnrealparallaxOffset');
        var sizeX = localStorage.getItem('columnrealparallaxsizex');
        var sizeY = jQuery('#' + columnID).attr('data-columnrealparallaxsizey');
        jQuery('#' + columnID).css({
            'transform': 'none'
        });
        if (typeof (backgroundTimeline[columnID]) != 'undefined') {
            backgroundTimeline[columnID].pause(0, true);
            backgroundTimeline[columnID].clear();
         jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            backgroundTimeline[columnID] = new gsap.timeline();
            backgroundTimeline[columnID].set('#' + columnID, {
                x: 0,
                y: 0
            });
        } else
            backgroundTimeline[columnID] = new TimelineMax();
            backgroundTimeline[columnID].to('#' + columnID, {
                x: sizeX + "px",
                y: -sizeY + "px",
                ease: Linear.easeNone,
                duration: 0.1
            })
               ScrollTrigger.create({
                animation:  backgroundTimeline[columnID],
                trigger:jQuery('#'+columnID),
                toggleActions:'play none none none',
                start: offset+'px center',
               end:'+='+duration,
               markers:true,
               scrub:true,
               id:what+'-scrollTrigger'
              });
    } else {
        jQuery('#' + columnID).css({
            'left': '',
            'top': ''
        });
        if (typeof (backgroundTimeline[columnID]) != 'undefined') {
            backgroundTimeline[columnID].clear();
         jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
        }
    }
}
function getColumnAllGradientVendor(link, allGradientArray) {
    var allGradientString = "";
    for (i = 0; i < allGradientArray.length; i++) {
        gradient = allGradientArray[i];
        if (link != '')
            allGradientString += "background-image:url(" + link + ")," + gradient + ";";
        else
            allGradientString += "background:" + gradient + ";";
    }
    return allGradientString;
}