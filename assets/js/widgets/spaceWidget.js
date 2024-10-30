jQuery(document).ready(
    function ($) {

        addWidgetButton('space', 'vmutc-create-addSpace', 'fas fa-arrows-alt-v', 'Spacer','basic');

        $(document).on('click', '#vmutc-create-addSpace', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();

            var uniqueID = 'vmutc-spaceID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditSpace elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="spaceWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="space" data-whatClass="spaceWidget" data-height="50" style="height:50px;">' +
                '</div>';

            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid, 'spacer', uniqueID);
            $('#elementEdit_' + uniqueID).trigger('click');
        });

        $(document).on('click', '.elementEditSpace', function () {
            var spaceID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(spaceID);
            $('div.ui-dialog-content').dialog('close');


            createSpace(spaceID);
            saveWidgetInitialValues(spaceID);

            $("#vmutc_spaceContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '520',
                height: '300',
                resizable: false,
                title: "Space Editor",
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="spaceWidget" data-title='+cssmTranslate.spacetitle+'"></i>');

                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(spaceID);
                            $(this).dialog("close");
                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton'
                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                        $('*').removeClass('vmutc-selected vmutc-elementOver');

                        var id_block = $('#' + spaceID).attr('data-parent');

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
            $("#vmutc_spaceContainer").dialog("open");

        });

        var spaceSlider = document.getElementById('vmutc_editorSpaceHeight');
        noUiSlider.create(spaceSlider, {
            start: 50,
            step: 1,
            range: {
                min: 20,
                max: 1000
            },
        });
        spaceSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var spaceHeight = Math.round(values);
            $('#vmutc_editorSpaceHeight_input').val(spaceHeight);
            $('#' + what).attr('data-height', spaceHeight).css('height', spaceHeight + 'px');
        });
        $(document).on('change', '#vmutc_editorSpaceHeight_input', function () {
            var what = $('#vmutc_blockColumn_id').val();

            var spaceHeight = (this.value);
            spaceSlider.noUiSlider.set(this.value);
            $('#' + what).attr('data-height', spaceHeight).css('height', spaceHeight + 'px');
        });

        function createSpace(spaceID) {
            var height = $('#' + spaceID).attr('data-height');
            $('#vmutc_editorSpaceHeight_input').val(height);
            spaceSlider.noUiSlider.set(height);

        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('spaceheight', $('#' + widgetID).attr('data-height'));
        }

        function restoreWidgetInitialValues(widgetID) {
            $('#' + widgetID).attr('data-height', localStorage.getItem('spaceheight')).css('height', localStorage.getItem('spaceheight') + 'px');
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