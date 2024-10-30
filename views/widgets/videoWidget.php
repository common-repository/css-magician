<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_videoWidgetContainer" class="vmutc_widgetWindow">
        <fieldset>
                <span id="vmutc_choosevideoWidget_Video" class="btn btn-primary" data-width="500"
                    data-rel="openBackgroundVideoGallery"
                    data-link="noredirect" data-title="Choose a Video"> <?php echo _e('Choose a Video' , 'css-magician'); ?></span><br />
                <input type="text" id="vmutc_videoWidget_input" name="vmutc_videoWidget_input" value="" class="vmutc_widget_input_text vmutc_widget_input_text" />
                <span class="vmutc_info" data-toggle="tooltip" data-html="true"><?php echo _e('Video name or url (*.mp4, youtube, vimeo, dailymotion)' , 'css-magician'); ?></span>
        
                <span id="vmutc_videoWidgetVideo_Remove"><i class="fa fa-trash"></i></span>
                <br />
                <span id="vmutc_uploadvideoWidgetVideo" class="btn btn-primary btn-primary2"
                    data-width="530" data-rel="vmutc_uploadvideoWidgetWin" data-link="noredirect"
                    data-title="Upload a Video"> <?php echo _e('Upload a Video (only MP4)' , 'css-magician'); ?></span>
            </fieldset> 
            <fieldset>
                <div class="form-group vmutc-widgetValues">
                    <label class="control-label small100 col-md-12" style="text-align:center;">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Background Blend Mode' , 'css-magician'); ?></span>
                    </label>
                    <select id="vmutc_videoWidgetMixBlend" type="select"
                        class="vmutc_widgetSelect vmutc_selectorEffects" name="vmutc_videoWidgetMixBlend"
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
            <fieldset>
            <div class="vmutc_videoWidgetProviderSettings">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php echo _e('Controls' , 'css-magician'); ?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_videoWidgetControls" name="vmutc_videoWidgetControls" />
                        <label for="vmutc_videoWidgetControls"></label>
                    </div>
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php echo _e('Autoplay' , 'css-magician'); ?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_videoWidgetAutoplay" name="vmutc_videoWidgetAutoplay" />
                        <label for="vmutc_videoWidgetAutoplay"></label>
                    </div>
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php echo _e('Loop' , 'css-magician'); ?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_videoWidgetLoop" name="vmutc_videoWidgetLoop" />
                        <label for="vmutc_videoWidgetLoop"></label>
                    </div>
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php echo _e('Mute' , 'css-magician'); ?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_videoWidgetMute" name="vmutc_videoWidgetMute" />
                        <label for="vmutc_videoWidgetMute"></label>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
            </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
   
</div>

