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
  <title>Stylizer Text</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('Text' , 'css-magician'); ?></span></h1>
  </span><br>
  <span style="font-weight: bold; color:green;"> <?php echo _e('TEXT' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"> <?php echo _e('Font Selector' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('In the font selector, the line with 3 dashes represents the separation between the default fonts for web use (above) and exotics Google fonts (bottom)' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"> <?php echo _e('Shadow' , 'css-magician'); ?></span><br>
  <div style="text-align: left;">
    <span class="hps"><?php echo _e('For the definition of a text shadow, you will see nothing until the 4 fields have not been filled (horizontal, vertical, blur, color).' , 'css-magician'); ?>
    </span>
  </div><br>
  <span style="font-weight: bold;"> <?php echo _e('Gradient Color' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('When you validate: Use Gradient, the Gradient builder will be displayed.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('By clicking on the color field, you can add color selector/picker.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('When the mouse if over a color picker (the cursor icon is updated). And can move the color picker with left click and mouse move.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('You can delete a color selector by clicking on the cross on top of it.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('You can choose the gradient type and gradient position.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"><?php echo _e('!important property' , 'css-magician'); ?></span><br>
  <?php echo _e('The Css styles of an element are defined in priority order. It is possible that by modifying an item you can not see anything because prevents the higher priority.' , 'css-magician'); ?>
  <br>
  <?php echo _e(' To correct this, you must validate the button ' , 'css-magician'); ?>
  <span style="background:#333;color:#FFF;padding-left:5px;">!&nbsp;</span> !important. <span><?php echo _e('It becomes red and you should see your changes. If this is not the case whether it is a pseudo element (see the help of SELECTED ELEMENT). the style of the element can not be changed with this selection. It will be necessary to select a parent or child element by moving the mouse.' , 'css-magician'); ?></span>
  <span><?php echo _e('Or perhaps the style of the element can not be changed with this selection. It will be necessary to select a parent or child element.' , 'css-magician'); ?></span><br> <br>
  <br><?php echo _e(' After clicking on the button ' , 'css-magician'); ?>
  <span style="background:#333;color:#FFF;padding-left:5px;">!&nbsp;</span>
  !important, <?php echo _e('you have to validate your choice again with the style selector (checkbox, radio button, slider, colors picker etc ...)' , 'css-magician'); ?><br>
  <br>
  <br>
</body>

</html>