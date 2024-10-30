var gradientPicker = false;
var allHandlersObj = {};
var sectionWidth = false;
var sectionHeight = false;
var sectionDividerWidth = false;
var sectionDividerHeight = false;
var sectionrealParallaxDuration = false;
var sectionParticleNumberSlider = false;
var sectionParticleDensitySlider = false;
var sectionParticleStrokeWidthSlider = false;
var sectionParticlePolygonNbSidesSlider = false;
var sectionParticleImageWidth = false;
var sectionParticleImageHeight = false;
var sectionParticlesSize = false;
var sectionParticlesSizeAnim = false;
var sectionParticlesMinSizeAnim = false;
var sectionParticleOpacityAnimSpeed = false;
var sectionParticleMinOpacityAnim = false;
var sectionParticleOpacityValue = false;
var sectionParticleLineDistance = false;
var sectionParticleLineOpacity = false;
var sectionParticleLineWidth = false;
var sectionParticleMoveSpeed = false;
var sectionParticleAttractRotateX = false;
var sectionParticleAttractRotateY = false;
var sectionParticleGrabDistance = false;
var sectionParticleGrabOpacity = false;
var sectionParticleBubbleDistance = false;
var sectionParticleBubbleOpacity = false;
var sectionParticleBubbleSize = false;
var sectionParticleBubbleDuration = false;
var sectionParticleRepulse = false;
jQuery(document).ready(
    function ($) {
        $('#vmutc-create-addSection').on('change', function () {
            $('.vmutc_temporary_block').remove();
        });
        $(document).on('click', '.gridstack-background', function () {
            var sectionID = $(this).attr('data-id');
            openSectionWidget(sectionID);
        });
        $(document).on('click', '.gridstack-open', function () {
            $(this).closest('.gridstask-toolbar').toggleClass('closed');
        });
        $(document).on('click', '.gridstack-fullwidth', function () {
            var whatSection = $(this).attr('data-id');
            $('#vmutc_block_id').val(whatSection);
            $('#' + whatSection).toggleClass('vmutc-fullwidth');
            if ($('#' + whatSection).find('.tsparticles-canvas-el').length) {
                  updateSectionParticle(whatSection);
            }
            updateSectionBackground(whatSection);
        });
        $(document).on('click', '.gridstack-remove', function () {
            var sectionID = $(this).attr('data-id');
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
                    removeSection(sectionID);
                } else {
                    return false;
                }
            });
        });
        $(document).on('click', '.gridstack-add-column', function (e) {
            var whatRow = $(this).attr('data-id');
            $('#vmutc_block_id').val(whatRow);
            var uniqueID = 'gridWidget_' + Math.random().toString(36).substr(2, 16);
            var widget = '<div id="' + uniqueID + '" class="grid-stack-item ui-draggable ui-resizable ui-resizable-autohide" data-parent="' + whatRow + '" data-where="' + whatRow + '"> ' +
                '<div class="gridstack-column-toolbar" data-id="' + uniqueID + '">' +
                '<a title="'+cssmTranslate.gridstackcolumnsettings+'" class="gridstack-column-settings" data-id="' + uniqueID + '"><i class="fas fa-cog"></i></a>' +
                '<a title="'+cssmTranslate.gridstackcolumnadd+'" class="gridstack-addWidget" data-id="' + uniqueID + '"><i class="fas fa-magic"></i></a>' +
                '<a title="'+cssmTranslate.gridstackcolumnpaste+'" class="gridstack-paste-widget" data-id="' + uniqueID + '"><i class="fas fa-copy"></i></a>' +
                '<a title="'+cssmTranslate.gridstackcolumnremove+'" class="gridstack-column-remove" data-id="' + uniqueID + '"><i class="fas fa-trash"></i></a></div>' +
                '<div class="grid-stack-item-content ui-draggable-handle"></div>';
            gridstack[whatRow].batchUpdate();
            var options = {
                width: 3,
                height: 3,
                id: uniqueID
            };
            gridstack[whatRow].addWidget(widget, options);
            gridstack[whatRow].commit();
            $('#' + uniqueID).attr('data-gs-auto-position', "false");
            $('#' + uniqueID).attr('data-columnheight', '')
                .attr('data-columnbackgroundcolor', 'rgba(255, 255, 255, 0)')
                .attr('data-columnbackgroundsize', '')
                .attr('data-columnbackgroundrepeat', '')
                .attr('data-columnbackgroundposition', '')
                .attr('data-columnbackgroundblend', '')
                .attr('data-columnbackgroundmixblend', '')
                .attr('data-columngradientused', '')
                .attr('data-columnbackgroundurl', '')
                .attr('data-columngradient', '')
                .attr('data-columngradienttype', '')
                .attr('data-columngradienthandlers', '')
                .attr('data-columngradientangle', '')
                .attr('data-columnbackgroundvideourl', '')
                .attr('data-columncssparallax', '0')
                .attr('data-columnrealparallax', '0')
                .attr('data-columnrealparallaxDuration', '100')
                .attr('data-columnrealparallaxOffset', '0')
                .attr('data-columnrealparallaxsizex', '0')
                .attr('data-columnrealparallaxsizey', '0')
                .attr('data-columnrealparallaxhorizontal','0')
                .attr('data-columnzindex', '0');
            updateSectionBackground(whatRow);
        });
        $(document).on('click', '.gridstack-save', function (e) {
            var id_block = $(this).attr('data-id');
            $('#vmutc_block_id').val(id_block);
            updateSectionBackground(id_block);
        });

        $(document).on('click', '.gridstack-publish', function (e) {
            var id_block = $(this).attr('data-id');
            $('#vmutc_block_id').val(id_block);
            $(this).find('i').toggleClass('fa-user fa-user-slash')
          if($(this).find('i').hasClass('fa-user'))
          {
              $('#'+id_block).attr('data-publish',1)
          }
          if($(this).find('i').hasClass('fa-user-slash'))
          {
              $('#'+id_block).attr('data-publish',0)
          }
          updateSectionBackground(id_block);
        });

        $(document).on('click', '.gridstack-languages', function (e) {
            Swal.fire({
                title: '<strong>Ho No !!</strong>',
                icon: 'info',
                html:
                  'That feature is only available with premium version !<br><br>' +
                  '<a href="https://presta-magician.com" target="_blanck">Buy now to translate your elements in all your languages.</a> ',
                showCloseButton: true,
                showCancelButton: true,
                showConfirmButton:false,
                focusConfirm: false,
               })
        });
        Dropzone.options.vmutcuploadsectionbackgroundropzone = {
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
                jQuery.ajax({
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
                    $('#vmutc_SectionBackgroundImage_input').val(file['name']).trigger("change");
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
        Dropzone.options.vmutcuploadsectionbackgroundvideodropzone = {
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
                jQuery.ajax({
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
                    $('#vmutc_SectionBackgroundVideo_input').val(file['name']).trigger("change");
                    if ($('#openBackgroundVideoGalleryDialog').is(':visible')) {
                        $('#openBackgroundVideoGallery').dialog('destroy').remove();
                        if ($('div .popup_block').is(':visible'))
                            $('div .popup_block').hide();
                        $('div .popup_block a.closePopup').remove();
                        $('#vmutc_uploadSectionBackgroundVideo').trigger('click');
                    }
                }));
            }
        };
        $("#vmutc_uploadSectionBackgroundImage").click(function () {
            popID = $("#vmutc_uploadSectionBackgroundImage").data("rel");
            popWidth = $("#vmutc_uploadSectionBackgroundImage").data("width");
            var position = $("body").find("[aria-describedby='vmutc_sectionContainer']").position();
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
        $("#vmutc_chooseSectionBackgroundImage").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundGalleryDialog').length)
                $('#openBackgroundGalleryDialog').remove();
            var tag = $('<div id="' + popID + '"></div>');
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundImage',
                what: 'block',
            };
            jQuery.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (data) {
                    tag.html(data).dialog({
                        modal: false,
                        title: 'Gallery',
                        width: popWidth,
                        height: '800',
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
        $("#vmutc_uploadSectionBackgroundVideo").click(function () {
            popID = $("#vmutc_uploadSectionBackgroundVideo").data("rel");
            popWidth = $("#vmutc_uploadSectionBackgroundVideo").data("width");
            var position = $("body").find("[aria-describedby='vmutc_sectionContainer']").position();
            if ($("#" + popID + ":visible").length == 0) {
                $("#" + popID).fadeIn().css({
                    "width": popWidth
                }).prepend('<a href="#" class="closePopup"><i class="fas fa-times btn_close"></i></a>');
                $("#" + popID).css({
                    "top": position.top,
                    "left": position.left,
                    "z-index": 1100000,
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
        $("#vmutc_chooseSectionBackgroundVideo").click(function () {
            popID = $(this).data("rel");
            popWidth = $(this).data("width");
            if ($('#openBackgroundVideoGalleryDialog').length)
                $('#openBackgroundVideoGalleryDialog').remove();
            var values = {
                id_theme: $('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundVideo',
                what: 'block',
            };
            var tag = $('<div id="' + popID + '"></div>');
            jQuery.ajax({
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
        $(document).on('mouseenter', '.grid-stack', function () {
            if ($('#vmutc_hide_ge_block').prop('checked') == false) {
                $(this).addClass('gridstack-editing');
            }
        }).on('mouseleave', '.grid-stack', function () {
            if ($('#vmutc_hide_ge_block').prop('checked') == false && ($('.EditorContainer').is(':hidden') || $('.EditorContainer').length == 0)) {
                $(this).removeClass('gridstack-editing');
                $('.editorToolBar').hide();
                $('*').removeClass('vmutc_widget_over');
            }
            $('*').removeClass('vmutc_widget_over');
        });
        sectionMarginLeft = document.getElementById('vmutc_sectionMargin_left');
        noUiSlider.create(sectionMarginLeft, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionMarginLeft.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginLeft = Math.round(values);
            $('#vmutc_sectionMargin_left_input').val(marginLeft);
            $('#' + sectionID).attr('data-sectionmarginleft', marginLeft).css('margin-left', marginLeft + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_right_input').val(marginLeft);
                $('#' + sectionID).attr('data-sectionmarginright', marginLeft).css('margin-right', marginLeft + 'px');
                sectionMarginRight.noUiSlider.set(marginLeft);
                $('#vmutc_sectionMargin_top_input').val(marginLeft);
                $('#' + sectionID).attr('data-sectionmargintop', marginLeft).css('margin-top', marginLeft + 'px');
                sectionMarginTop.noUiSlider.set(marginLeft);
                $('#vmutc_sectionMargin_bottom_input').val(marginLeft);
                $('#' + sectionID).attr('data-sectionmarginbottom', marginLeft).css('margin-bottom', marginLeft + 'px');
                sectionMarginBottom.noUiSlider.set(marginLeft);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionMargin_left_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginLeft = this.value;
            sectionMarginLeft.noUiSlider.set(this.value);
            if(marginLeft=='')
            marginLeft = 'auto';
            else
            marginLeft = marginLeft+'px';
            $('#' + sectionID).attr('data-sectionmarginleft', this.value).css('margin-left', marginLeft);
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_right_input').val(this.value);
                $('#' + sectionID).attr('data-sectionmarginright', this.value).css('margin-right', marginLeft);
                sectionMarginRight.noUiSlider.set(this.value);
                $('#vmutc_sectionMargin_top_input').val(this.value);
                $('#' + sectionID).attr('data-sectionmargintop', this.value).css('margin-top', marginLeft);
                sectionMarginTop.noUiSlider.set(this.value);
                $('#vmutc_sectionMargin_bottom_input').val(this.value);
                $('#' + sectionID).attr('data-sectionmarginbottom', this.value).css('margin-bottom', marginLeft);
                sectionMarginBottom.noUiSlider.set(this.value);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        sectionMarginRight = document.getElementById('vmutc_sectionMargin_right');
        noUiSlider.create(sectionMarginRight, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionMarginRight.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginRight = Math.round(values);
            $('#vmutc_sectionMargin_right_input').val(marginRight);
            $('#' + sectionID).attr('data-sectionmarginright', marginRight).css('margin-right', marginRight + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginRight);
                $('#' + sectionID).attr('data-sectionmarginleft', marginRight).css('margin-left', marginRight + 'px');
                sectionMarginLeft.noUiSlider.set(marginRight);
                $('#vmutc_sectionMargin_top_input').val(marginRight);
                $('#' + sectionID).attr('data-sectionmargintop', marginRight).css('margin-top', marginRight + 'px');
                sectionMarginTop.noUiSlider.set(marginRight);
                $('#vmutc_sectionMargin_bottom_input').val(marginRight);
                $('#' + sectionID).attr('data-sectionmarginbottom', marginRight).css('margin-bottom', marginRight + 'px');
                sectionMarginBottom.noUiSlider.set(marginRight);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionMargin_right_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginRightValue = this.value;
            if(marginRight=='')
            marginRight = 'auto';
            else
            marginRight = marginRightValue+'px';
            sectionMarginRight.noUiSlider.set(marginRightValue);
            $('#' + sectionID).attr('data-sectionmarginright', marginRightValue).css('margin-right', marginRight);
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginRightValue);
                $('#' + sectionID).attr('data-sectionmarginleft', marginRightValue).css('margin-left', marginRight);
                sectionMarginLeft.noUiSlider.set(marginRightValue);
                $('#vmutc_sectionMargin_top_input').val(marginRightValue);
                $('#' + sectionID).attr('data-sectionmargintop', marginRightValue).css('margin-top', marginRight);
                sectionMarginTop.noUiSlider.set(marginRightValue);
                $('#vmutc_sectionMargin_bottom_input').val(marginRightValue);
                $('#' + sectionID).attr('data-sectionmarginbottom', marginRightValue).css('margin-bottom', marginRight);
                sectionMarginBottom.noUiSlider.set(marginRightValue);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        sectionMarginTop = document.getElementById('vmutc_sectionMargin_top');
        noUiSlider.create(sectionMarginTop, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionMarginTop.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginTop = Math.round(values);
            $('#vmutc_sectionMargin_top_input').val(marginTop);
            $('#' + sectionID).attr('data-sectionmargintop', marginTop).css('margin-top', marginTop + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginleft', marginTop).css('margin-left', marginTop + 'px');
                sectionMarginLeft.noUiSlider.set(marginTop);
                $('#vmutc_sectionMargin_right_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginright', marginTop).css('margin-right', marginTop + 'px');
                sectionMarginRight.noUiSlider.set(marginTop);
                $('#vmutc_sectionMargin_bottom_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginbottom', marginTop).css('margin-bottom', marginTop + 'px');
                sectionMarginBottom.noUiSlider.set(marginTop);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionMargin_top_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginTop = this.value;
            sectionMarginTop.noUiSlider.set(marginTop);
            $('#' + sectionID).attr('data-sectionmargintop', marginTop).css('margin-top', marginTop + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginleft', marginTop).css('margin-left', marginTop + 'px');
                sectionMarginLeft.noUiSlider.set(marginTop);
                $('#vmutc_sectionMargin_right_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginright', marginTop).css('margin-right', marginTop + 'px');
                sectionMarginRight.noUiSlider.set(marginTop);
                $('#vmutc_sectionMargin_bottom_input').val(marginTop);
                $('#' + sectionID).attr('data-sectionmarginbottom', marginTop).css('margin-bottom', marginTop + 'px');
                sectionMarginBottom.noUiSlider.set(marginTop);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        sectionMarginBottom = document.getElementById('vmutc_sectionMargin_bottom');
        noUiSlider.create(sectionMarginBottom, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionMarginBottom.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginBottom = Math.round(values);
            $('#vmutc_sectionMargin_bottom_input').val(marginBottom);
            $('#' + sectionID).attr('data-sectionmarginbottom', marginBottom).css('margin-bottom', marginBottom + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmarginleft', marginBottom).css('margin-left', marginBottom + 'px');
                sectionMarginLeft.noUiSlider.set(marginBottom);
                $('#vmutc_sectionMargin_right_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmarginright', marginBottom).css('margin-right', marginBottom + 'px');
                sectionMarginRight.noUiSlider.set(marginBottom);
                $('#vmutc_sectionMargin_top_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmargintop', marginBottom).css('margin-top', marginBottom + 'px');
                sectionMarginTop.noUiSlider.set(marginBottom);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionMargin_bottom_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginBottom = this.value;
            sectionMarginBottom.noUiSlider.set(marginBottom);
            $('#' + sectionID).attr('data-sectionmarginbottom', marginBottom).css('margin-bottom', marginBottom + 'px');
            if ($('#vmutc_sectionMargin_all').prop('checked') == true) {
                $('#vmutc_sectionMargin_left_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmarginleft', marginBottom).css('margin-left', marginBottom + 'px');
                sectionMarginLeft.noUiSlider.set(marginBottom);
                $('#vmutc_sectionMargin_right_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmarginright', marginBottom).css('margin-right', marginBottom + 'px');
                sectionMarginRight.noUiSlider.set(marginBottom);
                $('#vmutc_sectionMargin_top_input').val(marginBottom);
                $('#' + sectionID).attr('data-sectionmargintop', marginBottom).css('margin-top', marginBottom + 'px');
                sectionMarginTop.noUiSlider.set(marginBottom);
            }
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        widgetMarginVertical = document.getElementById('vmutc_widgetMargin_vertical');
        noUiSlider.create(widgetMarginVertical, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        widgetMarginVertical.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginVertical = Math.round(values);
            $('#vmutc_widgetMargin_vertical_input').val(marginVertical);
            gridstack[sectionID].batchUpdate();
            gridstack[sectionID].verticalMargin(marginVertical);
            gridstack[sectionID].commit();
            $('#' + sectionID).attr('data-widgetmarginvertical', marginVertical);
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_widgetMargin_vertical_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginVertical = Math.round(this.value);
            widgetMarginVertical.noUiSlider.set(marginVertical);
            gridstack[sectionID].batchUpdate();
            gridstack[sectionID].verticalMargin(marginVertical);
            gridstack[sectionID].commit();
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        widgetMarginHorizontal = document.getElementById('vmutc_widgetMargin_horizontal');
        noUiSlider.create(widgetMarginHorizontal, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        widgetMarginHorizontal.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var marginHorizontal = Math.round(values);
            $('#vmutc_widgetMargin_horizontal_input').val(marginHorizontal);
            $('#' + sectionID).attr('data-widgetmarginhorizontal', marginHorizontal);
            $("<style type='text/css'>" + $('#' + sectionID + '.grid-stack > .grid-stack-item > .grid-stack-item-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
            $("<style type='text/css'>" + $('#' + sectionID + '.grid-stack .grid-stack-placeholder > .placeholder-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_widgetMargin_horizontal_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var marginHorizontal = this.value;
            widgetMarginHorizontal.noUiSlider.set(marginHorizontal);
            $('#' + sectionID).attr('data-widgetmarginhorizontal', marginHorizontal);
            $("<style type='text/css'>" + $('#' + sectionID + '.grid-stack > .grid-stack-item > .grid-stack-item-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
            $("<style type='text/css'>" + $('#' + sectionID + '.grid-stack .grid-stack-placeholder > .placeholder-content').selector + "{left:" + marginHorizontal + "px!important;} </style>").appendTo($("#vmutc_front_styles_container"));
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        sectionWidth = document.getElementById('vmutc_sectionWidth_slider');
        noUiSlider.create(sectionWidth, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionWidth.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var width = Math.round(values);
            $('#vmutc_sectionWidth').val(width);
            $('#' + sectionID).attr('data-sectionwidth', width).css('width', width + '%');
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionWidth', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionWidth.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionwidth', this.value).css('width', this.value + '%');
            if ($('#' + sectionID).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(sectionID);
            }
        });
        sectionHeight = document.getElementById('vmutc_sectionHeight_slider');
        noUiSlider.create(sectionHeight, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 2000
            },
        });
        sectionHeight.noUiSlider.on('slide', function (values, handle) {
            var section = $('#vmutc_block_id').val();
            var height = Math.round(values);
            $('#vmutc_sectionHeight').val(height);
            $('#' + section).css('height', height + 'px')
            $('#' + section).attr('data-sectionheight', height)
            if ($('#vmutc_SectionBackgroundImage_input').val() != '' && $('#vmutc_sectionBackgroundSize').val() == 'size') {
                $('#' + section).css('background-size', '100% ' + height + 'px');
            }
            if ($('#' + section).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(section);
            }
        });
        $(document).on('change', '#vmutc_sectionHeight', function () {
            var section = $('#vmutc_block_id').val();
            var height = this.value;
            sectionHeight.noUiSlider.set(this.value);
            if (height == '')
                formatedHeight = 'auto';
            else
                formatedHeight = height + 'px';
            $('#' + section).css('height', formatedHeight)
            $('#' + section).attr('data-sectionheight', height);
            if ($('#vmutc_SectionBackgroundImage_input').val() != '' && $('#vmutc_sectionBackgroundSize').val() == 'size') {
                $('#' + section).css('background-size', '100% ' + formatedHeight);
            }
            if ($('#' + section).find('.tsparticles-canvas-el').length) {
                updateSectionParticle(section);
            }
        });
        $('#vmutc_hide_ge_block').prop('checked', false);
        $(document).on('change', '#vmutc_hide_ge_block', function () {
            if ($(this).prop("checked") == true) {
                $('.grid-stack').removeClass('gridstack-editing');
                $('.grid-stack .ui-resizable-handle').css('opacity', 0);
            } else {
                $('.grid-stack').addClass('gridstack-editing');
                $('.grid-stack .ui-resizable-handle').css('opacity', 1);
            }
            $(this).blur();
        });
        $("#vmutc_sectionBackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                 $('#' + sectionID).css('background-color', color);
            },
            change: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + sectionID).attr('data-sectionbackgroundcolor', color);
                 $('#' + sectionID).css('background-color', color);
            },
            hide: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                $('#' + sectionID).attr('data-sectionbackgroundcolor', color);
                $('#' + sectionID).css('background-color', color);
            }
        });
        $(document).on('change', '#vmutc_SectionBackgroundImage_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var image_url = $('#vmutc_SectionBackgroundImage_input').val();
            if (image_url == '')
                image_url = 'none';
            $('#' + sectionID).attr('data-sectionbackgroundurl', image_url);
            if ($('#' + sectionID).attr('data-gradientused') == '1') {
                var link = baseDir + "assets/img/gallery/" + image_url;
                var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
                $('#' + sectionID).attr('data-gradient', allGradientVendor);
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;" + allGradientVendor + ";" + "}");
            } else {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;background-color:" + $('#' + sectionID).attr('data-sectionbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + image_url + ") ;" + "}");
            }
         });
        $(document).on('click', '#vmutc_sectionBackgroundImage_Remove', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionbackgroundurl', 'none');
            $('#vmutc_SectionBackgroundImage_input').val('');
            if ($('#' + sectionID).attr('data-gradientused') == '1') {
                var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
                var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;" + allGradientVendor + "!important;" + "}");
            } else {
                $('#' + sectionID ).css("background-image", "");
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;background-color:" + $('#' + sectionID).attr('data-sectionbackgroundcolor') + ";background-image:none;" + "}");
            }
        });
        $(document).on('click', '#vmutc_sectionBackgroundVideo_Remove', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#vmutc_SectionBackgroundVideo_input').val('');
            $('#' + sectionID).attr('data-sectionbackgroundvideourl', '');
            $('#' + sectionID).find(".vmutc_video_editorContainer").remove();
        });
        $(document).on('change', '#vmutc_SectionBackgroundVideo_input', function () {
            var sectionID = $('#vmutc_block_id').val();
            var videoName = $('#vmutc_SectionBackgroundVideo_input').val();
            $('#' + sectionID).attr('data-sectionbackgroundvideourl', videoName);
            $('#' + sectionID).find(' > .vmutc_video_editorContainer').remove();
            $('#' + sectionID).prepend('<div class="vmutc_video_editorContainer"><video autoplay loop src="' + baseDir + 'assets/img/video/' + videoName + '" alt="' + videoName + '" /></div>');
         });
        $(document).on('change', '#vmutc_sectionBackgroundSize', function () {
            var sectionID = $('#vmutc_block_id').val();
            var size = $(this).val();
            $('#' + sectionID).attr('data-sectionbackgroundsize', size);
            if (size != 'size') {
                $('#' + sectionID).css("background-size", size);
            } else {
                var height = $('#' + sectionID).outerHeight();
                $('#' + sectionID).css("background-size", '100% ' + height + 'px');
            }
        });
        $(document).on('change', '#vmutc_sectionBackgroundRepeat', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionbackgroundrepeat', $('#vmutc_sectionBackgroundRepeat').val());
            $('#' + sectionID).css("background-repeat", $('#vmutc_sectionBackgroundRepeat').val());
        });
        $(document).on('change', '#vmutc_sectionBackgroundPosition', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionbackgroundposition', $('#vmutc_sectionBackgroundPosition').val());
            $('#' + sectionID).css("background-position", $('#vmutc_sectionBackgroundPosition').val());
        });
        $(document).on('change', '#vmutc_sectionBackgroundBlend', function () {
            var sectionID = $('#vmutc_block_id').val();
            var blend = $(this).val();
            $('#' + sectionID).attr('data-sectionbackgroundblend', blend);
            $('#' + sectionID).css("background-blend-mode", blend);
        });
        $(document).on('change', '#vmutc_sectionBackgroundMixBlend', function () {
            var sectionID = $('#vmutc_block_id').val();
            var mixBlend = $(this).val();
            $('#' + sectionID).attr('data-sectionbackgroundmixblend', mixBlend);
            $('#' + sectionID + ' video').css("mix-blend-mode", mixBlend);
        });
        $(document).on('change', '#vmutc_gradientUsed', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#vmutc_displayGradientValues').hide();
                $('#' + sectionID).attr('data-gradientused', 0);
                if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none') {
                    $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;background-color:" + $('#' + sectionID).attr('data-sectionbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val() + ");" + "}");
                }
                if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none') {
                    $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{background-color:" + $('#' + sectionID).attr('data-sectionbackgroundcolor') + ";" + $('#' + sectionID).attr('data-gradient') + ";background-image:none;}");
                }
            } else {
                $('#vmutc_displayGradientValues').show();
                $('#' + sectionID).attr('data-gradientused', 1);
                if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none') {
                    var gradient = $('#' + sectionID).attr('data-gradient');
                    $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
                }
                if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none') {
                    $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{background:" + $('#' + sectionID).attr('data-sectionbackgroundcolor') + "}");
                }
            }
        });
        gradientPicker = new Grapick({
            el: '#vmutc_gradientPicker',
            colorEl: '<input id="vmutc_sectionBackgroundGradientColor">'
        });
        gradientPicker.setColorPicker(handler => {
            var el = handler.getEl().querySelector('#vmutc_sectionBackgroundGradientColor');
            $(el).spectrum({
                preferredFormat: "hex",
                color: handler.getColor(),
                showAlpha: true,
                showInput: true,
                showInitial: true,
                allowEmpty: true,
                change(color) {
                    handler.setColor(color.toRgbString());
                    var sectionID = $('#vmutc_block_id').val();
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
                    var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
                    $('#' + sectionID).attr('data-gradient', allGradientVendor);
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        var gradient = $('#' + sectionID).attr('data-gradient');
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%;" + gradient + "}");
                    }
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
                    }
                },
                move(color) {
                    handler.setColor(color.toRgbString(), 0);
                    var sectionID = $('#vmutc_block_id').val();
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
                    var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
                    $('#' + sectionID).attr('data-gradient', allGradientVendor);
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        var gradient = $('#' + sectionID).attr('data-gradient');
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
                    }
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
                    }
                },
                hide(color) {
                    handler.setColor(color.toRgbString());
                    var sectionID = $('#vmutc_block_id').val();
                    var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
                    var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
                    $('#' + sectionID).attr('data-gradient', allGradientVendor);
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        var gradient = $('#' + sectionID).attr('data-gradient');
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
                    }
                    if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                        $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
                    }
                }
            });
        });
        gradientPicker.on('change', complete => {
            var sectionID = $('#vmutc_block_id').val();
            allHandlersObj = {};
            $('#' + sectionID).attr('data-gradient', gradientPicker.getPrefixedValues().join(';'));
            var allHandlers = gradientPicker.getHandlers();
            for (var i = 0; i < allHandlers.length; i++) {
                var position = Number.parseFloat(allHandlers[i].position).toFixed(2)
                allHandlersObj[position] = allHandlers[i].color;
            }
            $('#' + sectionID).attr('data-gradienthandlers', JSON.stringify(allHandlersObj));
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
            var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
            $('#' + sectionID).attr('data-gradient', allGradientVendor);
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                var gradient = $('#' + sectionID).attr('data-gradient');
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
            }
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
            }
        });
        $(document).on('change', '#vmutc_gradientType', function () {
            gradientPicker.setType(this.value);
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-gradienttype', this.value);
            if (this.value == 'linear' || this.value == 'repeating-linear') {
                $('#vmutc_gradientPositionContainer').hide();
                $('#vmutc_gradientAngle').val('90');
                gradientAngle.noUiSlider.set(90);
                gradientPicker.setDirection('90deg');
                $('#vmutc_gradientAngleContainer').show();
            }
            if (this.value == 'radial' || this.value == 'repeating-radial') {
                $('#vmutc_gradientAngleContainer').hide();
                $('#vmutc_gradientPosition').val("center center");
                gradientPicker.setDirection('center center');
                $('#vmutc_gradientPositionContainer').show();
            }
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
            var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
            $('#' + sectionID).attr('data-gradient', allGradientVendor);
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                var gradient = $('#' + sectionID).attr('data-gradient');
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
            }
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
            }
        });
        $(document).on('change', '#vmutc_gradientPosition', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-gradientangle', this.value);
            gradientPicker.setDirection(this.value);
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
            var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
            $('#' + sectionID).attr('data-gradient', allGradientVendor);
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                var gradient = $('#' + sectionID).attr('data-gradient');
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
            }
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
            }
        });
        var gradientAngle = document.getElementById('vmutc_gradientAngle_slider');
        noUiSlider.create(gradientAngle, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 360
            },
        });
        gradientAngle.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var angle = Math.round(values);
            $('#vmutc_gradientAngle').val(angle);
            $('#' + sectionID).attr('data-gradientangle', angle);
            gradientPicker.setDirection(angle + 'deg');
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
            var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
            $('#' + sectionID).attr('data-gradient', allGradientVendor);
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                var gradient = $('#' + sectionID).attr('data-gradient');
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
            }
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
            }
        });
        $(document).on('change', '#vmutc_gradientAngle', function () {
            var sectionID = $('#vmutc_block_id').val();
            gradientAngle.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-gradientangle', this.value);
            gradientPicker.setDirection(this.value + 'deg');
            var link = baseDir + "assets/img/gallery/" + $('#vmutc_SectionBackgroundImage_input').val();
            var allGradientVendor = getAllGradientVendor(link, gradientPicker.getPrefixedValues());
            $('#' + sectionID).attr('data-gradient', allGradientVendor);
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') != 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                var gradient = $('#' + sectionID).attr('data-gradient');
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{width:100%; " + gradient + ";" + "}");
            }
            if ($('#' + sectionID).attr('data-sectionbackgroundurl') == 'none' && $('#' + sectionID).attr('data-gradientused') == '1') {
                $('#vmutc_sectionBackgroundColorStyle').html($('#' + sectionID).selector + "{" + $('#' + sectionID).attr('data-gradient') + "}");
            }
        });
        $(document).on('click', '.vmutc_section_divider_select', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var sectionID = $('#vmutc_block_id').val();
            var svg = $(this).children('svg');
            var width = $('#' + sectionID).outerWidth();
            $('.vmutc_section_divider_select').removeClass('vmutc_divider_selected');
            $(this).addClass('vmutc_divider_selected');
            if ($(this).attr('data-name') != 'none') {
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    if ($('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop').length == 0)
                        $('#' + sectionID).append('<div class="vmutc_sectionBackgroundDividerTop vmutc-notalign" />');
                    if (typeof (svg[0]) != 'undefined')
                        $('#' + sectionID).find('.vmutc_sectionBackgroundDividerTop').html(svg[0].outerHTML);
                    $('#' + sectionID).attr('data-sectiondividertopname', $(this).attr('data-name'));
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    if ($('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom').length == 0)
                        $('#' + sectionID).append('<div class="vmutc_sectionBackgroundDividerBottom vmutc-notalign" style="height:30px;" />');
                    if (typeof (svg[0]) != 'undefined')
                        $('#' + sectionID).find('.vmutc_sectionBackgroundDividerBottom').html(svg[0].outerHTML);
                    $('#' + sectionID).attr('data-sectiondividerbottomname', $(this).attr('data-name'));
                }
            } else {
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop').remove();
                    $('#' + sectionID).find('.vmutc_sectionBackgroundDividerTop').html('');
                    $('#' + sectionID).attr('data-sectiondividertopname', $(this).attr('data-name'));
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom').remove()
                    $('#' + sectionID).find('.vmutc_sectionBackgroundDividerBottom').html('');
                    $('#' + sectionID).attr('data-sectiondividerbottomname', $(this).attr('data-name'));
                }
            }
           });
        $(document).on('click', '#vmutc_divider_top_button', function () {
            var sectionID = $('#vmutc_block_id').val();
            $(this).addClass('active');
            $('#vmutc_divider_bottom_button').removeClass('active');
            $('.vmutc_section_divider_select svg').removeClass('svg_divider_rotateY vmutc_divider_bottom').addClass('svg_divider_rotateXY vmutc_divider_top');
            $(".vmutc_section_divider_select").removeClass('vmutc_divider_selected');
            $('#vmutc_section_divider_BackgroundColor').spectrum('set', $('#' + sectionID).attr('data-sectiondividertopfill'));
            sectionDividerWidth.noUiSlider.set($('#' + sectionID).attr('data-sectiondividertopviewboxwidth'));
            $('#vmutc_section_divider_width').val($('#' + sectionID).attr('data-sectiondividertopviewboxwidth'));
            sectionDividerHeight.noUiSlider.set($('#' + sectionID).attr('data-sectiondividertopheight'));
            $('#vmutc_section_divider_height').val($('#' + sectionID).attr('data-sectiondividertopheight'));
            var svgName = $('#' + sectionID).attr('data-sectiondividertopname');
            if (svgName != '')
                $(".vmutc_section_divider_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
            if ($('#' + sectionID).attr('data-sectiondividertopflip') == '1')
                $('#vmutc_section_divider_flip').prop('checked', true);
            else
                $('#vmutc_section_divider_flip').prop('checked', false);
                sectionDividerZindex.noUiSlider.set($('#' + sectionID).attr('data-sectiondividertopzindex'));
                $('#vmutc_section_divider_zindex').val($('#' + sectionID).attr('data-sectiondividertopzindex')); 
        });
        $(document).on('click', '#vmutc_divider_bottom_button', function () {
            var sectionID = $('#vmutc_block_id').val();
            $(this).addClass('active');
            $('#vmutc_divider_top_button').removeClass('active');
            $('.vmutc_section_divider_select svg').removeClass('svg_divider_rotateXY vmutc_divider_top').addClass('svg_divider_rotateY vmutc_divider_bottom');
            $(".vmutc_section_divider_select").removeClass('vmutc_divider_selected');
            $('#vmutc_section_divider_BackgroundColor').spectrum('set', $('#' + sectionID).attr('data-sectiondividerbottomfill'));
            sectionDividerWidth.noUiSlider.set($('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth'));
            $('#vmutc_section_divider_width').val($('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth'));
            sectionDividerHeight.noUiSlider.set($('#' + sectionID).attr('data-sectiondividerbottomheight'));
            $('#vmutc_section_divider_height').val($('#' + sectionID).attr('data-sectiondividerbottomheight'));
            var svgName = $('#' + sectionID).attr('data-sectiondividerbottomname');
            if (svgName != '')
                $(".vmutc_section_divider_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
            if ($('#' + sectionID).attr('data-sectiondividerbottomflip') == '1')
                $('#vmutc_section_divider_flip').prop('checked', true);
            else
                $('#vmutc_section_divider_flip').prop('checked', false);
                sectionDividerZindex.noUiSlider.set($('#' + sectionID).attr('data-sectiondividerbottomzindex'));
                $('#vmutc_section_divider_zindex').val($('#' + sectionID).attr('data-sectiondividerbottomzindex'));    
        });
        $("#vmutc_section_divider_BackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                color = color.toRgbString();
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividertopfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').attr('fill', color);
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividerbottomfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').attr('fill', color);
                }
            },
            change: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                color = color.toRgbString();
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividertopfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').attr('fill', color);
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividerbottomfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').attr('fill', color);
                }
            },
            hide: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                color = color.toRgbString();
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividertopfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').attr('fill', color);
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividerbottomfill', color);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').attr('fill', color);
                }
            }
        });
        sectionDividerHeight = document.getElementById('vmutc_section_divider_height_slider');
        noUiSlider.create(sectionDividerHeight, {
            start: 150,
            step: 1,
            range: {
                min: 0,
                max: 2000
            },
        });
        sectionDividerHeight.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var height = Math.round(values);
            $('#vmutc_section_divider_height').val(height);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopheight', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').css('height', height);
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomheight', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom').css('height', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').css('height', height);
            }
        });
        $(document).on('change', '#vmutc_section_divider_height', function () {
            var sectionID = $('#vmutc_block_id').val();
            var height = this.value;
            if (height == '')
                height = 30;
            $('#vmutc_section_divider_height').val(height);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopheight', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').css('height', height);
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomheight', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom').css('height', height);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').css('height', height);
            }
        });
     
        sectionDividerWidth = document.getElementById('vmutc_section_divider_width_slider');
        noUiSlider.create(sectionDividerWidth, {
            start: 1300,
            step: 1,
            range: {
                min: 1,
                max: 5000
            },
        });
        sectionDividerWidth.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var width = Math.round(values);
            $('#vmutc_section_divider_width').val(width);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopviewboxwidth', width);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth', width);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
        });
        $(document).on('change', '#vmutc_section_divider_width', function () {
            var sectionID = $('#vmutc_block_id').val();
            var width = this.value;
            if (width == '')
                width = 1300;
            $('#vmutc_section_divider_width').val(width);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopviewboxwidth', width);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth', width);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
        });
        $(document).on('change', '#vmutc_sectionWidth', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionDividerWidth.noUiSlider.set(this.value);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopviewboxwidth', this.value);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg')[0].setAttribute('viewBox', '0 0 ' + this.value + ' 140');
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth', this.value);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg')[0].setAttribute('viewBox', '0 0 ' + this.value + ' 140');
            }
        });
        $(document).on('change', '#vmutc_section_divider_flip', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividertopflip', 0);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').removeClass('svg_divider_rotateX').addClass('svg_divider_rotateXY');
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividerbottomflip', 0);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').addClass('svg_divider_rotateY');
                }
            } else {
                if ($('#vmutc_divider_top_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividertopflip', 1);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').removeClass('svg_divider_rotateXY').addClass('svg_divider_rotateX');
                }
                if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                    $('#' + sectionID).attr('data-sectiondividerbottomflip', 1);
                    $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').removeClass('svg_divider_rotateY');
                }
            }
        });
     
        sectionDividerZindex = document.getElementById('vmutc_section_divider_zindex_slider');
        noUiSlider.create(sectionDividerZindex, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 1000
            },
        });
        sectionDividerZindex.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var zindex = Math.round(values);
            $('#vmutc_section_divider_zindex').val(zindex);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopzindex', zindex);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').css('zIndex', zindex);
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomzindex', zindex);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').css('zIndex', zindex);
            }
        });
        $(document).on('change', '#vmutc_section_divider_zindex', function () {
            var sectionID = $('#vmutc_block_id').val();
            var zindex = this.value;
            sectionDividerZindex.noUiSlider.set(zindex);
            if ($('#vmutc_divider_top_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividertopzindex', zindex);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop svg').css('zIndex', zindex);
            }
            if ($('#vmutc_divider_bottom_button').hasClass('active')) {
                $('#' + sectionID).attr('data-sectiondividerbottomzindex', zindex);
                $('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom svg').css('zIndex', zindex);
            }
        });
    
        $(document).on('change', '#vmutc_section_cssParallax', function () {
            var sectionID = $('#vmutc_block_id').val();
            
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).css({
                    'transform': 'none'
                });
                $('#' + sectionID).attr('data-sectioncssparallax', 0);
                $('#' + sectionID).removeClass('background_css_parallax');
                if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                  jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                }
            } else {
                $('#' + sectionID).attr('data-sectioncssparallax', 1);
                $('#' + sectionID).addClass('background_css_parallax');
                if ($('#vmutc_section_realParallax').prop('checked') == true) {
                    $('#vmutc_section_realParallax').prop('checked', false);
                    $('#vmutc_realParallaxValuesContainer').hide();
                }
                if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                }
                $('#' + sectionID).css('transform', 'none');
            
            }
        });
        $(document).on('change', '#vmutc_section_realParallax', function () {
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
        sectionrealParallaxDuration = document.getElementById('vmutc_section_realParallaxDuration_slider');
        noUiSlider.create(sectionrealParallaxDuration, {
            start: 200,
            step: 1,
            range: {
                min: 0,
                max: 2000
            },
        });
        sectionrealParallaxDuration.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var duration = Math.round(values);;
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxoffset');
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');
            $('#vmutc_section_realParallaxDuration').val(duration);
            $('#' + sectionID).attr('data-sectionrealparallaxDuration', duration);
       
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                backgroundTimeline[sectionID].pause(0, true);
                backgroundTimeline[sectionID].clear();
            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[sectionID] = new gsap.timeline();
            backgroundTimeline[sectionID].set('#' + sectionID, {
                x: 0,
                y: 0
            });
            backgroundTimeline[sectionID].to('#' + sectionID, {
                y: - sizeY+'px',
                x:  sizeX+'px',
                ease: Linear.easeNone,
                duration: 0.1
            }
            )
                     
                    ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
        });
        $(document).on('change', '#vmutc_section_realParallaxDuration', function () {
            var sectionID = $('#vmutc_block_id').val();
            var duration = Math.round(this.value);
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxOffset');
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');
            sectionrealParallaxDuration.noUiSlider.set(duration);
            $('#' + sectionID).attr('data-sectionrealparallaxDuration', duration);
     
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                backgroundTimeline[sectionID].pause(0, true);
                backgroundTimeline[sectionID].clear();
             jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[sectionID] = new gsap.timeline();
            backgroundTimeline[sectionID].set('#' + sectionID, {
                x: 0,
                y: 0
            });
            backgroundTimeline[sectionID].to('#' + sectionID, {
                y: - sizeY+'px',
                x:  sizeX+'px',
                ease: Linear.easeNone,
                duration: 0.1
            }
            )
 
                    ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
   
        });
        sectionrealParallaxOffset = document.getElementById('vmutc_section_realParallaxOffset_slider');
        noUiSlider.create(sectionrealParallaxOffset, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        sectionrealParallaxOffset.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var offset = Math.round(values);;
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');
            $('#vmutc_section_realParallaxOffset').val(offset);
            $('#' + sectionID).attr('data-sectionrealparallaxOffset', offset);
     
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                backgroundTimeline[sectionID].pause(0, true);
                backgroundTimeline[sectionID].clear();
             jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[sectionID] = new gsap.timeline();
            backgroundTimeline[sectionID].set('#' + sectionID, {
                x: 0,
                y: 0
            });
            backgroundTimeline[sectionID].to('#' + sectionID, {
                y: - sizeY+'px',
                x:   sizeX+'px',
                ease: Linear.easeNone,
                duration: 0.1
            }
            )
                       
                    ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
   
  
        });
        $(document).on('change', '#vmutc_section_realParallaxOffset', function () {
            var sectionID = $('#vmutc_block_id').val();
            var offset = this.value;
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');
            sectionrealParallaxOffset.noUiSlider.set(offset);
            $('#' + sectionID).attr('data-sectionrealparallaxOffset', offset);
    
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                backgroundTimeline[sectionID].pause(0, true);
                backgroundTimeline[sectionID].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[sectionID] = new gsap.timeline();
            backgroundTimeline[sectionID].set('#' + sectionID, {
                x: 0,
                y: 0
            });
            backgroundTimeline[sectionID].to('#' + sectionID, {
                y: - sizeY+'px',
                x:  sizeX+'px',
                ease: Linear.easeNone,
                duration: 0.1}
            )
                        ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
  
        });
   
        sectionrealParallaxSizeY = document.getElementById('vmutc_section_realParallaxSizeY_slider');
        noUiSlider.create(sectionrealParallaxSizeY, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        sectionrealParallaxSizeY.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sizeY = Math.round(values);;
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxOffset');
          
            $('#vmutc_section_realParallaxSizeY').val(sizeY);
            $('#' + sectionID).attr('data-sectionrealparallaxsizey', sizeY);
       
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                  jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();      
                }

                backgroundTimeline[sectionID] = new gsap.timeline();
                backgroundTimeline[sectionID].set('#' + sectionID, {
                    x: 0,
                    y: 0
                });
                backgroundTimeline[sectionID].to('#' + sectionID, {
                    y: - sizeY+'px',
                    x:  sizeX+'px',
                    ease: Linear.easeNone,
                    duration: 0.1
                })
                     ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
   
        });
        $(document).on('change', '#vmutc_section_realParallaxSizeX', function () {
            var sectionID = $('#vmutc_block_id').val();
            var sizeY = this.value;
            var sizeX = $('#' + sectionID).attr('data-sectionrealparallaxsizex');         
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxOffset');
         
            sectionrealParallaxSizeY.noUiSlider.set(sizeY);
            $('#' + sectionID).attr('data-sectionrealparallaxsizey', sizeY);
     
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                 jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                }
                backgroundTimeline[sectionID] = new gsap.timeline();
                backgroundTimeline[sectionID].set('#' + sectionID, {
                    x: 0,
                    y: 0
                });
                backgroundTimeline[sectionID].to('#' + sectionID, {
                    y: - sizeY+'px',
                    x: sizeX+'px',
                    ease: Linear.easeNone,
                    duration: 0.1
                })
    
                    ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
   
        });
    
        sectionrealParallaxSizeX = document.getElementById('vmutc_section_realParallaxSizeX_slider');
        noUiSlider.create(sectionrealParallaxSizeX, {
            start: 0,
            step: 1,
            range: {
                min: -2000,
                max: 2000
            },
        });
        sectionrealParallaxSizeX.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sizeX = Math.round(values);
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxOffset');
           
            $('#vmutc_section_realParallaxSizeX').val(sizeX);
            $('#' + sectionID).attr('data-sectionrealparallaxsizex', sizeX);
        
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                 jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                }
                backgroundTimeline[sectionID] = new gsap.timeline();
                backgroundTimeline[sectionID].set('#' + sectionID, {
                    x: 0,
                    y: 0
                });
                backgroundTimeline[sectionID].to('#' + sectionID, {
                    y: - sizeY+'px',
                    x:  sizeX+'px',
                    ease: Linear.easeNone,
                    duration: 0.1
                })
        
                    ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
   
        });
        $(document).on('change', '#vmutc_section_realParallaxSizeX', function () {
            var sectionID = $('#vmutc_block_id').val();
            var sizeX = this.value;
            var sizeY = $('#' + sectionID).attr('data-sectionrealparallaxsizey');        
            var duration = $('#' + sectionID).attr('data-sectionrealparallaxDuration');
            var offset = $('#' + sectionID).attr('data-sectionrealparallaxOffset');
       
            sectionrealParallaxSizeX.noUiSlider.set(sizeX);
            $('#' + sectionID).attr('data-sectionrealparallaxsizex', sizeX);
     
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                backgroundTimeline[sectionID].pause(0, true);
                backgroundTimeline[sectionID].clear();
              jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
            }
            backgroundTimeline[sectionID] = new gsap.timeline();
            backgroundTimeline[sectionID].set('#' + sectionID, {
                x: 0,
                y: 0
            });
            backgroundTimeline[sectionID].to('#' + sectionID, {
                y: - sizeY+'px',
                x:  sizeX+'px',
                ease: Linear.easeNone,
                duration: 0.1
            })
                ScrollTrigger.create({
                        animation:  backgroundTimeline[sectionID],
                        trigger:jQuery('#'+sectionID),
                        toggleActions:'play none none none',
                        start: offset+'px center',
                        end:'+='+duration,
                       markers:true,
                       scrub:true,
                       id:sectionID+'-scrollTrigger'
                      });
  
        });
        // Particles
        sectionParticleNumberSlider = document.getElementById('vmutc_sectionParticleNumber_slider');
        noUiSlider.create(sectionParticleNumberSlider, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        sectionParticleNumberSlider.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sectionParticlesNumber = Math.round(values);
            $('#vmutc_sectionParticleNumber').val(sectionParticlesNumber);
            $('#' + sectionID).attr('data-sectionparticleNumber', sectionParticlesNumber);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleNumber', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleNumberSlider.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleNumber', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleDensity', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticledensity', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticledensity', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleDensitySlider = document.getElementById('vmutc_sectionParticleDensityValue_slider');
        noUiSlider.create(sectionParticleDensitySlider, {
            start: 800,
            step: 1,
            range: {
                min: 400,
                max: 10000
            },
        });
        sectionParticleDensitySlider.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var densityNumber = Math.round(values);
            $('#vmutc_sectionParticleDensityValue').val(densityNumber);
            $('#' + sectionID).attr('data-sectionparticledensityValue', densityNumber);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleDensityValue', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleDensitySlider.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticledensityValue', this.value);
            updateSectionParticle(sectionID);
        });
        $("#vmutc_sectionParticleColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showInitial: true,
            move: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticleColor', color)
                updateSectionParticle(sectionID);
            },
            change: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticleColor', color)
                updateSectionParticle(sectionID);
            },
            hide: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticleColor', color)
                updateSectionParticle(sectionID);
            }
        });
        sectionParticleStrokeWidthSlider = document.getElementById('vmutc_sectionParticleStrokeWidth_slider');
        noUiSlider.create(sectionParticleStrokeWidthSlider, {
            start: 2,
            step: 1,
            range: {
                min: 0,
                max: 20
            },
        });
        sectionParticleStrokeWidthSlider.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var strokeWidth = Math.round(values);
            $('#vmutc_sectionParticleStrokeWidth').val(strokeWidth);
            $('#' + sectionID).attr('data-sectionparticlestrokeWidth', strokeWidth);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleStrokeWidth', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleStrokeWidthSlider.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticlestrokeWidth', this.value);
            updateSectionParticle(sectionID);
        });
        $("#vmutc_sectionParticleStrokeColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showInitial: true,
            containerClassName: 'spectrumWidth',
            move: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlestrokecolor', color)
                updateSectionParticle(sectionID);
            },
            change: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlestrokecolor', color);
                updateSectionParticle(sectionID);
            },
            hide: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlestrokecolor', color);
                updateSectionParticle(sectionID);
            }
        });
        sectionParticlePolygonNbSidesSlider = document.getElementById('vmutc_sectionParticlePolygonNbSides_slider');
        noUiSlider.create(sectionParticlePolygonNbSidesSlider, {
            start: 3,
            step: 1,
            range: {
                min: 3,
                max: 12
            },
        });
        sectionParticlePolygonNbSidesSlider.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var NbSides = Math.round(values);
            $('#vmutc_sectionParticlePolygonNbSides').val(NbSides);
            $('#' + sectionID).attr('data-sectionparticlenbsides', NbSides);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticlePolygonNbSides', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticlePolygonNbSidesSlider.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticlenbsides', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleImageWidth = document.getElementById('vmutc_sectionParticleImageWidth_slider');
        noUiSlider.create(sectionParticleImageWidth, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        sectionParticleImageWidth.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var imageWidth = Math.round(values);
            $('#vmutc_sectionParticleImageWidth').val(imageWidth);
            $('#' + sectionID).attr('data-sectionparticleImageWidth', imageWidth);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleImageWidth', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleImageWidth.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleImageWidth', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleImageHeight = document.getElementById('vmutc_sectionParticleImageHeight_slider');
        noUiSlider.create(sectionParticleImageHeight, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        sectionParticleImageHeight.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var imageHeight = Math.round(values);
            $('#vmutc_sectionParticleImageHeight').val(imageHeight);
            $('#' + sectionID).attr('data-sectionparticleImageHeight', imageHeight);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleImageHeight', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleImageHeight.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleImageHeight', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on("change", '#vmutc_sectionParticleType', function () {
            var sectionID = $('#vmutc_block_id').val();
            var type = this.value;
            $('#' + sectionID).attr('data-sectionparticleimagetype', type);
            if (type == 'star') {
                $('#vmutc_sectionParticlePolygonNbSides').val(5);
                $('#' + sectionID).attr('data-sectionparticlenbsides', 5);
            }
            updateSectionParticle(sectionID);
        });
        $(document).on('keyup', '#vmutc_sectionParticleImageUrl', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionparticleimageurl', this.value);
            updateSectionParticle(sectionID);
        })
        sectionParticlesSize = document.getElementById('vmutc_sectionParticleSize_slider');
        noUiSlider.create(sectionParticlesSize, {
            start: 7,
            step: 0.1,
            range: {
                min: 0,
                max: 20
            },
        });
        sectionParticlesSize.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sectionParticleSize = values;
            $('#vmutc_sectionParticleSize').val(sectionParticleSize);
            $('#' + sectionID).attr('data-sectionparticlesizevalue', sectionParticleSize);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleSize', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticlesSize.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticlesizevalue', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleSizeRandom', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticlesizerandom', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticlesizerandom', '1');
        });
        $(document).on('change', '#vmutc_sectionParticleSizeAnim', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleSizeAnim', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleSizeAnim', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticlesSizeAnim = document.getElementById('vmutc_sectionParticleSizeAnimSpeed_slider');
        noUiSlider.create(sectionParticlesSizeAnim, {
            start: 5,
            step: 1,
            range: {
                min: 0,
                max: 300
            },
        });
        sectionParticlesSizeAnim.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sectionParticleSizeAnim = Math.round(values);
            $('#vmutc_sectionParticleSizeAnimSpeed').val(sectionParticleSizeAnim);
            $('#' + sectionID).attr('data-sectionparticleSizeAnimSpeed', sectionParticleSizeAnim);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleSizeAnimSpeed', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticlesSizeAnim.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleSizeAnimSpeed', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticlesMinSizeAnim = document.getElementById('vmutc_sectionParticleMinSizeAnim_slider');
        noUiSlider.create(sectionParticlesMinSizeAnim, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        sectionParticlesMinSizeAnim.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var sectionParticleMinSizeAnim = Math.round(values);
            $('#vmutc_sectionParticleMinSizeAnim').val(sectionParticleMinSizeAnim);
            $('#' + sectionID).attr('data-sectionparticleMinSizeAnim', sectionParticleMinSizeAnim);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMinSizeAnim', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticlesMinSizeAnim.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleMinSizeAnim', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleSizeAnimSync', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleSizeAnimSync', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleSizeAnimSync', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleOpacityRandom', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleOpacityRandom', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleOpacityRandom', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleOpacityValue = document.getElementById('vmutc_sectionParticleOpacityValue_slider');
        noUiSlider.create(sectionParticleOpacityValue, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        sectionParticleOpacityValue.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var opacityValue = values;
            $('#vmutc_sectionParticleOpacityValue').val(opacityValue);
            $('#' + sectionID).attr('data-sectionparticleOpacityValue', opacityValue);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleOpacityValue', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleOpacityValue.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleOpacityValue', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleOpacityAnim', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleOpacityAnim', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleOpacityAnim', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleOpacityAnimSpeed = document.getElementById('vmutc_sectionParticleOpacityAnimSpeed_slider');
        noUiSlider.create(sectionParticleOpacityAnimSpeed, {
            start: 2,
            step: 0.1,
            range: {
                min: 0,
                max: 10
            },
        });
        sectionParticleOpacityAnimSpeed.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var opacityAnimSpeed = values;
            $('#vmutc_sectionParticleOpacityAnimSpeed').val(opacityAnimSpeed);
            $('#' + sectionID).attr('data-sectionparticleOpacityAnimSpeed', opacityAnimSpeed);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleOpacityAnimSpeed', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleOpacityAnimSpeed.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleOpacityAnimSpeed', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleMinOpacityAnim = document.getElementById('vmutc_sectionParticleMinOpacityAnim_slider');
        noUiSlider.create(sectionParticleMinOpacityAnim, {
            start: 0,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        sectionParticleMinOpacityAnim.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var MinOpacityAnim = values;
            $('#vmutc_sectionParticleMinOpacityAnim').val(MinOpacityAnim);
            $('#' + sectionID).attr('data-sectionparticleMinOpacityAnim', MinOpacityAnim);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMinOpacityAnim', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleMinOpacityAnim.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleMinOpacityAnim', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleOpacityAnimSync', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleOpacityAnimSync', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleOpacityAnimSync', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleLineLinked', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleLineLinked', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleLineLinked', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleLineDistance = document.getElementById('vmutc_sectionParticleLineDistance_slider');
        noUiSlider.create(sectionParticleLineDistance, {
            start: 60,
            step: 50,
            range: {
                min: 0,
                max: 500
            },
        });
        sectionParticleLineDistance.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var LineDistance = Math.round(values);
            $('#vmutc_sectionParticleLineDistance').val(LineDistance);
            $('#' + sectionID).attr('data-sectionparticleLineDistance', LineDistance);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleLineDistance', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleLineDistance.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleLineDistance', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleLineOpacity = document.getElementById('vmutc_sectionParticleLineOpacity_slider');
        noUiSlider.create(sectionParticleLineOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        sectionParticleLineOpacity.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var LineOpacity = values;
            $('#vmutc_sectionParticleLineOpacity').val(LineOpacity);
            $('#' + sectionID).attr('data-sectionparticleLineOpacity', LineOpacity);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleLineOpacity', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleLineOpacity.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleLineOpacity', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleLineWidth = document.getElementById('vmutc_sectionParticleLineWidth_slider');
        noUiSlider.create(sectionParticleLineWidth, {
            start: 5,
            step: 1,
            range: {
                min: 0,
                max: 20
            },
        });
        sectionParticleLineWidth.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var LineWidth = Math.round(values);
            $('#vmutc_sectionParticleLineWidth').val(LineWidth);
            $('#' + sectionID).attr('data-sectionparticleLineWidth', LineWidth);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleLineWidth', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleLineWidth.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleLineWidth', this.value);
            updateSectionParticle(sectionID);
        });
        $("#vmutc_sectionParticleLineColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showInitial: true,
            containerClassName: 'spectrumWidth',
            move: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlelinecolor', color)
                updateSectionParticle(sectionID);
            },
            change: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlelinecolor', color)
                updateSectionParticle(sectionID);
            },
            hide: function (color) {
                var sectionID = $('#vmutc_block_id').val();
                $('#' + sectionID).attr('data-sectionparticlelinecolor', color)
                updateSectionParticle(sectionID);
            }
        });
        $(document).on('change', '#vmutc_sectionParticleMoveEnable', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleMoveEnable', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleMoveEnable', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveDirection', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionparticleMoveDirection', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveRandom', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleMoveRandom', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleMoveRandom', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveStraight', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleMoveStraight', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleMoveStraight', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleMoveSpeed = document.getElementById('vmutc_sectionParticleMoveSpeed_slider');
        noUiSlider.create(sectionParticleMoveSpeed, {
            start: 10,
            step: 1,
            range: {
                min: 0,
                max: 200
            },
        });
        sectionParticleMoveSpeed.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var MoveSpeed = Math.round(values);
            $('#vmutc_sectionParticleMoveSpeed').val(MoveSpeed);
            $('#' + sectionID).attr('data-sectionparticleMoveSpeed', MoveSpeed);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveSpeed', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleMoveSpeed.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleMoveSpeed', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveOutMode', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionparticleMoveOutMode', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleMoveAttract', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleMoveAttract', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleMoveAttract', '1');
            updateSectionParticle(sectionID);
        });
        sectionParticleAttractRotateX = document.getElementById('vmutc_sectionParticleAttractRotateX_slider');
        noUiSlider.create(sectionParticleAttractRotateX, {
            start: 1000,
            step: 1,
            range: {
                min: 0,
                max: 10000
            },
        });
        sectionParticleAttractRotateX.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var AttractRotateX = Math.round(values);
            $('#vmutc_sectionParticleAttractRotateX').val(AttractRotateX);
            $('#' + sectionID).attr('data-sectionparticleAttractRotateX', AttractRotateX);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleAttractRotateX', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleAttractRotateX.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleAttractRotateX', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleAttractRotateY = document.getElementById('vmutc_sectionParticleAttractRotateY_slider');
        noUiSlider.create(sectionParticleAttractRotateY, {
            start: 1000,
            step: 1,
            range: {
                min: 0,
                max: 10000
            },
        });
        sectionParticleAttractRotateY.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var AttractRotateY = Math.round(values);
            $('#vmutc_sectionParticleAttractRotateY').val(AttractRotateY);
            $('#' + sectionID).attr('data-sectionparticleAttractRotateY', AttractRotateY);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleAttractRotateY', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleAttractRotateY.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleAttractRotateY', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleHover', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleHover', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleHover', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleHoverMode', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionparticleHoverMode', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleClick', function () {
            var sectionID = $('#vmutc_block_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + sectionID).attr('data-sectionparticleClick', '0');
            } else
                $('#' + sectionID).attr('data-sectionparticleClick', '1');
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleClickMode', function () {
            var sectionID = $('#vmutc_block_id').val();
            $('#' + sectionID).attr('data-sectionparticleClickMode', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleGrabDistance = document.getElementById('vmutc_sectionParticleGrabDistance_slider');
        noUiSlider.create(sectionParticleGrabDistance, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1500
            },
        });
        sectionParticleGrabDistance.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var GrabDistance = Math.round(values);
            $('#vmutc_sectionParticleGrabDistance').val(GrabDistance);
            $('#' + sectionID).attr('data-sectionparticleGrabDistance', GrabDistance);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleGrabDistance', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleGrabDistance.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleGrabDistance', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleGrabOpacity = document.getElementById('vmutc_sectionParticleGrabLineOpacity_slider');
        noUiSlider.create(sectionParticleGrabOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        sectionParticleGrabOpacity.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var GrabOpacity = values;
            $('#vmutc_sectionParticleGrabLineOpacity').val(GrabOpacity);
            $('#' + sectionID).attr('data-sectionparticleGrabOpacity', GrabOpacity);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleGrabLineOpacity', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleGrabOpacity.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleGrabOpacity', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleBubbleDistance = document.getElementById('vmutc_sectionParticleBubbleDistance_slider');
        noUiSlider.create(sectionParticleBubbleDistance, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1500
            },
        });
        sectionParticleBubbleDistance.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var BubbleDistance = Math.round(values);
            $('#vmutc_sectionParticleBubbleDistance').val(BubbleDistance);
            $('#' + sectionID).attr('data-sectionparticleBubbleDistance', BubbleDistance);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleBubbleDistance', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleBubbleDistance.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleBubbleDistance', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleBubbleOpacity = document.getElementById('vmutc_sectionParticleBubbleOpacity_slider');
        noUiSlider.create(sectionParticleBubbleOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        sectionParticleBubbleOpacity.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var BubbleOpacity = values;
            $('#vmutc_sectionParticleBubbleOpacity').val(BubbleOpacity);
            $('#' + sectionID).attr('data-sectionparticleBubbleOpacity', BubbleOpacity);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleBubbleOpacity', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleBubbleOpacity.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleBubbleOpacity', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleBubbleSize = document.getElementById('vmutc_sectionParticleBubbleSize_slider');
        noUiSlider.create(sectionParticleBubbleSize, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        sectionParticleBubbleSize.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var BubbleSize = Math.round(values);
            $('#vmutc_sectionParticleBubbleSize').val(BubbleSize);
            $('#' + sectionID).attr('data-sectionparticleBubbleSize', BubbleSize);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleBubbleSize', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleBubbleSize.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleBubbleSize', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleBubbleDuration = document.getElementById('vmutc_sectionParticleBubbleDuration_slider');
        noUiSlider.create(sectionParticleBubbleDuration, {
            start: 2,
            step: 0.1,
            range: {
                min: 0,
                max: 10
            },
        });
        sectionParticleBubbleDuration.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var BubbleDuration = values;
            $('#vmutc_sectionParticleBubbleDuration').val(BubbleDuration);
            $('#' + sectionID).attr('data-sectionparticleBubbleDuration', BubbleDuration);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleBubbleDuration', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleBubbleDuration.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleBubbleDuration', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleRepulse = document.getElementById('vmutc_sectionParticleRepulseDistance_slider');
        noUiSlider.create(sectionParticleRepulse, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1000
            },
        });
        sectionParticleRepulse.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var Repulse = Math.round(values);
            $('#vmutc_sectionParticleRepulseDistance').val(Repulse);
            $('#' + sectionID).attr('data-sectionparticleRepulse', Repulse);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticleRepulseDistance', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleRepulse.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticleRepulse', this.value);
            updateSectionParticle(sectionID);
        });
        sectionParticleZindex = document.getElementById('vmutc_sectionParticlezindex_slider');
        noUiSlider.create(sectionParticleZindex, {
            start: 0,
            step: 1,
            range: {
                min: 0,
                max: 10
            },
        });
        sectionParticleZindex.noUiSlider.on('slide', function (values, handle) {
            var sectionID = $('#vmutc_block_id').val();
            var zindex = Math.round(values);
            $('#vmutc_sectionParticlezindex').val(zindex);
            $('#' + sectionID).attr('data-sectionparticlezindex', zindex);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionParticlezindex', function () {
            var sectionID = $('#vmutc_block_id').val();
            sectionParticleZindex.noUiSlider.set(this.value);
            $('#' + sectionID).attr('data-sectionparticlezindex', this.value);
            updateSectionParticle(sectionID);
        });
        $(document).on('change', '#vmutc_sectionAddParticles', function () {
            var particlesID = $('#vmutc_block_id').val();
            var sectionID = $('#' + particlesID).attr('id');
            if ($(this).prop('checked') == true) {
                $('#' + sectionID).attr('data-sectionparticlenumber', 137)
                    .attr('data-sectionparticledensity', 1)
                    .attr('data-sectionparticledensityvalue', 1736)
                    .attr('data-sectionparticlecolor', '#7e1e1e')
                    .attr('data-sectionparticleimagetype', "circle")
                    .attr('data-sectionparticlestrokewidth', 2)
                    .attr('data-sectionparticlestrokecolor', '#4e8e4a')
                    .attr('data-sectionparticlenbsides', 3)
                    .attr('data-sectionparticleimagewidth', 80)
                    .attr('data-sectionparticleimageheight', 100)
                    .attr('data-sectionparticleopacityvalue', 0.5)
                    .attr('data-sectionparticleopacityrandom', 1)
                    .attr('data-sectionparticleopacityanim', 1)
                    .attr('data-sectionparticleopacityanimspeed', 1)
                    .attr('data-sectionparticleminopacityanim', 0.1)
                    .attr('data-sectionparticleopacityanimsync', 0)
                    .attr('data-sectionparticlesizevalue', 7)
                    .attr('data-sectionparticlesizerandom', 1)
                    .attr('data-sectionparticlesizeanim', 1)
                    .attr('data-sectionparticlesizeanimspeed', 40)
                    .attr('data-sectionparticleminsizeanim', 0.1)
                    .attr('data-sectionparticlesizeanimsync', 1)
                    .attr('data-sectionparticlelinelinked', 1)
                    .attr('data-sectionparticlelinedistance', 150)
                    .attr('data-sectionparticlelineopacity', 0.4)
                    .attr('data-sectionparticlelinewidth', 1)
                    .attr('data-sectionparticlelinecolor', '#793434')
                    .attr('data-sectionparticlemoveenable', 1)
                    .attr('data-sectionparticlemovespeed', 13)
                    .attr('data-sectionparticlemovedirection', 'none')
                    .attr('data-sectionparticlemoverandom', 1)
                    .attr('data-sectionparticlemovestraight', 0)
                    .attr('data-sectionparticlemoveoutmode', 'bounce')
                    .attr('data-sectionparticlemoveattract', 0)
                    .attr('data-sectionparticleattractrotatex', 600)
                    .attr('data-sectionparticleattractrotatey', 1200)
                    .attr('data-sectionparticlehover', 1)
                    .attr('data-sectionparticlehovermode', 'bubble')
                    .attr('data-sectionparticleclick', 1)
                    .attr('data-sectionparticleclickmode', 'bubble')
                    .attr('data-sectionparticlegrabdistance', 400)
                    .attr('data-sectionparticlegrabopacity', 1)
                    .attr('data-sectionparticlebubbledistance', 400)
                    .attr('data-sectionparticlebubbleopacity', 8)
                    .attr('data-sectionparticlebubblesize', 40)
                    .attr('data-sectionparticlebubbleduration', 2)
                    .attr('data-sectionparticlerepulse', 200)
                    .attr('data-sectionhasparticles', 1)
                    .attr('data-sectionparticlezindex', 0);
                createSectionParticles(sectionID);
                updateSectionParticle(sectionID);
                $('#vmutc_sectionParticlesContainer').show();
            } else {
                $('#' + sectionID).attr('data-sectionhasparticles', 0)
                $('#vmutc_sectionParticlesContainer').hide();
                $('#' + sectionID + ' canvas.tsparticles-canvas-el').remove();
            }
        });
    });
function createSectionOnDB(id_block) {
    jQuery('#vmutc_block_id').val(id_block);
    var values = {
        id_theme: jQuery('#cssm_id_theme').val(),
        security: cssm_front_ajax_object.security,
        id_block: id_block,
        parent: jQuery('#' + id_block).attr('data-parent'),
        where: jQuery('#' + id_block).attr('data-where'),
        what: jQuery('#' + id_block).attr('data-what'),
        whatClass: jQuery('#' + id_block).attr('data-whatclass'),
        style: jQuery('#' + id_block).attr('style'),
        action: 'saveBlock',
    };
    jQuery.ajax({
        type: "POST",
        url: cssm_front_ajax_object.ajaxurl,
        data: values,
        success: function (id) {
            jQuery('#' + id_block).attr('data-index', id);
            updateSectionBackground(id_block);
        }
    });
}
function openSectionWidget(sectionID) {
    jQuery('#vmutc_block_id').val(sectionID);
    jQuery('div.ui-dialog-content').dialog('close');
    saveInitialValues(sectionID);
    jQuery('#vmutc_sectionMargin_left_input').val(jQuery('#' + sectionID).attr('data-sectionmarginleft'));
    sectionMarginLeft.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionmarginleft'));
    jQuery('#vmutc_sectionMargin_right_input').val(jQuery('#' + sectionID).attr('data-sectionmarginright'));
    sectionMarginRight.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionmarginright'));
    jQuery('#vmutc_sectionMargin_top_input').val(jQuery('#' + sectionID).attr('data-sectionmargintop'));
    sectionMarginTop.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionmargintop'));
    jQuery('#vmutc_sectionMargin_bottom_input').val(jQuery('#' + sectionID).attr('data-sectionmarginbottom'));
    sectionMarginBottom.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionmarginbottom'));
    jQuery('#vmutc_widgetMargin_vertical_input').val(jQuery('#' + sectionID).attr('data-widgetmarginvertical'));
    widgetMarginVertical.noUiSlider.set(jQuery('#' + sectionID).attr('data-widgetmarginvertical'));
    jQuery('#vmutc_widgetMargin_horizontal_input').val(jQuery('#' + sectionID).attr('data-widgetmarginhorizontal'));
    widgetMarginHorizontal.noUiSlider.set(jQuery('#' + sectionID).attr('data-widgetmarginhorizontal'));
    allHandlersObj = {};
    if (jQuery('#vmutc_sectionBackgroundColorStyle').length == 0)
        jQuery("<style id='vmutc_sectionBackgroundColorStyle' type='text/css'>}</style>").appendTo("#vmutc_styles_container");
    jQuery('#vmutc_sectionBackgroundColor').spectrum('set', jQuery('#' + sectionID).attr('data-sectionbackgroundcolor'));
    var image_url = jQuery('#' + sectionID).attr('data-sectionbackgroundurl');
    if (image_url == 'none')
        image_url = '';
    jQuery('#vmutc_SectionBackgroundImage_input').val(image_url);
    jQuery('#vmutc_sectionBackgroundSize').val(jQuery('#' + sectionID).attr('data-sectionbackgroundsize'));
    jQuery('#vmutc_sectionBackgroundRepeat').val(jQuery('#' + sectionID).attr('data-sectionbackgroundrepeat'));
    jQuery('#vmutc_sectionBackgroundPosition').val(jQuery('#' + sectionID).attr('data-sectionbackgroundposition'));
    jQuery('#vmutc_sectionBackgroundBlend').val(jQuery('#' + sectionID).attr('data-sectionbackgroundblend'));
    jQuery('#vmutc_sectionBackgroundMixBlend').val(jQuery('#' + sectionID).attr('data-sectionbackgroundmixblend'));
    jQuery('#vmutc_sectionWidth').val(jQuery('#' + sectionID).attr('data-sectionwidth'));
    sectionWidth.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionwidth'));
    jQuery('#vmutc_sectionHeight').val(jQuery('#' + sectionID).attr('data-sectionheight'));
    sectionHeight.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionheight'));
    if (jQuery('#' + sectionID).attr('data-gradientused') == 1) {
        jQuery('#vmutc_gradientUsed').prop('checked', true);
        jQuery('#vmutc_displayGradientValues').show();
    } else {
        jQuery('#vmutc_gradientUsed').prop('checked', false);
        jQuery('#vmutc_displayGradientValues').hide();
    }
    jQuery('#vmutc_gradientType').val(jQuery('#' + sectionID).attr('data-gradienttype'));
    if (jQuery('#vmutc_gradientType').val() == 'linear' || jQuery('#vmutc_gradientType').val() == 'repeating-linear') {
        jQuery('#vmutc_gradientPositionContainer').hide();
        jQuery('#vmutc_gradientAngleContainer').show();
    }
    if (jQuery('#vmutc_gradientType').val() == 'radial' || jQuery('#vmutc_gradientType').val() == 'repeating-radial') {
        jQuery('#vmutc_gradientAngleContainer').hide();
        jQuery('#vmutc_gradientPositionContainer').show();
    }
    jQuery('#vmutc_gradientAngle').val(jQuery('#' + sectionID).attr('data-gradientangle'));
    var handlers = jQuery('#' + sectionID).attr('data-gradienthandlers');
    gradientPicker.clear();
    if (typeof (handlers) != 'undefined' && handlers != '' && handlers != 'undefined') {
        handlers = JSON.parse(handlers);
        for (var property in handlers) {
            gradientPicker.addHandler(property, handlers[property])
        }
    } else {
        gradientPicker.addHandler(0, '#fff');
        gradientPicker.addHandler(100, jQuery('#' + sectionID).attr('data-sectionbackgroundcolor'));
    }
    jQuery('#vmutc_divider_top_button').trigger('click');
    jQuery('#vmutc_SectionBackgroundVideo_input').val(jQuery('#' + sectionID).attr('data-sectionbackgroundvideourl'));
    jQuery('#vmutc_section_divider_BackgroundColor').spectrum('set', jQuery('#' + sectionID).attr('data-sectiondividertopfill'));
    sectionDividerWidth.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectiondividertopviewboxwidth'));
    jQuery('#vmutc_section_divider_width').val(jQuery('#' + sectionID).attr('data-sectiondividertopviewboxwidth'));
    sectionDividerHeight.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectiondividertopheight'));
    jQuery('#vmutc_section_divider_height').val(jQuery('#' + sectionID).attr('data-sectiondividertopheight'));
    sectionDividerZindex.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectiondividertopzindex'));
    jQuery('#vmutc_section_divider_zindex').val(jQuery('#' + sectionID).attr('data-sectiondividertopzindex'));
    var svgName = jQuery('#' + sectionID).attr('data-sectiondividertopname');
    if (svgName != '')
        jQuery(".vmutc_section_divider_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
    if (jQuery('#' + sectionID).attr('data-sectiondividertopflip') == 1) {
        jQuery('#vmutc_section_divider_flip').prop('checked', true);
    } else {
        jQuery('#vmutc_section_divider_flip').prop('checked', false);
    }
    if (jQuery('#' + sectionID).attr('data-sectioncssparallax') == 1) {
        jQuery('#vmutc_section_cssParallax').prop('checked', true);
    } else {
        jQuery('#vmutc_section_cssParallax').prop('checked', false);
    }
    if (jQuery('#' + sectionID).attr('data-sectionrealparallax') == 1) {
        jQuery('#vmutc_section_realParallax').prop('checked', true);
        jQuery('#vmutc_realParallaxValuesContainer').show();
    } else {
        jQuery('#vmutc_section_realParallax').prop('checked', false);
        jQuery('#vmutc_realParallaxValuesContainer').hide();
    }
    if (jQuery('#' + sectionID).attr('data-sectionrealparallaxHorizontal') == 1) {
        jQuery('#vmutc_section_realParallaxHorizontal').prop('checked', true);
    } else {
        jQuery('#vmutc_section_realParallaxHorizontal').prop('checked', false);
    }
    jQuery('#vmutc_section_realParallaxDuration').val(jQuery('#' + sectionID).attr('data-sectionrealparallaxDuration'));
    sectionrealParallaxDuration.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionrealparallaxDuration'));
    jQuery('#vmutc_section_realParallaxOffset').val(jQuery('#' + sectionID).attr('data-sectionrealparallaxOffset'));
    sectionrealParallaxOffset.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionrealparallaxOffset'));
    jQuery('#vmutc_section_realParallaxSizeX').val(jQuery('#' + sectionID).attr('data-sectionrealparallaxsizex'));
    sectionrealParallaxSizeX.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionrealparallaxsizex'));
    jQuery('#vmutc_section_realParallaxSizeY').val(jQuery('#' + sectionID).attr('data-sectionrealparallaxsizey'));
    sectionrealParallaxSizeY.noUiSlider.set(jQuery('#' + sectionID).attr('data-sectionrealparallaxsizey'));
  
    jQuery('#vmutc_sectionAddParticles').prop('checked', false);
    if (jQuery('#' + sectionID).attr('data-sectionhasparticles') == 1)
        createSectionParticles(sectionID);
    jQuery("#vmutc_sectionContainer").dialog({
        autoOpen: false,
        modal: false,
        dialogClass: 'EditorContainer',
        width: '640',
        height: '900',
        resizable: false,
        title: cssmTranslate.sectionbackgroundwidgettitle,
        open: function (event, ui) {
            jQuery(".ui-dialog-titlebar-close").hide();
            jQuery(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="sectionWidget" data-title="'+cssmTranslate.sectionbackgroundwidgethelp+'"></i>');
        },
        close: function () {
            jQuery(this).closest(".EditorContainer").find('.iconhelp').remove();
            jQuery(this).dialog('destroy');
        },
        buttons: {
            Cancel: {
                click: function () {
                    jQuery(this).closest(".EditorContainer").find('.iconhelp').remove();
                    jQuery(this).dialog("close");
                    restoreInitialValues(sectionID);
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
                jQuery(admin_clone).css('transform','');
                jQuery(admin_clone).find('.grid-stack-item').css('transform','');           
           
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
                    whatClass: jQuery('#' + sectionID).attr('data-whatclass'),
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
        },
        }
    }), jQuery('.EditorContainer').draggable();
    jQuery("#vmutc_sectionContainer").dialog("open");
}
function createSectionParticles(sectionParticleID) {
    jQuery('#vmutc_sectionAddParticles').prop('checked', true);
    jQuery('#vmutc_sectionParticlesContainer').show();
    jQuery('#vmutc_sectionParticleNumber').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlenumber'));
    sectionParticleNumberSlider.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlenumber'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticledensity') == 1)
        jQuery('#vmutc_sectionParticleDensity').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleDensity').prop('checked', false);
    jQuery('#vmutc_sectionParticleDensityValue').val(jQuery('#' + sectionParticleID).attr('data-sectionparticledensityvalue'));
    sectionParticleDensitySlider.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticledensityvalue'));
    jQuery('#vmutc_sectionParticleColor').spectrum('set', jQuery('#' + sectionParticleID).attr('data-sectionparticlecolor'));
    sectionParticleStrokeWidthSlider.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlestrokewidth'));
    jQuery('#vmutc_sectionParticleStrokeWidth').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlestrokewidth'));
    jQuery('#vmutc_sectionParticleStrokeColor').spectrum('set', jQuery('#' + sectionParticleID).attr('data-sectionparticlestrokecolor'));
    sectionParticlePolygonNbSidesSlider.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlenbsides'));
    jQuery('#vmutc_sectionParticlePolygonNbSides').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlenbsides'));
    jQuery('#vmutc_sectionParticleType').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleimagetype'))
    sectionParticleImageWidth.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleimagewidth'));
    jQuery('#vmutc_sectionParticleImageWidth').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleimagewidth'));
    sectionParticleImageHeight.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleimageheight'));
    jQuery('#vmutc_sectionParticleImageHeight').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleimageheight'));
    jQuery('#vmutc_sectionParticleImageUrl').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleimageurl'));
    sectionParticlesSize.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlesizevalue'));
    jQuery('#vmutc_sectionParticleSize').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlesizevalue'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlesizerandom') == 1)
        jQuery('#vmutc_sectionParticleSizeRandom').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleSizeRandom').prop('checked', false);
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlesizeanim') == 1)
        jQuery('#vmutc_sectionParticleSizeAnim').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleSizeAnim').prop('checked', false);
    sectionParticlesSizeAnim.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlesizeanimspeed'));
    jQuery('#vmutc_sectionParticleSizeAnimSpeed').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlesizeanimspeed'));
    sectionParticlesMinSizeAnim.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleminsizeanim'));
    jQuery('#vmutc_sectionParticleMinSizeAnim').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleminsizeanim'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlesizeanimsync') == 1)
        jQuery('#vmutc_sectionParticleSizeAnimSync').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleSizeAnimSync').prop('checked', false);
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityrandom') == 1)
        jQuery('#vmutc_sectionParticleOpacityRandom').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleOpacityRandom').prop('checked', false);
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityanim') == 1)
        jQuery('#vmutc_sectionParticleOpacityAnim').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleOpacityAnim').prop('checked', false);
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityanimsync') == 1)
        jQuery('#vmutc_sectionParticleOpacityAnimSync').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleOpacityAnimSync').prop('checked', false);
    sectionParticleOpacityAnimSpeed.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityanimspeed'));
    jQuery('#vmutc_sectionParticleOpacityAnimSpeed').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityanimspeed'));
    sectionParticleMinOpacityAnim.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleminopacityanim'));
    jQuery('#vmutc_sectionParticleMinOpacityAnim').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleminopacityanim'));
    sectionParticleOpacityValue.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityvalue'));
    jQuery('#vmutc_sectionParticleOpacityValue').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleopacityvalue'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlelinelinked') == 1)
        jQuery('#vmutc_sectionParticleLineLinked').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleLineLinked').prop('checked', false);
    sectionParticleLineDistance.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlelinedistance'));
    jQuery('#vmutc_sectionParticleLineDistance').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlelinedistance'));
    sectionParticleLineOpacity.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlelineopacity'));
    jQuery('#vmutc_sectionParticleLineOpacity').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlelineopacity'));
    sectionParticleLineWidth.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlelinewidth'));
    jQuery('#vmutc_sectionParticleLineWidth').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlelinewidth'));
    jQuery('#vmutc_sectionParticleLineColor').spectrum('set', jQuery('#' + sectionParticleID).attr('data-sectionparticlelinecolor'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlemoveenable') == 1)
        jQuery('#vmutc_sectionParticleMoveEnable').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleMoveEnable').prop('checked', false);
    jQuery('#vmutc_sectionParticleMoveDirection').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlemovedirection'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlemoverandom') == 1)
        jQuery('#vmutc_sectionParticleMoveRandom').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleMoveRandom').prop('checked', false);
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlemovestraight') == 1)
        jQuery('#vmutc_sectionParticleMoveStraight').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleMoveStraight').prop('checked', false);
    sectionParticleMoveSpeed.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlemovespeed'));
    jQuery('#vmutc_sectionParticleMoveSpeed').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlemovespeed'));
    jQuery('#vmutc_sectionParticleMoveOutMode').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlemoveoutmode'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlemoveattract') == 1)
        jQuery('#vmutc_sectionParticleMoveAttract').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleMoveAttract').prop('checked', false);
    sectionParticleAttractRotateX.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleattractrotatex'));
    jQuery('#vmutc_sectionParticleAttractRotateX').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleattractrotatex'));
    sectionParticleAttractRotateY.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticleattractrotatey'));
    jQuery('#vmutc_sectionParticleAttractRotateY').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleattractrotatey'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticlehover') == 1)
        jQuery('#vmutc_sectionParticleHover').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleHover').prop('checked', false);
    jQuery('#vmutc_sectionParticleHoverMode').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlehovermode'));
    if (jQuery('#' + sectionParticleID).attr('data-sectionparticleclick') == 1)
        jQuery('#vmutc_sectionParticleClick').prop('checked', true);
    else
        jQuery('#vmutc_sectionParticleClick').prop('checked', false);
    jQuery('#vmutc_sectionParticleClickMode').val(jQuery('#' + sectionParticleID).attr('data-sectionparticleclickmode'));
    sectionParticleGrabDistance.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlegrabdistance'));
    jQuery('#vmutc_sectionParticleGrabDistance').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlegrabdistance'));
    sectionParticleGrabOpacity.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlegrabopacity'));
    jQuery('#vmutc_sectionParticleGrabLineOpacity').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlegrabopacity'));
    sectionParticleBubbleDistance.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbledistance'));
    jQuery('#vmutc_sectionParticleBubbleDistance').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbledistance'));
    sectionParticleBubbleOpacity.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbleopacity'));
    jQuery('#vmutc_sectionParticleBubbleOpacity').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbleopacity'));
    sectionParticleBubbleSize.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubblesize'));
    jQuery('#vmutc_sectionParticleBubbleSize').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubblesize'));
    sectionParticleBubbleDuration.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbleduration'));
    jQuery('#vmutc_sectionParticleBubbleDuration').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlebubbleduration'));
    sectionParticleRepulse.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlerepulse'));
    jQuery('#vmutc_sectionParticleRepulseDistance').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlerepulse'));
    sectionParticleZindex.noUiSlider.set(jQuery('#' + sectionParticleID).attr('data-sectionparticlezindex'));
    jQuery('#vmutc_sectionParticlezindex').val(jQuery('#' + sectionParticleID).attr('data-sectionparticlezindex'));
}
function saveInitialValues(sectionID) {
    localStorage.setItem('sectionmarginleft', jQuery('#' + sectionID).attr('data-sectionmarginleft'));
    localStorage.setItem('sectionmarginright', jQuery('#' + sectionID).attr('data-sectionmarginright'));
    localStorage.setItem('sectionmargintop', jQuery('#' + sectionID).attr('data-sectionmargintop'));
    localStorage.setItem('sectionmarginbottom', jQuery('#' + sectionID).attr('data-sectionmarginbottom'));
    localStorage.setItem('widgetmarginvertical', jQuery('#' + sectionID).attr('data-widgetmarginvertical'));
    localStorage.setItem('widgetmarginhorizontal', jQuery('#' + sectionID).attr('data-widgetmarginhorizontal'));
    localStorage.setItem('sectionwidth', jQuery('#' + sectionID).attr('data-sectionwidth'));
    localStorage.setItem('sectionheight', jQuery('#' + sectionID).attr('data-sectionheight'));
    localStorage.setItem('sectionbackgroundcolor', jQuery('#' + sectionID).attr('data-sectionbackgroundcolor'));
    localStorage.setItem('sectionbackgroundurl', jQuery('#' + sectionID).attr('data-sectionbackgroundurl'));
    localStorage.setItem('sectionbackgroundsize', jQuery('#' + sectionID).attr('data-sectionbackgroundsize'));
    localStorage.setItem('sectionbackgroundrepeat', jQuery('#' + sectionID).attr('data-sectionbackgroundrepeat'));
    localStorage.setItem('sectionbackgroundposition', jQuery('#' + sectionID).attr('data-sectionbackgroundposition'));
    localStorage.setItem('sectionbackgroundblend', jQuery('#' + sectionID).attr('data-sectionbackgroundblend'));
    localStorage.setItem('sectionbackgroundmixblend', jQuery('#' + sectionID).attr('data-sectionbackgroundmixblend'));
    localStorage.setItem('gradientused', jQuery('#' + sectionID).attr('data-gradientused'));
    localStorage.setItem('gradienttype', jQuery('#' + sectionID).attr('data-gradienttype'));
    localStorage.setItem('gradientangle', jQuery('#' + sectionID).attr('data-gradientangle'));
    localStorage.setItem('gradienthandlers', jQuery('#' + sectionID).attr('data-gradienthandlers'));
    localStorage.setItem('gradient', jQuery('#' + sectionID).attr('data-gradient'));
    localStorage.setItem('sectionbackgroundvideourl', jQuery('#' + sectionID).attr('data-sectionbackgroundvideourl'));
    localStorage.setItem('sectiondividertopname', jQuery('#' + sectionID).attr('data-sectiondividertopname'));
    localStorage.setItem('sectiondividerbottomname', jQuery('#' + sectionID).attr('data-sectiondividerbottomname'));
    localStorage.setItem('sectiondividertopfill', jQuery('#' + sectionID).attr('data-sectiondividertopfill'));
    localStorage.setItem('sectiondividerbottomfill', jQuery('#' + sectionID).attr('data-sectiondividerbottomfill'));
    localStorage.setItem('sectiondividertopviewboxwidth', jQuery('#' + sectionID).attr('data-sectiondividertopviewboxwidth'));
    localStorage.setItem('sectiondividerbottomviewboxwidth', jQuery('#' + sectionID).attr('data-sectiondividerbottomviewboxwidth'));
    localStorage.setItem('sectiondividertopheight', jQuery('#' + sectionID).attr('data-sectiondividertopheight'));
    localStorage.setItem('sectiondividerbottomheight', jQuery('#' + sectionID).attr('data-sectiondividerbottomheight'));
    localStorage.setItem('sectiondividertopsvg', jQuery('#' + sectionID + ' .vmutc_sectionBackgroundDividerTop').html());
    localStorage.setItem('sectiondividerbottomsvg', jQuery('#' + sectionID + ' .vmutc_sectionBackgroundDividerBottom').html())
    localStorage.setItem('sectiondividertopflip', jQuery('#' + sectionID).attr('data-sectiondividertopflip'));
    localStorage.setItem('sectiondividerbottomflip', jQuery('#' + sectionID).attr('data-sectiondividerbottomflip'));
    localStorage.setItem('sectiondividertopzindex', jQuery('#' + sectionID).attr('data-sectiondividertopzindex'));
    localStorage.setItem('sectiondividerbottomzindex', jQuery('#' + sectionID).attr('data-sectiondividerbottomzindex'));
    localStorage.setItem('sectioncssparallax', jQuery('#' + sectionID).attr('data-sectioncssparallax'));
    localStorage.setItem('sectionrealparallax', jQuery('#' + sectionID).attr('data-sectionrealparallax'));
    localStorage.setItem('sectionrealparallaxDuration', jQuery('#' + sectionID).attr('data-sectionrealparallaxDuration'));
    localStorage.setItem('sectionrealparallaxHorizontal', jQuery('#' + sectionID).attr('data-sectionrealparallaxHorizontal'));
    localStorage.setItem('sectionrealparallaxOffset', jQuery('#' + sectionID).attr('data-sectionrealparallaxOffset'));
    localStorage.setItem('sectionrealparallaxsizex', jQuery('#' + sectionID).attr('data-sectionrealparallaxsizex'));
    localStorage.setItem('sectionrealparallaxsizey', jQuery('#' + sectionID).attr('data-sectionrealparallaxsizey'));
    localStorage.setItem('sectionparticlenumber', jQuery('#' + sectionID).attr('data-sectionparticlenumber'));
    localStorage.setItem('sectionparticledensity', jQuery('#' + sectionID).attr('data-sectionparticledensity'));
    localStorage.setItem('sectionparticlegrabopacity', jQuery('#' + sectionID).attr('data-sectionparticlegrabopacity'));
    localStorage.setItem('sectionparticlegrabdistance', jQuery('#' + sectionID).attr('data-sectionparticlegrabdistance'));
    localStorage.setItem('sectionparticleclickmode', jQuery('#' + sectionID).attr('data-sectionparticleclickmode'));
    localStorage.setItem('sectionparticleclick', jQuery('#' + sectionID).attr('data-sectionparticleclick'));
    localStorage.setItem('sectionparticlehovermode', jQuery('#' + sectionID).attr('data-sectionparticlehovermode'));
    localStorage.setItem('sectionparticlehover', jQuery('#' + sectionID).attr('data-sectionparticlehover'));
    localStorage.setItem('sectionparticleattractrotatey', jQuery('#' + sectionID).attr('data-sectionparticleattractrotatey'));
    localStorage.setItem('sectionparticleattractrotatex', jQuery('#' + sectionID).attr('data-sectionparticleattractrotatex'));
    localStorage.setItem('sectionparticlemoveoutmode', jQuery('#' + sectionID).attr('data-sectionparticlemoveoutmode'));
    localStorage.setItem('sectionparticlemoveattract', jQuery('#' + sectionID).attr('data-sectionparticlemoveattract'));
    localStorage.setItem('sectionparticlemovestraight', jQuery('#' + sectionID).attr('data-sectionparticlemovestraight'));
    localStorage.setItem('sectionparticlemoverandom', jQuery('#' + sectionID).attr('data-sectionparticlemoverandom'));
    localStorage.setItem('sectionparticlemovedirection', jQuery('#' + sectionID).attr('data-sectionparticlemovedirection'));
    localStorage.setItem('sectionparticlemovespeed', jQuery('#' + sectionID).attr('data-sectionparticlemovespeed'));
    localStorage.setItem('sectionparticlemoveenable', jQuery('#' + sectionID).attr('data-sectionparticlemoveenable'));
    localStorage.setItem('sectionparticlelinecolor', jQuery('#' + sectionID).attr('data-sectionparticlelinecolor'));
    localStorage.setItem('sectionparticlelinewidth', jQuery('#' + sectionID).attr('data-sectionparticlelinewidth'));
    localStorage.setItem('sectionparticlelineopacity', jQuery('#' + sectionID).attr('data-sectionparticlelineopacity'));
    localStorage.setItem('sectionparticlelinedistance', jQuery('#' + sectionID).attr('data-sectionparticlelinedistance'));
    localStorage.setItem('sectionparticlelinelinked', jQuery('#' + sectionID).attr('data-sectionparticlelinelinked'));
    localStorage.setItem('sectionparticlesizeanimsync', jQuery('#' + sectionID).attr('data-sectionparticlesizeanimsync'));
    localStorage.setItem('sectionparticleminsizeanim', jQuery('#' + sectionID).attr('data-sectionparticleminsizeanim'));
    localStorage.setItem('sectionparticlesizeanimspeed', jQuery('#' + sectionID).attr('data-sectionparticlesizeanimspeed'));
    localStorage.setItem('sectionparticlesizeanim', jQuery('#' + sectionID).attr('data-sectionparticlesizeanim'));
    localStorage.setItem('sectionparticlesizerandom', jQuery('#' + sectionID).attr('data-sectionparticlesizerandom'));
    localStorage.setItem('sectionparticlesizevalue', jQuery('#' + sectionID).attr('data-sectionparticlesizevalue'));
    localStorage.setItem('sectionparticleopacityanimsync', jQuery('#' + sectionID).attr('data-sectionparticleopacityanimsync'));
    localStorage.setItem('sectionparticleopacityanimspeed', jQuery('#' + sectionID).attr('data-sectionparticleopacityanimspeed'));
    localStorage.setItem('sectionparticleopacityanim', jQuery('#' + sectionID).attr('data-sectionparticleopacityanim'));
    localStorage.setItem('sectionparticleminopacityanim', jQuery('#' + sectionID).attr('data-sectionparticleminopacityanim'));
    localStorage.setItem('sectionparticleopacityrandom', jQuery('#' + sectionID).attr('data-sectionparticleopacityrandom'));
    localStorage.setItem('sectionparticleopacityvalue', jQuery('#' + sectionID).attr('data-sectionparticleopacityvalue'));
    localStorage.setItem('sectionparticleimageheight', jQuery('#' + sectionID).attr('data-sectionparticleimageheight'));
    localStorage.setItem('sectionparticleimagewidth', jQuery('#' + sectionID).attr('data-sectionparticleimagewidth'));
    localStorage.setItem('sectionparticlenbsides', jQuery('#' + sectionID).attr('data-sectionparticlenbsides'));
    localStorage.setItem('sectionparticlestrokecolor', jQuery('#' + sectionID).attr('data-sectionparticlestrokecolor'));
    localStorage.setItem('sectionparticlestrokewidth', jQuery('#' + sectionID).attr('data-sectionparticlestrokewidth'));
    localStorage.setItem('sectionparticleimagetype', jQuery('#' + sectionID).attr('data-sectionparticleimagetype'));
    localStorage.setItem('sectionparticlecolor', jQuery('#' + sectionID).attr('data-sectionparticlecolor'));
    localStorage.setItem('sectionparticledensityvalue', jQuery('#' + sectionID).attr('data-sectionparticledensityvalue'));
    localStorage.setItem('sectionparticlebubbledistance', jQuery('#' + sectionID).attr('data-sectionparticlebubbledistance'));
    localStorage.setItem('sectionparticlebubbleopacity', jQuery('#' + sectionID).attr('data-sectionparticlebubbleopacity'));
    localStorage.setItem('sectionparticlebubblesize', jQuery('#' + sectionID).attr('data-sectionparticlebubblesize'));
    localStorage.setItem('sectionparticlebubbleduration', jQuery('#' + sectionID).attr('data-sectionparticlebubbleduration'));
    localStorage.setItem('sectionparticlerepulse', jQuery('#' + sectionID).attr('data-sectionparticlerepulse'));
    localStorage.setItem('sectionhasparticles', jQuery('#' + sectionID).attr('data-sectionhasparticles'));
    localStorage.setItem('sectionparticlezindex', jQuery('#' + sectionID).attr('data-sectionparticlezindex'));
}
function restoreInitialValues(sectionID) {
    var intialHeight = false;
    if(localStorage.getItem('sectionheight')=='' || localStorage.getItem('sectionheight')=='0')
    {
        intialHeight = jQuery('#'+sectionID).height();
    }
    else{
        intialHeight = localStorage.getItem('sectionheight');
    }
    if(localStorage.getItem('sectionmarginleft')=='')
    {
        marginLeft = 'auto';        
    }
    else{
        marginLeft = localStorage.getItem('sectionmarginleft')+'px';
    }
    if(localStorage.getItem('sectionmarginright')=='')
    {
        marginRight = 'auto';        
    }
    else{
        marginRight = localStorage.getItem('sectionmarginright')+'px';
    }
    jQuery('#' + sectionID).css({
            "width": localStorage.getItem('sectionwidth') + '%',
            "height": intialHeight+'px',
            "background-size": localStorage.getItem('sectionbackgroundsize'),
            "background-repeat": localStorage.getItem('sectionbackgroundrepeat'),
            "background-position": localStorage.getItem('sectionbackgroundposition'),
            "background-blend-mode": localStorage.getItem('sectionbackgroundblend'),
            "mix-blend-mode": localStorage.getItem('sectionbackgroundmixblend'),
            "background-color": localStorage.getItem('sectionbackgroundcolor'),
            "margin-left": marginLeft,
            "margin-right": marginRight,
            "margin-top": localStorage.getItem('sectionmargintop'),
            "margin-bottom": localStorage.getItem('sectionmarginbottom'),
        }).attr('data-sectionmarginleft', localStorage.getItem('sectionmarginleft'))
        .attr('data-sectionmarginright', localStorage.getItem('sectionmarginright'))
        .attr('data-widgetmarginvertical', localStorage.getItem('widgetmarginvertical'))
        .attr('data-widgetmarginhorizontal', localStorage.getItem('widgetmarginhorizontal'))
        .attr('data-sectionmargintop', localStorage.getItem('sectionmargintop'))
        .attr('data-sectionmarginbottom', localStorage.getItem('sectionmarginbottom'))
        .attr('data-sectionwidth', localStorage.getItem('sectionwidth'))
        .attr('data-sectionheight', localStorage.getItem('sectionheight'))
        .attr('data-sectionbackgroundsize', localStorage.getItem('sectionbackgroundsize'))
        .attr('data-sectionbackgroundrepeat', localStorage.getItem('sectionbackgroundrepeat'))
        .attr('data-sectionbackgroundposition', localStorage.getItem('sectionbackgroundposition'))
        .attr('data-sectionbackgroundblend', localStorage.getItem('sectionbackgroundblend'))
        .attr('data-sectionbackgroundmixblend', localStorage.getItem('sectionbackgroundmixblend'))
        .attr('data-gradientused', localStorage.getItem('gradientused'))
        .attr('data-sectionbackgroundurl', localStorage.getItem('sectionbackgroundurl'))
        .attr('data-gradient', localStorage.getItem('gradient'))
        .attr('data-gradienttype', localStorage.getItem('gradienttype'))
        .attr('data-gradienthandlers', localStorage.getItem('gradienthandlers'))
        .attr('data-gradientangle', localStorage.getItem('gradientangle'))
        .attr('data-sectionbackgroundvideourl', localStorage.getItem('sectionbackgroundvideourl'))
        .attr('data-sectiondividertopname', localStorage.getItem('sectiondividertopname'))
        .attr('data-sectiondividerbottomname', localStorage.getItem('sectiondividerbottomname'))
        .attr('data-sectiondividertopfill', localStorage.getItem('sectiondividertopfill'))
        .attr('data-sectiondividerbottomfill', localStorage.getItem('sectiondividerbottomfill'))
        .attr('data-sectiondividertopviewboxwidth', localStorage.getItem('sectiondividertopviewboxwidth'))
        .attr('data-sectiondividerbottomviewboxwidth', localStorage.getItem('sectiondividerbottomviewboxwidth'))
        .attr('data-sectiondividertopheight', localStorage.getItem('sectiondividertopheight'))
        .attr('data-sectiondividerbottomheight', localStorage.getItem('sectiondividerbottomheight'))
        .attr('data-sectiondividertopzindex', localStorage.getItem('sectiondividertopzindex'))
        .attr('data-sectiondividerbottomzindex', localStorage.getItem('sectiondividerbottomzindex'))
        .attr('data-sectiondividertopflip', localStorage.getItem('sectiondividertopflip'))
        .attr('data-sectiondividerbottomflip', localStorage.getItem('sectiondividerbottomflip'))
        .attr('data-sectioncssparallax', localStorage.getItem('sectioncssparallax'))
        .attr('data-sectionrealparallax', localStorage.getItem('sectionrealparallax'))
        .attr('data-sectionrealparallaxDuration', localStorage.getItem('sectionrealparallaxDuration'))
        .attr('data-sectionrealparallaxOffset', localStorage.getItem('sectionrealparallaxOffset'))
        .attr('data-sectionrealparallaxHorizontal', localStorage.getItem('sectionrealparallaxHorizontal'))
        .attr('data-sectionrealparallaxsizex', localStorage.getItem('sectionrealparallaxsizex'))
        .attr('data-sectionrealparallaxsizey', localStorage.getItem('sectionrealparallaxsizey'))
        .attr('data-sectionhasparticles', localStorage.getItem('sectionhasparticles'))
        .attr('data-sectionparticlerepulse', localStorage.getItem('sectionparticlerepulse'))
        .attr('data-sectionparticlebubbleduration', localStorage.getItem('sectionparticlebubbleduration'))
        .attr('data-sectionparticlebubblesize', localStorage.getItem('sectionparticlebubblesize'))
        .attr('data-sectionparticlebubbleopacity', localStorage.getItem('sectionparticlebubbleopacity'))
        .attr('data-sectionparticlebubbledistance', localStorage.getItem('sectionparticlebubbledistance'))
        .attr('data-sectionparticledensityvalue', localStorage.getItem('sectionparticledensityvalue'))
        .attr('data-sectionparticlecolor', localStorage.getItem('sectionparticlecolor'))
        .attr('data-sectionparticleimagetype', localStorage.getItem('sectionparticleimagetype'))
        .attr('data-sectionparticlestrokewidth', localStorage.getItem('sectionparticlestrokewidth'))
        .attr('data-sectionparticlestrokecolor', localStorage.getItem('sectionparticlestrokecolor'))
        .attr('data-sectionparticlenbsides', localStorage.getItem('sectionparticlenbsides'))
        .attr('data-sectionparticleimagewidth', localStorage.getItem('sectionparticleimagewidth'))
        .attr('data-sectionparticleimageheight', localStorage.getItem('sectionparticleimageheight'))
        .attr('data-sectionparticleopacityvalue', localStorage.getItem('sectionparticleopacityvalue'))
        .attr('data-sectionparticleopacityrandom', localStorage.getItem('sectionparticleopacityrandom'))
        .attr('data-sectionparticleminopacityanim', localStorage.getItem('sectionparticleminopacityanim'))
        .attr('data-sectionparticleopacityanim', localStorage.getItem('sectionparticleopacityanim'))
        .attr('data-sectionparticleopacityanimspeed', localStorage.getItem('sectionparticleopacityanimspeed'))
        .attr('data-sectionparticleopacityanimsync', localStorage.getItem('sectionparticleopacityanimsync'))
        .attr('data-sectionparticlesizevalue', localStorage.getItem('sectionparticlesizevalue'))
        .attr('data-sectionparticlesizerandom', localStorage.getItem('sectionparticlesizerandom'))
        .attr('data-sectionparticlesizeanim', localStorage.getItem('sectionparticlesizeanim'))
        .attr('data-sectionparticlesizeanimspeed', localStorage.getItem('sectionparticlesizeanimspeed'))
        .attr('data-sectionparticleminsizeanim', localStorage.getItem('sectionparticleminsizeanim'))
        .attr('data-sectionparticlesizeanimsync', localStorage.getItem('sectionparticlesizeanimsync'))
        .attr('data-sectionparticlelinelinked', localStorage.getItem('sectionparticlelinelinked'))
        .attr('data-sectionparticlelineopacity', localStorage.getItem('sectionparticlelineopacity'))
        .attr('data-sectionparticlelinewidth', localStorage.getItem('sectionparticlelinewidth'))
        .attr('data-sectionparticlelinecolor', localStorage.getItem('sectionparticlelinecolor'))
        .attr('data-sectionparticlelinedistance', localStorage.getItem('sectionparticlelinedistance'))
        .attr('data-sectionparticlemoveenable', localStorage.getItem('sectionparticlemoveenable'))
        .attr('data-sectionparticlemovespeed', localStorage.getItem('sectionparticlemovespeed'))
        .attr('data-sectionparticlemovedirection', localStorage.getItem('sectionparticlemovedirection'))
        .attr('data-sectionparticlemoverandom', localStorage.getItem('sectionparticlemoverandom'))
        .attr('data-sectionparticlemovestraight', localStorage.getItem('sectionparticlemovestraight'))
        .attr('data-sectionparticlemoveattract', localStorage.getItem('sectionparticlemoveattract'))
        .attr('data-sectionparticlemoveoutmode', localStorage.getItem('sectionparticlemoveoutmode'))
        .attr('data-sectionparticleattractrotatex', localStorage.getItem('sectionparticleattractrotatex'))
        .attr('data-sectionparticleattractrotatey', localStorage.getItem('sectionparticleattractrotatey'))
        .attr('data-sectionparticlehover', localStorage.getItem('sectionparticlehover'))
        .attr('data-sectionparticlehovermode', localStorage.getItem('sectionparticlehovermode'))
        .attr('data-sectionparticleclick', localStorage.getItem('sectionparticleclick'))
        .attr('data-sectionparticleclickmode', localStorage.getItem('sectionparticleclickmode'))
        .attr('data-sectionparticlegrabdistance', localStorage.getItem('sectionparticlegrabdistance'))
        .attr('data-sectionparticlegrabopacity', localStorage.getItem('sectionparticlegrabopacity'))
        .attr('data-sectionparticledensity', localStorage.getItem('sectionparticledensity'))
        .attr('data-sectionparticlenumber', localStorage.getItem('sectionparticlenumber'))
        .attr('data-sectionparticlezindex', localStorage.getItem('sectionparticlezindex'));

    if (localStorage.getItem('gradientused') == '1') {
        if (localStorage.getItem('sectionbackgroundurl') != 'none') {
            var gradient = localStorage.getItem('gradient');
            jQuery('#vmutc_sectionBackgroundColorStyle').html(jQuery('#' + sectionID).selector + "{" + gradient + "}");
        } else {
            jQuery('#vmutc_sectionBackgroundColorStyle').html(jQuery('#' + sectionID).selector + "{background-color:" + jQuery('#' + sectionID).attr('data-sectionbackgroundcolor') + ";" + localStorage.getItem('gradient') + "}");
        }
    } else {
        if (localStorage.getItem('sectionbackgroundurl') != 'none') {
            jQuery('#vmutc_sectionBackgroundColorStyle').html(jQuery('#' + sectionID).selector + "{background-color:" + localStorage.getItem('sectionbackgroundcolor') + ";background-image:url(" + baseDir + "assets/img/gallery/" + localStorage.getItem('sectionbackgroundurl') + ")}");
        } else {
            jQuery('#vmutc_sectionBackgroundColorStyle').html(jQuery('#' + sectionID).selector + "{background-color:" + localStorage.getItem('sectionbackgroundcolor') + ";background:" + localStorage.getItem('sectionbackgroundcolor') + "}");
        }
    }
    if (localStorage.getItem('sectionbackgroundvideourl') != '') {
        jQuery('#' + sectionID).find(".vmutc_video_editorContainer").remove();
        jQuery('#' + sectionID).prepend('<div class="vmutc_video_editorContainer"><video autoplay loop src="' + baseDir + 'assets/img/video/' + localStorage.getItem('sectionbackgroundvideourl') + '" alt="' + localStorage.getItem('sectionbackgroundvideourl') + '" /></div>');
    } else {
        jQuery('#' + sectionID).find(".vmutc_video_editorContainer").remove();
    }
    if (localStorage.getItem('sectiondividertopname') != '') {
        var svg = localStorage.getItem('sectiondividertopsvg');
        jQuery('#' + sectionID).find(".vmutc_sectionBackgroundDividerTop").html(svg);
    }
    if (localStorage.getItem('sectiondividerbottomvalue') != '') {
        var svg = localStorage.getItem('sectiondividerbottomsvg')
        jQuery('#' + sectionID).find(".vmutc_sectionBackgroundDividerBottom").html(svg);
    }
    if (localStorage.getItem('sectioncssparallax') == 1) {
        jQuery('#' + sectionID).addClass('background_css_parallax');
    } else {
        jQuery('#' + sectionID).removeClass('background_css_parallax');
    }
    if (localStorage.getItem('sectionrealparallax') == 1) {
            var duration = localStorage.getItem('sectionrealparallaxDuration');
            var offset = localStorage.getItem('sectionrealparallaxOffset');
            var sizeX = localStorage.getItem('sectionrealparallaxsizex');
            var sizeY = localStorage.getItem('sectionrealparallaxsizey');
         
            if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
                    backgroundTimeline[sectionID].pause(0, true);
                    backgroundTimeline[sectionID].clear();
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
                }
                backgroundTimeline[sectionID] = new gsap.timeline();
                backgroundTimeline[sectionID].set('#' + sectionID, {
                    x: 0,
                    y: 0
                });
                backgroundTimeline[sectionID].to('#' + sectionID, {
                    x: sizeX,
                    y: - sizeY,
                    ease: Linear.easeNone,
                    duration: 0.1
                })
                ScrollTrigger.create({
                    animation:  backgroundTimeline[sectionID],
                    trigger:jQuery('#'+sectionID),
                    toggleActions:'play none none none',
                    start: offset+'px center',
                    end:'+='+duration,
                   markers:true,
                   scrub:true,
                   id:sectionID+'-scrollTrigger'
                  });
      } else { 
        if (typeof (backgroundTimeline[sectionID]) != 'undefined') {
            backgroundTimeline[sectionID].clear();
         jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
      
        }
    }
    if (localStorage.getItem('sectionhasparticles') == 1) {
        updateSectionParticle(sectionID);
    } else {
        jQuery('#vmutc_sectionParticlesContainer').hide();
        jQuery('#' + sectionID + ' canvas.tsparticles-canvas-el').remove();
    }
}
function updateSectionParticle(particleID) {
    var bounce = false;
    if (jQuery('#' + particleID).attr('data-sectionparticlemoveoutmode') == 'bounce')
        bounce = true;
    particlesObj = {
        "particles": {
            "number": {
                "value": jQuery('#' + particleID).attr('data-sectionparticlenumber'),
                "density": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticledensity'))),
                    "valueArea": jQuery('#' + particleID).attr('data-sectionparticledensityvalue')
                }
            },
            "color": {
                "value": jQuery('#' + particleID).attr('data-sectionparticlecolor')
            },
            "shape": {
                "type": jQuery('#' + particleID).attr('data-sectionparticleimagetype'),
                "stroke": {
                    "width": jQuery('#' + particleID).attr('data-sectionparticlestrokewidth'),
                    "color": jQuery('#' + particleID).attr('data-sectionparticlestrokecolor')
                },
                "polygon": {
                    "nbSides": jQuery('#' + particleID).attr('data-sectionparticlenbsides')
                },
                "image": {
                    "src": jQuery('#' + particleID).attr('data-sectionparticleimageurl'),
                    "width": jQuery('#' + particleID).attr('data-sectionparticleimagewidth'),
                    "height": jQuery('#' + particleID).attr('data-sectionparticleimageheight')
                }
            },
            "opacity": {
                "value": jQuery('#' + particleID).attr('data-sectionparticleopacityvalue'),
                "random": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticleopacityrandom'))),
                "anim": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticleopacityanim'))),
                    "speed": jQuery('#' + particleID).attr('data-sectionparticleopacityanimspeed'),
                    "minimumValue": jQuery('#' + particleID).attr('data-sectionparticleminopacityanim'),
                    "sync": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticleopacityanimsync')))
                }
            },
            "size": {
                "value": jQuery('#' + particleID).attr('data-sectionparticlesizevalue'),
                "random": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlesizerandom'))),
                "anim": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlesizeanim'))),
                    "speed": jQuery('#' + particleID).attr('data-sectionparticlesizeanimspeed'),
                    "minimumValue": jQuery('#' + particleID).attr('data-sectionparticleminsizeanim'),
                    "sync": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlesizeanimsync')))
                }
            },
            "lineLinked": {
                "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlelinelinked'))),
                "distance": jQuery('#' + particleID).attr('data-sectionparticlelinedistance'),
                "color": jQuery('#' + particleID).attr('data-sectionparticlelinecolor'),
                "opacity": jQuery('#' + particleID).attr('data-sectionparticlelineopacity'),
                "width": jQuery('#' + particleID).attr('data-sectionparticlelinewidth')
            },
            "move": {
                "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlemoveenable'))),
                "speed": jQuery('#' + particleID).attr('data-sectionparticlemovespeed'),
                "direction": jQuery('#' + particleID).attr('data-sectionparticlemovedirection'),
                "bounce": bounce,
                "random": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlemoverandom'))),
                "straight": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlemovestraight'))),
                "outMode": jQuery('#' + particleID).attr('data-sectionparticlemoveoutmode'),
                "attract": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlemoveattract'))),
                    "rotateX": jQuery('#' + particleID).attr('data-sectionparticleattractrotatex'),
                    "rotateY": jQuery('#' + particleID).attr('data-sectionparticleattractrotatey')
                }
            }
        },
        "interactivity": {
            "detectsOn": "canvas",
            "events": {
                "onHover": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticlehover'))),
                    "mode": jQuery('#' + particleID).attr('data-sectionparticlehovermode')
                },
                "onClick": {
                    "enable": Boolean(Number(jQuery('#' + particleID).attr('data-sectionparticleclick'))),
                    "mode": jQuery('#' + particleID).attr('data-sectionparticleclickmode')
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": jQuery('#' + particleID).attr('data-sectionparticlegrabdistance'),
                    "lineLinked": {
                        "opacity": jQuery('#' + particleID).attr('data-sectionparticlegrabopacity')
                    }
                },
                "bubble": {
                    "distance": jQuery('#' + particleID).attr('data-sectionparticlebubbledistance'),
                    "size": jQuery('#' + particleID).attr('data-sectionparticlebubblesize'),
                    "duration": jQuery('#' + particleID).attr('data-sectionparticlebubbleduration'),
                    "opacity": jQuery('#' + particleID).attr('data-sectionparticlebubbleopacity'),
                    "speed": 3
                },
                "repulse": {
                    "distance": jQuery('#' + particleID).attr('data-sectionparticlerepulse'),
                    "duration": 0.4
                },
                "push": {
                    "quantity": 4
                },
                "remove": {
                    "quantity": 2
                }
            }
        },
        "detectRetina": true
    }
    var height = jQuery('#' + particleID).height();
    var width = jQuery('#' + particleID).width();
    if (typeof (window.pJSDom[particleID]) != 'undefined')
        window.pJSDom[particleID].pJS.fn.vendors.destroypJS();
        tsParticles.load(particleID, particlesObj);
    var particlesCanvas = jQuery('#' + particleID + ' canvas.tsparticles-canvas-el');
    jQuery(particlesCanvas).css({
        'width': width + 'px',
        'height': height + 'px',
        'z-index': jQuery('#' + particleID).attr('data-sectionparticlezindex')
    });
  
}
function updateSectionBackground(id_block) {
    Swal.close();
    jQuery('*').removeClass('vmutc-selected vmutc-elementOver');
    if (typeof (backgroundTimeline[id_block]) != 'undefined')              
    backgroundTimeline[id_block].set('#' + id_block,{x:0,y:0});
   
    var elementToSave = document.getElementById(id_block);
                        var clone = elementToSave.cloneNode(true);
                        var admin_clone = clone;
        
                        jQuery(admin_clone).css('transform','');
                        jQuery(admin_clone).find('.grid-stack-item').css('transform','');           
                   
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
        id_block: id_block,
        parent: jQuery('#' + id_block).attr('data-parent'),
        where: jQuery('#' + id_block).attr('data-where'),
        what: jQuery('#' + id_block).attr('data-what'),
        whatClass: jQuery('#' + id_block).attr('data-whatclass'),
        publish: jQuery('#' + id_block).attr('data-publish'),
        style: jQuery('#' + id_block).attr('style'),
        action: 'saveBlock'
    };
    jQuery.ajax({
        type: "POST",
        url: cssm_front_ajax_object.ajaxurl,
        data: values,
        success: function (id) {
            console.log('Section updated with success');
            jQuery('#elementClose_' + id_block).attr('data-index', id);
            jQuery('#' + id_block + ' .gridstack-save').hide();
        }
    });
}
function getAllGradientVendor(link, allGradientArray) {
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