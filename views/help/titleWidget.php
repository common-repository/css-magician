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
  <meta content="text/html; charset=UTF-8" http-equiv="content-type">
  <title>Css Magician Title Widget Help</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('TITLE WIDGET' , 'css-magician'); ?></span></h1>
  <span><?php echo _e('Link: Enter the complete link (https://www.mylink.com).' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Use Gradient: If validated you can use a gradient color on the title. The gradient builder will be displayed' , 'css-magician'); ?></span><br>
  <span><?php echo _e('By clicking on the color field, you can add color selector/picker.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When the mouse if over a color picker (the cursor icon is updated). And can move the color picker with left click and mouse move.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('You can delete a color selector by clicking on the cross on top of it.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('You can choose the gradient type and gradient position.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('When the gradient is used, the hover font color has no effect.' , 'css-magician'); ?></span><br><br>
  <span style="font-size:20px; color:blue;"><?php echo _e('But remember, you can always use the Css Magician Stylizer to update the style of an element with all his features.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Example: If you want to verticaly align the title, Open Css Magician Stylizer, select the title with the mouse and update: Text -> Line Height.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('You can do the same things with color, font size etc...' , 'css-magician'); ?></span><br>
  <br>
  <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
  <br>
  <br>
  <br>
  <br>
</body>

</html>