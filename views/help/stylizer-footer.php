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
  <title>Stylizer Footer</title>
</head>
<body>
   <span style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('RESPONSIVE MODES ' , 'css-magician'); ?></span><br>
    <br>
    <span><?php echo _e('If you click on one of the devices icons, your page will be open in a new window corresponding to the size of the common selected device size.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('So, it will be possible to update the page with the size of the selected device.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('The CSS Code will be generated for that device.' , 'css-magician'); ?></span><br><br>
    <span style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('HIDE BLOCK EDITOR' , 'css-magician'); ?></span><br>
      <br>
      <span><?php echo _e('You can choose to hide or display the Block/Grid Editor.' , 'css-magician'); ?></span><br>
      <span><?php echo _e('If you need to work on the Block/Grid Editor, it is necessary to display it.' , 'css-magician'); ?></span><br>
      <span><?php echo _e('But if you only need to update the style of elements, you can hide the Block/Grid editor. It is easiest to work on elements.' , 'css-magician'); ?></span><br><br>
      <span style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('HIDE DOM INSPECTOR' , 'css-magician'); ?></span><br>
        <br>
        <span><?php echo _e('You can choose to hide or display the DOM Inspector.' , 'css-magician'); ?></span><br>
        <span><?php echo _e('The DOM Inspector display visual information on the element at the mouse position like your browser development tool.' , 'css-magician'); ?></span><br>
        <span><?php echo _e('The content of the element are highlighted with a transparent blue.' , 'css-magician'); ?></span><br>
        <span><?php echo _e('The margins are indicated in yellow.' , 'css-magician'); ?></span><br>
        <span><?php echo _e('The paddings are indicated in pink.' , 'css-magician'); ?></span><br>
        <span><?php echo _e('And a tooltip display the selector of the element and his size (widht and height).' , 'css-magician'); ?></span><br><br>
        <span><?php echo _e('If you are an experienced user, thoses informations can to be very usefull if you use the Css Inspector/Editor.' , 'css-magician'); ?></span><br><br>
        <br>
</body>
</html>