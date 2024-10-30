<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_sectionContainer" class="vmutc_widgetWindow">

    <div class="panel-group" role="tablist">
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_sectionMarginTab" aria-expanded="true"
                        aria-controls="vmutc_sectionMarginTab" class="vmutc_animatorTab collapsed" data-title="Margins">
                        <span><?php echo _e('Grid Margins' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionMarginTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                    <div class="row">
                        <div class="col-md-12">
                        <input type="checkbox" id="vmutc_sectionMargin_all" name="vmutc_sectionMargin_all" class="" value="1" />
                          <span class="" title="<?php echo _e('All the margins will be updated with the same size' , 'css-magician'); ?>">
                            <?php echo _e('All Margins' , 'css-magician'); ?>
                            </span><br>
                   
                            <div class="">
                                <span class="">
                                    <?php echo _e('Left' , 'css-magician'); ?>
                                </span>
                                <div id="vmutc_sectionMargin_left" class="section_slider_width ">
                                </div>
                                <input id="vmutc_sectionMargin_left_input" name="vmutc_sectionMargin_left_input" type="text"
                                    class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                <br>
                                <span class="">
                                    <?php echo _e('Top' , 'css-magician'); ?>
                                </span>
                                <div id="vmutc_sectionMargin_top" class="section_slider_width ">
                                </div>
                                <input id="vmutc_sectionMargin_top_input" name="vmutc_sectionMargin_top_input" type="text"
                                    class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                            <br>
                                <span class="">
                                    <?php echo _e('Right' , 'css-magician'); ?>
                                </span>
                                <div id="vmutc_sectionMargin_right" class="section_slider_width ">
                                </div>
                                <input id="vmutc_sectionMargin_right_input" name="vmutc_sectionMargin_right_input" type="text"
                                    class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                    <br>
                                <span class="">
                                    <?php echo _e('Bottom' , 'css-magician'); ?>
                                </span>
                                <div id="vmutc_sectionMargin_bottom" class="section_slider_width ">
                                </div>
                                <input id="vmutc_sectionMargin_bottom_input" name="vmutc_sectionMargin_bottom_input" type="text"
                                    class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                </div>
                    </div>
                    </div>
               
                    </fieldset>
                </div>
                </div>
            </div>

            
            <div class="panel panel-default">
                <div class="panel-heading panel-even" role="tab">
                    <h3 class="panel-title">
                        <div data-toggle="collapse" href="#vmutc_widgetMarginTab" aria-expanded="true"
                            aria-controls="vmutc_widgetMarginTab" class="vmutc_animatorTab collapsed" data-title="Margins">
                            <span><?php echo _e('Widgets Margins' , 'css-magician'); ?></span> <i
                                class="fas fa-chevron-down"></i>
                        </div>
                    </h3>
                </div>
    
                <div id="vmutc_widgetMarginTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                    <div class="panel-body">
                        <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="">
                                    <span class="">
                                        <?php echo _e('Vertical Margins' , 'css-magician'); ?>
                                    </span>
                                    <div id="vmutc_widgetMargin_vertical" class="section_slider_width ">
                                    </div>
                                    <input id="vmutc_widgetMargin_vertical_input" name="vmutc_widgetMargin_vertical_input" type="text"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                                    <br>
                                    <span class="">
                                        <?php echo _e('Horizontal Margins' , 'css-magician'); ?>
                                    </span>
                                    <div id="vmutc_widgetMargin_horizontal" class="section_slider_width ">
                                    </div>
                                    <input id="vmutc_widgetMargin_horizontal_input" name="vmutc_widgetMargin_horizontal_input" type="text"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />
                               
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
                    <div data-toggle="collapse" href="#vmutc_sectionSizeTab" aria-expanded="true"
                        aria-controls="vmutc_sectionSizeTab" class="vmutc_animatorTab collapsed" >
                        <span><?php echo _e('Background Size' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionSizeTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Background Width (%)'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_sectionWidth_slider" class="section_slider_width"></div>
                                    <input type="text" name="vmutc_sectionWidth" id="vmutc_sectionWidth"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />

                                </div>
                            </div>
                    </fieldset>
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Background Height (px)'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_sectionHeight_slider" class="section_slider_width"></div>
                                    <input type="text" name="vmutc_sectionHeight" id="vmutc_sectionHeight"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />

                                </div>
                            </div>
                    </fieldset>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-even" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_sectionColorTab" aria-expanded="true"
                        aria-controls="vmutc_sectionColorTab" class="vmutc_animatorTab collapsed">
                        <span><?php echo _e('Background Color' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionColorTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Background Color' , 'css-magician'); ?></span>
                                    </label><br />
                                    <input type="text" name="vmutc_sectionBackgroundColor"
                                        id="vmutc_sectionBackgroundColor">

                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group  vmutc-widgetValues">
                                <!--    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Use Gradient' , 'css-magician'); ?></span>
                                    </label><br />
                                    <label class="rocker rocker-small">
                                        <input type="checkbox" name="vmutc_gradientUsed" id="vmutc_gradientUsed"
                                            value="0">
                                        <span class="switch-left"><?php echo _e('Yes' , 'css-magician'); ?></span>
                                        <span class="switch-right"><?php echo _e('No' , 'css-magician'); ?></span>
                                    </label>-->
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Gradient','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_gradientUsed" name="vmutc_gradientUsed" />
                    <label for="vmutc_gradientUsed"></label>
                </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset id="vmutc_displayGradientValues">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Gradient' , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_gradientPicker"></div>

                                </div>
                            </div>
                        </div>

                        <div class="row vmutc_gradienttypecontainer">
                            <div class="col-md-12">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Gradient Type'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <select class="form-control vmutc_widgetSelect" id="vmutc_gradientType">
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
                                    <div id="vmutc_gradientAngleContainer">
                                        <div id="vmutc_gradientAngle_slider" class="section_slider_width"></div>
                                        <input type="text" name="vmutc_gradientAngle" id="vmutc_gradientAngle"
                                            class="vmutc_editorInput vmutc_numeric inputAlign vmutc_widget_input_text">
                                    </div>
                                    <div id="vmutc_gradientPositionContainer">
                                        <select id="vmutc_gradientPosition" class="vmutc_widgetSelect">
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
                    <div data-toggle="collapse" href="#vmutc_sectionImageTab" aria-expanded="true"
                        aria-controls="vmutc_sectionImageTab" class="vmutc_animatorTab collapsed" >
                        <span><?php echo _e('Background Image' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionImageTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                        <span id="vmutc_chooseSectionBackgroundImage" class="btn btn-primary" data-width="500"
                            data-rel="openBackgroundGallery" data-link="noredirect"
                            data-title="Choose a Background Image"> <?php echo _e('Choose a background
                            Image' , 'css-magician'); ?></span><br />

                        <input type="text" id="vmutc_SectionBackgroundImage_input"
                            name="vmutc_SectionBackgroundImage_input" value=""
                            class="vmutc_widget_input_text vmutc_widget_input_text" />
                        <span id="vmutc_sectionBackgroundImage_Remove"><i class="fa fa-trash"></i></span>
                        <br />

                        <span id="vmutc_uploadSectionBackgroundImage" class="btn btn-primary btn-primary2"
                            data-width="530" data-rel="vmutc_uploadSectionBackgroundImageWin" data-link="noredirect"
                            data-title="Upload a Background Image"> <?php echo _e('Upload a background Image'
                            , 'css-magician'); ?></span>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Size' , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_sectionBackgroundSize" type="select"
                                class="vmutc_selectorEffects vmutc_widgetSelect" name="vmutc_sectionBackgroundSize"
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
                            <select id="vmutc_sectionBackgroundRepeat" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_sectionBackgroundRepeat"
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
                            <select id="vmutc_sectionBackgroundPosition" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_sectionBackgroundPosition"
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
                            <select id="vmutc_sectionBackgroundBlend" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_sectionBackgroundBlend"
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
                    <div data-toggle="collapse" href="#vmutc_sectionVideoTab" aria-expanded="true"
                        aria-controls="vmutc_sectionVideoTab" class="vmutc_animatorTab collapsed" da>
                        <span><?php echo _e('Background Video' , 'css-magician'); ?></span><i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionVideoTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                        <span id="vmutc_chooseSectionBackgroundVideo" class="btn btn-primary" data-width="500"
                            data-rel="openBackgroundVideoGallery" data-link="noredirect"
                            data-title="Choose a Background Video"> <?php echo _e('Choose a background
                            Video' , 'css-magician'); ?></span><br />
                        <input type="text" id="vmutc_SectionBackgroundVideo_input"
                            name="vmutc_SectionBackgroundVideo_input" value="" class="vmutc_widget_input_text" />
                        <span id="vmutc_sectionBackgroundVideo_Remove"><i class="fa fa-trash"></i></span>
                        <br />

                        <span id="vmutc_uploadSectionBackgroundVideo" class="btn btn-primary btn-primary2"
                            data-width="530" data-rel="vmutc_uploadSectionBackgroundVideoWin" data-link="noredirect"
                            data-title="Upload a Background Video"> <?php echo _e('Upload a background Video'
                            , 'css-magician'); ?></span>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label small100 col-md-12" style="text-align:center;">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Background Blend Mode'
                                    , 'css-magician'); ?></span>
                            </label>
                            <select id="vmutc_sectionBackgroundMixBlend" type="select"
                                class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_sectionBackgroundMixBlend"
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
                    <div data-toggle="collapse" href="#vmutc_sectionDividerTab" aria-expanded="true"
                        aria-controls="vmutc_sectionDividerTab" class="vmutc_animatorTab collapsed" >
                        <span><?php echo _e('Background Divider' , 'css-magician'); ?></span><i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionDividerTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                        <div class="vmutc_svg_select_container col-lg-12">
                            <div class="vmutc_svg_button_position_container">
                                <button id="vmutc_divider_bottom_button" class="btn btn-secondary"> <?php echo _e('BOTTOM'
                                    , 'css-magician'); ?></button> <button id="vmutc_divider_top_button"
                                    class="btn btn-secondary"> <?php echo _e('TOP' , 'css-magician'); ?></button>
                            </div>
                            <div class="dropdown form-group vmutc-widgetValues">
                                <button class="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownDividerButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <?php echo _e('Select Divider' , 'css-magician'); ?>
                                </button>
                                <ul class="vmutc_dropdownDividerContainer"
                                    aria-labelledby="dropdownDividerButton">
                                    <li class=" vmutc_section_divider_select" data-name="none">
                                        <span class="">None</span>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="triangle1">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0 0v140h1300L0 0z"></path>
                                        </svg></li>

                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="triangle2">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0 0v140h1300L0 0z" fill-opacity=".5"></path>
                                            <path d="M0 42v98h1300L0 42z"></path>
                                        </svg>

                                    </li>

                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="triangle3">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M640 139L0 0v140h1300V0L640 139z"></path>
                                        </svg>
                                    </li>

                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="triangle4">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M640 139L0 0v140h1300V0L640 139z" fill-opacity=".5"></path>
                                            <path d="M640 139L0 42v98h1300V42l-640 97z"></path>
                                        </svg>
                                    </li>

                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="triangle5">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none" viewBox="0 0 1300 140"
                                            style="height: 30px;" class="svg_divider_rotateXY">

                                            <path d="M0,140l650-70l650,70V0L650,70L0,0V140z" fill-opacity=".5" />
                                            <path d="M0,140h1300L640,70L0,140z" />
                                        </svg>
                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="triangle6">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <g>
                                                <path fill-opacity="0.4"
                                                    d="M1300,139.5H0V57.4L650,0.5l650,56.9V139.5z" />
                                                <path d="M650,0.5L0,57.4v82.1h650V0.5z" />
                                            </g>
                                        </svg>

                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="triangle7">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewBox="0 0 1300 140">
                                            <path fill-opacity="0.4" d="M0,3.7l650,90l650-90v100H0V3.7L0,3.7z" />
                                            <path fill-opacity="0.6" d="M0,35.6l650,60l650-60v68.1H0V35.6z" />
                                            <path fill-opacity="0.8" d="M0,67.4l650,30l650-30v36.3H0V67.4z" />
                                            <path d="M1300,140H0v-36.3h1300V140z" />
                                        </svg>

                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi1">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0 140h1300C573.08 140 0 0 0 0z"></path>
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi2">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0 140h1300C573.08 140 0 0 0 0z" fill-opacity=".3"></path>
                                            <path d="M0 140h1300C573.08 140 0 30 0 30z" fill-opacity=".5"></path>
                                            <path d="M0 140h1300C573.08 140 0 60 0 60z"></path>
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi3">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M1300 140V0S993.46 140 640 139 0 0 0 0v140z"></path>
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi4">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M725.3,101.2C325.2,122.5,0,0,0,0v140h1300V0c0,0-154.6,79.9-554.7,101.2H725.3z"
                                                fill-opacity=".3" />
                                            <path
                                                d="M556.5,119.7C953.4,140,1300,14,1300,14v126H0V0C0,0,159.5,99.5,556.5,119.7z"
                                                fill-opacity=".5" />
                                            <path
                                                d="M690.6,139.5c336.6,0,609.4-140,609.4-139v140H0v-141c0,0,272.8,140,609.4,140H690.6z" />
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi5">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path d="M1300,110v30H0v-30C0,110,208.6,0,650,0S1300,110,1300,110z" />
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi6">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path fill-opacity="0.4"
                                                d="M1300,139v-12.8c0,0-230.1-125.7-650-125.7S0,125.1,0,125.1V139H1300z" />
                                            <path fill-opacity="0.6"
                                                d="M1300,139.5v-13.3c0,0-230.1-97.5-650-97.5S0,125.1,0,125.1v14.4H1300z" />
                                            <path
                                                d="M1300,139.5v-13.3c0,0-230.1-67.9-650-67.9S0,125.1,0,125.1v14.4L1300,139.5z" />
                                        </svg>

                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi7">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path fill-opacity="0.4" d="M0,96.5V140h1300V36.8c-378.3,0-341.9,60.6-578.5,60.6c-194.1,0-195.3-22.8-298-22.8h-11.2
C218,74.6,197.9,142.4,0,96.5L0,96.5z" />
                                            <path fill-opacity="0.4" d="M0,96.5V140h1300V18.4c-378.3,0-341.9,79-578.5,79c-194.1,0-195.3-22.8-298-22.8h-11.2
C299,74.6,193.4,143.1,0,96.5z" />
                                            <path
                                                d="M0,96.5c230.7,53.1,338-21.9,423.5-21.9c102.7,0,103.9,22.8,298,22.8C958.1,97.4,921.7,0,1300,0v140H0V96.5z" />
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi8">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path fill-opacity="0.4"
                                                d="M643.1,92.8C850.1,92.8,993.7,5,1300,5v135H639.6L643.1,92.8z" />
                                            <path fill-opacity="0.6"
                                                d="M669.1,92.8c207,0,324.6-67.8,630.9-67.8l0,115H669.1V92.8z" />
                                            <path fill-opacity="0.8"
                                                d="M669.1,92.4c8.2,0.2,16.8,0.3,26,0.3c207,0,298.6-51.9,604.9-51.9V140H669.1V92.4z" />
                                            <path d="M1300,40.9V140H0v-24.7c276.4,0,281.5-52.3,383-52.3c75.3,0,94.2,29.8,338.1,29.8c207,0,272.6-26.8,578.9-26.8
V40.9z" />
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="arrondi9">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path class="st0"
                                                d="M650,82.8c0,0-29.8-82.8-187.7-82.8H0v140h1300V0H837.7C679.8,0,650,82.8,650,82.8L650,82.8z" />
                                        </svg>
                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne1">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0,70.3l325-49.2l650,98.5l325-49.3V140H0V70.3z" />
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne2">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path d="M0,47.4L172.7,0l636.3,94.9l318.4-7.8L1300,47.4V140H0V47.4z"
                                                fill-opacity=".5" />
                                            <path
                                                d="M0,90.7l142.2-28.3l320.4,24.1l346.3-20.8l348.9,39.1L1300,90.7V140H0V90.7z" />
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne3">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M0 122.138l60.614 9.965 95.644-4.2 86.363-18.654 78.684 13.079L411.442 99.4l94.453 10.303L582.821 93.8l82.664 18.728 76.961-11.39L816.11 71.4l97.601 9.849L997.383 50.4l66.285 14.694 70.793-24.494h79.863L1300 0v140H0z">
                                            </path>
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne4">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M0 127.899l60.613 4.878 95.645-6.211 86.363-16.074 78.684 9.883 90.136-21.594 94.454 7.574 77.925-17.66 91.664 20.798 76.961-12.649 63.664-21.422 97.602 7.07 83.672-29.617 66.285 11.678 70.793-23.334 74.863-4.641L1300 0v140H0z"
                                                fill-opacity=".5"></path>
                                            <path
                                                d="M0 126.71l60.613 7.415L156.257 131l86.364-13.879 78.683 9.731 90.137-17.059 94.453 7.666 76.926-11.833 82.664 13.935 76.961-8.475 73.664-22.126 97.601 7.328 83.672-22.952 66.285 10.933 70.794-18.224h79.862L1300 35.838V140H0z">
                                            </path>
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne5">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path class="st0" d="M0,0l65.8,38.7l92.6-3.2l96.9,34.8l121.9,0.2l72.6,33.3l91.5-3.9L650,137.6l104-37.2l86.9,10.7l89.5-7.2
                                            l77.1-38.7l74.4,5.3l67.8-22.1l78.2-0.4L1300,0v140H0V0z" />
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne6">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M0 0l64.8 30.95 91.2-2.54 95.46 27.87 120.04.2L443 83.15l90.09-3.12L640 110.12l102.39-29.73 85.55 8.51 88.11-5.75L992 52.22l73.21 4.26L1132 38.79l77-.33L1300 0v140H0V0z"
                                                fill-opacity=".5"></path>
                                            <path
                                                d="M0 0l64.8 38.69 91.2-3.18 95.46 34.84 120.04.24 71.5 33.35 90.09-3.91L640 137.65l102.39-37.17 85.55 10.65 88.11-7.19L992 65.28l73.21 5.31 66.79-22.1 77-.41L1300 0v140H0V0z">
                                            </path>
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne7">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <linearGradient gradientUnits="userSpaceOnUse" x1="0" y1="72.0075" x2="1300"
                                                y2="72.0075" gradientTransform="matrix(1 0 0 -1 0 142)">
                                                <stop offset="0" style="stop-color:#DA1C5C" />
                                                <stop offset="8.000000e-02" style="stop-color:#CD1E62" />
                                                <stop offset="0.22" style="stop-color:#AC2371" />
                                                <stop offset="0.41" style="stop-color:#762B8A" />
                                                <stop offset="0.46" style="stop-color:#662D91" />
                                                <stop offset="0.68" style="stop-color:#522877" />
                                                <stop offset="0.87" style="stop-color:#442564" />
                                            </linearGradient>
                                            <path d="M1300,69.7l-102.9-15.4l-90.6,18l-68.4-24L909,80.9l-61-8.7L742.8,0L511.5,64.8l-216.3-56L163,57.1l-55-40.3
L0,71.7V140h1300V69.7z" />
                                            <linearGradient gradientUnits="userSpaceOnUse" x1="1300" y1="61.0025"
                                                x2="1.818989e-12" y2="61.0025"
                                                gradientTransform="matrix(1 0 0 -1 0 142)">
                                                <stop offset="0" style="stop-color:#DA1C5C" />
                                                <stop offset="8.000000e-02" style="stop-color:#CD1E62" />
                                                <stop offset="0.22" style="stop-color:#AC2371" />
                                                <stop offset="0.41" style="stop-color:#762B8A" />
                                                <stop offset="0.46" style="stop-color:#662D91" />
                                                <stop offset="0.68" style="stop-color:#522877" />
                                                <stop offset="0.87" style="stop-color:#442564" />
                                            </linearGradient>
                                            <path d="M0,88.2l108.2-54l75.1,57.4l132.6-47.3l169,42L715,22l80.6,52.9l136.5,18.5l126.1-30l67.6,24l97.5-20l76.7,10
V140H0V88.2L0,88.2z" />
                                        </svg>

                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="montagne8">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path fill-opacity="0.4"
                                                d="M0.4,64.1c0,0,1.8-9.2,3.6-11.4l8.7-1c0.1-3.5,5.8-6.4,11.3-5.8c4.9,0.6,8.8,3.6,13.8,3.7
c1.9,0,3.9-0.2,5.7-0.7c9.7-1.6,20-1.6,29.8,0c2.6-2,7.1-2.8,11.3-2.5c4.1,0.4,8,1.2,11.8,2.4c1.8,0.8,4.2,0.3,5.2-1.1
c5.1-4,16.5-3.5,20.8,0.8l3.2-2.4c3.9,2.1,10.8,1.8,15.5,3.1c8.1,2.3,16.9,2.2,24.9-0.1l4.5,2.2c0.3-2.4,3.2-2.7,6.9-3.3
c-0.5,1.3-0.5,0.7,0.1,1.9c7.5,1,15.3,1,22.9-0.1c3-0.6,6-0.9,9.1-1c3.1,0,6.4,0.8,7.8,2.5c2.2-1.2,4.2-2.5,6-4
c1.6,1.4,2.6,3.2,2.9,5c2.3-1.7,5.1-3,8.1-3.7c3.2-0.7,7.3,0,8.7,1.9c1.2-2.2,2.3-2.5,3.5-4.7c3.1,1.4,6,1,8.3,2.8
c3.9-4.3,12.5-5.8,20.3-6c1.7-0.1,3.5,0,5.2,0.3c4.9,0.8,8.1,3.7,10.9,6.4c1.6-1.5,5.1-1.2,7.5-0.4s5.1,1.9,7.8,1.5s4.2-2,6.6-2.5
c3.5-0.7,8.8,1.5,8.1,3.8l29.9,3.3c4,0.6,8.3,0.7,12.3,0.4c1.9-0.3,3.8-0.7,5.6-1.1c6.4-1.3,13-1.6,19.5-0.8c1.4,0.3,3,0.3,4.5,0
c1.2-0.4,2.1-0.9,2.9-1.7c2.6-2.2,4.9-2.5,6.9-5c3,3.8,8.6,5.9,14.3,5.4c2.5-0.2,4.7-1,7-1.1c4.4-0.3,9.2,1.6,13.1,0.3
c1.8-0.6,3.1-1.8,4.9-2.4s4.7-0.3,5.1,1c8.2,1.4,16.6,1.2,24.8-0.5c3.4-0.7,7.1-1.7,10.5-0.8c1,0.4,2.1,0.7,3.1,0.9
c2.3,0.3,4.3-1,6.2-2c6.4-3.1,15.7-2.2,22.5-5c1.3-0.7,2.7-1.2,4.3-1.7c1.6-0.3,3.6-0.1,4.4,0.8l22.2-6c1.3-0.4,2.6-0.7,4-0.8
c5.1-0.3,10.9,2.9,14.4,0.7c1.3-0.8,1.6-2.1,2.3-3.2c3.1-4.9,14-5,20.7-8.2l2.9,2.8l10.3-5.2c4.7-0.3,9.4-0.9,13.9-2
c3-0.7,6.5-2.1,6-4.2c1.9,1.4,5.5,1.1,8.1,0.2c2.6-0.9,4.7-2.3,7.5-2.8c3.5-0.6,7.8,0.2,10.8-1.2c1.6-0.7,2.5-1.9,4.3-2.4
c1.2-0.2,2.2-0.3,3.4-0.2c6.6,0.2,13.4,0.2,20,0.1c2.7,0,6.2-0.5,6.8-2.2c5.2,2.2,8.1,6.7,14.2,7.3c2,0.1,4,0,6-0.3
c8.8-1,18.3-0.4,27.2,0.8c6.1-0.4,13.1-1,16.4-4.4c0.4-0.6,0.9-1.1,1.6-1.5c1.6-0.9,4-0.5,6-0.2c7.1,1.2,14.4,1.7,21.8,1.6
c4.5,0.1,9.1-0.5,13.4-1.6l3.2,2.8c10.5,1.2,22.9,2.2,30.5-2.5c0.5-0.4,1.2-0.7,1.9-0.8c0.8,0,1.7,0.6,1,1L834.7,4
c1.7,0.8,4,0.4,5.8-0.3c1.8-0.7,3.5-1.6,5.5-1.8s4.5,0.9,3.9,2.2c0.4-2,5.2-2.2,7.9-1.2c2.7,1,5.3,2.7,8.6,2.6
c3.5,3.4,11,4,17.4,3.4c6.4-0.6,12.7-2,19.1-1.5c2.9,0.3,5.6,0.9,8.3,1.3c3.9,0.5,7.8,0.5,11.6-0.1l3.1,2.6c1.6-1.1,4.7-1,6.6-0.2
c1.8,0.9,3.5,2.1,4.8,3.4c4.2,3.6,9.4,6.5,14.9,8.6c0.8-2,5.6-1.8,8.4-0.8s6.1,3.3,9,2.2l1.8,1.2c11,3.5,23,5,35,4.3
c2.5-0.3,4.9-0.2,7.4,0.2c1.9,0.5,3.5,1.4,5.6,1.8c2.9,0.6,6,0,9-0.2c3-0.2,6.6,0.5,7.4,2.3c4.7-2.3,10.4-4.7,16.1-3.7
c3.9,0.6,6.8,2.7,10.3,4c3.7,1.4,7.9,1.9,12,1.5c2.3-0.4,4.8-0.6,7.1-0.7c2.5,0.1,5.6,1.2,5.8,2.7c6.4,1.8,14.7,3.3,19.5,0
c0.4-0.3,0.8-0.5,1.2-0.7c1.7-0.5,3.2,0.8,4.8,1.6c3.6,1.8,8.7-0.1,12.6-1.6c3.9-1.5,10.1-2.4,12.1,0.2c0-1.9,4-2.7,6.9-2.1
c2.9,0.6,5.3,1.9,8.3,1.9c1.6,0,3-0.2,4.4-0.5c5.9-1.1,11.9-1.5,17.9-1.2c1.2,0,2.3,0.1,3.5,0.3c1.7,0.2,3.4,0.5,5.1,0.6
c6.8,0.7,13.8-0.3,20.4-1.3l19.4-2.8c1.4-0.2,2.7-0.4,4.2-0.7c1-0.3,2.2-0.6,3.4-0.8c5.3-0.8,10.4,1.4,15.5,2.6
c6.9,1.5,14.3,1.1,20.9-1.2c1.4-0.6,3-1,4.5-1.2c1.3,0.1,2.6,0.3,3.6,0.7c6.1,1.9,17.7,12.3,23.8,14.2l0.8,94.2H0L0.4,64.1z" />
                                            <g transform="translate(-110 81.23)">
                                                <linearGradient gradientUnits="userSpaceOnUse" x1="865.5342"
                                                    y1="126.8571" x2="873.8875" y2="-32.6294"
                                                    gradientTransform="matrix(1 0 0 -1 -110 60.77)">
                                                    <stop offset="0" style="stop-color:#DCDDDE" />
                                                    <stop offset="1" style="stop-color:#231F20" />
                                                </linearGradient>
                                                <path fill-opacity="0.6"
                                                    d="M110-18.9c3.5-0.3,6.5-1.8,8.3-4.1l8.7-1c0.1-3.5,5.8-6.4,11.3-5.8c4.9,0.6,8.8,3.6,13.8,3.7
	c1.9,0,3.9-0.2,5.7-0.6c9.7-1.6,20-1.6,29.8,0c2.6-2,7.1-2.8,11.3-2.5c4.1,0.4,8,1.2,11.8,2.4c1.8,0.8,4.2,0.3,5.2-1.1
	c5.1-4,16.5-3.5,20.8,0.9l3.2-2.4c3.9,2.1,10.8,1.8,15.5,3.1c8.1,2.3,16.9,2.2,24.9-0.1l4.5,2.2c0.3-2.4,3.1-4.6,6.9-5.3
	c-0.5,1.3-0.5,2.7,0.1,3.9c7.5,1,15.3,1,22.9-0.1c3-0.6,6-0.9,9.1-1c3.1,0,6.4,0.8,7.8,2.5c2.2-1.2,4.2-2.5,6.1-4
	c1.6,1.4,2.6,3.2,2.9,5c2.3-1.7,5.1-3,8.1-3.7c3.2-0.6,7.3,0,8.7,1.9l3.5-6.7c3.1,1.3,5.9,2.9,8.4,4.8c3.9-4.3,12.5-5.8,20.3-6
	c1.7-0.1,3.5,0,5.2,0.3c4.9,0.8,8.1,3.7,10.9,6.4c1.6-1.5,5.1-1.2,7.5-0.4s5.1,1.9,7.8,1.5c2.7-0.4,4.2-2,6.6-2.5
	c3.5-0.7,8.8,1.5,8.1,3.8l29.9,3.3c4,0.6,8.3,0.7,12.3,0.4c1.9-0.3,3.8-0.7,5.6-1.1c6.4-1.3,13-1.6,19.5-0.9c1.4,0.3,3,0.3,4.5,0
	c1.2-0.4,2.1-0.9,2.9-1.7c2.6-2.2,4.8-4.5,6.9-7c3.1,3.6,7.8,7.8,14.3,7.4c2.5-0.1,4.7-1,7-1.1c4.4-0.3,9.2,1.6,13.3,0.3
	c1.8-0.6,3.1-1.8,4.9-2.4s4.7-0.4,5.1,1c8.2,1.4,16.6,1.2,24.8-0.5c3.4-0.7,7.1-1.7,10.5-0.8c1,0.4,2.1,0.7,3.1,0.9
	c2.3,0.3,4.3-1,6.2-2c6.4-3.1,15.7-2.2,22.5-5c1.3-0.7,2.7-1.2,4.3-1.7c1.6-0.4,3.6-0.1,4.4,0.8l22.2-6c1.3-0.4,2.6-0.7,4-0.8
	c5.1-0.3,10.9,2.9,14.4,0.6c1.3-0.9,1.6-2.1,2.2-3.2c3.1-4.9,14-5,20.7-8.2l2.9,2.8l10.4-5.2c4.7-0.3,9.4-0.9,13.9-2
	c3-0.7,6.5-2.1,6-4.2c1.9,1.4,5.5,1.1,8.1,0.2s4.7-2.3,7.5-2.8c3.5-0.6,7.8,0.2,10.8-1.2c1.6-0.7,2.5-1.9,4.3-2.4
	c1.2-0.2,2.2-0.3,3.4-0.2c6.6,0.2,13.3,0.2,20,0.1c2.7,0,6.2-0.5,6.8-2.2c5.2,2.2,8.1,6.7,14.2,7.3c2,0.1,4,0,6-0.3
	c9-1,18.3-0.4,27.2,0.8c6.1-0.4,13.1-1,16.4-4.4c0.4-0.6,1-1.1,1.7-1.5c1.6-0.9,4-0.5,6-0.2c7.1,1.2,14.4,1.7,21.8,1.6
	c4.5,0.1,9.1-0.5,13.4-1.6l3.2,2.8c10.5,1.2,22.9,2.2,30.5-2.5c0.5-0.4,1.2-0.7,1.9-0.8c0.8,0,1.7,0.6,1,1l10.9-5.3
	c1.7,0.8,4,0.4,5.8-0.3c1.8-0.7,3.5-1.6,5.6-1.8s4.5,0.9,3.9,2.2c0.4-2,5.2-2.2,7.9-1.2c2.7,1,5.3,2.7,8.6,2.6
	c3.5,3.4,11,4,17.4,3.4c6.4-0.6,12.7-2,19.1-1.5c2.9,0.3,5.6,0.9,8.3,1.3c3.9,0.5,7.8,0.5,11.6-0.1l3.1,2.6c1.6-1.1,4.7-1,6.6-0.2
	c1.8,0.9,3.5,2.1,4.8,3.4c4.2,3.6,9.4,6.5,14.9,8.6c0.8-2,5.6-1.9,8.4-0.8c2.9,1.1,6.1,3.3,9,2.2l1.8,1.2c11,3.5,23,5,35,4.3
	c2.5-0.3,4.9-0.2,7.4,0.2c1.9,0.5,3.5,1.4,5.6,1.8c2.9,0.6,6,0,9-0.2c3-0.2,6.6,0.5,7.4,2.3c4.7-2.3,10.4-4.7,16.1-3.7
	c3.9,0.6,6.8,2.7,10.3,4c3.7,1.4,7.9,1.9,12,1.5c2.3-0.4,4.8-0.6,7.1-0.7c2.5,0.1,5.6,1.2,5.8,2.7c6.4,1.8,14.8,3.3,19.5,0
	c0.4-0.3,0.6-0.5,1.2-0.7c1.7-0.5,3.2,0.8,4.8,1.6c3.6,1.8,8.7-0.1,12.6-1.6c3.9-1.5,10.1-2.4,12.1,0.2c0-1.9,4-2.6,6.9-2.1
	c2.9,0.5,5.3,1.9,8.3,1.9c1.6,0,3-0.2,4.4-0.5c5.8-1.1,11.8-1.5,17.9-1.2c1.2,0,2.3,0.1,3.5,0.3c1.7,0.2,3.4,0.5,5.1,0.6
	c6.8,0.7,13.8-0.3,20.4-1.3l19.4-2.8c1.4-0.2,2.7-0.4,4.2-0.7c1.2-0.3,2.2-0.6,3.4-0.8c5.3-0.9,10.4,1.4,15.6,2.6
	c6.9,1.5,14.3,1.1,20.9-1.2c1.4-0.6,3-1,4.5-1.2c1.3,0.1,2.6,0.3,3.6,0.7c6.1,1.9,19.1,2.3,19.1,14.2v88.7H110V-18.9L110-18.9z" />
                                                <linearGradient gradientUnits="userSpaceOnUse" x1="862.7376"
                                                    y1="112.6305" x2="877.3633" y2="-54.4777"
                                                    gradientTransform="matrix(1 0 0 -1 -110 60.77)">
                                                    <stop offset="0" style="stop-color:#E3E3E3" />
                                                    <stop offset="1" style="stop-color:#000000" />
                                                </linearGradient>
                                                <path fill-opacity="0.6" d="M1409.6-2.5c-19.9,0.3-40.5,0.6-60.3-0.4c-3.2,0.9-7.3,0.5-11,0.7c-11.7,0.5-22.1-1-33-2.7
	c-1.8-0.3-3.8-0.5-5.6-0.6c-3.1,0.1-6,1-9.1,1c-1.7-0.1-3.5-0.3-5.1-0.7c-6.8-1-14.9,0-19.2,2.5c-4.8-1.2-9.9-2-15.1-2.6
	c-1.3-0.2-2.6-0.2-3.9,0c-1.2,0.3-2.2,0.7-3,1.4c-4.5,2.9-14.3,4.4-22.3,4.5c-8.1,0.1-15.9-1-23.3-2.4c-5.2-1-10.3-2.2-16-2.8
	s-12-0.3-16.4,1.3c-2.7-2.7-12.7-1.9-16.9,0.5c-5.5-3.3-16.1-3.6-25.5-3.9c-14.9-0.4-29.7-1.4-44.3-2.9c-5.5-0.5-10.9-1.2-16.5-1.6
	c-10.7-0.7-19.2,0.5-30,0.1c-14-0.5-28.1-2-42.1-2c-7.3,0.1-16.2-0.5-23.4,0.4c-10.5,1.4-19.8,4.4-30.5,5.2
	c-10.4,0.8-21.2-0.5-31.6,0.1c-13.1,0.8-25.2,4.6-38.3,3.7c-4.7-0.3-9.1-1.2-13.9-1.3c-4.8-0.1-10.1,1.2-10.4,3.3
	c-23.5-4.1-50.7-0.3-75.2-3.1c-6.2-0.7-14.7-1.4-17.4,1.1c-3.8-1.1-7.1-0.1-11.7,0.1c-8.4,0.5-17.2,1.2-24.7,2.9
	c-5.7,1.3-13.4,3.2-18.2,1.3c-13.3,1.6-29.6,3.2-43,4.8c-1.6,0.1-3,0.4-4.4,0.7c-1.6,0.4-3,1-4.5,1.3c-2.9,0.7-6.4,0.7-9.4,1.4
	c-3,0.6-5.2,1.8-7.7,2.7c-8.8,3.4-21.3,4.2-33.1,4.6c-11.8,0.4-20.9,0.5-31.3,2.9c-4.8,1.1-10.1,2.7-15.1,1.8
	c-1.4-0.3-2.9-0.7-4.2-1.2c-5.3-1.6-12.3-1.7-18.8-1.8c-15.5-0.2-31.2-1-45-3.9c-6.2-1.4-13.4-3.2-19-1.5
	c-12.5,3.7-26.9,1.2-40.8,3.7c-1.9,0.5-4,0.8-6.2,1c-2.3,0.1-4.7,0-6.9-0.3c-9.7-1-19.4-2.4-28.8-4c-3.2-0.7-6.8-1.1-10.3-1.2
	c-5.8,0-12.1,1.8-17.3,0.6c-1.7-0.5-3.2-1.1-4.7-1.8c-6.5-3-19.9-4.8-28.8-3.4c-2.3,0.5-4.7,0.8-7.1,1.2c-3.4,0.3-6.9-0.1-10.4-0.3
	c-10.4-1-21-1-31.6-0.1c-3.8,0.3-7.5,0.7-11.2,0.3c-6-0.5-10.7-2.7-16.6-2.9c-8.2-0.3-16.4,3.1-23.5,1.5c-1.9-0.5-3.8-1.3-5.8-1.2
	c-1.7,0.1-2.9,0.7-4.3,1.2C199.5,8.4,188,6.9,180.3,7c-4.2,0.1-9.9,0.7-11.6-0.9c-0.6-0.6-0.4-1.4-0.9-2c-1-1.1-4.2-1.4-6.9-1.4
	c-2.7,0.1-5.3,0.5-8.1,0.3c-4.3-0.3-8.1-2.1-12.2-1.6c-1.3,0.2-2.6,0.5-3.8,1c-8.3,2.8-18.7,5.7-27,8.5v47.9h1299.4L1409.6-2.5
	L1409.6-2.5z" />
                                                <linearGradient gradientUnits="userSpaceOnUse" x1="864.9923"
                                                    y1="111.3059" x2="875.8112" y2="-43.3409"
                                                    gradientTransform="matrix(1 0 0 -1 -110 60.77)">
                                                    <stop offset="0.23" style="stop-color:#E6E7E8" />
                                                    <stop offset="0.66" style="stop-color:#C7C8CA" />
                                                </linearGradient>
                                                <path fill-opacity="0.8"
                                                    d="M1409.9-11.1c-20.1,0.3-40.3-0.1-60.3-1.1c-3.5,0.8-7.3,1.3-11,1.4c-11.7,0.5-23.4-0.2-34.6-2.1
	c-1.8-0.3-3.8-0.6-5.6-0.6c-3.1,0.1-6,1-9.1,1c-1.7-0.1-3.5-0.3-5.1-0.7c-6.8-1-14.9,0-19.2,2.5c-4.8-1.2-9.9-2.1-15.1-2.6
	c-1.3-0.2-2.6-0.2-3.9,0c-1.2,0.3-2.2,0.8-3,1.4c-4.5,2.9-12.7,4.4-20.8,4.5s-15.9-1-23.3-2.4c-5.2-1-10.3-2.3-16-2.8
	c-5.7-0.6-12-0.3-16.4,1.3c-2.7-2.8-12.7-3.3-16.9-0.9c-5.5-3.3-16.1-3.6-25.5-3.9c-14.9-0.4-29.7-1.4-44.3-2.9
	c-5.5-0.6-10.9-1.2-16.5-1.6c-10.7-0.7-19.2,0.5-30,0.1c-14-0.5-28.1-0.7-42.1-0.6c-7.3,0.1-14.7,0.2-21.7,1.1
	c-10.5,1.4-19.8,4.4-30.5,5.2c-10.4,0.8-21.2-0.6-31.6,0.1c-13.1,0.8-25.2,4.7-38.3,3.8c-4.7-0.3-9.1-1.2-13.9-1.3
	c-4.8-0.1-10.1,1.2-10.4,3.3c-23.5-4.1-50.7-0.3-75.2-3.1c-6.2-0.7-14.7-1.4-17.4,1.1c-3.8-1.1-8.7-0.8-13.3-0.6
	c-8.4,0.6-17.2,1.2-24.7,2.9c-5.7,1.3-13.4,3.2-18.2,1.3l-39.8,4.8c-1.6,0.1-3,0.4-4.4,0.7c-1.6,0.4-3,1-4.5,1.3
	c-2.9,0.7-6.4,0.8-9.4,1.4c-3,0.6-5.2,1.8-7.7,2.8c-8.8,3.4-21.3,4.3-33.1,4.7c-11.8,0.4-24,0.5-34.4,3c-4.8,1.1-10.1,2.8-15.1,1.8
	c-1.4-0.3-2.9-0.8-4.2-1.2c-5.3-1.7-12.3-1.7-18.8-1.8c-15.5-0.2-31.2-1-45-4c-6.2-1.4-13.4-3.2-19-1.5
	c-12.5,3.7-30.1,1.2-43.9,3.8c-1.9,0.5-4.2,0.8-6.2,1c-2.3,0.1-4.7,0-6.9-0.3c-9.7-1-19.5-2.4-29-4.1c-3.2-0.7-6.8-1.1-10.3-1.2
	c-5.8,0-12.1,1.8-17.3,0.6c-1.7-0.5-3.2-1.1-4.7-1.8c-6.5-3-16.8-4.8-25.6-3.4c-2.3,0.5-4.7,0.8-7.1,1.2c-3.4,0.3-6.9-0.1-10.4-0.3
	c-11.4-1-23.1-1-34.6-0.1c-3.8,0.3-7.5,0.7-11.2,0.3c-6-0.5-10.7-2.8-16.6-3c-8.2-0.3-16.4,3.2-23.5,1.5c-1.9-0.5-3.8-1.3-5.8-1.2
	c-1.7,0.1-2.9,0.8-4.3,1.2c-6.4,1.9-14.7-1-22.5-0.9c-4.2,0.1-9.9,0.8-11.6-0.9c-0.6-0.6-0.4-1.4-0.9-2c-1-1.1-4.2-1.4-6.9-1.4
	c-2.7,0.1-5.3,0.5-8.1,0.3c-4.3-0.3-8.1-2.1-12.2-1.7c-1.3,0.2-2.6,0.6-3.8,1c-8.3,2.8-18.7,5.7-27,8.6v57.1h1299.4V-11.1z" />
                                            </g>
                                            <path d="M0.4,57c8.3-4.2,18.7-8.3,27-12.5c1.2-0.6,2.3-1.1,3.8-1.4c4.3-0.7,7.9,4.7,12.3,5.1c2.6,0.3,5.3-0.3,8.1-0.4
c2.7-0.1,5.8,0.4,6.9,2c0.6,0.9,0.3-0.8,0.9,0.2c1.8,2.4,7.4,1.4,11.6,1.3c7.8-0.2,16.1,6.8,22.5,4c1.4-0.6,2.6-4.3,4.3-4.4
c2.2-0.2,3.9,3.8,5.8,4.4c7.1,2.5,15.5-5.3,23.5-4.9c6,0.3,10.8,6.3,16.6,7c3.6,0.5,7.5-0.1,11.2-0.5c11.4-1.3,23.3-4,34.7-2.5
c3.4,0.4,6.9,1,10.4,0.5c2.3-0.5,4.8-1,7.1-1.7c9-2,19.1,3.4,25.6,7.8c1.3,1.1,2.9,1.9,4.7,2.6c5.2,1.7,11.4-3.6,17.3-3.6
c3.5,0.1,6.9,0.7,10.3,1.7c9.5,2.4,19.1,4.4,29,5.9c2.2,0.4,4.5,0.6,6.9,0.5c2.2-0.3,4.3-0.9,6.2-1.5c13.8-3.8,31.4,2.6,43.9-2.8
c5.9-2.4,12.9-2.6,19-0.5c13.8,4.4,29.5,5.5,45,5.8c6.5,0.1,13.5,0.2,18.8,2.6c1.3,0.7,2.7,1.3,4.2,1.8c4.9,1.4,10.4,1.8,15.1,0.2
c10.4-3.5,16.2-4.3,27.9-4.9c11.7-0.6,24.6-1.2,33.4-6.2c2.5-1.4,7.5-3.1,10.4-5.3c2.1-1.6,6.2,0.3,9.1-0.6c1.6-0.6,3.9-0.8,5.5-1.3
c1.3-0.5,5.6,0.1,7-0.2c13.3-2.4,19.9-4.1,33.1-6.4c4.7,2.8,19.2-2.2,24.9-4c7.7-2.5,16.2-3.3,24.7-4.2c4.5-0.4,9.5-0.8,13.3,0.8
c2.7-3.7,11-1.9,17.4-1.7c9.7,0.4,13.4,4.2,17.7,3.2c17.8-4.4,20.5,3.5,30.4,0.3c8.3-2.8,21.6-1.3,31.6,1.3c0.1-3,5.6-4.8,10.4-4.8
s4.8,1.2,9.5,1.6c13,1.2,25.2-4.4,38.3-5.5c10.4-0.9,21.2,1,31.6-0.2c10.8-1.2,20-5.7,30.5-7.6c7-1.3,14.4-1.5,21.7-1.6
c14-0.1,28.1,0.2,42.1,0.9c10.8,0.5,19.4-1.2,30-0.1c5.6,0.5,11,1.5,16.5,2.3c14.6,2.2,29.4,3.6,44.3,4.3c9.4,0.4,20-1.8,25.5,2.9
c4.2-3.5,14.2-2.7,16.9,1.3c4.3-2.4,10.8-2.7,16.4-1.9c5.6,0.8,10.7,2.6,16,4.2c7.3,2.1,15.2,6.5,23.3,6.3s16.2-2.4,20.8-6.6
c0.8-0.8,1.6-4.4,3-4.7c1.3-0.2,2.6-0.2,3.9,0c5.3,0.8,10.4,4.9,15.1,6.5c4.3-3.6,12.5-5.1,19.2-3.6c1.7,0.5,3.4,0.8,5.1,1
c3.1,0.1,6-1.3,9.1-1.4c1.9,0,6.5-0.4,8.3,0c10.9,2.7,20.1,1.8,31.8,1.1c3.9-0.2,10.8,0.8,14-0.5c19.8,1.5,37.4,0.5,57.4,0.1
c-20.1,0.5-40.3-0.1-60.3-1.6c-3.5,1.2-7.3,1.9-11,2c-11.7,0.7-23.4-0.3-34.6-3c-1.8-0.5-3.8-0.8-5.6-0.9c-3.1,0.1-6,1.5-9.1,1.4
c-1.7-0.2-3.5-0.5-5.1-1c-6.8-1.5-14.9,0-19.2,3.6c-4.8-1.7-9.9-3-15.1-3.8c-1.3-0.3-2.6-0.3-3.9,0c-1.2,0.4-2.2,1.1-3,2
c-4.5,4.2-12.7,6.4-20.8,6.6c-8.1,0.2-15.9-1.4-23.3-3.5c-5.2-1.5-10.3-3.3-16-4.2c-5.7-0.9-12-0.5-16.4,1.9
c-2.7-4-12.7-4.8-16.9-1.3c-5.5-4.8-16.1-5.3-25.5-5.7c-14.9-0.6-29.7-2-44.3-4.2c-5.5-0.8-10.9-1.8-16.5-2.3
c-10.7-1-19.2,0.7-30,0.1c-14-0.7-28.1-1-42.1-0.9c-7.3,0.1-14.7,0.3-21.7,1.6c-10.5,2-19.8,6.4-30.5,7.6
c-10.4,1.2-21.2-0.8-31.6,0.2c-13.1,1.2-25.2,6.8-38.3,5.5c-4.7-0.4-9.1-1.8-13.9-1.8s-10.1,1.8-10.4,4.8c-23.5-6-50.7-0.5-75.2-4.5
c-6.2-1-14.7-2-17.4,1.7c-3.8-1.6-8.7-1.2-13.3-0.8c-8.4,0.8-17.2,1.7-24.7,4.2c-5.7,1.9-13.4,4.7-18.2,1.9l-39.8,7
c-1.6,0.2-3,0.6-4.4,1c-1.6,0.6-3,1.4-4.5,1.9c-2.9,1-6.4,1.1-9.4,2s-5.2,2.6-7.7,4c-8.8,5-21.3,6.2-33.1,6.8s-24,0.7-34.4,4.3
c-4.8,1.6-10.1,4-15.1,2.6c-1.4-0.5-2.9-1.1-4.2-1.8c-5.3-2.4-12.3-2.5-18.8-2.6c-15.5-0.3-31.2-1.4-45-5.8c-6.2-2-13.4-4.7-19-2.2
c-12.5,5.4-30.1,1.7-43.9,5.5c-1.9,0.7-4.2,1.2-6.2,1.5c-2.3,0.1-4.7,0-6.9-0.5c-9.7-1.5-19.5-3.5-29-5.9c-3.2-1-6.8-1.6-10.3-1.7
c-5.8,0-12.1,2.6-17.3,0.9c-1.7-0.7-3.2-1.6-4.7-2.6c-6.5-4.3-16.8-7-25.6-5c-2.3,0.7-4.7,1.2-7.1,1.7c-3.4,0.5-6.9-0.1-10.4-0.5
c-11.4-1.4-23.1-1.4-34.6-0.1c-3.8,0.4-7.5,1-11.2,0.5c-6-0.7-10.7-4-16.6-4.3c-8.2-0.4-16.4,4.7-23.5,2.2c-1.9-0.7-3.6-1.9-5.8-1.7
c-1.7,0.1-2.9,1.1-4.3,1.7c-6.4,2.8-14.7-1.5-22.5-1.3c-4.2,0.1-9.9,1.1-11.6-1.3c-0.6-0.9-0.4-2-0.9-2.9c-1-1.6-4.2-2.1-6.9-2
s-5.3,0.7-8.1,0.4c-4.3-0.5-8.1-3.1-12.3-2.4c-1.3,0.3-2.6,0.8-3.8,1.4C19.1,48.6,8.7,52.8,0.4,57L0.4,57z" />
                                        </svg>

                                    </li>



                                    <li class=" vmutc_section_divider_select" data-name="vague1">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M325,28c325,0,325,84,650,84c162.5,0,243.8-21,325-42v70H0V70C81.3,49,162.5,28,325,28z" />
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="vague2">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path fill-opacity=".3" d="M1300,89.2c-36.8,2.3-78.8,3.5-128.4,3.3c-325-1.1-324.7-60.9-649.7-62C246.5,29.6,204.3,72.3,0.2,84.8L0,139.1
	l1299.8,4.4L1300,89.2z" />
                                            <path fill-opacity=".5" d="M1300,118.8c-44.1,5.9-96,9.5-160.9,9.3c-325-1.1-324.7-95.5-649.6-96.6c-260.1-0.9-312.3,59.4-489.4,83
	L0,140.1l1299.9,4.4L1300,118.8z" />
                                            <path d="M1300,144l0-3.6c-28.6,1.8-60.3,2.7-95.9,2.6c-325-1.1-324.7-89.9-649.7-91C265,51,233.1,121.4,0,136l0,3.6
	L1300,144z" />
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="vague3">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M1300 86c-19.9-17.21-40.08-39.69-79.89-39.69-57.49 0-56.93 46.59-115 46.59-53.61 0-59.76-39.62-115.6-39.62C923.7 53.27 924.26 87 853.89 87c-89.35 0-78.74-87-188.2-87C554 0 543.95 121.8 423.32 121.8c-100.52 0-117.84-54.88-191.56-54.88-77.06 0-100 48.57-151.75 48.57-40 0-60-12.21-80-29.51v54H1300z">
                                            </path>
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="vague4">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M853.893,86.998c-38.859,0-58.811-16.455-77.956-35.051c18.295-10.536,40.891-18.276,73.378-18.276 c38.685,0,64.132,12.564,85.489,28.347C916.192,72.012,900.8,86.998,853.893,86.998z M526.265,80.945 c-6.517-0.562-13.599-0.879-21.41-0.879c-70.799,0-91.337,27.229-134.433,35.662c14.901,3.72,32.118,6.07,52.898,6.07 C470.171,121.797,500.34,103.421,526.265,80.945z"
                                                fill-opacity=".3"></path>
                                            <path
                                                d="M663.458,109.671c-67.137,0-80.345-23.824-137.193-28.726C567.086,45.555,597.381,0,665.691,0 c61.857,0,85.369,27.782,110.246,51.947C736.888,74.434,717.459,109.671,663.458,109.671z M217.68,94.163 c55.971,0,62.526,24.026,126.337,24.026c9.858,0,18.508-0.916,26.404-2.461c-57.186-14.278-80.177-48.808-138.659-48.808 c-77.063,0-99.96,48.569-151.751,48.569c-40.006,0-60.008-12.206-80.011-29.506v16.806c20.003,10.891,40.005,21.782,80.011,21.782 C160.014,124.57,158.608,94.163,217.68,94.163z M1200.112,46.292c-57.493,0-56.935,46.595-115.015,46.595 c-53.612,0-59.755-39.618-115.602-39.618c-15.267,0-25.381,3.751-34.69,8.749c36.096,26.675,60.503,62.552,117.342,62.552 c69.249,0,75.951-43.559,147.964-43.559c39.804,0,59.986,10.943,79.888,21.777V85.982 C1260.097,68.771,1239.916,46.292,1200.112,46.292z"
                                                fill-opacity=".5"></path>
                                            <path
                                                d="M1052.147,124.57c-56.84,0-81.247-35.876-117.342-62.552c-18.613,9.994-34.005,24.98-80.912,24.98 c-38.859,0-58.811-16.455-77.956-35.051c-39.05,22.487-58.479,57.724-112.48,57.724c-67.137,0-80.345-23.824-137.193-28.726 c-25.925,22.475-56.093,40.852-102.946,40.852c-20.779,0-37.996-2.349-52.898-6.07c-7.895,1.545-16.546,2.461-26.404,2.461 c-63.811,0-70.366-24.026-126.337-24.026c-59.072,0-57.665,30.407-137.669,30.407c-40.006,0-60.008-10.891-80.011-21.782V140h1300 v-37.212c-19.903-10.835-40.084-21.777-79.888-21.777C1128.098,81.011,1121.397,124.57,1052.147,124.57z">
                                            </path>
                                        </svg></li>


                                    <li class=" vmutc_section_divider_select" data-name="nuage1">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M1300,63.1a81.42,81.42,0,0,0-11.41.81,67.71,67.71,0,0,0-102.21-19,86,86,0,0,0-150.47-1.2c-.16.28-.29.57-.45.85a26.07,26.07,0,0,0-27.65,17.54,43,43,0,0,0-37.93-.57A67.66,67.66,0,0,0,830.15,81a67.85,67.85,0,0,0-38.51-16.19,46.9,46.9,0,0,0-89.25.45,46.66,46.66,0,0,0-13.56-3.77A86,86,0,0,0,538.67,33.07a23.42,23.42,0,0,0-25.4,4.8A61.36,61.36,0,0,0,410.7,58.74a61.44,61.44,0,0,0-72.79,23.32A38.37,38.37,0,0,0,329,75.15c-.41-.23-.83-.45-1.25-.66a46.88,46.88,0,0,0-78.77-33.31A67.65,67.65,0,0,0,120.71,67.29a46.76,46.76,0,0,0-21.82-1.62,46.91,46.91,0,0,0-78.8.07A79.35,79.35,0,0,0,0,63.17C0,63.17,0,140,0,140H1300Z">
                                            </path>
                                        </svg></li>
                                    <li class=" vmutc_section_divider_select" data-name="nuage2">
                                        <svg fill="#5aa8ec" preserveAspectRatio="none"
                                            style="height: 30px;" class="svg_divider_rotateXY"
                                            viewBox="0 0 1300 140">
                                            <path
                                                d="M1269.61,52.83a48.82,48.82,0,0,0-16,14.48A48.6,48.6,0,0,0,1229.45,69a70.88,70.88,0,0,0-134.21-25.66,49.11,49.11,0,0,0-82.51,34.9c-.44.23-.88.45-1.31.69a40.18,40.18,0,0,0-9.36,7.24,64.35,64.35,0,0,0-76.25-24.43A64.34,64.34,0,0,0,818.36,39.85a24.53,24.53,0,0,0-26.61-5A90,90,0,0,0,634.48,64.55a48.89,48.89,0,0,0-14.21,3.95A49.12,49.12,0,0,0,526.79,68a71.07,71.07,0,0,0-40.34,17A70.91,70.91,0,0,0,361,64.68a45.07,45.07,0,0,0-39.73.6,27.31,27.31,0,0,0-29-18.37c-.16-.29-.31-.59-.47-.89a90.06,90.06,0,0,0-155.12-3A80.23,80.23,0,0,0,12.64,99.75a80.1,80.1,0,0,0-12.64,2V140H1300V48.48A49.22,49.22,0,0,0,1269.61,52.83Z"
                                                fill-opacity=".5"></path>
                                            <path
                                                d="M1300,66.1a81.63,81.63,0,0,0-11.42.81,67.71,67.71,0,0,0-102.21-19,86,86,0,0,0-150.47-1.2c-.16.28-.29.57-.45.85a26.07,26.07,0,0,0-27.65,17.54,43,43,0,0,0-37.93-.57A67.66,67.66,0,0,0,830.13,84a67.85,67.85,0,0,0-38.51-16.19,46.9,46.9,0,0,0-89.25.45,46.66,46.66,0,0,0-13.56-3.77A86,86,0,0,0,538.66,36.07a23.42,23.42,0,0,0-25.4,4.8A61.36,61.36,0,0,0,410.68,61.74a61.44,61.44,0,0,0-72.79,23.32A38.37,38.37,0,0,0,329,78.15c-.41-.23-.83-.45-1.25-.66a46.88,46.88,0,0,0-78.77-33.31A67.65,67.65,0,0,0,120.69,70.29a46.76,46.76,0,0,0-21.82-1.62,46.91,46.91,0,0,0-78.8.07A79.46,79.46,0,0,0,0,66.17C-.07,66.17,0,140,0,140H1300Z">
                                            </path>
                                        </svg>
                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="nuage3">
                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path d="M1300,96.7c-8.3,0-9.3-5.6-9.3-12.4c0-16.4,5.5-36.4-1.5-51.5c-1.7-3.6-4.3-7.3-8.3-8.8c-6.1-2.3-13.4,1.4-16.7,6.7
	c-3.3,5.3-3.6,11.8-3.4,18c0.2,9.1,1.1,18.2,2.6,27.1c0.7,2.8,0.8,5.6,0.3,8.4c-0.8,3.6-3.8,6.4-7.7,7.3c-3.9,0.7-7.8-1.3-9.3-4.8
	c-0.6-2.3-0.6-4.7,0-6.9c3-16.1,6.1-32.3,5.4-48.6c-0.3-5.8-1.1-11.8-4.4-16.8c-3.3-4.9-9.7-8.5-15.8-7.2c-2,0.4-3.7,1.3-5.1,2.8
	c-0.9,1.1-1.6,2.4-2,3.7c-2.1,5.7-2.8,11.8-2,17.7c0.6,5.1,2.3,10.1,2.7,15.2c0.4,5.1,0.2,15-6.1,15c-0.6,0-1.2-0.1-1.7-0.4
	c-3.5-2-4.1-6.4-4.4-10.2l-1.1-14.3c-0.3-3.4-1.1-7.5-4.6-8.4c-3.1-0.8-6.1,1.7-7.6,4.4c-1.7,3.5-2.5,7.4-2.4,11.2
	c-0.1,4.7,0.5,9.4,1.7,13.9c1,3.2,1.7,6.4,2.1,9.7c0.2,3.3,0.1,8-3.4,8.7c-7.2,1.4-14.3-4.1-16.8-10.6s-1.6-13.6-1-20.4
	s0.8-14.1-2.6-20.1c-4.1-6.6-11.7-10.5-19.8-10.3c-8.1,0.4-15.5,4.5-19.7,10.9c-2.6,3.8-5.1,9-9.9,8.7c-4.2-0.2-6.6-4.7-7.5-8.5
	c-0.9-3.9-1.7-8.4-5.3-10.4c-4.6-2.5-10.8,1-12.7,5.7s-0.8,9.9-0.1,14.9c0.7,5,0.8,10.5-2.4,14.5c-3.3,4-11.2,4.6-13.4,0
	c-0.8-2.1-0.8-4.4-0.1-6.5c1.8-7.7,5.2-15.4,3.7-23.2s-11.1-14.8-18.2-10.7c-7.8,4.5-6.6,22.2-15.4,19.9c-7.4-2-11-12-18.6-11.6
	c-3.9,0.2-7.1,3.4-8.2,6.8c-1.2,3.5-0.8,7.3-0.4,10.9l3.1,29.7c0.6,5.9-0.3,13.8-6.6,14.8c-3.7,0.6-7.4-2.1-8.8-5.4
	c-1.4-3.3-1.1-7-0.6-10.5c1.1-8.1,3-16.1,5.7-23.9c3-8.8,7.1-18.1,4.3-26.9c-3.3-10.4-15.1-16.3-26.2-13.2c-4,1.1-7.5,3.3-10.2,6.3
	c-5.1,5.8-6.3,13.7-6.5,21.2c-0.4,21.5,6.4,43,2.3,64.2c-0.4,1.9-1,4.1-2.6,5.3c-3.6,2.7-8.9-0.7-11-4.6
	c-10.2-18.4,10.4-40.8,4.1-60.6c-2.6-8.4-10.8-15.3-20.1-15.8c-9.3-0.4-18.8,6.6-19,15.4c-0.1,4.9,2.3,10.3-0.3,14.5
	c-3.1,5.1-13.6,5.2-14.9-0.5c-1.3-6.4,2.5-12.7,4.1-19.1c1.6-6.4-1.1-15.1-8.1-15.5c-7.6-0.4-13,9.6-20.4,8.2
	c-3.1-0.6-5.6-3.1-8.7-3.1c-8.8-0.2-2.8,17.7-16.1,17.7c-11.7,0-10.4-17.1-19.2-22c-7.7-4.2-18.2-0.4-23.4,6.4
	c-5.2,6.8-6.1,15.6-6,23.9c0.1,8.3,1,16.8-1.1,24.9c-0.7,2.9-2.1,6.1-5,7.4c-5.3,2.4-14.4,2.8-14-7c0.7-16.7,13.3-48.2-11.3-48.2
	c-8.5-0.2-16.7,3.3-22.1,9.4c-4.9,5.3-7.5,13.5-8.5,20.4c-1.8,13.3,4.1,26,2.3,39.3c-0.5,3.6-3.9,10.3-7.8,10.6
	c-4.7,0.4-9.5-3.6-9.5-11.9c0-13.7,0-27.5,0-41.3c0-8-0.1-16.4-3.9-23.6c-3.8-7.2-12.5-12.1-20.9-10.5
	c-19.3,3.4-17.2,28.5-15.9,34.6c2.4,10.9,7.3,17.8,8.8,27.8c1.1,7.1,2.2,14.5-0.4,21.4c-2.6,6.8-10.2,12.4-17.7,10.7
	c-6.9-1.6-10.8-8.7-12-15.3c-1.9-10.2,0.1-20.7-0.5-31.1c-0.6-10.4-5-21.7-15.1-26.1c-11-4.7-25.8,2.6-27.8,13.7
	c-1.2,6.6,3.3,18.3-5.8,18.3c-5.3-0.3-7.2-11.1-7.9-17.5c-0.5-4.1-0.2-8.3-1.6-12.2c-1.4-3.9-5.2-7.5-9.6-7
	c-2.8,0.4-5.4,1.6-7.4,3.6c-6.9,7.9-6.3,15.7-3.2,29.8c2.2,10,12.1,35.8,0.4,36.2c-13.2,0-17.7-31-18.1-42.8
	c-0.2-7.4,0.5-14.8-0.7-22s-4.5-14.7-11.1-18.7c-6.6-4.1-16.7-3.5-21.2,2.5s-1.9,14.3-0.4,21.5c1.5,7.3,3.2,12.4,3.2,21.3
	c0,5.2-3.7,16.4-14.1,16.4c-20.3,0-5.2-31-5.8-39.7c-0.6-7.2-3.9-14-9.3-19.2c-5.3-5.1-20.6-6.1-26.4-1.4c-4.2,3.4-4.6,9.2-6.5,14.1
	s-8.1,9.6-12.6,6.4c-1.5-1.2-2.6-2.8-3.2-4.6l-4.2-9.4c-1.8-4-4.3-8.6-8.9-9.2c-5.9-0.8-10.1,5.9-9.8,11.5
	c0.3,5.6,3.2,10.8,3.3,16.4c0.1,5.6-4.8,12-10.6,10.5c-5.8-1.5-6.6-8.6-6.2-14.2l0.9-15.1c0.3-4.9,0.5-10.1-1.8-14.5
	c-2.3-4.4-8.4-7.5-13.1-5.2c-4.7,2.3-5.5,7.8-6.6,12.5s-3.7,12.4-8.8,11.5c-4.5-0.7-7.5-8.2-11.7-9.9c-4.9-2.1-10.7,1.6-12.7,6.2
	c-1.9,4.7-1.1,9.8-0.5,14.8c1.4,10.6,1.7,21.3,1,32c-0.2,3.4-0.9,7.4-4,9.2c-2.9,1.7-7,0.7-9.5-1.5c-2.5-2.3-2.8-5.5-3.1-8.8
	c-0.7-10.6,4.5-20.7,8.1-30.8s5.8-18.8,0.6-29.7c-0.9-1.9-3.7-7.1-13.7-7.1c-16.7,0-26.7,15.8-29.3,31.8c-1.9,12.1,2.7,29.9,5,42
	c4.1,21.2-5,23.6-10,24.1c-4.8,0.6-9.5-1.5-12.1-5.2c-2.5-3.8-3.1-8.5-3.2-12.9c-0.2-8.6,1-17.2,3.6-25.5c2.1-6.8,5.2-13.5,5.1-20.6
	c-0.2-8.5-5.9-17-14.6-19.5s-19.5,2.8-20.9,11.1c-0.7,4.1,0.7,8.2,0.6,12.3c-0.1,4.1-2.5,8.8-6.9,9.2c-6,0.5-8.8-7.1-7.4-12.6
	c1.5-5.4,5.2-10.6,4.2-16.2c-1.2-6.5-8.7-10.7-15.8-10.7c-29.2,0-27,26.8-37,26.8c-6.1,0-7.9-5.5-10.5-11.8
	c-2.1-5.3-5.5-11.5-13.6-11.5c-25,0-31,25-28.6,38c0.9,4.9,3,9.7,3.3,14.6c0.3,4.9-1.8,10.6-6.7,12.6s-13.3-0.9-12-9.7
	c2.4-16.3,6-26.7,5.5-40.9c-0.3-8.7-4.1-18.8-13-21.4c-10.2-3-19.7,7.7-20.3,17.6c-0.6,9.9,4.2,19.4,5.8,29.3
	c0.6,4.1,0.7,8.5-1.2,12.2c-1.9,3.8-6.1,6.8-10.5,6.4c-4.6-0.4-8.2-4.3-9.5-8.5s-1-8.6-1.1-13c-0.1-8.6-1.7-17.1-4.8-25.2
	c-0.6-1.9-1.6-3.6-3.1-5c-2.8-2.3-7.2-2.1-10.4-0.4s-3.6,6.1-7.8,7.3c-4.3,0.3-6.2-4.8-9.8-7c-5.2-3.3-13,1-14.6,6.7s1,11.7,4,17
	s6.6,10.4,7.1,16.4c0.5,5.9-3.5,12.7-9.8,13.1c-8.2,0.8-13-21.7-10.8-34.3S65.9,9,56.1,1.6C49-2,39.3,1.6,35,8
	c-4.3,6.4-4.2,14.7-2,22.1c2.1,7.3,6.1,14.1,9.2,21.1c6.2,14.1,9,29.6,6.8,44.7c-0.8,5.6-5.1,12.5-10.7,10.6
	c-3.7-1.2-4.8-5.6-5.3-9.3L28,60c-0.9-6.3,0.3-27.7-15-24.4c-14.1,3,7.1,60.9-13,60.9V140h1300V96.7z" />
                                        </svg>

                                    </li>
                                    <li class=" vmutc_section_divider_select" data-name="nuage4">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path d="M1300,21.7c0,0-42.6-1.5-66,26.9c0,0-24.3-9-36,9c0,0-1.7-4.9-12.6-1.5c0,0-2.6-24.2-26-9.3
	c0,0-13-39.2-55.9-9.7c0,0-6.5-4.8-13,1.5c0,0-29.5-25.8-50.7,9.3c0,0-14.7-11.2-28.2-1.5c0,0-14.7-24.6-60.2-24.6
	s-51.1,16.8-51.1,16.8S890-3,842.3,21.7c0,0-6.9-5.2-14.7-3.4c0,0-14.3-18.3-39-18.3s-49.8,12.3-49.8,41.8c0,0-22.1-9.7-35.5,10.1
	c0,0-12.1-12.7-41.6-1.5c0,0-2.2-10.1-14.7-9.3c0,0,6.9-32.1-31.2-28.4c0,0-30.8-20.5-33.8,17.5c0,0-6.1,0-12.1,6.3
	c0,0-3-18.7-33.8-18.7s-38.1,27.6-29,39.2c0,0-19.1-8.3-23.4,4.5c0,0-17.8-21.3-43.8-11.5c-21.5,8-12.1,30.2-12.1,30.2
	s-29-20.5-57.2,18.7c0,0-12.6-32.1-60.7-32.1c-36,0-49,20.9-49,20.9s-35.1-33.2-55,12.3c0,0-4.8-10.1-17.3-0.8
	c0,0,3.5-13.8-7.8-11.9c0,0,10.4-16,10.4-32.5s-33.8-37.3-67.6-19c0,0-43.1-46.3-123.4-14.6V140h1300V21.7z" />
                                        </svg>
                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="nuage5">
                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewBox="0 0 1300 140">
                                            <path d="M1300,139c-8.4-79.2-41.1-127.1-72.6-127.1c-58.5,0-68.6,63.2-100.1,63.2c-59.8,0-75.7-58.2-115.2-59.9
	c-67.6-2.9-127.9,93.7-195,79.8c-33.9-7-63.3-41.5-94.5-64.7c-50-37-111.5-43.5-157.2,6.7c-12.1,13.2-22.9,30.1-36.3,39
	c-51.3,34.1-107.1-62.9-160.4-38.6c-27.8,12.6-51.7,57.6-80,48.1c-12-4-33.4-29.9-44.3-38.9c-43.5-35.5-99-41.3-142.8-26
    S20.3,60.9,0,139H1300z" />
                                        </svg>
                                    </li>

                                    <li class=" vmutc_section_divider_select" data-name="nuage6">

                                        <svg class="svg_divider_rotateXY vmutc_divider_top" fill="#5aa8ec"
                                            preserveAspectRatio="none" style="height: 30px;"
                                            viewbox="0 0 1300 140">
                                            <path d="M0,140V66.2C0,66.2,100.9,0,230.8,0C443.4,0,491.3,64.5,650,64.5S856.6,0,1069.3,0
	C1199.1,0,1300,66.2,1300,66.2V140H0z" />
                                        </svg>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Divider Color'
                                    , 'css-magician'); ?></span>
                            </label><br />
                            <input type="text" name="vmutc_section_divider_BackgroundColor"
                                id="vmutc_section_divider_BackgroundColor">
                        </div>

                        <div id="vmutc_section_divider_width_container">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Divider Width'
                                    , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_section_divider_width_slider" class="section_slider_width"></div>
                            <input type="text" name="vmutc_section_divider_width" id="vmutc_section_divider_width"
                                class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>
                        <div id="vmutc_section_divider_height_container">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                    ><?php echo _e('Divider Height'
                                    , 'css-magician'); ?></span>
                            </label>
                            <div id="vmutc_section_divider_height_slider" class="section_slider_width"></div>
                            <input type="text" name="vmutc_section_divider_height" id="vmutc_section_divider_height"
                                class="vmutc_editorInput vmutc_numeric inputAlign">
                        </div>

                   <!--     <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                ><?php echo _e('Horizontal Flip'
                                , 'css-magician'); ?></span>
                        </label><br />
                        <label class="rocker rocker-small">
                            <input type="checkbox" id="vmutc_section_divider_flip" name="vmutc_section_divider_flip">
                            <span class="switch-left">Yes</span>
                            <span class="switch-right">No</span>
                        </label>-->
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Horizontal Flip','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_section_divider_flip" name="vmutc_section_divider_flip" />
                    <label for="vmutc_section_divider_flip"></label>
                </div>
                        <div class="row">
                            <div class="form-group col-md-12 vmutc-widgetValues">
                                <label class="control-label">
                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                         ><?php echo _e('Z-Index of the Divider' , 'css-magician'); ?></span>
                                </label>
                                <div id="vmutc_section_divider_zindex_slider" style="width:50%;"></div>
                                <input type="text" name="vmutc_section_divider_zindex"
                                    id="vmutc_section_divider_zindex" value="0"
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
                    <div data-toggle="collapse" href="#vmutc_sectionParticlesTab" aria-expanded="true"
                        aria-controls="vmutc_sectionParticlesTab" class="vmutc_animatorTab collapsed" data-title="Particles">
                        <span><?php echo _e('Background Particles' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionParticlesTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                <div style="margin:10px 0 10px 0;">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Add a Particles Background','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_sectionAddParticles" name="vmutc_sectionAddParticles" />
                    <label for="vmutc_sectionAddParticles"></label>
                </div><br>
                </div>
                <div id="vmutc_sectionParticlesContainer" class="panel-body">
                    <div class="panel-group" role="tablist">
                        <div class="panel panel-default">
                            <div class="panel-heading panel-odd" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_particlesSectionTab" aria-expanded="true"
                                        aria-controls="vmutc_particlesSectionTab" class="vmutc_animatorTab collapsed"
                                        data-title="Particles">
                                        <span><?php echo _e('Particles' , 'css-magician'); ?></span> <i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_particlesSectionTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-4 vmutc-widgetValues">
                                            <label class="control-label small120 col-md-12">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('Number'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleNumber_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleNumber"
                                                id="vmutc_sectionParticleNumber" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>

                                        <div class="col-md-4 vmutc-widgetValues">
                                            <label class="control-label small100">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('enable Density'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <input type="checkbox" name="vmutc_sectionParticleDensity"
                                                id="vmutc_sectionParticleDensity" value="0" class="">
                                        </div>


                                        <div class="col-md-4 vmutc-widgetValues">
                                            <label class="control-label small120 col-md-12">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('density Value'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleDensityValue_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleDensityValue"
                                                id="vmutc_sectionParticleDensityValue" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-3 vmutc-widgetValues">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('color'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="text" name="vmutc_sectionParticleColor"
                                                    id="vmutc_sectionParticleColor">
                                                <input type="hidden" name="vmutc_sectionParticleColorReal"
                                                    id="vmutc_sectionParticleColorReal">

                                            </div>
                                        </div>
                                        <div class="col-md-3 vmutc-widgetValues">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('stroke Width'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleStrokeWidth_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleStrokeWidth"
                                                    id="vmutc_sectionParticleStrokeWidth" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3 vmutc-widgetValues">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('stroke Color'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="text" name="vmutc_sectionParticleStrokeColor"
                                                    id="vmutc_sectionParticleStrokeColor">
                                                <input type="hidden" name="vmutc_sectionParticleStrokeColorReal"
                                                    id="vmutc_sectionParticleStrokeColorReal">

                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('polygon Nb. Sides'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticlePolygonNbSides_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticlePolygonNbSides"
                                                    id="vmutc_sectionParticlePolygonNbSides" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="control-label small100 col-md-12"
                                                    style="text-align:center;">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('particles Type'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <select id="vmutc_sectionParticleType" type="select"
                                                    class="vmutc_selectorEffects" name="vmutc_sectionParticleType"
                                                    autocomplete="off" style="padding:5px;">
                                                    <option value="image">image</option>
                                                    <option value="circle">circle</option>
                                                    <option value="edge">edge</option>
                                                    <option value="triangle">triangle</option>
                                                    <option value="polygon">polygon</option>
                                                    <option value="star">star</option>
                                                    <option value="image">image</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('image Width'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleImageWidth_slider"></div>
                                                <input type="text" name="vmutc_sectionParticleImageWidth"
                                                    id="vmutc_sectionParticleImageWidth" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('image Height'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleImageHeight_slider"></div>
                                                <input type="text" name="vmutc_sectionParticleImageHeight"
                                                    id="vmutc_sectionParticleImageHeight" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label class="control-label col-md-12 small100">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('image Url', 'css-magician'); ?></span>
                                            </label>
                                            <div class="col-md-12">
                                                <input type="text" name="vmutc_sectionParticleImageUrl"
                                                    id="vmutc_sectionParticleImageUrl" value="" class="vmutc_random"
                                                    where="imageMask">
                                            </div>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading panel-even" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_sectionParticlesSizeTab" aria-expanded="true"
                                        aria-controls="vmutc_sectionParticlesSizeTab" class="vmutc_animatorTab collapsed"
                                        data-title="sectionParticles Size">
                                        <span><?php echo _e('Particles Size' , 'css-magician'); ?></span> <i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_sectionParticlesSizeTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                                <div class="panel-body">
                                    <div class="row">

                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('particles Size'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleSize_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleSize"
                                                    id="vmutc_sectionParticleSize" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('size Random'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleSizeRandom"
                                                    id="vmutc_sectionParticleSizeRandom" value="0" class="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('size Anim'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleSizeAnim"
                                                    id="vmutc_sectionParticleSizeAnim" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('size Anim Speed'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleSizeAnimSpeed_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleSizeAnimSpeed"
                                                    id="vmutc_sectionParticleSizeAnimSpeed" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('min. size Anim'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleMinSizeAnim_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleMinSizeAnim"
                                                    id="vmutc_sectionParticleMinSizeAnim" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group  col-md-12">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('size Anim Sync'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleSizeAnimSync"
                                                    id="vmutc_sectionParticleSizeAnimSync" value="0" class="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading panel-odd" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_sectionParticlesOpacityTab"
                                        aria-expanded="true" aria-controls="vmutc_sectionParticlesOpacityTab"
                                        class="vmutc_animatorTab collapsed" data-title="OPacity">
                                        <span><?php echo _e('Opacity' , 'css-magician'); ?></span> <i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_sectionParticlesOpacityTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                                <div class="panel-body">

                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group  col-md-12">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('opacity Random'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleOpacityRandom"
                                                    id="vmutc_sectionParticleOpacityRandom" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('opacity Value'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleOpacityValue_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleOpacityValue"
                                                    id="vmutc_sectionParticleOpacityValue" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group  col-md-12">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('opacity Anim'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleOpacityAnim"
                                                    id="vmutc_sectionParticleOpacityAnim" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('opacity Anim Speed'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleOpacityAnimSpeed_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleOpacityAnimSpeed"
                                                    id="vmutc_sectionParticleOpacityAnimSpeed" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('min. opacity Anim'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleMinOpacityAnim_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleMinOpacityAnim"
                                                    id="vmutc_sectionParticleMinOpacityAnim" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('opacity Anim Sync'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleOpacityAnimSync"
                                                    id="vmutc_sectionParticleOpacityAnimSync" value="0" class="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading panel-even" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_sectionParticlesLineTab" aria-expanded="true"
                                        aria-controls="vmutc_sectionParticlesLineTab" class="vmutc_animatorTab collapsed"
                                        data-title="sectionParticles Lines">
                                        <span><?php echo _e('Particles Lines' , 'css-magician'); ?></span> <i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_sectionParticlesLineTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                                <div class="panel-body">

                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('line linked'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleLineLinked"
                                                    id="vmutc_sectionParticleLineLinked" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('Line Distance'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleLineDistance_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleLineDistance"
                                                    id="vmutc_sectionParticleLineDistance" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('line Opacity'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleLineOpacity_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleLineOpacity"
                                                    id="vmutc_sectionParticleLineOpacity" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group  col-md-12">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('line Width', 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleLineWidth_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleLineWidth"
                                                    id="vmutc_sectionParticleLineWidth" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('line Color', 'css-magician'); ?></span>
                                                </label>
                                                <input type="text" name="vmutc_sectionParticleLineColor"
                                                    id="vmutc_sectionParticleLineColor">
                                                <input type="hidden" name="vmutc_sectionParticleLineColorReal"
                                                    id="vmutc_sectionParticleLineColorReal">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading panel-odd" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_sectionParticlesMoveTab" aria-expanded="true"
                                        aria-controls="vmutc_sectionParticlesMoveTab" class="vmutc_animatorTab collapsed"
                                        data-title="sectionParticles Move">
                                        <span><?php echo _e('Particles Move' , 'css-magician'); ?></span><i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_sectionParticlesMoveTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Enable'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleMoveEnable"
                                                    id="vmutc_sectionParticleMoveEnable" value="0" class="">
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100 col-md-12"
                                                    style="text-align:center;">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Direction'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <select id="vmutc_sectionParticleMoveDirection" type="select"
                                                    class="vmutc_select70 vmutc_selectorEffects"
                                                    name="vmutc_sectionParticleMoveDirection" autocomplete="off"
                                                    style="padding:5px;">
                                                    <option value="none">none</option>
                                                    <option value="top">top</option>
                                                    <option value="top-right">top-right</option>
                                                    <option value="top-left">top-left</option>
                                                    <option value="bottom">bottom</option>
                                                    <option value="bottom-right">bottom-right</option>
                                                    <option value="bottom-left">bottom-left</option>
                                                    <option value="left">left</option>
                                                    <option value="right">right</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Random'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleMoveRandom"
                                                    id="vmutc_sectionParticleMoveRandom" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Straight'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleMoveStraight"
                                                    id="vmutc_sectionParticleMoveStraight" value="0" class="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Speed'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleMoveSpeed_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleMoveSpeed"
                                                    id="vmutc_sectionParticleMoveSpeed" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>


                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100 col-md-12"
                                                    style="text-align:center;">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Out Mode'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <select id="vmutc_sectionParticleMoveOutMode" type="select"
                                                    class=" vmutc_select70 vmutc_selectorEffects"
                                                    name="vmutc_sectionParticleMoveOutMode" autocomplete="off"
                                                    style="padding:5px;">
                                                    <option value="out">out</option>
                                                    <option value="bounce">bounce</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('move Attract'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleMoveAttract"
                                                    id="vmutc_sectionParticleMoveAttract" value="0" class="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('attract Rotate X'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleAttractRotateX_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleAttractRotateX"
                                                    id="vmutc_sectionParticleAttractRotateX" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small120 col-md-12">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('attract Rotate Y'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <div id="vmutc_sectionParticleAttractRotateY_slider" class=""></div>
                                                <input type="text" name="vmutc_sectionParticleAttractRotateY"
                                                    id="vmutc_sectionParticleAttractRotateY" value="0"
                                                    class="vmutc_editorInput vmutc_numeric inputAlign">
                                            </div>
                                        </div>
                                    </div>

                                </div> <!-- panel body-->

                            </div> <!-- panel collapse -->
                        </div> <!-- panel default -->

                        <div class="panel panel-default">
                            <div class="panel-heading panel-even" role="tab">
                                <h3 class="panel-title">
                                    <div data-toggle="collapse" href="#vmutc_sectionInteractivityTab" aria-expanded="true"
                                        aria-controls="vmutc_sectionInteractivityTab" class="vmutc_animatorTab collapsed"
                                        data-title="Interactivity">
                                        <span><?php echo _e('Interactivity' , 'css-magician'); ?></span><i
                                            class="fas fa-chevron-down"></i>
                                    </div>
                                </h3>
                            </div>

                            <div id="vmutc_sectionInteractivityTab" class="panel-collapse collapse panel-even" role="tabpanel" >
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="form-group col-md-12 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('Z-Index of the Particles
                                                    Canvas' , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticlezindex_slider" style="width:50%;"></div>
                                            <input type="text" name="vmutc_sectionParticlezindex"
                                                id="vmutc_sectionParticlezindex" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('Hover'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleHover"
                                                    id="vmutc_sectionParticleHover" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100 col-md-12"
                                                    style="text-align:center;">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('hover Mode'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <select id="vmutc_sectionParticleHoverMode" type="select"
                                                    class=" vmutc_select70 vmutc_selectorEffects"
                                                    name="vmutc_sectionParticleHoverMode" autocomplete="off"
                                                    style="padding:5px;">
                                                    <option value="grab">grab</option>
                                                    <option value="bubble">bubble</option>
                                                    <option value="repulse">repulse</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group  vmutc-widgetValues">
                                                <label class="control-label small100">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('Click'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <input type="checkbox" name="vmutc_sectionParticleClick"
                                                    id="vmutc_sectionParticleClick" value="0" class="">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group vmutc-widgetValues">
                                                <label class="control-label small100 col-md-12"
                                                    style="text-align:center;">
                                                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                         ><?php echo _e('click Mode'
                                                        , 'css-magician'); ?></span>
                                                </label>
                                                <select id="vmutc_sectionParticleClickMode" type="select"
                                                    class=" vmutc_select70 vmutc_selectorEffects"
                                                    name="vmutc_sectionParticleClickMode" autocomplete="off"
                                                    style="padding:5px;">
                                                    <option value="bubble">bubble</option>
                                                    <option value="repulse">repulse</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-6 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('grab Distance'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleGrabDistance_slider" style="width:50%;"></div>
                                            <input type="text" name="vmutc_sectionParticleGrabDistance"
                                                id="vmutc_sectionParticleGrabDistance" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                        <div class="form-group col-md-6 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('grab Line Linked Opacity'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleGrabLineOpacity_slider" style="width:50%;">
                                            </div>
                                            <input type="text" name="vmutc_sectionParticleGrabLineOpacity"
                                                id="vmutc_sectionParticleGrabLineOpacity" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-3 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('bubble Distance'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleBubbleDistance_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleBubbleDistance"
                                                id="vmutc_sectionParticleBubbleDistance" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                        <div class="form-group col-md-3 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('bubble Opacity'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleBubbleOpacity_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleBubbleOpacity"
                                                id="vmutc_sectionParticleBubbleOpacity" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                        <div class="form-group col-md-3 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('bubble Size'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleBubbleSize_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleBubbleSize"
                                                id="vmutc_sectionParticleBubbleSize" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                        <div class="form-group col-md-3 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('bubble Duration'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleBubbleDuration_slider" class=""></div>
                                            <input type="text" name="vmutc_sectionParticleBubbleDuration"
                                                id="vmutc_sectionParticleBubbleDuration" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-group col-md-12 vmutc-widgetValues">
                                            <label class="control-label">
                                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"
                                                     ><?php echo _e('repulse Distance'
                                                    , 'css-magician'); ?></span>
                                            </label>
                                            <div id="vmutc_sectionParticleRepulseDistance_slider" style="width:50%;">
                                            </div>
                                            <input type="text" name="vmutc_sectionParticleRepulseDistance"
                                                id="vmutc_sectionParticleRepulseDistance" value="0"
                                                class="vmutc_editorInput vmutc_numeric inputAlign">
                                        </div>
                                    </div>


                                </div> <!-- panel body-->
                            </div> <!-- panel collpase-->
                        </div>
                        <!--panel default-->
                    </div>

                </div>                        
            </div>  
             
        </div>
        <div class="panel panel-default">
            <div class="panel-heading panel-odd" role="tab">
                <h3 class="panel-title">
                    <div data-toggle="collapse" href="#vmutc_sectionParallaxTab" aria-expanded="true"
                        aria-controls="vmutc_sectionParallaxTab" class="vmutc_animatorTab collapsed" data-title="Parallax">
                        <span><?php echo _e('Parallax' , 'css-magician'); ?></span> <i
                            class="fas fa-chevron-down"></i>
                    </div>
                </h3>
            </div>

            <div id="vmutc_sectionParallaxTab" class="panel-collapse collapse panel-odd" role="tabpanel" >
                <div class="panel-body">
                    <fieldset>
                <!--        <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                ><?php echo _e('Use Simple Css Parallax'
                                , 'css-magician'); ?></span>
                        </label><br />
                        <label class="rocker rocker-small">
                            <input type="checkbox" id="vmutc_section_cssParallax" name="vmutc_section_cssParallax">
                            <span class="switch-left">Yes</span>
                            <span class="switch-right">No</span>
                        </label>-->
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Simple Css Parallax','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_section_cssParallax" name="vmutc_section_cssParallax" />
                    <label for="vmutc_section_cssParallax"></label>
                </div>
                    </fieldset>

                    <fieldset>
                  <!--      <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                ><?php echo _e('Use Real Parallax'
                                , 'css-magician'); ?></span>
                        </label><br />
                        <label class="rocker rocker-small">
                            <input type="checkbox" id="vmutc_section_realParallax" name="vmutc_section_realParallax">
                            <span class="switch-left">Yes</span>
                            <span class="switch-right">No</span>
                        </label>-->
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Real Parallax','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_section_realParallax" name="vmutc_section_realParallax" />
                    <label for="vmutc_section_realParallax"></label>
                </div>
                    </fieldset>
                    <fieldset id="vmutc_realParallaxValuesContainer">
                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Offset to trigger the parallax'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_section_realParallaxOffset_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_section_realParallaxOffset"
                                        id="vmutc_section_realParallaxOffset"
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
                                    <div id="vmutc_section_realParallaxDuration_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_section_realParallaxDuration"
                                        id="vmutc_section_realParallaxDuration"
                                        class="vmutc_widget vmutc_numeric vmutc_widget_input_text" />

                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12>">
                                <div class="form-group vmutc-widgetValues">
                                    <label class="control-label">
                                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                                            ><?php echo _e('Parallax Y move'
                                            , 'css-magician'); ?></span>
                                    </label>
                                    <div id="vmutc_section_realParallaxSizeY_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_section_realParallaxSizeY"
                                        id="vmutc_section_realParallaxSizeY"
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
                                    <div id="vmutc_section_realParallaxSizeX_slider" class="section_slider_width">
                                    </div>
                                    <input type="text" name="vmutc_section_realParallaxSizeX"
                                        id="vmutc_section_realParallaxSizeX"
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
