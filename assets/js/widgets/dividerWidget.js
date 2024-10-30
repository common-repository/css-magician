jQuery(document).ready(
    function ($) {
        addWidgetButton('divider', 'vmutc-create-addDivider', 'fas fa-bacon', 'Divider');
        $(document).on('click', '#vmutc-create-addDivider', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-shapeDividerID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditDivider elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="dividerWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="divider" data-whatClass="dividerWidget" ' +
                'data-dividertopname="none" data-dividerwidgettopfill="#000000" data-dividerwidgetbottomfill="#000000" data-dividerwidgettopviewboxwidth="1300" ' +
                'data-dividerwidgetbottomviewboxwidth="1300" data-dividerwidgettopviewboxheight="30" data-dividerwidgetbottomviewboxheight="30" ' +
                ' data-dividerwidgettopflip="0" data-dividerwidgetbottomflip="0" data-dividerbottomname="none" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0">' +
                '<div class="vmutc_dividerWidget_containerTop"></div>' +
                '<div class="vmutc_dividerWidget_containerBottom"></div>';
            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });
        $(document).on('click', '.elementEditDivider', function () {
            $('div.ui-dialog-content').dialog('close');
            var dividerID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(dividerID);
            createDivider(dividerID);
            saveWidgetInitialValues(dividerID);
            $("#vmutc_dividerContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '620',
                height: '700',
                resizable: false,
                title: 'Divider Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="dividerWidget" data-title="'+cssmTranslate.dividertitle+'"></i>');
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
                            restoreWidgetInitialValues(dividerID);
                            $(this).dialog("close");
                            localStorage.clear();
                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click:function () {
                        $('*').removeClass('vmutc-selected vmutc-elementOver');
                        var id_block = $('#' + dividerID).attr('data-parent');
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
                        localStorage.clear();
                    }
                }
                }
            }), $('.EditorContainer').draggable();
            $("#vmutc_dividerContainer").dialog("open");
        });
        $(document).on('click', '.vmutc_svg_select', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var what = $('#vmutc_blockColumn_id').val();
            $('.vmutc_svg_select').removeClass('vmutc_divider_selected');
            $(this).addClass('vmutc_divider_selected');
            if ($(this).attr('data-name') != 'none') {
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what + ' .vmutc_dividerWidget_containerTop').html(this.innerHTML);
                    $('#' + what).attr('data-dividertopname', $(this).attr('data-name'));
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom').html(this.innerHTML);
                    $('#' + what).attr('data-dividerbottomname', $(this).attr('data-name'));
                }
            } else {
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what + ' .vmutc_dividerWidget_containerTop').html('');
                    $('#' + what).attr('data-dividertopname', $(this).attr('data-name'));
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom').html('');
                    $('#' + what).attr('data-dividerbottomname', $(this).attr('data-name'));
                }
            }
        });
        $(document).on('click', '#vmutc_dividerWidget_top_button', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $(this).addClass('active');
            $('#vmutc_dividerWidget_bottom_button').removeClass('active');
            $('.vmutc_svg_select svg').removeClass('svg_divider_rotateY vmutc_divider_bottom').addClass('svg_divider_rotateXY vmutc_divider_top');
            $(".vmutc_svg_select").removeClass('vmutc_divider_selected');
            $('#vmutc_dividerWidget_BackgroundColor').spectrum('set', $('#' + what).attr('data-dividerwidgettopfill'));
            dividerWidth.noUiSlider.set($('#' + what).attr('data-dividerwidgettopviewboxwidth'));
            $('#vmutc_dividerWidget_width').val($('#' + what).attr('data-dividerwidgettopviewboxwidth'));
            dividerHeight.noUiSlider.set($('#' + what).attr('data-dividerwidgettopviewboxheight'));
            $('#vmutc_dividerWidget_height').val($('#' + what).attr('data-dividerwidgettopviewboxheight'));
            var svgName = $('#' + what).attr('data-dividerwidgettopname');
            if (svgName != '')
                $(".vmutc_svg_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
            if ($('#' + what).attr('data-dividerwidgettopflip') == '1')
                $('#vmutc_dividerWidget_flip').prop('checked', true);
            else
                $('#vmutc_dividerWidget_flip').prop('checked', false);
        });
        $(document).on('click', '#vmutc_dividerWidget_bottom_button', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $(this).addClass('active');
            $('#vmutc_dividerWidget_top_button').removeClass('active');
            $('.vmutc_svg_select svg').removeClass('svg_divider_rotateXY vmutc_divider_top').addClass('svg_divider_rotateY vmutc_divider_bottom');
            $(".vmutc_svg_select").removeClass('vmutc_divider_selected');
            $('#vmutc_dividerWidget_BackgroundColor').spectrum('set', $('#' + what).attr('data-dividerwidgetbottomfill'));
            dividerWidth.noUiSlider.set($('#' + what).attr('data-dividerwidgetbottomviewboxwidth'));
            $('#vmutc_dividerWidget_width').val($('#' + what).attr('data-dividerwidgetbottomviewboxwidth'));
            dividerHeight.noUiSlider.set($('#' + what).attr('data-dividerwidgetbottomviewboxheight'));
            $('#vmutc_dividerWidget_height').val($('#' + what).attr('data-dividerwidgetbottomviewboxheight'));
            var svgName = $('#' + what).attr('data-dividerwidgetbottomname');
            $(".vmutc_svg_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
            if ($('#' + what).attr('data-dividerwidgetbottomflip') == '1')
                $('#vmutc_dividerWidget_flip').prop('checked', true);
            else
                $('#vmutc_dividerWidget_flip').prop('checked', false);
        });
        $("#vmutc_dividerWidget_BackgroundColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: true,
            showInitial: true,
            clickoutFiresChange: false,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgettopfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerTop svg').attr('fill', color);
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgetbottomfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').attr('fill', color);
                }
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                color = color.toRgbString();
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgettopfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerTop svg').attr('fill', color);
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgetbottomfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').attr('fill', color);
                }
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                if (color != null)
                    color = color.toRgbString();
                else
                    color = 'transparent';
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgettopfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerTop svg').attr('fill', color);
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgetbottomfill', color);
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').attr('fill', color);
                }
            }
        });
        dividerHeight = document.getElementById('vmutc_dividerWidget_height_slider');
        noUiSlider.create(dividerHeight, {
            start: 30,
            step: 1,
            range: {
                min: 0,
                max: 2000
            },
        });
        dividerHeight.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var height = Math.round(values);
            $('#vmutc_dividerWidget_height').val(height);
            if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgettopviewboxheight', height);
                //      var width = $('#' + what).attr('data-dividerwidgettopviewboxwidth');
                //      $('#' + what + ' .vmutc_dividerWidget_containerTop svg')[0].setAttribute('viewBox', '0 0 ' + width + ' '+height);
                $('#' + what + ' .vmutc_dividerWidget_containerTop svg').css('height', height);
            }
            if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgetbottomviewboxheight', height);
                //       var width = $('#' + what).attr('data-dividerwidgetbottomviewboxwidth');
                //     $('#' + what + ' .vmutc_dividerWidget_containerBottom svg')[0].setAttribute('viewBox', '0 0 ' + width + ' '+height);
                $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').css('height', height);
            }
        });
        $('#vmutc_dividerWidget_height').on('change', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var height = Math.round(this.value);
            dividerHeight.noUiSlider.set(height);
            if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgettopviewboxheight', height);
                $('#' + what + ' .vmutc_dividerWidget_containerTop svg').css('height', height);
            }
            if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgetbottomviewboxheight', height);
                $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').css('height', height);
            }
        });
        dividerWidth = document.getElementById('vmutc_dividerWidget_width_slider');
        noUiSlider.create(dividerWidth, {
            start: 1300,
            step: 1,
            range: {
                min: 1,
                max: 5000
            },
        });
        dividerWidth.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var width = Math.round(values);
            $('#vmutc_dividerWidget_width').val(width);
            if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgettopviewboxwidth', width);
                $('#' + what + ' .vmutc_dividerWidget_containerTop svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
            if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgetbottomviewboxwidth', width);
                var height = $('#' + what).attr('data-dividerwidgetbottomviewboxheight');
                $('#' + what + ' .vmutc_dividerWidget_containerBottom svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
        });
        $('#vmutc_dividerWidget_width').on('change', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var width = Math.round(this.value);
            dividerWidth.noUiSlider.set(width);
            if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgettopviewboxwidth', width);
                var height = $('#' + what).attr('data-dividerwidgettopviewboxheight');
                $('#' + what + ' .vmutc_dividerWidget_containerTop svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
            if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                $('#' + what).attr('data-dividerwidgetbottomviewboxwidth', width);
                var height = $('#' + what).attr('data-dividerwidgetbottomviewboxheight');
                $('#' + what + ' .vmutc_dividerWidget_containerBottom svg')[0].setAttribute('viewBox', '0 0 ' + width + ' 140');
            }
        });
        $(document).on('change', '#vmutc_dividerWidget_flip', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgettopflip', 0);
                    $('#' + what + ' .vmutc_dividerWidget_containerTop svg').removeClass('svg_divider_rotateX').addClass('svg_divider_rotateXY');
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgetbottomflip', 0);
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').addClass('svg_divider_rotateY');
                }
            } else {
                if ($('#vmutc_dividerWidget_top_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgettopflip', 1);
                    $('#' + what + ' .vmutc_dividerWidget_containerTop svg').removeClass('svg_divider_rotateXY').addClass('svg_divider_rotateX');
                }
                if ($('#vmutc_dividerWidget_bottom_button').hasClass('active')) {
                    $('#' + what).attr('data-dividerwidgetbottomflip', 1);
                    $('#' + what + ' .vmutc_dividerWidget_containerBottom svg').removeClass('svg_divider_rotateY');
                }
            }
        });
        function createDivider(dividerID) {
            $('#vmutc_dividerWidget_top_button').trigger('click');
            $('#vmutc_dividerWidget_BackgroundColor').spectrum('set', $('#' + dividerID).attr('data-dividerwidgettopfill'));
            dividerWidth.noUiSlider.set($('#' + dividerID).attr('data-dividerwidgettopviewboxwidth'));
            $('#vmutc_dividerWidget_width').val($('#' + dividerID).attr('data-dividerwidgettopviewboxwidth'));
            dividerHeight.noUiSlider.set($('#' + dividerID).attr('data-dividerwidgettopviewboxheight'));
            $('#vmutc_dividerWidget_height').val($('#' + dividerID).attr('data-dividerwidgettopviewboxheight'));
            if ($('#' + dividerID).attr('data-dividerwidgettopflip') == 1)
                $('#vmutc_dividerWidget_flip').prop('checked', true);
            else
                $('#vmutc_dividerWidget_flip').prop('checked', false);
            var svgName = $('#' + dividerID).attr('data-dividertopname');
            if (svgName != '')
                $(".vmutc_svg_select[data-name=" + svgName + "]").addClass('vmutc_divider_selected');
        }
        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('dividercolortop', $('#' + widgetID).attr('data-dividerwidgettopfill'));
            localStorage.setItem('dividercolorbottom', $('#' + widgetID).attr('data-dividerwidgetbottomfill'));
            localStorage.setItem('dividertopwidth', $('#' + widgetID).attr('data-dividerwidgettopviewboxwidth'));
            localStorage.setItem('dividerbottomwidth', $('#' + widgetID).attr('data-dividerwidgetbottomviewboxwidth'));
            localStorage.setItem('dividertopheight', $('#' + widgetID).attr('data-dividerwidgettopviewboxheight'));
            localStorage.setItem('dividerbottomheight', $('#' + widgetID).attr('data-dividerwidgetbottomviewboxheight'));
            localStorage.setItem('dividertopflip', $('#' + widgetID).attr('data-dividerwidgettopflip'));
            localStorage.setItem('dividerbottomflip', $('#' + widgetID).attr('data-dividerwidgetbottomflip'));
            localStorage.setItem('dividertopname', $('#' + widgetID).attr('data-dividertopname'));
            localStorage.setItem('dividerbottomname', $('#' + widgetID).attr('data-dividerbottomname'));
            localStorage.setItem('dividertopsvg', $('#' + widgetID + ' .vmutc_dividerWidget_containerTop').html());
            localStorage.setItem('dividerbottomsvg', $('#' + widgetID + ' .vmutc_dividerWidget_containerBottom').html())
        }
        function restoreWidgetInitialValues(widgetID) {
            $('#' + widgetID).attr('data-dividerwidgettopfill', localStorage.getItem('dividercolortop'))
                .attr('data-dividerwidgetbottomfill', localStorage.getItem('dividercolorbottom'))
                .attr('data-dividerwidgettopviewboxwidth', localStorage.getItem('dividertopwidth'))
                .attr('data-dividerwidgetbottomviewboxwidth', localStorage.getItem('dividerbottomwidth'))
                .attr('data-dividerwidgettopviewboxheight', localStorage.getItem('dividertopheight'))
                .attr('data-dividerwidgetbottomviewboxheight', localStorage.getItem('dividerbottomheight'))
                .attr('data-dividerwidgettopflip', localStorage.getItem('dividertopflip'))
                .attr('data-dividerwidgetbottomflip', localStorage.getItem('dividerbottomflip'))
                .attr('data-dividertopname', localStorage.getItem('dividertopname'))
                .attr('data-dividerbottomname', localStorage.getItem('dividerbottomname'));
            $('#' + widgetID + ' .vmutc_dividerWidget_containerTop').html(localStorage.getItem('dividertopsvg'));
            $('#' + widgetID + ' .vmutc_dividerWidget_containerBottom').html(localStorage.getItem('dividerbottomsvg'));
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