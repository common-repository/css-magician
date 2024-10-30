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
    <title>Css Magician Slider Widget Help</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('SLIDER WIDGET' , 'css-magician'); ?></span></h1>
    <span  style="font-size:24px; color:green;"><?php echo _e('How to create a slide ?' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Click on + Add new slide' , 'css-magician'); ?></span><br><br>
    <i class="far fa-images" style="color:green;"></i><span><?php echo _e(' Open the Images gallery.' , 'css-magician'); ?></span><br>
    <i class="fas fa-upload" style="color:#d07d12;"></i><span><?php echo _e(' Upload an image.' , 'css-magician'); ?></span><br>
    <i class="fas fa-times" style="color:red;"></i><span><?php echo _e(' Remove the image.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Link: Add the complete link (https://www.mylink.com) to open by clicking on the image.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('When you click on the icon, you can toggle if the item feature is validated or not.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Image Title: For SEO, you can add a title tag to the image. It will be not visible.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Image Alt: For SEO, you can add a alt tag to the image. It will be displayed as a tooltip when the mouse is over.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Click on the trash icon to completely remove the slide.' , 'css-magician'); ?></span><br><br>
    <span  style="font-size:24px; color:green;"><?php echo _e('Slider Settings' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('It is very intuitive. So nothing particular to say here.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
      <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
