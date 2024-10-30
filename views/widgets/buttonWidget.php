<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_buttonContainer" class="vmutc_widgetWindow">
    <fieldset class="form-group">
        <label class="form-control-label" for=""><?php echo _e('Button Style' , 'css-magician'); ?></label><br />
        <div id="vmutc_editorButtonStyleChoose" class="">
            <input id="cssm-button-menu-toggle" type="checkbox">

<label id="cssm-button-menu-label" class="btn btn-primary" for="cssm-button-menu-toggle"> <?php echo _e('Select a button style' , 'css-magician'); ?><i class="fas"></i></label>
  
            <ul class="collapse-menu">
                <li class="dropdown-header"><?php echo _e('Buttons' , 'css-magician'); ?></li>
                <li>
                    <div class="vmutc_button_select" data-button="default">
                        <a class="vmutc_default_button" href="#"><span><?php echo _e('Default Button' , 'css-magician'); ?></span></a>
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="victoria-one">                       
                            <a href="#" class="btn btn-sm animated-button victoria-one"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a>                      
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="victoria-two">
                        <a href="#" class="btn btn-sm animated-button victoria-two"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a>
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="victoria-three">
                        <a href="#" class="btn btn-sm animated-button victoria-three"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a>
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="victoria-four"><a href="#"
                            class="btn btn-sm animated-button victoria-four"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="sandy-one"><a href="#"
                            class="btn btn-sm animated-button sandy-one"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="sandy-two"><a href="#"
                            class="btn btn-sm animated-button sandy-two"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a>
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="sandy-three"><a href="#"
                            class="btn btn-sm animated-button sandy-three"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="sandy-four"><a href="#"
                            class="btn btn-sm animated-button sandy-four"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>

                <li>
                    <div class="vmutc_button_select" data-button="gibson-one"><a href="#"
                            class="btn btn-sm animated-button gibson-one"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="gibson-two"><a href="#"
                            class="btn btn-sm animated-button gibson-two"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a>
                    </div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="gibson-three"><a href="#"
                            class="btn btn-sm animated-button gibson-three"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li>
                    <div class="vmutc_button_select" data-button="gibson-four"><a href="#"
                            class="btn btn-sm animated-button gibson-four"><span><?php echo _e('Give me a title' , 'css-magician'); ?></span></a></div>
                </li>
                <li class="dropdown-header"><?php echo _e('Social\'s buttons' , 'css-magician'); ?></li>
                <li>
                    <div class="social-btns vmutc_button_select" data-button="facebook2"><a class="btn facebook2"
                            href="#"><i class="fab fa-facebook-f"></i></a></div>
                </li>
                <li>
                    <div class="social-btns vmutc_button_select" data-button="twitter2"><a class="btn twitter2"
                            href="#"><i class="fab fa-twitter"></i></a></div>
                </li>
                <li>
                    <div class="social-btns vmutc_button_select" data-button="google"><a class="btn google" href="#"><i
                                class="fab fa-google"></i></a></div>
                </li>
                <li>
                    <div class="social-btns vmutc_button_select" data-button="dribbble"><a class="btn dribbble"
                            href="#"><i class="fab fa-dribbble"></i></a></div>
                </li>
                <li>
                    <div class="social-btns vmutc_button_select" data-button="skype"><a class="btn skype" href="#"><i
                                class="fab fa-skype"></i></a></div>
                </li>

            </ul>
        </div><br />
        <div class="vmutc_buttonSettingsContainer">
        <div class="row">
        <label class="form-control-label" for="vmutc_editorButtonText"><?php echo _e('Text' , 'css-magician'); ?></label>
        <input id="vmutc_editorButtonText" type="text" class="form-control" placeholder="<?php echo _e('Give me a title' , 'css-magician'); ?>" />

        <label class="form-control-label" for="vmutc_editorButtonLink"><?php echo _e('Link' , 'css-magician'); ?></label>
        <input id="vmutc_editorButtonLink" type="text" class="form-control" placeholder="#" />
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group  vmutc-widgetValues">
                <!--    <label class="control-label">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Open in a new tab' , 'css-magician'); ?></span>
                    </label><br />
                    <label class="rocker rocker-small">
                        <input type="checkbox" name="vmutc_editorButtonOpen" id="vmutc_editorButtonOpen" value="0">
                        <span class="switch-left"><?php echo _e('Yes' , 'css-magician'); ?></span>
                        <span class="switch-right"><?php echo _e('No' , 'css-magician'); ?></span>
                    </label> -->
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Open in a new tab','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_editorButtonOpen" name="vmutc_editorButtonOpen" />
                    <label for="vmutc_editorButtonOpen"></label>
                </div>
                </div>
            </div>
        </div>
        <label class="form-control-label" for=""><?php echo _e('Button Alignment' , 'css-magician'); ?></label><br />
        <div id="vmutc_editorButtonAlignChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary active fas fa-align-left">
                <input type="radio" name="vmutc_editorButtonAlign" id="vmutc_editorButtonAlignLeft" autocomplete="off"
                    value="left" checked> <?php echo _e('Left' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fas fa-align-center">
                <input type="radio" name="vmutc_editorButtonAlign" id="vmutc_editorButtonAlignCenter" autocomplete="off"
                    value="center"> <?php echo _e('Center' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fas fa-align-right">
                <input type="radio" name="vmutc_editorButtonAlign" id="vmutc_editorButtonAlignRight" autocomplete="off"
                    value="right"> <?php echo _e('Right' , 'css-magician'); ?>
            </label>
        </div>
        <div id="vmutc_iconButtonContainer"></div>
        <label class="form-control-label" for=""><?php echo _e('Icon Alignment' , 'css-magician'); ?></label><br />
        <div id="vmutc_editorButtonIconAlignChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary active fas fa-align-left">
                <input type="radio" name="vmutc_editorButtonIconAlign" id="vmutc_editorButtonIconAlign_1"
                    autocomplete="off" checked value="left"> <?php echo _e('Left' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fas fa-align-right">
                <input type="radio" name="vmutc_editorButtonIconAlign" id="vmutc_editorButtonIconAlign_2"
                    autocomplete="off" value="right"> <?php echo _e('Right' , 'css-magician'); ?>
            </label>
        </div>
        <br />
        <div id="vmutc_editorButtonBackgroundColorContainer" class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Background Color' , 'css-magician'); ?></span>
            </label><br />
            <input type="text" name="vmutc_editorButtonBackgroundColor" id="vmutc_editorButtonBackgroundColor">
        </div>
        <div id="vmutc_editorButtonBackgroundColorAfterContainer" class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Color Effect After' , 'css-magician'); ?></span>
            </label><br />
            <input type="text" name="vmutc_editorButtonBackgroundColorAfter"
                id="vmutc_editorButtonBackgroundColorAfter">
        </div>
        <div id="vmutc_editorButtonBackgroundColorBeforeContainer" class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Color Effect Before' , 'css-magician'); ?></span>
            </label>
            <br />
            <input type="text" name="vmutc_editorButtonBackgroundColorBefore"
                id="vmutc_editorButtonBackgroundColorBefore">
        </div>
        <div id="vmutc_editorButtonTextColorContainer" class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Text/Icon Color' , 'css-magician'); ?></span>
            </label>
            <br />
            <input type="text" name="vmutc_editorButtonTextColor" id="vmutc_editorButtonTextColor">
        </div>
        <div id="vmutc_editorButtonTextColorHoverContainer" class="form-group vmutc-widgetValues">
            <label class="control-label">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php echo _e('Hover Text/Icon Color' , 'css-magician'); ?></span>
            </label>
            <br />
            <input type="text" name="vmutc_editorButtonTextColorHover" id="vmutc_editorButtonTextColorHover">
        </div>
</div>
    </fieldset>
    <fieldset>
        <span class="vmutc_widget_stylizer_info"><?php echo _e('All others styles can to be updated with Css Magician Stylizer.' , 'css-magician'); ?></span>
    </fieldset><br>
    <fieldset>
        <?php include(CSSM_PLUGIN_DIR_PATH.'views/animator.php'); ?>
    </fieldset>
    
    </div>