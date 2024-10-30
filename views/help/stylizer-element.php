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
  <title>Stylizer Element Selected</title>
</head>

<body>
  <div style="text-align: left;"> <span style="font-weight: bold; font-style: italic; color:blue;font-size:24px;"> <?php echo _e('SELECT AN ELEMENT TO UPDATE STYLE' , 'css-magician'); ?></span></div>
  <br>
  <div style="text-align: left;"> <?php echo _e(' Move the mouse over your website page, a blue rectangle appears to indicate on what element you are.' , 'css-magician'); ?><br>
    <div style="text-align: left;"> <?php echo _e(' A click on an element selects it and a red dotted rectangle appears.' , 'css-magician'); ?><br>
      <?php echo _e(' The informations about the selected item are displayed in CSS MAGICIAN in a red square under the tab ' , 'css-magician'); ?>
      <span style="font-weight: bold;"> <?php echo _e('SELECTED ELEMENT' , 'css-magician'); ?></span>.<br>
      <?php echo _e('Informations are given in the form of: ' , 'css-magician'); ?>
      <span style="font-weight: bold;">TAG HTML #ID CLASSES</span><br>
      <?php echo _e('On the previous image, the selected item has html tag ' , 'css-magician'); ?> <span style="font-style: italic; font-weight: bold;">DIV</span>,
      <?php echo _e('there is no ' , 'css-magician'); ?><span style="font-style: italic; font-weight: bold;">ID </span>
      <?php echo _e('and it is defined with the class: ' , 'css-magician'); ?><span style="font-weight: bold; font-style: italic;">container</span><br>
      <br>
    </div>
    <div style="text-align: left;"> <?php echo _e(' Sometimes it can to be difficult to select a parent or child element of the selected element.' , 'css-magician'); ?><br>
      <?php echo _e(' So, 5 parents and 5 childrens (if they exist) are displayed.' , 'css-magician'); ?><br>
      <?php echo _e(' The real selected element have always a red background.' , 'css-magician'); ?><br>
      <?php echo _e(' But you can select a parent or a child by clicking on the button you want.' , 'css-magician'); ?><br>
      <?php echo _e(' In that case the selected element is updated and the background color of the button is now orange/brown.' , 'css-magician'); ?><br>
      <?php echo _e(' Now you can do the update you want on the new selected element.' , 'css-magician'); ?><br>
      <br>
    </div>
    <div style="text-align: left;"> <?php echo _e(' The selected element selectors infos are always displayed on top of SELECTED ELEMENT tab.' , 'css-magician'); ?><br>
      <?php echo _e(' Like that you can always to see what element is selected' , 'css-magician'); ?><br>
      <br>
    </div>
    <span style="font-weight: bold;"> <?php echo _e('Only update that element' , 'css-magician'); ?></span><br>
    <span class="" lang="{$iso|escape:'htmlall':'UTF-8'}"><span class="hps"> <?php echo _e('An element is usually styled with classes associations and/or html tags and/or ID. Differents elements that have identicals classes resume styles of these classes.' , 'css-magician'); ?><br>
        <?php echo _e('However, it is common to want to define a style of only one element.In this case, it is necessary to validate this checkbox.' , 'css-magician'); ?></span><br>
      <br>
      <span class="hps"><?php echo _e('To know at any time what you have selected, this will be indicated in red in the tab title' , 'css-magician'); ?></span><br>
      <span style="font-weight: bold;"><?php echo _e('UPDATE BY CLASS' , 'css-magician'); ?></span> <?php echo _e(' or ' , 'css-magician'); ?> <span style="font-weight: bold;">
        <?php echo _e('UPDATE BY ELEMENT' , 'css-magician'); ?></span> <br>
      <br>
      <span style="font-weight: bold;"><?php echo _e('- Radio buttons:' , 'css-magician'); ?></span> <span style="font-weight: bold; font-style: italic;">normal
        - ::before - :: after</span><br>
      <span id="result_box" class="" lang="{$iso|escape:'htmlall':'UTF-8'}"><span class="hps"><?php echo _e('Normally all the elements of a website are directly defined in the html code. By default, the Normal radio button is validated' , 'css-magician'); ?></span><br>
        <span class="hps"><?php echo _e('However some elements called "Pseudo Element" are not defined in the html code but in the css code.' , 'css-magician'); ?></span><br>
        <span class="hps"><?php echo _e('These pseudo elements can appear on buttons with an icon before or after the text. When you fly over an element with a pseudo element you will not be able to select it.' , 'css-magician'); ?></span><br><br>
        <span class="hps"><span style="font-style: italic;"><?php echo _e('Example' , 'css-magician'); ?></span>:</span>
        <span class="hps"><?php echo _e('You fly over a text and just before there is an icon that you can not select. You will be able to change the style of the text but not the icon.' , 'css-magician'); ?></span><br>
        <span class="hps"><?php echo _e('The icon in front of the text is probably a pseudo element' , 'css-magician'); ?></span>
        <span style="font-weight: bold;" class="hps">:: before</span><span>.</span><br>
        <span class="hps"><?php echo _e('To change the styles of that icon, it will be necessary to validate the radio button ' , 'css-magician'); ?></span> <span style="font-weight: bold;" class="hps">::
          before</span><span class="">.</span><br><br>
        <span class="hps"><?php echo _e('To see if the selected element use a pseudo element, you can use the CSS Magician Inspector/Editor or the developper tool of your browser.' , 'css-magician'); ?></span><br><br>
        <span style="font-weight: bold;">:Hover</span><br>
        <span class="hps"><?php echo _e('You can validate the Hover property if you want to apply your changes only when the mouse if over the element.' , 'css-magician'); ?></span>
        <br>
        <br>
</body>

</html>