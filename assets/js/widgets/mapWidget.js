jQuery(document).ready(
    function ($) {

        addWidgetButton('map', 'vmutc-create-addMap', 'fa fa-map-marker', 'Map','basic');

        $(document).on('click', '#vmutc-create-addMap', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();

            var uniqueID = 'vmutc-mapID-' + Math.random().toString(36).substr(2, 16);
            var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditMap elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                '</div>' +
                '<div id="' + uniqueID + '" class="mapWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="map" data-whatClass="mapWidget" ' +
                'data-zoom="11" data-address="paris" data-height="300" ' +
                'data-animatortype="none" data-animatorstart="0" data-animatorscrub="0" data-animatorduration="1" data-animatoreasecode="" data-animatorease="none" data-animatorreverse="0" >' +
                '<object type="text/html" data="https://maps.google.com/maps?q=parist=m&z=11&output=embed&iwloc=near" width="100%" height="300"></object>' +
                '</div>';

            $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
            updateSection(whatGrid);
            $('#elementEdit_' + uniqueID).trigger('click');
        });

        $(document).on('click', '.elementEditMap', function () {
            var mapID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(mapID);
            $('div.ui-dialog-content').dialog('close');


            createMap(mapID);
            saveWidgetInitialValues(mapID);

            $("#vmutc_mapContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '520',
                resizable: false,
                title: 'Map Editor',
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="mapWidget" data-title="' + cssmTranslate.maptitle + '"></i>');

                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(mapID);
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

                            var id_block = $('#' + mapID).attr('data-parent');

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
            $("#vmutc_mapContainer").dialog("open");

        });

        var zoomSlider = document.getElementById('vmutc_editorMapZoom');
        noUiSlider.create(zoomSlider, {
            start: 11,
            step: 1,
            range: {
                min: 0,
                max: 25
            },
        });
        zoomSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var zoomLevel = Math.round(values);
            $('#vmutc_editorMapZoom_input').val(zoomLevel);
            var mapAddress = $('#vmutc_editorMapAddress').val();
            if (mapAddress == '')
                mapAddress = 'paris';

            var heightLevel = $('#vmutc_editorMapHeight_input').val();

            $('#vmutc_mapShow').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near');
            $('#' + what + ' object').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near').height(heightLevel);
            $('#' + what).attr('data-zoom', zoomLevel);
        });

        var heightMapSlider = document.getElementById('vmutc_editorMapHeight');
        noUiSlider.create(heightMapSlider, {
            start: 300,
            step: 1,
            range: {
                min: 0,
                max: 1000
            },
        });
        heightMapSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var heightLevel = Math.round(values);
            $('#vmutc_editorMapHeight_input').val(heightLevel);
            var mapAddress = $('#vmutc_editorMapAddress').val();
            if (mapAddress == '')
                mapAddress = 'paris';
            var zoomLevel = $('#vmutc_editorMapZoom_input').val();

            $('#vmutc_mapShow').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near');
            $('#' + what + ' object').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near').height(heightLevel);
            $('#' + what).attr('data-height', heightLevel);
        });
        $(document).on('change', '#vmutc_editorMapHeight_input', function () {
            var what = $('#vmutc_blockColumn_id').val();

            var heightLevel = this.value;
            $('#vmutc_editorMapHeight_input').val(heightLevel);
            var mapAddress = $('#vmutc_editorMapAddress').val();
            if (mapAddress == '')
                mapAddress = 'paris';
            var zoomLevel = $('#vmutc_editorMapZoom_input').val();

            $('#vmutc_mapShow').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near');
            $('#' + what + ' object').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near').height(heightLevel);
            $('#' + what).attr('data-height', heightLevel);

        })

        $(document).on('change', '#vmutc_editorMapAddress', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var mapAddress = this.value;
            if (mapAddress == '')
                mapAddress = 'paris';

            var zoomLevel = $('#vmutc_editorMapZoom_input').val();
            if (zoomLevel == '')
                zoomLevel = 11;

            var heightLevel = $('#vmutc_editorMapHeight_input').val();

            var url = 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near';
            $('#vmutc_mapShow').attr('data', url);
            $('#' + what + ' object').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near').height(heightLevel);
            $('#' + what).attr('data-address', mapAddress);

        });

        $(document).on('change', '#vmutc_editorMapZoom_input', function () {
            var what = $('#vmutc_blockColumn_id').val();
            var zoomLevel = this.value;
            if (zoomLevel == '')
                zoomLevel = 11;
            var mapAddress = $('#vmutc_editorMapAddress').val();
            if (mapAddress == '')
                mapAddress = 'paris';

            var heightLevel = $('#vmutc_editorMapHeight_input').val();

            $('#vmutc_mapShow').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near')
            $('#' + what + ' object').attr('data', 'https://maps.google.com/maps?q=' + mapAddress + '&t=m&z=' + zoomLevel + '&output=embed&iwloc=near').height(heightLevel);
            $('#' + what).attr('data-zoom', zoomLevel);

        });

        function createMap(mapID) {
            $('#vmutc_editorMapAddress').val($('#' + mapID).attr('data-address'));
            zoomSlider.noUiSlider.set($('#' + mapID).attr('data-zoom'));
            $('#vmutc_editorMapZoom_input').val($('#' + mapID).attr('data-zoom'));
            heightMapSlider.noUiSlider.set($('#' + mapID).attr('data-height'));
            $('#vmutc_editorMapHeight_input').val($('#' + mapID).attr('data-height'));

            var type = $('#' + mapID).attr('data-animatortype');
            var start = $('#' + mapID).attr('data-animatorstart');
            var end = $('#' + mapID).attr('data-animatorend');
            var duration = $('#' + mapID).attr('data-animatorduration');
            var easeCode = $('#' + mapID).attr('data-animatoreasecode');
            var ease = $('#' + mapID).attr('data-animatorease');
            var reverse = $('#' + mapID).attr('data-animatorreverse');
            var scrub = $('#' + mapID).attr('data-animatorscrub');

         //   updateAnimatorValues(mapID, type, start, 'vmutc_mapContainer', duration, easeCode, ease, reverse, scrub, end);

        }

        function saveWidgetInitialValues(widgetID) {
            localStorage.setItem('mapaddress', $('#' + widgetID).attr('data-address'));
            localStorage.setItem('mapzoom', $('#' + widgetID).attr('data-zoom'));
            localStorage.setItem('mapheight', $('#' + widgetID).attr('data-height'));

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
            $('#' + widgetID).attr('data-address', localStorage.getItem('mapaddress'));
            $('#' + widgetID).attr('data-zoom', localStorage.getItem('mapzoom'));
            $('#' + widgetID).attr('data-height', localStorage.getItem('mapheight'));
            $('#' + widgetID + ' object').attr('data', 'https://maps.google.com/maps?q=' + localStorage.getItem('mapaddress') + '&t=m&z=' + localStorage.getItem('mapzoom') + '&output=embed&iwloc=near').height(localStorage.getItem('mapheight'));
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

        //    updateAnimatorValues(widgetID, type, start, 'vmutc_mapContainer', duration, easecode, ease, reverse, scrub, end);

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