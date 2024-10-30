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
 <span  style="font-size:24px; color:green;"><?php echo _e('Animator' , 'css-magician'); ?></span><br><br>
 <span><?php echo _e('Choose the animation type.' , 'css-magician'); ?></span><br><br>
 <span><?php echo _e('in the right of the page will appears two indicators:' , 'css-magician'); ?></span><br>
 <span><b style="color:blue;"><?php echo _e('trigger' , 'css-magician'); ?></b><?php echo _e(' Is fixed at the center of the page.' , 'css-magician'); ?></span><br>
 <span><b style="color:green;"><?php echo _e('start' , 'css-magician'); ?></b></span><br>
 <span><?php echo _e('When trigger is aligned with start, the animation run.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('Scroll Value will vertically move the start indicator.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('When Scroll Value is at 0, the animation run immediatly when the page is loaded.' , 'css-magician'); ?></span><br><br>
 <span><?php echo _e('Duration is the speed of the animation.' , 'css-magician'); ?></span><br><br>
 <span><?php echo _e('You can to choose a predifined easing function.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('And you can add your own ease code if you are an advanced user.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('But be sure of what you do, because a bad code can crash the animation.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('To learn more on easing function, click on (learn more on the ease function), you will be redirected to the gsap ease visualizer.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('If you want to define your own ease function, simply copy the ease code (only code after ease:) in the ease code field.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('example for the elastic ease in the gsap ease visualizer you have: gsap.to( graph, { duration: 2.5,ease: "elastic. out( 1, 0.3)", y: -500 });' , 'css-magician'); ?></span><br>
 <span><?php echo _e('Simply copy:elastic. out( 1, 0.3)' , 'css-magician'); ?></span><br>
    <br>
    <span><b style="color:red;"><?php echo _e('Be carefull: When you have severals animations, it can to be difficult to see the real result of all animations playing in the same time.' , 'css-magician'); ?></b></span><br>
    <span><b style="color:red;"><?php echo _e('Perhaps some of theme have refresh properties and others not. Or perhaps the scroll position is not the correct position for all the animations.' , 'css-magician'); ?></b></span><br>
    <span><b style="color:red;"><?php echo _e('In that case, simply reload the page, to see the real result.' , 'css-magician'); ?></b></span><br>
 
    <br>
    <br>
 