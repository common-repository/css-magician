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
  <title>Css Magician Particles Widget Help</title>
</head>

<body>
  <h1 style=" text-align: center;"><span style="font-family: Impact;"><?php echo _e('PARTICLES WIDGET' , 'css-magician'); ?></span></h1>
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
  <span><?php echo _e('image Url: If you choose an image shape, that field will replace the particle by your image. It is necessary to type the entire path of the image.' , 'css-magician'); ?></span><br><br>
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
  <span><?php echo _e('Hover: The particles can interact if the mouse is over a particle.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Click: The particles can interact if the user click on a particle.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Hover Mode: 3 modes. Grab, Bubble, Repulse.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('Click Mode: 3 modes. Push, Bubble, Repulse.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('The grab mode creates connecting lines between your point of hover or click and nearby particles within a specific distance that you set yourself. This mode only works with the hover event' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('The bubble mode changes the size and opacity of all particles which are inside a specific distance for a duration that you decide. The repulse mode makes the particle go away from the location of the click. Both these modes can be added to either hover or click. The duration is applicable only on the click events in both cases.' , 'css-magician'); ?></span><br><br>
  <span><?php echo _e('The repulse mode makes the particle go away from the location of the click. Both these modes can be added to either hover or click. The duration is applicable only on the click events in both cases.' , 'css-magician'); ?></span><br><br>
  <br><br>
  <br>
</body>

</html>