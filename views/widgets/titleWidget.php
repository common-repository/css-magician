<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
<div id="vmutc_titleContainer" class="vmutc_handle vmutc_widgetWindow">
    <fieldset class="form-group">
        <label class="form-control-label" for=""><?php echo _e('Text Tag' , 'css-magician'); ?></label><br />
        <div id="vmutc_titleTagChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary tagh1">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH1" autocomplete="off" value="h1" checked>
                <?php echo _e('H1' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagh2">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH2" autocomplete="off" value="h2">
                <?php echo _e('H2' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagh3">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH3" autocomplete="off" value="h3">
                <?php echo _e('H3' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagh4">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH4" autocomplete="off" value="h4">
                <?php echo _e('H4' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagh5">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH5" autocomplete="off" value="h5">
                <?php echo _e('H5' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagh6">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagH6" autocomplete="off" value="h6">
                <?php echo _e('H6' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagspan">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagSPAN" autocomplete="off" value="span">
                <?php echo _e('SPAN' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagdiv">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagDIV" autocomplete="off" value="div">
                <?php echo _e('DIV' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary tagp">
                <input type="radio" name="vmutc_titleTag" id="vmutc_titleTagP" autocomplete="off" value="p">
                <?php echo _e('P' , 'css-magician'); ?>
            </label>
        </div>
    </fieldset>
    <fieldset class="form-group">
        <label class="form-control-label" for="vmutc_titleText"><?php echo _e('Text' , 'css-magician'); ?></label>
        <input id="vmutc_titleText" type="text" class="form-control" />
    </fieldset>
    <fieldset class="form-group">
        <label class="form-control-label" for=""><?php echo _e('Text Alignment' , 'css-magician'); ?></label><br />
        <div id="vmutc_titleAlignChoose" class="cssm-btn-group " data-toggle="buttons">
            <label class="btn btn-secondary active fa fa-align-left">
                <input type="radio" name="vmutc_titleAlign" id="vmutc_titleAlignLeft" autocomplete="off" value="left"
                    checked> <?php echo _e('Left' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fa fa-align-center">
                <input type="radio" name="vmutc_titleAlign" id="vmutc_titleAlignCenter" autocomplete="off"
                    value="center">
                <?php echo _e('Center' , 'css-magician'); ?>
            </label>
            <label class="btn btn-secondary fa fa-align-right">
                <input type="radio" name="vmutc_titleAlign" id="vmutc_titleAlignRight" autocomplete="off" value="right">
                <?php echo _e('Right' , 'css-magician'); ?>
            </label>
        </div>
    </fieldset>
    <fieldset class="form-group">
        <label class="form-control-label" for="vmutc_titleLink"><?php echo _e('Link' , 'css-magician'); ?></label>
        <input id="vmutc_titleLink" type="text" class="form-control" />
    </fieldset>
    <fieldset>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group  vmutc-widgetValues">
                <!--    <label class="control-label">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Use Gradient for font color' , 'css-magician'); ?></span>
                    </label><br />
                    <label class="rocker rocker-small">
                        <input type="checkbox" name="vmutc_titlegradientUsed" id="vmutc_titlegradientUsed" value="0">
                        <span class="switch-left"><?php echo _e('Yes' , 'css-magician'); ?></span>
                        <span class="switch-right"><?php echo _e('No' , 'css-magician'); ?></span>
                    </label>-->
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Use Gradient for font color','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_titlegradientUsed" name="vmutc_titlegradientUsed" />
                    <label for="vmutc_titlegradientUsed"></label>
                </div>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset id="vmutc_displayTitleGradientValues">
        <div class="row">
            <div class="col-md-11">
                <div class="form-group vmutc-widgetValues">
                    <label class="control-label">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Gradient' , 'css-magician'); ?></span>
                    </label>
                    <div id="vmutc_titlegradientPicker"></div>
                </div>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group vmutc-widgetValues">
                    <label class="control-label">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true" 
                            ><?php echo _e('Gradient Position' , 'css-magician'); ?></span>
                    </label>
                    <div id="vmutc_titlegradientAngleContainer">
                        <div id="vmutc_titlegradientAngle_slider" class="section_slider_width"></div>
                        <input type="text" name="vmutc_titlegradientAngle" id="vmutc_titlegradientAngle"
                            class="vmutc_editorInput vmutc_numeric inputAlign vmutc_widget_input_text">
                    </div>
                </div>
            </div>
        </div>
    </fieldset>
    <fieldset class="form-group">
        <label class="form-control-label" for=""><?php echo _e('Choose animation style when hover' , 'css-magician'); ?></label><br />
        <table class="col-lg-12">
            <tr>
                <td class="vmutc_titleWidget_select" data-style="StyleNone">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyleNone" data-titletext="None">None</span>
                </td>            
                <td class="vmutc_titleWidget_select" data-style="Style15">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyle15" data-titletext="Box Open">Box Open</span>
                </td>              
                <td class="vmutc_titleWidget_select" data-style="Style23">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyle23" data-titletext="Box Fill Twirl">Box Fill Twirl</span>
                </td>
                <td class="vmutc_titleWidget_select" data-style="Style24">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyle24" data-titletext="Box Slide Left">Box Slide Left</span>
                </td>
            </tr>
            <tr>
                <td class="vmutc_titleWidget_select" data-style="Style25">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyle25" data-titletext="Box Slide Right">Box Slide Right</span>
                </td>
                <td class="vmutc_titleWidget_select" data-style="Style26">
                    <span class="vmutc_check"></span>
                    <span class=" vmutc_titleWidgetStyle vmutc_titleStyle26" data-titletext="Box Slide Up">Box Slide Up</span>
                </td>
            </tr>
        </table>
    </fieldset>
    <fieldset>
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="form-control-label" for="vmutc_titleWidgetBackgroundColor"><?php echo _e('Hover Background Color' , 'css-magician'); ?></label><br/>
                        <input type="text" name="vmutc_titleWidgetBackgroundColor" id="vmutc_titleWidgetBackgroundColor">
                 </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="form-control-label" for="vmutc_titleWidgetBorderColor"><?php echo _e('Hover Border Color' , 'css-magician'); ?></label><br/>
                        <input type="text" name="vmutc_titleWidgetBorderColor" id="vmutc_titleWidgetBorderColor">
                               </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="form-control-label" for="vmutc_titleWidgetFontColor"><?php echo _e('Hover Font Color' , 'css-magician'); ?></label><br/>
                        <input type="text" name="vmutc_titleWidgetFontColor" id="vmutc_titleWidgetFontColor">
                               </div>
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