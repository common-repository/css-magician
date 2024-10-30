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
  <title>help_inspector</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('JAVASCRIPT EDITOR' , 'css-magician'); ?></span></h1>
  <br><br>
  <span style="font-size:24px; color:red;"><?php echo _e(' Be Careful' , 'css-magician'); ?></span>: <?php echo _e(' To use the Javascript editor, it is necessary to be an advanced user and to know what you do.' , 'css-magician'); ?><br>
  <?php echo _e(' A bad javascript code can block your website and/or created errors.' , 'css-magician'); ?><br>
  <?php echo _e(' Never add a code (found on internet) if you do not know what you do. Because javascript code can contains malicious code.' , 'css-magician'); ?><br>
  <?php echo _e(' Css Magcian has got a file named custom.js file located in: wp-content/plugins/css-magician/assets/js/custom.js' , 'css-magician'); ?><br>
  <?php echo _e(' This file is automatically loaded when you open the Javascript editor.' , 'css-magician'); ?><br><br>
  <?php echo _e(' Click on "Save" button to update and save your custom.js file.' , 'css-magician'); ?><br><br>
  <?php echo _e(' You can use the editor as all editors with standard shortcuts.' , 'css-magician'); ?>
  <br>
  <?php echo _e(' CTRL+SPACE = Open the auto-completion box.' , 'css-magician'); ?>
  <br>
  <?php echo _e(' CTRL+Z = Undo' , 'css-magician'); ?>
  <br>
  <?php echo _e(' CTRL+Y = Redo' , 'css-magician'); ?>
  <br>
  <?php echo _e(' CTRL+A = Select all' , 'css-magician'); ?>
  <br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Css Magician Used Scripts' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('Css Magician use the following scripts:' , 'css-magician'); ?></span><br>
  <span><a href="https://greensock.com/gsap/" target="_blank"><?php echo _e('Greensock GSAP 3.1 with splittext, morphsvgplugin.' , 'css-magician'); ?></a></span><br>
  <span><a href="https://anijs.github.io/" target="_blank"><?php echo _e('Anijs' , 'css-magician'); ?></a></span><br>
  <span><a href="https://github.com/matteobruni/tsparticles" target="_blank"><?php echo _e('tsparticles.js' , 'css-magician'); ?></a></span><br>
  <span><a href="https://swiperjs.com/" target="_blank"><?php echo _e('swiper' , 'css-magician'); ?></a></span><br><br>
  <span><?php echo _e(' If you are an advanced user, it is easy to use them.' , 'css-magician'); ?></span><br>
  <br>
  <br>
</body>

</html>