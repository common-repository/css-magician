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
    <title>Section Configurator Editor</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('Grid Settings' , 'css-magician'); ?></span></h1>
  </span><br>
  <span  style="font-weight: bold; color:green;"><?php echo _e('Grid Margins' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('Choose the external margins of the Grid. By default the top and bottom margins are define to 10px.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('Valid All Margins to update all the margins at the same time.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('For the Left and Right margins, leave the field empty to have automatic margins. Like that the Grid will be horizontally centered.' , 'css-magician'); ?></span><br><br>
  <span  style="font-weight: bold; color:green;"><?php echo _e('Widget Margins' , 'css-magician'); ?></span><br>
  <br>
  <span><?php echo _e('It is the margins between each Widget Container.' , 'css-magician'); ?></span><br>
  <span><?php echo _e('By default there is no margins.' , 'css-magician'); ?></span><br><br>
  <span  style="font-weight: bold; color:green;"><?php echo _e('Grid Size' , 'css-magician'); ?></span><br>
<br>
<span><?php echo _e('Grid Width in percent: If you choose the fullwidth, that field has no effect.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Grid Height in pixels: If you leave the field empty, the height will be calculated automatically.' , 'css-magician'); ?></span><br><br>
<span  style="font-weight: bold; color:green;"><?php echo _e('Background Color' , 'css-magician'); ?></span><br>
<br>
<span  style="font-weight: bold;"> <?php echo _e('Gradient Color' , 'css-magician'); ?></span><br>  
<span  class="hps"><?php echo _e('When you validate: Use Gradient, the Gradient builder will be displayed.' , 'css-magician'); ?></span><br>
<span  class="hps"><?php echo _e('By clicking on the color field, you can add color selector/picker.' , 'css-magician'); ?></span><br>
<span  class="hps"><?php echo _e('When the mouse if over a color picker (the cursor icon is updated). And can move the color picker with left click and mouse move.' , 'css-magician'); ?></span><br>
<span  class="hps"><?php echo _e('You can delete a color selector by clicking on the cross on top of it.' , 'css-magician'); ?></span><br>
<span  class="hps"><?php echo _e('You can choose the gradient type and gradient position.' , 'css-magician'); ?></span><br><br>
<span  style="font-weight: bold; color:green;"><?php echo _e('Background Image' , 'css-magician'); ?></span><br>
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
<span  style="font-weight: bold; color:green;"><?php echo _e('Background Video' , 'css-magician'); ?></span><br>
<br>
<span><?php echo _e('Choose Background Video: Open the videos gallery. Click on the video you want to display.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('The video name will be displayed in the field. Click on the trash icon to remove the image.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Upload a background Video: Open the videos uploader. Only mp4 file is allowed.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('If the video gallery is open, it will be automatically close. So, it will be necessary to re-open it to select the video.' , 'css-magician'); ?></span><br><br>
<span  style="font-weight: bold; color:green;"><?php echo _e('Background Divider' , 'css-magician'); ?></span><br>
<br>
<span><?php echo _e('You can add a TOP and/or BOTTOM Divider. Simply click on the Top or Bottom button.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Choose the shape of the divider. To remove a previoulsy added divider, choose: None.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Choose the color of the divider.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Choose the width of the diviser. If the field is empty, the width will be 1300 of the viewbox.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Choose the height in pixels of the diviser. If the field is empty, the height will be 30px.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Horizontal flip: Flip the divider horizontaly.' , 'css-magician'); ?></span><br><br>
<span  style="font-weight: bold; color:red;"><?php echo _e('Warning: When you add divider, it is possible to visualy have a small space (1 or 2 pixels) between the divider and the grid sides.' , 'css-magician'); ?></span><br>
<span  style="font-weight: bold; color:red;"><?php echo _e('It is due to the borders used to see the grid editor. But this space will be not visible in the final result.' , 'css-magician'); ?></span><br>
<br>
<span  style="font-weight: bold; color:green;"><?php echo _e('Background Particles' , 'css-magician'); ?></span><br>
<br>
<span><?php echo _e('Add a Particles Background: Choose to display or not a background particles effects.' , 'css-magician'); ?></span><br><br>
<span style="font-weight: bold;"><?php echo _e('Particles' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Number: Particles number value' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('enable Density: If enabled, Density determines the number of particles that will be packed together in a given area.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('density value: value of the area for density.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('color: Color of the shape.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('stroke width: size of the stroke.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('stroke color: color of the stroke.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('polygon Nb sides: If you choose a polygon shape, you can increase/decrease the number of sides.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('particle Type: Shape of the particles. If you choose a star shape, the polygon Nb sides will be automatically updated to 5.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('image Width: If you choose an image shape, that field will update the size of the image' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('image Height: If you choose an image shape, that field will update the size of the image' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('image Height: If you choose an image shape, that field will update the size of the image' , 'css-magician'); ?></span>
<span><?php echo _e('image Url: If you choose an image shape, that field will replace the particle by your image. It is necessary to type the entire path of the image.' , 'css-magician'); ?></span>
<span style="font-weight: bold;"><?php echo _e('Particles Size' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Particle size: Size of the particles' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('size Random: If enabled the size of the particles will be a random number between 0 and the particle size value.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('size Anim: If enabled the size of the particles will be animated from 0 to particle size value.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('size Anim Speed: Speed of the animation.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('min. size Anim: Minimum size for the animation.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('size Anim Sync: If enabled will change the size of all elements simultaneously.' , 'css-magician'); ?></span><br><br>
<span style="font-weight: bold;"><?php echo _e('Opacity' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Opacity random: if enabled the opacity will be randomly added.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Opacity value: The opacity value from 0 (invisible) to 1.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Opacity anim Anim: If enabled the opacity will be animated from 0 to opacity value.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Opacity anim speed: Speed of the animation.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('min. opacity Anim: Minimum size for the animation.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('opacity Anim Sync: If enabled will change the opacity of all elements simultaneously.' , 'css-magician'); ?></span><br><br>
<span style="font-weight: bold;"><?php echo _e('Particles Lines' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Line Linked: if enabled the particles will be linked by a line.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Line Distance: this property specifies the maximum distance up to which lines will be drawn.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Line Opacity: Opacity of the lines.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Line Width: Lines thickness.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Line Color: Color of the lines.' , 'css-magician'); ?></span><br><br>
<span style="font-weight: bold;"><?php echo _e('Particles Moves' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Enable: if enabled the particles will move in the specified direction.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Direction: Direction of the move.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Random: Random move of the particles.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Straight: the particles move straight.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Speed: Speed of the move.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Out Mode: If out mode, The particles collision is desiabled. If bounce mode the collision is enabled.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('move Attract: Once you enable attraction, the particles will change their speed whenever they are in the close vicinity of other particles. The change can be positive or negative depending on the value of other parameters. The attraction in each direction is inversely proportional to the value of the respective parameters, rotateX and rotateY' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Attract Rotate X: Rotate X value for the Attract mode.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Attract Rotate Y: Rotate Y value for the Attract mode.' , 'css-magician'); ?></span><br><br> 
<span style="font-weight: bold;"><?php echo _e('Interactivity' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Z-index: To allow the interaction between user and particles it is necessary to detect the mouse events. So, it is necessary the particles canvas to be on top of others elements. For that you can increase the zindex.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Hover: The particles can interact if the mouse is over a particle.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Click: The particles can interact if the user click on a particle.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Hover Mode: 3 modes. Grab, Bubble, Repulse.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Click Mode: 3 modes. Push, Bubble, Repulse.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('The grab mode creates connecting lines between your point of hover or click and nearby particles within a specific distance that you set yourself. This mode only works with the hover event' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('The bubble mode changes the size and opacity of all particles which are inside a specific distance for a duration that you decide. The repulse mode makes the particle go away from the location of the click. Both these modes can be added to either hover or click. The duration is applicable only on the click events in both cases.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('The repulse mode makes the particle go away from the location of the click. Both these modes can be added to either hover or click. The duration is applicable only on the click events in both cases.' , 'css-magician'); ?></span><br><br>
<span  style="font-weight: bold; color:green;"><?php echo _e('Parallaxe' , 'css-magician'); ?></span><br>
<br>
<span><?php echo _e('Use Simple Css Parallax:  The image background is fixed.' , 'css-magician'); ?></span><br>
<span><?php echo _e('So when you scroll the page, others parts of the background become visibles.' , 'css-magician'); ?></span><br><br>
<span><?php echo _e('Use Real Parallax: That feature use scrollmagic and gsap script.' , 'css-magician'); ?></span><br>
<span><?php echo _e('So in the right of the page will appears three indicators:' , 'css-magician'); ?></span><br>
 <span><b style="color:blue;"><?php echo _e('trigger' , 'css-magician'); ?></b><?php echo _e(' Is fixed at the center of the page.' , 'css-magician'); ?></span><br>
 <span><b style="color:#c4a608;"><?php echo _e('start' , 'css-magician'); ?></b></span><br>
 <span><b style="color:#ff6969;"><?php echo _e('end' , 'css-magician'); ?></b></span><br>
 <span><?php echo _e('When trigger is aligned with start, the parallax is launched.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('When trigger is aligned with end, the parallax is ended.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('Offset to trigger the parallax: define the start position. It will vertically move the start indicator.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('Parallax Duration: define the end indicator. It will vertically move the end indicator.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('When Offset to trigger the parallax Value is at 0, the animation run immediatly when the page is loaded.' , 'css-magician'); ?></span><br  <span><?php echo _e('Parallax Y and Parallax X defines the move in X and Y axes.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('To invert the move add a negative value.' , 'css-magician'); ?></span><br>
<br><br>
</body>
</html>
