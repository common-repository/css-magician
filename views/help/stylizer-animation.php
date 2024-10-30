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
  <title>Stylizer Simple Animation</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('Simple Animation' , 'css-magician'); ?></span></h1>
  </span><br>
  <span style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('SIMPLE ANIMATION' , 'css-magician'); ?></span><br>
    <br>
    <span><?php echo _e('First it is necessary to select an element (like with all updates).' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('1) Then you select ' , 'css-magician'); ?></span><span><b><?php echo _e('WHEN' , 'css-magician'); ?></b></span><span><?php echo _e(' you want the animation to be played.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('- On Load (when the entire page is loaded)' , 'css-magician'); ?></span><br>
    <span><?php echo _e('- Hover (when the mouse is over the selected element)' , 'css-magician'); ?></span><br>
    <span><?php echo _e('- Click (when the mouse click on the selected element)' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('2) Then you select ' , 'css-magician'); ?></span><span><b><?php echo _e('DO ANIMATION' , 'css-magician'); ?></b></span><br>
    <span><?php echo _e('- Choose the animation you want to play.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('3) Validate or not ' , 'css-magician'); ?></span><span><b><?php echo _e('INFINITE LOOP' , 'css-magician'); ?></b></span><br>
    <span><?php echo _e('- If validated, the animation will be played infinitly.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('4) You can choose a predefined ' , 'css-magician'); ?></span><span><b><?php echo _e('SPEED' , 'css-magician'); ?></b></span><br><br>
    <span><?php echo _e('5) You can test what the animation do by clicking on ' , 'css-magician'); ?></span><span><b><?php echo _e('Test Animmation' , 'css-magician'); ?></b></span><br><br>
    <span style="font-weight: bold;"><?php echo _e('Warning:' , 'css-magician'); ?></span><br>
    <?php echo _e('Do not forget to click on the button SAVE button (on top of the stylizer) to save the animation.' , 'css-magician'); ?>
    <br>
    <?php echo _e('And to activate the animation, it will be necessary to reload the page.' , 'css-magician'); ?>
    <br>
    <br>
    <br>
</body>

</html>