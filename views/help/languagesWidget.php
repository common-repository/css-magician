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
    <title>Css Magician Languages Dupplicate</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('CSS MAGICIAN LANGUAGES DUPPLICATE' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('All your availables languages are displayed.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('The current language is desactivated and can not be selected.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('Select all the languages for which you want to dupplicate the Grid.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('The current grid will be cloned and added in each selected language.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('After it will be necessary to change the language of your pages to do the translations.' , 'css-magician'); ?></span><br><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('Warning: Each time you click on the save button, the current grid is entirely cloned.' , 'css-magician'); ?></span><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('So, if you already have that grid already translated in others languages. It will be replaced and it will be necessary to redo the translation.' , 'css-magician'); ?></span><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('So, you normally use the languages dupplicate when your work is out and normally only one time.' , 'css-magician'); ?></span><br><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('If you only want to add or translate a widget, simply use the widget copy in the widget tool bar.' , 'css-magician'); ?></span><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('Change the language of the page, add a widget container in the grid and paste the copied widget in it.' , 'css-magician'); ?></span><br><br>
    <br>
    <br>
    <br>
  </body>
</html>
