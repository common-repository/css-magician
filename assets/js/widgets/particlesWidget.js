jQuery(document).ready(
    function ($) {

        addWidgetButton('particles', 'vmutc-create-addParticles', 'fab fa-hubspot', 'Particles','basic');

        $(document).on('click', '#vmutc-create-addParticles', function () {
            var whatColumn = $('#vmutc_blockColumn_id').val();
            var whatGrid = $('#vmutc_block_id').val();
            var uniqueID = 'vmutc-particleID-' + Math.random().toString(36).substr(2, 16);

            if ($('#' + whatColumn + ' .tsparticles-canvas-el').length == 0) {
                var addWidget = '<div id="editorToolBar_' + uniqueID + '" class="editorToolBar" data-element="' + uniqueID + '">' +
                    '<span id="elementClose_' + uniqueID + '" class="elementClose elementButton fa fa-times-circle" data-element="' + uniqueID + '" title="Delete" ></span>' +
                    '<span id="elementCopy_' + uniqueID + '" class="elementCopy elementButton far fa-copy" data-element="' + uniqueID + '" title="Copy" ></span>' +
                    '<span id="elementEdit_' + uniqueID + '" class="elementEdit elementEditParticles elementButton fas fa-edit fa-target" data-element="' + uniqueID + '" ></span>' +
                    '</div>' +
                    '<div id="' + uniqueID + '" class="particlesWidget gridstackWidget" data-parent="' + whatGrid + '" data-what="particles" data-whatClass="particlesWidget"' +
                    ' data-particlenumber="80" data-density="1" data-densityvalue="800" data-particlecolor="#1e4f7e" data-imagetype="circle" data-strokewidth="1" data-strokecolor="#1e4f7e" data-nbsides="3"  data-imagewidth="100" data-imageheight="100"' +
                    ' data-opacityvalue="0.5" data-opacityrandom="0" data-opacityanim="0" data-opacityanimspeed="1" data-minopacityanim="0.1" data-opacityanimsync="0"' +
                    ' data-sizevalue="3" data-sizerandom="1" data-sizeanim="0" data-sizeanimspeed="40"  data-minsizeanim="0.1" data-sizeanimsync="0" ' +
                    ' data-linelinked="1" data-linedistance="150" data-lineopacity="0.4" data-linewidth="1" data-linecolor="#1e4f7e"' +
                    ' data-moveenable="1" data-movespeed="6" data-movedirection="none" data-moverandom="0" data-movestraight="0"' +
                    ' data-moveoutmode="bounce" data-moveattract="0" data-attractrotatex="600" data-attractrotatey="1200"' +
                    ' data-particlehover="1" data-particlehovermode="repulse" data-particleclick="1" data-particleclickmode="push" data-grabdistance="400" data-grabopacity="1"' +
                    ' data-bubbledistance="400" data-bubbleopacity="8" data-bubblesize="40" data-bubbleduration="2" data-repulse="200"' +
                    '</div>';

                $('#' + whatColumn + ' > .grid-stack-item-content').html(addWidget);
                updateParticle(uniqueID);
                updateSection(whatGrid);
                $('#elementEdit_' + uniqueID).trigger('click');
            } else {
                Swal.fire({
                    title: 'Oh No, you already have a Particles Element on that block !',
                    text: "And it is not possible to have another one",
                    type: 'error',
                })
            }
        });

        $(document).on('click', '.elementEditParticles', function () {
            $('div.ui-dialog-content').dialog('close');

            var particleID = $(this).attr('data-element');
            $('#vmutc_blockColumn_id').val(particleID);
            if ($('#vmutc_block_id').val() == '') {
                var sectionID = $('#' + particleID).closest('.sectionEnabled').attr('id');
                $('#vmutc_block_id').val(sectionID);
            }

            createParticle(particleID);
            saveWidgetInitialValues(particleID);


            $("#vmutc_particlesContainer").dialog({
                autoOpen: false,
                modal: false,
                dialogClass: 'EditorContainer',
                width: '520',
                height: '700',
                resizable: false,
                title: "Particles Editor",
                open: function (event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                    $(this).closest(".EditorContainer").find(".ui-dialog-titlebar").append('<i class="iconhelp far fa-question-circle" data-help="particlesWidget" data-title="'+cssmTranslate.particlestitle+'"></i>');

                },
                close: function () {
                    $(this).closest(".EditorContainer").find('.iconhelp').remove();
                    $(this).dialog('destroy');
                },
                buttons: {
                    Cancel: {
                        click: function () {
                            restoreWidgetInitialValues(particleID);
                            $(this).dialog("close");
                        },
                        text: cssmTranslate.vmutccancel,
                        class: 'dialog-closeButton',

                    },
                    Save: {
                        text: cssmTranslate.vmutcsave,
                        click: function () {
                        $('*').removeClass('vmutc-selected vmutc-elementOver');

                        var id_block = $('#' + particleID).attr('data-parent');

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
            $("#vmutc_particlesContainer").dialog("open");
        });

        function createParticle(particleID) {
            $('#vmutc_blockColumn_id').val(particleID);
            $('#vmutc_particleNumber').val($('#' + particleID).attr('data-particlenumber'));
            particleNumberSlider.noUiSlider.set($('#' + particleID).attr('data-particlenumber'));

            if ($('#' + particleID).attr('data-density') == 1)
                $('#vmutc_particleDensity').prop('checked', true);
            else
                $('#vmutc_particleDensity').prop('checked', false);
            $('#vmutc_particleDensityValue').val($('#' + particleID).attr('data-densityvalue'));
            particleDensitySlider.noUiSlider.set($('#' + particleID).attr('data-densityvalue'));
            $('#vmutc_particleColor').spectrum('set', $('#' + particleID).attr('data-particlecolor'));
            particleStrokeWidthSlider.noUiSlider.set($('#' + particleID).attr('data-strokewidth'));
            $('#vmutc_particleStrokeWidth').val($('#' + particleID).attr('data-strokewidth'));

            $('#vmutc_particleStrokeColor').spectrum('set', $('#' + particleID).attr('data-strokecolor'));
            particlePolygonNbSidesSlider.noUiSlider.set($('#' + particleID).attr('data-nbsides'));
            $('#vmutc_particlePolygonNbSides').val($('#' + particleID).attr('data-nbsides'));

            $('#vmutc_particleType').val($('#' + particleID).attr('data-imagetype'))
            particleImageWidth.noUiSlider.set($('#' + particleID).attr('data-imagewidth'));
            $('#vmutc_particleImageWidth').val($('#' + particleID).attr('data-imagewidth'));

            particleImageHeight.noUiSlider.set($('#' + particleID).attr('data-imageheight'));
            $('#vmutc_particleImageHeight').val($('#' + particleID).attr('data-imageheight'));

            $('#vmutc_particleImageUrl').val($('#' + particleID).attr('data-imageurl'));
            particlesSize.noUiSlider.set($('#' + particleID).attr('data-sizevalue'));
            $('#vmutc_particleSize').val($('#' + particleID).attr('data-sizevalue'));

            if ($('#' + particleID).attr('data-sizerandom') == 1)
                $('#vmutc_particleSizeRandom').prop('checked', true);
            else
                $('#vmutc_particleSizeRandom').prop('checked', false);
            if ($('#' + particleID).attr('data-sizeanim') == 1)
                $('#vmutc_particleSizeAnim').prop('checked', true);
            else
                $('#vmutc_particleSizeAnim').prop('checked', false);
            particlesSizeAnim.noUiSlider.set($('#' + particleID).attr('data-sizeanimspeed'));
            $('#vmutc_particleSizeAnimSpeed').val($('#' + particleID).attr('data-sizeanimspeed'));

            particlesMinSizeAnim.noUiSlider.set($('#' + particleID).attr('data-minsizeanim'));
            $('#vmutc_particleMinSizeAnim').val($('#' + particleID).attr('data-minsizeanim'));

            if ($('#' + particleID).attr('data-sizeanimsync') == 1)
                $('#vmutc_particleSizeAnimSync').prop('checked', true);
            else
                $('#vmutc_particleSizeAnimSync').prop('checked', false);
            if ($('#' + particleID).attr('data-opacityrandom') == 1)
                $('#vmutc_particleOpacityRandom').prop('checked', true);
            else
                $('#vmutc_particleOpacityRandom').prop('checked', false);
            if ($('#' + particleID).attr('data-opacityanim') == 1)
                $('#vmutc_particleOpacityAnim').prop('checked', true);
            else
                $('#vmutc_particleOpacityAnim').prop('checked', false);
            if ($('#' + particleID).attr('data-opacityanimsync') == 1)
                $('#vmutc_particleOpacityAnimSync').prop('checked', true);
            else
                $('#vmutc_particleOpacityAnimSync').prop('checked', false);
            particleOpacityAnimSpeed.noUiSlider.set($('#' + particleID).attr('data-opacityanimspeed'));
            $('#vmutc_particleOpacityAnimSpeed').val($('#' + particleID).attr('data-opacityanimspeed'));

            particleMinOpacityAnim.noUiSlider.set($('#' + particleID).attr('data-minopacityanim'));
            $('#vmutc_particleMinOpacityAnim').val($('#' + particleID).attr('data-minopacityanim'));

            particleOpacityValue.noUiSlider.set($('#' + particleID).attr('data-opacityvalue'));
            $('#vmutc_particleOpacityValue').val($('#' + particleID).attr('data-opacityvalue'));

            if ($('#' + particleID).attr('data-linelinked') == 1)
                $('#vmutc_particleLineLinked').prop('checked', true);
            else
                $('#vmutc_particleLineLinked').prop('checked', false);
            particleLineDistance.noUiSlider.set($('#' + particleID).attr('data-linedistance'));
            $('#vmutc_particleLineDistance').val($('#' + particleID).attr('data-linedistance'));

            particleLineOpacity.noUiSlider.set($('#' + particleID).attr('data-lineopacity'));
            $('#vmutc_particleLineOpacity').val($('#' + particleID).attr('data-lineopacity'));

            particleLineWidth.noUiSlider.set($('#' + particleID).attr('data-linewidth'));
            $('#vmutc_particleLineWidth').val($('#' + particleID).attr('data-linewidth'));

            $('#vmutc_particleLineColor').spectrum('set', $('#' + particleID).attr('data-linecolor'));
            if ($('#' + particleID).attr('data-moveenable') == 1)
                $('#vmutc_particleMoveEnable').prop('checked', true);
            else
                $('#vmutc_particleMoveEnable').prop('checked', false);
            $('#vmutc_particleMoveDirection').val($('#' + particleID).attr('data-movedirection'));
            if ($('#' + particleID).attr('data-moverandom') == 1)
                $('#vmutc_particleMoveRandom').prop('checked', true);
            else
                $('#vmutc_particleMoveRandom').prop('checked', false);
            if ($('#' + particleID).attr('data-movestraight') == 1)
                $('#vmutc_particleMoveStraight').prop('checked', true);
            else
                $('#vmutc_particleMoveStraight').prop('checked', false);
            particleMoveSpeed.noUiSlider.set($('#' + particleID).attr('data-movespeed'));
            $('#vmutc_particleMoveSpeed').val($('#' + particleID).attr('data-movespeed'));

            $('#vmutc_particleMoveOutMode').val($('#' + particleID).attr('data-moveoutmode'));
            if ($('#' + particleID).attr('data-moveattract') == 1)
                $('#vmutc_particleMoveAttract').prop('checked', true);
            else
                $('#vmutc_particleMoveAttract').prop('checked', false);
            particleAttractRotateX.noUiSlider.set($('#' + particleID).attr('data-attractrotatex'));
            $('#vmutc_particleAttractRotateX').val($('#' + particleID).attr('data-attractrotatex'));

            particleAttractRotateY.noUiSlider.set($('#' + particleID).attr('data-attractrotatey'));
            $('#vmutc_particleAttractRotateY').val($('#' + particleID).attr('data-attractrotatey'));

            if ($('#' + particleID).attr('data-particlehover') == 1)
                $('#vmutc_particleHover').prop('checked', true);
            else
                $('#vmutc_particleHover').prop('checked', false);
            $('#vmutc_particleHoverMode').val($('#' + particleID).attr('data-particlehovermode'));
            if ($('#' + particleID).attr('data-particleclick') == 1)
                $('#vmutc_particleClick').prop('checked', true);
            else
                $('#vmutc_particleClick').prop('checked', false);
            $('#vmutc_particleClickMode').val($('#' + particleID).attr('data-particleclickmode'));
            particleGrabDistance.noUiSlider.set($('#' + particleID).attr('data-grabdistance'));
            $('#vmutc_particleGrabDistance').val($('#' + particleID).attr('data-grabdistance'));

            particleGrabOpacity.noUiSlider.set($('#' + particleID).attr('data-grabopacity'));
            $('#vmutc_particleGrabLineOpacity').val($('#' + particleID).attr('data-grabopacity'));

            particleBubbleDistance.noUiSlider.set($('#' + particleID).attr('data-bubbledistance'));
            $('#vmutc_particleBubbleDistance').val($('#' + particleID).attr('data-bubbledistance'));

            particleBubbleOpacity.noUiSlider.set($('#' + particleID).attr('data-bubbleopacity'));
            $('#vmutc_particleBubbleOpacity').val($('#' + particleID).attr('data-bubbleopacity'));

            particleBubbleSize.noUiSlider.set($('#' + particleID).attr('data-bubblesize'));
            $('#vmutc_particleBubbleSize').val($('#' + particleID).attr('data-bubblesize'));

            particleBubbleDuration.noUiSlider.set($('#' + particleID).attr('data-bubbleduration'));
            $('#vmutc_particleBubbleDuration').val($('#' + particleID).attr('data-bubbleduration'));

            particleRepulse.noUiSlider.set($('#' + particleID).attr('data-repulse'));
            $('#vmutc_particleRepulseDistance').val($('#' + particleID).attr('data-repulse'));
        }

        var particleNumberSlider = document.getElementById('vmutc_particleNumber_slider');
        noUiSlider.create(particleNumberSlider, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        particleNumberSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var particlesNumber = Math.round(values);
            $('#vmutc_particleNumber').val(particlesNumber);

            $('#' + what).attr('data-particleNumber', particlesNumber);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleNumber', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleNumberSlider.noUiSlider.set(this.value);
            $('#' + what).attr('data-particleNumber', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleDensity', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-density', '0');
            } else
                $('#' + what).attr('data-density', '1');
            updateParticle(what);
        });

        var particleDensitySlider = document.getElementById('vmutc_particleDensityValue_slider');
        noUiSlider.create(particleDensitySlider, {
            start: 800,
            step: 1,
            range: {
                min: 400,
                max: 10000
            },
        });
        particleDensitySlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var densityNumber = Math.round(values);
            $('#vmutc_particleDensityValue').val(densityNumber);

            $('#' + what).attr('data-densityValue', densityNumber);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleDensityValue', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleDensitySlider.noUiSlider.set(this.value);
            $('#' + what).attr('data-densityValue', this.value);
            updateParticle(what);
        });

        $("#vmutc_particleColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: false,
            showInitial: true,
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-particleColor', color)
                updateParticle(what);

            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-particleColor', color)
                updateParticle(what);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-particleColor', color)
                updateParticle(what);
            },
        });

        var particleStrokeWidthSlider = document.getElementById('vmutc_particleStrokeWidth_slider');
        noUiSlider.create(particleStrokeWidthSlider, {
            start: 2,
            step: 1,
            range: {
                min: 0,
                max: 20
            },
        });
        particleStrokeWidthSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();
            var strokeWidth = Math.round(values);
            $('#vmutc_particleStrokeWidth').val(strokeWidth);

            $('#' + what).attr('data-strokeWidth', strokeWidth);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleStrokeWidth', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleStrokeWidthSlider.noUiSlider.set(this.value);
            $('#' + what).attr('data-strokeWidth', this.value);
            updateParticle(what);
        });


        $("#vmutc_particleStrokeColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: false,
            showInitial: true,
            containerClassName: 'spectrumWidth',
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-strokecolor', color)
                updateParticle(what);

            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-strokecolor', color);
                updateParticle(what);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-strokecolor', color)
                updateParticle(what);
            },
        });

        var particlePolygonNbSidesSlider = document.getElementById('vmutc_particlePolygonNbSides_slider');
        noUiSlider.create(particlePolygonNbSidesSlider, {
            start: 3,
            step: 1,
            range: {
                min: 3,
                max: 12
            },
        });
        particlePolygonNbSidesSlider.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var NbSides = Math.round(values);
            $('#vmutc_particlePolygonNbSides').val(NbSides);

            $('#' + what).attr('data-nbsides', NbSides);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particlePolygonNbSides', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particlePolygonNbSidesSlider.noUiSlider.set(this.value);
            $('#' + what).attr('data-nbsides', this.value);
            updateParticle(what);
        });

        var particleImageWidth = document.getElementById('vmutc_particleImageWidth_slider');
        noUiSlider.create(particleImageWidth, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        particleImageWidth.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var imageWidth = Math.round(values);
            $('#vmutc_particleImageWidth').val(imageWidth);

            $('#' + what).attr('data-ImageWidth', imageWidth);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleImageWidth', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleImageWidth.noUiSlider.set(this.value);
            $('#' + what).attr('data-ImageWidth', this.value);
            updateParticle(what);
        });

        var particleImageHeight = document.getElementById('vmutc_particleImageHeight_slider');
        noUiSlider.create(particleImageHeight, {
            start: 100,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        particleImageHeight.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var imageHeight = Math.round(values);
            $('#vmutc_particleImageHeight').val(imageHeight);

            $('#' + what).attr('data-ImageHeight', imageHeight);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleImageHeight', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleImageHeight.noUiSlider.set(this.value);
            $('#' + what).attr('data-ImageHeight', this.value);
            updateParticle(what);
        });

        $(document).on("change", '#vmutc_particleType', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-imagetype', this.value);
            updateParticle(what);

        });
        $(document).on('keyup', '#vmutc_particleImageUrl', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-imageurl', this.value);
            updateParticle(what);
        })

        var particlesSize = document.getElementById('vmutc_particleSize_slider');
        noUiSlider.create(particlesSize, {
            start: 7,
            step: 0.1,
            range: {
                min: 0,
                max: 20
            },
        });
        particlesSize.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var particleSize = values;
            $('#vmutc_particleSize').val(particleSize);

            $('#' + what).attr('data-sizevalue', particleSize);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleSize', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particlesSize.noUiSlider.set(this.value);
            $('#' + what).attr('data-sizevalue', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleSizeRandom', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-sizerandom', '0');
            } else
                $('#' + what).attr('data-sizerandom', '1');
        });

        $(document).on('change', '#vmutc_particleSizeAnim', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-SizeAnim', '0');
            } else
                $('#' + what).attr('data-SizeAnim', '1');
            updateParticle(what);
        });

        var particlesSizeAnim = document.getElementById('vmutc_particleSizeAnimSpeed_slider');
        noUiSlider.create(particlesSizeAnim, {
            start: 5,
            step: 1,
            range: {
                min: 0,
                max: 300
            },
        });
        particlesSizeAnim.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var particleSizeAnim = Math.round(values);
            $('#vmutc_particleSizeAnimSpeed').val(particleSizeAnim);

            $('#' + what).attr('data-SizeAnimSpeed', particleSizeAnim);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleSizeAnimSpeed', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particlesSizeAnim.noUiSlider.set(this.value);
            $('#' + what).attr('data-SizeAnimSpeed', this.value);
            updateParticle(what);
        });

        var particlesMinSizeAnim = document.getElementById('vmutc_particleMinSizeAnim_slider');
        noUiSlider.create(particlesMinSizeAnim, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 100
            },
        });
        particlesMinSizeAnim.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var particleMinSizeAnim = Math.round(values);
            $('#vmutc_particleMinSizeAnim').val(particleMinSizeAnim);

            $('#' + what).attr('data-MinSizeAnim', particleMinSizeAnim);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleMinSizeAnim', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particlesMinSizeAnim.noUiSlider.set(this.value);
            $('#' + what).attr('data-MinSizeAnim', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleSizeAnimSync', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-SizeAnimSync', '0');
            } else
                $('#' + what).attr('data-SizeAnimSync', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleOpacityRandom', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-OpacityRandom', '0');
            } else
                $('#' + what).attr('data-OpacityRandom', '1');
            updateParticle(what);
        });

        var particleOpacityValue = document.getElementById('vmutc_particleOpacityValue_slider');
        noUiSlider.create(particleOpacityValue, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        particleOpacityValue.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var opacityValue = values;
            $('#vmutc_particleOpacityValue').val(opacityValue);

            $('#' + what).attr('data-OpacityValue', opacityValue);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleOpacityValue', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleOpacityValue.noUiSlider.set(this.value);
            $('#' + what).attr('data-OpacityValue', this.value);
            updateParticle(what);
        });


        $(document).on('change', '#vmutc_particleOpacityAnim', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-OpacityAnim', '0');
            } else
                $('#' + what).attr('data-OpacityAnim', '1');
            updateParticle(what);
        });

        var particleOpacityAnimSpeed = document.getElementById('vmutc_particleOpacityAnimSpeed_slider');
        noUiSlider.create(particleOpacityAnimSpeed, {
            start: 2,
            step: 0.1,
            range: {
                min: 0,
                max: 10
            },
        });
        particleOpacityAnimSpeed.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var opacityAnimSpeed = values;
            $('#vmutc_particleOpacityAnimSpeed').val(opacityAnimSpeed);

            $('#' + what).attr('data-OpacityAnimSpeed', opacityAnimSpeed);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleOpacityAnimSpeed', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleOpacityAnimSpeed.noUiSlider.set(this.value);
            $('#' + what).attr('data-OpacityAnimSpeed', this.value);
            updateParticle(what);
        });

        var particleMinOpacityAnim = document.getElementById('vmutc_particleMinOpacityAnim_slider');
        noUiSlider.create(particleMinOpacityAnim, {
            start: 0,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        particleMinOpacityAnim.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var MinOpacityAnim = values;
            $('#vmutc_particleMinOpacityAnim').val(MinOpacityAnim);

            $('#' + what).attr('data-MinOpacityAnim', MinOpacityAnim);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleMinOpacityAnim', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleMinOpacityAnim.noUiSlider.set(this.value);
            $('#' + what).attr('data-MinOpacityAnim', this.value);
            updateParticle(what);
        });


        $(document).on('change', '#vmutc_particleOpacityAnimSync', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-OpacityAnimSync', '0');
            } else
                $('#' + what).attr('data-OpacityAnimSync', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleLineLinked', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-LineLinked', '0');
            } else
                $('#' + what).attr('data-LineLinked', '1');
            updateParticle(what);
        });

        var particleLineDistance = document.getElementById('vmutc_particleLineDistance_slider');
        noUiSlider.create(particleLineDistance, {
            start: 60,
            step: 50,
            range: {
                min: 0,
                max: 500
            },
        });
        particleLineDistance.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var LineDistance = Math.round(values);
            $('#vmutc_particleLineDistance').val(LineDistance);

            $('#' + what).attr('data-LineDistance', LineDistance);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleLineDistance', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleLineDistance.noUiSlider.set(this.value);
            $('#' + what).attr('data-LineDistance', this.value);
            updateParticle(what);
        });

        var particleLineOpacity = document.getElementById('vmutc_particleLineOpacity_slider');
        noUiSlider.create(particleLineOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        particleLineOpacity.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var LineOpacity = values;
            $('#vmutc_particleLineOpacity').val(LineOpacity);

            $('#' + what).attr('data-LineOpacity', LineOpacity);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleLineOpacity', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleLineOpacity.noUiSlider.set(this.value);
            $('#' + what).attr('data-LineOpacity', this.value);
            updateParticle(what);
        });

        var particleLineWidth = document.getElementById('vmutc_particleLineWidth_slider');
        noUiSlider.create(particleLineWidth, {
            start: 5,
            step: 1,
            range: {
                min: 0,
                max: 20
            },
        });
        particleLineWidth.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var LineWidth = Math.round(values);
            $('#vmutc_particleLineWidth').val(LineWidth);

            $('#' + what).attr('data-LineWidth', LineWidth);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleLineWidth', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleLineWidth.noUiSlider.set(this.value);
            $('#' + what).attr('data-LineWidth', this.value);
            updateParticle(what);
        });

        $("#vmutc_particleLineColor").spectrum({
            preferredFormat: "hex",
            showInput: true,
            allowEmpty: true,
            showAlpha: false,
            showInitial: true,
            containerClassName: 'spectrumWidth',
            move: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-linecolor', color)
                updateParticle(what);
            },
            change: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-linecolor', color)
                updateParticle(what);
            },
            hide: function (color) {
                var what = $('#vmutc_blockColumn_id').val();
                $('#' + what).attr('data-linecolor', color)
                updateParticle(what);
            },
        });

        $(document).on('change', '#vmutc_particleMoveEnable', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-MoveEnable', '0');
            } else
                $('#' + what).attr('data-MoveEnable', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleMoveDirection', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-MoveDirection', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleMoveRandom', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-MoveRandom', '0');
            } else
                $('#' + what).attr('data-MoveRandom', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleMoveStraight', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-MoveStraight', '0');
            } else
                $('#' + what).attr('data-MoveStraight', '1');
            updateParticle(what);
        });

        var particleMoveSpeed = document.getElementById('vmutc_particleMoveSpeed_slider');
        noUiSlider.create(particleMoveSpeed, {
            start: 10,
            step: 1,
            range: {
                min: 0,
                max: 200
            },
        });
        particleMoveSpeed.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var MoveSpeed = Math.round(values);
            $('#vmutc_particleMoveSpeed').val(MoveSpeed);

            $('#' + what).attr('data-MoveSpeed', MoveSpeed);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleMoveSpeed', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleMoveSpeed.noUiSlider.set(this.value);
            $('#' + what).attr('data-MoveSpeed', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleMoveOutMode', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-MoveOutMode', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleMoveAttract', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-MoveAttract', '0');
            } else
                $('#' + what).attr('data-MoveAttract', '1');
            updateParticle(what);
        });

        var particleAttractRotateX = document.getElementById('vmutc_particleAttractRotateX_slider');
        noUiSlider.create(particleAttractRotateX, {
            start: 1000,
            step: 1,
            range: {
                min: 0,
                max: 10000
            },
        });
        particleAttractRotateX.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var AttractRotateX = Math.round(values);
            $('#vmutc_particleAttractRotateX').val(AttractRotateX);

            $('#' + what).attr('data-AttractRotateX', AttractRotateX);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleAttractRotateX', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleAttractRotateX.noUiSlider.set(this.value);
            $('#' + what).attr('data-AttractRotateX', this.value);
            updateParticle(what);
        });

        var particleAttractRotateY = document.getElementById('vmutc_particleAttractRotateY_slider');
        noUiSlider.create(particleAttractRotateY, {
            start: 1000,
            step: 1,
            range: {
                min: 0,
                max: 10000
            },
        });
        particleAttractRotateY.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var AttractRotateY = Math.round(values);
            $('#vmutc_particleAttractRotateY').val(AttractRotateY);

            $('#' + what).attr('data-AttractRotateY', AttractRotateY);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleAttractRotateY', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleAttractRotateY.noUiSlider.set(this.value);
            $('#' + what).attr('data-AttractRotateY', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleHover', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-particleHover', '0');
            } else
                $('#' + what).attr('data-particleHover', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleHoverMode', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-particleHoverMode', this.value);
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleClick', function () {
            var what = $('#vmutc_blockColumn_id').val();
            if ($(this).prop("checked") == false) {
                $('#' + what).attr('data-particleClick', '0');
            } else
                $('#' + what).attr('data-particleClick', '1');
            updateParticle(what);
        });

        $(document).on('change', '#vmutc_particleClickMode', function () {
            var what = $('#vmutc_blockColumn_id').val();
            $('#' + what).attr('data-particleClickMode', this.value);
            updateParticle(what);
        });

        var particleGrabDistance = document.getElementById('vmutc_particleGrabDistance_slider');
        noUiSlider.create(particleGrabDistance, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1500
            },
        });
        particleGrabDistance.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var GrabDistance = Math.round(values);
            $('#vmutc_particleGrabDistance').val(GrabDistance);

            $('#' + what).attr('data-GrabDistance', GrabDistance);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleGrabDistance', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleGrabDistance.noUiSlider.set(this.value);
            $('#' + what).attr('data-GrabDistance', this.value);
            updateParticle(what);
        });

        var particleGrabOpacity = document.getElementById('vmutc_particleGrabLineOpacity_slider');
        noUiSlider.create(particleGrabOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        particleGrabOpacity.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var GrabOpacity = values;
            $('#vmutc_particleGrabLineOpacity').val(GrabOpacity);

            $('#' + what).attr('data-GrabOpacity', GrabOpacity);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleGrabLineOpacity', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleGrabOpacity.noUiSlider.set(this.value);
            $('#' + what).attr('data-GrabOpacity', this.value);
            updateParticle(what);
        });

        var particleBubbleDistance = document.getElementById('vmutc_particleBubbleDistance_slider');
        noUiSlider.create(particleBubbleDistance, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1500
            },
        });
        particleBubbleDistance.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var BubbleDistance = Math.round(values);
            $('#vmutc_particleBubbleDistance').val(BubbleDistance);

            $('#' + what).attr('data-BubbleDistance', BubbleDistance);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleBubbleDistance', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleBubbleDistance.noUiSlider.set(this.value);
            $('#' + what).attr('data-BubbleDistance', this.value);
            updateParticle(what);
        });

        var particleBubbleOpacity = document.getElementById('vmutc_particleBubbleOpacity_slider');
        noUiSlider.create(particleBubbleOpacity, {
            start: 1,
            step: 0.1,
            range: {
                min: 0,
                max: 1
            },
        });
        particleBubbleOpacity.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var BubbleOpacity = values;
            $('#vmutc_particleBubbleOpacity').val(BubbleOpacity);

            $('#' + what).attr('data-BubbleOpacity', BubbleOpacity);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleBubbleOpacity', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleBubbleOpacity.noUiSlider.set(this.value);
            $('#' + what).attr('data-BubbleOpacity', this.value);
            updateParticle(what);
        });

        var particleBubbleSize = document.getElementById('vmutc_particleBubbleSize_slider');
        noUiSlider.create(particleBubbleSize, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 500
            },
        });
        particleBubbleSize.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var BubbleSize = Math.round(values);
            $('#vmutc_particleBubbleSize').val(BubbleSize);

            $('#' + what).attr('data-BubbleSize', BubbleSize);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleBubbleSize', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleBubbleSize.noUiSlider.set(this.value);
            $('#' + what).attr('data-BubbleSize', this.value);
            updateParticle(what);
        });

        var particleBubbleDuration = document.getElementById('vmutc_particleBubbleDuration_slider');
        noUiSlider.create(particleBubbleDuration, {
            start: 2,
            step: 0.1,
            range: {
                min: 0,
                max: 10
            },
        });
        particleBubbleDuration.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var BubbleDuration = values;
            $('#vmutc_particleBubbleDuration').val(BubbleDuration);

            $('#' + what).attr('data-BubbleDuration', BubbleDuration);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleBubbleDuration', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleBubbleDuration.noUiSlider.set(this.value);
            $('#' + what).attr('data-BubbleDuration', this.value);
            updateParticle(what);
        });

        var particleRepulse = document.getElementById('vmutc_particleRepulseDistance_slider');
        noUiSlider.create(particleRepulse, {
            start: 50,
            step: 1,
            range: {
                min: 0,
                max: 1000
            },
        });
        particleRepulse.noUiSlider.on('slide', function (values, handle) {
            var what = $('#vmutc_blockColumn_id').val();

            var Repulse = Math.round(values);
            $('#vmutc_particleRepulseDistance').val(Repulse);

            $('#' + what).attr('data-Repulse', Repulse);
            updateParticle(what);
        });
        $(document).on('change', '#vmutc_particleRepulseDistance', function () {
            var what = $('#vmutc_blockColumn_id').val();
            particleRepulse.noUiSlider.set(this.value);
            $('#' + what).attr('data-Repulse', this.value);
            updateParticle(what);
        });



        function saveWidgetInitialValues(widgetID) {

            localStorage.setItem('particlenumber', $('#' + widgetID).attr('data-particlenumber'));
            localStorage.setItem('particledensity', $('#' + widgetID).attr('data-density'));
            localStorage.setItem('particledensityvalue', $('#' + widgetID).attr('data-densityvalue'));
            localStorage.setItem('particlecolor', $('#' + widgetID).attr('data-particlecolor'));
            localStorage.setItem('particlestrokewidth', $('#' + widgetID).attr('data-strokewidth'));
            localStorage.setItem('particlestrokecolor', $('#' + widgetID).attr('data-strokecolor'));
            localStorage.setItem('particlenbsides', $('#' + widgetID).attr('data-nbsides'));
            localStorage.setItem('particleimagetype', $('#' + widgetID).attr('data-imagetype'));
            localStorage.setItem('particleimagewidth', $('#' + widgetID).attr('data-imagewidth'));
            localStorage.setItem('particleimageheight', $('#' + widgetID).attr('data-imageheight'));
            localStorage.setItem('particleimageurl', $('#' + widgetID).attr('data-imageurl'));
            localStorage.setItem('particlesizevalue', $('#' + widgetID).attr('data-sizevalue'));
            localStorage.setItem('particlesizerandom', $('#' + widgetID).attr('data-sizerandom'));
            localStorage.setItem('particlesizeanim', $('#' + widgetID).attr('data-sizeanim'));
            localStorage.setItem('particlesizeanimspeed', $('#' + widgetID).attr('data-sizeanimspeed'));
            localStorage.setItem('particleminsizeanim', $('#' + widgetID).attr('data-minsizeanim'));
            localStorage.setItem('particlesizeanimsync', $('#' + widgetID).attr('data-sizeanimsync'));
            localStorage.setItem('particleopacityrandom', $('#' + widgetID).attr('data-opacityrandom'));
            localStorage.setItem('particleopacityanim', $('#' + widgetID).attr('data-opacityanim'));
            localStorage.setItem('particleopacityanimsync', $('#' + widgetID).attr('data-opacityanimsync'));
            localStorage.setItem('particleopacityanimspeed', $('#' + widgetID).attr('data-opacityanimspeed'));
            localStorage.setItem('particleminopacityanim', $('#' + widgetID).attr('data-minopacityanim'));
            localStorage.setItem('particleopacityvalue', $('#' + widgetID).attr('data-opacityvalue'));
            localStorage.setItem('particlelinelinked', $('#' + widgetID).attr('data-linelinked'));
            localStorage.setItem('particlelinedistance', $('#' + widgetID).attr('data-linedistance'));
            localStorage.setItem('particlelineopacity', $('#' + widgetID).attr('data-lineopacity'));
            localStorage.setItem('particlelinewidth', $('#' + widgetID).attr('data-linewidth'));
            localStorage.setItem('particlelinecolor', $('#' + widgetID).attr('data-linecolor'));
            localStorage.setItem('particlemoveenable', $('#' + widgetID).attr('data-moveenable'));
            localStorage.setItem('particlemovedirection', $('#' + widgetID).attr('data-movedirection'));
            localStorage.setItem('particlemoverandom', $('#' + widgetID).attr('data-moverandom'));
            localStorage.setItem('particlemovestraight', $('#' + widgetID).attr('data-movestraight'));
            localStorage.setItem('particlemovespeed', $('#' + widgetID).attr('data-movespeed'));
            localStorage.setItem('particlemoveoutmode', $('#' + widgetID).attr('data-moveoutmode'));
            localStorage.setItem('particlemoveattract', $('#' + widgetID).attr('data-moveattract'));
            localStorage.setItem('particleattractrotatex', $('#' + widgetID).attr('data-attractrotatex'));
            localStorage.setItem('particleattractrotatey', $('#' + widgetID).attr('data-attractrotatey'));
            localStorage.setItem('particleparticlehover', $('#' + widgetID).attr('data-particlehover'));
            localStorage.setItem('particleparticlehovermode', $('#' + widgetID).attr('data-particlehovermode'));
            localStorage.setItem('particleparticleclick', $('#' + widgetID).attr('data-particleclick'));
            localStorage.setItem('particleparticleclickmode', $('#' + widgetID).attr('data-particleclickmode'));
            localStorage.setItem('particlegrabdistance', $('#' + widgetID).attr('data-grabdistance'));
            localStorage.setItem('particlegrabopacity', $('#' + widgetID).attr('data-grabopacity'));
            localStorage.setItem('particlebubbledistance', $('#' + widgetID).attr('data-bubbledistance'));
            localStorage.setItem('particlebubbleopacity', $('#' + widgetID).attr('data-bubbleopacity'));
            localStorage.setItem('particlebubblesize', $('#' + widgetID).attr('data-bubblesize'));
            localStorage.setItem('particlebubbleduration', $('#' + widgetID).attr('data-bubbleduration'));
            localStorage.setItem('particlerepulse', $('#' + widgetID).attr('data-repulse'));


        }

        function restoreWidgetInitialValues(widgetID) {

            $('#' + widgetID).attr('data-particlenumber', localStorage.getItem('particlenumber'));
            $('#' + widgetID).attr('data-density', localStorage.getItem('particledensity'));
            $('#' + widgetID).attr('data-densityvalue', localStorage.getItem('particledensityvalue'));
            $('#' + widgetID).attr('data-particlecolor', localStorage.getItem('particlecolor'));
            $('#' + widgetID).attr('data-strokewidth', localStorage.getItem('particlestrokewidth'));
            $('#' + widgetID).attr('data-strokecolor', localStorage.getItem('particlestrokecolor'));
            $('#' + widgetID).attr('data-nbsides', localStorage.getItem('particlenbsides'));
            $('#' + widgetID).attr('data-imagetype', localStorage.getItem('particleimagetype'));
            $('#' + widgetID).attr('data-imagewidth', localStorage.getItem('particleimagewidth'));
            $('#' + widgetID).attr('data-imageheight', localStorage.getItem('particleimageheight'));
            $('#' + widgetID).attr('data-imageurl', localStorage.getItem('particleimageurl'));
            $('#' + widgetID).attr('data-sizevalue', localStorage.getItem('particlesizevalue'));
            $('#' + widgetID).attr('data-sizerandom', localStorage.getItem('particlesizerandom'));
            $('#' + widgetID).attr('data-sizeanim', localStorage.getItem('particlesizeanim'));
            $('#' + widgetID).attr('data-sizeanimspeed', localStorage.getItem('particlesizeanimspeed'));
            $('#' + widgetID).attr('data-minsizeanim', localStorage.getItem('particleminsizeanim'));
            $('#' + widgetID).attr('data-sizeanimsync', localStorage.getItem('particlesizeanimsync'));
            $('#' + widgetID).attr('data-opacityrandom', localStorage.getItem('particleopacityrandom'));
            $('#' + widgetID).attr('data-opacityanim', localStorage.getItem('particleopacityanim'));
            $('#' + widgetID).attr('data-opacityanimsync', localStorage.getItem('particleopacityanimsync'));
            $('#' + widgetID).attr('data-opacityanimspeed', localStorage.getItem('particleopacityanimspeed'));
            $('#' + widgetID).attr('data-minopacityanim', localStorage.getItem('particleminopacityanim'));
            $('#' + widgetID).attr('data-opacityvalue', localStorage.getItem('particleopacityvalue'));
            $('#' + widgetID).attr('data-linelinked', localStorage.getItem('particlelinelinked'));
            $('#' + widgetID).attr('data-linedistance', localStorage.getItem('particlelinedistance'));
            $('#' + widgetID).attr('data-lineopacity', localStorage.getItem('particlelineopacity'));
            $('#' + widgetID).attr('data-linewidth', localStorage.getItem('particlelinewidth'));
            $('#' + widgetID).attr('data-linecolor', localStorage.getItem('particlelinecolor'));
            $('#' + widgetID).attr('data-moveenable', localStorage.getItem('particlemoveenable'));
            $('#' + widgetID).attr('data-movedirection', localStorage.getItem('particlemovedirection'));
            $('#' + widgetID).attr('data-moverandom', localStorage.getItem('particlemoverandom'));
            $('#' + widgetID).attr('data-movestraight', localStorage.getItem('particlemovestraight'));
            $('#' + widgetID).attr('data-movespeed', localStorage.getItem('particlemovespeed'));
            $('#' + widgetID).attr('data-moveoutmode', localStorage.getItem('particlemoveoutmode'));
            $('#' + widgetID).attr('data-moveattract', localStorage.getItem('particlemoveattract'));
            $('#' + widgetID).attr('data-attractrotatex', localStorage.getItem('particleattractrotatex'));
            $('#' + widgetID).attr('data-attractrotatey', localStorage.getItem('particleattractrotatey'));
            $('#' + widgetID).attr('data-particlehover', localStorage.getItem('particleparticlehover'));
            $('#' + widgetID).attr('data-particlehovermode', localStorage.getItem('particleparticlehovermode'));
            $('#' + widgetID).attr('data-particleclick', localStorage.getItem('particleparticleclick'));
            $('#' + widgetID).attr('data-particleclickmode', localStorage.getItem('particleparticleclickmode'));
            $('#' + widgetID).attr('data-grabdistance', localStorage.getItem('particlegrabdistance'));
            $('#' + widgetID).attr('data-grabopacity', localStorage.getItem('particlegrabopacity'));
            $('#' + widgetID).attr('data-bubbledistance', localStorage.getItem('particlebubbledistance'));
            $('#' + widgetID).attr('data-bubbleopacity', localStorage.getItem('particlebubbleopacity'));
            $('#' + widgetID).attr('data-bubblesize', localStorage.getItem('particlebubblesize'));
            $('#' + widgetID).attr('data-bubbleduration', localStorage.getItem('particlebubbleduration'));
            $('#' + widgetID).attr('data-repulse', localStorage.getItem('particlerepulse'));

            updateParticle(widgetID);

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


        function updateParticle(particleID) {
            var bounce = false;
            if (jQuery('#' + particleID).attr('data-moveoutmode') == 'bounce')
                bounce = true;
            particlesObj = {
                "particles": {
                    "number": {
                        "value": $('#' + particleID).attr('data-particlenumber'),
                        "density": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-density'))),
                            "valueArea": $('#' + particleID).attr('data-densityvalue')
                        }
                    },
                    "color": {
                        "value": $('#' + particleID).attr('data-particlecolor')
                    },
                    "shape": {
                        "type": $('#' + particleID).attr('data-imagetype'),
                        "stroke": {
                            "width": $('#' + particleID).attr('data-strokewidth'),
                            "color": $('#' + particleID).attr('data-strokecolor')
                        },
                        "polygon": {
                            "nbSides": $('#' + particleID).attr('data-nbsides')
                        },
                        "image": {
                            "src": $('#' + particleID).attr('data-imageurl'),
                            "width": $('#' + particleID).attr('data-imagewidth'),
                            "height": $('#' + particleID).attr('data-imageheight')
                        }
                    },
                    "opacity": {
                        "value": $('#' + particleID).attr('data-opacityvalue'),
                        "random": Boolean(Number($('#' + particleID).attr('data-opacityrandom'))),
                        "anim": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-opacityanim'))),
                            "speed": $('#' + particleID).attr('data-opacityanimspeed'),
                            "minimumValue": $('#' + particleID).attr('data-minopacityanim'),
                            "sync": Boolean(Number($('#' + particleID).attr('data-opacityanimsync')))
                        }
                    },
                    "size": {
                        "value": $('#' + particleID).attr('data-sizevalue'),
                        "random": Boolean(Number($('#' + particleID).attr('data-sizerandom'))),
                        "anim": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-sizeanim'))),
                            "speed": $('#' + particleID).attr('data-sizeanimspeed'),
                            "minimumValue": $('#' + particleID).attr('data-minsizeanim'),
                            "sync": Boolean(Number($('#' + particleID).attr('data-sizeanimsync')))
                        }
                    },
                    "lineLinked": {
                        "enable": Boolean(Number($('#' + particleID).attr('data-linelinked'))),
                        "distance": $('#' + particleID).attr('data-linedistance'),
                        "color": $('#' + particleID).attr('data-linecolor'),
                        "opacity": $('#' + particleID).attr('data-lineopacity'),
                        "width": $('#' + particleID).attr('data-linewidth')
                    },
                    "move": {
                        "enable": Boolean(Number($('#' + particleID).attr('data-moveenable'))),
                        "speed": $('#' + particleID).attr('data-movespeed'),
                        "direction": $('#' + particleID).attr('data-movedirection'),
                        "bounce": bounce,
                        "random": Boolean(Number($('#' + particleID).attr('data-moverandom'))),
                        "straight": Boolean(Number($('#' + particleID).attr('data-movestraight'))),
                        "outMode": $('#' + particleID).attr('data-moveoutmode'),
                        "attract": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-moveattract'))),
                            "rotateX": $('#' + particleID).attr('data-attractrotatex'),
                            "rotateY": $('#' + particleID).attr('data-attractrotatey')
                        }
                    }
                },
                "interactivity": {
                    "detectsOn": "canvas",
                    "events": {
                        "onHover": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-particlehover'))),
                            "mode": $('#' + particleID).attr('data-particlehovermode')
                        },
                        "onClick": {
                            "enable": Boolean(Number($('#' + particleID).attr('data-particleclick'))),
                            "mode": $('#' + particleID).attr('data-particleclickmode')

                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": $('#' + particleID).attr('data-grabdistance'),
                            "lineLinked": {
                                "opacity": $('#' + particleID).attr('data-grabopacity')
                            }
                        },
                        "bubble": {
                            "distance": $('#' + particleID).attr('data-bubbledistance'),
                            "size": $('#' + particleID).attr('data-bubblesize'),
                            "duration": $('#' + particleID).attr('data-bubbleduration'),
                            "opacity": $('#' + particleID).attr('data-bubbleopacity'),
                            "speed": 3
                        },
                        "repulse": {
                            "distance": $('#' + particleID).attr('data-repulse'),
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

            if (typeof (window.pJSDom[particleID]) != 'undefined')
                window.pJSDom[particleID].pJS.fn.vendors.destroypJS();

                tsParticles.load(particleID, particlesObj);

            var particlesCanvas = $('#' + particleID + ' canvas.tsparticles-canvas-el');
            var height = $(particlesCanvas).height();
            $('#' + particleID).attr('data-canvasheight', height);
            var sectionID = $('#vmutc_block_id').val();
            var rowID = $('#' + sectionID + ' > div.ge-row').attr('id');
            var rowHeight = $('#' + rowID).height();
            if (height > rowHeight) {
                $('#' + rowID).attr('data-sectionheight', height).css('height', height);
            }
        }

    });