<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_columnSettingsContainer" class="vmutc_widgetWindow">
    <div class="panel-group" role="tablist">
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_columnWidgetType" aria-expanded="true"
                        aria-controls="vmutc_columnWidgetType" class="vmutc_animatorTab collapsed" data-title="Widget Type">
                        <span><?php echo _e('Widget Type' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_columnWidgetType" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group  vmutc-widgetValues">
                                <!--    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Use Float Widget'
                                            , 'css-magician'); ?></span>
                                    </label><br />
                                    <label class="rocker rocker-small">
                                        <input type="checkbox" name="vmutc_columnWidgetTypeFloat"
                                            id="vmutc_columnWidgetTypeFloat" value="0">
                                        <span class="switch-left"><?php echo _e('Yes'
                                            , 'css-magician'); ?></span>
                                        <span class="switch-right"><?php echo _e('No'
                                            , 'css-magician'); ?></span>
                                    </label> -->
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Float Widget','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_columnWidgetTypeFloat" name="vmutc_columnWidgetTypeFloat" />
                    <label for="vmutc_columnWidgetTypeFloat"></label>
                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-md-12 vmutc-widgetValues">
                                <label class="control-label">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                         ><?php echo _e('Z-Index of the Widget' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_columnWidgetZindex_slider" style="width:50%;"></div>
                                <input type="text" name="vmutc_columnWidgetZindex"
                                    id="vmutc_columnWidgetZindex" value="0"
                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_columnColorTab" aria-expanded="true"
                        aria-controls="vmutc_columnColorTab" class="vmutc_animatorTab collapsed">
                        <span><?php echo _e('Background Color' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_columnColorTab" class="panel-collapse collapse panel-even" role="tabpanel">
                <div class="panel-body">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Background Color'
                                            , 'css-magician'); ?></span>
                                    </label><br />
                                    <input type="text" name="vmutc_columnBackgroundColor"
                                        id="vmutc_columnBackgroundColor">

                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group  vmutc-widgetValues">
                               <!--     <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Use Gradient'
                                            , 'css-magician'); ?></span>
                                    </label><br />
                                    <label class="rocker rocker-small">
                                        <input type="checkbox" name="vmutc_columngradientUsed"
                                            id="vmutc_columngradientUsed" value="0">
                                        <span class="switch-left"><?php echo _e('Yes'
                                            , 'css-magician'); ?></span>
                                        <span class="switch-right"><?php echo _e('No'
                                            , 'css-magician'); ?></span>
                                    </label> -->
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Gradient','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_columngradientUsed" name="vmutc_columngradientUsed" />
                    <label for="vmutc_columngradientUsed"></label>
                </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset id="vmutc_displaycolumngradientValues">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Gradient' , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_columngradientPicker"></div>

                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Gradient Type'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <select class="form-control vmutc_widgetSelect" id="vmutc_columngradientType">
                                        <option value=""><?php echo _e('-Select Type-' , 'css-magician'); ?></option>
                                        <option value="radial"><?php echo _e('Radial' , 'css-magician'); ?></option>
                                        <option value="linear"><?php echo _e('Linear' , 'css-magician'); ?></option>
                                        <option value="repeating-radial"><?php echo _e('Repeating Radial'
                                            , 'css-magician'); ?></option>
                                        <option value="repeating-linear"><?php echo _e('Repeating Linear'
                                            , 'css-magician'); ?></option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Gradient Position'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_columngradientAngleContainer">
                                        <div id="vmutc_columngradientAngle_slider" class="section_slider_width"></div>
                                        <input type="text" name="vmutc_columngradientAngle"
                                            id="vmutc_columngradientAngle"
                                            class="vmutc_editorInput vmutc_numeric inputAlign vmutc_widget_input_text">
                                    </div>
                                    <div id="vmutc_columngradientPositionContainer">
                                        <select id="vmutc_columngradientPosition" class="vmutc_widgetSelect">
                                            <option value="center center"><?php echo _e('Center Center'
                                                , 'css-magician'); ?></option>
                                            <option value="center left"><?php echo _e('Center Left'
                                                , 'css-magician'); ?> gauche</option>
                                            <option value="center right"><?php echo _e('Center Right'
                                                , 'css-magician'); ?></option>
                                            <option value="top center"><?php echo _e('Top Center' , 'css-magician'); ?>
                                            </option>
                                            <option value="top left"><?php echo _e('Top Left' , 'css-magician'); ?>
                                            </option>
                                            <option value="top right"><?php echo _e('Top Right' , 'css-magician'); ?>
                                            </option>
                                            <option value="bottom center"><?php echo _e('Bottom Center'
                                                , 'css-magician'); ?></option>
                                            <option value="bottom left"><?php echo _e('Bottom Left'
                                                , 'css-magician'); ?></option>
                                            <option value="bottom right"><?php echo _e('Bottom Right'
                                                , 'css-magician'); ?></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_columnImageTab" aria-expanded="true"
                        aria-controls="vmutc_columnImageTab" class="vmutc_animatorTab collapsed" >
                        <span><?php echo _e('Background Image' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_columnImageTab" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <fieldset>
                        <span id="vmutc_choosecolumnBackgroundImage" class="btn btn-primary" data-width="500"
                            data-rel="openBackgroundGallery" data-link="noredirect"> <?php echo _e('Choose a background
                            Image' , 'css-magician'); ?></span><br />

                        <input type="text" id="vmutc_columnBackgroundImage_input"
                            name="vmutc_columnBackgroundImage_input" value=""
                            class="vmutc_widget_input_text vmutc_widget_input_text" />
                        <span id="vmutc_columnBackgroundImage_Remove"><i class="fa fa-trash"></i></span>
                        <br />

                        <span id="vmutc_uploadcolumnBackgroundImage" class="btn btn-primary btn-primary2"
                            data-width="530" data-rel="vmutc_uploadcolumnBackgroundImageWin" data-link="noredirect"> <?php echo _e('Upload a background Image'
                            , 'css-magician'); ?></span>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Size' , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_columnBackgroundSize" type="select"
                                class="vmutc_selectorEffects vmutc_widgetSelect" name="vmutc_columnBackgroundSize"
                                autocomplete="off" style="padding:5px;">
                                <option value="auto">auto</option>
                                <option value="cover">cover</option>
                                <option value="contain">contain</option>
                                <option value="size">size of container</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Repeat'
                                    , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_columnBackgroundRepeat" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_columnBackgroundRepeat"
                                autocomplete="off" style="padding:5px;">
                                <option value="repeat">Repeat</option>
                                <option value="no-repeat">No Repeat</option>
                                <option value="repeat-x">Repeat X</option>
                                <option value="repeat-y">Repeat Y</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Position'
                                    , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_columnBackgroundPosition" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_columnBackgroundPosition"
                                autocomplete="off" style="padding:5px;">
                                <option value="left top">Left Top</option>
                                <option value="left center">Left Center</option>
                                <option value="left bottom">Left Bottom</option>
                                <option value="right top">Right Top</option>
                                <option value="right center">Right Center</option>
                                <option value="right bottom">Right Bottom</option>
                                <option value="center top">Center Top</option>
                                <option value="center center">Center Center</option>
                                <option value="center bottom">Center Bottom</option>
                            </select>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Blend Mode'
                                    , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_columnBackgroundBlend" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_columnBackgroundBlend"
                                autocomplete="off" style="padding:5px;">
                                <option value="normal">Normal</option>
                                <option value="multiply">Multiply</option>
                                <option value="screen">Screen</option>
                                <option value="overlay">Overlay</option>
                                <option value="darken">Darken</option>
                                <option value="lighten">Lighten</option>
                                <option value="color-dodge">Color Dodge</option>
                                <option value="color-burn">Color Burn</option>
                                <option value="hard-light">Hard Light</option>
                                <option value="soft-light">Soft Light</option>
                                <option value="difference">Difference</option>
                                <option value="exclusion">Exclusion</option>
                                <option value="hue">Hue</option>
                                <option value="saturation">Saturation</option>
                                <option value="color">Color</option>
                                <option value="luminosity">Luminosity</option>

                            </select>
                        </div>
                    </fieldset>
                   
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_columnVideoTab" aria-expanded="true"
                        aria-controls="vmutc_columnVideoTab" class="vmutc_animatorTab collapsed">
                        <span><?php echo _e('Background Video' , 'css-magician'); ?></span><i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_columnVideoTab" class="panel-collapse collapse panel-even" role="tabpanel">
                <div class="panel-body">
                    <fieldset>
                        <span id="vmutc_choosecolumnBackgroundVideo" class="btn btn-primary" data-width="500"
                            data-rel="openBackgroundVideoGallery" data-link="noredirect"> <?php echo _e('Choose a background Video' , 'css-magician'); ?></span><br />
                        <input type="text" id="vmutc_columnBackgroundVideo_input"
                            name="vmutc_columnBackgroundVideo_input" value="" class="vmutc_widget_input_text" />
                        <span id="vmutc_columnBackgroundVideo_Remove"><i class="fa fa-trash"></i></span>
                        <br />

                        <span id="vmutc_uploadcolumnBackgroundVideo" class="btn btn-primary btn-primary2"
                            data-width="530" data-rel="vmutc_uploadcolumnBackgroundVideoWin" data-link="noredirect"> <?php echo _e('Upload a background Video'
                            , 'css-magician'); ?></span>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Blend Mode'
                                    , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_columnBackgroundMixBlend" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_columnBackgroundMixBlend"
                                autocomplete="off" style="padding:5px;">
                                <option value="normal">Normal</option>
                                <option value="color">Color</option>
                                <option value="color-burn">Color Burn</option>
                                <option value="color-dodge">Color Dodge</option>
                                <option value="darken">Darken</option>
                                <option value="difference">Difference</option>
                                <option value="exclusion">Exclusion</option>
                                <option value="hard-light">Hard Light</option>
                                <option value="hue">Hue</option>
                                <option value="lighten">Lighten</option>
                                <option value="luminosity">Luminosity</option>
                                <option value="multiply">Multiply</option>
                                <option value="overlay">Overlay</option>
                                <option value="screen">Screen</option>
                                <option value="soft-light">Soft Light</option>
                                <option value="saturation">Saturation</option>
                            </select>
                        </div>
                    </fieldset>

                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_columnParallaxTab" aria-expanded="true"
                        aria-controls="vmutc_columnParallaxTab" class="vmutc_animatorTab collapsed" data-title="Parallax">
                        <span><?php echo _e('Parallax' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>
            <div id="vmutc_columnParallaxTab" class="panel-collapse collapse panel-odd" role="tabpanel">
                <div class="panel-body">
                    <fieldset>
                     <!--   <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                ><?php echo _e('Use Simple Css Parallax'
                                , 'css-magician'); ?></span>
                        </label><br />
                        <label class="rocker rocker-small">
                            <input type="checkbox" id="vmutc_column_cssParallax" name="vmutc_column_cssParallax">
                            <span class="switch-left">Yes</span>
                            <span class="switch-right">No</span>
                        </label> -->
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Simple Css Parallax','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_column_cssParallax" name="vmutc_column_cssParallax" />
                    <label for="vmutc_column_cssParallax"></label>
                </div>
                    </fieldset>
                    <fieldset>
                    <!--    <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                ><?php echo _e('Use Real Parallax'
                                , 'css-magician'); ?></span>
                        </label><br />
                        <label class="rocker rocker-small">
                            <input type="checkbox" id="vmutc_column_realParallax" name="vmutc_column_realParallax">
                            <span class="switch-left">Yes</span>
                            <span class="switch-right">No</span>
                        </label> -->
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Real Parallax','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_column_realParallax" name="vmutc_column_realParallax" />
                    <label for="vmutc_column_realParallax"></label>
                </div>
                    </fieldset>
                    <fieldset id="vmutc_columnrealParallaxValuesContainer">
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Offset to trigger the parallax'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_column_realParallaxOffset_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_column_realParallaxOffset"
                                        id="vmutc_column_realParallaxOffset"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Parallax Duration'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_column_realParallaxDuration_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_column_realParallaxDuration"
                                        id="vmutc_column_realParallaxDuration"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Parallax X move'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_column_realParallaxSizeX_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_column_realParallaxSizeX"
                                        id="vmutc_column_realParallaxSizeX"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />

                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Parallax Y Move'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_column_realParallaxSizeY_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_column_realParallaxSizeY"
                                        id="vmutc_column_realParallaxSizeY"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />

                                </div>
                            </div>
                        </div>
                    </fieldset>
       </div>
       </div>
       </div>
    </div>
</div>
