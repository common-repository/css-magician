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
    <title>Css Magician Image Text Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('IMAGE / TEXT WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Type (Left/Right): You can choose to display the image to the left or to the right of the container.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('So, the text will be displayed to the left or the right of the image.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('When you switch between left to right it is necessary to update the Cx value of the effect.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Normally when the type is Left, the Cx value have to be at 0 and when the type is right the Cx value have to be at 100.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Width (%): It is the width in percent of the widget in his container.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Margin: It is the margin between the image and the text.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Type Ellipse: when you choose the ellipse, you can to update the values of Rx, Ry, Cx and Cy.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Rx: Horizontal Radius of the ellipse.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Ry: Vertical Radius of the ellipse.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Cx: Horizontal Position of the ellipse.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Cy: Vertical Position of the ellipse.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Type Polygon: when you choose the polygon, an icon Eye will be displayed.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('If you click on that icon, you will be redirected to the page: "https://bennettfeely.com/clippy/" where you can create polygon.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('In the bottom of that page you will see the css code to generate a polygon like that:  clip-path: polygon(50% 0%, 0% 100%, 100% 100%); ' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Simply copy: polygon(50% 0%, 0% 100%, 100% 100%) not clip-path: and not the semicolon at the end.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('and paste that code in the field bellow the eye icon.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('The image will be displayed in that polygon.' , 'css-magician'); ?></span><br><br>   
    <span><?php echo _e('Html Editor: The HTML (text) will be displayed from the left or the right of the image.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('When you enter text, if you do not go at the line when you reach the end of the container you will have a break.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('In that case, remove the last characters you entered and go to the line by clicking on ENTER (will add a p tag) or CTRL ENTER (will add a br tag)' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
    <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
