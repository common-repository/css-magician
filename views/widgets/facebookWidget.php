<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_facebookContainer" class="vmutc_widgetWindow">
    <fieldset class="form-group"> 
                <label class="form-control-label" for="vmutc_facebookLink"><?php echo _e('Facebook Page Url' , 'css-magician'); ?></label>
        <input id="vmutc_facebookLink" type="text" class="form-control" placeholder="#" />
        <label class="form-control-label" for=""><?php echo _e('Alignment' , 'css-magician'); ?></label><br />
        <div id="vmutc_facebookAlignChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary active fas fa-align-left">
                <input type="radio" name="vmutc_facebookAlign" id="vmutc_facebookAlignLeft" autocomplete="off"
                    value="left" checked> <?php echo _e('Left' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fas fa-align-center">
                <input type="radio" name="vmutc_facebookAlign" id="vmutc_facebookAlignCenter" autocomplete="off"
                    value="center"> <?php echo _e('Center' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fas fa-align-right">
                <input type="radio" name="vmutc_facebookAlign" id="vmutc_facebookAlignRight" autocomplete="off"
                    value="right"> <?php echo _e('Right' , 'css-magician'); ?>
            </label>
        </div>   
        <div>
        <label class="form-control-label" for="vmutc_facebookWidth"><?php echo _e('Width (min-width:180px)' , 'css-magician'); ?></label>
        <div id="vmutc_facebookWidth" class="section_slider_width"></div>
        <input id="vmutc_facebookWidth_input" class="vmutc_editorInput vmutc_numeric"
            name="vmutc_facebookWidth_input" type="text" value="" />
</div>
<div>
            <label class="form-control-label" for="vmutc_facebookHeight"><?php echo _e('Height' , 'css-magician'); ?></label>
            <div id="vmutc_facebookHeight" class="section_slider_width"></div>
            <input id="vmutc_facebookHeight_input" class="vmutc_editorInput vmutc_numeric"
                name="vmutc_facebookHeight_input" type="text" value="" />
            </div>
       </fieldset>
       <fieldset>
        <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
    </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
    
</div>