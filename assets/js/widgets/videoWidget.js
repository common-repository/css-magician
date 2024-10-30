jQuery(document).ready(
    function ($) {


        addWidgetButton('video', 'vmutc-create-addvideo', 'far fa-file-video', 'Simple Video','basic');

        $(document).on('click', '#vmutc-create-addvideo', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();

            var uniqueID = 'vmutc-videoID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditvideo elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="videoWidget gridstackWidget" data-parent="' + whatGrid + '" ' +
                'data-what="video" data-whatClass="videoWidget" ' +
                'data-videourl="" data-videocontrols="1" data-videoautoplay="0" data-videoloop="0" data-videomute="0" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '<div class="vmutc_video_editorContainer"></div>'
            '</div>';

            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });

        $(document).on('click', '.elementEditvideo', function () {
            $('div.ui-dialog-content').dialog('close');

            var videoID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(videoID);
            if ($('#vmutc_block_id').val() == '') {
                var sectionID = $('#' + videoID).closest('.sectionEnabled').attr('id');
                $('#vmutc_block_id').val(videoID);
            }

            createvideo(videoID);
            saveWidgetInitialValues(videoID);

            $("#vmutc_videoWidgetContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '620',
                height: '700',
                resizable: false,
                title: 'Video',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="videoWidget" data-title="' + cssmTranslate.videotitle + '"></i>');
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
                            restoreWidgetInitialValues(videoID);
                            $(this).dialog("close");
                            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                            var id_block = $('#' + videoID).attr('data-parent');

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
            $("#vmutc_videoWidgetContainer").dialog("open");
        });

        Dropzone.options.vmutcuploadvideowidgetdropzone = {
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
                    $('#vmutc_videoWidget_input').val(file['name']).trigger("change");
                    if ($('#openBackgroundVideoGalleryDialog').is(':visible')) {
                        $('#openBackgroundVideoGallery').dialog('destroy').remove();
                        if ($('div .popup_block').is(':visible'))
                            $('div .popup_block').hide();
                        $('div .popup_block a.closePopup').remove();
                        $('#vmutc_uploadvideoWidgetVideo').trigger('click');
                    }
                }));
            }
        };

        $("#vmutc_uploadvideoWidgetVideo").click(function () {
            popID = $("#vmutc_uploadvideoWidgetVideo").data("rel");
            popWidth = $("#vmutc_uploadvideoWidgetVideo").data("width");

            var position = $("body").find("#vmutc_videoWidgetContainer").position();

            if ($("#" + popID + ":visible").length == 0) {
                $("#" + popID).fadeIn().css({
                    "width": popWidth
                }).prepend('<a href="#" class="closePopup"><i class="fas fa-times btn_close"></i></a>');

                $("#" + popID).css({
                    "top": position.top,
                    "left": position.left + 300,
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

        $("#vmutc_choosevideoWidget_Video").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");


            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundVideo',
                what: 'videoWidget',
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
                        height: '800',
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

        $(document).on('click', '#vmutc_videoWidgetVideo_Remove', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#vmutc_videoWidget_input').val('');
            $('#' + what).attr('data-videourl', '');
            $('#' + what).find(".vmutc_video_editorContainer").html('');
        });

        $(document).on("change", '#vmutc_videoWidgetControls', function () {
            var what = $('#vmutc_blockColumn_id').val();

            if ($("#vmutc_videoWidgetControls").prop("checked") == true) {
                $('#' + what).attr('data-videocontrols', '1');
            } else {
                $('#' + what).attr('data-videocontrols', '0');
            }
            $('#vmutc_videoWidget_input').trigger('change');

        });

        $(document).on("change", '#vmutc_videoWidgetAutoplay', function () {
            var what = $('#vmutc_blockColumn_id').val();

            if ($("#vmutc_videoWidgetAutoplay").prop("checked") == true) {
                $('#' + what).attr('data-videoautoplay', '1');
            } else {
                $('#' + what).attr('data-videoautoplay', '0');
            }
            $('#vmutc_videoWidget_input').trigger('change');
        });

        $(document).on("change", '#vmutc_videoWidgetLoop', function () {
            var what = $('#vmutc_blockColumn_id').val();

            if ($("#vmutc_videoWidgetLoop").prop("checked") == true) {
                $('#' + what).attr('data-videoloop', '1');
            } else {
                $('#' + what).attr('data-videoloop', '0');
            }
            $('#vmutc_videoWidget_input').trigger('change');
        });

        $(document).on("change", '#vmutc_videoWidgetMute', function () {
            var what = $('#vmutc_blockColumn_id').val();

            if ($("#vmutc_videoWidgetMute").prop("checked") == true) {
                $('#' + what).attr('data-videomute', '1');
            } else {
                $('#' + what).attr('data-videomute', '0');
            }
            $('#vmutc_videoWidget_input').trigger('change');
        });


        $(document).on('change', '#vmutc_videoWidget_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var videoName = $('#vmutc_videoWidget_input').val();
            $('#' + what).attr('data-videourl', videoName);
            var youtubeReg = /(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i;
            var matchYoutube = videoName.match(youtubeReg);

            if (!matchYoutube) {
                var vimeoReg = /(vimeo(?:cdn|pro)?)\.com\/(?:(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+|staff\/frame)\/)?videos?)\/)?(\d+)(?:_(\d+)(?:x(\d+))?)?(\.\w+)?/i;
                var matchVimeo = videoName.match(vimeoReg);
            }

            if (!matchYoutube && !matchVimeo) {
                var dailymotionReg = /(?:\/video|ly)\/([A-Za-z0-9]+)/i;
                var matchDailymotion = videoName.match(dailymotionReg);
            }

            if ($("#vmutc_videoWidgetControls").prop("checked") == true) {
                var controls = 1;
            } else {
                var controls = 0;
            }

            if ($("#vmutc_videoWidgetAutoplay").prop("checked") == true) {
                var autoplay = 1;
            } else {
                var autoplay = 0;
            }
            if ($("#vmutc_videoWidgetLoop").prop("checked") == true) {
                var loop = 1;
            } else {
                var loop = 0;
            }
            if ($("#vmutc_videoWidgetMute").prop("checked") == true) {
                var mute = 1;
            } else {
                var mute = 0;
            }

            if (matchYoutube) {
                var element = $('#' + what).find(".vmutc_video_editorContainer");
                var youtubeUrl = 'https://www.youtube-nocookie.com/embed/';
                var youtubeID = '';

                youtubeID = matchYoutube[1];
                youtubeUrl = youtubeUrl + youtubeID + '?controls=' + controls + '&autoplay=' + autoplay + '&mute=' + mute + "&loop=" + loop + '&modestbranding=1';

                element.html('<iframe width="100%" height="100%" frameborder="0" src="' + youtubeUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

            } else if (matchVimeo) {
                var element = $('#' + what).find(".vmutc_video_editorContainer");
                var vimeoUrl = 'https://player.vimeo.com/video/';
                var vimeoID = '';

                vimeoID = matchVimeo[2];
                vimeoUrl = vimeoUrl + vimeoID + '?background=' + controls + '&autoplay=' + autoplay + '&muted=' + mute + "&loop=" + loop + '&dnt=1';

                element.html('<iframe src="' + vimeoUrl + '" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            } else if (matchDailymotion) {
                var element = $('#' + what).find(".vmutc_video_editorContainer");
                var dailymotionUrl = 'https://www.dailymotion.com/embed/video/';
                var dailymotionID = '';

                dailymotionID = matchDailymotion[1];
                dailymotionUrl = dailymotionUrl + dailymotionID + '?controls=' + controls + '&autoplay=' + autoplay + '&mute=' + mute + "&queue-enable=" + loop + '&ui-logo=0';;

                element.html('<iframe width="100%" height="100%" frameborder="0" src="' + dailymotionUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

            } else {
                if (controls == '1')
                    controls = 'controls ';
                else
                    controls = '';
                if (autoplay == '1')
                    autoplay = ' autoplay';
                else
                    autoplay = '';
                if (loop == '1')
                    loop = ' loop';
                else
                    loop = '';
                if (mute == '1')
                    muted = ' muted';
                else
                    mute = '';

                var parameters = controls + autoplay + loop + mute;

                $('#' + what).find(".vmutc_video_editorContainer").html('<video ' + parameters + ' src="' + baseDir + 'assets/img/video/' + videoName + '" alt="' + videoName + '" />');

            }
            //   $('#openBackgroundVideoGalleryDialog').remove();
        });

        $(document).on('change', '#vmutc_videoWidgetMixBlend', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var mixBlend = $(this).val();

            $('#' + what).attr('data-videowidgetmixblend', mixBlend);
            $('#' + what).css("mix-blend-mode", mixBlend);
        });


        function createvideo(widgetID) {
            $('#vmutc_videoWidget_input').val($('#' + widgetID).attr('data-videourl'));
            $('#vmutc_videoWidgetMixBlend').val($('#' + widgetID).attr('data-videowidgetmixblend'));
            var controls = $('#' + widgetID).attr('data-videocontrols');
            if (controls == '1')
                $("#vmutc_videoWidgetControls").prop("checked", true);
            else
                $("#vmutc_videoWidgetControls").prop("checked", false);

            var autoplay = $('#' + widgetID).attr('data-videoautoplay');
            if (autoplay == '1')
                $("#vmutc_videoWidgetAutoplay").prop("checked", true);
            else
                $("#vmutc_videoWidgetAutoplay").prop("checked", false);

            var loop = $('#' + widgetID).attr('data-videoloop');
            if (loop == '1')
                $("#vmutc_videoWidgetLoop").prop("checked", true);
            else
                $("#vmutc_videoWidgetLoop").prop("checked", false);

            var mute = $('#' + widgetID).attr('data-videomute');
            if (mute == '1')
                $("#vmutc_videoWidgetMute").prop("checked", true);
            else
                $("#vmutc_videoWidgetMute").prop("checked", false);

            var type = $('#' + widgetID).attr('data-animatortype');
            var start = $('#' + widgetID).attr('data-animatorstart');
            var end = $('#' + widgetID).attr('data-animatorend');
            var duration = $('#' + widgetID).attr('data-animatorduration');
            var easeCode = $('#' + widgetID).attr('data-animatoreasecode');
            var ease = $('#' + widgetID).attr('data-animatorease');
            var reverse = $('#' + widgetID).attr('data-animatorreverse');
            var scrub = $('#' + widgetID).attr('data-animatorscrub');

       //     updateAnimatorValues(widgetID, type, start, 'vmutc_videoWidgetContainer', duration, easeCode, ease, reverse, scrub, end);
        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('videourl', $('#' + widgetID).attr('data-videourl'));
            localStorage.setItem('videowidgetmixblend', $('#' + widgetID).attr('data-videowidgetmixblend'));
            localStorage.setItem('videocontrols', $('#' + widgetID).attr('data-videocontrols'));
            localStorage.setItem('videoautoplay', $('#' + widgetID).attr('data-videoautoplay'));
            localStorage.setItem('videoloop', $('#' + widgetID).attr('data-videoloop'));
            localStorage.setItem('videomute', $('#' + widgetID).attr('data-videomute'));

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
            var url = localStorage.getItem('videourl');
            var mixBlend = localStorage.getItem('videowidgetmixblend');
            var controls = localStorage.getItem('videocontrols');
            var autoplay = localStorage.getItem('videoautoplay');
            var loop = localStorage.getItem('videoloop');
            var mute = localStorage.getItem('videomute');

            $('#' + widgetID).attr('data-videourl', url);
            $('#' + widgetID).attr('data-videowidgetmixblend', mixBlend);
            $('#' + widgetID).attr('data-videocontrols', controls);
            $('#' + widgetID).attr('data-videoautoplay', autoplay);
            $('#' + widgetID).attr('data-videoloop', loop);
            $('#' + widgetID).attr('data-videomute', mute);

            $('#' + widgetID).css("mix-blend-mode", mixBlend);
            updateVideoIframe(widgetID);
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
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_videoWidgetContainer', duration, easecode, ease, reverse, scrub, end);
        }

        function updateVideoIframe(widgetID) {

            var videoName = $('#' + widgetID).attr('data-videourl');

            var youtubeReg = /(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i;
            var matchYoutube = videoName.match(youtubeReg);

            if (!matchYoutube) {
                var vimeoReg = /(vimeo(?:cdn|pro)?)\.com\/(?:(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+|staff\/frame)\/)?videos?)\/)?(\d+)(?:_(\d+)(?:x(\d+))?)?(\.\w+)?/i;
                var matchVimeo = videoName.match(vimeoReg);
            }

            if (!matchYoutube && !matchVimeo) {
                var dailymotionReg = /(?:\/video|ly)\/([A-Za-z0-9]+)/i;
                var matchDailymotion = videoName.match(dailymotionReg);
            }

            var controls = $('#' + widgetID).attr('data-videocontrols');
            var autoplay = $('#' + widgetID).attr('data-videoautoplay');
            var loop = $('#' + widgetID).attr('data-videoloop');
            var mute = $('#' + widgetID).attr('data-videomute');


            if (matchYoutube) {
                var element = $('#' + widgetID).find(".vmutc_video_editorContainer");
                var youtubeUrl = 'https://www.youtube-nocookie.com/embed/';
                var youtubeID = '';

                youtubeID = matchYoutube[1];
                youtubeUrl = youtubeUrl + youtubeID + '?controls=' + controls + '&autoplay=' + autoplay + '&mute=' + mute + "&loop=" + loop + '&modestbranding=1';

                element.html('<iframe width="100%" height="100%" frameborder="0" src="' + youtubeUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

            } else if (matchVimeo) {
                var element = $('#' + widgetID).find(".vmutc_video_editorContainer");
                var vimeoUrl = 'https://player.vimeo.com/video/';
                var vimeoID = '';

                vimeoID = matchVimeo[2];
                vimeoUrl = vimeoUrl + vimeoID + '?background=' + controls + '&autoplay=' + autoplay + '&muted=' + mute + "&loop=" + loop + '&dnt=1';

                element.html('<iframe src="' + vimeoUrl + '" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            } else if (matchDailymotion) {
                var element = $('#' + widgetID).find(".vmutc_video_editorContainer");
                var dailymotionUrl = 'https://www.dailymotion.com/embed/video/';
                var dailymotionID = '';

                dailymotionID = matchDailymotion[1];
                dailymotionUrl = dailymotionUrl + dailymotionID + '?controls=' + controls + '&autoplay=' + autoplay + '&mute=' + mute + "&queue-enable=" + loop + '&ui-logo=0';;

                element.html('<iframe width="100%" height="100%" frameborder="0" src="' + dailymotionUrl + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

            } else {
                if (controls == '1')
                    controls = 'controls ';
                else
                    controls = '';
                if (autoplay == '1')
                    autoplay = ' autoplay';
                else
                    autoplay = '';
                if (loop == '1')
                    loop = ' loop';
                else
                    loop = '';
                if (mute == '1')
                    muted = ' muted';
                else
                    mute = '';

                var parameters = controls + autoplay + loop + mute;

                $('#' + widgetID).find(".vmutc_video_editorContainer").html('<video ' + parameters + ' src="' + baseDir + 'assets/img/video/' + videoName + '" alt="' + videoName + '" />');

            }

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