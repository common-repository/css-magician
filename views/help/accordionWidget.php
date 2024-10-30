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
    <title>Css Magician Accordion Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('ACCORDION WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('When you create an accordion, a sample tab is created.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Click on: "+ Add New item" to create a new one.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('By default the content editor is hidden. Click on the item title field, to display the content editor.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Click on the trash icon to remove an item.' , 'css-magician'); ?></span><br><br>   
    <span  style="font-size:24px; color:green;"><?php echo _e('Stylizer' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Here you can update the main style of the accordion.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('But remember, you can always use the Css Magician Stylizer to update the style of an element with all his features.' , 'css-magician'); ?></span><br>
     <br>      
     <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
