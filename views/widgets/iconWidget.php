<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_iconContainer" class="vmutc_handle vmutc_widgetWindow">
    <div id="vmutc_iconSelectorContainer"></div>
    <fieldset class="form-group">
        <label class="form-control-label" for=""><?php echo _e('Icon Alignment' , 'css-magician'); ?></label>
        <div id="vmutc_iconAlignChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary active fa fa-align-left">
                <input type="radio" name="vmutc_iconAlign" id="vmutc_iconAlignLeft" autocomplete="off" value="left" checked> <?php echo _e('Left' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fa fa-align-center">
                <input type="radio" name="vmutc_iconAlign" id="vmutc_iconAlignCenter" autocomplete="off" value="center">
                <?php echo _e('Center' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fa fa-align-right">
                <input type="radio" name="vmutc_iconAlign" id="vmutc_iconAlignRight" autocomplete="off" value="right">
                <?php echo _e('Right' , 'css-magician'); ?>
            </label>
        </div>
    </fieldset>
    <fieldset>
        <div class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  >  <?php echo _e('Icon Color' , 'css-magician'); ?></span>
            </label>
            <input type="text" name="vmutc_iconWidget_Color" id="vmutc_iconWidget_Color">
        </div>
        <label class="control-label">
            <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Icon Size' , 'css-magician'); ?></span>
        </label>
        <div id="vmutc_iconWidget_size_slider" class="section_slider_width"></div>
        <input type="text" name="vmutc_iconWidget_size" id="vmutc_iconWidget_size" class="vmutc_editorInput vmutc_numeric inputAlign">
    </fieldset>
    <fieldset>
        <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
    </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
   
</div>