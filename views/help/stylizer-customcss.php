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
    <title>Stylizer Custom Css</title>
  </head>
  <body>
    <h1  style=" text-align: center;"><span  style="font-family: Impact;"><?php echo _e('Custom CSS' , 'css-magician'); ?></span></h1>
    </span><br>   
    <span  style="font-weight: bold; color:green;"><?php echo _e('CUSTOM CSS' , 'css-magician'); ?> </span><br>
    <br>
 <span><?php echo _e('This textarea field allows you to enter all custom css properties you want to apply to the selected element.' , 'css-magician'); ?></span><br>
 <span><?php echo _e('But it is easier and more powerfull to use the CSS Magician Inspector/Editor by clicking on the icon: ' , 'css-magician'); ?>
    <i class="fab fa-css3" title="<?php echo _e('CSS Inspector/Editor' , 'css-magician'); ?>"></i>
    <?php echo _e(' in the header of Css Magician Stylizer.' , 'css-magician'); ?>
 </span><br><br> 
 <span><?php echo _e('However, if you prefer to use the Custom Css field, simply enter the properties and values as normal css, separated by semicolons.' , 'css-magician'); ?></span<br>
      <br><br>
      <span  style="font-weight: bold; font-style: italic;"><?php echo _e('Example:' , 'css-magician'); ?></span>
      <span  ><?php echo _e('You want a gradient color.' , 'css-magician'); ?></span><br>
      <span  ><?php echo _e('There are many sites on the internet for you to generate your code.' , 'css-magician'); ?></span><br>
      <span  ><?php echo _e('Go for example:' , 'css-magician'); ?></span>
      <span  style="font-weight: bold;"  >http://www.colorzilla.com/gradient-editor/</span><br>
      <span  ><?php echo _e('Copy the generated code for example:' , 'css-magician'); ?></span><br>
      <br><span>
    /* Permalink - use to edit and share this gradient:
    http://colorzilla.com/gradient-editor/#1e5799+0,2989d8+39,207cca+68,7db9e8+100
    */<br>
    background: #1e5799; /* Old browsers */<br>
    background: -moz-linear-gradient(top,&nbsp; #1e5799 0%, #2989d8 39%, #207cca
    68%, #7db9e8 100%); /* FF3.6-15 */<br>
    background: -webkit-linear-gradient(top,&nbsp; #1e5799 0%,#2989d8
    39%,#207cca 68%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */<br>
    background: linear-gradient(to bottom,&nbsp; #1e5799 0%,#2989d8 39%,#207cca
    68%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */<br>
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#1e5799",
    endColorstr="#7db9e8",GradientType=0 ); /* IE6-9 */<br>
    <br>
    &nbsp; <?php echo _e('Paste the code in the textearea Custom CSS and click on Update CSS button.' , 'css-magician'); ?></span>.<br>
    <br>
    <span  ><?php echo _e('If you do not see any changes, it will be necessary to add' , 'css-magician'); ?>
            <span  style="font-weight: bold;"> !important</span><span  ><?php echo _e(' value to each properties (just before the semicolon) like this:' , 'css-magician'); ?></span>
             <br>
        <br>      
    background: #1e5799<span  style="color:red;"> !important</span>; /* Old
    browsers */<br>
    background: -moz-linear-gradient(top,&nbsp; #1e5799 0%, #2989d8 39%, #207cca
    68%, #7db9e8 100%) <span  style="color:red;"> !important</span>; /*
    FF3.6-15 */<br>
    background: -webkit-linear-gradient(top,&nbsp; #1e5799 0%,#2989d8
    39%,#207cca 68%,#7db9e8 100%) <span  style="color:red;"> !important</span>;
    /* Chrome10-25,Safari5.1-6 */<br>
    background: linear-gradient(to bottom,&nbsp; #1e5799 0%,#2989d8 39%,#207cca
    68%,#7db9e8 100%) <span  style="color:red;"> !important</span>; /* W3C,
    IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */<br>
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#1e5799",
    endColorstr="#7db9e8",GradientType=0 ) <span  style="color:red;">
      !important</span>; /* IE6-9 */<br>
    <br>
    <span  ><?php echo _e('Do not forget to click the SAVE button to save your changes.' , 'css-magician'); ?></span><br>
    <br>
 <br>  
  </body>
</html>
