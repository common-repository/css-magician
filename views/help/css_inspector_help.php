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
    <title>help_inspector</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('CSS MAGICIAN INSPECTOR' , 'css-magician'); ?></span></h1>
    <br><?php echo _e(' Like for the styles editor, when you move the mouse over an element a blue rectangle appears and when you select an element with a click, it is updated by a red dotted rectangle.' , 'css-magician'); ?>
    <br>
    <br><?php echo _e(' On the left; it is you working editor and on the right, the final css file you want to save.' , 'css-magician'); ?>
    <br>
    <br><?php echo _e(' When you select an element, all the css rules applied to that element are displayed in the left editor.' , 'css-magician'); ?>
    <br><br>
    <span  style="font-size:28px; color:blue;"><?php echo _e('  The Editors' , 'css-magician'); ?><br>
    </span><br>
    <?php echo _e(' The commented lines outside rules explain in which file the css rule is defined.' , 'css-magician'); ?>
   <br> <?php echo _e(' The commented lines inside rules indicates the properties is overriden and used elsewhere. When you do a change in the editors, you immediately see the result.' , 'css-magician'); ?>
   <br>
    <br> <?php echo _e(' When you add: !important it is added at the cursor location, so be carreful where is the cursor.' , 'css-magician'); ?>
   <br>
    <br> <?php echo _e(' You can work on the two editors but normally the right editor is the final file you will save.' , 'css-magician'); ?>
    <br>
    <br> <?php echo _e(' Update a color property: Simply do a double clic to select the color. And update the color with the color picker.' , 'css-magician'); ?>
   <br>
    <br> <?php echo _e(' You can use the editor as all editors with standard shortcuts.' , 'css-magician'); ?>
    <br>
     <?php echo _e(' CTRL+SPACE = Open the auto-completion box.' , 'css-magician'); ?>
   <br>
     <?php echo _e(' CTRL+Z = Undo' , 'css-magician'); ?>
    <br>
     <?php echo _e('  CTRL+Y = Redo' , 'css-magician'); ?>
   <br>
     <?php echo _e('  CTRL+A = Select all' , 'css-magician'); ?>
  <br>
     <br>
    <br> <?php echo _e('  The final file is nammed:  assets/css/vmutcworkmytheme_inspectorX_NAME.css' , 'css-magician'); ?><br>
    <?php echo _e(' Where X is the ID of you shop and NAME the name of the theme you create in back office.' , 'css-magician'); ?>
  <br>
    <br> <?php echo _e('   That css file is a temporary working css file. It is only available for you. Your visitors can not see the change until you clicked on the PUBLISH button.' , 'css-magician'); ?>
   <br>
    <br>
    <span  style="font-size:24px; color:red;"><?php echo _e('  Be Careful' , 'css-magician'); ?></span>: <?php echo _e('  Only paste from the working editor (left) to the final editor (right) the necessary code. Otherwise, you will have severals dupplicate of the same code.' , 'css-magician'); ?><br>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
