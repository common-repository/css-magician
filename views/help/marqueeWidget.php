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
    <title>Css Magician Marque Widget Help</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('MARQUEE WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Nothing particular to say here.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Scroll speed: The higher the value, the slower the speed.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Stop animation (to work on text): If validated the animation is stopped and you can work on the text with Css Magician stylizer.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
    <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
