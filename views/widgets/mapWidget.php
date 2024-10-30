<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_mapContainer" class="vmutc_handle vmutc_widgetWindow">
    <fieldset class="form-group">
        <label class="form-control-label" for="vmutc_editorMapAddress"><?php echo _e('Address' , 'css-magician'); ?></label>
        <input id="vmutc_editorMapAddress" type="text" class="form-control" />
    </fieldset>
    <div id="vmutc_mapContainerShow">
        <object id="vmutc_mapShow" type="text/html"
            data="https://maps.google.com/maps?q=parist=m&z=11&output=embed&iwloc=near" width="100%"
            height="300"></object>
    </div>
    <fieldset class="form-group">
        <label class="form-control-label" for="vmutc_editorMapZoom"><?php echo _e('Zoom Level' , 'css-magician'); ?></label>
        <div id="vmutc_editorMapZoom" class="section_slider_width"></div>
        <input id="vmutc_editorMapZoom_input" class="vmutc_editorInput vmutc_numeric" name="vmutc_editorMapZoom_input"
            type="text" value="11" />
    </fieldset>
    <fieldset class="form-group">
        <label class="form-control-label" for="vmutc_editorMapHeight"><?php echo _e('Height' , 'css-magician'); ?></label>
        <div id="vmutc_editorMapHeight"  class="section_slider_width"></div>
        <input id="vmutc_editorMapHeight_input" class="vmutc_editorInput vmutc_numeric"
            name="vmutc_editorMapHeight_input" type="text" value="300" />
    </fieldset>
    <fieldset>
        <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
    </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
    
</div>

