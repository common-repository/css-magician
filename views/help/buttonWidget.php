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
  <title>Css Magician Button Widget</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('BUTTON WIDGET' , 'css-magician'); ?></span></h1>
  <span><?php echo _e('Select a button style: Choose the style of the button.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Text: Text of the button.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Link: The complet link of the page (https://wwww.mypage.com) you want to open with a click on the button.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Open in a new Tab: If validated, the new page will be opened in a new tab of the browser. Otherwise, it will be opened in the same page.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Button alignment: Horizontal alignment of the button (left, center, right).' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Icon selector: You can add an icon on the button (or not).' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Icon alignment: Horizontal alignment of the icon. (left or right)' , 'css-magician'); ?></span><br><br>
  <span style="font-size:24px; color:green;"><?php echo _e('How to stylize the elements' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Background color: Background color of the button.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Color effect before: The color of the button effect. Perhaps that field will be not displayed.It depends of the button style. That field update the "before" pseudo element of the button.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Color effect after: The color of the button effect. Perhaps that field will be not displayed.It depends of the button style. That field update the "after" pseudo element of the button.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Text/Icon color: Color of the text and icon.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Hover Text/Icon color: Hover Color of the text and icon.' , 'css-magician'); ?></span><br><br>
  <span style="font-size:20px; color:blue;"><?php echo _e('Remenber; for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br>
  <span style="font-size:20px; color:blue;"><?php echo _e('But be carefful with the before and after pseudo element. It can crash the effect of the button.' , 'css-magician'); ?></span><br>
  <br>
  <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
  <br>
  <br>
  <br>
  <br>
</body>

</html>