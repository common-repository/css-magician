<!--/ 
 *  CSS MAGICIAN
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Presta Magician 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com> 
 * @file stylizer.php
 * @license: GPLv2
   International Registered Trademark & Property of Presta Magician
   Css Magician for Wordpress basic version
 ** -->
<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}
?>
 <div class="se-pre-con"><span><?php _e('Css Magician is loading ...','css-magician') ?></span></div>
<form id="vmutc_stylizer" action="" method="post" class="vmutc_stylizer_tool">
 <input type="hidden" id="cssm_id_theme" name="cssm_id_theme" value="<?php echo $id_theme;?>" />
 <input type="hidden" id="cssm_theme" name="cssm_theme" value="<?php echo $theme_name;?>" />
    <div id="vmutc_tool_customization" class="vmutc_stylizer_tool" style="position:fixed;">
        <div id="vmutcloader" class="vmutc_stylizer_tool">
            <svg id="loading">
                <g>
                    <path class="ld-l" fill="#39C0C4" d="M43.6,33.2h9.2V35H41.6V15.2h2V33.2z" />
                    <path class="ld-o" fill="#39C0C4" d="M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2
		c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3
		C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9
		c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3
		c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z" />
                    <path class="ld-a" fill="#39C0C4" d="M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z" />
                    <path class="ld-d" fill="#39C0C4" d="M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3
		c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4
		c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z" />
                    <path class="ld-i" fill="#39C0C4" d="M121.2,35h-2V15.2h2V35z" />
                    <path class="ld-n" fill="#39C0C4" d="M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z" />
                    <path class="ld-g" fill="#39C0C4" d="M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9
		c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9
		s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5
		c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z" />
                </g>
            </svg>
            <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                <g>
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                    <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                        <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                    </circle>
                </g>
                <g>
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                    <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                        <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                    </circle>
                </g>
            </svg>
        </div>
        <div id="vmutc-gear-right" class="">
            <i id="vmutc-gear-button" class="fas fa-cogs fa-2x vmutc_stylizer_tool" title="CSS MAGICIAN <?php echo CSSM_VERSION;?>">
            </i>
        </div>
        <div id="vmutc_stylizer_title" class="vmutc_stylizer_tool">
            <i id="vmutc-history-button" class="fas fa-history vmutc_stylizer_tool" title="<?php _e('Historic','css-magician');?>">
            </i>
            <i id="vmutc-inspector-button" class="fab fa-css3 vmutc_stylizer_tool" title="<?php _e('Inspector/Editor','css-magician');?>">
            </i>
            <i id="vmutc-customjs-button" class="fab fa-js vmutc_stylizer_tool" title="<?php _e('JS Editor','css-magician');?>">
            </i>
            <i id="vmutc-headermenuhelp-button" class="iconhelp far fa-question-circle" data-help="stylizer-menu-header" data-title="<?php _e('CSS MAGICIAN STYLIZER HEADER MENU HELP','css-magician');?>"></i>
            <em class="iconhelp fas fa-question-circle vmutc_stylizer_tool" id="vmutc_general_help" data-help="vmutc_stylizer_help" title="<?php _e('CSS MAGICIAN STYLES EDITOR HELP (STYLIZER)','css-magician');?>" data-title="<?php _e('CSS MAGICIAN STYLES EDITOR HELP (STYLIZER)','css-magician');?>"></em>
            <button type="submit" class="btn btn-4-1 vmutc_stylizer_tool" id="enablePropagation" name="enablePropagation" title="<?php _e('enable Propagation and see the result as normal user.','css-magician');?>">
            <?php _e('Normal View','css-magician');?>
            </button>
            <br />
        </div>
        <div class="btn-tools vmutc_stylizer_tool">
            <button type="button" class="btn btn-1 vmutc-dont-stop vmutc_stylizer_tool" id="resetVMUTCConfigurator" name="resetVMUTCConfigurator" title=" <?php _e('RESET the current work which is not yet saved.','css-magician');?>">
            <?php _e('Reset','css-magician');?>
            </button>
            <button type="submit" class="btn btn-2 vmutc-dont-stop vmutc_stylizer_tool" id="submitVMUTCConfigurator" name="submitVMUTCConfigurator" title=" <?php _e('Save the current work only for employees. Your customers do not see the change.','css-magician');?>">
            <?php _e('Save','css-magician');?>
            </button>
            <button type="submit" class="btn btn-3 vmutc-dont-stop vmutc_stylizer_tool" id="deleteVMUTCConfigurator" name="deleteVMUTCConfigurator" title=" <?php _e('Delete all your job. You come back to the default bootstrap theme.','css-magician');?>">
            <?php _e('Delete','css-magician');?>
            </button>
            <button type="submit" class="btn btn-4 vmutc-dont-stop vmutc_stylizer_tool" id="publishVMUTCConfigurator" name="publishVMUTCConfigurator" title=" <?php _e('Publish your work to your customers.','css-magician');?>">
            <?php _e('Publish','css-magician');?>
            </button>
        </div>
        <div id="vmutc_onlyElementContainer" class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-general-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Selected Element','css-magician');?>
                <span id="vmutc_info_selection" class="vmutc_info_selected vmutc_stylizer_tool"> <?php _e('Update by CLASS','css-magician');?></span>
            </p>
            <i class="iconhelp far fa-question-circle" data-title=" <?php _e('CSS MAGICIAN STYLIZER ELEMENT SELECTED HELP','css-magician');?>" data-help="stylizer-element"></i>
            <div id="vmutc_currentSelectedElement">
            </div>
            <div class="vmutc_yes_no_check2">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  > <?php _e('Only update that element','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_only_element" name="vmutc_only_element" />
                    <label for="vmutc_only_element"></label>
                </div>
            </div>
        </div>
        <div id="vmutc-general-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="checkboxConfig vmutc_stylizer_tool">
                <input type="radio" id="vmutc_normal" name="vmutcpseudo" value="normal" class="vmutc_radio vmutc-stop-propagation" checked="checked" />
                <span class="vmutcspanrepeat vmutcrepeatalign" title=" <?php _e('Normal element','css-magician');?>">
                <?php _e('Normal','css-magician');?>
                </span>
                <input type="radio" id="vmutc_before" name="vmutcpseudo" value="before" class="vmutc_radio vmutc-stop-propagation" />
                <span class="vmutcspanrepeat vmutcrepeatalign" title=" <?php _e('Add ::before pseudo element to the selected element','css-magician');?>">
                <?php _e('::before','css-magician');?>
                </span>
                <input type="radio" id="vmutc_after" name="vmutcpseudo" value="after" class="vmutc_radio vmutc-stop-propagation" />
                <span class="vmutcspanrepeat vmutcrepeatalign" title=" <?php _e('Add ::after pseudo element to the selected element','css-magician');?>">
                <?php _e('::after','css-magician');?>
                </span>
            </div>
            <div class="checkboxConfig vmutc_stylizer_tool ">
                <input type="radio" id="vmutc_no_state" name="vmutcstate" value="nostate" class="vmutc_radio vmutc-stop-propagation" checked="checked" />
                <span class="vmutcspanrepeat vmutcrepeatalign" title=" <?php _e('Normal element without state','css-magician');?>">
                <?php _e('No state','css-magician');?>
                </span>
                <input type="radio" id="vmutc_hover" name="vmutcstate" value="hover" class="vmutc_radio vmutc-stop-propagation" />
                <span class="vmutcspanrepeat vmutcrepeatalign" title=" <?php _e(':hover state for the element (when the mouse is over the element)','css-magician');?>">
                <?php _e(':hover','css-magician');?>
                </span>
            </div>
            <br />
            <div id="vmutc_element_selector">
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-border-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Border','css-magician');?>
            </p>
            <i class="iconhelp far fa-question-circle" data-title="  <?php _e('Normal','css-magician');?>CSS MAGICIAN STYLIZER BORDER HELP" data-help="stylizer-border"></i>
        </div>
        <div id="vmutc-border-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="checkboxConfig vmutc_stylizer_tool" style="width:250px;">
                <input type="checkbox" id="vmutc_borders_all" name="vmutc_borders_all" class="vmutc-stop-propagation vmutc_stylizer_tool" value="1" />
                <input type="hidden" id="vmutc_borders_all_important" class="vmutc_important_input" name="vmutc_borders_all_important" value="" />
                <span class="vmutc-box-span poplight vmutc_stylizer_tool" title="  <?php _e('All the radius will be updated with the same size','css-magician');?>">
                <?php _e('All Borders Radius','css-magician');?>
                </span>
            </div>
            <br>
            <div class="vmutc_sliderBox vmutc_stylizer_tool">
                <span class="vmutc_important " data-id="vmutc_border_left_top_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Top Left','css-magician');?>
                </span>
                <div id="vmutc_border_left_top" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_left_top_input" name="vmutc_border_left_top_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation vmutc_numeric" />
                <input type="hidden" id="vmutc_border_left_top_input_important" class="vmutc_important_input" name="vmutc_border_left_top_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_border_right_top_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Top Right','css-magician');?>
                </span>
                <div id="vmutc_border_right_top" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_right_top_input" name="vmutc_border_right_top_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation vmutc_numeric" />
                <input type="hidden" id="vmutc_border_right_top_input_important" class="vmutc_important_input" name="vmutc_border_right_top_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_border_right_bottom_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Bottom Right','css-magician');?> 
                </span>
                <div id="vmutc_border_right_bottom" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_right_bottom_input" name="vmutc_border_right_bottom_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation" />
                <input type="hidden" id="vmutc_border_right_bottom_input_important" class="vmutc_important_input" name="vmutc_border_right_bottom_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_border_left_bottom_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Bottom Left','css-magician');?> 
                </span>
                <div id="vmutc_border_left_bottom" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_left_bottom_input" name="vmutc_border_left_bottom_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation vmutc_numeric" />
                <input type="hidden" id="vmutc_border_left_bottom_input_important" class="vmutc_important_input" name="vmutc_border_left_bottom_input_important" value="" />
            </div>
            <div class="checkboxConfig vmutc_stylizer_tool" style="width:250px;">
                <input type="checkbox" id="vmutc_borders_width_all" name="vmutc_borders_width_all" class="vmutc-stop-propagation vmutc_stylizer_tool vmutc-stop-propagation" value="1" />
                <input type="hidden" id="vmutc_borders_width_all_important" class="vmutc_important_input" name="vmutc_borders_width_all_important" value="" />
                <span class="vmutc-box-span poplight vmutc_stylizer_tool" title="  <?php _e('All the borders will be updated with the same size','css-magician');?>">
                <?php _e('All Borders Width','css-magician');?> 
                </span>
            </div>
            <br>
            <div class="vmutc_sliderBox vmutc_stylizer_tool">
                <span class="vmutc_important " data-id="vmutc_border_width_left_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Left','css-magician');?>
                </span>
                <div id="vmutc_border_width_left" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_width_left_input" name="vmutc_border_width_left_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation vmutc_numeric" />
                <input type="hidden" id="vmutc_border_width_left_input_important" class="vmutc_important_input" name="vmutc_border_width_left_input_important" value="" />
                <select id="vmutc_border_style_left" type="select" class="selectConfig vmutc_stylizer_tool vmutc-stop-propagation" name="vmutc_border_style_left_input" autocomplete="off">
                    <option selected="selected" value="None">  <?php _e('None','css-magician');?></option>
                    <option value="solid">  <?php _e('Solid','css-magician');?></option>
                    <option value="dotted">  <?php _e('Dotted','css-magician');?></option>
                    <option value="dashed">  <?php _e('Dashed','css-magician');?></option>
                    <option value="double">  <?php _e('Double','css-magician');?></option>
                    <option value="groove">  <?php _e('Groove','css-magician');?></option>
                    <option value="ridge">  <?php _e('Ridge','css-magician');?></option>
                    <option value="inset">  <?php _e('Inset','css-magician');?></option>
                    <option value="outset">  <?php _e('Outset','css-magician');?></option>
                </select>
                <span class="vmutc_important " data-id="vmutc_border_width_top_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Top','css-magician');?> 
                </span>
                <div id="vmutc_border_width_top" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_width_top_input" name="vmutc_border_width_top_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc-stop-propagation vmutc_numeric" />
                <input type="hidden" id="vmutc_border_width_top_input_important" class="vmutc_important_input" name="vmutc_border_width_top_input_important" value="" />
                <select id="vmutc_border_style_top" type="select" class="selectConfig vmutc_stylizer_tool vmutc-stop-propagation" name="vmutc_border_style_top_input" autocomplete="off">
                    <option selected="selected" value="None">  <?php _e('None','css-magician');?></option>
                    <option value="solid">  <?php _e('Solid','css-magician');?></option>
                    <option value="dotted">  <?php _e('Dotted','css-magician');?></option>
                    <option value="dashed">  <?php _e('Dashed','css-magician');?></option>
                    <option value="double">  <?php _e('Double','css-magician');?></option>
                    <option value="groove">  <?php _e('Groove','css-magician');?></option>
                    <option value="ridge">  <?php _e('Ridge','css-magician');?></option>
                    <option value="inset">  <?php _e('Inset','css-magician');?></option>
                    <option value="outset">  <?php _e('Outset','css-magician');?></option>
                </select>
                <span class="vmutc_important " data-id="vmutc_border_width_right_input_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Right','css-magician');?> 
                </span>
                <div id="vmutc_border_width_right" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_width_right_input" name="vmutc_border_width_right_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
                <input type="hidden" id="vmutc_border_width_right_input_important" class="vmutc_important_input" name="vmutc_border_width_right_input_important" value="" />
                <select id="vmutc_border_style_right" type="select" class="selectConfig vmutc_stylizer_tool" name="vmutc_border_style_right_input" autocomplete="off">
                    <option selected="selected" value="None">  <?php _e('None','css-magician');?></option>
                    <option value="solid">  <?php _e('Solid','css-magician');?></option>
                    <option value="dotted">  <?php _e('Dotted','css-magician');?></option>
                    <option value="dashed">  <?php _e('Dashed','css-magician');?></option>
                    <option value="double">  <?php _e('Double','css-magician');?></option>
                    <option value="groove">  <?php _e('Groove','css-magician');?></option>
                    <option value="ridge">  <?php _e('Ridge','css-magician');?></option>
                    <option value="inset">  <?php _e('Inset','css-magician');?></option>
                    <option value="outset">  <?php _e('Outset','css-magician');?></option>
                </select>
                <span class="vmutc_important " data-id="vmutc_border_width_bottom_input_important">!</span>
                <span class="vmutc-box-span" class="vmutc_stylizer_tool">
                <?php _e('Bottom','css-magician');?>  
                </span>
                <div id="vmutc_border_width_bottom" class="vmutc_stylizer_tool">
                </div>
                <input id="vmutc_border_width_bottom_input" name="vmutc_border_width_bottom_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
                <input type="hidden" id="vmutc_border_width_bottom_input_important" class="vmutc_important_input" name="vmutc_border_width_bottom_input_important" value="" />
                <select id="vmutc_border_style_bottom" type="select" class="selectConfig vmutc_stylizer_tool" name="vmutc_border_style_bottom_input" autocomplete="off">
                    <option selected="selected" value="None">  <?php _e('None','css-magician');?></option>
                    <option value="solid">  <?php _e('Solid','css-magician');?></option>
                    <option value="dotted">  <?php _e('Dotted','css-magician');?></option>
                    <option value="dashed">  <?php _e('Dashed','css-magician');?></option>
                    <option value="double">  <?php _e('Double','css-magician');?></option>
                    <option value="groove">  <?php _e('Groove','css-magician');?></option>
                    <option value="ridge">  <?php _e('Ridge','css-magician');?></option>
                    <option value="inset">  <?php _e('Inset','css-magician');?></option>
                    <option value="outset">  <?php _e('Outset','css-magician');?></option>
                </select>
            </div>
            <br><br>
            <div class="vmutc_sliderBox vmutc_stylizer_tool" style="margin-top: -35px;">
                <span class="vmutc-box-span vmutc_stylizer_tool">  <?php _e('All Colors','css-magician');?></span>
                <input id='vmutc_borders_color' type='text' value='' name='vmutc_borders_color' class="vmutc_colors_selector vmutc_stylizer_tool">
            <div style="display:grid;margin:10px;"> 
                <div style="display:table-cell;">
                <input type="hidden" id="vmutc_borders_color_important" class="vmutc_important_input" name="vmutc_borders_color_important" value="" />
                <input type="hidden" id="vmutc_borders_color_real" name="vmutc_borders_color_real" value="" />
                <span class="vmutc_important " data-id="vmutc_border_left_color_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">  <?php _e('Left','css-magician');?></span>
                <input id='vmutc_border_left_color' type='text' value='' name='vmutc_border_left_color'>
                <input type="hidden" id="vmutc_border_left_color_important" class="vmutc_important_input" name="vmutc_border_left_color_important" value="" />
                <input type="hidden" id="vmutc_border_left_color_real" name="vmutc_border_left_color_real" value="" />
                </div>
                <div style="display:table-cell;">
                <span class="vmutc_important " data-id="vmutc_border_top_color_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">  <?php _e('Top','css-magician');?></span>
                <input id='vmutc_border_top_color' type='text' value='' name='vmutc_border_top_color'>
                <input type="hidden" id="vmutc_border_top_color_important" class="vmutc_important_input" name="vmutc_border_top_color_important" value="" />
                <input type="hidden" id="vmutc_border_top_color_real" name="vmutc_border_top_color_real" value="" />
                </div>
                <div style="display:table-cell;">
                <span class="vmutc_important " data-id="vmutc_border_right_color_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">  <?php _e('Right','css-magician');?></span>
                <input id='vmutc_border_right_color' type='text' value='' name='vmutc_border_right_color'>
                <input type="hidden" id="vmutc_border_right_color_important" class="vmutc_important_input" name="vmutc_border_right_color_important" value="" />
                <input type="hidden" id="vmutc_border_right_color_real" name="vmutc_border_right_color_real" value="" />
                </div>
                <div style="display:table-cell;">
                <span class="vmutc_important " data-id="vmutc_border_bottom_color_important">!</span>
                <span class="vmutc-box-span vmutc_stylizer_tool">  <?php _e('Bottom','css-magician');?></span>
                <input id='vmutc_border_bottom_color' type='text' value='' name='vmutc_border_bottom_color'>
                <input type="hidden" id="vmutc_border_bottom_color_important" class="vmutc_important_input" name="vmutc_border_bottom_color_important" value="" />
                <input type="hidden" id="vmutc_border_bottom_color_real" name="vmutc_border_bottom_color_real" value="" />
                </div>
            </div>
            </div>
            <br>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-text-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Text','css-magician');?>
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER TEXT HELP','css-magician');?>" data-help="stylizer-text"></i>
        </div>
        <div id="vmutc-text-box" class="vmutc-box vmutc_stylizer_tool">
            <span class="vmutc_important " data-id="vmutc_text_color_important">!</span>
            <span class="vmutc-box-span-small vmutc_stylizer_tool"><?php _e('Color','css-magician');?></span>
            <input id='vmutc_text_color' type='text' value='' name='vmutc_text_color'>
            <input type="hidden" id="vmutc_text_color_important" class="vmutc_important_input" name="vmutc_text_color_important" value="" />
            <input type="hidden" id="vmutc_text_color_real" name="vmutc_text_color_real" value="" />
            <div class="vmutc_yes_no_check">
                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Use Gradient','css-magician');?></span>
                <div class="slideThree">
                    <input type="checkbox" value="" id="vmutc_origintextGradientSelect" name="vmutc_origintextGradientSelect" />
                    <label for="vmutc_origintextGradientSelect"></label>
                </div>
            </div>
            <div id="vmutc_origintextGradientContainer">
                <div id="vmutc_origintextGradientPicker"></div>
                <input type="hidden" id="vmutc_origintextGradientPicker_real" name="vmutc_origintextGradientPicker_real" value="" />
                <input type="hidden" id="vmutc_origintextGradientPicker_handlers" name="vmutc_origintextGradientPicker_handlers" value="" />
                <div class="vmutc_origintextgradienttypecontainer">
                    <label class="control-label">
                        <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Gradient Type','css-magician');?></span>
                    </label><br />
                    <select class="selectConfig vmutc_stylizer_tool" id="vmutc_origintextgradientType" name="vmutc_origintextgradientType">
                        <option value="linear"><?php _e('Linear','css-magician');?></option>
                        <option value="repeating-linear"><?php _e('Repeating Linear','css-magician');?></option>
                        <option value="radial"><?php _e('Radial','css-magician');?></option>
                        <option value="repeating-radial"><?php _e('Repeating Radial','css-magician');?></option>
                    </select>
                    <div class="form-group vmutc-widgetValues">
                        <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Gradient Position','css-magician');?></span>
                        </label>
                        <div id="vmutc_origintextgradientAngleContainer">
                            <div id="vmutc_origintextgradientAngle_slider" class=""></div>
                            <input type="text" name="vmutc_origintextgradientAngle" id="vmutc_origintextgradientAngle" class="vmutc_editorInput vmutc_numeric inputAlign vmutc_widget_input_text">
                        </div><br />
                        <div id="vmutc_origintextgradientPositionContainer">
                            <select id="vmutc_origintextgradientPosition" name="vmutc_origintextgradientPosition" class="selectConfig vmutc_stylizer_tool">
                                <option value="center center"><?php _e('Center Center','css-magician');?></option>
                                <option value="center left"><?php _e('Center Left','css-magician');?></option>
                                <option value="center right"><?php _e('Center Right','css-magician');?></option>
                                <option value="top center"><?php _e('Top Center','css-magician');?></option>
                                <option value="top left"><?php _e('Top Left','css-magician');?></option>
                                <option value="top right"><?php _e('Top Right','css-magician');?></option>
                                <option value="bottom center"><?php _e('Bottom Center','css-magician');?></option>
                                <option value="bottom left"><?php _e('Bottom Left','css-magician');?></option>
                                <option value="bottom right"><?php _e('Bottom Right','css-magician');?></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="vmutc_hide" style="display:inline-block;">
                <span class="vmutc_important " data-id="vmutc_text_color_hover_important">!</span>
                <span class="vmutc-box-span-small vmutc_stylizer_tool"><?php _e('Hover','css-magician');?></span>
                <input id='vmutc_text_color_hover' type='text' value='' name='vmutc_text_color_hover'>
                <input type="hidden" id="vmutc_text_color_hover_important" class="vmutc_important_input" name="vmutc_text_color_hover_important" value="" />
                <input type="hidden" id="vmutc_text_color_hover_real" name="vmutc_text_color_hover_real" value="" />
            </div>
            <br>
            <span class="vmutc_important " data-id="vmutc_text_font_important">!</span>
            <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Font','css-magician');?></span>
            <input id='vmutc_text_font' type='text' value='' name='vmutc_text_font'>
            <input type="hidden" id="vmutc_text_font_important" class="vmutc_important_input" name="vmutc_text_font_important" value="" />
            <br>
            <span class="vmutc_important " data-id="vmutc_text_size_input_important">!</span>
            <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Font Size','css-magician');?></span>
            <div id="vmutc_text_size"></div>
            <input id="vmutc_text_size_input" name="vmutc_text_size_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
            <input type="hidden" id="vmutc_text_size_input_important" class="vmutc_important_input" name="vmutc_text_size_input_important" value="" />
            <span class="vmutc_important " data-id="vmutc_text_lineheight_input_important">!</span>
            <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Line Height','css-magician');?></span>
            <div id="vmutc_text_lineheight">
            </div>
            <input id="vmutc_text_lineheight_input" name="vmutc_text_lineheight_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
            <input type="hidden" id="vmutc_text_lineheight_input_important" class="vmutc_important_input" name="vmutc_text_lineheight_input_important" value="" />
             <div class="checkboxConfig vmutc_stylizer_tool" style="width:250px;">
                <span class="vmutc_important " data-id="vmutc_text_weight_important">!</span>
                <input type="checkbox" id="vmutc_text_weight" name="vmutc_text_weight" class="vmutc-stop-propagation vmutc_stylizer_tool" value="normal" />
                <input type="hidden" id="vmutc_text_weight_important" class="vmutc_important_input" name="vmutc_text_weight_important" value="" />
                <span class="vmutc-box-span vmutc_stylizer_tool">
                <?php _e('Bold','css-magician');?>
                </span>
                <span class="vmutc_important " data-id="vmutc_text_style_important">!</span>
                <input type="checkbox" id="vmutc_text_style" name="vmutc_text_style" class="vmutc-stop-propagation" value="normal" />
                <input type="hidden" id="vmutc_text_style_important" class="vmutc_important_input" name="vmutc_text_style_important" value="" />
                <span class="vmutc-box-span">
                <?php _e('Italic','css-magician');?> 
                </span>
            </div>
            <br><br>
            <div class="checkboxConfig" style="width:330px;">
                <span class="vmutc_important " data-id="vmutc_text_transform_important">!</span>
                <input type="hidden" id="vmutc_text_transform_important" class="vmutc_important_input" name="vmutc_text_transform_important" value="" />
                <span class="vmutc-box-span poplight" title="<?php _e('Text Transform','css-magician');?>  ">
                <?php _e('Text Transform','css-magician');?>  
                </span>                
                <select id="vmutc_text_transform" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_text_transform" autocomplete="off" style="margin-left: -10px;">
                    <option selected="none" value="none"><?php _e('none','css-magician');?></option>
                    <option value="capitalize"><?php _e('capitalize','css-magician');?></option>
                    <option value="uppercase"><?php _e('uppercase','css-magician');?></option>
                    <option value="lowercase"><?php _e('lowercase','css-magician');?></option>
                </select> 
            </div>            
            <br><br>
            <div class="checkboxConfig" style="width:330px;">
                <span class="vmutc_important " data-id="vmutc_text_align_important">!</span>
                <input type="hidden" id="vmutc_text_align_important" class="vmutc_important_input" name="vmutc_text_align_important" value="" />
                <span class="vmutc-box-span poplight" title="<?php _e('Text Align','css-magician');?>">
                <?php _e('Text Align','css-magician');?>  
                </span>                
                <select id="vmutc_text_align" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_text_align" autocomplete="off" style="margin-left: -10px;">
                    <option selected="none" value="none"><?php _e('none','css-magician');?></option>
                    <option value="left"><?php _e('left','css-magician');?></option>                
                    <option value="center"><?php _e('center','css-magician');?></option>
                    <option value="right"><?php _e('right','css-magician');?></option>
                    <option value="justify"><?php _e('justify','css-magician');?></option>
                </select> 
            </div>            
            <br><br>
            <span class="vmutc_important " data-id="vmutc_text_letter_spacing_input_important">!</span>
            <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Letter Spacing','css-magician');?></span>
            <div id="vmutc_text_letter_spacing">
            </div>
            <input id="vmutc_text_letter_spacing_input" name="vmutc_text_letter_spacing_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
            <input type="hidden" id="vmutc_text_letter_spacing_input_important" class="vmutc_important_input" name="vmutc_text_letter_spacing_input_important" value="" />
         <span class="vmutc_important " data-id="vmutc_text_word_spacing_input_important">!</span>
         <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Word Spacing','css-magician');?></span>
         <div id="vmutc_text_word_spacing">
         </div>
         <input id="vmutc_text_word_spacing_input" name="vmutc_text_word_spacing_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
         <input type="hidden" id="vmutc_text_word_spacing_input_important" class="vmutc_important_input" name="vmutc_text_word_spacing_input_important" value="" />
      <br>
            <span class="vmutc_important" data-id="vmutc_text_shadow_important">!</span>
            <input type="hidden" id="vmutc_text_shadow_important" class="vmutc_important_input" name="vmutc_text_shadow_important" value="" />
            <span class="vmutc-box-span vmutc-center"><?php _e('----- Shadow -----','css-magician');?></span>
            <br><br>
            <span class="vmutc-box-span">
            <?php _e('Horizontal','css-magician');?>  
            </span>
            <div id="vmutc_text_shadow_H">
            </div>
            <input id="vmutc_text_shadow_H_input" name="vmutc_text_shadow_H_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
            <span class="vmutc-box-span">
            <?php _e('Vertical','css-magician');?>  
            </span>
            <div id="vmutc_text_shadow_V">
            </div>
            <input id="vmutc_text_shadow_V_input" name="vmutc_text_shadow_V_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
            <span class="vmutc-box-span">
            <?php _e('Blur','css-magician');?> 
            </span>
            <div id="vmutc_text_shadow_Blur">
            </div>
            <input id="vmutc_text_shadow_Blur_input" name="vmutc_text_shadow_Blur_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
            <span class="vmutc-box-span">
            <?php _e('Color','css-magician');?>  
            </span>
            <input id='vmutc_text_shadow_color' type='text' value='' name='vmutc_text_shadow_color'>
            <input id='vmutc_text_shadow_color_real' type='hidden' value='' name='vmutc_text_shadow_color_real'>
            <p></p>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-background-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Background','css-magician');?> 
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER BACKGROUND HELP','css-magician');?>" data-help="stylizer-background"></i>
        </div>
        <div id="vmutc-background-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_background_color_important">!</span>
                <span class="vmutc-box-span"><?php _e('Color','css-magician');?></span>
                <input id='vmutc_background_color' type='text' value='' name='vmutc_background_color'>
                <input type="hidden" id="vmutc_background_color_important" class="vmutc_important_input" name="vmutc_background_color_important" value="" />
                <input type="hidden" id="vmutc_background_color_real" name="vmutc_background_color_real" value="" />
                <div class="vmutc_yes_no_check">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Use Gradient','css-magician');?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_originGradientSelect" name="vmutc_originGradientSelect" />
                        <label for="vmutc_originGradientSelect"></label>
                    </div>
                </div>
                <div id="vmutc_originGradientContainer">
                    <div id="vmutc_originGradientPicker"></div>
                    <input type="hidden" id="vmutc_originGradientPicker_real" name="vmutc_originGradientPicker_real" value="" />
                    <input type="hidden" id="vmutc_originGradientPicker_handlers" name="vmutc_originGradientPicker_handlers" value="" />
                    <div class="vmutc_origingradienttypecontainer">
                        <label class="control-label">
                            <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Gradient Type','css-magician');?></span>
                        </label><br />
                        <select class="selectConfig vmutc_stylizer_tool" id="vmutc_origingradientType" name="vmutc_origingradientType">
                            <option value="linear"><?php _e('Linear','css-magician');?></option>
                            <option value="repeating-linear"><?php _e('Repeating Linear','css-magician');?></option>
                            <option value="radial"><?php _e('Radial','css-magician');?></option>
                            <option value="repeating-radial"><?php _e('Repeating Radial','css-magician');?></option>
                        </select>
                        <div class="form-group vmutc-widgetValues">
                            <label class="control-label">
                                <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Gradient Position','css-magician');?></span>
                            </label>
                            <div id="vmutc_origingradientAngleContainer">
                                <div id="vmutc_origingradientAngle_slider" class=""></div>
                                <input type="text" name="vmutc_origingradientAngle" id="vmutc_origingradientAngle" class="vmutc_editorInput vmutc_numeric inputAlign vmutc_widget_input_text">
                            </div><br />
                            <div id="vmutc_origingradientPositionContainer">
                                <select id="vmutc_origingradientPosition" name="vmutc_origingradientPosition" class="selectConfig vmutc_stylizer_tool">
                                    <option value="center center"><?php _e('Center Center','css-magician');?></option>
                                    <option value="center left"><?php _e('Center Left','css-magician');?></option>
                                    <option value="center right"><?php _e('Center Right','css-magician');?></option>
                                    <option value="top center"><?php _e('Top Center','css-magician');?></option>
                                    <option value="top left"><?php _e('Top Left','css-magician');?></option>
                                    <option value="top right"><?php _e('Top Right','css-magician');?></option>
                                    <option value="bottom center"><?php _e('Bottom Center','css-magician');?></option>
                                    <option value="bottom left"><?php _e('Bottom Left','css-magician');?></option>
                                    <option value="bottom right"><?php _e('Bottom Right','css-magician');?></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="vmutc_hide">
                    <span class="vmutc_important " data-id="vmutc_background_color_hover_important">!</span>
                    <span class="vmutc-box-span"><?php _e('Hover Color','css-magician');?></span>
                    <input id='vmutc_background_color_hover' type='text' value='' name='vmutc_background_color_hover'>
                    <input type="hidden" id="vmutc_background_color_hover_important" class="vmutc_important_input" name="vmutc_background_color_hover_important" value="" />
                    <input type="hidden" id="vmutc_background_color_hover_real" name="vmutc_background_color_hover_real" value="" />
                </div>
                <br />
                <span id="vmutcuploadBackgroundImage" class="vmutc-box-span-great vmutc-download" data-width="600" data-rel="vmutcuploadBackgroundImageWin" data-link="noredirect" data-title="<?php _e('Upload A Background Image','css-magician');?>"> <?php _e('Upload A Background Image','css-magician');?></span>
                <br />
                <span id="vmutcchooseBackgroundImage" class="vmutc-box-span-great vmutc-download" data-width="700" data-rel="openBackgroundGallery" data-link="noredirect" data-title="<?php _e('Choose a Background Image','css-magician');?>"> <?php _e('Choose a Background Image','css-magician');?></span>
                <br />
                <span class="vmutc_important " data-id="vmutc_BackgroundImage_input_important">!</span>
                <input type="text" id="vmutc_BackgroundImage_input" name="vmutc_BackgroundImage_input" value="" />
                <input type="hidden" id="vmutc_BackgroundImage_input_important" class="vmutc_important_input" name="vmutc_BackgroundImage_input_important" value="" />
                <br /><br />
                <div class="vmutcrepeatalign">
                    <span class="vmutc_important " data-id="vmutcrepeat_important">!</span>
                    <input type="hidden" id="vmutcrepeat_important" class="vmutc_important_input" name="vmutcrepeat_important" value="" />
                    <input type="radio" id="vmutcrepeatxy" name="vmutcrepeat" value="repeat" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('Repeat X-Y','css-magician');?> 
                    </span>
                    <input type="radio" id="vmutcnorepeat" name="vmutcrepeat" value="no-repeat" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('No Repeat','css-magician');?>  
                    </span>
                    <input type="radio" id="vmutcrepeatx" name="vmutcrepeat" value="repeat-x" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('Repeat X','css-magician');?>  
                    </span>
                    <input type="radio" id="vmutcrepeaty" name="vmutcrepeat" value="repeat-y" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('Repeat Y','css-magician');?>   
                    </span>
                </div>
                <br />
                <div class="vmutcrepeatalign">
                    <span class="vmutc_important " data-id="vmutc_attachment_important">!</span>
                    <input type="hidden" id="vmutc_attachment_important" class="vmutc_important_input" name="vmutc_attachment_important" value="" />
                    <input type="radio" id="vmutcscroll" name="vmutcattachment" value="scroll" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('Scroll','css-magician');?> 
                    </span>
                    <input type="radio" id="vmutcfixed" name="vmutcattachment" value="fixed" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('Fixed','css-magician');?>  
                    </span>
                </div>
                <br />
                <div class="vmutcrepeatalign">
                    <span class="vmutc_important " data-id="vmutc_back_size_important">!</span>
                    <input type="hidden" id="vmutc_back_size_important" class="vmutc_important_input" name="vmutc_back_size_important" value="" />
                    <input type="radio" id="vmutcbackauto" name="vmutc_back_size" value="auto" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('auto','css-magician');?>  
                    </span>
                    <input type="radio" id="vmutcbackcover" name="vmutc_back_size" value="cover" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('cover','css-magician');?>  
                    </span>
                    <input type="radio" id="vmutcbackcontain" name="vmutc_back_size" value="contain" class="vmutc_radio" />
                    <span class="vmutcspanrepeat">
                    <?php _e('containe','css-magician');?>   
                    </span>
                </div>
                <br />
                <div class="vmutc_sliderBox">
                    <span class="vmutc_important " data-id="vmutc_background_size_width_input_important">!</span>
                    <span class="vmutc-box-span">
                    <?php _e('Width','css-magician');?>  
                    </span>
                    <div id="vmutc_background_size_width">
                    </div>
                    <input id="vmutc_background_size_width_input" name="vmutc_background_size_width_input" type="text" class="sliderConfig vmutc_numeric" />
                    <span class="vmutc_important_hidden"></span>
                    <span class="vmutc-box-span">
                    <?php _e('Height','css-magician');?> 
                    </span>
                    <div id="vmutc_background_size_height">
                    </div>
                    <input id="vmutc_background_size_height_input" name="vmutc_background_size_height_input" type="text" class="sliderConfig vmutc_numeric" />
                    <input type="hidden" id="vmutc_background_size_height_input_important" class="vmutc_important_input" name="vmutc_background_size_height_input_important" value="" />
                </div>
                <div class="vmutc_sliderBox">
                    <span class="vmutc_important " data-id="vmutc_background_left_input_important">!</span>
                    <span class="vmutc-box-span">
                    <?php _e('Left Position','css-magician');?>  
                    </span>
                    <div id="vmutc_background_left">
                    </div>
                    <input id="vmutc_background_left_input" name="vmutc_background_left_input" type="text" class="sliderConfig vmutc_numeric" />
                    <input type="hidden" id="vmutc_background_left_input_important" class="vmutc_important_input" name="vmutc_background_left_input_important" value="" />
                    <span class="vmutc_important " data-id="vmutc_background_top_input_important">!</span>
                    <span class="vmutc-box-span">
                    <?php _e('Top Position','css-magician');?>   
                    </span>
                    <div id="vmutc_background_top">
                    </div>
                    <input id="vmutc_background_top_input" name="vmutc_background_top_input" type="text" class="sliderConfig vmutc_numeric" />
                    <input type="hidden" id="vmutc_background_top_input_important" class="vmutc_important_input" name="vmutc_background_top_input_important" value="" />
                </div>
                <p></p>
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-margins-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Margins / Paddings','css-magician');?></p> 
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER MARGINS HELP','css-magician');?>" data-help="stylizer-margins"></i>
        </div>
        <div id="vmutc-margins-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="checkboxConfig" style="width:250px;">
                <input type="checkbox" id=" " name="vmutc_text_margins_all" class="vmutc-stop-propagation" value="1" />
                <input type="hidden" id="vmutc_text_margins_all_important" class="vmutc_important_input" name="vmutc_text_margins_all_important" value="" />
                <span class="vmutc-box-span poplight" title=" <?php _e('All the margins will be updated with the same size','css-magician');?>">
                <?php _e('All Margins','css-magician');?>
                </span>
            </div>
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_text_margin_left_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Left','css-magician');?>    
                </span>
                <div id="vmutc_text_margin_left">
                </div>
                <input id="vmutc_text_margin_left_input" name="vmutc_text_margin_left_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_margin_left_input_important" class="vmutc_important_input" name="vmutc_text_margin_left_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_margin_top_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Top','css-magician');?>   
                </span>
                <div id="vmutc_text_margin_top">
                </div>
                <input id="vmutc_text_margin_top_input" name="vmutc_text_margin_top_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_margin_top_input_important" class="vmutc_important_input" name="vmutc_text_margin_top_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_margin_right_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Right','css-magician');?>   
                </span>
                <div id="vmutc_text_margin_right">
                </div>
                <input id="vmutc_text_margin_right_input" name="vmutc_text_margin_right_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_margin_right_input_important" class="vmutc_important_input" name="vmutc_text_margin_right_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_margin_bottom_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Bottom','css-magician');?>   
                </span>
                <div id="vmutc_text_margin_bottom">
                </div>
                <input id="vmutc_text_margin_bottom_input" name="vmutc_text_margin_bottom_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_margin_bottom_input_important" class="vmutc_important_input" name="vmutc_text_margin_bottom_input_important" value="" />
            </div>
            <div class="checkboxConfig" style="width:250px;">
                <input type="checkbox" id="vmutc_text_paddings_all" name="vmutc_text_paddings_all" class="vmutc-stop-propagation" value="1" />
                <input type="hidden" id="vmutc_text_paddings_all_important" class="vmutc_important_input" name="vmutc_text_paddings_all_important" value="" />
                <span class="vmutc-box-span poplight" title=" <?php _e('All the paddins will be updated with the same size','css-magician');?>">
                <?php _e('All Paddings','css-magician');?>  
                </span>
            </div>
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_text_padding_left_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Left','css-magician');?> 
                </span>
                <div id="vmutc_text_padding_left">
                </div>
                <input id="vmutc_text_padding_left_input" name="vmutc_text_padding_left_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_padding_left_input_important" class="vmutc_important_input" name="vmutc_text_padding_left_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_padding_top_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Top','css-magician');?>   
                </span>
                <div id="vmutc_text_padding_top">
                </div>
                <input id="vmutc_text_padding_top_input" name="vmutc_text_padding_top_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_padding_top_input_important" class="vmutc_important_input" name="vmutc_text_padding_top_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_padding_right_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Right','css-magician');?>  
                </span>
                <div id="vmutc_text_padding_right">
                </div>
                <input id="vmutc_text_padding_right_input" name="vmutc_text_padding_right_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_padding_right_input_important" class="vmutc_important_input" name="vmutc_text_padding_right_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_text_padding_bottom_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Bottom','css-magician');?>   
                </span>
                <div id="vmutc_text_padding_bottom">
                </div>
                <input id="vmutc_text_padding_bottom_input" name="vmutc_text_padding_bottom_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_text_padding_bottom_input_important" class="vmutc_important_input" name="vmutc_text_padding_bottom_input_important" value="" />
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-size-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Width / Height','css-magician');?> 
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER SIZE HELP','css-magician');?>" data-help="stylizer-width"></i>
        </div>
        <div id="vmutc-size-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_element_width_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Width','css-magician');?>    
                </span>
                <div id="vmutc_element_width">
                </div>
                <input id="vmutc_element_width_input" name="vmutc_element_width_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_width_input_important" class="vmutc_important_input" name="vmutc_element_width_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_width_pixels" name="vmutc_width_pixels" class="vmutc-stop-propagation" value="%" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>   
                    </span>
                </div>
                <span class="vmutc_important " data-id="vmutc_element_height_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Height','css-magician');?>  
                </span>
                <div id="vmutc_element_height">
                </div>
                <input id="vmutc_element_height_input" name="vmutc_element_height_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_height_input_important" class="vmutc_important_input" name="vmutc_element_height_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_height_pixels" name="vmutc_height_pixels" class="vmutc-stop-propagation" value="1" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>  
                    </span>
                </div>
                <span class="vmutc_important " data-id="vmutc_element_min_width_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Min-Width','css-magician');?>  
                </span>
                <div id="vmutc_element_min_width">
                </div>
                <input id="vmutc_element_min_width_input" name="vmutc_element_min_width_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_min_width_input_important" class="vmutc_important_input" name="vmutc_element_min_width_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_min_width_pixels" name="vmutc_min_width_pixels" class="vmutc-stop-propagation" value="%" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>    
                    </span>
                </div>
                <span class="vmutc_important " data-id="vmutc_element_max_width_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Max-Width','css-magician');?>  
                </span>
                <div id="vmutc_element_max_width">
                </div>
                <input id="vmutc_element_max_width_input" name="vmutc_element_max_width_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_max_width_input_important" class="vmutc_important_input" name="vmutc_element_max_width_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_max_width_pixels" name="vmutc_max_width_pixels" class="vmutc-stop-propagation" value="%" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>  
                    </span>
                </div>
                <span class="vmutc_important " data-id="vmutc_element_min_height_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Min-Height','css-magician');?>  
                </span>
                <div id="vmutc_element_min_height">
                </div>
                <input id="vmutc_element_min_height_input" name="vmutc_element_min_height_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_min_height_input_important" class="vmutc_important_input" name="vmutc_element_min_height_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_min_height_pixels" name="vmutc_min_height_pixels" class="vmutc-stop-propagation" value="%" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>   
                    </span>
                </div>
                <span class="vmutc_important " data-id="vmutc_element_max_height_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Max-Height','css-magician');?>  
                </span>
                <div id="vmutc_element_max_height">
                </div>
                <input id="vmutc_element_max_height_input" name="vmutc_element_max_height_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_element_max_height_input_important" class="vmutc_important_input" name="vmutc_element_max_height_input_important" value="" />
                <div class="checkboxConfig vmutc_pixels" style="width:60px;">
                    <input type="checkbox" id="vmutc_max_height_pixels" name="vmutc_max_height_pixels" class="vmutc-stop-propagation" value="%" />
                    <span class="vmutc-box-span" title="<?php _e('Pixels','css-magician');?>">
                    <?php _e('Pixels','css-magician');?>  
                    </span>
                </div>
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-shadow-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Box Shadow','css-magician');?>    
            </p>
            <i class="iconhelp far fa-question-circle" data-title=" <?php _e('CSS MAGICIAN STYLIZER SHADOW HELP','css-magician');?>" data-help="stylizer-shadow"></i>
        </div>
        <div id="vmutc-shadow-box" class="vmutc-box vmutc_stylizer_tool">
            <span class="vmutc_important " data-id="vmutc_boxshadow_important">!</span>
            <input type="hidden" id="vmutc_boxshadow_important" class="vmutc_important_input" name="vmutc_boxshadow_important" value="" />
            <div class="vmutc_sliderBox">
                <span class="vmutc-box-span">
                <?php _e('Vertical','css-magician');?>
                </span>
                <div id="vmutc_boxshadow_V">
                </div>
                <input id="vmutc_boxshadow_V_input" name="vmutc_boxshadow_V_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
                <span class="vmutc-box-span">
                <?php _e('Horizontal','css-magician');?>    
                </span>
                <div id="vmutc_boxshadow_H">
                </div>
                <input id="vmutc_boxshadow_H_input" name="vmutc_boxshadow_H_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
                <span class="vmutc-box-span">
                <?php _e('Blur','css-magician');?>    
                </span>
                <div id="vmutc_boxshadow_Blur">
                </div>
                <input id="vmutc_boxshadow_Blur_input" name="vmutc_boxshadow_Blur_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
                <span class="vmutc-box-span">
                <?php _e('Spread','css-magician');?>     
                </span>
                <div id="vmutc_boxshadow_Spread">
                </div>
                <input id="vmutc_boxshadow_Spread_input" name="vmutc_boxshadow_Spread_input" type="text" class="sliderConfig vmutc_sliderPosDec vmutc_numeric" />
            </div>
            <span class="vmutc-box-span"> <?php _e('Shadow Color','css-magician');?></span>
            <input id='vmutc_boxshadow_color' type='text' value='' name='vmutc_boxshadow_color' class="vmutc_colors_selector">
            <input id='vmutc_boxshadow_color_real' type='hidden' value='' name='vmutc_boxshadow_color_real'>
            <p></p>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-position-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Position','css-magician');?>      
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER POSITION HELP','css-magician');?>" data-help="stylizer-position"></i>
        </div>
        <div id="vmutc-position-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_position_top_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Top','css-magician');?>   
                </span>
                <div id="vmutc_position_top">
                </div>
                <input id="vmutc_position_top_input" name="vmutc_position_top_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_position_top_input_important" class="vmutc_important_input" name="vmutc_position_top_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_position_left_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Left','css-magician');?>      
                </span>
                <div id="vmutc_position_left">
                </div>
                <input id="vmutc_position_left_input" name="vmutc_position_left_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_position_left_input_important" class="vmutc_important_input" name="vmutc_position_left_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_position_right_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Right','css-magician');?>         
                </span>
                <div id="vmutc_position_right">
                </div>
                <input id="vmutc_position_right_input" name="vmutc_position_right_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_position_right_input_important" class="vmutc_important_input" name="vmutc_position_right_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_position_bottom_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Bottom','css-magician');?>        
                </span>
                <div id="vmutc_position_bottom">
                </div>
                <input id="vmutc_position_bottom_input" name="vmutc_position_bottom_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_position_bottom_input_important" class="vmutc_important_input" name="vmutc_position_bottom_input_important" value="" />
                <span class="vmutc_important " data-id="vmutc_zindex_input_important">!</span>
                <span class="vmutc-box-span">
                <?php _e('Z-Index','css-magician');?>        
                </span>
                <div id="vmutc_zindex">
                </div>
                <input id="vmutc_zindex_input" name="vmutc_zindex_input" type="text" class="sliderConfig vmutc_numeric" />
                <input type="hidden" id="vmutc_zindex_input_important" class="vmutc_important_input" name="vmutc_zindex_input_important" value="" />
                <div class="checkboxConfig" style="width:330px;">
                    <span class="vmutc_important " data-id="vmutc_position_relative_important">!</span>
                    <input type="hidden" id="vmutc_position_relative_important" class="vmutc_important_input" name="vmutc_position_relative_important" value="" />
                    <span class="vmutc-box-span poplight" title="<?php _e('Position relative to place the element where you want.Should be normally used for specific item selected by ID.','css-magician');?>">
                    <?php _e('Position','css-magician');?>  
                    </span>                
                    <select id="vmutc_position_relative" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_position_relative" autocomplete="off" style="margin-left: -10px;">
                        <option selected="selected" value="none"><?php _e('none','css-magician');?>  </option>
                        <option value="absolute"><?php _e('absolute','css-magician');?></option>
                        <option value="relative"><?php _e('relative','css-magician');?></option>
                        <option value="fixed"><?php _e('fixed','css-magician');?></option>
                        <option value="static"><?php _e('static','css-magician');?></option>
                        <option value="sticky"><?php _e('sticky','css-magician');?></option>
                        <option value="inherit"><?php _e('inherit','css-magician');?></option>
                    </select> 
                          <span id="vmutc_warning_selection" class="vmutc_info_selected"><?php _e('Warning: only update that element not selected','css-magician');?> </span>
                        </div>
                <p></p>
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-transform-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Transform','css-magician');?>             
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER TRANSFORM HELP','css-magician');?>" data-help="stylizer-transform"></i>
        </div>
        <div id="vmutc-transform-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="vmutc_sliderBox">
                <span class="vmutc_important " data-id="vmutc_transform_important">!</span>
                <input type="hidden" id="vmutc_transform_important" class="vmutc_important_input" name="vmutc_transform_important" value="" />
                <br />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Scale','css-magician');?></span>
                <div id="vmutc_transform_scale"></div>
                <input id="vmutc_transform_scale_input" name="vmutc_transform_scale_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="1" />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Rotate','css-magician');?></span>
                <div id="vmutc_transform_rotate"></div>
                <input id="vmutc_transform_rotate_input" name="vmutc_transform_rotate_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="0" />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Translate X','css-magician');?></span>
                <div id="vmutc_transform_translateX">
                </div>
                <input id="vmutc_transform_translateX_input" name="vmutc_transform_translateX_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="0" />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Translate Y','css-magician');?></span>
                <div id="vmutc_transform_translateY">
                </div>
                <input id="vmutc_transform_translateY_input" name="vmutc_transform_translateY_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="0" />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Skew X','css-magician');?></span>
                <div id="vmutc_transform_skewX">
                </div>
                <input id="vmutc_transform_skewX_input" name="vmutc_transform_skewX_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="0" />
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Skew Y','css-magician');?></span>
                <div id="vmutc_transform_skewY">
                </div>
                <input id="vmutc_transform_skewY_input" name="vmutc_transform_skewY_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" value="0" />
                <br>
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-animation-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Simple Animation','css-magician');?> 
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER ANIMATION HELP','css-magician');?>" data-help="stylizer-animation"></i>
        </div>
        <div id="vmutc-animation-box" class="vmutc-box vmutc_stylizer_tool">
            <div class="vmutc_sliderBox" style="text-align: center;">
            <div>
                <span class="vmutc-box-span" style="text-align: right;margin-right: 10px;">
                <?php _e('When','css-magician');?>   
                </span>
                <select id="vmutc_animation_when" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_animation_when" autocomplete="off" style="margin-left: -110px;">
                    <option selected="selected" value="none"><?php _e('None','css-magician');?></option>
                    <option value="onRunFinished"><?php _e('On Load','css-magician');?></option>
                    <option value="mouseover"><?php _e('Hover','css-magician');?></option>
                    <option value="click"><?php _e('Click','css-magician');?></option>
                </select>
                </div>
                <br>
                <div>
                <span class="vmutc-box-span" style="text-align: right;margin-right: 10px;">
                <?php _e('Do Animation','css-magician');?>   
                </span>
                <select id="vmutc_animation_do" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_animation_do" autocomplete="off" style="margin-left: -110px;">
                    <optgroup label="Attention Seekers">
                        <option value="bounce">bounce</option>
                        <option value="flash">flash</option>
                        <option value="pulse">pulse</option>
                        <option value="rubberBand">rubberBand</option>
                        <option value="shake">shake</option>
                        <option value="swing">swing</option>
                        <option value="tada">tada</option>
                        <option value="wobble">wobble</option>
                        <option value="jello">jello</option>
                        <option value="heartBeat">heartBeat</option>
                    </optgroup>
                    <optgroup label="Bouncing Entrances">
                        <option value="bounceIn">bounceIn</option>
                        <option value="bounceInDown">bounceInDown</option>
                        <option value="bounceInLeft">bounceInLeft</option>
                        <option value="bounceInRight">bounceInRight</option>
                        <option value="bounceInUp">bounceInUp</option>
                    </optgroup>
                    <optgroup label="Bouncing Exits">
                        <option value="bounceOut">bounceOut</option>
                        <option value="bounceOutDown">bounceOutDown</option>
                        <option value="bounceOutLeft">bounceOutLeft</option>
                        <option value="bounceOutRight">bounceOutRight</option>
                        <option value="bounceOutUp">bounceOutUp</option>
                    </optgroup>
                    <optgroup label="Fading Entrances">
                        <option value="fadeIn">fadeIn</option>
                        <option value="fadeInDown">fadeInDown</option>
                        <option value="fadeInDownBig">fadeInDownBig</option>
                        <option value="fadeInLeft">fadeInLeft</option>
                        <option value="fadeInLeftBig">fadeInLeftBig</option>
                        <option value="fadeInRight">fadeInRight</option>
                        <option value="fadeInRightBig">fadeInRightBig</option>
                        <option value="fadeInUp">fadeInUp</option>
                        <option value="fadeInUpBig">fadeInUpBig</option>
                    </optgroup>
                    <optgroup label="Fading Exits">
                        <option value="fadeOut">fadeOut</option>
                        <option value="fadeOutDown">fadeOutDown</option>
                        <option value="fadeOutDownBig">fadeOutDownBig</option>
                        <option value="fadeOutLeft">fadeOutLeft</option>
                        <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                        <option value="fadeOutRight">fadeOutRight</option>
                        <option value="fadeOutRightBig">fadeOutRightBig</option>
                        <option value="fadeOutUp">fadeOutUp</option>
                        <option value="fadeOutUpBig">fadeOutUpBig</option>
                    </optgroup>
                    <optgroup label="Flippers">
                        <option value="flip">flip</option>
                        <option value="flipInX">flipInX</option>
                        <option value="flipInY">flipInY</option>
                        <option value="flipOutX">flipOutX</option>
                        <option value="flipOutY">flipOutY</option>
                    </optgroup>
                    <optgroup label="Lightspeed">
                        <option value="lightSpeedIn">lightSpeedIn</option>
                        <option value="lightSpeedOut">lightSpeedOut</option>
                    </optgroup>
                    <optgroup label="Rotating Entrances">
                        <option value="rotateIn">rotateIn</option>
                        <option value="rotateInDownLeft">rotateInDownLeft</option>
                        <option value="rotateInDownRight">rotateInDownRight</option>
                        <option value="rotateInUpLeft">rotateInUpLeft</option>
                        <option value="rotateInUpRight">rotateInUpRight</option>
                    </optgroup>
                    <optgroup label="Rotating Exits">
                        <option value="rotateOut">rotateOut</option>
                        <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                        <option value="rotateOutDownRight">rotateOutDownRight</option>
                        <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                        <option value="rotateOutUpRight">rotateOutUpRight</option>
                    </optgroup>
                    <optgroup label="Sliding Entrances">
                        <option value="slideInUp">slideInUp</option>
                        <option value="slideInDown">slideInDown</option>
                        <option value="slideInLeft">slideInLeft</option>
                        <option value="slideInRight">slideInRight</option>
                    </optgroup>
                    <optgroup label="Sliding Exits">
                        <option value="slideOutUp">slideOutUp</option>
                        <option value="slideOutDown">slideOutDown</option>
                        <option value="slideOutLeft">slideOutLeft</option>
                        <option value="slideOutRight">slideOutRight</option>
                    </optgroup>
                    <optgroup label="Zoom Entrances">
                        <option value="zoomIn">zoomIn</option>
                        <option value="zoomInDown">zoomInDown</option>
                        <option value="zoomInLeft">zoomInLeft</option>
                        <option value="zoomInRight">zoomInRight</option>
                        <option value="zoomInUp">zoomInUp</option>
                    </optgroup>
                    <optgroup label="Zoom Exits">
                        <option value="zoomOut">zoomOut</option>
                        <option value="zoomOutDown">zoomOutDown</option>
                        <option value="zoomOutLeft">zoomOutLeft</option>
                        <option value="zoomOutRight">zoomOutRight</option>
                        <option value="zoomOutUp">zoomOutUp</option>
                    </optgroup>
                    <optgroup label="Specials">
                        <option value="hinge">hinge</option>
                        <option value="jackInTheBox">jackInTheBox</option>
                        <option value="rollIn">rollIn</option>
                        <option value="rollOut">rollOut</option>
                    </optgroup>
                </select>
                </div>
                <br>
                <input type="checkbox" id="vmutc_animation_infinite" name="vmutc_animation_infinite" class="vmutc-stop-propagation vmutc_stylizer_tool" value="" style="margin-left: -110px;">
                <span class="vmutc-box-span vmutc_stylizer_tool" style="text-align: right;"><?php _e('Infinite loop','css-magician');?></span>
                <br><br>
                <span class="vmutc-box-span" style="text-align: right;margin-right: 10px;">
                <?php _e('Speed','css-magician');?> 
                </span>
                <select id="vmutc_animation_speed" type="select" class="selectConfig2 vmutc_stylizer_tool" name="vmutc_animation_speed" autocomplete="off" style="margin-left: -110px;margin-bottom: 10px;">
                    <option selected="selected" value="none"><?php _e('None','css-magician');?></option>
                    <option value="slow"><?php _e('Slow (2s)','css-magician');?></option>
                    <option value="slower"><?php _e('Slower (3s)','css-magician');?></option>
                    <option value="fast"><?php _e('Fast (800ms)','css-magician');?></option>
                    <option value="faster"><?php _e('Faster (500ms)','css-magician');?></option>
                </select>
                <br>
                <span id="vmutc-test-animation" class="vmutc-box-span-great vmutc-download vmutc_stylizer_tool"><?php _e('Test Animation','css-magician');?></span>
                <br>
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-svg-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('SVG','css-magician');?> 
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER SVG HELP','css-magician');?>" data-help="stylizer-svg"></i>
        </div>
        <div id="vmutc-svg-box" class="vmutc-box vmutc_stylizer_tool">
            <div>
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Stroke Color','css-magician');?></span>
                <input id='vmutc_svgstroke_color' type='text' value='' name='vmutc_svgstroke_color'>
                <input id='vmutc_svgstroke_color_real' type='hidden' value='' name='vmutc_svgstroke_color_real'><br /><br>
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Fill Color','css-magician');?></span>
                <input id='vmutc_svgfill_color' type='text' value='' name='vmutc_svgfill_color'>
                <input id='vmutc_svgfill_color_real' type='hidden' value='' name='vmutc_svgfill_color_real'><br /><br>
                <span class="vmutc-box-span vmutc_stylizer_tool"><?php _e('Stroke Width','css-magician');?></span>
                <div id="vmutc_svgstroke_width"></div>
                <input id="vmutc_svgstroke_width_input" name="vmutc_svgstroke_width_input" type="text" class="sliderConfig vmutc_stylizer_tool vmutc_numeric" />
            </div>
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-custom-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Custom CSS','css-magician');?>   
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER CUSTOM CSS HELP','css-magician');?>" data-help="stylizer-customcss"></i>
        </div>
        <div id="vmutc-custom-box" class="vmutc-box vmutc_stylizer_tool">
            <span class="vmutc-box-span poplight" title="<?php _e('Include all css separated by comma like that : color:red;font-size:12px;','css-magician');?>">
            <?php _e('Custom CSS','css-magician');?>
            </span>
            <textarea id="vmutc_custom_css" name="vmutc_custom_css" class="" rows="5" COLS="39" spellcheck="false"></textarea><br /><br />
            <input type="button" id="vmutc_custom_css_update" name="vmutc_custom_css_update" class="vmutc-stop-propagation" value="<?php _e('Update CSS','css-magician');?>" />
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-savedescription-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Description','css-magician');?>  
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER DESCRIPTION OF THE UPDATE HELP','css-magician');?>" data-help="stylizer-description"></i>
        </div>
        <div id="vmutc-savedescription-box" class="vmutc-box vmutc_stylizer_tool">
            <span class="vmutc-box-span-great poplight" title="<?php _e('Simply describe what the update do.That info will be displayed when the mouse is over historic line','css-magician');?>">
            <?php _e('Description on the update','css-magician');?>   
            </span>
            <textarea id="vmutc_savedescription" name="vmutc_savedescription" class="" rows="5" COLS="39" spellcheck="false"></textarea><br /><br />
        </div>
        <div class="list-tools vmutc_stylizer_tool">
            <p id="vmutc-addblock-title" class="vmutc_stylizer_tool vmutc_title-tab up">
            <?php _e('Add New Block','css-magician');?>     
            </p>
            <i class="iconhelp far fa-question-circle" data-title="<?php _e('CSS MAGICIAN STYLIZER ADD BLOCK HELP','css-magician');?>" data-help="stylizer-addblock"></i>
        </div>
        <div id="vmutc-addblock-box" class="vmutc-box vmutc_stylizer_tool">
            <div>
                <span class="vmutc-box-span-great">
                <?php _e('Where to put the Block','css-magician');?> 
                </span>
                <select id="vmutc_addblock_where" type="select" class="selectConfig2 vmutc_stylizer_tool vmutc-stop-propagation" name="vmutc_addblock_where" autocomplete="off">
                    <option value="append" class="vmutc-stop-propagation"><?php _e('Append','css-magician');?>
                    </option>
                    <option value="prepend" class="vmutc-stop-propagation"><?php _e('Prepend','css-magician');?>
                    </option>
                    <option value="before" class="vmutc-stop-propagation"><?php _e('Before','css-magician');?>
                    </option>
                    <option value="after" class="vmutc-stop-propagation" selected><?php _e('After','css-magician');?></option>
                </select>
                <br>
                <div class="vmutc_yes_no_check2">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Create new Block','css-magician');?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc-create-addGridstack" name="vmutc-create-addGridstack">
                        <label for="vmutc-create-addGridstack"></label>
                    </div>
                </div>
            </div>
        </div>
        <div id="vmutc-block-advertisement" class="vmutc_stylizer_tool">
            <i class="iconhelp far fa-question-circle" style="position:absolute;right:0px;" data-title="<?php _e('CSS MAGICIAN STYLIZER FOOTER HELP','css-magician');?>" data-help="stylizer-footer"></i><br>
            <div>
                <div class="vmutc_yes_no_check" style="width:170px;">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Hide Block Editor','css-magician');?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_hide_ge_block" name="vmutc_hide_ge_block" />
                        <label for="vmutc_hide_ge_block"></label>
                    </div>
                </div>
                <div class="vmutc_yes_no_check" style="width:170px;">
                    <span class="label-tooltip" data-toggle="tooltip" data-html="true"  ><?php _e('Enable Dom Inspector','css-magician');?></span>
                    <div class="slideThree">
                        <input type="checkbox" value="" id="vmutc_hide_dominspector" name="vmutc_hide_dominspector" />
                        <label for="vmutc_hide_dominspector"></label>
                    </div>
                </div>
            </div>
            <div>
                <i id="vmutc_mobile_mode" class="fas fa-mobile-alt fa-2x vmutc_responsive_icon" title="<?php _e('Mobile','css-magician');?>" data-rel="openResponsiveView" data-width="500" data-height="500" data-url="">
                </i>
                <i id="vmutc_tablet_mode" class="fas fa-tablet-alt fa-2x vmutc_responsive_icon" title="<?php _e('Tablet','css-magician');?>" data-rel="openResponsiveView" data-width="500" data-height="500" data-url="">
                </i>
                <i id="vmutc_desktop_mode" class="fas fa-desktop fa-2x vmutc_responsive_icon" title="<?php _e('Desktop','css-magician');?>" data-rel="openResponsiveView" data-width="500" data-height="500" data-url="">
                </i>
                </i>
            </div>
            <img src="<?php echo $advertisement_image; ?>" alt="Css Magician" class="vmutc_stylizer_tool" />
            <div id="vmutc_info_submenu" class="vmutc_info_submenu"><?php _e('When a submenu is open, click the CTRL key to force it to remain open','css-magician');?></div>
        </div>
        <span class="css_magician_version"><?php _e('V.'.CSSM_VERSION,'css-magician');?></span>
        <div id="history_container">
        <?php
        if($histories)
        {
            foreach ($histories as $history)
            {
                ?>
                <div id="history_container_div_<?php echo $history->id;?>" class="history_container">
                <button type="submit" data-value="<?php echo $history->id; ?>" class="history_container_button vmutc_stylizer_tool <?php if ($history->active==1){ echo 'history_selected'; } ?>" name="saveHistoric" title="<?php echo $history->description;?>">
                <?php echo $history->date_add; ?>
                </button>
                <i data-value="<?php echo $history->id;?>" class="fas fa-trash-alt vmutc-history-delete">
                </i>
            </div>
         <?php   }           
        }?>
            <input type="hidden" id="vmutc-history-selected" name="vmutc-history-selected" value="" />
        </div>
    </div>
    <input type="hidden" id="vmutc-element-selected" name="vmutc-element-selected" value="" />
    <div id="vmutc_block">
        <input type="hidden" id="vmutc_block_id" value="" />
        <input type="hidden" id="vmutc_blockColumn_id" value="" />
    </div>
</form>
<div id="vmutcuploadBackgroundImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadbackgroundropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadSectionBackgroundImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadsectionbackgroundropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadSectionBackgroundVideoWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Video','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadsectionbackgroundvideodropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadcolumnBackgroundImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadcolumnbackgroundropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadcolumnBackgroundVideoWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Video','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadcolumnbackgroundvideodropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadvideoWidgetWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Video','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadvideowidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadaudioWidgetWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Audio','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadaudiowidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadTransparentTextBackgroundImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadtransparenttextbackgroundropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadHotspotImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Background Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadimagehotspotdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadimageTextWidgetImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadimagetextwidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadimageWidgetImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadimagewidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadswiperSliderWidgetImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadswippersliderwidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadSvgWidgetSvgWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload SVG','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadsvgwidgetdropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_uploadaudioWidgetImageWin" class="popup_block">
    <p class="popup_block_title">
    <?php _e('Upload Image','css-magician');?>
    </p>
    <div class="table1config" style="width:100%;">
        <div class="dropzone" id="vmutcuploadaudiowidgetimagedropzone">
            <div class="fallback">
                <input name="file" type="file" />
            </div>
        </div>
    </div>
</div>
<div id="vmutc_inspector_all">
    <span class="vmutc_inspector_title">  <?php _e('CSS EDITOR','css-magician');?></span>
    <form id="vmutc_inspector_form" action="" method="post" class="">
        <div id="vmutc_inspector_container" class="vmutc_inspector">
            <div id="vmum_ace_editor1"></div>
            <div id="vmutcloader2" class="vmutc_stylizer_tool">
                <svg id="loading2">
                    <g>
                        <path class="ld-l" fill="#39C0C4" d="M43.6,33.2h9.2V35H41.6V15.2h2V33.2z" />
                        <path class="ld-o" fill="#39C0C4" d="M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2
		c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3
		C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9
		c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3
		c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z" />
                        <path class="ld-a" fill="#39C0C4" d="M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z" />
                        <path class="ld-d" fill="#39C0C4" d="M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3
		c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4
		c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z" />
                        <path class="ld-i" fill="#39C0C4" d="M121.2,35h-2V15.2h2V35z" />
                        <path class="ld-n" fill="#39C0C4" d="M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z" />
                        <path class="ld-g" fill="#39C0C4" d="M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9
		c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9
		s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5
		c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z" />
                    </g>
                </svg>
                <svg width='182px' height='182px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple2">
                    <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                    <g>
                        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                        <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                            <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                        </circle>
                    </g>
                    <g>
                        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                        <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                            <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                        </circle>
                    </g>
                </svg>
            </div>
            <em id="vmutc_inspector_refresh" class="vmutc_circular_button far fa-circle" title="<?php _e('Refresh current css','css-magician');?>"></em>
            <em id="vmutc_inspector_clean" class="vmutc_circular_button fas fa-magic" title="<?php _e('Remove empties rules','css-magician');?>"></em>
            <em id="vmutc_inspector_clean_all" class="vmutc_circular_button fas fa-comments" title="<?php _e('Remove comments','css-magician');?>"></em>
            <em id="vmutc_inspector_important" class="vmutc_circular_button" title="<?php _e('Add !important value at cursor position','css-magician');?>">!</em>
            <input id="vmutc_update_inspector_color" type='text' value='' name='vmutc_update_inspector_color' class="vmutc_inspector_color_selector" />
            <a href="#" id="vmutc_inspector_add" class="btn btn-default btn-vmutc-inspector" title="<?php _e('Add current css to final css file','css-magician');?>"><?php _e('Add','css-magician');?><i class="fas fa-arrow-right"></i></a>
        </div>
        <div id="vmutc_inspector_container2" class="vmutc_inspector">
            <div id="vmum_ace_editor2"></div>
            <i class="iconhelp fas fa-question-circle" id="vmutc_inspector_help" data-help="css_inspector_help" data-title="  <?php _e('CSS MAGICIAN INSPECTOR HELP','css-magician');?>"></i>
            <i class="fas fa-times-circle" aria-hidden="true" id="vmutc_inspector_close" title="  <?php _e('Css Magican Inspector Close','css-magician');?>"></i>
            <a href="#" id="vmutc_inspector_delete" class="btn btn-default btn-vmutc-inspector" title="<?php _e('Delete the saved css file','css-magician');?>">  <?php _e('Delete','css-magician');?><i class="fas fa-trash icon_inspector"></i></a>
            <a href="#" id="vmutc_inspector_save" class="btn btn-default btn-vmutc-inspector" title="<?php _e('Save the css file','css-magician');?>"> <?php _e('Save','css-magician');?> <i class="fas fa-save icon_inspector"></i></a>
            <span id="vmutc_inspector_msg"></span>
        </div>
    </form>
</div>
<!-- Javascript Editor -->
<div id="vmutc_customjs_all">
    <span class="vmutc_inspector_title"><?php _e('JAVASCRIPT EDITOR','css-magician');?></span>
    <form id="vmutc_customjs_form" action="" method="post" class="">
        <div id="vmutc_customjs_container" class="vmutc_inspector">
            <div id="vmum_ace_editor3"></div>
            <i class="iconhelp fas fa-question-circle" id="vmutc_customjs_help" data-title="<?php _e('Css Magician Javascript Editor','css-magician');?>" data-help="javascript_editor_help" title="<?php _e('CSS MAGICIAN CUSTOM JAVASCRIPT HELP','css-magician');?>"></i>
            <i class="fas fa-times-circle" aria-hidden="true" id="vmutc_customjs_close" title="<?php _e('Css Magican Custom Javascript Close','css-magician');?>"></i>
            <a href="#" id="vmutc_customjs_save" class="btn btn-default btn-vmutc-inspector" title="<?php _e('Save the javascript file','css-magician');?>"><?php _e('Save','css-magician');?><i class="fas fa-save icon_inspector"></i></a>
            <span id="vmutc_customjs_msg"></span>
        </div>
    </form>
</div>
<!-- End Javascript Editor -->
</div>
</div>
