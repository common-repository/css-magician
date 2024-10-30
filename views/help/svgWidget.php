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
    <title>Css Magician SVG Widget Help</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('SVG WIDGET' , 'css-magician'); ?></span></h1>
    <span><?php echo _e('Choose SVG: Open the SVG Gallery.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('In the SVG Gallery, if you click on the image of the SVG, the SVG code will be inserted in the SVG Editor and replace all others codes.' , 'css-magician'); ?></span><br>
    <i class="fas fa-file-import"></i><span><?php echo _e(' if you click on that icon the SVG code is inserted at the end of the editor. You preserve all others codes.' , 'css-magician'); ?></span><br>
    <span><?php echo _e('It is usefull if you want to add severals SVG.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Upload SVG: Open the SVG Uploader. If a SVG Gallery is open. It will be closed and re-open to display the new uploaded file.' , 'css-magician'); ?></span><br><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('Be carefull when you donwload SVG files on internet. Because it can contains malicious code.' , 'css-magician'); ?></span><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('Css Magician has a sanitizer for SVG file. So, normally it can remove the malicious code. But it is not 100% sure.' , 'css-magician'); ?></span><br>
    <span  style="font-size:24px; color:red;"><?php echo _e('So, verifiy before to save, there is no malicious code in your SVG Code.' , 'css-magician'); ?></span><br><br>
    <span><?php echo _e('Click on the trash icon to completely remove the SVG.' , 'css-magician'); ?></span><br><br>
    <span style="font-size:20px; color:blue;"><?php echo _e('Remember: for all others properties, you can use the Css Magician Stylizer to update the style of an element.' , 'css-magician'); ?></span><br><br>
    <?php include(CSSM_PLUGIN_DIR_PATH.'views/help/animatorWidget.php'); ?>
    <br>
    <br>
    <br>
    <br>
  </body>
</html>
