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
    <title>Css Magician Audio Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('AUDIO WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('CHOOSE AUDIO: Will open the audios gallery where you can choose what audio file to load.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('UPLOAD AUDIO (ONLY MP3): Will open the window to upload audio file (only mp3 file is allowed).' , 'css-magician'); ?></span><br>
    <span><?php echo _e('CHOOSE AN IMAGE: Will open the images gallery.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('UPLOAD AN IMAGE: Will open the window to upload image file.' , 'css-magician'); ?></span><br><br>   
    <span><?php echo _e('Title field: You can enter a text to display and you can use html code.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('SubTitle field: You can enter a text to display and you can use html code.' , 'css-magician'); ?></span><br><br>
     <span  style="font-size:24px; color:green;"><?php echo _e('How to stylize the elements' , 'css-magician'); ?></span><br>
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
