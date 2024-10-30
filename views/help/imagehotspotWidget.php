<!--/ 
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Presta Magician 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @license: GPLv2
   International Registered Trademark & Property of Presta Magician
   Css Magician for Wordpress basic version
 ** -->
 <?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta  content="text/html; charset=UTF-8"  http-equiv="content-type">
    <title>Css Magician Image Hot Spot Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('IMAGE HOT SPOT WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Image Title: For SEO, you can add a title to the image.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Image Alt: For SEO, you can add text. It will be added to the alt attribute of the image.' , 'css-magician'); ?></span><br>
    <span style="font-size:24px; color:Green;"><?php echo _e('How to create a hot spot ?.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Move the mouse over the image and click where you want to add a hotspot. It will be created and displayed.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('You can created several hotspot.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('To edit and update a hotspot, click on it.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('You can define a predefined width for the tooltip or valid the auto width.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('If you validate the Always visible checkbox, the tooltip will be always visible. Otherwise, it will be visible only when the mouse will be over the hotspot.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('In the HTML editor you can add what you want (link, image, video etc...).' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
    <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
