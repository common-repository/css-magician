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
  <title>Column Configurator Editor</title>
</head>
<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('WIDGET CONTAINER SETTINGS' , 'css-magician'); ?></span></h1>
  </span><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Widget Type' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('In normal mode and to be responsive, the location are predefined in boostrap system.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So you can not place or resize the container exactly as you want because the grid editor has a collisions system.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('To override the collisions system and place the container exactly as you want, it is necessary to modify the type of the container.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('To do that update the widget type to: Float Widget.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('It is also possible to update the z-index of the widget container, to do exactly what you want.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold;"><?php echo _e('Warning: With the float mode, the position of the element is not in bootstrap system.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('The position is absolute and in percentage of his container. So, in responsive mode the location may be inapropriate.' , 'css-magician'); ?></span><br>
  <span style="font-weight: bold;"><?php echo _e('In that case, it will be necessary to use media queries with the Css Editor/Inspector to position the container.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Background Color' , 'css-magician'); ?></span><br>
  <br>
  <span style="font-weight: bold;"> <?php echo _e('Gradient Color' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('When you validate: Use Gradient, the Gradient builder will be displayed.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('By clicking on the color field, you can add color selector/picker.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('When the mouse if over a color picker (the cursor icon is updated). And can move the color picker with left click and mouse move.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('You can delete a color selector by clicking on the cross on top of it.' , 'css-magician'); ?></span><br>
  <span class="hps"><?php echo _e('You can choose the gradient type and gradient position.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Background Image' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('Choose Background Image: Open the images gallery. Click on the image you want to display.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('The image name will be displayed in the field. Click on the trash icon to remove the image.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Upload a background Image: Open the images uploader.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('If the image gallery is open, it will be automatically close. So, it will be necessary to re-open it to select the image.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Background Size: ' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Auto: Default value. The background image is displayed in its original size.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Cover: Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Contain: Resize the background image to make sure the image is fully visible.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Size of container: Resize the background image to the image container size. So, the image can to be disformed.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Background Repeat: ' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Repeat: Default value. The image is repeated in X (horizontally) and Y (vertically).' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- No Repeat: The image is not repeated.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Repeat X: The image is only repeated horizontally.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('- Repeat Y: The image is only repeated vertically.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Background Position: sets the starting position of the image.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Background Blend Mode: defines the blending mode of each background layer (color and/or image)' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So it is necessary that a background colour or another background image be defined.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Background Video' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('Choose Background Video: Open the videos gallery. Click on the video you want to display.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('The video name will be displayed in the field. Click on the trash icon to remove the image.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Upload a background Video: Open the videos uploader. Only mp4 file is allowed.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('If the video gallery is open, it will be automatically close. So, it will be necessary to re-open it to select the video.' , 'css-magician'); ?></span><br><br>
  <span style="font-weight: bold; color:green;"><?php echo _e('Parallax' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('Use Simple Css Parallax: The image background is fixed.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So when you scroll the page, others parts of the background become visibles.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Use Real Parallax: That feature use scrollmagic and gsap script.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('So in the right of the page will appears three indicators:' , 'css-magician'); ?></span><br>
  <span><b style="color:blue;"><?php echo _e('trigger' , 'css-magician'); ?></b><?php echo _e(' Is fixed at the center of the page.' , 'css-magician'); ?></span><br>
  <span><b style="color:green;"><?php echo _e('start' , 'css-magician'); ?></b></span><br>
  <span><b style="color:red;"><?php echo _e('end' , 'css-magician'); ?></b></span><br>
  <span><?php echo _e('When trigger is aligned with start, the parallax is launched.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When trigger is aligned with end, the parallax is ended.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Offset to trigger the parallax: define the start position. It will vertically move the start indicator.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Parallax Duration: define the end indicator. It will vertically move the end indicator.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('When Offset to trigger the parallax Value is at 0, the animation run immediatly when the page is loaded.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Parallax Y and Parallax X defines the move in X and Y axes.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('To invert the move add a negative value.' , 'css-magician'); ?></span><br>
  <br><br>
</body>
</html>