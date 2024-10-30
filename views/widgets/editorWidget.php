<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_tinyContainer" class="vmutc_widgetWindow">
    <div id="vmutc_tiny"></div>
    <fieldset>
        <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
    </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
    
</div>