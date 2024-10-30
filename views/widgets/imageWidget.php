<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_imageWidgetContainer" class="vmutc_widgetWindow">
        <fieldset>
                <span id="vmutc_imageWidget_Image" class="btn btn-primary" data-width="500"
                    data-rel="openBackgroundGallery"
                    data-link="noredirect" data-title="Choose an Image"> <?php echo _e('Choose an Image' , 'css-magician'); ?></span><br />
                <input type="text" id="vmutc_imageWidget_Image_input"
                    name="vmutc_imageWidget_Image_input" value=""
                    class="vmutc_widget_input_text vmutc_widget_input_text" />
                <span id="vmutc_imageWidget_Image_remove"><i class="fa fa-trash"></i></span>
                <br />
                <span id="vmutc_uploadimageWidgetImage" class="btn btn-primary btn-primary2"
                    data-width="530" data-rel="vmutc_uploadimageWidgetImageWin" data-link="noredirect"
                    data-title="Upload an Image"> <?php echo _e('Upload an Image' , 'css-magician'); ?></span>
            </fieldset>             
            <fieldset>
                <label class="control-label col-md-12" style="text-align:center;">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                        ><?php echo _e('Background Size' , 'css-magician'); ?></span>
                </label>
                <select id="vmutc_imageWidget_Size" type="select" class="vmutc_selectorEffects"
                    name="vmutc_imageWidget_Size" autocomplete="off" style="padding:5px;">
                    <option value="auto">Auto</option>
                    <option value="contain">Contain</option>
                    <option value="cover">Cover</option>   
                    <option value="size">size of container</option>     
                </select>
            </fieldset>
            <fieldset>
                <div class="form-group vmutc-widgetValues">
                    <label class="control-label small100 col-md-12" style="text-align:center;">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Background Blend Mode' , 'css-magician'); ?></span>
                    </label>
                    <select id="vmutc_imageWidgetBlend" type="select"
                        class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_imageWidgetBlend"
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
            <fieldset>
                <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
            </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
 
</div>

