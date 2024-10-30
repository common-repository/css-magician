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
    <title>Css Magician Video Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('VIDEO WIDGET' , 'css-magician'); ?></span></h1><br>
    <span><?php echo _e('Only MP4 file can to be uploaded in the module directory to store video.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('In the text field, you can add a Youtube URL, or a Vimeo URL or a Dailymotion URL.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('In that case, the video will be embeded in an iframe.' , 'css-magician'); ?></span><br><br>
 
     <span><?php echo _e('There is no stylizer field in that widget.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('You can only use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br>
    <br>
     <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
