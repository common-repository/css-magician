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
  <title>Css Magician Circular Menu Widget</title>
</head>
<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('CIRCULAR MENU WIDGET' , 'css-magician'); ?></span></h1>
  <span style="font-size:20px; color:green;"><?php echo _e('Menu Items' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Item Link: enter the complete link (https://www.mysite.com/mypage) to open after a click on the menu icon.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Item Icon: Slect the icon you want to use in the icon selector.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Remove item by clicking on the trash icon.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('+ Add New Item : Add a new item. It will be necessary to update the size of the icons in the Menu Items Settings.' , 'css-magician'); ?></span><br><br>
  <span style="font-size:20px; color:red;"><?php echo _e('Be carefull: Each time you add or remove an item, the menu is entirely rewriten. So, all the style is removed and updated to default style.' , 'css-magician'); ?></span><br>
  <span style="font-size:20px; color:red;"><?php echo _e('So, it will be necessary to update the style again.' , 'css-magician'); ?></span><br><br>
  <span style="font-size:20px; color:green;"><?php echo _e('Menu Items Settings' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Trigger: Choose how the menu is open (click or hover).' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Menu Position: By default the menu is centered in his widget container.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('But it is possible to choose a fixed position.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Trigger Width: Width of the trigger (center menu).' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Menu Width: Width of the menu.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Trigger Menu Icon: Icon of the trigger menu.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('You can update the main color and size of the menu.' , 'css-magician'); ?></span><br><br>
  <span style="font-size:20px; color:blue;"><?php echo _e('Remenber; for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br>
  <br>
  <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
  <br>
  <br>
  <br>
  <br>
</body>

</html>