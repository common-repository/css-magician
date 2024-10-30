<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_audioWidgetContainer" class="vmutc_widgetWindow">
        <fieldset>
                <span id="vmutc_chooseaudioWidget_Audio" class="btn btn-primary" data-width="500"
                    data-rel="openAudioGallery"
                    data-link="noredirect"> <?php echo _e('Choose Audio' , 'css-magician'); ?></span><br />

                <input type="text" id="vmutc_audioWidget_input"
                    name="vmutc_audioWidget_input" value=""
                    class="vmutc_widget_input_text" />
                <span id="vmutc_audioWidgetAudio_Remove"><i class="fa fa-trash"></i></span>
                <br />

                <span id="vmutc_uploadaudioWidgetAudio" class="btn btn-primary btn-primary2"
                    data-width="530" data-rel="vmutc_uploadaudioWidgetWin" data-link="noredirect"> <?php echo _e('Upload Audio (only MP3)' , 'css-magician'); ?></span>
            </fieldset> 
            
            <fieldset>
                <span id="vmutc_audioWidget_Image" class="btn btn-primary" data-width="500"
                    data-rel="openBackgroundGallery"
                    data-link="noredirect"> <?php echo _e('Choose an Image' , 'css-magician'); ?></span><br />

                <input type="text" id="vmutc_audioWidget_Image_input"
                    name="vmutc_audioWidget_Image_input" value=""
                    class="vmutc_widget_input_text vmutc_widget_input_text" />
                <span id="vmutc_audioWidget_Image_remove"><i class="fa fa-trash"></i></span>
                <br />

                <span id="vmutc_uploadaudioWidgetImage" class="btn btn-primary btn-primary2"
                    data-width="530" data-rel="vmutc_uploadaudioWidgetImageWin" data-link="noredirect"> <?php echo _e('Upload an Image' , 'css-magician'); ?></span>
            </fieldset> 

            <fieldset class="form-group">
                <label class="form-control-label" for="vmutc_audioWidgetTitle"><?php echo _e('Title' , 'css-magician'); ?></label>
                <input id="vmutc_audioWidgetTitle" type="text" class="form-control" />
                <label class="form-control-label" for="vmutc_audioWidgetSubTitle"><?php echo _e('SubTitle' , 'css-magician'); ?></label>
                <input id="vmutc_audioWidgetSubTitle" type="text" class="form-control" />
            </fieldset>
            <fieldset>
                <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
            </fieldset><br>
   
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>   
</div>

