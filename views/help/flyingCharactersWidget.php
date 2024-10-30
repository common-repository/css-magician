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
    <title>Css Magician Flying Characters Widget</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('FLYING CHARACTERS WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Text: Simply add a text you want to animate.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Animation type: Choose one of the 5 animations types.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Infinite Loop: If validated, the animation will be played infinitly.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Reverse Yoyo: If validated, At the end of the animation, it will be played in the opposite direction.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Repeat Delay: Delay to pause the animation at the end before to play again.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Duration: It is the speed to display the characters. The lower value, the higher speed.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Stop animation (to work on caracters): If you want to use Css Magician stylizer to stylize the characters, it is necessary to stop the animation to select the elements.' , 'css-magician'); ?></span><br><br>
   <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
   <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
