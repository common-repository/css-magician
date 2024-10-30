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
<!DOCTYPE html>
<html>

<head>
  <meta content="text/html; charset=UTF-8" http-equiv="content-type">
  <META http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title><?php echo _e('Help file for css magician','css-magician');?></title>
</head>

<body>
  <h1 style="text-align: center;"><span id="magician_title" style="font-family: Impact;">CSS MAGICIAN </span></h1>
  <h1 style="text-align: center;"><?php echo _e('The Ultimate Themes Configurator','css-magician');?></h1><br>
  <?php echo _e('To access the interface of CSS MAGICIAN, you need to be logged as an administrator.','css-magician');?>
  <?php echo _e('On your store front office, CSS MAGICIAN Styles Editor (blue tab at the top right) is not deployed.','css-magician');?><br>
  <?php echo _e('Only an employee from the site and having the Css Magician usage rights can see and use CSS MAGICIAN.','css-magician');?><br>
 <?php echo _e('The module use your IP address to know if you are an administrator or not.','css-magician');?><br>
 <?php echo _e('So if your IP change, it will be necessary to update your IP address registered when you saved your theme settings.','css-magician');?><br>
 <?php echo _e('To do that, login on back office, go to Css Magician module configuration and save the settings of the theme you want to update.','css-magician');?><br>
  <br>
  <br>
 <?php echo _e('As CSS MAGICIAN is not deployed, you can use and navigate your site normally.','css-magician');?>
  <br>
 <?php echo _e('When you click on the blue tab, CSS MAGICIAN is activated.','css-magician');?>
  <br>
 <?php echo _e('The links to your site are disabled but only for you. (Otherwise it would not be possible to change the elements)','css-magician');?>
  <br>
  <br>
 <?php echo _e('By moving the mouse over the elements of your site, a blue rectangle appears showing the item you fly over.','css-magician');?>
  <br>
 <?php echo _e('By clicking on an element a red dotted rectangle appears. So, the element is selected.','css-magician');?>
  <br>
 <?php echo _e('You can now update the style of the selected element by using all the Css Magician tools.','css-magician');?>
  <br>
 <?php echo _e('Click on the Css Magician tabs (SELECTED ELEMENT, TEXT, BORDER, BACKGROUND, etc...) to use the tools.','css-magician');?>
  <br>
 <?php echo _e('Each tabs has its own help.','css-magician');?>
  <br>
  <br>
  <br>
  <span style="color:red;"><span style="font-weight: bold;">
     <?php echo _e('REMEMBER','css-magician');?></span>:</span>
 <?php echo _e(' Links are normally disabled.','css-magician');?><br>
 <?php echo _e('However if you need to activate a link to open a sub-menu for example, press ','css-magician');?> <span style="color: green; font-weight: bold;">CTRL + CLIC</span>
 <?php echo _e('to force to open it.','css-magician');?></p>
 <?php echo _e('If you move the mouse over the title CSS MAGICIAN next to the blue tab, the mouse cursor changes to show a moving icon.','css-magician');?><br>
 <?php echo _e('Right-clicking and moving the mouse moves CSS MAGICIAN.','css-magician');?><br>
 <?php echo _e('A click on the blue tab closes CSS MAGICIAN and it will regain its original position.','css-magician');?> <br>
  <br>
  <span style="color:red;"><span style="font-weight: bold;">
     <?php echo _e('IMPORTANT','css-magician');?></span>:</span>
 <?php echo _e(' In Front Office, when you click on SAVE button, if you do not see any changes it is necessary to reload the page a second times with the circular arrow of your browser.','css-magician');?><br>
 <?php echo _e('But in some cases, due to browser cache the changes do not appears anyway. ','css-magician');?>
 <?php echo _e('Sometimes it is possible to use F5 key to reload the cache but with "Chrome" sometimes it do not run correctly','css-magician');?>
 <?php echo _e('So the best way to use the module correctly and delete the cache problems is the possibility to use a cache killer extension for your browser.','css-magician');?><br>
 <?php echo _e('So go on your browser extensions store and install a cache killer (it is free). ','css-magician');?><br>
 <?php echo _e(' And in settings of Wordpress disable the cache for Css files.','css-magician');?><br>
 <?php echo _e(' After your work is out, you can enable the cache for Css files.','css-magician');?><br>
  <br>
  <br>
  <div style="text-align: left;"> <span style="color: red; font-weight: bold;"><?php echo _e('TO KNOW:','css-magician');?></span>
    <br>
    <span style="color:green;font-size:18px;"> <?php echo _e('The button ','css-magician');?></span>&nbsp;<span style="background:#333;color:#FFF;">
      !&nbsp;</span> <span style="color:green;font-size:18px;">!important :</span>
   <?php echo _e('The Css styles of an element are defined in priority order. It is possible that by modifying an item you can not see anything because prevents the higher priority.','css-magician');?>
    <br>
   <?php echo _e(' To correct this, you must validate the button ','css-magician');?>
    <span style="background:#333;color:#FFF;">
      !&nbsp;</span> !important.<?php echo _e('It becomes red and you should see your changes. If this is not the case whether it is a pseudo element (see below) the style of the element can not be changed with this selection. It will be necessary to select a parent or child element by moving the mouse.','css-magician');?>
    <br> <?php echo _e(' After clicking on the button ','css-magician');?>
    <span style="background:#333;color:#FFF;">!&nbsp;</span>
    !important,<?php echo _e('you have to validate your choice again with the style selector (checkbox, radio button, slider, colors picker etc ...)','css-magician');?><br>
    <br>
    <span style="color:green;font-size:18px;"><?php echo _e('The sliders:','css-magician');?></span><?php echo _e('They are associated with text fields allowing you to see the value.','css-magician');?><br><br>
    <span style="color: red; font-weight: bold;"><?php echo _e('REMEMBER','css-magician');?></span>
   <?php echo _e('When handling a slider, its minimum value can to be zero (0), that you may want not.','css-magician');?><br>
   <?php echo _e(' In this case, simply remove the zero to have empty fields.','css-magician');?>
    <br><?php echo _e(' You can also manually enter the values in these fields.','css-magician');?>
    <br><?php echo _e(' By default some fields are in percentage unit. When you have a checkbox Pixel, you can change the unit from percentage to pixel. ','css-magician');?>
    <br>
    <br>
    <br>
    <div style="text-align: center;"> <span style="font-weight: bold; font-style: italic; color:blue;font-size:24px;"><?php echo _e('THE BUTTONS','css-magician');?></span></div>
    <br>
    <span style="color:green;font-size:18px;"><?php echo _e('RESET:','css-magician');?></span><?php echo _e('The page is reloaded. Unsaved current changes are deleted.','css-magician');?><br>
    <br>
    <span style="color:green;font-size:18px;"><?php echo _e('SAVE :','css-magician');?></span><?php echo _e('Save the current changes to the selected item. When you select an item, you have to save your changes to keep them.','css-magician');?> <br>
   <?php echo _e('If you select another item without saving your changes, they are lost. The changes are not visible to your visitors.','css-magician');?>
    <br><?php echo _e(' A css file named','css-magician');?>
    <span style="font-style: italic;">"../assets/css/vmutcworkmythemeX_NAME.css"
    </span><?php echo _e('is created.','css-magician');?><br>
   <?php echo _e('Where','css-magician');?> <span style="font-weight: bold;">X </span><?php echo _e('is the','css-magician');?> <span style="font-weight: bold;">ID
    </span><?php echo _e('of your shop and','css-magician');?> <span style="font-weight: bold;">NAME </span><?php echo _e('the name of your theme created in your back office. The file: ','css-magician');?><span style="font-weight: bold;">vmutcworkmythemeX_NAME.css</span>
   <?php echo _e('is you working css file.','css-magician');?><br>
   <?php echo _e('All changes in this file are only visible to you, not your customers.','css-magician');?><br>
    <br>
    <span style="color:green;font-size:18px;"><?php echo _e('DELETE :','css-magician');?></span><?php echo _e('Removes css files of work and publication. Delete the backup of your database. You come back to the default theme.','css-magician');?> <br>
    <br>
    <span style="color:green;font-size:18px;"><?php echo _e('PUBLISH :','css-magician');?></span><?php echo _e('You publish your work. The changes are visible by your visitors.','css-magician');?> <br>
   <?php echo _e('When you click the button ','css-magician');?> <span style="font-weight: bold;"><?php echo _e('PUBLISH','css-magician');?> </span>
   <?php echo _e('a css file named ','css-magician');?><span style="font-style: italic;">
      "../assets/css/vmutcmythemeX_NAME.css"</span>
   <?php echo _e('is created.','css-magician');?><br>
   <?php echo _e('Where ','css-magician');?> <span style="font-weight: bold;">X </span><?php echo _e('is the ','css-magician');?><span style="font-weight: bold;">ID
    </span><?php echo _e('of your shop and ','css-magician');?><span style="font-weight: bold;">NAME </span><?php echo _e('the name of your theme.','css-magician');?><br>
   <?php echo _e('The file: ','css-magician');?><span style="font-weight: bold;">vmutcmythemeX_NAME.css</span>
   <?php echo _e('is your final css file. ','css-magician');?> <br>
   <?php echo _e('All changes in this file are visible to your visitors. So do not click on ','css-magician');?>
    <span style="font-weight: bold;"><?php echo _e('PUBLISH ','css-magician');?> </span><?php echo _e('until your work is not out.','css-magician');?><br>
    <br>
   <div style="text-align: center;"><span style="font-weight: bold; font-style: italic; color:blue;font-size:24px;"> <?php echo _e('THINGS TO KNOW','css-magician');?><br>
        <br>
      </span>
      <div style="text-align: left;"><span> <?php echo _e('When there is an Overlay or a modal window. It is impossible to select an element.','css-magician');?><br>
         <?php echo _e('To block the overlay, there is some browser plugins you can use.','css-magician');?> <br>
         <?php echo _e('For Firefox and Chrome, a plugin named: BehindTheOverlay do the job.','css-magician');?> <br>
          <br>
          <br>
          <span style="font-weight: bold; font-style: italic; color:blue;font-size:24px;"></span></div>
    </div>
    <br>
    <div style="text-align: right;">Help file CSS MAGICIAN 2.0.0 by PRESTA
      MAGICIAN- Copyright 2015 - 2020 PRESTA MAGICIAN</div>
</body>

</html>