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
  <title>Stylizer Add Block</title>
</head>
<body>
  <span style="font-weight: bold; color:green;"><?php echo _e('ADD A NEW BLOCK' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('First it is necessary to select an element (like with all updates).' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Choose the item closest to where you want to add a new block.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('1) Then you select ' , 'css-magician'); ?></span><span><b><?php echo _e('WHERE TO PUT THE BLOCK' , 'css-magician'); ?></b></span><br>
  <span><?php echo _e('- Append: The new block will be insterted into the selected element at last position.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Prepend: The new block will be inserted into the selected element at first position.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Before: The new block will be insterted just before the selected element.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- After: The new block will be insterted just after the selected element.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('2) Click on Create New Block' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('3) Move the mouse on your webpage. Over an element a grey rectangle will appears exactly at the position where a block can to be added.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Click on that element to create the new block.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('A new window will appears where it will be possible to choose a predefined column layout.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Click on the layout you want to use.But it will be possible to update the layout exactly as you want in the grid editor.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('A new block will be inserted with the corresponding columns layout.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('But it will possible to update the layout by adding or deleting columns.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('4) When the mouse will be over a block, the grid editor will be displayed except if the "Hide Block Editor" is validated on "Yes". When the mouse will leave the block, the grid editor will be hidden.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So, remember: If the "Hide Block Editor" is on "No", the display of the grid editor toggle between visible and hidden.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('if the "Hide Block Editor" is on "Yes", all the grid editors are always hidden.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:red;"><?php echo _e('Warning: When you add a block, the "Add new block" is automatically unchecked.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold; color:red;"><?php echo _e('So, if you want to add another block, it will be necessary to valid it each time.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"><?php echo _e('Warning: No need to click on the Save button in the Stylizer. The grid editor has is own backup system.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('So, you only click on the save button, if there is a save button in the window that will be opened.' , 'css-magician'); ?></span><br>
  <br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('UPDATE PRODUCTS MINIATURES' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('By clicking on this button, a new window will appears, where it will be possible to choose a new products miniatures template.' , 'css-magician'); ?></span><br>
  <br><br>
</body>
</html>