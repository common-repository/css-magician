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
  <title>Stylizer Position</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('Position' , 'css-magician'); ?></span></h1>
  </span><br>
  <span style="text-align: left;"> <span style="font-weight: bold; color:green;"><?php echo _e('Position' , 'css-magician'); ?></span><br>
    <br>
    <span><?php echo _e('The unit is pixel.' , 'css-magician'); ?></span>
    <br>
    <span><?php echo _e('By default Absolute position is defined. But you can validated the Relative position to position your image where you want.' , 'css-magician'); ?>
    </span><br>
    <span style="text-align: left;"><span style="font-weight: bold; color:red;"><?php echo _e('Warning:' , 'css-magician'); ?>
      </span><span><?php echo _e('it is preferable to use a relative position on a single element. A red message you recall it.' , 'css-magician'); ?>
      </span><br>
      <span><?php echo _e('If this is not the case, validate the checkbox ' , 'css-magician'); ?></span><span style="font-weight: bold;"><?php echo _e('Only update that element ' , 'css-magician'); ?>
      </span>
      <span><?php echo _e('in the Tab ' , 'css-magician'); ?></span><span style="font-weight: bold;"><?php echo _e('SELECTED ELEMENT' , 'css-magician'); ?></span>
      <br><br>
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