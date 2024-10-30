/* 
 *  CSS MAGICIAN
 *
 * @category front office features
 * @authors presta-magician.com <contact@presta-magician.com>
 * @copyright Presta Magician 2015-2020
 * @version 1.0.0
 * @website <https://www.presta-magician.com.com>
 
 * @file stylizer17.js
 *
* @license: GPLv2
International Registered Trademark & Property of Presta Magician 
 */

jQuery.fn.uniform = function () {
        return this;
    };
var animateClasses = "animated infinite slow slower fast faster bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat animationCursor gridstack-editing ui-sortable ui-droppable ui-draggable ui-resizable ui-resizable-autohide ui-draggable-handle";
var baseDir = jQuery('#cssm_base_dir').val();
var initialHTML = '';
var arrayselectedElementClass = '';
var arrayselectedElementId = '';
var originGradientPicker = false;
var originAllHandlersObj = {};
var origintextGradientPicker = false;
var origintextAllHandlersObj = {};
var arrayselectedElement = '';
var clonedRow = false;
var editor = null;
var editor2 = null;
var editor3 = null;
var screenshot = ''; 
var colorPicker = false;        

if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
DOMTokenList.prototype.removeMany = function (classes) {
    var array = classes.split(/\s+/);
    for (var i = 0, length = array.length; i < length; i++) {
        this.remove(array[i]);
    }
}
async function getcss(arrayselectedElement) {
    jQuery("#vmutc_text_margins_all").prop("checked", false);
    jQuery("#vmutc_text_paddings_all").prop("checked", false);
    jQuery("#vmutc_borders_all").prop("checked", false);
    jQuery("#vmutc_borders_width_all").prop("checked", false);
    jQuery(".font-picker.fp-select > span").html(cssmTranslate.fontpickerselect);

    jQuery("#vmutc_text_weight").prop("checked", false);
    jQuery("#vmutc_text_style").prop("checked", false);
    jQuery("#vmutc_width_pixels").prop("checked", false);
    jQuery("#vmutc_height_pixels").prop("checked", false);
    jQuery("#vmutc_BackgroundImage_input").val("");
    jQuery("[name=vmutcrepeat]").prop("checked", false);
    jQuery("[name=vmutcattachment]").prop("checked", false);
    jQuery("[name=vmutc_back_size]").prop("checked", false);
    jQuery("#vmutc_custom_css").val("");
    jQuery("#vmutc_descriptionsave").val("");
    jQuery("#vmutc_originGradientSelect").prop("checked", false);
    jQuery('#vmutc_originGradientContainer').hide();
    jQuery("#vmutc_origintextGradientSelect").prop("checked", false);
    jQuery('#vmutc_origintextGradientContainer').hide();
    jQuery("#vmutc_transform_scale_input").val("1");
    jQuery("#vmutc_transform_scale").slider("value", 1);
    jQuery("#vmutc_transform_rotate_input").val("0");
    jQuery("#vmutc_transform_rotate").slider("value", 0);
    jQuery("#vmutc_transform_translateX_input").val("0");
    jQuery("#vmutc_transform_translateX").slider("value", 0);
    jQuery("#vmutc_transform_translateY_input").val("0");
    jQuery("#vmutc_transform_translateY").slider("value", 0);
    jQuery("#vmutc_transform_skewX_input").val("0");
    jQuery("#vmutc_transform_skewX").slider("value", 0);
    jQuery("#vmutc_transform_skewY_input").val("0");
    jQuery("#vmutc_transform_skewY").slider("value", 0);
 
    var values = {
        id_theme: jQuery('#cssm_id_theme').val(),
        security: cssm_front_ajax_object.security,
        action: 'getCss',
    };
    screen_mode = get("screen_mode");
    jQuery.post(cssm_front_ajax_object.ajaxurl, values, function (datacss) {
        if (datacss && datacss != null) {

            if (typeof (screen_mode) == 'undefined' || screen_mode == "")
                screen_mode = "vmutc_desktop_mode";
                allCss = null;
                allAnimations = null;
                if(datacss.css!='')
                allCss = JSON.parse(datacss.css);
                if(datacss.animations !='')
                 allAnimations = JSON.parse(datacss.animations);
                if (allCss != null) {
                attributCss = allCss[arrayselectedElement];
                attributCssHover = allCss[arrayselectedElement + ':hover'];
                }
                if (allAnimations != null)
                attributAnimation = allAnimations[arrayselectedElement];
                if (allAnimations && typeof attributAnimation !== 'undefined') {
                    for (var k3 in attributAnimation) {
                        if (k3 == 'when') {
                            jQuery('#vmutc_animation_when').val(attributAnimation[k3]);
                        }
                        if (k3 == 'do') {
                            jQuery('#vmutc_animation_do').val(attributAnimation[k3]);
                        }
                        if (k3 == 'infinite') {
                            if (attributAnimation[k3] == 'infinite')
                                jQuery("#vmutc_animation_infinite").prop("checked", true);
                        }
                        if (k3 == 'speed') {
                            jQuery('#vmutc_animation_speed').val(attributAnimation[k3]);
                        }
                    }
                }
            if (allCss && typeof attributCssHover !== 'undefined') {
                for (var k2 in attributCssHover) {
                    if (typeof (attributCssHover[k2][screen_mode]) == 'undefined')
                        continue;
                    if (k2 == 'color: ') {
                        jQuery("#vmutc_text_color_hover").spectrum("set", attributCssHover[k2][screen_mode].replace(" !important", ""));
                        if (attributCssHover[k2][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_color_hover_important");
                        }
                        jQuery("#vmutc_text_color_hover_real").val(attributCssHover[k2][screen_mode].replace(" !important", ""));
                    }
                    if (k2 == 'background-color: ') {
                        jQuery("#vmutc_background_color_hover").spectrum('set', attributCssHover[k2][screen_mode].replace(" !important", ""));
                        if (attributCssHover[k2][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_color_hover_important");
                        }
                        jQuery("#vmutc_background_color_hover_real").val(attributCssHover[k2][screen_mode].replace(" !important", ""));
                    }
                }
            }
            if (allCss && typeof attributCss !== 'undefined') {
                for (var k in attributCss) {
                    if (typeof (attributCss[k][screen_mode]) == 'undefined')
                        continue;
                    if (k == 'border-top-left-radius: ') {
                        jQuery("#vmutc_border_left_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_left_top_input_important");
                        }
                        jQuery("#vmutc_border_left_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-top-right-radius: ') {
                        jQuery("#vmutc_border_right_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_right_top_input_important");
                        }
                        jQuery("#vmutc_border_right_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-bottom-right-radius: ') {
                        jQuery("#vmutc_border_right_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_right_bottom_input_important");
                        }
                        jQuery("#vmutc_border_right_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-bottom-left-radius: ') {
                        jQuery("#vmutc_border_left_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_left_bottom_input_important");
                        }
                        jQuery("#vmutc_border_left_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-left-width: ') {
                        jQuery("#vmutc_border_width_left_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_width_left_input_important");
                        }
                        jQuery("#vmutc_border_width_left").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-top-width: ') {
                        jQuery("#vmutc_border_width_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_width_top_input_important");
                        }
                        jQuery("#vmutc_border_width_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-right-width: ') {
                        jQuery("#vmutc_border_width_right_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_width_right_input_important");
                        }
                        jQuery("#vmutc_border_width_right").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-bottom-width: ') {
                        jQuery("#vmutc_border_width_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_width_bottom_input_important");
                        }
                        jQuery("#vmutc_border_width_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'border-left-style: ') {
                        jQuery("#vmutc_border_style_left").val((attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'border-top-style: ') {
                        jQuery("#vmutc_border_style_top").val((attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'border-right-style: ') {
                        jQuery("#vmutc_border_style_right").val((attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'border-bottom-style: ') {
                        jQuery("#vmutc_border_style_bottom").val((attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'border-color: ') {
                        jQuery("#vmutc_border_colors").spectrum("set", attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_borders_color_important");
                        }
                        jQuery("#vmutc_border_colors_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'border-left-color: ') {
                        jQuery("#vmutc_border_left_color").spectrum("set", attributCss[k].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_left_color_important");
                        }
                        jQuery("#vmutc_border_left_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'border-top-color: ') {
                        jQuery("#vmutc_border_top_color").spectrum("set", attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_top_color_important");
                        }
                        jQuery("#vmutc_border_top_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'border-right-color: ') {
                        jQuery("#vmutc_border_right_color").spectrum("set", attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_right_color_important");
                        }
                        jQuery("#vmutc_border_right_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'border-bottom-color: ') {
                        jQuery("#vmutc_border_bottom_color").spectrum("set", attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_border_bottom_color_important");
                        }
                        jQuery("#vmutc_border_bottom_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'color: ') {
                        jQuery("#vmutc_text_color").spectrum("set", attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_color_important");
                        }
                        jQuery("#vmutc_text_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'font-family: ') {
                        jQuery("#vmutc_text_font").val(attributCss[k][screen_mode].replace(" !important", "")).trigger('change');
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_font_important");
                        }
                        jQuery(".font-picker.fp-select > span").html(attributCss[k][screen_mode].replace(" !important", ""));                                 
            
                     }
                    if (k == 'font-size: ') {
                        jQuery("#vmutc_text_size_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_size_input_important");
                        }
                        jQuery("#vmutc_text_size").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'line-height: ') {
                        jQuery("#vmutc_text_lineheight_input").val((attributCss[k][screen_mode]).replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_lineheight_input_important");
                        }
                        jQuery("#vmutc_text_lineheight").slider("value", (attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'font-weight: ') {
                        if ((attributCss[k][screen_mode]).replace(" !important", "") == "bold") {
                            jQuery("#vmutc_text_weight").prop("checked", true);
                            jQuery("#vmutc_text_weight").val("bold");
                        }
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_weight_important");
                        }
                    }
                    if (k == 'font-style: ') {
                        if ((attributCss[k][screen_mode]).replace(" !important", "") == "italic") {
                            jQuery("#vmutc_text_style").prop("checked", true);
                            jQuery("#vmutc_text_style").val("italic");
                        }
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_style_important");
                        }
                    }
                    if (k == 'text_shadow_H') {
                        jQuery("#vmutc_text_shadow_H_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'text_shadow_V') {
                        jQuery("#vmutc_text_shadow_V_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'text_shadow_Blur') {
                        jQuery("#vmutc_text_shadow_Blur_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'text_shadow_color') {
                        jQuery("#vmutc_text_shadow_color").spectrum("set", attributCss[k][screen_mode]);
                        jQuery("#vmutc_text_shadow_color_real").val(attributCss[k][screen_mode]);
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_shadow_important");
                        }
                    }
                    if (k == 'margin-left: ') {
                        jQuery("#vmutc_text_margin_left_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_margin_left_input_important");
                        }
                        jQuery("#vmutc_text_margin_left").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'margin-top: ') {
                        jQuery("#vmutc_text_margin_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_margin_top_input_important");
                        }
                        jQuery("#vmutc_text_margin_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'margin-right: ') {
                        jQuery("#vmutc_text_margin_right_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_margin_right_input_important");
                        }
                        jQuery("#vmutc_text_margin_right").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'margin-bottom: ') {
                        jQuery("#vmutc_text_margin_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_margin_bottom_input_important");
                        }
                        jQuery("#vmutc_text_margin_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'padding-left: ') {
                        jQuery("#vmutc_text_padding_left_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_padding_left_input_important");
                        }
                        jQuery("#vmutc_text_padding_left").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'padding-top: ') {
                        jQuery("#vmutc_text_padding_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_padding_top_input_important");
                        }
                        jQuery("#vmutc_text_padding_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'padding-right: ') {
                        jQuery("#vmutc_text_padding_right_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_padding_right_input_important");
                        }
                        jQuery("#vmutc_text_padding_right").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'padding-bottom: ') {
                        jQuery("#vmutc_text_padding_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_padding_bottom_input_important");
                        }
                        jQuery("#vmutc_text_padding_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'boxshadow_H') {
                        jQuery("#vmutc_boxshadow_H_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'boxshadow_V') {
                        jQuery("#vmutc_boxshadow_V_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'boxshadow_Blur') {
                        jQuery("#vmutc_boxshadow_Blur_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'boxshadow_Spread') {
                        jQuery("#vmutc_boxshadow_Spread_input").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'boxshadow_color') {
                        jQuery("#vmutc_boxshadow_color").spectrum("set", attributCss[k][screen_mode]);
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_boxshadow_important");
                        }
                        jQuery("#vmutc_boxshadow_color_real").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'background-color: ') {
                        jQuery("#vmutc_background_color").spectrum('set', attributCss[k][screen_mode].replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_color_important");
                        }
                        jQuery("#vmutc_background_color_real").val(attributCss[k][screen_mode].replace(" !important", ""));
                    }
                    if (k == 'backgroundImageName') {
                        jQuery("#vmutc_BackgroundImage_input").val((attributCss[k][screen_mode].replace(" !important", "")));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_BackgroundImage_input_important");
                        }
                    }
                    if (k == 'backgroundPositionX') {
                        jQuery("#vmutc_background_left_input").val((attributCss[k][screen_mode].replace(" !important", "")));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_left_input_important");
                        }
                        jQuery("#vmutc_background_left").slider("value", (attributCss[k][screen_mode].replace(" !important", "")));
                    }
                    if (k == 'backgroundPositionY') {
                        jQuery("#vmutc_background_top_input").val((attributCss[k][screen_mode].replace(" !important", "")));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_top_input_important");
                        }
                        jQuery("#vmutc_background_top").slider("value", (attributCss[k][screen_mode].replace(" !important", "")));
                    }
                    if (k == 'backgroundSizeWidth') {
                        jQuery("#vmutc_background_size_width_input").val((attributCss[k][screen_mode].replace(" !important", "")));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_size_width_input_important");
                        }
                        jQuery("#vmutc_background_size_width").slider("value", (attributCss[k][screen_mode].replace(" !important", "")));
                    }
                    if (k == 'backgroundSizeHeight') {
                        jQuery("#vmutc_background_size_height_input").val((attributCss[k][screen_mode].replace(" !important", "")));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_background_size_height_input_important");
                        }
                        jQuery("#vmutc_background_size_height").slider("value", (attributCss[k][screen_mode].replace(" !important", "")));
                    }
                    if (k == 'background-repeat: ') {
                        whatrepeat = attributCss[k][screen_mode].replace(" !important", "");
                        if (whatrepeat != '')
                            jQuery('[name=vmutcrepeat][value=' + whatrepeat + ']').prop("checked", true);
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutcrepeat_important");
                        }
                    }
                    if (k == 'background-attachment: ') {
                        whatattachment = attributCss[k][screen_mode].replace(" !important", "");
                        if (whatattachment != '')
                            jQuery('[name=vmutcattachment][value=' + whatattachment + ']').prop("checked", true);
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_attachment_important");
                        }
                    }
                    if (k == 'backgroundSizeText') {
                        whatsize = attributCss[k][screen_mode].replace(" !important", "");
                        if (whatsize != '')
                            jQuery('[name=vmutc_back_size][value=' + whatsize + ']').prop("checked", true);
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_back_size_important");
                        }
                    }
                    if (k == 'only_element') {
                        if (attributCss[k][screen_mode] == "1" || jQuery("#vmutc_only_element").prop("checked") == true) {
                            jQuery("#vmutc_only_element").prop("checked", true);
                            jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoid);
                            jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningok);
                            jQuery("#vmutc_warning_selection").addClass("vmutc_warning_ok");
                        } else {
                            jQuery("#vmutc_only_element").prop("checked", false);
                        }
                    }
                    if (k == 'custom_css') {
                        if (attributCss[k][screen_mode] != "")
                            customCss = attributCss[k][screen_mode];
                        else
                            customCss = "";
                        jQuery("#vmutc_custom_css").val(customCss);
                    }
                    if (k == 'savedescription') {
                        if (attributCss[k][screen_mode] != "")
                            saveDescription = attributCss[k][screen_mode];
                        else
                            saveDescription = "";
                        jQuery("#vmutc_savedescription").val(saveDescription);
                    }
                    if (k == 'left: ') {
                        jQuery("#vmutc_position_left_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_position_left_input_important");
                        }
                        jQuery("#vmutc_position_left").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'top: ') {
                        jQuery("#vmutc_position_top_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_position_top_input_important");
                        }
                        jQuery("#vmutc_position_top").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'right: ') {
                        jQuery("#vmutc_position_right_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_position_right_input_important");
                        }
                        jQuery("#vmutc_position_right").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'bottom: ') {
                        jQuery("#vmutc_position_bottom_input").val((attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_position_bottom_input_important");
                        }
                        jQuery("#vmutc_position_bottom").slider("value", (attributCss[k][screen_mode]).replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'position: ') {
                        jQuery("#vmutc_position_relative").val((attributCss[k][screen_mode]).replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_position_relative_important");
                        }
                    }
                    if (k == 'text-transform: ') {
                        jQuery("#vmutc_text_transform").val((attributCss[k][screen_mode]).replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_transform_important");
                        }
                    }
                    if (k == 'text-align: ') {
                        jQuery("#vmutc_text_align").val((attributCss[k][screen_mode]).replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_align_important");
                        }
                    }
                    if (k == 'letter-spacing: ') {
                        jQuery("#vmutc_text_letter_spacing_input").val((attributCss[k][screen_mode]).replace("inherit", "").replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_letter_spacing_input_important");
                        }
                        jQuery("#vmutc_text_letter_spacing").slider("value", (attributCss[k][screen_mode]).replace("inherit", "").replace(" !important", "").replace("px", ""));
                    }
                    if (k == 'word-spacing: ') {
                        jQuery("#vmutc_text_word_spacing_input").val((attributCss[k][screen_mode]).replace("inherit", "").replace(" !important", "").replace("px", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_text_word_spacing_input_important");
                        }
                        jQuery("#vmutc_text_word_spacing").slider("value", (attributCss[k][screen_mode]).replace("inherit", "").replace(" !important", "").replace("px", ""));
                    }
                    width_unit = "%";
                    height_unit = "%";
                    min_width_unit = "%";
                    min_height_unit = "%";
                    max_width_unit = "%";
                    max_height_unit = "%";
                    if (k == 'width_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_width_pixels").prop("checked", true);
                            jQuery("#vmutc_width_pixels").val("px");
                            width_unit = "px";
                        } else {
                            jQuery("#vmutc_width_pixels").prop("checked", false);
                            jQuery("#vmutc_width_pixels").val("%");
                            width_unit = "%";
                        }
                    }
                    if (k == 'min_width_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_min_width_pixels").prop("checked", true);
                            jQuery("#vmutc_min_width_pixels").val("px");
                            min_width_unit = "px";
                        } else {
                            jQuery("#vmutc_min_width_pixels").prop("checked", false);
                            jQuery("#vmutc_min_width_pixels").val("%");
                            min_width_unit = "%";
                        }
                    }
                    if (k == 'max_width_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_max_width_pixels").prop("checked", true);
                            jQuery("#vmutc_max_width_pixels").val("px");
                            max_width_unit = "px";
                        } else {
                            jQuery("#vmutc_max_width_pixels").prop("checked", false);
                            jQuery("#vmutc_max_width_pixels").val("%");
                            max_width_unit = "%";
                        }
                    }
                    if (k == 'height_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_height_pixels").prop("checked", true);
                            jQuery("#vmutc_height_pixels").val("px");
                            height_unit = "px";
                        } else {
                            jQuery("#vmutc_height_pixels").prop("checked", false);
                            jQuery("#vmutc_height_pixels").val("%");
                            height_unit = "%";
                        }
                    }
                    if (k == 'min_height_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_min_height_pixels").prop("checked", true);
                            jQuery("#vmutc_min_height_pixels").val("px");
                            min_height_unit = "px";
                        } else {
                            jQuery("#vmutc_min_height_pixels").prop("checked", false);
                            jQuery("#vmutc_min_height_pixels").val("%");
                            min_height_unit = "%";
                        }
                    }
                    if (k == 'max_height_unit') {
                        if (attributCss[k][screen_mode] == "px") {
                            jQuery("#vmutc_max_height_pixels").prop("checked", true);
                            jQuery("#vmutc_max_height_pixels").val("px");
                            max_height_unit = "px";
                        } else {
                            jQuery("#vmutc_max_height_pixels").prop("checked", false);
                            jQuery("#vmutc_max_height_pixels").val("%");
                            max_height_unit = "%";
                        }
                    }
                    if (k == 'width: ') {
                        jQuery("#vmutc_element_width_input").val((attributCss[k][screen_mode]).replace(width_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_width_input_important");
                        }
                        jQuery("#vmutc_element_width").slider("value", (attributCss[k][screen_mode]).replace(width_unit, "").replace(" !important", ""));
                    }
                    if (k == 'min-width: ') {
                        jQuery("#vmutc_element_min_width_input").val((attributCss[k][screen_mode]).replace(min_width_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_min_width_input_important");
                        }
                        jQuery("#vmutc_element_min_width").slider("value", (attributCss[k][screen_mode]).replace(min_width_unit, "").replace(" !important", ""));
                    }
                    if (k == 'max-width: ') {
                        jQuery("#vmutc_element_max_width_input").val((attributCss[k][screen_mode]).replace(max_width_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_max_width_input_important");
                        }
                        jQuery("#vmutc_element_max_width").slider("value", (attributCss[k][screen_mode]).replace(max_width_unit, "").replace(" !important", ""));
                    }
                    if (k == 'height: ') {
                        jQuery("#vmutc_element_height_input").val((attributCss[k][screen_mode]).replace(height_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_height_input_important");
                        }
                        jQuery("#vmutc_element_height").slider("value", (attributCss[k][screen_mode]).replace(height_unit, "").replace(" !important", ""));
                    }
                    if (k == 'min-height: ') {
                        jQuery("#vmutc_element_min_height_input").val((attributCss[k][screen_mode]).replace(min_height_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_min_height_input_important");
                        }
                        jQuery("#vmutc_element_min_height").slider("value", (attributCss[k][screen_mode]).replace(min_height_unit, "").replace(" !important", ""));
                    }
                    if (k == 'max-height: ') {
                        jQuery("#vmutc_element_max_height_input").val((attributCss[k][screen_mode]).replace(max_height_unit, "").replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_element_max_height_input_important");
                        }
                        jQuery("#vmutc_element_max_height").slider("value", (attributCss[k][screen_mode]).replace(max_height_unit, "").replace(" !important", ""));
                    }
                    if (k == 'transformScale') {
                        jQuery("#vmutc_transform_scale_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_scale").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformRotate') {
                        jQuery("#vmutc_transform_rotate_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_rotate").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformTranslateX') {
                        jQuery("#vmutc_transform_translateX_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_translateX").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformTranslateY') {
                        jQuery("#vmutc_transform_translateY_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_translateY").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformSkewX') {
                        jQuery("#vmutc_transform_skewX_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_skewX").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformSkewY') {
                        jQuery("#vmutc_transform_skewY_input").val(attributCss[k][screen_mode]);
                        jQuery("#vmutc_transform_skewY").slider("value", attributCss[k][screen_mode]);
                    }
                    if (k == 'transformImportant') {
                        if (attributCss[k][screen_mode] != '')
                            updateImportant("vmutc_transform_important");
                    }
                    if (k == 'z-index: ') {
                        jQuery("#vmutc_zindex_input").val((attributCss[k][screen_mode]).replace(" !important", ""));
                        if (attributCss[k][screen_mode].indexOf("!important") != -1) {
                            updateImportant("vmutc_zindex_input_important");
                        }
                        jQuery("#vmutc_zindex").slider("value", (attributCss[k][screen_mode]).replace(" !important", ""));
                    }
                    if (k == 'gradientused') {
                        if (attributCss[k][screen_mode] == "1") {
                            jQuery("#vmutc_originGradientSelect").prop("checked", true).val('1');
                            jQuery('#vmutc_originGradientContainer').show();
                        } else {
                            jQuery("#vmutc_originGradientSelect").prop("checked", false).val('');
                            jQuery('#vmutc_originGradientContainer').hide();
                        }
                    }
                    if (k == 'gradienthandlers') {
                        originGradientPicker.clear();
                        handlers = JSON.parse(attributCss[k][screen_mode]);
                        for (var property in handlers) {
                            originGradientPicker.addHandler(property, handlers[property])
                        }
                    }
                    if (k == 'gradientangle') {
                        var angle = attributCss[k][screen_mode];
                        jQuery('#vmutc_origingradientAngle').val(angle);
                        originGradientAngle.noUiSlider.set(angle);
                        originGradientPicker.setDirection(angle + 'deg');
                    }
                    if (k == 'gradientposition') {
                        var position = attributCss[k][screen_mode];
                        jQuery('#vmutc_origingradientPosition').val(position);
                        originGradientPicker.setDirection(position);
                    }
                    if (k == 'gradienttype') {
                        var type = attributCss[k][screen_mode];
                        jQuery('#vmutc_origingradientType').val(type);
                        if (type == 'linear' || type == 'repeating-linear') {
                            jQuery('#vmutc_origingradientPositionContainer').hide();
                            jQuery('#vmutc_origingradientAngleContainer').show();
                        }
                        if (type == 'radial' || type == 'repeating-radial') {
                            jQuery('#vmutc_origingradientAngleContainer').hide();
                            jQuery('#vmutc_origingradientPositionContainer').show();
                        }
                    }
                    ////
                    if (k == 'gradienttextused') {
                        if (attributCss[k][screen_mode] == "1") {
                            jQuery("#vmutc_origintextGradientSelect").prop("checked", true).val('1');
                            jQuery('#vmutc_origintextGradientContainer').show();
                        } else {
                            jQuery("#vmutc_origintextGradientSelect").prop("checked", false).val('');
                            jQuery('#vmutc_origintextGradientContainer').hide();
                        }
                    }
                    if (k == 'gradienttexthandlers') {
                        origintextGradientPicker.clear();
                        handlers = JSON.parse(attributCss[k][screen_mode]);
                        for (var property in handlers) {
                            origintextGradientPicker.addHandler(property, handlers[property])
                        }
                    }
                    if (k == 'gradienttextangle') {
                        var angle = attributCss[k][screen_mode];
                        jQuery('#vmutc_origintextgradientAngle').val(angle);
                        origintextGradientAngle.noUiSlider.set(angle);
                    }
                    if (k == 'gradienttextposition') {
                        var position = attributCss[k][screen_mode];
                        jQuery('#vmutc_origintextgradientPosition').val(position);
                        origintextGradientPicker.setDirection(position);
                    }
                    if (k == 'gradienttexttype') {
                        var type = attributCss[k][screen_mode];
                        jQuery('#vmutc_origintextgradientType').val(type);
                        if (type == 'linear' || type == 'repeating-linear') {
                            jQuery('#vmutc_origintextgradientPositionContainer').hide();
                            jQuery('#vmutc_origintextgradientAngleContainer').show();
                        }
                        if (type == 'radial' || type == 'repeating-radial') {
                            jQuery('#vmutc_origintextgradientAngleContainer').hide();
                            jQuery('#vmutc_origintextgradientPositionContainer').show();
                        }
                    }
                    if (k == 'stroke: ') {
                        jQuery("#vmutc_svgstroke_color").spectrum("set", attributCss[k][screen_mode]);
                        jQuery("#vmutc_svgstroke_color_real").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'fill: ') {
                        jQuery("#vmutc_svgfill_color").spectrum("set", attributCss[k][screen_mode]);
                        jQuery("#vmutc_svgfill_color_real").val(attributCss[k][screen_mode]);
                    }
                    if (k == 'stroke-width: ') {
                        jQuery("#vmutc_svgstroke_width").slider("value", attributCss[k][screen_mode]);
                        jQuery("#vmutc_svgstroke_width_input").val(attributCss[k][screen_mode]);
                    }
                    ////
                }
            }
        }
    }, 'json');

    return;
}

jQuery(document).ready(
    function ($) {

      var mySimmer = window.Simmer.configure({depth:10});     
        var Dom_Inspector = new DomInspector({
            exclude: ['#vmutc_stylizer', '.grid-stack'],
            theme: 'vmutc_dominspector_class'
        });
              
        $.ui.dialog.prototype._focusTabbable = function () {};
       
        jQuery('head').prepend('<meta http-equiv="cache-control" content="max-age=0" /><meta http-equiv="cache-control" content="no-cache" /><meta http-equiv="expires" content="0" /><meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" /><meta http-equiv="pragma" content="no-cache" />');
        jQuery('body').append('<div id="vmutc_styles_container"></div>').append('<style id="vmutc_final_styles_from_editor"></style>').append('<style id="vmutc_styles_from_editor"></style>');
        var loading = jQuery("#vmutcloader");
        jQuery(document).ajaxStart(function () {
            loading.show();
        });
        jQuery(document).ajaxStop(function () {
            loading.hide();
        });
        jQuery(document).on('keypress', '.vmutc_numeric', function (e) {
            var i = e.which ? e.which : e.keyCode,
                a = "0123456789-."
            return a.indexOf(String.fromCharCode(i)) >= 0 || 8 == i || 46 == i || 37 == i || 38 == i || 39 == i || 40 == i ? !0 : !1
        });

        /// widget window accordion
        var acc = jQuery('.vmutc_widgetWindow').find('.panel-heading');
        var i;

        for (i = 0; i < acc.length; i++) {
        jQuery(acc[i]).on('click', function(e){
           e.preventDefault();
           e.stopPropagation();
            jQuery(this).next().slideToggle();               
        });
        }   

      
      
        ////
        jQuery(function () {
            jQuery("#vmutc_tool_customization").draggable({
                cursor: "move",
                cancel: ".font-select, .selectConfig,.selectConfig2, input, textarea, .grp-handler"
            });
        });
        jQuery(function () {
            jQuery("#vmutc_inspector_all,#vmutc_customjs_all ").draggable({
                cursor: "move",
                cancel: "#vmum_ace_editor1, #vmum_ace_editor2, #vmum_ace_editor3",
                start: function () {
                    memo = jQuery(this).css('transition');
                    jQuery(this).css('transition', 'none');
                },
                stop: function () {
                    jQuery(this).css('transition', memo);
                }
            });
        });
        jQuery(function () {
            jQuery(".fp-modal").draggable({
                cursor: "move",              
            });
        });
        jQuery("#vmutc-history-button").click(function () {
            jQuery("#history_container").slideToggle();
        });
        jQuery('.history_container button').click(function (e) {
            jQuery('.history_container button').removeClass('history_selected');
            jQuery(this).addClass('history_selected');
            history_selected = jQuery(this).attr("data-value");
            jQuery('#vmutc-history-selected').val(history_selected);
            return;
        });
        jQuery("#vmutc-inspector-button").click(function () {
            jQuery("#vmutc_inspector_all").toggleClass('show_inspector');
            jQuery("#vmutc_update_inspector_color").spectrum("reflow");
            editor2.setValue('');
            var values = {
             //   id_shop: jQuery('#vmutc_id_shop').val(),
                theme: jQuery('#cssm_theme').val(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'loadCss',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        editor2.setValue(datacss);
                }
            });
        });

        jQuery("#vmutc_inspector_close").click(function () {
            jQuery("#vmutc_inspector_all").toggleClass('show_inspector');
            jQuery("#vmutc_update_inspector_color").spectrum("reflow");
            editor2.setValue('');        
        });

        jQuery("#vmutc-customjs-button").click(function () {
            jQuery("#vmutc_customjs_all").toggleClass('show_inspector');  
            editor3.setValue('');
            var values = {
           //     id_shop: jQuery('#vmutc_id_shop').val(),
                theme: jQuery('#cssm_theme').val(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'loadJs',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        editor3.setValue(datacss);
                }
            });        
        });

        jQuery('#vmutc_customjs_close').click(function(){
            jQuery("#vmutc_customjs_all").toggleClass('show_inspector');  
            editor3.setValue('');
        });

        jQuery(".vmutc_important").on("click", function () {
            jQuery(this).toggleClass('vmutc_important_yes');
            eleID = jQuery(this).attr("data-id");
            if (jQuery(this).hasClass("vmutc_important_yes")) {
                jQuery("#" + eleID).val(" !important");
            } else {
                jQuery("#" + eleID).val("");
            }
        });

        jQuery(document).on("click", "#easyimgallery img", function () {
            var what = jQuery('#easyimgallerywhat').val();
            if (what == 'element') {
                jQuery("#vmutc_BackgroundImage_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'block') {
                jQuery("#vmutc_SectionBackgroundImage_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'backgroundText') {
                jQuery("#vmutc_backgroundTextWidget_Image_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'swiperSliderWidget') {
                var order = jQuery('#easyimgalleryswiper').val();
              jQuery("#swiperSliderItemUrl_"+order).val($(this).attr("alt")).trigger("change");
            }
            if (what == 'column') {
                jQuery("#vmutc_columnBackgroundImage_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'imageTextWidget') {
                jQuery("#vmutc_imageTextWidget_Image_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'imageWidget') {
                jQuery("#vmutc_imageWidget_Image_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'imagehotspot') {
                jQuery("#vmutc_imagehotspotWidget_Image_input").val($(this).attr("alt")).trigger("change");
            }
            if (what == 'audioWidget') {
                jQuery("#vmutc_audioWidget_Image_input").val($(this).attr("alt")).trigger("change");
            }
          });



        jQuery(document).on('click', '.vmutc_galleryImageRemove', function (e) {
            var filename = jQuery(this).attr('data-name');
            var values = {
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'deleteGalleryImage',
                filename: filename,
            };
            Swal.fire({
                title: cssmTranslate.vmutcconfirm,
                text: cssmTranslate.vmutcconfirm2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: cssmTranslate.vmutccancel,
                confirmButtonText: cssmTranslate.vmutcyesdelete,
                customClass: {
                    container: 'always-on-top'
                }
            }).then((result) => {
                if (result.value) {
                    jQuery.ajax({
                        type: 'POST',
                        url: cssm_front_ajax_object.ajaxurl,
                        data: values,
                        dataType: 'html'
                    });
                    jQuery(this).parent('li').remove();
                } else {
                    return false;
                }
            });
        }); 
        Dropzone.options.vmutcuploadbackgroundropzone = {
            url: cssm_front_ajax_object.ajaxurl + '?security=' + cssm_front_ajax_object.security + '&id_theme=' + jQuery('#cssm_id_theme').val() + '&action=uploadImage',
            uploadMultiple: false,
            acceptedFiles: 'image/*',
            addRemoveLinks: true,
            dictDefaultMessage: cssmTranslate.vmutcdropzoneupload,
            dictRemoveFile: cssmTranslate.vmutcdropzoneremove,
            removedfile: function (file) {
                var filename = file.name;
                var values = {
                    id_theme: jQuery('#cssm_id_theme').val(),
                    security: cssm_front_ajax_object.security,
                    action: 'deleteGalleryImage',
                    filename: filename,
                };
                jQuery.ajax({
                    type: 'POST',
                    url: cssm_front_ajax_object.ajaxurl,
                    data: values,
                    dataType: 'html'
                });
                var _ref;
                return (_ref = file.previewElement) != null ? _ref.parentNode.removeChild(file.previewElement) : void 0;
            },
            init: function () {
                this.on("addedfile", function (file) {}, this.on("success", function (file) {
                    jQuery('#vmutc_BackgroundImage_input').val(file['name']).trigger("change");
                    if (jQuery('#openBackgroundGalleryDialog').is(':visible')) {
                        jQuery('#openBackgroundGallery').dialog('destroy').remove();
                        if (jQuery('div .popup_block').is(':visible'))
                            jQuery('div .popup_block').hide();
                        jQuery('div .popup_block a.closePopup').remove();
                        jQuery('#vmutcchooseBackgroundImage').trigger('click');
                    }
                }));
            }
        };

        jQuery(document).on("click", "#easyvideogallery video", function () { 
            var what = $('#easyvideogallerywhat').val();
            if (what == 'block') {    
              $("#vmutc_SectionBackgroundVideo_input").val($(this).attr("alt")).trigger("change");    
            } 
            if (what == 'column') {    
              $("#vmutc_columnBackgroundVideo_input").val($(this).attr("alt")).trigger("change");    
            } 
            if (what == 'videoWidget') {    
              $("#vmutc_videoWidget_input").val($(this).attr("alt")).trigger("change");    
            } 
          });

        jQuery(document).on('click', '.vmutc_galleryVideoRemove', function (e) {
            var filename = jQuery(this).attr('data-name');
            var values = {
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'deleteGalleryVideo',
                filename: filename,
            };
            Swal.fire({
                title: cssmTranslate.vmutcconfirm,
                text: cssmTranslate.vmutcconfirm2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: cssmTranslate.vmutccancel,
                confirmButtonText: cssmTranslate.vmutcyesdelete,
                customClass: {
                    container: 'always-on-top'
                }
            }).then((result) => {
                if (result.value) {
                    jQuery.ajax({
                        type: 'POST',
                        url: cssm_front_ajax_object.ajaxurl,
                        data: values,
                        dataType: 'html'
                    });
                    jQuery(this).parent('li').remove();
                } else {
                    return false;
                }
            });
        });

        jQuery(document).on("click", "#easyaudiogallery img", function () { 
            var what = jQuery('#easyaudiogallerywhat').val();
            if (what == 'audioWidget') {    
             $("#vmutc_audioWidget_input").val($(this).attr("alt")).trigger("change");    
           }        
         });
        jQuery(document).on('click', '.vmutc_galleryAudioRemove', function (e) {
            var filename = jQuery(this).attr('data-name');
            var values = {
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'deleteGalleryAudio',
                filename: filename,
            };
            Swal.fire({
                title: cssmTranslate.vmutcconfirm,
                text: cssmTranslate.vmutcconfirm2,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: cssmTranslate.vmutccancel,
                confirmButtonText: cssmTranslate.vmutcyesdelete,
                customClass: {
                    container: 'always-on-top'
                }
            }).then((result) => {
                if (result.value) {
                    jQuery.ajax({
                        type: 'POST',
                        url: cssm_front_ajax_object.ajaxurl,
                        data: values,
                        dataType: 'html'
                    });
                    jQuery(this).parent('li').remove();
                } else {
                    return false;
                }
            });
        });
        jQuery('#vmutc-background-box').slideUp();
        jQuery('#vmutc-text-box').slideUp();
        jQuery('#vmutc-border-box').slideUp();
        jQuery('#vmutc-shadow-box').slideUp();
        jQuery('#vmutc-margins-box').slideUp();
        jQuery('#vmutc-size-box').slideUp();
        jQuery('#vmutc-position-box').slideUp();
        jQuery('#vmutc-transform-box').slideUp();
        jQuery('#vmutc-custom-box').slideUp();
        jQuery('#vmutc-general-box').slideUp();
        jQuery('#vmutc-animation-box').slideUp();
        jQuery('#vmutc-addblock-box').slideUp();
        //  jQuery('#vmutc-addanimator-box').slideUp();
        jQuery('#vmutc-svg-box').slideUp();
        jQuery('#vmutc-savedescription-box').slideUp();
        jQuery('#submitVMUTCConfigurator').click(function () {
            jQuery("#vmutc_stylizer").unbind('submit').bind('submit', function (e) {
                var screen_mode = get("screen_mode");
                if (typeof (screen_mode) == 'undefined' || screen_mode == "")
                    screen_mode = "vmutc_desktop_mode";
                var id_theme = jQuery('#cssm_id_theme').val();
                var serializedForm = jQuery("#vmutc_stylizer").serializeArray();
                serializedForm.push({
                    name: "action",
                    value: 'updateCss'
                }, {
                    name: "security",
                    value: cssm_front_ajax_object.security
                }, {
                    name: "screen_mode",
                    value: screen_mode
                });
                jQuery.ajax({
                    type: "POST",
                    url: cssm_front_ajax_object.ajaxurl,
                    data: $.param(serializedForm),
                    success: function () {
                        console.log('updated with success');
                    }
                });
                e.preventDefault();
            });
        });
        jQuery('#resetVMUTCConfigurator').click(
            function () {
                location.reload(true);
                return;
            });
        jQuery('#deleteVMUTCConfigurator').click(
            function () {
                jQuery("#vmutc_stylizer").unbind('submit').bind('submit', function (e) {
                    e.preventDefault();
                    Swal.fire({
                        title: cssmTranslate.vmutcconfirm,
                        text: cssmTranslate.vmutcdeleteinfo,
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: cssmTranslate.vmutccancel,
                        confirmButtonText: cssmTranslate.vmutcyesdelete,
                        customClass: {
                            container: 'always-on-top'
                        }
                    }).then((result) => {
                        if (result.value) {
                            var values = {
                                id_theme: jQuery('#cssm_id_theme').val(),
                                security: cssm_front_ajax_object.security,
                                action: 'deleteAll',
                            };
                            jQuery.ajax({
                                type: "POST",
                                url: cssm_front_ajax_object.ajaxurl,
                                data: values,
                                success: function () {
                                    console.log('deleted with success');
                                    location.reload(true);
                                    return;
                                }
                            });
                        } else {
                            return false;
                        }
                    });
                });
            });
        jQuery('#publishVMUTCConfigurator').click(
            function () {
                jQuery("#vmutc_stylizer").unbind('submit').bind('submit', function (e) {
                    e.preventDefault();
                    Swal.fire({
                        title: cssmTranslate.vmutcconfirm,
                        text: cssmTranslate.vmutcpublishinfo,
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: cssmTranslate.vmutccancel,
                        confirmButtonText: cssmTranslate.vmutcpublish,
                        customClass: {
                            container: 'always-on-top'
                        }
                    }).then((result) => {
                        if (result.value) {
                            var values = {
                                id_theme: jQuery('#cssm_id_theme').val(),
                                security: cssm_front_ajax_object.security,
                                action: 'publish',
                            };
                            jQuery.ajax({
                                type: "POST",
                                url: cssm_front_ajax_object.ajaxurl,
                                data: values,
                                success: function () {
                                    console.log('published with success');
                                }
                            });
                        } else {
                            return false;
                        }
                    });
                });
            });
        jQuery('#enablePropagation').click(
            function (e) {
                e.preventDefault();
                var reload = '&reload=' + new Date().getTime();
                var newhref = window.location.href + "?workmode=nowork"+reload;               
                if (window.location.href.indexOf("?") != -1) {
                    newhref = window.location.href.substr(0, window.location.href.indexOf("?"));
                    newhref = newhref + "?workmode=nowork"+reload;
                }
                window.open(newhref, "_blank");
                return;
            });
        jQuery('.vmutc_title-tab').on('click', function () {
            jQuery('*').spectrum('hide');
        });
        jQuery('#vmutc-gear-right').click(
            function () {
                jQuery('#vmutc_tool_customization').css("left", "unset");
                if (jQuery('#vmutc_tool_customization').css('right') == '0px' || jQuery('#vmutc_tool_customization').css('right') != '-350px' ) {
                    jQuery('#vmutc_tool_customization').animate({
                        right: '-350px',
                        top: '40px', 
                    }, 500);
                    return false;
                } else {
                    jQuery('#vmutc_tool_customization').animate({
                        right: '0px',
                        top: '40px',       
                    }, 500);
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-background-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-background-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-background-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-text-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-text-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-text-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-border-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-border-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-border-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-shadow-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-shadow-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-shadow-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-margins-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-margins-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-margins-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-size-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-size-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-size-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-position-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-position-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-position-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-transform-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-transform-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-transform-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-animation-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-animation-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-animation-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-addblock-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-addblock-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-addblock-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-svg-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-svg-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-svg-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-custom-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-custom-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-custom-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-general-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-general-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-general-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery('#vmutc-savedescription-title').click(
            function () {
                jQuery('.vmutc-box').slideUp();
                jQuery('.list-tools p').removeClass('vmutc_active');
                if (jQuery(this).hasClass('down')) {
                    jQuery(this).removeClass('down').addClass('up');
                    jQuery('#vmutc-savedescription-box').slideUp();
                    return false;
                } else {
                    jQuery(this).removeClass('up').addClass('down');
                    jQuery('#vmutc-savedescription-box').slideDown();
                    jQuery(this).addClass('vmutc_active');
                    return false;
                }
                return false;
            });
        jQuery(".vmutc_responsive_icon").click(function () {
            whichMode = jQuery(this).attr('id');
            switch (whichMode) {
                case "vmutc_mobile_mode":
                    newwidth = 480;
                    newheight = 768;
                    break;
                case "vmutc_tablet_mode":
                    newwidth = 800;
                    newheight = 1024;
                    break;
                    break;
                case "vmutc_desktop_mode":
                    newwidth = 1500;
                    newheight = 900;
                    break;
            }
            var newhref = window.location.href + "?screen_mode=" + whichMode;
            if (window.location.href.indexOf("?") != -1) {
                newhref = window.location.href.substr(0, window.location.href.indexOf("?"));
                newhref = newhref + "?screen_mode=" + whichMode;
            }
            window.open(newhref, "", "width=" + newwidth + ",height=" + newheight + ",scrollbars,status");
            return;
        });
        jQuery("#vmutcuploadBackgroundImage").click(function () {
            popID = jQuery("#vmutcuploadBackgroundImage").data("rel");
            popWidth = jQuery("#vmutcuploadBackgroundImage").data("width");
            if (jQuery("#" + popID + ":visible").length == 0) {
                jQuery("#" + popID).fadeIn().css({
                    "width": popWidth
                }).prepend('<a href="#" class="closePopup"><i class="fas fa-times btn_close"></i></a>');
                var popMargTop = (jQuery("#" + popID).height() + 50) / 2;
                var popMargLeft = (jQuery("#" + popID).width() + 80) / 2;
                jQuery("#" + popID).css({
                    "margin-top": -popMargTop,
                    "margin-left": -popMargLeft,
                    "z-index": 1100000
                });
                jQuery("#" + popID).draggable({
                    handle: "p",
                    containment: [, popMargTop, , ]
                });
            } else {
                jQuery("#" + popID).fadeOut(function () {
                    jQuery("#" + popID + " a.closePopup").remove();
                });
            }
        });
        jQuery("#vmutcchooseBackgroundImage").click(function () {
            popID = jQuery(this).data("rel");
            popWidth = jQuery(this).data("width");
            if (jQuery('#openBackgroundGalleryDialog').length)
                jQuery('#openBackgroundGalleryDialog').remove();
            var values = {
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'chooseBackgroundImage',
                what: 'element',
            };
            var tag = jQuery('<div id="' + popID + '"></div>');
            jQuery.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                dataType:'html',           
            }).done(function(response){
                tag.html(response).dialog({
                    modal: false,
                     title: 'Gallery',
                     width: popWidth,
                     height: '800',
                     position: {
                         my: 'right top',
                         at: 'right top',
                         of: 'body'
                     },
                     create: function (event) {
                         jQuery(event.target).parent().css('position', 'fixed');
                         jQuery('#openBackgroundGallery').parent().attr('id', 'openBackgroundGalleryDialog');
                     },
                     open: function () {
                         jQuery(this).css('overflow', 'hidden');
                         jQuery(this).closest(".ui-dialog")
                         var closeBtn = jQuery('.ui-dialog-titlebar-close');
                         jQuery('.ui-dialog-titlebar-close span').remove();
                         closeBtn.removeClass('ui-button-icon-only');
                         closeBtn.append('<i class="fas fa-times"></i>');
                     },
                     close: function (event, ui) {
                         jQuery(this).dialog('destroy').remove();
                         if (jQuery('div .popup_block').is(':visible'))
                             jQuery('div .popup_block').hide();
                         jQuery('div .popup_block a.closePopup').remove();
                     }
                 }).dialog('open');
            });
        });

        jQuery('body').on('click', 'a.closePopup', function () {
            idtoclose = jQuery(this).parent().attr('id');
            jQuery('#' + idtoclose).fadeOut(function () {
                jQuery('#' + idtoclose + ' a.closePopup').remove();
            });
            return false;
        });
        var width_unit = "%";
        var height_unit = "%";
        var min_width_unit = "%";
        var min_height_unit = "%";
        var max_width_unit = "%";
        var max_height_unit = "%";

        editor = ace.edit("vmum_ace_editor1");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/css");
        editor.getSession().setUseWrapMode(true);
        editor.setShowPrintMargin(false);
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            autoScrollEditorIntoView: true,
            highlightSelectedWord: true
        });
        editor.$blockScrolling = Infinity;
        editor.on("change", function () {
            jQuery('#vmutc_styles_from_editor').text(editor.getValue());
            jQuery("#vmutcloader2").hide();
        });
        editor.selection.on('changeSelection', function () {
            jQuery('#vmutc_update_inspector_color').spectrum('set', editor.session.getTextRange(editor.getSelectionRange()))
        });
        editor2 = ace.edit("vmum_ace_editor2");
        editor2.setTheme("ace/theme/monokai");
        editor2.getSession().setMode("ace/mode/css");
        editor2.getSession().setUseWrapMode(true);
        editor2.setShowPrintMargin(false);
        editor2.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            autoScrollEditorIntoView: true,
            highlightSelectedWord: true
        });
        editor2.on("change", function () {
            jQuery('#vmutc_final_styles_from_editor').text(editor2.getValue());
        });
        jQuery('#vmutc_inspector_refresh').on('click', function () {
            editor.setValue('');
        });
        jQuery('#vmutc_inspector_clean').on('click', function () {
            var values = {
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                css: editor.getValue(),
                action: 'cleanCss',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        editor.setValue(datacss);
                }
            });
        });
   /*     var values = {
            id_theme: jQuery('#cssm_id_theme').val(),
            security: cssm_front_ajax_object.security,
            action: 'getActiveHistoric',
        };
        jQuery.ajax({
            type: "POST",
            url: cssm_front_ajax_object.ajaxurl,
            data: values,
            success: function (datacss) {
                if (datacss && datacss != null) {
                    datacss = JSON.parse(datacss);
                    jQuery('button').removeClass('history_selected');
                    if (jQuery("button[data-value='" + datacss.id + "']").length) {
                        jQuery("button[data-value='" + datacss.id + "']").addClass("history_selected");
                    } else {
                        if (datacss)
                            jQuery('#history_container').prepend("<div id='history_container_div_" + datacss.id + "' class='history_container'><button type='submit'  data-value=" + datacss.id + " class='history_container_button vmutc_stylizer_tool history_selected' name='saveHistoric' title='" + datacss.date_add + "'>" + datacss.date_add + "</button><i data-value=" + datacss.id + " class='fa fa-trash-o vmutc-history-delete'></i></div>")
                    }
                    jQuery('#vmutc-history-selected').val(datacss.id);
                }
            }
        });*/
        jQuery('#vmutc_inspector_clean_all').on('click', function () {
            var values = {
                css: editor.getValue(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'cleanCssComments',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        editor.setValue(datacss);
                }
            });
        });
        jQuery('#vmutc_inspector_important').on('click', function () {
            editor.clearSelection();
            editor.insert('!important');
        });
        jQuery('#vmutc_inspector_add').on('click', function () {
            editor2.setValue(editor2.getValue() + editor.getValue(), -1);
        });
       
        jQuery('.vmutc-history-delete').click(function () {
            id_css = jQuery(this).attr("data-value");
            var values = {
                id_css: id_css,
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'deleteHistory',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function () {
                    jQuery("#history_container_div_" + id_css).hide("slow", function () {
                        jQuery(this).remove();
                    })
                }
            });
        });
        jQuery('#vmutc_inspector_delete').on('click', function () {
            var values = {
                id_shop: jQuery('#vmutc_id_shop').val(),
                theme: jQuery('#cssm_theme').val(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'deleteCss'
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        jQuery('#vmutc_inspector_msg').html(datacss).show(300).delay(1000).hide(400);
                }
            });
        });
        jQuery('#vmutc_inspector_save').on('click', function () {
            var values = {
              //  id_shop: jQuery('#vmutc_id_shop').val(),
                theme: jQuery('#cssm_theme').val(),
                css: editor2.getValue(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'saveCss',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        jQuery('#vmutc_inspector_msg').html(datacss).show(300).delay(1000).hide(400);
                }
            });
        });
        editor3 = ace.edit("vmum_ace_editor3");
        editor3.setTheme("ace/theme/monokai");
        editor3.getSession().setMode("ace/mode/javascript");
        editor3.getSession().setUseWrapMode(true);
        editor3.setShowPrintMargin(false);
        editor3.setOptions({
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: false,
            autoScrollEditorIntoView: true,
            highlightSelectedWord: true
        });
     
        jQuery('#vmutc_customjs_save').on('click', function () {
            var values = {
                id_shop: jQuery('#vmutc_id_shop').val(),
                theme: jQuery('#cssm_theme').val(),
                js: editor3.getValue(),
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                action: 'saveJs',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (datacss) {
                    if (datacss && datacss != null)
                        jQuery('#vmutc_customjs_msg').html(datacss).show(300).delay(1000).hide(400);
                }
            });
        });
        jQuery('#vmutc-test-animation').click(function () {
            jQuery(arrayselectedElement).removeClass(animateClasses);
            var animation = jQuery('#vmutc_animation_do').val();
            var infinite = jQuery('#vmutc_animation_infinite').val();
            var speed = jQuery('#vmutc_animation_speed').val();
            jQuery(arrayselectedElement).addClass('animated ' + animation + ' ' + infinite + ' ' + speed);
            jQuery(arrayselectedElement).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
                jQuery(arrayselectedElement).removeClass('animated ' + animation + ' ' + infinite + ' ' + speed);
            });
        });   
      
        /// Grid Editor Actions
        jQuery(document).on('mouseenter', '.gridstackWidget', function () {
            jQuery('.editorToolBar').hide();
            if (jQuery('#vmutc_hide_ge_block').prop('checked') == false) {
                jQuery("#editorToolBar_" + this.id).show();
            }
            jQuery('*').removeClass('vmutc_widget_over');
            jQuery(this).addClass('vmutc_widget_over');
        });
        jQuery('.vmutc_widget_stylizer_info').on('click', function () {
            jQuery('#vmutc-gear-right').trigger('click');
        });
        jQuery(document).on('click', '.elementIndex', function () {
            var whatElement = jQuery(this).attr('data-element');
            if (jQuery('#' + whatElement).attr('data-what') == "shape") {
                jQuery('#' + whatElement + ' svg').toggleClass('update-z-index');
            }
        });

        jQuery(document).on('click', '.iconhelp', function () {
            var help = jQuery(this).attr('data-help');
            var title = jQuery(this).attr('data-title');
            var values = {
                help: help,
                action: 'openHelp',
                security: cssm_front_ajax_object.security
            };
            if (jQuery('#' + help).length > 0) {
                jQuery('#' + help).dialog('destroy').remove();
            }
            var tag = jQuery('<div id="' + help + '"></div>');
            jQuery.ajax({
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                dataType: 'html',
                success: function (data) {
                    tag.html(data).dialog({
                        modal: false,
                        title: title,
                        width: 1400,
                        height: 600,
                        position: {
                            my: 'left top',
                            at: 'left top',
                            of: window
                        },
                        create: function (event) {
                            jQuery(event.target).parent().css('position', 'fixed');
                            jQuery('#' + help).parent().attr('id', 'openHelpDialog');
                        },
                        open: function () {
                            var dialog = jQuery(this).closest(".ui-dialog");
                            var closeBtn = dialog.find('.ui-dialog-titlebar-close');
                            closeBtn.find('span').remove();
                            closeBtn.removeClass('ui-button-icon-only');
                            closeBtn.append('<i class="fas fa-times"></i>');
                        },
                        close: function (event, ui) {
                            jQuery(this).dialog('destroy').remove();
                            if (jQuery('div .popup_block').is(':visible'))
                                jQuery('div .popup_block').hide();
                            jQuery('div .popup_block a.closePopup').remove();
                        }
                    }).dialog('open');
                }
            });
        })
        /// end grid editor actions

        /// Simple animator
       jQuery(document).on('click','.vmutc_animatorTab', function () {
            jQuery(this).closest('.panel').find(".panel-collapse").slideToggle();      
        });
        jQuery('.vmutc_animatorType').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            var type = jQuery(this).val();
            jQuery('#' + what).attr('data-animatortype', type);
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
         //   var ease = jQuery('#' + what).attr('data-animatorease');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' && (callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget')) {
                jQuery('#' + what).addClass('vmutc_animator');
                animator(what, type, start, reverse, callFunction, duration, easeCode, scrub,end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
              
                if (typeof (animatorTimeline[what]) != 'undefined' && animatorTimeline[what]!=null) {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
              //  jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });
        var animatorstartSliders = document.getElementsByClassName('vmutc_animator_start_slider');
        var animatorScrollSlider = new Array();
        for (i = 0; i < animatorstartSliders.length; i++) {
            var parentID = jQuery(animatorstartSliders[i]).closest('.vmutc_widgetWindow').attr('id');
            animatorScrollSlider[parentID] = noUiSlider.create(animatorstartSliders[i], {
                start: 100,
                step: 1,
                range: {
                    min: 0,
                    max: 2000
                },
            });
            animatorScrollSlider[parentID].on('slide', function (values, handle) {
                var what = jQuery('#vmutc_blockColumn_id').val();
                var type = jQuery('#' + what).attr('data-animatortype');
                var start = Math.round(values);
                var end = jQuery('#' + what).attr('data-animatorend');
                var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
                var duration = jQuery('#' + what).attr('data-animatorduration');
                var reverse = jQuery('#' + what).attr('data-animatorreverse');
                var scrub = jQuery('#' + what).attr('data-animatorscrub');
                jQuery('#' + what).attr('data-animatorstart', start);
                var element = this.target;
                var parentID2 = jQuery(element).closest('.vmutc_widgetWindow').attr('id');
                jQuery('#' + parentID2 + ' .vmutc_animator_start').val(start);
                var callFunction = false;
                if (jQuery('#' + what).hasClass('counterWidget')) {
                    callFunction = 'counterWidget';
                }
                if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                    callFunction = 'counterCustomWidget';
                }
                if (jQuery('#' + what).hasClass('counterUpWidget')) {
                    callFunction = 'counterUpWidget';
                }
                if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                    callFunction = 'flyingCharactersWidget';
                }
                if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                    jQuery('#' + what).addClass('vmutc_animator');
                    animator(what, type, start, reverse, callFunction, duration, easeCode, scrub,end, true);
                } else {
                    jQuery('#' +what).css('opacity', '1');
                    jQuery('#' + what).removeClass('vmutc_animator');
                    if (typeof (animatorTimeline[what]) != 'undefined') {
                        animatorTimeline[what].kill();
                        animatorTimeline[what] = null;
                    }
                /*    if (typeof (scrollMagicScene[what]) != 'undefined') {
                        scrollMagicScene[what].removeIndicators().destroy(true);
                    }*/
                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
                }
            });
        }
        jQuery('.vmutc_animator_start').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var start = Math.round(this.value);
            var end = jQuery('#' + what).attr('data-animatorend');
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            jQuery('#' + what).attr('data-animatorstart', start);
            var parentID = jQuery(this).closest('.vmutc_widgetWindow').attr('id');
            animatorScrollSlider[parentID].set(start);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
           /*     if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });
        ///////////
     var animatorendSliders = document.getElementsByClassName('vmutc_animator_end_slider');
        var animatorendSlider = new Array();
        for (i = 0; i < animatorendSliders.length; i++) {
            var parentID = jQuery(animatorendSliders[i]).closest('.vmutc_widgetWindow').attr('id');
            animatorendSlider[parentID] = noUiSlider.create(animatorendSliders[i], {
                start: 100,
                step: 1,
                range: {
                    min: 0,
                    max: 2000
                },
            });
            animatorendSlider[parentID].on('slide', function (values, handle) {
                var what = jQuery('#vmutc_blockColumn_id').val();
                var type = jQuery('#' + what).attr('data-animatortype');
                var start = jQuery('#' + what).attr('data-animatorstart')
                var end = Math.round(values);
                var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
                var duration = jQuery('#' + what).attr('data-animatorduration');
                var reverse = jQuery('#' + what).attr('data-animatorreverse');
                var scrub = jQuery('#' + what).attr('data-animatorscrub');
                jQuery('#' + what).attr('data-animatorend', end);
                var element = this.target;
                var parentID2 = jQuery(element).closest('.vmutc_widgetWindow').attr('id');
                jQuery('#' + parentID2 + ' .vmutc_animator_end').val(end);
                var callFunction = false;
                if (jQuery('#' + what).hasClass('counterWidget')) {
                    callFunction = 'counterWidget';
                }
                if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                    callFunction = 'counterCustomWidget';
                }
                if (jQuery('#' + what).hasClass('counterUpWidget')) {
                    callFunction = 'counterUpWidget';
                }
                if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                    callFunction = 'flyingCharactersWidget';
                }
                if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                    jQuery('#' + what).addClass('vmutc_animator');
                    animator(what, type, start, reverse, callFunction, duration, easeCode, scrub,end, true);
                } else {
                    jQuery('#' +what).css('opacity', '1');
                    jQuery('#' + what).removeClass('vmutc_animator');
                    if (typeof (animatorTimeline[what]) != 'undefined') {
                        animatorTimeline[what].kill();
                        animatorTimeline[what] = null;
                    }
                /*    if (typeof (scrollMagicScene[what]) != 'undefined') {
                        scrollMagicScene[what].removeIndicators().destroy(true);
                    }*/
                    jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
                }
            });
        }
        jQuery('.vmutc_animator_end').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var start = jQuery('#' + what).attr('data-animatorstart'); 
            var end = Math.round(this.value);
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            jQuery('#' + what).attr('data-animatorend', end);
            var parentID = jQuery(this).closest('.vmutc_widgetWindow').attr('id');
            animatorendSlider[parentID].set(end);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                 animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
           /*     if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });

        //////////
        jQuery(document).on("change", '#vmutc_flyingCharacters_easeCode', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var easeCode = this.value;
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');;
            jQuery('#' + what).attr('data-animatoreasecode', easeCode);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                  animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });
        var animatordurationSliders = document.getElementsByClassName('vmutc_animator_duration_slider');
        var animatorDurationSlider = new Array();
        for (i = 0; i < animatordurationSliders.length; i++) {
            var parentID = jQuery(animatordurationSliders[i]).closest('.vmutc_widgetWindow').attr('id');
            animatorDurationSlider[parentID] = noUiSlider.create(animatordurationSliders[i], {
                start: 1,
                step: 0.1,
                range: {
                    min: 0,
                    max: 5
                },
            });
            animatorDurationSlider[parentID].on('slide', function (values, handle) {
                var what = jQuery('#vmutc_blockColumn_id').val();
                var type = jQuery('#' + what).attr('data-animatortype');
                var start = jQuery('#' + what).attr('data-animatorstart');
                var end = jQuery('#' + what).attr('data-animatorend');
                var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
                var duration = values[0];
                var reverse = jQuery('#' + what).attr('data-animatorreverse');
                var scrub = jQuery('#' + what).attr('data-animatorscrub');
                jQuery('#' + what).attr('data-animatorduration', duration);
                var element = this.target;
                var parentID2 = jQuery(element).closest('.vmutc_widgetWindow').attr('id');
                jQuery('#' + parentID2 + ' .vmutc_animator_duration').val(duration);
                var callFunction = false;
                if (jQuery('#' + what).hasClass('counterWidget')) {
                    callFunction = 'counterWidget';
                }
                if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                    callFunction = 'counterCustomWidget';
                }
                if (jQuery('#' + what).hasClass('counterUpWidget')) {
                    callFunction = 'counterUpWidget';
                }
                if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                    callFunction = 'flyingCharactersWidget';
                }
                if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                    jQuery('#' + what).addClass('vmutc_animator');
                    animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
                } else {
                    jQuery('#' +what).css('opacity', '1');
                    jQuery('#' + what).removeClass('vmutc_animator');
                    if (typeof (animatorTimeline[what]) != 'undefined') {
                        animatorTimeline[what].kill();
                        animatorTimeline[what] = null;
                    }
                      jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
                }
            });
        }
        jQuery('.vmutc_animator_duration').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var duration = this.value;
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            jQuery('#' + what).attr('data-animatorduration', duration);
            var parentID = jQuery(this).closest('.vmutc_widgetWindow').attr('id');
            animatorDurationSlider[parentID].set(duration);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                  animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });
        jQuery('.vmutc_animator_ease').on('change', function (e) {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var ease = this.value;
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var reverse = jQuery('#'+what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            jQuery('#' + what).attr('data-animatorease', ease);
            jQuery('#' + what).attr('data-animatoreasecode', ease);
            var parentID = jQuery(this).closest('.vmutc_widgetWindow').attr('id');
            jQuery('#' + parentID + ' .vmutc_animator_easeCode').val(ease);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                  animator(what, type, start, reverse, callFunction, duration, ease, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
           /*     if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });
        jQuery('.vmutc_animator_easeCode').on('change', function (e) {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var type = jQuery('#' + what).attr('data-animatortype');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var easeCode = this.value;
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
            jQuery('#' + what).attr('data-animatoreasecode', easeCode);
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (jQuery('#' + what).hasClass('audioWidget')) {
                callFunction = 'audioWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                  animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
             /*   if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });

        jQuery('.vmutc_animator_reverse').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var type =jQuery('#' + what).attr('data-animatortype');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
            var scrub = jQuery('#' + what).attr('data-animatorscrub');
         
            if(jQuery(this).prop('checked')==false)
                reverse = 0;
            else
                reverse = 1;

            jQuery('#' + what).attr('data-animatorreverse', reverse);
            
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
             /*   if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });

        jQuery('.vmutc_animator_scrub').on('change', function () {
            var what = jQuery('#vmutc_blockColumn_id').val();
            var start = jQuery('#' + what).attr('data-animatorstart');
            var end = jQuery('#' + what).attr('data-animatorend');
            var type =jQuery('#' + what).attr('data-animatortype');
            var duration = jQuery('#' + what).attr('data-animatorduration');
            var easeCode = jQuery('#' + what).attr('data-animatoreasecode');
            var reverse = jQuery('#' + what).attr('data-animatorreverse');
         
            if(jQuery(this).prop('checked')==false)
                scrub = 0;
            else
                scrub = 1;

            jQuery('#' + what).attr('data-animatorscrub', scrub);
            
            var callFunction = false;
            if (jQuery('#' + what).hasClass('counterWidget')) {
                callFunction = 'counterWidget';
            }
            if (jQuery('#' + what).hasClass('counterCustomWidget')) {
                callFunction = 'counterCustomWidget';
            }
            if (jQuery('#' + what).hasClass('counterUpWidget')) {
                callFunction = 'counterUpWidget';
            }
            if (jQuery('#' + what).hasClass('flyingCharactersWidget')) {
                callFunction = 'flyingCharactersWidget';
            }
            if (type != 'none' || callFunction == 'counterWidget' || callFunction == 'counterCustomWidget' || callFunction == 'counterUpWidget' || callFunction == 'flyingCharactersWidget') {
                jQuery('#' + what).addClass('vmutc_animator');
                animator(what, type, start, reverse, callFunction, duration, easeCode, scrub, end, true);
            } else {
                jQuery('#' +what).css('opacity', '1');
                jQuery('#' + what).removeClass('vmutc_animator');
                if (typeof (animatorTimeline[what]) != 'undefined') {
                    animatorTimeline[what].kill();
                    animatorTimeline[what] = null;
                }
             /*   if (typeof (scrollMagicScene[what]) != 'undefined') {
                    scrollMagicScene[what].removeIndicators().destroy(true);
                }*/
                jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            }
        });


        window.updateAnimatorValues = function (widgetID, type, start, widgetContainer, duration, easeCode, ease, reverse, scrub, end) {
         
            console.log('only available in the premium version !');
        }
        jQuery('#vmutc_hide_dominspector').on('change', function () {
            if (jQuery(this).prop('checked') == true)
                Dom_Inspector.enable();
            else
                Dom_Inspector.disable();
        });
        /// End simple animator
        if (get('workmode') != 'nowork') {
            arrayselectedElementClass = '';
            arrayselectedElementId = '';
            var button = document.getElementById('vmutc-gear-right');
            stylizerarea = document.getElementById('vmutc_tool_customization');
            vmutc_imagesarea = document.getElementById('vmutcuploadBackgroundImageWin');
            vmutc_stylizerarea_by_class = document.getElementsByClassName('vmutc_stylizer_tool');
            vmutc_inspector2 = document.getElementById('vmutc_inspector_all');
            vmutc_inspector3 = document.getElementById('vmutc_customjs_all');
            contextmenu = document.getElementsByClassName('context-menu-list');
            var selected = null;
            var selected_element = null;
            var $selected = null;
            var target = null;
            jQuery(document).on('mouseover', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $area = jQuery(e.target);
                if (button.className == 'on' && !$area.parents('.sp-container').length &&
                    !$area.hasClass('elementButton') && !$area.hasClass('editorToolBar') &&
                    !$area.hasClass('swal2-container') && !$area.parents('.swal2-container').length &&
                    !$area.parents('.tox').length && !$area.parents('.popup_block').length &&
                    !$area.parents('.EditorContainer').length &&
                    !$area.parents('.gridstask-toolbar').length && !$area.hasClass('gridstask-toolbar') &&
                    !$area.parents('.gridstack-column-toolbar').length && !$area.hasClass('gridstack-column-toolbar') &&
                    !$area.hasClass('ui-resizable-handle') &&
                    //       !$area.hasClass('ui-draggable-handle') &&                  
                    !$area.hasClass('EditorContainer') && !$area.parents('#animator_timeline_vis_wrapper').length &&
                    !$area.hasClass('vmutc_notSelectable') && !$area.parents('.animator_effect_wrapper').length &&
                    !$area.parents('#context-menu-layer').length && !$area.parents('.context-menu-list').length &&
                    !$area.hasClass('context-menu-list') && !$area.hasClass('context-menu-item') &&
                    !$area.parents('#openSvgGalleryDialog').length && 
                    !$area.parents('#openAudioGalleryDialog').length && 
                    !$area.parents('#wpadminbar').length && $area.attr('id') != 'wpadminbar' &&
                    !$area.parents('.fp-modal').length
                    ) {
                    target = e.target ? e.target : e.srcElement;
                    while (/#text/i.test(target.nodeName)) {
                        target = target.parentNode;
                    }
                    if (selected != null) {
                        jQuery(selected).removeClass('vmutc-elementOver');
                    }
                    if (stylizerarea.contains(target) || vmutc_imagesarea.contains(target) ||
                        vmutc_inspector2.contains(target) || vmutc_inspector3.contains(target)) {
                        Dom_Inspector.disable();
                        return true;
                    }
                    selected = target;
                    if (!$area.parents('#openBackgroundGalleryDialog').length && !$area.parents('#openHelpDialog').length &&
                        !$area.parents('#css_inspector_help').length && !$area.parents('#javascript_editor_help').length &&
                        $area.attr('id') != 'openBackgroundGalleryDialog' && $area.attr('id') != 'openHelpDialog' &&
                        $area.attr('id') != 'css_inspector_help' && $area.attr('id') != 'javascript_editor_help' &&
                        $area.attr('id') != 'vmutc_inspector_all' && $area.attr('id') != 'vmutc_customjs_all' &&
                        !$area.parents('.tox-editor-container').length && !$area.parents('.tox-dialog').length &&
                        !$area.hasClass('tox-dialog') && !$area.hasClass('vmutc_temporary_block')) {
                        if (jQuery('#vmutc_hide_dominspector').prop('checked') == true)
                            Dom_Inspector.enable();
                        if (!jQuery('#vmutc_gridstack_layoutContainer').is(':visible'))
                            jQuery('.vmutc_temporary_block').remove();
                        if (jQuery("#vmutc-create-addGridstack").prop("checked") == true && !jQuery('#vmutc_gridstack_layoutContainer').is(':visible')) {
                            var where = jQuery('#vmutc_addblock_where').val();
                            if (!where == "" || !where == null) {
                                var newelement = document.createElement('div');
                                newelement.className = "vmutc_temporary_block";
                                var newParent = mySimmer(selected);
                                if(newParent){                           
                                newelement.setAttribute('data-parent', newParent);
                                if (where == 'append') {
                                    selected.append(newelement);
                                }
                                if (where == 'prepend') {
                                    selected.prepend(newelement);
                                }
                                if (where == 'before') {
                                    selected.before(newelement);
                                }
                                if (where == 'after') {
                                    selected.after(newelement);
                                }                              
                            }
                            }
                        }                        
                        jQuery(selected).addClass('vmutc-elementOver');                        
                    }
                }
                return false;
            });
            jQuery('#vmutc-gear-right').on('click', function (e) {
                buttonToggle(button.className == 'on' ? 'off' : 'on');
                if (jQuery(this).hasClass('off')) {
                    jQuery('*').removeClass('vmutc-selected');
                    Dom_Inspector.disable();
                } else {
                    Dom_Inspector.enable();
                }
            });
            jQuery('*').on('click', function (e) {

                if(colorPicker)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    activateEyedropper(e);
                    return;
                }
                target = e.target ? e.target : e.srcElement;
                while (/#text/i.test(target.nodeName)) {
                    target = target.parentNode;
                }
                $target = jQuery(e.target);
                if (button.className == 'on' && target == selected &&
                    !$target.parents('#openBackgroundGalleryDialog').length && !$target.parents('#openHelpDialog').length &&
                    !$target.parents('#css_inspector_help').length && !$target.parents('#vmutc_inspector_container').length &&
                    !$target.parents('#javascript_editor_help').length && !$target.parents('#vmutc_customjs_container').length &&
                    !$target.hasClass('ui-icon-closethick') && !$target.hasClass('iconhelp')) {
                    e.preventDefault();
                    e.stopPropagation();
                    selected_element = selected;
                    jQuery('*').removeClass('always_show');
                    if (e.ctrlKey && (
                            jQuery($target).parents('.popover:visible').length ||
                            jQuery($target).parents('.sfHover .submenu-container').length ||
                            jQuery($target).parents('.menu-dropdown:visible').length ||
                            jQuery($target).parents('.submenu:visible').length ||
                            jQuery($target).parents('.highlighted-informations').length ||
                            jQuery($target).hasClass('popover') ||
                            jQuery($target).hasClass('sfHover submenu-container') ||
                            jQuery($target).hasClass('menu-dropdown') ||
                            jQuery($target).hasClass('submenu') ||
                            jQuery($target).hasClass('highlighted-informations')
                        )) {
                        jQuery('.popover:visible').toggleClass('always_show');
                        jQuery('.sfHover .submenu-container').toggleClass('always_show');
                        jQuery('.menu-dropdown:visible').toggleClass('always_show');
                        jQuery('.submenu:visible').toggleClass('always_show');
                        jQuery('.highlighted-informations:hover').toggleClass('always_show');
                    }
                  if(!$target.hasClass('vmutc_temporary_block'))
                  {
                    elementSelected($target);
                    displayAllSelectorButton($target);
                  }
                    if (jQuery('.vmutc_temporary_block').length > 0) {
                        jQuery("#vmutc_gridstack_layoutContainer").dialog({
                            autoOpen: false,
                            modal: false,
                            dialogClass: 'EditorContainer',
                            width: '550',
                            height: '660',
                            resizable: false,
                            title: 'Add New Grid',
                            open: function (event, ui) {
                                jQuery(".ui-dialog-titlebar-close").hide();
                            },
                            close: function () {
                                jQuery(this).dialog('destroy');
                            },
                            buttons: {
                                Cancel: {
                                    click: function () {
                                        jQuery(this).dialog("close");
                                    },
                                    text: cssmTranslate.vmutccancel,
                                    class: 'dialog-closeButton',
                                },
                            }
                        }), jQuery('.EditorContainer').draggable();
                        jQuery("#vmutc_gridstack_layoutContainer").dialog("open");                       
                    }
                }
                jQuery('.gridstack_layout_li').off().on('click', function () {
                    var layout = jQuery(this).attr('data-layout');
                    jQuery("#vmutc_gridstack_layoutContainer").dialog("close");
                    addNewGridstack(layout);
                })
                jQuery('.btn-5:not(#selected_element)').off().on('click', function () {
                    selectedButtonId = jQuery(this).attr('id');
                    if (selectedButtonId == 'selected_Real' || selectedButtonId=='selectedPrevious' || selectedButtonId=='selectedNext') {
                        elementSelected(jQuery(selected_element));
                        selectorButtonSelected(jQuery(selected_element), jQuery(this));
                    }
                    if (selectedButtonId.indexOf("selectedParent") != '-1') {
                        selectedButtonIndex = jQuery(this).attr('parentindex');
                        newElementSelected = jQuery(selected_element).parents().eq(selectedButtonIndex);
                        elementSelected(newElementSelected);
                        selectorButtonSelected(newElementSelected, jQuery(this));
                    }
                    if (selectedButtonId.indexOf("selectedChild") != '-1') {
                        selectedButtonIndex = jQuery(this).attr('childindex');
                        newElementSelected = jQuery(selected_element).children().eq(selectedButtonIndex);
                        elementSelected(newElementSelected);
                        selectorButtonSelected(newElementSelected, jQuery(this));
                    }
                    if (selectedButtonId == 'selectedPrevious') {
                        newElementSelected = jQuery(selected_element).prev();
                        elementSelected(newElementSelected);
                        selectorButtonSelected(newElementSelected, jQuery(this));
              
                    }
                    if (selectedButtonId == 'selectedNext') {
                        newElementSelected = jQuery(selected_element).next();
                        elementSelected(newElementSelected);
                        selectorButtonSelected(newElementSelected, jQuery(this));
                    }  
                    
                });
                return true;
            });

            function elementSelected($target) {
                jQuery("*").removeClass('vmutc-selected vmutc_widget_over');
                $target.removeClass(animateClasses);
                if (target != null) {
                    jQuery(target).removeClass('vmutc-elementOver');
                }
                selected = null;
                $selected = $target;
                $selectedParents = $selected.parents();
                $selectedChilds = $selected.children();
                $selected.addClass('vmutc-selected');
                targetOffset = $target[0].getBoundingClientRect(),
                    targetHeight = targetOffset.height,
                    targetWidth = targetOffset.width;
                jQuery(':input', '#vmutc_stylizer')
                    .not(':button, :submit, :reset, :hidden, :radio, #vmutc_hide_ge_block,#vmutc_hide_dominspector,#vmutc-create-addSection,#vmutc_addblock_where,#vmutc-create-addGridstack')
                    .removeAttr('checked')
                    .val('');
                jQuery('.vmutc_important').removeClass('vmutc_important_yes');
                jQuery('.vmutc_important_input').val('');
                jQuery("#vmutc_normal").prop("checked", true);
                jQuery("#vmutc_no_state").prop("checked", true)
                jQuery('*:not(.vmutc_widgetWindow input)').spectrum('set', '');
                jQuery(".font-select").show();
                if (jQuery(this).hasClass("vmutc_icon")) {
                    jQuery(".font-select").hide();
                }
            }

            function displayAllSelectorButton($target) {
                jQuery(".btn-5").remove();
                selectedElementClass = $target.prop("class");
                realselectedclass = "";
                if (typeof (selectedElementClass) == 'string') {
                    realselectedclass = selectedElementClass.replace('vmutc-selected', '');
                    $target.removeClass(animateClasses);
                    arrayselectedElementClass = realselectedclass;
                    arrayselectedElementClass = arrayselectedElementClass.split(/\s+/);
                    arrayselectedElementClass = arrayselectedElementClass.join('.');
                    arrayselectedElementClass = '.' + arrayselectedElementClass;
                    if (arrayselectedElementClass.substring(arrayselectedElementClass.length - 1, arrayselectedElementClass.length) == ".")
                        arrayselectedElementClass = arrayselectedElementClass.substring(0, arrayselectedElementClass.length - 1);
                      
              
                }
                if (typeof (selectedElementClass) == 'object') {
                    $target[0].classList.remove('vmutc-selected');
                    realselectedclass = $target.attr("class");
                    $target[0].classList.removeMany(animateClasses);
                    arrayselectedElementClass = realselectedclass;
                    arrayselectedElementClass = arrayselectedElementClass.split(/\s+/);
                    arrayselectedElementClass = arrayselectedElementClass.join('.');
                    arrayselectedElementClass = '.' + arrayselectedElementClass;
                    if (arrayselectedElementClass.substring(arrayselectedElementClass.length - 1, arrayselectedElementClass.length) == ".")
                        arrayselectedElementClass = arrayselectedElementClass.substring(0, arrayselectedElementClass.length - 1);
                       
                }
                //     var element = $target.get(0).tagName.toLowerCase()
                arrayselectedElementId = $target.attr("id");
                if (arrayselectedElementId)
                    arrayselectedElementId = "#" + arrayselectedElementId;
                else
                    arrayselectedElementId = "";
                jQuery("#vmutc_element_selector").height(70);
                marginLeft = 15;
                $selected = $target;
                $selectedParents = $selected.parents();
                $selectedPreviousBrother = $selected.prev();
                $selectedNextBrother = $selected.next();
                $selectedChilds = $selected.children();

                for (c = 0; c < $selectedParents.length; c++) {
                    containerHeight = jQuery("#vmutc_element_selector").height();
                    containerHeight += 60;
                    jQuery("#vmutc_element_selector").height(containerHeight);
                    selectedParentElementClass = jQuery($selectedParents[c]).attr("class");
                    arrayselectedParentElementClass = '';
                    realselectedParentclass = '';
                    if (typeof (selectedParentElementClass) != 'undefined') {
                        $target.removeClass(animateClasses);
                        realselectedParentclass = selectedParentElementClass.
                        replace('vmutc-selected', '').
                        replace('gridstack-editing', '').
                        replace('ui-sortable', '').
                        replace('ui-droppable', '').
                        replace('ui-draggable', '').
                        replace('ui-resizable', '').
                        replace('ui-resizable-autohide', '').
                        replace('ui-draggable-handle', '').
                        replace('animationCursor','');
                        arrayselectedParentElementClass = realselectedParentclass;
                        arrayselectedParentElementClass = arrayselectedParentElementClass.split(/\s+/);
                        arrayselectedParentElementClass = arrayselectedParentElementClass.join('.');
                        arrayselectedParentElementClass = '.' + arrayselectedParentElementClass;
                        if (arrayselectedParentElementClass.substring(arrayselectedParentElementClass.length - 1, arrayselectedParentElementClass.length) == ".")
                            arrayselectedParentElementClass = arrayselectedParentElementClass.substring(0, arrayselectedParentElementClass.length - 1);
                    }
                    arrayselectedParentElementId = jQuery($selectedParents[c]).attr("id");
                    if (arrayselectedParentElementId)
                        arrayselectedParentElementId = "#" + arrayselectedParentElementId;
                    else
                        arrayselectedParentElementId = "";
                    marginLeft -= 4;
                    jQuery("#vmutc_element_selector").prepend('<div id="selectedParent_' + c + '" parentindex="' + c + '" class="btn btn-5 " title="' + $selectedParents[c].tagName + " " + arrayselectedParentElementId + " " + realselectedParentclass + '">' + $selectedParents[c].tagName + " " + arrayselectedParentElementId + "<br />" + realselectedParentclass + '</div>');
                    jQuery('#selectedParent_' + c).css('margin-left', marginLeft);
                    if (c == 4)
                        break;
                }
                if($selectedPreviousBrother.length){
                    containerHeight = jQuery("#vmutc_element_selector").height();
                    containerHeight += 60;
                    jQuery("#vmutc_element_selector").height(containerHeight);
                    selectedParentElementClass = jQuery($selectedPreviousBrother).attr("class");
                    arrayselectedParentElementClass = '';
                    realselectedParentclass = '';
                    if (typeof (selectedParentElementClass) != 'undefined') {
                        $target.removeClass(animateClasses);
                        realselectedParentclass = selectedParentElementClass.
                        replace('vmutc-selected', '').
                        replace('gridstack-editing', '').
                        replace('ui-sortable', '').
                        replace('ui-droppable', '').
                        replace('ui-draggable', '').
                        replace('ui-resizable', '').
                        replace('ui-resizable-autohide', '').
                        replace('ui-draggable-handle', '').
                        replace('animationCursor','');
                        arrayselectedParentElementClass = realselectedParentclass;
                        arrayselectedParentElementClass = arrayselectedParentElementClass.split(/\s+/);
                        arrayselectedParentElementClass = arrayselectedParentElementClass.join('.');
                        arrayselectedParentElementClass = '.' + arrayselectedParentElementClass;
                        if (arrayselectedParentElementClass.substring(arrayselectedParentElementClass.length - 1, arrayselectedParentElementClass.length) == ".")
                            arrayselectedParentElementClass = arrayselectedParentElementClass.substring(0, arrayselectedParentElementClass.length - 1);
                    }
                    arrayselectedParentElementId = jQuery($selectedPreviousBrother).attr("id");
                    if (arrayselectedParentElementId)
                        arrayselectedParentElementId = "#" + arrayselectedParentElementId;
                    else
                        arrayselectedParentElementId = "";
                     jQuery("#vmutc_element_selector").append('<div id="selectedPrevious" class="btn btn-5 btn-7" title="' + jQuery($selectedPreviousBrother)[0].tagName + " " + arrayselectedParentElementId + " " + realselectedParentclass + '">' + jQuery($selectedPreviousBrother)[0].tagName + " " + arrayselectedParentElementId + "<br />" + realselectedParentclass + '</div>');
                }
                jQuery("#vmutc_element_selector").append('<div id="selected_Real" class="btn btn-5 btn-5-focus btn-6" title="' + $target.get(0).tagName + " " + arrayselectedElementId + " " + realselectedclass + '">' + $target.get(0).tagName + " " + arrayselectedElementId + "<br />" + realselectedclass + '</div>');
             
                if($selectedNextBrother.length){
                    containerHeight = jQuery("#vmutc_element_selector").height();
                    containerHeight += 60;
                    jQuery("#vmutc_element_selector").height(containerHeight);
                    selectedParentElementClass = jQuery($selectedNextBrother).attr("class");
                    arrayselectedParentElementClass = '';
                    realselectedParentclass = '';
                    if (typeof (selectedParentElementClass) != 'undefined') {
                        $target.removeClass(animateClasses);
                        realselectedParentclass = selectedParentElementClass.
                        replace('vmutc-selected', '').
                        replace('gridstack-editing', '').
                        replace('ui-sortable', '').
                        replace('ui-droppable', '').
                        replace('ui-draggable', '').
                        replace('ui-resizable', '').
                        replace('ui-resizable-autohide', '').
                        replace('ui-draggable-handle', '').
                        replace('animationCursor','');
                        arrayselectedParentElementClass = realselectedParentclass;
                        arrayselectedParentElementClass = arrayselectedParentElementClass.split(/\s+/);
                        arrayselectedParentElementClass = arrayselectedParentElementClass.join('.');
                        arrayselectedParentElementClass = '.' + arrayselectedParentElementClass;
                        if (arrayselectedParentElementClass.substring(arrayselectedParentElementClass.length - 1, arrayselectedParentElementClass.length) == ".")
                            arrayselectedParentElementClass = arrayselectedParentElementClass.substring(0, arrayselectedParentElementClass.length - 1);
                    }
                    arrayselectedParentElementId = jQuery($selectedNextBrother).attr("id");
                    if (arrayselectedParentElementId)
                        arrayselectedParentElementId = "#" + arrayselectedParentElementId;
                    else
                        arrayselectedParentElementId = "";
                     jQuery("#vmutc_element_selector").append('<div id="selectedNext" class="btn btn-5 btn-7" title="' + jQuery($selectedNextBrother)[0].tagName + " " + arrayselectedParentElementId + " " + realselectedParentclass + '">' + jQuery($selectedNextBrother)[0].tagName + " " + arrayselectedParentElementId + "<br />" + realselectedParentclass + '</div>');
    
                 }
              
                jQuery("#vmutc_currentSelectedElement").html('<div id="selected_element" class="btn btn-5 btn-5-focus btn-6" title="' + $target.get(0).tagName + " " + arrayselectedElementId + " " + realselectedclass + '">' + $target.get(0).tagName + " " + arrayselectedElementId + "<br />" + realselectedclass + '</div>');
                str = '';
                if (jQuery("#vmutc_only_element").prop("checked") == true) {
                    arrayselectedElement = arrayselectedElementId;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoid);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningok);
                    jQuery("#vmutc_warning_selection").addClass("vmutc_warning_ok");
                    if (arrayselectedElement == "") {
                        $target.removeClass(animateClasses);
                        $target.removeClass('vmutc-selected');
                        arrayselectedElement = target.getSelector();
                        $target.addClass('vmutc-selected');
                    }
                } else {
                    arrayselectedElement = arrayselectedElementClass;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoclass);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningid);
                    jQuery("#vmutc_warning_selection").removeClass("vmutc_warning_ok");
                    if (arrayselectedElement == "") {
                        if (typeof (selectedElementClass) == 'string') {
                            $target.removeClass(animateClasses);
                            $target.removeClass('vmutc-selected');
                            selected_css = $target.ellocate();
                            arrayselectedElement = selected_css.css;
                            $target.addClass('vmutc-selected');
                         }
                        if (typeof (selectedElementClass) == 'object') {
                            $target[0].classList.remove('vmutc-selected');
                            $target[0].classList.removeMany(animateClasses);
                            selected_css = $target.ellocate();
                            arrayselectedElement = selected_css.css;
                            $target[0].classList.add('vmutc-selected');
                         }
                    }
                }
                 testindex = arrayselectedElement.indexOf("div#page");
                if (testindex != "-1") {
                    arrayselectedElement = arrayselectedElement.substring(testindex);
                }
                if (jQuery("input[type=radio][name=vmutcpseudo]").val() == "before")
                    arrayselectedElement = arrayselectedElement + "::before";
                if (jQuery("input[type=radio][name=vmutcpseudo]").val() == "after")
                    arrayselectedElement = arrayselectedElement + "::after";
                if (jQuery("input[type=radio][name=vmutcstate]").val() == "hover")
                    arrayselectedElement = arrayselectedElement + ":hover";
                jQuery('#vmutc-element-selected').val(arrayselectedElement);
                getcss(arrayselectedElement);
                if (jQuery('#vmutc_inspector_all').hasClass('show_inspector')) {
                    jQuery("#vmutcloader2").show();
                    editor.setValue('');
                    var realTarget = jQuery(target).removeClass('vmutc-selected');
                    inspectorGetCSSRules(realTarget[0]).then(formated => {
                        editor.setValue(editor.getValue() + formated, -1);
                    });
                    return false;
                }
                marginLeft = 15;
                for (c = 0; c < $selectedChilds.length; c++) {
                    jQuery($selectedChilds[c]).removeClass(animateClasses);
                    containerHeight = jQuery("#vmutc_element_selector").height();
                    containerHeight += 50;
                    jQuery("#vmutc_element_selector").height(containerHeight);
                    selectedChildElementClass = jQuery($selectedChilds[c]).attr("class");
                    arrayselectedChildElementClass = '';
                    realselectedChildclass = '';
                    if (typeof (selectedChildElementClass) != 'undefined') {
                        $target.removeClass(animateClasses);
                        realselectedChildclass = selectedChildElementClass.
                        replace('vmutc-selected', '').
                        replace('ge-container-create', '').
                        replace('ge-canvas', '').
                        replace('ge-layout-desktop', '').
                        replace('gridstack-editing', '').
                        replace('ui-sortable', '');
                        arrayselectedChildElementClass = realselectedChildclass;
                        arrayselectedChildElementClass = arrayselectedChildElementClass.split(/\s+/);
                        arrayselectedChildElementClass = arrayselectedChildElementClass.join('.');
                        arrayselectedChildElementClass = '.' + arrayselectedChildElementClass;
                        if (arrayselectedChildElementClass.substring(arrayselectedChildElementClass.length - 1, arrayselectedChildElementClass.length) == ".")
                            arrayselectedChildElementClass = arrayselectedChildElementClass.substring(0, arrayselectedChildElementClass.length - 1);
                    }
                    arrayselectedChildElementId = jQuery($selectedChilds[c]).attr("id");
                    if (arrayselectedChildElementId)
                        arrayselectedChildElementId = "#" + arrayselectedChildElementId;
                    else
                        arrayselectedChildElementId = "";
                    jQuery("#vmutc_element_selector").append('<div id="selectedChild_' + c + '" class="btn btn-5 " childindex="' + c + '" title="' + $selectedChilds[c].tagName + " " + arrayselectedChildElementId + " " + realselectedChildclass + '">' + $selectedChilds[c].tagName + " " + arrayselectedChildElementId + "<br />" + realselectedChildclass + '</div>');
                    marginLeft -= 4;
                    jQuery('#selectedChild_' + c).css('margin-left', marginLeft);
                    if (c == 4)
                        break;
                }
            }

            function addNewGridstack(layout) {
                var layoutArray = layout.split('_')
                var parent = jQuery('.vmutc_temporary_block').attr('data-parent');
                var where = jQuery('#vmutc_addblock_where').val();
                if (!where == "" || !where == null) {
                    var uniqueID = 'vmutc-sectionID-' + Math.random().toString(36).substr(2, 16);
                    jQuery('.vmutc_temporary_block').replaceWith('<div id="' + uniqueID + '" class="sectionEnabled gridstack-editing grid-stack" data-parent="' + parent + '" data-where="' + where + '" data-what="row" data-whatClass="sectionEnabled" data-publish="0"></div>')
                    jQuery('#' + uniqueID).append('<div class="gridstask-toolbar closed" data-id="' + uniqueID + '">' +
                        '<a title="' + cssmTranslate.gridstackmenuopen + '" class="gridstack-open" data-id="' + uniqueID + '"><i class="fas fa-ellipsis-h"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenusettings + '" class="gridstack-background" data-id="' + uniqueID + '"><i class="fas fa-cog"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenufullwidth + '" class="gridstack-fullwidth" data-id="' + uniqueID + '"><i class="fas fa-arrows-alt-h"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenuaddcolumn + '" class="gridstack-add-column" data-id="' + uniqueID + '"><i class="fas fa-plus-circle"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenusave + '" class="gridstack-save" data-id="' + uniqueID + '"><i class="fas fa-save"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenulang + '" class="gridstack-languages" data-id="' + uniqueID + '"><i class="fas fa-flag"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenupublish + '" class="gridstack-publish" data-id="' + uniqueID + '"><i class="fas fa-user-slash"></i></a>' +
                        
                        '<a title="' + cssmTranslate.gridstackmenuremove + '" class="gridstack-remove" data-id="' + uniqueID + '"><i class="fas fa-trash"></i></a>' +
                        '<a title="' + cssmTranslate.gridstackmenuhelp + '" class="gridstack-help iconhelp" data-title="' + cssmTranslate.vmutcsectionhelp + '" data-help="grideditor"><i class="fas fa-question"></i></a>' +
                        '</div>');
                     gridstack[uniqueID] = GridStack.init({
                        alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            navigator.userAgent
                        ),
                        resizable: {
                            handles: 'e, se, s, sw, w'
                        },
                        verticalMargin: 0,
                        float: false,
                        minRow: 1,
                        removeTimeout: 100,
                        acceptWidgets: '.openwidget'
                    }, '#' + uniqueID);
                    jQuery('#' + uniqueID).attr('data-sectionwidth', '100')
                        .attr('data-sectionheight', '')
                        .attr('data-sectionbackgroundcolor', 'rgba(255, 255, 255, 0)')
                        .attr('data-sectionbackgroundsize', '')
                        .attr('data-sectionbackgroundrepeat', '')
                        .attr('data-sectionbackgroundposition', '')
                        .attr('data-sectionbackgroundblend', '')
                        .attr('data-sectionbackgroundmixblend', '')
                        .attr('data-sectionmarginleft', '')
                        .attr('data-sectionmarginright', '')
                        .attr('data-sectionmargintop', '0')
                        .attr('data-sectionmarginbottom', '0')
                        .attr('data-widgetmarginvertical', '0')
                        .attr('data-widgetmarginhorizontal', '0')
                        .attr('data-gradientused', '')
                        .attr('data-sectionbackgroundurl', '')
                        .attr('data-gradient', '')
                        .attr('data-gradienttype', '')
                        .attr('data-gradienthandlers', '')
                        .attr('data-gradientangle', '')
                        .attr('data-sectionbackgroundvideourl', '')
                        .attr('data-sectiondividertopname', '')
                        .attr('data-sectiondividerbottomname', '')
                        .attr('data-sectiondividertopfill', '#5aa8ec')
                        .attr('data-sectiondividerbottomfill', '#5aa8ec')
                        .attr('data-sectiondividertopviewboxwidth', '')
                        .attr('data-sectiondividerbottomviewboxwidth', '')
                        .attr('data-sectiondividertopheight', '')
                        .attr('data-sectiondividerbottomheight', '')
                        .attr('data-sectiondividertopzindex', '0')
                        .attr('data-sectiondividerbottomzindex', '0')
                        .attr('data-sectiondividertopflip', '')
                        .attr('data-sectiondividerbottomflip', '')
                        .attr('data-sectioncssparallax', '0')
                        .attr('data-sectionrealparallax', '0')
                        .attr('data-sectionrealparallaxHorizontal', '0')
                        .attr('data-sectionrealparallaxDuration', '200')
                        .attr('data-sectionrealparallaxOffset', '0')
                        .attr('data-sectionrealparallaxSizeY', '0')
                        .attr('data-sectionrealparallaxSizeX', '0')
                    for (i = 0; i < layoutArray.length; i++) {
                        var widgetUniqueID = 'gridWidget_' + Math.random().toString(36).substr(2, 16);
                        var widget = '<div id="' + widgetUniqueID + '" class="grid-stack-item ui-draggable ui-resizable ui-resizable-autohide" data-parent="' + uniqueID + '" data-where="' + uniqueID + '"> ' +
                            '<div class="gridstack-column-toolbar" data-id="' + widgetUniqueID + '">' +
                            '<a title="' + cssmTranslate.gridstackcolumnsettings + '" class="gridstack-column-settings" data-id="' + widgetUniqueID + '"><i class="fas fa-cog"></i></a>' +
                            '<a title="' + cssmTranslate.gridstackcolumnadd + '" class="gridstack-addWidget" data-id="' + widgetUniqueID + '"><i class="fas fa-magic"></i></a>' +
                            '<a title="' + cssmTranslate.gridstackcolumnpaste + '" class="gridstack-paste-widget" data-id="' + widgetUniqueID + '"><i class="fas fa-copy"></i></a>' +
                            '<a title="' + cssmTranslate.gridstackcolumnremove + '" class="gridstack-column-remove" data-id="' + widgetUniqueID + '"><i class="fas fa-trash"></i></a></div>' +
                            '<div class="grid-stack-item-content ui-draggable-handle"></div>';
                        var options = {
                            width: layoutArray[i],
                            height: 3,
                            id: widgetUniqueID
                        };
                        gridstack[uniqueID].batchUpdate();
                        gridstack[uniqueID].addWidget(widget, options);
                        jQuery('#' + widgetUniqueID).attr('data-gs-auto-position', "false")
                            .attr('data-columnheight', '')
                            .attr('data-columnbackgroundcolor', 'rgba(255, 255, 255, 0)')
                            .attr('data-columnbackgroundsize', '')
                            .attr('data-columnbackgroundrepeat', '')
                            .attr('data-columnbackgroundposition', '')
                            .attr('data-columnbackgroundblend', '')
                            .attr('data-columnbackgroundmixblend', '')
                            .attr('data-columngradientused', '')
                            .attr('data-columnbackgroundurl', '')
                            .attr('data-columngradient', '')
                            .attr('data-columngradienttype', '')
                            .attr('data-columngradienthandlers', '')
                            .attr('data-columngradientangle', '')
                            .attr('data-columnbackgroundvideourl', '')
                            .attr('data-columncssparallax', '0')
                            .attr('data-columnrealparallax', '0')
                            .attr('data-columnrealparallaxDuration', '100')
                            .attr('data-columnrealparallaxOffset', '0')
                            .attr('data-columnrealparallaxsizex', '0')
                            .attr('data-columnrealparallaxsizey', '0')
                            .attr('data-columnrealparallaxhorizontal', '0')
                            .attr('data-columnzindex', '0');
                        gridstack[uniqueID].commit();
                    }
                    createSectionOnDB(uniqueID);
                    jQuery("#vmutc-create-addGridstack").prop("checked",false);
                }
            }

            function selectorButtonSelected($target, selectedbutton) {
                selectedElementClass = $target.prop("class");
                $target.removeClass(animateClasses);
                realselectedclass = "";
                if (typeof (selectedElementClass) == 'string') {
                    realselectedclass = selectedElementClass.replace('vmutc-selected', '');
                    jQuery('*').removeClass('btn-5-selected');
                    selectedbutton.addClass('btn-5-selected');
                    arrayselectedElementClass = realselectedclass;
                    arrayselectedElementClass = arrayselectedElementClass.split(/\s+/);
                    arrayselectedElementClass = arrayselectedElementClass.join('.');
                    arrayselectedElementClass = '.' + arrayselectedElementClass;
                    if (arrayselectedElementClass.substring(arrayselectedElementClass.length - 1, arrayselectedElementClass.length) == ".")
                        arrayselectedElementClass = arrayselectedElementClass.substring(0, arrayselectedElementClass.length - 1);
                }
                if (typeof (selectedElementClass) == 'object') {
                    $target[0].classList.remove('vmutc-selected');
                    realselectedclass = $target.attr("class");
                    $target[0].classList.removeMany(animateClasses);
                    arrayselectedElementClass = realselectedclass;
                    arrayselectedElementClass = arrayselectedElementClass.split(/\s+/);
                    arrayselectedElementClass = arrayselectedElementClass.join('.');
                    arrayselectedElementClass = '.' + arrayselectedElementClass;
                    if (arrayselectedElementClass.substring(arrayselectedElementClass.length - 1, arrayselectedElementClass.length) == ".")
                        arrayselectedElementClass = arrayselectedElementClass.substring(0, arrayselectedElementClass.length - 1);
                }
                var cloneSelected = jQuery(selectedbutton).clone();
                cloneSelected.attr('id', 'selected_element').css('margin-left', '15px');
                jQuery("#vmutc_currentSelectedElement").html(cloneSelected);
                var element = $target.get(0).tagName.toLowerCase()
                arrayselectedElementId = $target.attr("id");
                if (arrayselectedElementId)
                    arrayselectedElementId = "#" + arrayselectedElementId;
                else
                    arrayselectedElementId = "";
                if (jQuery("#vmutc_only_element").prop("checked") == true) {
                    arrayselectedElement = arrayselectedElementId;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoid);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningok);
                    jQuery("#vmutc_warning_selection").addClass("vmutc_warning_ok");
                    if (arrayselectedElement == "") {
                        $target.removeClass(animateClasses);
                        $target.removeClass('vmutc-selected');
                        arrayselectedElement = target.getSelector();
                        $target.addClass('vmutc-selected');
                    }
                } else {
                    arrayselectedElement = arrayselectedElementClass;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoclass);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningid);
                    jQuery("#vmutc_warning_selection").removeClass("vmutc_warning_ok");
                    if (arrayselectedElement == "") {
                        if (typeof (selectedElementClass) == 'string') {
                            $target.removeClass(animateClasses);
                            $target.removeClass('vmutc-selected');
                            selected_css = $target.ellocate();
                            arrayselectedElement = selected_css.css;
                            $target.addClass('vmutc-selected');
                        }
                        if (typeof (selectedElementClass) == 'object') {
                            $target[0].classList.remove('vmutc-selected');
                            $target[0].classList.removeMany(animateClasses);
                            selected_css = $target.ellocate();
                            arrayselectedElement = selected_css.css;
                            $target[0].classList.add('vmutc-selected');
                        }
                    }
                }
                testindex = arrayselectedElement.indexOf("div#page");
                if (testindex != "-1") {
                    arrayselectedElement = arrayselectedElement.substring(testindex);
                }
                if (jQuery("input[type=radio][name=vmutcpseudo]").val() == "before")
                    arrayselectedElement = arrayselectedElement + "::before";
                if (jQuery("input[type=radio][name=vmutcpseudo]").val() == "after")
                    arrayselectedElement = arrayselectedElement + "::after";
                if (jQuery("input[type=radio][name=vmutcstate]").val() == "hover")
                    arrayselectedElement = arrayselectedElement + ":hover";
                jQuery('#vmutc-element-selected').val(arrayselectedElement);
                getcss(arrayselectedElement);
                if (jQuery('#vmutc_inspector_all').hasClass('show_inspector')) {
                    jQuery("#vmutcloader2").show();
                    editor.setValue('');
                    var realTarget = $target.removeClass('vmutc-selected');
                    inspectorGetCSSRules(realTarget[0]).then(formated => {
                        editor.setValue(editor.getValue() + formated, -1);
                        $target.addClass('vmutc-selected');               
                    });
                    return false;
                }
            }

            function buttonToggle(state) {
                if (selected != null) {
                    //   selected.style.outline = 'none';
                    jQuery(selected).removeClass('vmutc-elementOver');
                    selected = null;
                }
                if (state == 'on') {
                    button.className = 'on';
                } else {
                    button.className = 'off';
                }
            }
            jQuery('#vmutc_BackgroundImage_input').on("change", function () {
                important = jQuery('#vmutc_BackgroundImage_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-image:url(" + baseDir + "assets/img/gallery/" + jQuery("#vmutc_BackgroundImage_input").val() + ")" + important + " ;" + "}</style>").appendTo("#vmutc_styles_container");
            });
            jQuery('#vmutc_only_element').on("change", function (e) {
                if (jQuery("#vmutc_only_element").prop("checked") == true) {
                    if (arrayselectedElementId != '')
                        arrayselectedElement = arrayselectedElementId;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoid);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningok);
                    jQuery("#vmutc_warning_selection").addClass("vmutc_warning_ok");
                    newelementSelected = jQuery('.vmutc-selected');
                    if (arrayselectedElementId == "" && newelementSelected.length) {
                        newelementSelected.removeClass(animateClasses);
                        newelementSelected.removeClass('vmutc-selected');
                        arrayselectedElement = mySimmer(newelementSelected[0]);
                        var newstring = arrayselectedElement.replace('.gridstack-editing', '').
                        replace('.ui-sortable', '').
                        replace('.ui-droppable', '').
                        replace('.ui-draggable', '').
                        replace('.ui-resizable', '').
                        replace('.ui-resizable-autohide', '').
                        replace('.ui-draggable-handle', '').
                        replace('.animationCursor', '');
                        arrayselectedElement = newstring;
                        newelementSelected.addClass('vmutc-selected');
                    }
                } else {
                    arrayselectedElement = arrayselectedElementClass;
                    jQuery("#vmutc_info_selection").html(cssmTranslate.vmutcinfoclass);
                    jQuery("#vmutc_warning_selection").html(cssmTranslate.vmutcwarningid);
                    jQuery("#vmutc_warning_selection").removeClass("vmutc_warning_ok");
                    newelementSelected = jQuery('.vmutc-selected');
                    if (arrayselectedElement == "" && newelementSelected.length) {
                        newelementSelected.removeClass(animateClasses);
                        newelementSelected.removeClass('vmutc-selected');
                        selected_css = newelementSelected.ellocate();
                        arrayselectedElement = selected_css.css;
                        newelementSelected.addClass('vmutc-selected');
                    }
                }
                jQuery('#vmutc-element-selected').val(arrayselectedElement);
                getcss(arrayselectedElement);
            });
            jQuery("#vmutc_update_inspector_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc_inspector_container",
                move: function (color) {
                    if (color != null) {
                        color = color.toString();
                        range = editor.selection.getRange();
                        rangelength = parseInt(range.end.column - range.start.column);
                        newlength = parseInt(color.length - rangelength);
                        rangeLine = parseInt(range.start.row);
                        rangeStartCol = parseInt(range.start.column);
                        var Range = ace.require('ace/range').Range
                        delrange = new Range(rangeLine, rangeStartCol - 1, rangeLine, rangeStartCol);
                        editor.selection.setSelectionRange(delrange);
                        deltext = editor.session.getTextRange(delrange);
                        if (deltext == "#") {
                            editor.session.replace(delrange, ' ');
                        }
                        editor.selection.setSelectionRange(range);
                        editor.session.replace(range, '');
                        editor.insert(color);
                        range.end.column = range.end.column + newlength;
                        editor.selection.setSelectionRange(range);
                    } else {}
                },
                change: function (color) {
                    if (color != null) {
                        color = color.toString();
                        range = editor.selection.getRange();
                        rangelength = parseInt(range.end.column - range.start.column);
                        newlength = parseInt(color.length - rangelength);
                        rangeLine = parseInt(range.start.row);
                        rangeStartCol = parseInt(range.start.column);
                        var Range = ace.require('ace/range').Range
                        delrange = new Range(rangeLine, rangeStartCol - 1, rangeLine, rangeStartCol);
                        editor.selection.setSelectionRange(delrange);
                        deltext = editor.session.getTextRange(delrange);
                        if (deltext == "#") {
                            editor.session.replace(delrange, ' ');
                        }
                        editor.selection.setSelectionRange(range);
                        editor.session.replace(range, '');
                        editor.insert(color);
                        range.end.column = range.end.column + newlength;
                        editor.selection.setSelectionRange(range);
                    } else {}
                },
                hide: function (color) {
                    if (color != null) {
                        color = color.toString();
                        range = editor.selection.getRange();
                        rangelength = parseInt(range.end.column - range.start.column);
                        newlength = parseInt(color.length - rangelength);
                        rangeLine = parseInt(range.start.row);
                        rangeStartCol = parseInt(range.start.column);
                        var Range = ace.require('ace/range').Range
                        delrange = new Range(rangeLine, rangeStartCol - 1, rangeLine, rangeStartCol);
                        editor.selection.setSelectionRange(delrange);
                        deltext = editor.session.getTextRange(delrange);
                        if (deltext == "#") {
                            editor.session.replace(delrange, ' ');
                        }
                        editor.selection.setSelectionRange(range);
                        editor.session.replace(range, '');
                        editor.insert(color);
                        range.end.column = range.end.column + newlength;
                        editor.selection.setSelectionRange(range);
                    } else {}
                }
            });
            jQuery("#vmutc_background_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-background-box",
                move: function (color) {
                    important = jQuery('#vmutc_background_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        hovercolor = jQuery('#vmutc_background_color_hover').get();
                        color = color.toRgbString();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + hovercolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_background_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_background_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        hovercolor = jQuery('#vmutc_background_color_hover').get();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + hovercolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_background_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_background_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        hovercolor = jQuery('#vmutc_background_color_hover').get();
                        color = color.toRgbString();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + hovercolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_background_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_background_color_hover").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-background-box",
                move: function (color) {
                    important = jQuery('#vmutc_background_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        normalcolor = jQuery('#vmutc_background_color').get();
                        color = color.toRgbString();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + normalcolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color: transparent" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    jQuery("#vmutc_background_color_hover_real").val(color);
                },
                change: function (color) {
                    important = jQuery('#vmutc_background_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        normalcolor = jQuery('#vmutc_background_color').get();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + normalcolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color: transparent" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    jQuery("#vmutc_background_color_hover_real").val(color);
                },
                hide: function (color) {
                    important = jQuery('#vmutc_background_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        normalcolor = jQuery('#vmutc_background_color').get();
                        jQuery(arrayselectedElement).hover(function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                            },
                            function () {
                                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color:" + normalcolor + important + ";} </style>").appendTo("#vmutc_styles_container");
                            });
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-color: transparent" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    jQuery("#vmutc_background_color_hover_real").val(color);
                }
            });
            jQuery("#vmutc_text_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-text-box",
                move: function (color) {
                    important = jQuery('#vmutc_text_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val("inherit");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_text_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val("inherit");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_text_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_real").val("inherit");
                    }
                }
            });
            jQuery("#vmutc_text_color_hover").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-text-box",
                move: function (color) {
                    important = jQuery('#vmutc_text_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val("inherit");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_text_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val("inherit");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_text_color_hover_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_text_color_hover_real").val("inherit");
                    }
                }
            });
            jQuery("#vmutc_text_shadow_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-text-box",
                move: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_text_shadow_color_real").val(color);
                    shadowMe(arrayselectedElement);
                },
                change: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_text_shadow_color_real").val(color);
                    shadowMe(arrayselectedElement);
                },
                hide: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_text_shadow_color_real").val(color);
                    shadowMe(arrayselectedElement);
                }
            });
            jQuery("#vmutc_text_font").fontpicker({
                parentElement: '#vmutc_tool_customization',
                variants: false,
                lang:jQuery('#vmutc_lang').val(),
                localFontsUrl: baseDir + 'assets/fonts/',
           
                }).on('change',function () {
                important = jQuery('#vmutc_text_font_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var tmp = this.value.split(':'),
                family = tmp[0];
           
            $("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-family:" + family + important + ";} </style>").appendTo("#vmutc_styles_container");
            });

            jQuery(document).on('click','.fp-results li',function(){
                important = $('#vmutc_text_font_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
        
                var family = jQuery(this).attr('data-font-family');
               
                $("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-family:" + family + important + ";} </style>").appendTo("#vmutc_styles_container");
      
            });  

            jQuery("#vmutc_text_size").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 100,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_text_size_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_text_size_input").val(ui.value);
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-size:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_text_size_input").change(function () {
                important = jQuery('#vmutc_text_size_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                value = this.value;
                jQuery("#vmutc_text_size").slider("value", value);
                if (value != '') {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-size:" + parseInt(value) + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                } else {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-size:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_text_lineheight").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 50,
                step: 0.1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_text_lineheight_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_text_lineheight_input").val(ui.value);
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{line-height:" + ui.value + important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_text_lineheight_input").change(function () {
                important = jQuery('#vmutc_text_lineheight_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                value = this.value;
                jQuery("#vmutc_text_lineheight").slider("value", value);
                if (value != '') {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{line-height:" + parseFloat(value) + important + ";} </style>").appendTo("#vmutc_styles_container");
                } else {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{line-height:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }

            });
            jQuery("#vmutc_text_weight").change(function () {
                important = jQuery('#vmutc_text_weight_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                if (jQuery(this).is(":checked")) {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-weight:bold" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    jQuery("#vmutc_text_weight").val("bold");
                    return;
                } else {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-weight:normal" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    jQuery("#vmutc_text_weight").val("normal");
                    return;
                }
            });
            jQuery("#vmutc_text_style").change(function () {
                important = jQuery('#vmutc_text_style_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                if (jQuery(this).is(":checked")) {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-style:italic" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    jQuery("#vmutc_text_style").val("italic");
                    return;
                } else {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{font-style:normal" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    jQuery("#vmutc_text_style").val("normal");
                    return;
                }
            });
            jQuery("#vmutc_position_relative").change(function () {
                important = jQuery('#vmutc_position_relative_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                    value = jQuery(this).val();

                    if (value != '') {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{position:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{position:none" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
            });

            jQuery("#vmutc_text_transform").change(function () {
                important = jQuery('#vmutc_text_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                    value = jQuery(this).val();

                    if (value != '') {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{text-transform:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{text-transform:none" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
            });
            $("#vmutc_text_align").change(function () {
                important = jQuery('#vmutc_text_align_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                    value = jQuery(this).val();

                    if (value != '') {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{text-align:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{text-align:none" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
            });

            jQuery("#vmutc_text_letter_spacing").slider({
                value: $(this).val(),
                min: 0,
                max: 50,
                step: 0.1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_text_letter_spacing_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        jQuery("#vmutc_text_letter_spacing_input").val(ui.value);
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{letter-spacing:" + ui.value +'px'+ important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_text_letter_spacing_input").change(function () {
                important = jQuery('#vmutc_text_letter_spacing_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                value = this.value;
                jQuery("#vmutc_text_letter_spacing").slider("value", value);
                if (value != '') {
                    jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{letter-spacing:" + parseFloat(value) +'px'+ important + ";} </style>").appendTo("#vmutc_styles_container");
                } else {
                    jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{letter-spacing:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }

            });

            jQuery("#vmutc_text_word_spacing").slider({
                value: $(this).val(),
                min: 0,
                max: 50,
                step: 0.1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_text_word_spacing_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        jQuery("#vmutc_text_word_spacing_input").val(ui.value);
                        jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{word-spacing:" + ui.value +'px'+ important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_text_word_spacing_input").change(function () {
                important = $('#vmutc_text_word_spacing_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                value = this.value;
                jQuery("#vmutc_text_word_spacing").slider("value", value);
                if (value != '') {
                    jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{word-spacing:" + parseFloat(value) +'px'+ important + ";} </style>").appendTo("#vmutc_styles_container");
                } else {
                    jQuery("<style type='text/css'>" + $(arrayselectedElement).selector + "{word-spacing:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }

            });
            // animations
            jQuery("#vmutc_animation_infinite").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_animation_infinite").val("infinite");
                    return;
                } else {
                    jQuery("#vmutc_animation_infinite").val("");
                    return;
                }
            });
            //
            jQuery("#vmutc_text_margin_left, #vmutc_text_margin_top, #vmutc_text_margin_right, #vmutc_text_margin_bottom").slider({
                value: jQuery(this).val(),
                min: -1000,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_text_margin_left" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                        important = jQuery('#vmutc_text_margin_left_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-left:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-left:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_margin_top" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                        important = jQuery('#vmutc_text_margin_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-top:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-top:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_margin_right" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                        important = jQuery('#vmutc_text_margin_right_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-right:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-right:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_margin_bottom" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                        important = jQuery('#vmutc_text_margin_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-bottom:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-bottom:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (jQuery("#vmutc_text_margins_all").is(":checked")) {
                        important = jQuery('#vmutc_text_margins_all_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";

                        jQuery("#vmutc_text_margin_left_input, #vmutc_text_margin_top_input, #vmutc_text_margin_right_input, #vmutc_text_margin_bottom_input").val(ui.value);
                        jQuery("#vmutc_text_margin_left, #vmutc_text_margin_top, #vmutc_text_margin_right, #vmutc_text_margin_bottom").slider("value", ui.value);
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                }
            });
            jQuery("#vmutc_text_margin_left_input, #vmutc_text_margin_top_input, #vmutc_text_margin_right_input, #vmutc_text_margin_bottom_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = 0;
                if (this.value != "")
                    value = parseInt(this.value);
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_text_margin_left" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                    important = jQuery('#vmutc_text_margin_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-left:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-left:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_text_margin_top" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                    important = jQuery('#vmutc_text_margin_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-top:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-top:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");

                    }
                }
                if (sliderid == "vmutc_text_margin_right" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                    important = jQuery('#vmutc_text_margin_right_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-right:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-right:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_text_margin_bottom" && !jQuery("#vmutc_text_margins_all").is(":checked")) {
                    important = jQuery('#vmutc_text_margin_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-bottom:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{margin-bottom:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (jQuery("#vmutc_text_margins_all").is(":checked")) {
                    important = jQuery('#vmutc_text_margins_all_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_text_margin_left_input, #vmutc_text_margin_top_input, #vmutc_text_margin_right_input, #vmutc_text_margin_bottom_input").val(value);
                    jQuery("#vmutc_text_margin_left, #vmutc_text_margin_top, #vmutc_text_margin_right, #vmutc_text_margin_bottom").slider("value", value);
                    if (value != '') {
                        jQuery(arrayselectedElement).attr('style', 'margin:' + value + 'px' + important);
                    } else {
                        jQuery(arrayselectedElement).attr('style', 'margin:inherit' + important);
                    }
                }
            });
            jQuery("#vmutc_text_padding_left, #vmutc_text_padding_top, #vmutc_text_padding_right, #vmutc_text_padding_bottom").slider({
                value: jQuery(this).val(),
                min: -1000,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_text_padding_left" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                        important = jQuery('#vmutc_text_padding_left_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-left:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-left:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_padding_top" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                        important = jQuery('#vmutc_text_padding_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-top:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-top:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_padding_right" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                        important = jQuery('#vmutc_text_padding_right_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-right:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-right:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_text_padding_bottom" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                        important = jQuery('#vmutc_text_padding_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-bottom:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-bottom:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (jQuery("#vmutc_text_paddings_all").is(":checked")) {
                        important = jQuery('#vmutc_text_paddings_all_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("#vmutc_text_padding_left_input, #vmutc_text_padding_top_input, #vmutc_text_padding_right_input, #vmutc_text_padding_bottom_input").val(ui.value);
                        jQuery("#vmutc_text_padding_left, #vmutc_text_padding_top, #vmutc_text_padding_right, #vmutc_text_padding_bottom").slider("value", ui.value);
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                }
            });
            jQuery("#vmutc_text_padding_left_input, #vmutc_text_padding_top_input, #vmutc_text_padding_right_input, #vmutc_text_padding_bottom_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = 0;
                if (this.value != "")
                    value = parseInt(this.value);
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_text_padding_left" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                    important = jQuery('#vmutc_text_padding_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-left:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-left:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_text_padding_top" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                    important = jQuery('#vmutc_text_padding_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-top:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-top:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_text_padding_right" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                    important = jQuery('#vmutc_text_padding_right_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-right:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-right:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_text_padding_bottom" && !jQuery("#vmutc_text_paddings_all").is(":checked")) {
                    important = jQuery('#vmutc_text_padding_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-bottom:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding-bottom:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");

                    }
                }
                if (jQuery("#vmutc_text_paddings_all").is(":checked")) {
                    important = jQuery('#vmutc_text_paddings_all_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_text_padding_left_input, #vmutc_text_padding_top_input, #vmutc_text_padding_right_input, #vmutc_text_padding_bottom_input").val(value);
                    jQuery("#vmutc_text_padding_left, #vmutc_text_padding_top, #vmutc_text_padding_right, #vmutc_text_padding_bottom").slider("value", value);
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{padding:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_width_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_width_pixels").val("px");
                    width_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_width_pixels").val("%");
                    width_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_min_width_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_min_width_pixels").val("px");
                    min_width_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_min_width_pixels").val("%");
                    min_width_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_max_width_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_max_width_pixels").val("px");
                    max_width_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_max_width_pixels").val("%");
                    max_width_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_height_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_height_pixels").val("px");
                    height_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_height_pixels").val("%");
                    height_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_min_height_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_min_height_pixels").val("px");
                    min_height_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_min_height_pixels").val("%");
                    min_height_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_max_height_pixels").change(function () {
                if (jQuery(this).is(":checked")) {
                    jQuery("#vmutc_max_height_pixels").val("px");
                    max_height_unit = "px";
                    return;
                } else {
                    jQuery("#vmutc_max_height_pixels").val("%");
                    max_height_unit = "%";
                    return;
                }
            });
            jQuery("#vmutc_element_width, #vmutc_element_height").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_element_width") {
                        important = jQuery('#vmutc_element_width_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{width:" + ui.value + width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                    if (id == "vmutc_element_height") {
                        important = jQuery('#vmutc_element_height_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        if (ui.value != '') {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{height:" + ui.value + height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                        } else {
                            jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{height:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                        }
                    }
                }
            });
            jQuery("#vmutc_element_min_width, #vmutc_element_min_height").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_element_min_width") {
                        important = jQuery('#vmutc_element_min_width_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-width:" + ui.value + min_width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_element_min_height") {
                        important = jQuery('#vmutc_element_min_height_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-height:" + ui.value + min_height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_element_max_width, #vmutc_element_max_height").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_element_max_width") {
                        important = jQuery('#vmutc_element_max_width_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-width:" + ui.value + max_width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_element_max_height") {
                        important = jQuery('#vmutc_element_max_height_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-height:" + ui.value + max_height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_element_width_input, #vmutc_element_height_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_element_width") {
                    important = jQuery('#vmutc_element_width_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{width:" + value + width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_element_height") {
                    important = jQuery('#vmutc_element_height_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{height:" + value + height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{height:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");

                    }
                }
            });
            jQuery("#vmutc_element_min_width_input, #vmutc_element_min_height_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_element_min_width") {
                    important = jQuery('#vmutc_element_min_width_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-width:" + value + min_width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_element_min_height") {
                    important = jQuery('#vmutc_element_min_height_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-height:" + value + min_height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{min-height:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");

                    }
                }
            });
            jQuery("#vmutc_element_max_width_input, #vmutc_element_max_height_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_element_max_width") {
                    important = jQuery('#vmutc_element_max_width_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-width:" + value + max_width_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");

                    }
                }
                if (sliderid == "vmutc_element_max_height") {
                    important = jQuery('#vmutc_element_max_height_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-height:" + value + max_height_unit + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{max-height:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_text_shadow_V, #vmutc_text_shadow_H, #vmutc_text_shadow_Blur").slider({
                value: jQuery(this).val(),
                min: -20,
                max: 30,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    jQuery("#" + id).slider("value", ui.value);
                    shadowMe(arrayselectedElement);
                }
            });
            jQuery("#vmutc_text_shadow_V_input, #vmutc_text_shadow_H_input, #vmutc_text_shadow_Blur_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                shadowMe(arrayselectedElement);
            });
            jQuery("#vmutc_border_left_top, #vmutc_border_right_top, #vmutc_border_right_bottom, #vmutc_border_left_bottom").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 50,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_border_left_top" && !jQuery("#vmutc_borders_all").is(":checked")) {
                        important = jQuery('#vmutc_border_left_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-left-radius:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_right_top" && !jQuery("#vmutc_borders_all").is(":checked")) {
                        important = jQuery('#vmutc_border_right_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-right-radius:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_right_bottom" && !jQuery("#vmutc_borders_all").is(":checked")) {
                        important = jQuery('#vmutc_border_right_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-right-radius:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_left_bottom" && !jQuery("#vmutc_borders_all").is(":checked")) {
                        important = jQuery('#vmutc_border_left_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-left-radius:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (jQuery("#vmutc_borders_all").is(":checked")) {
                        important = jQuery('#vmutc_borders_all_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("#vmutc_border_left_top_input, #vmutc_border_right_top_input, #vmutc_border_right_bottom_input, #vmutc_border_left_bottom_input").val(ui.value);
                        jQuery("#vmutc_border_left_top, #vmutc_border_right_top, #vmutc_border_right_bottom, #vmutc_border_left_bottom").slider("value", ui.value);
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-radius:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
            });
            jQuery("#vmutc_border_left_top_input, #vmutc_border_right_top_input, #vmutc_border_right_bottom_input, #vmutc_border_left_bottom_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = 0;
                if (this.value != "")
                    value = parseInt(this.value);
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_border_left_top" && !jQuery("#vmutc_borders_all").is(":checked")) {
                    important = jQuery('#vmutc_border_left_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-left-radius:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-left-radius:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_right_top" && !jQuery("#vmutc_borders_all").is(":checked")) {
                    important = jQuery('#vmutc_border_right_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-right-radius:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-right-radius:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_right_bottom" && !jQuery("#vmutc_borders_all").is(":checked")) {
                    important = jQuery('#vmutc_border_right_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-right-radius:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-right-radius:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_left_bottom" && !jQuery("#vmutc_borders_all").is(":checked")) {
                    important = jQuery('#vmutc_border_left_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-left-radius:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-left-radius:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (jQuery("#vmutc_borders_all").is(":checked")) {
                    important = jQuery('#vmutc_borders_all_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_border_left_top_input, #vmutc_border_right_top_input, #vmutc_border_right_bottom_input, #vmutc_border_left_bottom_input").val(value);
                    jQuery("#vmutc_border_left_top, #vmutc_border_right_top, #vmutc_border_right_bottom, #vmutc_border_left_bottom").slider("value", value);
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-radius:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-radius:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_width_left, #vmutc_border_width_top, #vmutc_border_width_right, #vmutc_border_width_bottom").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 50,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_border_width_left" && !jQuery("#vmutc_borders_width_all").is(":checked")) {
                        important = jQuery('#vmutc_border_width_left_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-width:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_width_top" && !jQuery("#vmutc_borders_width_all").is(":checked")) {
                        important = jQuery('#vmutc_border_width_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-width:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_width_right" && !jQuery("#vmutc_borders_width_all").is(":checked")) {
                        important = jQuery('#vmutc_border_width_right_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-width:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_border_width_bottom" && !jQuery("#vmutc_borders_width_all").is(":checked")) {
                        important = jQuery('#vmutc_border_width_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-width:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (jQuery("#vmutc_borders_width_all").is(":checked")) {
                        important = jQuery('#vmutc_borders_width_all_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("#vmutc_border_width_left_input, #vmutc_border_width_top_input, #vmutc_border_width_right_input, #vmutc_border_width_bottom_input").val(ui.value);
                        jQuery("#vmutc_border_width_left, #vmutc_border_width_top, #vmutc_border_width_right, #vmutc_border_width_bottom").slider("value", ui.value);
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-width:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_width_left_input, #vmutc_border_width_top_input, #vmutc_border_width_right_input, #vmutc_border_width_bottom_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = 0;
                if (this.value != "")
                    value = parseInt(this.value);
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_border_width_left") {
                    important = jQuery('#vmutc_border_width_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-width:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_width_top") {
                    important = jQuery('#vmutc_border_width_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-width:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_width_right") {
                    important = jQuery('#vmutc_border_width_right_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-width:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (sliderid == "vmutc_border_width_bottom") {
                    important = jQuery('#vmutc_border_width_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-width:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (jQuery("#vmutc_borders_width_all").is(":checked")) {
                    important = jQuery('#vmutc_borders_width_all_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_border_width_left_input, #vmutc_border_width_top_input, #vmutc_border_width_right_input, #vmutc_border_width_bottom_input").val(value);
                    jQuery("#vmutc_border_width_left, #vmutc_border_width_top, #vmutc_border_width_right, #vmutc_border_width_bottom").slider("value", value);
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-width:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-width:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_style_left, #vmutc_border_style_top, #vmutc_border_style_right, #vmutc_border_style_bottom").change(function () {
                id = jQuery(this).attr('id');
                value = jQuery(this).val();
                if (id == "vmutc_border_style_left") {
                    important = jQuery('#vmutc_border_width_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-style:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-style:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (id == "vmutc_border_style_top") {
                    important = jQuery('#vmutc_border_width_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-style:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-style:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (id == "vmutc_border_style_right") {
                    important = jQuery('#vmutc_border_width_right_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-style:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-style:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
                if (id == "vmutc_border_style_bottom") {
                    important = jQuery('#vmutc_border_width_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (value != '') {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-style:" + value + important + ";} </style>").appendTo("#vmutc_styles_container");
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-style:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_borders_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-border-box",
                move: function (color) {
                    important = jQuery('#vmutc_borders_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_borders_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_borders_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_borders_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_borders_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_borders_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_left_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-border-box",
                move: function (color) {
                    important = jQuery('#vmutc_border_left_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_left_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_border_left_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_left_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_border_left_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_left_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-left-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_top_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-border-box",
                move: function (color) {
                    important = jQuery('#vmutc_border_top_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_top_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_border_top_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_top_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_border_top_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_top_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-top-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_right_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-border-box",
                move: function (color) {
                    important = jQuery('#vmutc_border_right_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_right_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_border_right_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_right_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_border_right_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_right_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-right-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_border_bottom_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                appendTo: "#vmutc-border-box",
                move: function (color) {
                    important = jQuery('#vmutc_border_bottom_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_bottom_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                change: function (color) {
                    important = jQuery('#vmutc_border_bottom_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_bottom_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                },
                hide: function (color) {
                    important = jQuery('#vmutc_border_bottom_color_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    if (color != null) {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:" + color + important + ";} </style>").appendTo("#vmutc_styles_container");
                        jQuery("#vmutc_border_bottom_color_real").val(color);
                    } else {
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{border-bottom-color:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_boxshadow_V, #vmutc_boxshadow_H, #vmutc_boxshadow_Blur, #vmutc_boxshadow_Spread").slider({
                value: jQuery(this).val(),
                min: -20,
                max: 30,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    jQuery("#" + id).slider("value", ui.value);
                    boxshadowMe(arrayselectedElement);
                }
            });
            jQuery("#vmutc_boxshadow_V_input, #vmutc_boxshadow_H_input, #vmutc_boxshadow_Blur_input, #vmutc_boxshadow_Spread_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                boxshadowMe(arrayselectedElement);
            });
            jQuery("#vmutc_boxshadow_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                color: "#000",
                showInitial: true,
                appendTo: "#vmutc-shadow-box",
                move: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_boxshadow_color_real").val(color);
                    boxshadowMe(arrayselectedElement);
                },
                change: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_boxshadow_color_real").val(color);
                    boxshadowMe(arrayselectedElement);
                },
                hide: function (color) {
                    if (color != null)
                        color = color.toRgbString();
                    else
                        color = 'transparent';
                    jQuery("#vmutc_boxshadow_color_real").val(color);
                    boxshadowMe(arrayselectedElement);
                }
            });
            jQuery("#vmutc_position_left, #vmutc_position_top, #vmutc_position_right, #vmutc_position_bottom").slider({
                value: jQuery(this).val(),
                min: -1000,
                max: 1000,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_position_left") {
                        important = jQuery('#vmutc_position_left_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{left:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_position_top") {
                        important = jQuery('#vmutc_position_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{top:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_position_right") {
                        important = jQuery('#vmutc_position_right_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{right:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_position_bottom") {
                        important = jQuery('#vmutc_position_bottom_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{bottom:" + ui.value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_position_left_input, #vmutc_position_top_input, #vmutc_position_right_input, #vmutc_position_bottom_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_position_left") {
                    important = jQuery('#vmutc_position_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{left:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{left:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                } 
               }
                if (sliderid == "vmutc_position_top") {
                    important = jQuery('vmutc_position_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{top:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{top:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }
                }
                if (sliderid == "vmutc_position_right") {
                    important = jQuery('#vmutc_position_right_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{right:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{right:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }  
              }
                if (sliderid == "vmutc_position_bottom") {
                    important = jQuery('#vmutc_position_bottom_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{bottom:" + value + 'px' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{bottom:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }  
              }
            });
            jQuery("input[type=radio][name=vmutcrepeat]").on("change", function () {
                important = jQuery('#vmutcrepeat_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-repeat:" + jQuery(this).val() + important + ";} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery("input[type=radio][name=vmutcattachment]").on("change", function () {
                important = jQuery('#vmutc_attachment_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-attachment:" + jQuery(this).val() + important + ";} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery("input[type=radio][name=vmutc_back_size]").on("change", function () {
                important = jQuery('#vmutc_back_size_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:" + jQuery(this).val() + important + ";} </style>").appendTo("#vmutc_styles_container");
                jQuery("#vmutc_background_size_width_input, #vmutc_background_size_height_input").val("");
                jQuery("#vmutc_background_size_width, #vmutc_background_size_height").slider("value", "");
            });
            jQuery("input[type=radio][name=vmutcpseudo]").on("change", function () {
                arrayselectedElement = arrayselectedElement.replace("::after", "").replace("::before", "");
                if (jQuery(this).val() == "before")
                    arrayselectedElement = arrayselectedElement + "::before";
                if (jQuery(this).val() == "after")
                    arrayselectedElement = arrayselectedElement + "::after";
                jQuery('#vmutc-element-selected').val(arrayselectedElement);
                getcss(arrayselectedElement);
            });
            jQuery("input[type=radio][name=vmutcstate]").on("change", function () {
                arrayselectedElement = arrayselectedElement.replace(":hover", "").replace(":active:focus", "");
                if (jQuery(this).val() == "hover") {
                    jQuery(".vmutc_hide").removeClass("vmutc_hide_disable").addClass("vmutc_hide_activate");
                    arrayselectedElement = arrayselectedElement + ":hover";
                }
                if (jQuery(this).val() == "nostate") {
                    jQuery(".vmutc_hide").removeClass("vmutc_hide_activate").addClass("vmutc_hide_disable");
                    arrayselectedElement = arrayselectedElement + ":active:focus";
                }
                jQuery('#vmutc-element-selected').val(arrayselectedElement);
                getcss(arrayselectedElement);
            });
            jQuery("#vmutc_background_left, #vmutc_background_top").slider({
                value: jQuery(this).val(),
                min: -100,
                max: 100,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_background_left") {
                        important = jQuery('#vmutc_background_left_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:" + ui.value + '%' + jQuery("#vmutc_background_top_input").val() + "%" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_background_top") {
                        important = jQuery('#vmutc_background_top_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:" + jQuery("#vmutc_background_left_input").val() + "%" + ui.value + '%' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                }
            });
            jQuery("#vmutc_background_left_input, #vmutc_background_top_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_background_left") {
                    important = jQuery('#vmutc_background_left_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:" + value + '%' + jQuery("#vmutc_background_top_input").val() + "%" + important + ";} </style>").appendTo("#vmutc_styles_container");
                 }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
         
                } 
            }
                if (sliderid == "vmutc_background_top") {
                    important = jQuery('#vmutc_background_top_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:" + jQuery("#vmutc_background_left_input").val() + "%" + value + '%' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-position:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
           
                }  
              }
            });
            jQuery("#vmutc_background_size_width, #vmutc_background_size_height").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 100,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    if (id == "vmutc_background_size_width") {
                        important = jQuery('#vmutc_background_size_width_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:" + ui.value + '%' + jQuery("#vmutc_background_size_height_input").val() + "%" + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    if (id == "vmutc_background_size_height") {
                        important = jQuery('#vmutc_background_size_width_input_important').val();
                        if (typeof (important) == 'undefined')
                            important = "";
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:" + jQuery("#vmutc_background_size_width_input").val() + "%" + ui.value + '%' + important + ";} </style>").appendTo("#vmutc_styles_container");
                    }
                    jQuery('[name=vmutc_back_size]').prop("checked", false);
                }
            });
            jQuery("#vmutc_background_size_width_input, #vmutc_background_size_height_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if (sliderid == "vmutc_background_size_width") {
                    important = jQuery('#vmutc_background_size_width_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:" + value + '%' + jQuery("#vmutc_background_size_height_input").val() + "%" + important + ";} </style>").appendTo("#vmutc_styles_container");
                     }
                    else{
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                     } 
                    }
                if (sliderid == "vmutc_background_size_height") {
                    important = jQuery('#vmutc_background_size_width_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                        if(value!='')
                        {
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:" + jQuery("#vmutc_background_size_width_input").val() + "%" + value + '%' + important + ";} </style>").appendTo("#vmutc_styles_container");
                   }
                else{
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background-size:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
                }  
             }
                jQuery('[name=vmutc_back_size]').prop("checked", false);
            });
            jQuery("#vmutc_custom_css_update").click(function () {
                cssText = jQuery("#vmutc_custom_css").val();
                if (cssText.substring(cssText.length - 1, cssText.length) != ";") {
                    cssText = cssText + ";";
                    jQuery("#vmutc_custom_css").val(cssText);
                }
                jQuery(arrayselectedElement).css("cssText", cssText);
            });
            ///// TRANSFORM
            jQuery("#vmutc_transform_scale").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 4,
                step: 0.1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var scale = ui.value;
                    var rotate = jQuery("#vmutc_transform_rotate_input").val();
                    var translateX = jQuery("#vmutc_transform_translateX_input").val();
                    var translateY = jQuery("#vmutc_transform_translateY_input").val();
                    var skewX = jQuery("#vmutc_transform_skewX_input").val();
                    var skewY = jQuery("#vmutc_transform_skewY_input").val();
                    jQuery("#vmutc_transform_scale_input").val(scale);
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                    if (rotate != '' && rotate != '0') {
                        transformStringMoz += " rotate(" + rotate + "deg)";
                        transformStringWebkit += " rotate(" + rotate + "deg)";
                        transformStringO += " rotate(" + rotate + "deg)";
                        transformStringMs += " rotate(" + rotate + "deg)";
                        transformString += " rotate(" + rotate + "deg)";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_scale_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var scale = this.value;
                var rotate = jQuery("#vmutc_transform_rotate_input").val();
                var translateX = jQuery("#vmutc_transform_translateX_input").val();
                var translateY = jQuery("#vmutc_transform_translateY_input").val();
                var skewX = jQuery("#vmutc_transform_skewX_input").val();
                var skewY = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_scale_input").val(scale);
                jQuery("#vmutc_transform_scale").slider("value", scale);
                transformStringMoz += " scale(" + scale + ")";
                transformStringWebkit += " scale(" + scale + ")";
                transformStringO += " scale(" + scale + ")";
                transformStringMs += " scale(" + scale + ")";
                transformString += " scale(" + scale + ")";
                if (rotate != '' && rotate != '0') {
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                }
                if (translateX != '' && translateY != '') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '' && skewY != '') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            ///
            jQuery("#vmutc_transform_rotate").slider({
                value: jQuery(this).val(),
                min: -360,
                max: 360,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var rotate = ui.value;
                    var scale = jQuery("#vmutc_transform_scale_input").val();
                    var translateX = jQuery("#vmutc_transform_translateX_input").val();
                    var translateY = jQuery("#vmutc_transform_translateY_input").val();
                    var skewX = jQuery("#vmutc_transform_skewX_input").val();
                    var skewY = jQuery("#vmutc_transform_skewY_input").val();
                    jQuery("#vmutc_transform_rotate_input").val(rotate);
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                    if (scale != '') {
                        transformStringMoz += " scale(" + scale + ")";
                        transformStringWebkit += " scale(" + scale + ")";
                        transformStringO += " scale(" + scale + ")";
                        transformStringMs += " scale(" + scale + ")";
                        transformString += " scale(" + scale + ")";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_rotate_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var rotate = this.value;
                var scale = jQuery("#vmutc_transform_scale_input").val();
                var translateX = jQuery("#vmutc_transform_translateX_input").val();
                var translateY = jQuery("#vmutc_transform_translateY_input").val();
                var skewX = jQuery("#vmutc_transform_skewX_input").val();
                var skewY = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_rotate_input").val(rotate);
                jQuery("#vmutc_transform_rotate").slider("value", rotate);
                transformStringMoz += " rotate(" + rotate + "deg)";
                transformStringWebkit += " rotate(" + rotate + "deg)";
                transformStringO += " rotate(" + rotate + "deg)";
                transformStringMs += " rotate(" + rotate + "deg)";
                transformString += " rotate(" + rotate + "deg)";
                if (scale != '') {
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                }
                if (translateX != '' && translateY != '') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '' && skewY != '') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            ///
            jQuery("#vmutc_transform_translateX").slider({
                value: jQuery(this).val(),
                min: -200,
                max: 200,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var translateX = ui.value;
                    var scale = jQuery("#vmutc_transform_scale_input").val();
                    var rotate = jQuery("#vmutc_transform_rotate_input").val();
                    var translateY = jQuery("#vmutc_transform_translateY_input").val();
                    var skewX = jQuery("#vmutc_transform_skewX_input").val();
                    var skewY = jQuery("#vmutc_transform_skewY_input").val();
                    jQuery("#vmutc_transform_translateX_input").val(translateX);
                    if (scale != '') {
                        transformStringMoz += " scale(" + scale + ")";
                        transformStringWebkit += " scale(" + scale + ")";
                        transformStringO += " scale(" + scale + ")";
                        transformStringMs += " scale(" + scale + ")";
                        transformString += " scale(" + scale + ")";
                    }
                    if (rotate != '') {
                        transformStringMoz += " rotate(" + rotate + "deg)";
                        transformStringWebkit += " rotate(" + rotate + "deg)";
                        transformStringO += " rotate(" + rotate + "deg)";
                        transformStringMs += " rotate(" + rotate + "deg)";
                        transformString += " rotate(" + rotate + "deg)";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_translateX_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var translateX = this.value;
                var scale = jQuery("#vmutc_transform_scale_input").val();
                var rotate = jQuery("#vmutc_transform_rotate_input").val();
                var translateY = jQuery("#vmutc_transform_translateY_input").val();
                var skewX = jQuery("#vmutc_transform_skewX_input").val();
                var skewY = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_translateX_input").val(translateX);
                jQuery("#vmutc_transform_translateX").slider("value", translateX);
                if (scale != '') {
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                }
                if (rotate != '') {
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                }
                if (translateX != '0' && translateY != '0') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '0' && skewY != '0') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            //
            jQuery("#vmutc_transform_translateY").slider({
                value: jQuery(this).val(),
                min: -200,
                max: 200,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var translateY = ui.value;
                    var scale = jQuery("#vmutc_transform_scale_input").val();
                    var rotate = jQuery("#vmutc_transform_rotate_input").val();
                    var translateX = jQuery("#vmutc_transform_translateX_input").val();
                    var skewX = jQuery("#vmutc_transform_skewX_input").val();
                    var skewY = jQuery("#vmutc_transform_skewY_input").val();
                    jQuery("#vmutc_transform_translateY_input").val(translateY);
                    if (scale != '') {
                        transformStringMoz += " scale(" + scale + ")";
                        transformStringWebkit += " scale(" + scale + ")";
                        transformStringO += " scale(" + scale + ")";
                        transformStringMs += " scale(" + scale + ")";
                        transformString += " scale(" + scale + ")";
                    }
                    if (rotate != '') {
                        transformStringMoz += " rotate(" + rotate + "deg)";
                        transformStringWebkit += " rotate(" + rotate + "deg)";
                        transformStringO += " rotate(" + rotate + "deg)";
                        transformStringMs += " rotate(" + rotate + "deg)";
                        transformString += " rotate(" + rotate + "deg)";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_translateY_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var translateY = this.value;
                var scale = jQuery("#vmutc_transform_scale_input").val();
                var rotate = jQuery("#vmutc_transform_rotate_input").val();
                var translateX = jQuery("#vmutc_transform_translateX_input").val();
                var skewX = jQuery("#vmutc_transform_skewX_input").val();
                var skewY = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_translateY_input").val(translateY);
                jQuery("#vmutc_transform_translateY").slider("value", translateY);
                if (scale != '') {
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                }
                if (rotate != '') {
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                }
                if (translateX != '' && translateY != '') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '' && skewY != '') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            //
            jQuery("#vmutc_transform_skewX").slider({
                value: jQuery(this).val(),
                min: -200,
                max: 200,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var skewX = ui.value;
                    var scale = jQuery("#vmutc_transform_scale_input").val();
                    var rotate = jQuery("#vmutc_transform_rotate_input").val();
                    var translateY = jQuery("#vmutc_transform_translateY_input").val();
                    var translateX = jQuery("#vmutc_transform_translateX_input").val();
                    var skewY = jQuery("#vmutc_transform_skewY_input").val();
                    jQuery("#vmutc_transform_skewX_input").val(skewX);
                    if (scale != '') {
                        transformStringMoz += " scale(" + scale + ")";
                        transformStringWebkit += " scale(" + scale + ")";
                        transformStringO += " scale(" + scale + ")";
                        transformStringMs += " scale(" + scale + ")";
                        transformString += " scale(" + scale + ")";
                    }
                    if (rotate != '') {
                        transformStringMoz += " rotate(" + rotate + "deg)";
                        transformStringWebkit += " rotate(" + rotate + "deg)";
                        transformStringO += " rotate(" + rotate + "deg)";
                        transformStringMs += " rotate(" + rotate + "deg)";
                        transformString += " rotate(" + rotate + "deg)";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_skewX_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var skewX = this.value;
                var scale = jQuery("#vmutc_transform_scale_input").val();
                var rotate = jQuery("#vmutc_transform_rotate_input").val();
                var translateY = jQuery("#vmutc_transform_translateY_input").val();
                var translateX = jQuery("#vmutc_transform_translateX_input").val();
                var skewY = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_skewX_input").val(skewX);
                jQuery("#vmutc_transform_skewX").slider("value", skewX);
                if (scale != '') {
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                }
                if (rotate != '') {
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                }
                if (translateX != '' && translateY != '') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '' && skewY != '') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            //
            jQuery("#vmutc_transform_skewY").slider({
                value: jQuery(this).val(),
                min: -200,
                max: 200,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_transform_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    var transformStringMoz = '-moz-transform:';
                    var transformStringWebkit = '-webkit-transform:';
                    var transformStringO = '-o-transform';
                    var transformStringMs = '-ms-transform';
                    var transformString = 'transform:';
                    var alltransformString = '';
                    var skewY = ui.value;
                    var scale = jQuery("#vmutc_transform_scale_input").val();
                    var rotate = jQuery("#vmutc_transform_rotate_input").val();
                    var translateY = jQuery("#vmutc_transform_translateY_input").val();
                    var translateX = jQuery("#vmutc_transform_translateX_input").val();
                    var skewX = jQuery("#vmutc_transform_skewX_input").val();
                    jQuery("#vmutc_transform_skewY_input").val(skewY);
                    if (scale != '') {
                        transformStringMoz += " scale(" + scale + ")";
                        transformStringWebkit += " scale(" + scale + ")";
                        transformStringO += " scale(" + scale + ")";
                        transformStringMs += " scale(" + scale + ")";
                        transformString += " scale(" + scale + ")";
                    }
                    if (rotate != '') {
                        transformStringMoz += " rotate(" + rotate + "deg)";
                        transformStringWebkit += " rotate(" + rotate + "deg)";
                        transformStringO += " rotate(" + rotate + "deg)";
                        transformStringMs += " rotate(" + rotate + "deg)";
                        transformString += " rotate(" + rotate + "deg)";
                    }
                    if (translateX != '' && translateY != '') {
                        transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                        transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                        transformString += " translate(" + translateX + "px," + translateY + "px)";
                    }
                    if (skewX != '' && skewY != '') {
                        transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                        transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                    }
                    transformStringMoz += important + ';';
                    transformStringWebkit += important + ';';
                    transformStringO += important + ';';
                    transformStringMs += important + ';';
                    transformString += important + ';';
                    alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_transform_skewY_input").change(function () {
                important = jQuery('#vmutc_transform_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                var transformStringMoz = '-moz-transform:';
                var transformStringWebkit = '-webkit-transform:';
                var transformStringO = '-o-transform';
                var transformStringMs = '-ms-transform';
                var transformString = 'transform:';
                var alltransformString = '';
                var skewY = this.value;
                var scale = jQuery("#vmutc_transform_scale_input").val();
                var rotate = jQuery("#vmutc_transform_rotate_input").val();
                var translateY = jQuery("#vmutc_transform_translateY_input").val();
                var translateX = jQuery("#vmutc_transform_translateX_input").val();
                var skewX = jQuery("#vmutc_transform_skewY_input").val();
                jQuery("#vmutc_transform_skewY_input").val(skewY);
                jQuery("#vmutc_transform_skewY").slider("value", skewY);
                if (scale != '') {
                    transformStringMoz += " scale(" + scale + ")";
                    transformStringWebkit += " scale(" + scale + ")";
                    transformStringO += " scale(" + scale + ")";
                    transformStringMs += " scale(" + scale + ")";
                    transformString += " scale(" + scale + ")";
                }
                if (rotate != '') {
                    transformStringMoz += " rotate(" + rotate + "deg)";
                    transformStringWebkit += " rotate(" + rotate + "deg)";
                    transformStringO += " rotate(" + rotate + "deg)";
                    transformStringMs += " rotate(" + rotate + "deg)";
                    transformString += " rotate(" + rotate + "deg)";
                }
                if (translateX != '' && translateY != '') {
                    transformStringMoz += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringWebkit += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringO += " translate(" + translateX + "px," + translateY + "px)";
                    transformStringMs += " translate(" + translateX + "px," + translateY + "px)";
                    transformString += " translate(" + translateX + "px," + translateY + "px)";
                }
                if (skewX != '' && skewY != '') {
                    transformStringMoz += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringWebkit += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringO += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformStringMs += " skew(" + skewX + "deg," + skewY + "deg)";
                    transformString += " skew(" + skewX + "deg," + skewY + "deg)";
                }
                transformStringMoz += important + ';';
                transformStringWebkit += important + ';';
                transformStringO += important + ';';
                transformStringMs += important + ';';
                transformString += important + ';';
                alltransformString = transformStringMoz + transformStringWebkit + transformStringO + transformStringMs + transformString;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + alltransformString + "} </style>").appendTo("#vmutc_styles_container");
            });
            ///// END TRANSFORM
            // Z Index
            jQuery("#vmutc_zindex").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 100,
                step: 1,
                slide: function (event, ui) {
                    important = jQuery('#vmutc_zindex_input_important').val();
                    if (typeof (important) == 'undefined')
                        important = "";
                    jQuery("#vmutc_zindex_input").val(ui.value);
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{z-index:" + ui.value + important + ";} </style>").appendTo("#vmutc_styles_container");
                }
            });
            jQuery("#vmutc_zindex_input").change(function () {
                important = jQuery('#vmutc_text_size_input_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                value = this.value;
                jQuery("#vmutc_zindex").slider("value", value);
                if(value!='')
                {
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{z-index:" + parseInt(value) + important + ";} </style>").appendTo("#vmutc_styles_container");
               }
            else{
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{z-index:inherit" + important + ";} </style>").appendTo("#vmutc_styles_container");
         
            } 
          });
            // end Z Index
            /// Origin Text Gradient
            jQuery('#vmutc_origintextGradientSelect').prop('checked', false);
            jQuery('#vmutc_origintextGradientContainer').hide();
            jQuery('#vmutc_origintextGradientSelect').on('click', function () {
                if (jQuery(this).prop("checked") == false) {
                    jQuery('#vmutc_origintextGradientContainer').hide();
                    jQuery('#vmutc_origintextGradientSelect').val('');
                    var color = jQuery('#vmutc_text_color_real').val();
                    if (color == '')
                        color = 'initial';
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{color:" + color + ";-webkit-text-fill-color:initial;'} </style>").appendTo("#vmutc_styles_container");
                } else {
                    origintextGradientPicker.clear();
                    jQuery('#vmutc_origintextGradientContainer').show();
                    jQuery('#vmutc_origintextGradientSelect').val('1');
                    origintextGradientPicker.addHandler(0, '#fff');
                    origintextGradientPicker.addHandler(100, jQuery('#vmutc_text_color_real').val());
                    var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                }
            });
            origintextGradientPicker = new Grapick({
                el: '#vmutc_origintextGradientPicker',
                colorEl: '<input id="vmutc_origintextBackgroundGradientColor">'
            });
            origintextGradientPicker.setColorPicker(handler => {
                var el = handler.getEl().querySelector('#vmutc_origintextBackgroundGradientColor');
                jQuery(el).spectrum({
                    preferredFormat: "hex",
                    color: handler.getColor(),
                    showAlpha: true,
                    showInput: true,
                    showInitial: true,
                    allowEmpty: true,
                    change(color) {
                        handler.setColor(color.toRgbString());
                        var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    },
                    move(color) {
                        handler.setColor(color.toRgbString(), 0);
                        var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    },
                    hide(color) {
                        handler.setColor(color.toRgbString());
                        var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    }
                });
            });
            jQuery('#vmutc_origintextgradientType').on('click', function () {
                origintextGradientPicker.setType(this.value);
                if (this.value == 'linear' || this.value == 'repeating-linear') {
                    jQuery('#vmutc_origintextgradientPositionContainer').hide();
                    jQuery('#vmutc_origintextgradientAngle').val('90');
                    origintextGradientAngle.noUiSlider.set(90);
                    origintextGradientPicker.setDirection('90deg');
                    jQuery('#vmutc_origintextgradientAngleContainer').show();
                }
                if (this.value == 'radial' || this.value == 'repeating-radial') {
                    jQuery('#vmutc_origintextgradientAngleContainer').hide();
                    jQuery('#vmutc_origintextgradientPosition').val("center center");
                    origintextGradientPicker.setDirection('center center');
                    jQuery('#vmutc_origintextgradientPositionContainer').show();
                }
                var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery('#vmutc_origintextgradientPosition').on('click', function () {
                origintextGradientPicker.setDirection(this.value);
                var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            var origintextGradientAngle = document.getElementById('vmutc_origintextgradientAngle_slider');
            noUiSlider.create(origintextGradientAngle, {
                start: 0,
                step: 1,
                range: {
                    min: 0,
                    max: 360
                },
            });
            origintextGradientAngle.noUiSlider.on('slide', function (values, handle) {
                var angle = Math.round(values);
                jQuery('#vmutc_origintextgradientAngle').val(angle);
                origintextGradientPicker.setDirection(angle + 'deg');
                var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                //     jQuery('#vmutc_origintextGradientPicker_real').val(allGradientVendor);
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery(document).on('change', '#vmutc_origintextgradientAngle', function () {
                origintextGradientAngle.noUiSlider.set(this.value);
                origintextGradientPicker.setDirection(this.value + 'deg');
                var allGradientVendor = getAllGradientTextVendor(origintextGradientPicker.getPrefixedValues());
                //     jQuery('#vmutc_origintextGradientPicker_real').val(allGradientVendor);
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });

            function getAllGradientTextVendor(allGradientArray) {
                var allGradientString = "";
                for (i = 0; i < allGradientArray.length; i++) {
                    gradient = allGradientArray[i];
                    allGradientString += "background:" + gradient + ";";
                }
                origintextAllHandlersObj = {};
                var allHandlers = origintextGradientPicker.getHandlers();
                for (var i = 0; i < allHandlers.length; i++) {
                    var position = Number.parseFloat(allHandlers[i].position).toFixed(2)
                    origintextAllHandlersObj[position] = allHandlers[i].color;
                }
                allGradientString += "-webkit-background-clip: text;-webkit-text-fill-color: transparent;";
                jQuery('#vmutc_origintextGradientPicker_handlers').val(JSON.stringify(origintextAllHandlersObj));
                jQuery('#vmutc_origintextGradientPicker_real').val(allGradientString);
                return allGradientString;
            }
            // End Origin Text Gradient
            /// Origin Background Gradient
            jQuery('#vmutc_originGradientSelect').prop('checked', false);
            jQuery('#vmutc_originGradientContainer').hide();
            jQuery('#vmutc_originGradientSelect').on('click', function () {
                if (jQuery(this).prop("checked") == false) {
                    jQuery('#vmutc_originGradientContainer').hide();
                    jQuery('#vmutc_originGradientSelect').val('');
                    var color = jQuery('#vmutc_background_color_real').val();
                    if (color == '')
                        color = 'transparent';
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{background:" + color + ";'} </style>").appendTo("#vmutc_styles_container");
                } else {
                    originGradientPicker.clear();
                    jQuery('#vmutc_originGradientContainer').show();
                    jQuery('#vmutc_originGradientSelect').val('1');
                    originGradientPicker.addHandler(0, '#fff');
                    originGradientPicker.addHandler(100, jQuery('#vmutc_background_color_real').val());
                    var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                    jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                }
            });
            originGradientPicker = new Grapick({
                el: '#vmutc_originGradientPicker',
                colorEl: '<input id="vmutc_originBackgroundGradientColor">'
            });
            originGradientPicker.setColorPicker(handler => {
                var el = handler.getEl().querySelector('#vmutc_originBackgroundGradientColor');
                jQuery(el).spectrum({
                    preferredFormat: "hex",
                    color: handler.getColor(),
                    showAlpha: true,
                    showInput: true,
                    showInitial: true,
                    allowEmpty: true,
                    change(color) {
                        handler.setColor(color.toRgbString());
                        var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    },
                    move(color) {
                        handler.setColor(color.toRgbString(), 0);
                        var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    },
                    hide(color) {
                        handler.setColor(color.toRgbString());
                        var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                        jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
                    }
                });
            });
            jQuery('#vmutc_origingradientType').on('click', function () {
                originGradientPicker.setType(this.value);
                if (this.value == 'linear' || this.value == 'repeating-linear') {
                    jQuery('#vmutc_origingradientPositionContainer').hide();
                    jQuery('#vmutc_origingradientAngle').val('90');
                    originGradientAngle.noUiSlider.set(90);
                    originGradientPicker.setDirection('90deg');
                    jQuery('#vmutc_origingradientAngleContainer').show();
                }
                if (this.value == 'radial' || this.value == 'repeating-radial') {
                    jQuery('#vmutc_origingradientAngleContainer').hide();
                    jQuery('#vmutc_origingradientPosition').val("center center");
                    originGradientPicker.setDirection('center center');
                    jQuery('#vmutc_origingradientPositionContainer').show();
                }
                var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery('#vmutc_origingradientPosition').on('click', function () {
                originGradientPicker.setDirection(this.value);
                var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            var originGradientAngle = document.getElementById('vmutc_origingradientAngle_slider');
            noUiSlider.create(originGradientAngle, {
                start: 0,
                step: 1,
                range: {
                    min: 0,
                    max: 360
                },
            });
            originGradientAngle.noUiSlider.on('slide', function (values, handle) {
                var angle = Math.round(values);
                jQuery('#vmutc_origingradientAngle').val(angle);
                originGradientPicker.setDirection(angle + 'deg');
                var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                //     jQuery('#vmutc_originGradientPicker_real').val(allGradientVendor);
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });
            jQuery(document).on('change', '#vmutc_origingradientAngle', function () {
                originGradientAngle.noUiSlider.set(this.value);
                originGradientPicker.setDirection(this.value + 'deg');
                var allGradientVendor = getAllGradientVendor('', originGradientPicker.getPrefixedValues());
                //        jQuery('#vmutc_originGradientPicker_real').val(allGradientVendor);
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{" + allGradientVendor + "'} </style>").appendTo("#vmutc_styles_container");
            });

            function getAllGradientVendor(link, allGradientArray) {
                var allGradientString = "";
                for (i = 0; i < allGradientArray.length; i++) {
                    gradient = allGradientArray[i];
                    if (link != '')
                        allGradientString += "background-image:url(" + link + ")," + gradient + ";";
                    else
                        allGradientString += "background:" + gradient + ";";
                }
                originAllHandlersObj = {};
                var allHandlers = originGradientPicker.getHandlers();
                for (var i = 0; i < allHandlers.length; i++) {
                    var position = Number.parseFloat(allHandlers[i].position).toFixed(2)
                    originAllHandlersObj[position] = allHandlers[i].color;
                }
                jQuery('#vmutc_originGradientPicker_handlers').val(JSON.stringify(originAllHandlersObj));
                jQuery('#vmutc_originGradientPicker_real').val(allGradientString);
                return allGradientString;
            }
            // End Origin Background Gradient
            /// SVG update
            jQuery("#vmutc_svgstroke_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                //    appendTo: "#vmutc-text-box",
                move: function (color) {
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery("#vmutc_svgstroke_color_real").val(color);
                        jQuery(arrayselectedElement).css('stroke', color)
                    } else {
                        jQuery("#vmutc_svgstroke_color_real").val("inherit");
                        jQuery(arrayselectedElement).css('stoke', 'inherit')
                    }
                },
                change: function (color) {
                    if (color != null) {
                        jQuery(arrayselectedElement).css('stoke', color)
                        jQuery("#vmutc_svgstroke_color_real").val(color);
                    } else {
                        jQuery(arrayselectedElement).css('stoke', 'inherit')
                        jQuery("#vmutc_svgstroke_color_real").val("inherit");
                    }
                },
                hide: function (color) {
                    jQuery(arrayselectedElement).css('stoke', color)
                    jQuery("#vmutc_svgstroke_color_real").val(color);
                }
            });
            jQuery("#vmutc_svgfill_color").spectrum({
                preferredFormat: "hex",
                showInput: true,
                allowEmpty: true,
                showAlpha: true,
                showInitial: true,
                move: function (color) {
                    if (color != null) {
                        color = color.toRgbString();
                        jQuery(arrayselectedElement).css('fill', color)
                        jQuery("#vmutc_svgfill_color_real").val(color);
                    } else {
                        jQuery(arrayselectedElement).css('fill', 'inherit')
                        jQuery("#vmutc_svgfill_color_real").val("inherit");
                    }
                },
                change: function (color) {
                    if (color != null) {
                        jQuery(arrayselectedElement).css('fill', color)
                        jQuery("#vmutc_svgfill_color_real").val(color);
                    } else {
                        jQuery(arrayselectedElement).css('fill', 'inherit')
                        jQuery("#vmutc_svgfill_color_real").val("inherit");
                    }
                },
                hide: function (color) {
                    color = color.toRgbString();
                    jQuery(arrayselectedElement).css('fill', color)
                    jQuery("#vmutc_svgfill_color_real").val(color);
                }
            });
            jQuery("#vmutc_svgstroke_width").slider({
                value: jQuery(this).val(),
                min: 0,
                max: 20,
                step: 1,
                slide: function (event, ui) {
                    id = jQuery(this).attr('id');
                    jQuery("#" + id + "_input").val(ui.value);
                    jQuery(arrayselectedElement).css('stroke-width', ui.value + 'px');
                }
            });
            jQuery("#vmutc_svgstroke_width_input").change(function () {
                id = jQuery(this).attr('id');
                sliderid = id.replace("_input", "");
                value = this.value;
                jQuery("#" + sliderid).slider("value", value);
                if(value!='')
                {
                jQuery(arrayselectedElement).css('stroke-width', value + 'px');
                }
                else{
                    jQuery(arrayselectedElement).css('stroke-width', 'inherit');       
                }
            });
            // end SVG update
            function shadowMe(whatclass) {
                important = jQuery('#vmutc_text_shadow_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                verticalShadow = jQuery("#vmutc_text_shadow_V_input").val();
                horizontalShadow = jQuery("#vmutc_text_shadow_H_input").val();
                blurShadow = jQuery("#vmutc_text_shadow_Blur_input").val();
                colorShadow = jQuery("#vmutc_text_shadow_color_real").val();
                if (colorShadow == null)
                    colorShadow = 'transparent';
                if (verticalShadow == '' || horizontalShadow == '' || blurShadow == '')
                    theshadow = 'none';
                else
                    theshadow = horizontalShadow + "px " + verticalShadow + "px " + blurShadow + "px " + colorShadow;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{text-shadow:" + theshadow + important + ";} </style>").appendTo("#vmutc_styles_container");
            }

            function boxshadowMe(whatclass) {
                important = jQuery('#vmutc_boxshadow_important').val();
                if (typeof (important) == 'undefined')
                    important = "";
                verticalboxShadow = jQuery("#vmutc_boxshadow_V_input").val();
                horizontalboxShadow = jQuery("#vmutc_boxshadow_H_input").val();
                blurboxShadow = jQuery("#vmutc_boxshadow_Blur_input").val();
                spreadboxShadow = jQuery("#vmutc_boxshadow_Spread_input").val();
                colorboxShadow = jQuery("#vmutc_boxshadow_color_real").val();
                if (colorboxShadow == null)
                    colorboxShadow = 'transparent';
                if (verticalboxShadow == '' || horizontalboxShadow == '' || blurboxShadow == '' || spreadboxShadow == '')
                    theboxshadow = 'none';
                else
                    theboxshadow = horizontalboxShadow + "px " + verticalboxShadow + "px " + blurboxShadow + "px " + spreadboxShadow + "px " + colorboxShadow;
                jQuery("<style type='text/css'>" + jQuery(arrayselectedElement).selector + "{box-shadow:" + theboxshadow + important + ";} </style>").appendTo("#vmutc_styles_container");
            }
        }
        reloadStylesheets();
        return;
    }
);
jQuery(window).load(function () {
    jQuery(".se-pre-con").fadeOut("slow");
});
async function inspectorGetCSSRules(target) {
    formated = await getCSSRules([target], {
        document: window.document,
        blacklist: {
            media: ["print"],
        },
    });
    formated = serializeCSSRules(formated);
    return formated;
}

function get(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

function reloadStylesheets() {
    var queryString = '?reload=' + new Date().getTime();
    jQuery('link[rel="stylesheet"]').each(function () {
        if (!this.href.indexOf('css?reload'))
            this.href = this.href.replace(/\?.*|$/, queryString);
    });
}

function updateImportant(importantElement) {
    var importantElement = importantElement;
    jQuery(".vmutc_important[data-id='" + importantElement + "']").addClass("vmutc_important_yes");
    jQuery("#" + importantElement).val(" !important");
}

function get(name) {
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}

function addEvent(node, ename, handler) {
    if (typeof document.addEventListener != 'undefined') {
        node.addEventListener(ename, handler, false);
    } else if (typeof document.attachEvent != 'undefined') {
        node.attachEvent('on' + ename, handler);
    }
}

function removeSection(what) {
    jQuery('#vmutc_block_' + what).remove();
    jQuery('#vmutc_block_id').val('');
    var id = jQuery('#' + what).attr('data-index');
  
    jQuery('#container-' + what).remove();
    var values = {
        security: cssm_front_ajax_object.security,
        id: id,
        id_theme: jQuery('#cssm_id_theme').val(),
        action: 'removeBlock',
    };
    jQuery.ajax({
        type: "POST",
        url: cssm_front_ajax_object.ajaxurl,
        data: values,
        success: function () {
            gridstack[what].destroy();
            console.log('block removed with success');
        }
    });
}
jQuery(document).on('click', '.elementClose', function () {
    var what = jQuery(this).attr('data-element');
    removeWidget(what);
});
jQuery(document).on('click', '.elementCopy', function () {
    var what = jQuery(this).attr('data-element');
    copyWidget(what);
});

function removeWidget(what) {
    Swal.fire({
        title: cssmTranslate.vmutcconfirm,
        text: cssmTranslate.vmutcconfirm2,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: cssmTranslate.vmutccancel,
        confirmButtonText: cssmTranslate.vmutcyesdelete,

    }).then((result) => {
        if (result.value) {
            var id_block = jQuery('#' + what).attr('data-parent');
            var widget = jQuery('#' + what).attr('data-whatclass');
            jQuery('div.ui-dialog-content').dialog('close');
            jQuery("#editorToolBar_" + what).remove();
        /*    if (typeof (scrollMagicScene[what]) != 'undefined') {
                scrollMagicScene[what].removeIndicators().destroy(true);
            }*/
            jQuery('.gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end').remove();
            
            if (widget == 'imageTextWidget') {
                jQuery('#' + what + ' + .vmutc_imageTextWidgetTextEditor').remove();
            }
            if (widget == 'bxsliderWidget') {
                jQuery('#' + what).closest('.bx-wrapper').remove();
            }
            jQuery('#' + what).remove();
            jQuery('*').removeClass('vmutc-selected vmutc-elementOver');
            var elementToSave = document.getElementById(id_block);
            var clone = elementToSave.cloneNode(true);
            var admin_clone = clone;
            jQuery(admin_clone).css('transform', '');
            jQuery(admin_clone).find('.grid-stack-item').css('transform', '');

            jQuery(admin_clone).removeClass(function (index, className) {
                return (className.match(/(^|\s)grid-stack-instance-\S+/g) || []).join(' ');
            });

            jQuery(admin_clone).removeClass('gridstack-editing');
            jQuery(admin_clone).attr('data-parent','')
            var front_clone = admin_clone;
            var admin_content = admin_clone.outerHTML;
            jQuery(front_clone).find('.gridstask-toolbar').remove();
            jQuery(front_clone).find('.gridstack-column-toolbar').remove();
            jQuery(front_clone).find('.editorToolBar').remove();
            var front_content = front_clone.outerHTML;
            var values = {
                admin_content: admin_content,
                front_content: front_content,
                id_theme: jQuery('#cssm_id_theme').val(),
                security: cssm_front_ajax_object.security,
                id_block: id_block,
                parent: jQuery('#' + id_block).attr('data-parent'),
                where: jQuery('#' + id_block).attr('data-where'),
                what: jQuery('#' + id_block).attr('data-what'),
                whatClass: jQuery('#' + id_block).attr('data-whatClass'),
                style: jQuery('#' + id_block).attr('style'),
                action: 'saveBlock',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function () {
                    console.log('Widget removed with success');
                    jQuery('#' + id_block + ' .gridstack-save').hide();
                }
            });
            var allElements = jQuery('#' + id_block + ' .ge-content');
            for (var i = 0; i < allElements.length; i++) {
                if (jQuery(allElements[i]).html() == '') {
                    jQuery('#' + id_block).addClass('gridstack-editing');
                    break;
                }
            }
        } else {
            return false;
        }
    });
}

function copyWidget(what) {
    var timerProgressBar = false;
    var uniqueID = 'vmutc-clone-' + Math.random().toString(36).substr(2, 16);
    var clonedWidget = jQuery('#' + what).closest('.grid-stack-item-content').clone(true);
    jQuery(clonedWidget).find('.editorToolBar').attr('id', 'editorToolBar_' + uniqueID).attr('data-element', uniqueID);
    jQuery(clonedWidget).find('.elementClose').attr('id', 'elementClose_' + uniqueID).attr('data-element', uniqueID);
    jQuery(clonedWidget).find('.elementCopy').attr('id', 'elementCopy_' + uniqueID).attr('data-element', uniqueID);
    jQuery(clonedWidget).find('.elementEdit').attr('id', 'elementEdit_' + uniqueID).attr('data-element', uniqueID);
    jQuery(clonedWidget).find('.gridstackWidget').attr('id', uniqueID);
    localStorage.setItem('clonedWidget', jQuery(clonedWidget).html());

    Swal.fire({
        title: cssmTranslate.vmutcwidgetcloned,
        html: '',
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    });
}

function addWidgetButton(name, buttonID, icon, displayedName, type) {
    if(type!='pro'){
    var table_basic = document.getElementById("vmutc_openWidgets_table_basic");
    var lastRowIndex = table_basic.rows.length - 1;
    var lastCellIndex = table_basic.rows[lastRowIndex].cells.length;
    if (lastCellIndex == 4) {
        var row = table_basic.insertRow();
        var cell = row.insertCell(0)
        cell.innerHTML = '<div id="' + buttonID + '" data-width="600" data-rel="' + name + 'Widget" class="vmutc-box-span-great vmutc-block-button vmutc-stop-propagation openwidget"><div class="' + icon + ' widgetIcon"></div><div class="widgetName">' + displayedName + '</div><i class="fas fa-spinner fa-spin"></i></div>';
    } else {
        var row = table_basic.rows[lastRowIndex];
        var cell = row.insertCell();
        cell.innerHTML = '<div id="' + buttonID + '" data-width="600" data-rel="' + name + 'Widget" class="vmutc-box-span-great vmutc-block-button vmutc-stop-propagation openwidget"><div class="' + icon + ' widgetIcon"></div><div class="widgetName">' + displayedName + '</div><i class="fas fa-spinner fa-spin"></i></div>';
    }
}
else{
    var table_pro = document.getElementById("vmutc_openWidgets_table_pro");
    var lastRowIndex = table_pro.rows.length - 1;
    var lastCellIndex = table_pro.rows[lastRowIndex].cells.length;
    if (lastCellIndex == 4) {
        var row = table_pro.insertRow();
        var cell = row.insertCell(0)
        cell.innerHTML = '<div id="' + buttonID + '" data-width="600" data-rel="' + name + 'Widget" class="vmutc-box-span-great vmutc-block-button vmutc-stop-propagation openwidget"><div class="' + icon + ' widgetIcon"></div><div class="widgetName">' + displayedName + '</div><i class="fas fa-spinner fa-spin"></i></div>';
    } else {
        var row = table_pro.rows[lastRowIndex];
        var cell = row.insertCell();
        cell.innerHTML = '<div id="' + buttonID + '" data-width="600" data-rel="' + name + 'Widget" class="vmutc-box-span-great vmutc-block-button vmutc-stop-propagation openwidget"><div class="' + icon + ' widgetIcon"></div><div class="widgetName">' + displayedName + '</div><i class="fas fa-spinner fa-spin"></i></div>';
    }
}
}
     
function updateSectionPsModule(id_block) {
    Swal.close();
    jQuery('*').removeClass('vmutc-selected vmutc-elementOver');
          
    var elementToSave = document.getElementById(id_block);
    var clone = elementToSave.cloneNode(true);
    var admin_clone = clone;
    jQuery(admin_clone).css('transform','');
    jQuery(admin_clone).find('.grid-stack-item').css('transform','');           
    jQuery(admin_clone).removeClass(function (index, className) {
        return (className.match(/(^|\s)grid-stack-instance-\S+/g) || []).join(' ');
    });
    
    jQuery(admin_clone).removeClass('gridstack-editing');
    jQuery(admin_clone).attr('data-parent','')
    var front_clone = admin_clone;
    var admin_content = admin_clone.outerHTML;
    jQuery(front_clone).find('.gridstask-toolbar').remove();
    jQuery(front_clone).find('.gridstack-column-toolbar').remove();
    jQuery(front_clone).find('.editorToolBar').remove();
    var front_content = front_clone.outerHTML;
    var values = {
        admin_content: admin_content,
        front_content: front_content,
              id_theme: jQuery('#cssm_id_theme').val(),
              security: cssm_front_ajax_object.security,
                id_block: id_block,
                parent: jQuery('#' + id_block).attr('data-parent'),
                where: jQuery('#' + id_block).attr('data-where'),
                what: jQuery('#' + id_block).attr('data-what'),
                whatClass: jQuery('#' + id_block).attr('data-whatClass'),
                style: jQuery('#' + id_block).attr('style'),
                action: 'saveBlock',
            };
            jQuery.ajax({
                type: "POST",
                url: cssm_front_ajax_object.ajaxurl,
                data: values,
                success: function (id) {
                    console.log('Section updated with success');
                    jQuery('#elementClose_' + id_block).attr('data-index', id);
                  jQuery('#'+id_block+' .gridstack-save').hide();
                }
            });
        }


      