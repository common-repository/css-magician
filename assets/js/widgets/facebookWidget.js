jQuery(document).ready(
    function ($) {
        addWidgetButton('facebook', 'vmutc-create-addFacebook', 'fab fa-facebook-square', 'Facebook','basic');
        $(document).on('click', '#vmutc-create-addFacebook', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-facebookID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditFacebook elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="facebookWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="facebook" data-whatClass="facebookWidget" ' +
                'data-facebookalign="left" data-facebookurl="" data-facebookheight="500" data-facebookwidth="500" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0" >' +
                '<iframe src="https://www.facebook.com/plugins/page.php" ' +
                'style="border: none; min-height: 70px;" scrolling="yes" allow="encrypted-media" allowfullscreen="true" frameborder="0" height="100%"/>'
            '</div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditFacebook', function () {
            var facebookID = $(this).attr('data-element');
            $('div.ui-dialog-content').dialog('close');
            if (facebookID) {
                createFacebook(facebookID);
                saveWidgetInitialValues(facebookID);
                $("#vmutc_facebookContainer").dialog({
                    autoOpen: false,
                    modal: false,
                    dialogClass: 'EditorContainer',
                    width: '620',
                    height: '700',
                    resizable: false,
                    title: 'Facebook Editor',
                    open: function (event, ui) {
                        $(".ui-dialog-titlebar-close").hide();
                        $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="facebookWidget" data-title="' + cssmTranslate.facebooktitle + '"></i>');
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
                                restoreWidgetInitialValues(facebookID);
                                $(this).dialog("close");
                                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                            },
                            text: cssmTranslate.vmutccancel,
                            class: 'dialog-closeButton',
                        },
                        Save: {
                            text: cssmTranslate.vmutcsave,
                            click: function () {
                                $('*').removeClass('vmutc-selected vmutc-elementOver');
                                var id_block = $('#' + facebookID).attr('data-parent');
                                $('#' + id_block).find('.vmutc_widget_over').removeClass('vmutc_widget_over');
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
                                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();

                            }
                        }
                    }
                }), $('.EditorContainer').draggable();
                $("#vmutc_facebookContainer").dialog("open");
            }
        });
        $(document).on('keyup', '#vmutc_facebookLink', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var content = this.value;
            var height = $('#' + what).attr('data-facebookheight');
            var height = $('#' + what).attr('data-facebookheight');
            var url = 'https://www.facebook.com/plugins/page.php?href=' + content + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=500&adapt_container_width=true';
            $('#' + what + ' iframe').attr('src', url);
            $('#' + what).attr('data-facebookurl', content);
        });
        $(document).on('click', '#vmutc_facebookAlignChoose .btn', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var val = $(this).find('input').val();
            $('#' + what).attr('data-facebookalign', val);
            $(this).closest('.cssm-btn-group').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#' + what).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center');
            if (val == 'left') {
                $('#' + what).addClass('vmutc_align_left');
            }
            if (val == 'right') {
                $('#' + what).addClass('vmutc_align_right');
            }
            if (val == 'center') {
                $('#' + what).addClass('vmutc_align_center');
            }
        });
        var heightSlider = document.getElementById('vmutc_facebookHeight');
        noUiSlider.create(heightSlider, {
            start: 500,
            step: 1,
            range: {
                min: 70,
                max: 2000
            },
        });
        heightSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var height = Math.round(values);
            var width = $('#' + what).attr('data-facebookwidth');
            var url = $('#' + what).attr('data-facebookurl');
            var pluginurl = 'https://www.facebook.com/plugins/page.php?href=' + url + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=' + width + '&adapt_container_width=true';
            $('#vmutc_facebookHeight_input').val(height);
            $('#' + what).attr('data-facebookheight', height);
            $('#' + what + ' iframe').attr('src', pluginurl).height(height + 'px');
            var parentHeight = $('#' + what).closest('.sectionEnabled').find('.vmutc_ge_column_container .column.ge-column').height();
            if (parentHeight < height) {
                $('#' + what).closest('.sectionEnabled').find('.vmutc_ge_column_container .column.ge-column').height(height + 'px').attr('data-columnheight', height);
            }
        });
        $(document).on('change', '#vmutc_facebookHeight_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var height = Math.round(this.value);
            var width = $('#' + what).attr('data-facebookwidth');
            var url = $('#' + what).attr('data-facebookurl');
            var height = $('#' + what).attr('data-facebookheight');
            var pluginurl = 'https://www.facebook.com/plugins/page.php?href=' + url + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=' + width + '&adapt_container_width=true';
            $('#vmutc_facebookHeight_input').val(height);
            $('#' + what).attr('data-facebookheight', height);
            $('#' + what + ' iframe').attr('src', pluginurl).height(height + 'px');
        });
        var widthSlider = document.getElementById('vmutc_facebookWidth');
        noUiSlider.create(widthSlider, {
            start: 500,
            step: 1,
            range: {
                min: 180,
                max: 1000
            },
        });
        widthSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var width = Math.round(values);
            var height = $('#' + what).attr('data-facebookheight');
            var url = $('#' + what).attr('data-facebookurl');
            var pluginurl = 'https://www.facebook.com/plugins/page.php?href=' + url + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=' + width + '&adapt_container_width=true';
            $('#vmutc_facebookWidth_input').val(width);
            $('#' + what).attr('data-facebookwidth', width);
            $('#' + what + ' iframe').attr('src', pluginurl).css('width', width + 'px');
        });
        $(document).on('change', '#vmutc_facebookWidth_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var width = Math.round(this.value);
            var url = $('#' + what).attr('data-facebookurl');
            var height = $('#' + what).attr('data-facebookheight');
            var pluginurl = 'https://www.facebook.com/plugins/page.php?href=' + url + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=' + width + '&adapt_container_width=true';
            $('#vmutc_facebookWidth_input').val(width);
            $('#' + what).attr('data-facebookwidth', width);
            $('#' + what + ' iframe').attr('src', pluginurl).css('width', width + 'px');
        });

        function createFacebook(widgetID) {
            $('#vmutc_blockColumn_id').val(widgetID);
            var url = $('#' + widgetID).attr('data-facebookurl');
            $('#vmutc_facebookLink').val(url);
            var height = $('#' + widgetID).attr('data-facebookheight');
            $('#vmutc_facebookHeight_input').val(height);
            heightSlider.noUiSlider.set(height);
            var width = $('#' + widgetID).attr('data-facebookwidth');
            $('#vmutc_facebookWidth_input').val(width);
            widthSlider.noUiSlider.set(width);
            $('#vmutc_facebookAlignChoose .btn').removeClass('active');
            var facebookalign = $('#' + widgetID).attr('data-facebookalign');
            if (facebookalign == 'left')
                $('#vmutc_facebookAlignChoose .btn.fa-align-left').addClass('active');
            if (facebookalign == 'right')
                $('#vmutc_facebookAlignChoose .btn.fa-align-right').addClass('active');
            if (facebookalign == 'center')
                $('#vmutc_facebookAlignChoose .btn.fa-align-center').addClass('active');
            var type = $('#' + widgetID).attr('data-animatortype');
            var start = $('#' + widgetID).attr('data-animatorstart');
            var end = $('#' + widgetID).attr('data-animatorend');
            var duration = $('#' + widgetID).attr('data-animatorduration');
            var easeCode = $('#' + widgetID).attr('data-animatoreasecode');
            var ease = $('#' + widgetID).attr('data-animatorease');
            var reverse = $('#' + widgetID).attr('data-animatorreverse');
            var scrub = $('#' + widgetID).attr('data-animatorscrub');
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_facebookContainer', duration, easeCode, ease, reverse, scrub, end);
        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('facebookWidgeturl', $('#' + widgetID).attr('data-facebookurl'));
            localStorage.setItem('facebookWidgetalign', $('#' + widgetID).attr('data-facebookalign'));
            localStorage.setItem('facebookWidgetheight', $('#' + widgetID).attr('data-facebookheight'));
            localStorage.setItem('facebookWidgetwidth', $('#' + widgetID).attr('data-facebookwidth'));
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
            var url = localStorage.getItem('facebookWidgeturl');
            var height = localStorage.getItem('facebookWidgetheight');
            var width = localStorage.getItem('facebookWidgetwidth');
            var pluginurl = 'https://www.facebook.com/plugins/page.php?href=' + url + '/&tabs=timeline&small_header=false&hide_cover=false&show_facepile=true&hide_cta=false&height=' + height + '&width=' + width + '&adapt_container_width=true';
            var facebookalign = localStorage.getItem('facebookWidgetalign');
            $('#' + widgetID).removeClass('vmutc_align_left vmutc_align_right vmutc_align_center');
            if (facebookalign == 'left') {
                $('#' + widgetID).addClass('vmutc_align_left');
            }
            if (facebookalign == 'right') {
                $('#' + widgetID).addClass('vmutc_align_right');
            }
            if (facebookalign == 'center') {
                $('#' + widgetID).addClass('vmutc_align_center');
            }
            $('#' + widgetID).attr('data-facebookurl', url);
            $('#' + widgetID).attr('data-facebookalign', facebookalign);
            $('#' + widgetID).attr('data-facebookheight', height);
            $('#' + widgetID + ' iframe').attr('src', pluginurl).height(height + 'px');
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
         //   updateAnimatorValues(widgetID, type, start, 'vmutc_facebookContainer', duration, easecode, ease, reverse, scrub, end);
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