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
    <title>Css Magician Counter Up Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('COUNTER UP WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Final Value: It is necessary to add a value but you can add a text before and/or after the value.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('The counter will be increased from O to Final Value.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Speed: The higher the value, the lower the speed.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remenber: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br>
      <br>
      <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
