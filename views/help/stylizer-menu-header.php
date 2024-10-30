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
    <title>Stylizer Menu Header</title>
  </head>
  <body>
    <i class="fas fa-history" title="<?php echo _e('Historic' , 'css-magician'); ?>"></i> 
    <?php echo _e('1) Click on the Historic Icon to open the historic of all updates. Each time you click on the SAVE button to update an element an history is created.' , 'css-magician'); ?><br>
    <?php echo _e('If you select an history line, you come back to that history and so the updates that come after are ignored.' , 'css-magician'); ?><br>
    <?php echo _e('A second click on the History icon close the historic.' , 'css-magician'); ?><br><br>
    <i class="fab fa-css3" title="<?php echo _e('CSS Inspector/Editor' , 'css-magician'); ?>"></i>
    <?php echo _e('2) Click on CSS Inspector/Editor icon to open the CSS Inspector/Editor.' , 'css-magician'); ?><br><br>
    <i class="fab fa-js " title="<?php echo _e('JS Editor' , 'css-magician'); ?>"></i> <?php echo _e('3) Click on JS Editor icon to open the Javascript Editor' , 'css-magician'); ?><br><br>
  </body>
</html>
