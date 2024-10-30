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
  <title>Grid Editor</title>
</head>

<body>
  <span style="font-weight: bold; color:green;"><?php echo _e('THE GRID EDITOR TOOLBAR' , 'css-magician'); ?></span><br>
  <br>
  <a title="Open" class="gridstack-rowhelpicon gridstack-open"><i class="fas fa-ellipsis-h"></i></a>
  <span><?php echo _e('Hide/Display the row tool bar settings.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When the mouse is over a Grid, that icon is visible, otherwise it is hidden. ' , 'css-magician'); ?></span><br><br>
  <a title="Background Settings" class="gridstack-rowhelpicon gridstack-background"><i class="fas fa-cog" style="color:#fff;"></i></a>
  <span><?php echo _e('A click open the window to update the settings of the widget container.' , 'css-magician'); ?></span><br><br>
  <a title="Fullwidth" class="gridstack-rowhelpicon"><i class="fas fa-arrows-alt-h"></i></a>
  <span><?php echo _e('A click increase the size of the row to fullwidth. A new click brings her back to her initial state.' , 'css-magician'); ?></span><br><br>
  <a title="Add widget column" class="gridstack-rowhelpicon gridstack-add-column"><i class="fas fa-plus-circle" style="color:red;"></i></a>
  <span><?php echo _e('Click to add a COLUMN (Widget Container) in the Grid.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('The Widget Container will be added at the next free position in the grid.' , 'css-magician'); ?></span><br><br>
  <a title="Save Block" class="gridstack-rowhelpicon gridstack-save" style="color: #385bc4;background: #bec2be"><i class="fas fa-save"></i></a>
  <span><?php echo _e('That icon is only visible if something have been updated in the grid without to be saved (like resize or move)' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Be carefull, there is no advertisement window.' , 'css-magician'); ?></span><br><br>
  <a title="Language Dupplicate" class="gridstack-rowhelpicon gridstack-languages"><i class="fas fa-flag"></i></a>
  <span><?php echo _e('Open the window to dupplicate the grid for all languages you choose.' , 'css-magician'); ?></span><br><br>
  <a title="Publish" class="gridstack-rowhelpicon gridstack-publish" style="color:#0070ff"><i class="fas fa-user-slash"></i></a>
  <a title="Publish" class="gridstack-rowhelpicon gridstack-publish" style="color:#0070ff"><i class="fas fa-user"></i></a>
  <span><?php echo _e('Publish the Grid or not.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('If the icon has no slash, the Grid is published and so your visitors can to see it.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('If the icon has a slash, the Grid is not published so your visitors can not to see it and you can work on it.' , 'css-magician'); ?></span><br><br>
  <a title="Remove row" class="gridstack-rowhelpicon gridstack-remove" style="color:#f53535"><i class="fas fa-trash"></i></a> 
  <span><?php echo _e('Click to remove the Grid.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('THE WIDGET CONTAINER TOOLBAR' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('When the mouse is over a widget container the toolbar appears.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When the mouse is on one side of the container, you can resize it (left click + mouse mouve)' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When the mouse is on the container, you can drag it to another place (left click + mouse move).' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('When you drag or resize a widget container, you will see a blue dotted rectangle that indicate where the container can to be located.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('In normal mode and to be responsive, the location are predefined in boostrap system.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So you can not place or resize the container exactly as you want because the grid editor has a collisions system.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('To override the collisions system and place the container exactly as you want, it is necessary to modify the type of the container.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('To do that, open the widget container setting:' , 'css-magician'); ?><a title="Background Settings" class="ge-colhelpicon gridstack-column-settings"><i class="fas fa-cog" style="color:#3cbfcc;"></i></a></span><br>
  <span><?php echo _e('In the widget container settings update the widget type to: Float Widget.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('It is also possible to update the z-index of the widget container, to do exactly what you want.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"><?php echo _e('Warning: With the float mode, the position of the element is not in bootstrap system.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('The position is absolute and in percentage of his container. So, in responsive mode the location may be inapropriate.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('In that case, it will be necessary to use media queries with the Css Editor/Inspector to position the container.' , 'css-magician'); ?></span><br><br>
  <a title="Background Settings" class="ge-colhelpicon gridstack-column-settings"><i class="fas fa-cog" style="color:#3cbfcc;"></i></a>
  <span><?php echo _e('Open the window to update the widget container settings.' , 'css-magician'); ?></span><br><br>
  <a title="Add Widget" class="ge-colhelpicon"><i class="fas fa-magic"></i></a>
  <span><?php echo _e('Add a Widget in the column. Each widget has is own help.' , 'css-magician'); ?></span><br><br>
  <a title="Paste Cloned Widget" class="ge-colhelpicon gridstack-paste-widget"><i class="fas fa-copy"></i></a>
  <span><?php echo _e('Paste in that container a previously copied widget.' , 'css-magician'); ?></span><br><br>
  <a title="Remove column" class="ge-colhelpicon"><i class="fas fa-trash" style="color:#f53535;"></i></a>
  <span><?php echo _e('Remove the widget container.' , 'css-magician'); ?></span><br><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('THE WIDGET TOOLBAR' , 'css-magician'); ?></span><br>
  <br>
  <div><?php echo _e(' When the mouse is over a column containing a widget, the widget toolbar appears.' , 'css-magician'); ?>
    <div class="editorToolBarHelp">
      <span class="elementButton fa fa-times-circle"></span>
      <span class="elementButton far fa-copy" title="Copy"></span>
      <span class="elementButton fas fa-edit fa-target"></span>
    </div>
  </div>
  <br>
  <br>
  <div style="margin-top:10px;"><span class="fa fa-times-circle column-toolbar-help"></span>
    <span><?php echo _e(' Remove the widget.' , 'css-magician'); ?> </span>
  </div>
  <br>
  <div><span class="far fa-copy column-toolbar-help" title="Copy"></span>
    <span><?php echo _e(' Copy the widget. The copied widget can be paste in the column settings toolbar:' , 'css-magician'); ?><a title="Paste Cloned Widget" class="ge-colhelpicon gridstack-paste-widget"><i class="fas fa-copy"></i></a></span>
  </div>
  <br>
  <div><span class="fas fa-edit fa-target column-toolbar-help"></span>
    <span><?php echo _e(' Open the widget editor window.' , 'css-magician'); ?> </span>
  </div>
  <br>
  <br>
  <span style="font-weight: bold;"><?php echo _e('Warning: No need to click on the Stylizer Save button.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('The grid editor has is own backup system.' , 'css-magician'); ?></span><br>
  <br><br>
</body>

</html>