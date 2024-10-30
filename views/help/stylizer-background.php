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
  <title>Stylizer Background</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('Background' , 'css-magician'); ?></span></h1>
  </span><br>
  <div style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('BACKGROUND' , 'css-magician'); ?><br>
      <br>
    </span>
    <span id="result_box" class="" lang="{$iso|escape:'htmlall':'UTF-8'}"><span class="hps"><?php echo _e('By clicking' , 'css-magician'); ?>
        <span style="font-weight: bold;"><?php echo _e('Upload background image' , 'css-magician'); ?></span></span>
      <span class="hps"><?php echo _e('you can upload an image on your server.' , 'css-magician'); ?></span><br>
      <span class="hps"><?php echo _e('And by clicking ' , 'css-magician'); ?><span style="font-weight: bold;"><?php echo _e('Choose a background image' , 'css-magician'); ?></span><span>,
          <?php echo _e('you can choose which image will be applied.' , 'css-magician'); ?></span> <br>
        <span class="hps"><?php echo _e('The name of the image file will appear in the text filed below.' , 'css-magician'); ?></span><br>
        <span style="color:red;font-size:18px;"><?php echo _e('Warning:' , 'css-magician'); ?></span> <?php echo _e('If you select the button' , 'css-magician'); ?> <span style="background:#333;color:#FFF;padding-left: 5px;"> !&nbsp;</span>
        !important,<?php echo _e(' it will be necessary to select the image another time to validate it with the !important value.' , 'css-magician'); ?> <br>
        <br>
        <span style="font-weight: bold;"><?php echo _e('The radio buttons:' , 'css-magician'); ?></span> <span style="font-style: italic;"><span style="font-weight: bold;"><?php echo _e('Repeat X-Y - no repeat -Repeat X - Repeat Y' , 'css-magician'); ?></span> <span>
            <?php echo _e('allow to define wether the image should be repeated or not in the X and Y axes' , 'css-magician'); ?></span><br>
          <br>
          <span style="font-weight: bold;"><?php echo _e('The radio buttons: Scroll - Fixed' , 'css-magician'); ?></span><span>
            <?php echo _e('allow to define wether the image should follow the scrolling of the site or wether it should be fixed.' , 'css-magician'); ?></span><br>
          <br>
          <span style="font-weight: bold;"><?php echo _e('The radio buttons: auto - cover - contain ' , 'css-magician'); ?></span>
          <span><?php echo _e('allow to define the image size.' , 'css-magician'); ?><br>
            <span style="font-style: italic; font-weight: bold;">auto:</span><?php echo _e('The size is define automatically to define the image size.' , 'css-magician'); ?> <br>
            <span style="font-weight: bold; font-style: italic;">cover:</span> <?php echo _e('Force to cover the entire surface without distorting the image.' , 'css-magician'); ?></span>
          <br>
          <span style="font-weight: bold; font-style: italic;">contain:</span><span class="hps"><?php echo _e('Force the image do not exceed the element without deforming.' , 'css-magician'); ?>
          </span><br>
          <br>
          <span id="result_box" class="" lang="{$iso|escape:'htmlall':'UTF-8'}"><span class="hps"><?php echo _e('Another possibility to define the image size is to define its width and height.' , 'css-magician'); ?>
            </span><br>
            <span class="hps"><?php echo _e('The unit is defined as a percentage to be responsive (adapts to the size of its content).' , 'css-magician'); ?></span><br>
            <span class="hps"><?php echo _e('When you validate a width or height, the radio buttons - normal - cover - contain are unvalidated. ' , 'css-magician'); ?></span><br>
            <span class="hps"><?php echo _e('Similarly if you press one of these buttons, the width and height fileds are set to empty. It is necessary to choose between one of these two modes to define the size of an image. ' , 'css-magician'); ?>
            </span><br><span class="hps"><?php echo _e('The !important button is used for both fileds (height and width).' , 'css-magician'); ?></span> <br>
            <span class="hps"><?php echo _e('The image positioning unit is also percentage.' , 'css-magician'); ?></span><br>
            <br>
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