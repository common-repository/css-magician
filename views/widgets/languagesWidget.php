<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_languagesWidgetContainer" class="vmutc_widgetWindow">
    <fieldset>
       <?php
       foreach($languages as $language)
        {                   
        ?>
        <input type="checkbox" name="languageBox[]" class="languageBox"  id="languageBox_<?php echo $language['id_lang'];?>" value="<?php echo $language['native_name'];?>" <?php disabled($language['id_lang'],$id_lang) ?> />
        <label for="languageBox_<?php echo $language['id_lang'];?>" <?php if($language['id_lang']==$id_lang){echo 'style="text-decoration: line-through;"';}?>> <?php echo $language['native_name'];?> </label><br>         
      <?php }    ?>       
       
           
        
    </fieldset>
</div>