<?php
if (!defined('CSSM_VERSION')) {
    die('-1');
}

require_once CSSM_PLUGIN_DIR_PATH . 'lib/imgallery.php';
require_once CSSM_PLUGIN_DIR_PATH . 'lib/videogallery.php';
require_once CSSM_PLUGIN_DIR_PATH . 'lib/audiogallery.php';
require_once CSSM_PLUGIN_DIR_PATH . 'lib/svggallery.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/data/AttributeInterface.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/data/TagInterface.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/data/AllowedAttributes.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/data/AllowedTags.php';
require_once CSSM_PLUGIN_DIR_PATH . 'vendor/enshrined/svg-sanitize/src/Sanitizer.php';
require_once CSSM_PLUGIN_DIR_PATH . 'lib/csscrush/CssCrush.php';
        
use enshrined\svgSanitize\Sanitizer;

class cssmAdminAjax
{
    public function __construct()
    {
        // admin
        add_action('wp_ajax_updatename', array($this, 'cssm_updatename'));
        add_action('wp_ajax_getip', array($this, 'cssm_getip'));
        add_action('wp_ajax_saveallsettings', array($this, 'cssm_saveallsettings'));
        add_action('wp_ajax_getallsettings', array($this, 'cssm_getallsettings'));
        add_action('wp_ajax_deletetheme', array($this, 'cssm_deletetheme'));

        // front
        add_action('wp_ajax_getCss', array($this, 'cssm_getCss'));
        add_action('wp_ajax_saveBlock', array($this, 'cssm_saveBlock'));
        add_action('wp_ajax_dupplicateBlockLang', array($this, 'cssm_dupplicateBlockLang'));
        add_action('wp_ajax_removeBlock', array($this, 'cssm_removeBlock'));
        add_action('wp_ajax_deleteGalleryImage', array($this, 'cssm_deleteGalleryImage'));
        add_action('wp_ajax_deleteGalleryVideo', array($this, 'cssm_deleteGalleryVideo'));
        add_action('wp_ajax_deleteGalleryAudio', array($this, 'cssm_deleteGalleryAudio'));
        add_action('wp_ajax_deleteGallerySvg', array($this, 'cssm_deleteGallerySvg'));
        add_action('wp_ajax_deleteAll', array($this, 'cssm_deleteAll'));
        add_action('wp_ajax_publish', array($this, 'cssm_publish'));
        add_action('wp_ajax_chooseBackgroundImage', array($this, 'cssm_chooseBackgroundImage'));
        add_action('wp_ajax_chooseBackgroundVideo', array($this, 'cssm_chooseBackgroundVideo'));
        add_action('wp_ajax_chooseAudio', array($this, 'cssm_chooseAudio'));
        add_action('wp_ajax_chooseSvg', array($this, 'cssm_chooseSvg'));
        add_action('wp_ajax_uploadImage', array($this, 'cssm_uploadImage'));
        add_action('wp_ajax_uploadVideo', array($this, 'cssm_uploadVideo'));
        add_action('wp_ajax_uploadAudio', array($this, 'cssm_uploadAudio'));
        add_action('wp_ajax_uploadSvg', array($this, 'cssm_uploadSvg'));
        add_action('wp_ajax_copySvgCode', array($this, 'cssm_copySvgCode'));
        add_action('wp_ajax_openHelp', array($this, 'cssm_openHelp'));
        add_action('wp_ajax_cleanCss', array($this, 'cssm_cleanCss'));
        add_action('wp_ajax_getActiveHistoric', array($this, 'cssm_getActiveHistoric'));
        add_action('wp_ajax_cleanCssComments', array($this, 'cssm_cleanCssComments'));
        add_action('wp_ajax_loadCss', array($this, 'cssm_loadCss'));
        add_action('wp_ajax_loadJs', array($this, 'cssm_loadJs'));
        add_action('wp_ajax_deleteHistory', array($this, 'cssm_deleteHistory'));
        add_action('wp_ajax_deleteCss', array($this, 'cssm_deleteCss'));
        add_action('wp_ajax_saveCss', array($this, 'cssm_saveCss'));
        add_action('wp_ajax_saveJs', array($this, 'cssm_saveJs'));
        add_action('wp_ajax_updateCss', array($this, 'cssm_updateCss'));
        add_action('wp_ajax_deleteVideo', array($this, 'cssm_deleteVideo'));
        add_action('wp_ajax_deleteAudio', array($this, 'cssm_deleteAudio'));
        add_action('wp_ajax_deleteSvg', array($this, 'cssm_deleteSvg'));
    }

    // admin
    public function cssm_updatename()
    {
        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $id_shop = get_current_blog_id();
            $vm_ultimateconfigurator_name = sanitize_text_field(Tools::getValue('cssm_theme_name'));
            if ($vm_ultimateconfigurator_name != "") {
                global $wpdb;
                $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
                $wpdb->insert($table_name, array('id_shop' => $id_shop, 'name' => $vm_ultimateconfigurator_name, 'display' => 0, 'active' => 0, 'ip' => ''));
                $lastid = $wpdb->insert_id;
                echo $lastid;
            }
            wp_die();
        }
    }

    public function cssm_getip()
    {
        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $ip = '';
            $ip = Tools::getRemoteAddr();
            echo $ip;
            wp_die();
        }

    }

    public function cssm_saveallsettings()
    {
        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $id_shop = get_current_blog_id();
            $select_id = (int) (Tools::getValue('cssm_select_id'));
            $display = (int) (Tools::getValue('cssm_display_stylizer'));
            $active = (int) (Tools::getValue('cssm_activate_stylizer'));
            $ip = sanitize_text_field(Tools::getValue('cssm_allowed_ips'));
            if ($select_id != "" && $select_id != '0') {
                global $wpdb;
                $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
                $wpdb->update($table_name, array('active' => 0), array('id_shop' => $id_shop));
                $wpdb->update($table_name, array('id_shop' => $id_shop, 'display' => $display, 'active' => $active, 'ip' => $ip), array('id' => $select_id));
            }
            wp_die();
        }
    }

    public function cssm_getallsettings()
    {
        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $id_shop = get_current_blog_id();
            $select_id = (int) Tools::getValue('cssm_select_id');
            if ($select_id != "" && $select_id != '0') {
                global $wpdb;
                $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
                $selected_row = $wpdb->get_row('SELECT * FROM ' . $table_name . ' WHERE id=' . $select_id);
                echo json_encode($selected_row);
            }
            wp_die();
        }
    }

    public function cssm_deletetheme()
    {
        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $id_shop = get_current_blog_id();
            $select_id = (int) Tools::getValue('cssm_select_id');
            if ($select_id != "" && $select_id != '0') {
                global $wpdb;
                $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
                $wpdb->delete($table_name,  array( 'id' => (int) $select_id ));                
            }
            wp_die();
        }
    }


    // front
   
    public function cssm_getCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();

        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $datas = [];
            $table_name_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
            $css = $wpdb->get_row('SELECT `css`, `animation` FROM `' . $table_name_css . '` WHERE `id_theme` = ' . (int) Tools::getValue('id_theme') . ' AND `active`= 1');

            if (isset($css)) {
                $datas['css'] = $css->css;
                $datas['animations'] = $css->animation;
                echo json_encode($datas);
            }
            wp_die();
        }
    }
    
    public function cssm_saveBlock()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            kses_remove_filters();
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $id_theme = Tools::getValue('id_theme');
            $admin_content = Tools::getValue('admin_content');
            $front_content = Tools::getValue('front_content');
            $parent = sanitize_text_field($_POST['parent']);
            $where = Tools::getValue('where');
            $what = Tools::getValue('what');
            $whatClass = Tools::getValue('whatClass');
            $style = Tools::getValue('style');
            $id_block = Tools::getValue('id_block');
            $id_lang = get_locale();
            $lang_iso = explode('_', $id_lang);
            $lang_iso = $lang_iso[0];
         
            $publish = Tools::getValue('publish');
     
          $admin_content = stripslashes_deep($admin_content);
         $front_content = stripslashes_deep($front_content);
      
            $selected_block = $wpdb->get_row('SELECT * FROM `' . $table_name . '` WHERE `id_theme` = ' . (int) $id_theme . ' AND `id_block` = "' . sanitize_text_field($id_block) . '" AND `id_lang` ="' . sanitize_text_field($lang_iso) . '"');
            if ($selected_block) {
               if(!$publish){
                  $publish = $selected_block->publish;
               }
                $wpdb->update(
                    $table_name, array(
                        'what' => sanitize_text_field($what),
                        'whatClass' => sanitize_text_field($whatClass),
                        'parent' => stripslashes_deep($parent),
                        'where' => sanitize_text_field($where),
                        'style' => sanitize_text_field($style),
                        'admin_block' => $admin_content,
                        'front_block' => $front_content,
                        'publish' => (int) $publish,
                        'date_upd' => date('Y-m-d H:i:s'),
                    ),
                    array('id_theme' => (int) $id_theme, 'id_block' => sanitize_text_field($id_block), 'id_lang' => sanitize_text_field($lang_iso)),
                    array('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')
                );
            } else {
                $wpdb->insert($table_name, array(
                    'id_theme' => (int) ($id_theme),
                    'id_block' => sanitize_text_field($id_block),
                    'what' => sanitize_text_field($what),
                    'whatClass' => sanitize_text_field($whatClass),
                    'id_lang' => sanitize_text_field($lang_iso),
                    'parent' => stripslashes_deep($parent),
                    'where' => sanitize_text_field($where),
                    'style' => $style,
                    'admin_block' => $admin_content,
                    'front_block' => $front_content,
                    'publish' => 0,
                    'date_add' => date('Y-m-d H:i:s'),
                ), '%s'
                );

            }
            $sql = 'SELECT id FROM ' . $table_name . ' WHERE id_theme = ' . (int) $id_theme . ' AND id_block="' . sanitize_text_field($id_block) . '" AND id_lang="' . sanitize_text_field($lang_iso) . '"';
            $id = $wpdb->get_var($sql);
            echo $id;
            kses_init_filters();
            wp_die();
        }
    }
    // a voir
    public function cssm_dupplicateBlockLang()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();

        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            kses_remove_filters();
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $id_theme = Tools::getValue('id_theme');
            $admin_content = Tools::getValue('admin_content');
            $front_content = Tools::getValue('front_content');
            $parent = sanitize_text_field($_POST['parent']);
            $where = Tools::getValue('where');
            $what = Tools::getValue('what');
            $whatClass = Tools::getValue('whatClass');
            $style = Tools::getValue('style');
            $id_block = Tools::getValue('id_block');
            $allLanguages = explode(',', Tools::getValue('allLanguages'));
              //   $admin_content = wp_kses_post($admin_content);
         //   $front_content = wp_kses_post($front_content);
         $admin_content = stripslashes_deep($admin_content);
         $front_content = stripslashes_deep($front_content);

            foreach ($allLanguages as $id_lang) {
                $lang_iso = explode('_', $id_lang);
                $lang_iso = $lang_iso[0];
             
                $selected_block = $wpdb->get_row('SELECT * FROM ' . $table_name . '" WHERE `id_theme` = ' . (int) $id_theme . ' AND `id_block` = "' . sanitize_text_field($id_block) . '" AND `id_lang` ="' . sanitize_text_field($lang_iso) . '"');
                if ($selected_block) {
                    $wpdb->update(
                        $table_name, array(
                            'what' => sanitize_text_field($what),
                            'whatClass' => sanitize_text_field($whatClass),
                            'parent' => stripslashes_deep($parent),
                            'where' => sanitize_text_field($where),
                            'style' => $style,
                            'admin_block' => $admin_content,
                            'front_block' => $front_content,
                            'date_upd' => date('Y-m-d H:i:s'),
                        ), 'id_theme = ' . (int) $id_theme . ' AND id_block="' . sanitize_text_field($id_block) . '" AND id_lang=' . sanitize_text_field($lang_iso)
                    );
                } else {
                    $wpdb->insert(
                        $table_name, array(
                            'id_theme' => (int) ($id_theme),
                            'id_block' => sanitize_text_field($id_block),
                            'what' => sanitize_text_field($what),
                            'whatClass' => sanitize_text_field($whatClass),
                            'parent' => stripslashes_deep($parent),
                            'where' => sanitize_text_field($where),
                            'style' => $style,
                            'id_lang' => sanitize_text_field($lang_iso),
                            'admin_block' => $admin_content,
                            'front_block' => $front_content,
                            'date_add' => date('Y-m-d H:i:s'),
                        )
                    );
                }
            }
            kses_init_filters();
            wp_die( );
        }
    }
    // ok
    public function cssm_updateCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();

        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {

            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
            $table_name_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
            $id_shop = get_current_blog_id();

            $themename = $wpdb->get_row('SELECT `id`, `name`, `ip`
                      FROM `' . $table_name . '`
                      WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1', ARRAY_A);
            $selected_theme = $wpdb->get_row('SELECT *
                      FROM `' . $table_name_css . '`
                      WHERE `id_theme` = ' . (int) $themename['id'] . ' AND `active` = 1', ARRAY_A);
            $filename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . basename($themename['name']) . '.css';
            $filename_mobile = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . basename($themename['name']) . '.css';
            $filename_tablet = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . basename($themename['name']) . '.css';
            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . basename($themename['name']) . '.css';
            $publishfilename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmytheme' . $id_shop . '_' . basename($themename['name']) . '.css';
            $filenametemp = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmythemetemp' . $id_shop . '_' . basename($themename['name']) . '.css';
            $defaultfonts = array("Arial",
                "Comic Sans MS",
                "Courrier",
                "Courrier New",
                "Georgia",
                "Helvetica",
                "Impact",
                "Lucida Console",
                "Lucida Sans Unicode",
                "Palatino Linotype",
                "Tahoma",
                "Times",
                "Times New Roman",
                "Trebuchet MS",
                "Verdana",              
                "---");
          
            $string_font = $selected_theme['fonts'];
            $vmutc_fonts = explode("|", $string_font);
            $menu_css = $selected_theme['css'];
            $menu_animation = $selected_theme['animation'];
            $element_css = array();
            $element_animation = array();
            if (isset($menu_css)) {
                $element_css = json_decode($menu_css, true);
            }
            if (isset($menu_animation)) {
                $element_animation = json_decode($menu_animation, true);
            }
            $elementselected = sanitize_text_field($_POST['vmutc-element-selected']);
            $screen_mode = (string) Tools::getValue('screen_mode');
            if (!$screen_mode || $screen_mode == "") {
                $screen_mode = "vmutc_desktop_mode";
            }
            if ($screen_mode == "vmutc_mobile_mode") {
                $filename = $filename_mobile;
            }
            if ($screen_mode == "vmutc_tablet_mode") {
                $filename = $filename_tablet;
            }
            @unlink($filename);
            $fp = fopen($filename, 'wb');
            fclose($fp);
            if ($elementselected != "") {
                $vmutc_border_left_top_input = (Tools::getValue('vmutc_border_left_top_input_important'));
                $vmutc_border_right_top_input = (Tools::getValue('vmutc_border_right_top_input_important'));
                $vmutc_border_right_bottom_input = (Tools::getValue('vmutc_border_right_bottom_input_important'));
                $vmutc_border_left_bottom_input = (Tools::getValue('vmutc_border_left_bottom_input_important'));
                if (Tools::getValue('vmutc_border_left_top_input') != '') {
                    $element_css[$elementselected]['border-top-left-radius: '][$screen_mode] = Tools::getValue('vmutc_border_left_top_input') . "px" . $vmutc_border_left_top_input . "";
                }
                if (Tools::getValue('vmutc_border_right_top_input') != '') {
                    $element_css[$elementselected]['border-top-right-radius: '][$screen_mode] = Tools::getValue('vmutc_border_right_top_input') . "px" . $vmutc_border_right_top_input . "";
                }
                if (Tools::getValue('vmutc_border_right_bottom_input') != '') {
                    $element_css[$elementselected]['border-bottom-right-radius: '][$screen_mode] = Tools::getValue('vmutc_border_right_bottom_input') . "px" . $vmutc_border_right_bottom_input . "";
                }
                if (Tools::getValue('vmutc_border_left_bottom_input') != '') {
                    $element_css[$elementselected]['border-bottom-left-radius: '][$screen_mode] = Tools::getValue('vmutc_border_left_bottom_input') . "px" . $vmutc_border_left_bottom_input . "";
                }
                $vmutc_border_width_left_input = (Tools::getValue('vmutc_border_width_left_input_important'));
                $vmutc_border_width_top_input = (Tools::getValue('vmutc_border_width_top_input_important'));
                $vmutc_border_width_right_input = (Tools::getValue('vmutc_border_width_right_input_important'));
                $vmutc_border_width_bottom_input = (Tools::getValue('vmutc_border_width_bottom_input_important'));
                if (Tools::getValue('vmutc_border_width_left_input') != '') {
                    $element_css[$elementselected]['border-left-width: '][$screen_mode] = Tools::getValue('vmutc_border_width_left_input') . "px" . $vmutc_border_width_left_input . "";
                }
                if (Tools::getValue('vmutc_border_width_top_input') != '') {
                    $element_css[$elementselected]['border-top-width: '][$screen_mode] = Tools::getValue('vmutc_border_width_top_input') . "px" . $vmutc_border_width_top_input . "";
                }
                if (Tools::getValue('vmutc_border_width_right_input') != '') {
                    $element_css[$elementselected]['border-right-width: '][$screen_mode] = Tools::getValue('vmutc_border_width_right_input') . "px" . $vmutc_border_width_right_input . "";
                }
                if (Tools::getValue('vmutc_border_width_bottom_input') != '') {
                    $element_css[$elementselected]['border-bottom-width: '][$screen_mode] = Tools::getValue('vmutc_border_width_bottom_input') . "px" . $vmutc_border_width_bottom_input . "";
                }
                if (Tools::getValue('vmutc_border_style_left_input') != '' && Tools::getValue('vmutc_border_style_left_input') != 'None') {
                    $element_css[$elementselected]['border-left-style: '][$screen_mode] = Tools::getValue('vmutc_border_style_left_input') . $vmutc_border_width_left_input . "";
                }
                if (Tools::getValue('vmutc_border_style_top_input') != '' && Tools::getValue('vmutc_border_style_top_input') != 'None') {
                    $element_css[$elementselected]['border-top-style: '][$screen_mode] = Tools::getValue('vmutc_border_style_top_input') . $vmutc_border_width_top_input . "";
                }
                if (Tools::getValue('vmutc_border_style_right_input') != '' && Tools::getValue('vmutc_border_style_right_input') != 'None') {
                    $element_css[$elementselected]['border-right-style: '][$screen_mode] = Tools::getValue('vmutc_border_style_right_input') . $vmutc_border_width_right_input . "";
                }
                if (Tools::getValue('vmutc_border_style_bottom_input') != '' && Tools::getValue('vmutc_border_style_bottom_input') != 'None') {
                    $element_css[$elementselected]['border-bottom-style: '][$screen_mode] = Tools::getValue('vmutc_border_style_bottom_input') . $vmutc_border_width_bottom_input . "";
                }
                $vmutc_borders_color = (Tools::getValue('vmutc_borders_color_important'));
                $vmutc_border_left_color = (Tools::getValue('vmutc_border_left_color_important'));
                $vmutc_border_top_color = (Tools::getValue('vmutc_border_top_color_important'));
                $vmutc_border_right_color = (Tools::getValue('vmutc_border_right_color_important'));
                $vmutc_border_bottom_color = (Tools::getValue('vmutc_border_bottom_color_important'));
                if (Tools::getValue('vmutc_borders_color_real') != '') {
                    $element_css[$elementselected]['border-color: '][$screen_mode] = Tools::getValue('vmutc_borders_color_real') . $vmutc_borders_color . "";
                }
                if (Tools::getValue('vmutc_border_left_color_real') != '') {
                    $element_css[$elementselected]['border-left-color: '][$screen_mode] = Tools::getValue('vmutc_border_left_color_real') . $vmutc_border_left_color . "";
                }
                if (Tools::getValue('vmutc_border_top_color_real') != '') {
                    $element_css[$elementselected]['border-top-color: '][$screen_mode] = Tools::getValue('vmutc_border_top_color_real') . $vmutc_border_top_color . "";
                }
                if (Tools::getValue('vmutc_border_right_color_real') != '') {
                    $element_css[$elementselected]['border-right-color: '][$screen_mode] = Tools::getValue('vmutc_border_right_color_real') . $vmutc_border_right_color . "";
                }
                if (Tools::getValue('vmutc_border_bottom_color_real') != '') {
                    $element_css[$elementselected]['border-bottom-color: '][$screen_mode] = Tools::getValue('vmutc_border_bottom_color_real') . $vmutc_border_bottom_color . "";
                }
                // Texts
                $vmutc_text_color = (Tools::getValue('vmutc_text_color_important'));
                $vmutc_text_color_hover = (Tools::getValue('vmutc_text_color_hover_important'));
                $vmutc_text_font = (Tools::getValue('vmutc_text_font_important'));
                $vmutc_state = Tools::getValue('vmutcstate');
                if (Tools::getValue('vmutc_text_color_real') != '') {
                    $element_css[$elementselected]['color: '][$screen_mode] = Tools::getValue('vmutc_text_color_real') . $vmutc_text_color . "";
                }
                if ($vmutc_state == 'nostate' && Tools::getValue('vmutc_text_color_hover_real') != '') {
                    $element_css[$elementselected . ":hover"]['color: '][$screen_mode] = Tools::getValue('vmutc_text_color_hover_real') . $vmutc_text_color_hover . "";
                }
                if (Tools::getValue('vmutc_origintextGradientSelect') != '' && Tools::getValue('vmutc_origintextGradientPicker_real') != '') {
                    $element_css[$elementselected]['gradienttextused'][$screen_mode] = Tools::getValue('vmutc_origintextGradientSelect');
                    $element_css[$elementselected]['gradienttexthandlers'][$screen_mode] = Tools::getValue('vmutc_origintextGradientPicker_handlers');
                    $element_css[$elementselected]['gradienttext'][$screen_mode] = Tools::getValue('vmutc_origintextGradientPicker_real');
                    $element_css[$elementselected]['gradienttextangle'][$screen_mode] = Tools::getValue('vmutc_origintextgradientAngle');
                    $element_css[$elementselected]['gradienttextposition'][$screen_mode] = Tools::getValue('vmutc_origintextgradientPosition');
                    $element_css[$elementselected]['gradienttexttype'][$screen_mode] = Tools::getValue('vmutc_origintextgradientType');
                }
                if (Tools::getValue('vmutc_text_font') != '') {
                    $element_css[$elementselected]['font-family: '][$screen_mode] = Tools::getValue('vmutc_text_font') . $vmutc_text_font . "";
                }
                $vmutc_text_size_input = (Tools::getValue('vmutc_text_size_input_important'));
                $vmutc_text_weight = (Tools::getValue('vmutc_text_weight_important'));
                $vmutc_text_style = (Tools::getValue('vmutc_text_style_important'));
                $vmutc_text_shadow = (Tools::getValue('vmutc_text_shadow_important'));
                $vmutc_text_lineheight_input = (Tools::getValue('vmutc_text_lineheight_input_important'));
                $vmutc_text_transform = (Tools::getValue('vmutc_text_transform_important'));
                $vmutc_text_align = (Tools::getValue('vmutc_text_align_important'));
                $vmutc_text_letter_spacing_input = (Tools::getValue('vmutc_text_letter_spacing_input_important'));
                $vmutc_text_word_spacing_input = (Tools::getValue('vmutc_text_word_spacing_input_important'));
           
                if (Tools::getValue('vmutc_text_size_input') == "0") {
                    $fontsize = "";
                } else {
                    $fontsize = Tools::getValue('vmutc_text_size_input');
                }
                if ($fontsize != "") {
                    $element_css[$elementselected]['font-size: '][$screen_mode] = $fontsize . "px" . $vmutc_text_size_input . "";
                }
                if (Tools::getValue('vmutc_text_lineheight_input') == "0") {
                    $lineheight = "";
                } else {
                    $lineheight = Tools::getValue('vmutc_text_lineheight_input');
                }
                if ($lineheight != "") {
                    $element_css[$elementselected]['line-height: '][$screen_mode] = $lineheight . $vmutc_text_lineheight_input . "";
                }
                if (Tools::getValue('vmutc_text_weight') != '') {
                    $element_css[$elementselected]['font-weight: '][$screen_mode] = Tools::getValue('vmutc_text_weight') . $vmutc_text_weight . "";
                }
                if (Tools::getValue('vmutc_text_style') != '') {
                    $element_css[$elementselected]['font-style: '][$screen_mode] = Tools::getValue('vmutc_text_style') . $vmutc_text_style . "";
                }
                
                if (Tools::getValue('vmutc_text_transform') != '') {
                    $element_css[$elementselected]['text-transform: '][$screen_mode] = Tools::getValue('vmutc_text_transform') . $vmutc_text_transform . "";
                }
                if (Tools::getValue('vmutc_text_align') != '') {
                    $element_css[$elementselected]['text-align: '][$screen_mode] = Tools::getValue('vmutc_text_align') . $vmutc_text_align . "";
                }
                if (Tools::getValue('vmutc_text_letter_spacing_input') == "0" || Tools::getValue('vmutc_text_letter_spacing_input') == "") {
                    $letterspacing = "";
                    $element_css[$elementselected]['letter-spacing: '][$screen_mode] = 'inherit' . $vmutc_text_letter_spacing_input . "";
         
                } else {
                    $letterspacing = Tools::getValue('vmutc_text_letter_spacing_input');
                }
                if ($letterspacing != "") {
                    $element_css[$elementselected]['letter-spacing: '][$screen_mode] = $letterspacing .'px' . $vmutc_text_letter_spacing_input . "";
                }

                if (Tools::getValue('vmutc_text_word_spacing_input') == "0" || Tools::getValue('vmutc_text_word_spacing_input') == "") {
                    $wordspacing = "";
                    $element_css[$elementselected]['word-spacing: '][$screen_mode] = 'inherit' . $vmutc_text_word_spacing_input . "";
         
                } else {
                    $wordspacing = Tools::getValue('vmutc_text_word_spacing_input');
                }
                if ($wordspacing != "") {
                    $element_css[$elementselected]['word-spacing: '][$screen_mode] = $wordspacing .'px' . $vmutc_text_word_spacing_input . "";
                }
                $verticalShadow = Tools::getValue('vmutc_text_shadow_V_input');
                $horizontalShadow = Tools::getValue('vmutc_text_shadow_H_input');
                $blurShadow = Tools::getValue('vmutc_text_shadow_Blur_input');
                $colorShadow = Tools::getValue('vmutc_text_shadow_color_real');
                $element_css[$elementselected]['text_shadow_H'][$screen_mode] = $horizontalShadow;
                $element_css[$elementselected]['text_shadow_V'][$screen_mode] = $verticalShadow;
                $element_css[$elementselected]['text_shadow_Blur'][$screen_mode] = $blurShadow;
                $element_css[$elementselected]['text_shadow_color'][$screen_mode] = $colorShadow;
                if ($verticalShadow == '' || $horizontalShadow == '' || $blurShadow == '') {
                    $stringfontshadow = 'none';
                } else {
                    $stringfontshadow = $element_css[$elementselected]['text_shadow_H'][$screen_mode] . "px " . $element_css[$elementselected]['text_shadow_V'][$screen_mode] . "px " . $element_css[$elementselected]['text_shadow_Blur'][$screen_mode] . "px " . $element_css[$elementselected]['text_shadow_color'][$screen_mode];
                }
                $element_css[$elementselected]['text-shadow: '][$screen_mode] = $stringfontshadow . $vmutc_text_shadow . "";
                // Margins
                $vmutc_text_margin_left_input = (Tools::getValue('vmutc_text_margin_left_input_important'));
                $vmutc_text_margin_top_input = (Tools::getValue('vmutc_text_margin_top_input_important'));
                $vmutc_text_margin_right_input = (Tools::getValue('vmutc_text_margin_right_input_important'));
                $vmutc_text_margin_bottom_input = (Tools::getValue('vmutc_text_margin_bottom_input_important'));
                if (Tools::getValue('vmutc_text_margin_left_input') != '') {
                    $element_css[$elementselected]['margin-left: '][$screen_mode] = Tools::getValue('vmutc_text_margin_left_input') . "px" . $vmutc_text_margin_left_input . "";
                }
                if (Tools::getValue('vmutc_text_margin_top_input') != '') {
                    $element_css[$elementselected]['margin-top: '][$screen_mode] = Tools::getValue('vmutc_text_margin_top_input') . "px" . $vmutc_text_margin_top_input . "";
                }
                if (Tools::getValue('vmutc_text_margin_right_input') != '') {
                    $element_css[$elementselected]['margin-right: '][$screen_mode] = Tools::getValue('vmutc_text_margin_right_input') . "px" . $vmutc_text_margin_right_input . "";
                }
                if (Tools::getValue('vmutc_text_margin_bottom_input') != '') {
                    $element_css[$elementselected]['margin-bottom: '][$screen_mode] = Tools::getValue('vmutc_text_margin_bottom_input') . "px" . $vmutc_text_margin_bottom_input . "";
                }
                // Paddings
                $vmutc_text_padding_left_input = (Tools::getValue('vmutc_text_padding_left_input_important'));
                $vmutc_text_padding_top_input = (Tools::getValue('vmutc_text_padding_top_input_important'));
                $vmutc_text_padding_right_input = (Tools::getValue('vmutc_text_padding_right_input_important'));
                $vmutc_text_padding_bottom_input = (Tools::getValue('vmutc_text_padding_bottom_input_important'));
                if (Tools::getValue('vmutc_text_padding_left_input') != '') {
                    $element_css[$elementselected]['padding-left: '][$screen_mode] = Tools::getValue('vmutc_text_padding_left_input') . "px" . $vmutc_text_padding_left_input . "";
                }
                if (Tools::getValue('vmutc_text_padding_top_input') != '') {
                    $element_css[$elementselected]['padding-top: '][$screen_mode] = Tools::getValue('vmutc_text_padding_top_input') . "px" . $vmutc_text_padding_top_input . "";
                }
                if (Tools::getValue('vmutc_text_padding_right_input') != '') {
                    $element_css[$elementselected]['padding-right: '][$screen_mode] = Tools::getValue('vmutc_text_padding_right_input') . "px" . $vmutc_text_padding_right_input . "";
                }
                if (Tools::getValue('vmutc_text_padding_bottom_input') != '') {
                    $element_css[$elementselected]['padding-bottom: '][$screen_mode] = Tools::getValue('vmutc_text_padding_bottom_input') . "px" . $vmutc_text_padding_bottom_input . "";
                }
                $width_unit = Tools::getValue('vmutc_width_pixels');
                if ($width_unit == "") {
                    $width_unit = "%";
                }
                if (Tools::getValue('vmutc_width_pixels') != '') {
                    $element_css[$elementselected]['width_unit'][$screen_mode] = Tools::getValue('vmutc_width_pixels');
                }
                $min_width_unit = Tools::getValue('vmutc_min_width_pixels');
                if ($min_width_unit == "") {
                    $min_width_unit = "%";
                }
                if (Tools::getValue('vmutc_min_width_pixels') != '') {
                    $element_css[$elementselected]['min_width_unit'][$screen_mode] = Tools::getValue('vmutc_min_width_pixels');
                }
                $max_width_unit = Tools::getValue('vmutc_max_width_pixels');
                if ($max_width_unit == "") {
                    $max_width_unit = "%";
                }
                if (Tools::getValue('vmutc_max_width_pixels') != '') {
                    $element_css[$elementselected]['max_width_unit'][$screen_mode] = Tools::getValue('vmutc_max_width_pixels');
                }
                $height_unit = Tools::getValue('vmutc_height_pixels');
                if ($height_unit == "") {
                    $height_unit = "%";
                }
                if (Tools::getValue('vmutc_height_pixels') != '') {
                    $element_css[$elementselected]['height_unit'][$screen_mode] = Tools::getValue('vmutc_height_pixels');
                }
                $min_height_unit = Tools::getValue('vmutc_min_height_pixels');
                if ($min_height_unit == "") {
                    $min_height_unit = "%";
                }
                if (Tools::getValue('vmutc_min_height_pixels') != '') {
                    $element_css[$elementselected]['min_height_unit'][$screen_mode] = Tools::getValue('vmutc_min_height_pixels');
                }
                $max_height_unit = Tools::getValue('vmutc_max_height_pixels');
                if ($max_height_unit == "") {
                    $max_height_unit = "%";
                }
                if (Tools::getValue('vmutc_max_height_pixels') != '') {
                    $element_css[$elementselected]['max_height_unit'][$screen_mode] = Tools::getValue('vmutc_max_height_pixels');
                }
                $vmutc_element_width_input = (Tools::getValue('vmutc_element_width_input_important'));
                $vmutc_element_min_width_input = (Tools::getValue('vmutc_element_min_width_input_important'));
                $vmutc_element_max_width_input = (Tools::getValue('vmutc_element_max_width_input_important'));
                $vmutc_element_height_input = (Tools::getValue('vmutc_element_height_input_important'));
                $vmutc_element_min_height_input = (Tools::getValue('vmutc_element_min_height_input_important'));
                $vmutc_element_max_height_input = (Tools::getValue('vmutc_element_max_height_input_important'));
                if (Tools::getValue('vmutc_element_width_input') != '') {
                    $element_css[$elementselected]['width: '][$screen_mode] = Tools::getValue('vmutc_element_width_input') . $width_unit . $vmutc_element_width_input . "";
                }
                if (Tools::getValue('vmutc_element_min_width_input') != '') {
                    $element_css[$elementselected]['min-width: '][$screen_mode] = Tools::getValue('vmutc_element_min_width_input') . $min_width_unit . $vmutc_element_min_width_input . "";
                }
                if (Tools::getValue('vmutc_element_max_width_input') != '') {
                    $element_css[$elementselected]['max-width: '][$screen_mode] = Tools::getValue('vmutc_element_max_width_input') . $max_width_unit . $vmutc_element_max_width_input . "";
                }
                if (Tools::getValue('vmutc_element_height_input') != '') {
                    $element_css[$elementselected]['height: '][$screen_mode] = Tools::getValue('vmutc_element_height_input') . $height_unit . $vmutc_element_height_input . "";
                }
                if (Tools::getValue('vmutc_element_min_height_input') != '') {
                    $element_css[$elementselected]['min-height: '][$screen_mode] = Tools::getValue('vmutc_element_min_height_input') . $min_height_unit . $vmutc_element_min_height_input . "";
                }
                if (Tools::getValue('vmutc_element_max_height_input') != '') {
                    $element_css[$elementselected]['max-height: '][$screen_mode] = Tools::getValue('vmutc_element_max_height_input') . $max_height_unit . $vmutc_element_max_height_input . "";
                }
                // Box Shadow
                $verticalboxShadow = Tools::getValue('vmutc_boxshadow_V_input');
                $horizontalboxShadow = Tools::getValue('vmutc_boxshadow_H_input');
                $blurboxShadow = Tools::getValue('vmutc_boxshadow_Blur_input');
                $spreadboxShadow = Tools::getValue('vmutc_boxshadow_Spread_input');
                $colorboxShadow = Tools::getValue('vmutc_boxshadow_color_real');
                $element_css[$elementselected]['boxshadow_V'][$screen_mode] = $verticalboxShadow;
                $element_css[$elementselected]['boxshadow_H'][$screen_mode] = $horizontalboxShadow;
                $element_css[$elementselected]['boxshadow_Blur'][$screen_mode] = $blurboxShadow;
                $element_css[$elementselected]['boxshadow_Spread'][$screen_mode] = $spreadboxShadow;
                $element_css[$elementselected]['boxshadow_color'][$screen_mode] = $colorboxShadow;
                $vmutc_boxshadow = (Tools::getValue('vmutc_boxshadow_important'));
                if ($verticalboxShadow == '' || $horizontalboxShadow == '' || $blurboxShadow == '' || $spreadboxShadow == '') {
                    $stringboxshadow = 'none';
                } else {
                    $stringboxshadow = $element_css[$elementselected]['boxshadow_H'][$screen_mode] . "px " . $element_css[$elementselected]['boxshadow_V'][$screen_mode] . "px " . $element_css[$elementselected]['boxshadow_Blur'][$screen_mode] . "px " . $element_css[$elementselected]['boxshadow_Spread'][$screen_mode] . "px " . $element_css[$elementselected]['boxshadow_color'][$screen_mode];
                }
                $element_css[$elementselected]['box-shadow: '][$screen_mode] = $stringboxshadow . $vmutc_boxshadow . "";
                // Background
                $vmutc_background_color = (Tools::getValue('vmutc_background_color_important'));
                $vmutc_BackgroundImage_input = (Tools::getValue('vmutc_BackgroundImage_input_important'));
                $vmutcrepeat = (Tools::getValue('vmutcrepeat_important'));
                $vmutcattachment = (Tools::getValue('vmutc_attachment_important'));
                $vmutc_back_size = (Tools::getValue('vmutc_back_size_important'));
                $vmutc_background_left_input = (Tools::getValue('vmutc_background_left_input_important'));
                $vmutc_background_top_input = (Tools::getValue('vmutc_background_top_input_important'));
                $vmutc_background_size_width_input = (Tools::getValue('vmutc_background_size_width_input_important'));
                $vmutc_background_size_height_input = (Tools::getValue('vmutc_background_size_height_input_important'));
                $vmutc_background_pos = '';
                if ($vmutc_background_left_input == "1" || $vmutc_background_top_input == "1") {
                    $vmutc_background_pos = "!important";
                }
                if (Tools::getValue('vmutc_background_color_real') != '') {
                    $element_css[$elementselected]['background-color: '][$screen_mode] = Tools::getValue('vmutc_background_color_real') . $vmutc_background_color . "";
                }
                if ($vmutc_state == 'nostate' && Tools::getValue('vmutc_background_color_hover_real') != '') {
                    $element_css[$elementselected . ":hover"]['background-color: '][$screen_mode] = Tools::getValue('vmutc_background_color_hover_real') . " !important";
                    //     $element_css[$elementselected . ":focus"]['background-color: '][$screen_mode] = Tools::getValue('vmutc_background_color_hover_real') . " !important";
                    $element_css[$elementselected . ":hover"]['background-image: '][$screen_mode] = "None";
                }
                if (Tools::getValue('vmutc_originGradientSelect') != '' && Tools::getValue('vmutc_originGradientPicker_real') != '') {
                    $element_css[$elementselected]['gradientused'][$screen_mode] = Tools::getValue('vmutc_originGradientSelect');
                    $element_css[$elementselected]['gradienthandlers'][$screen_mode] = Tools::getValue('vmutc_originGradientPicker_handlers');
                    $element_css[$elementselected]['gradient'][$screen_mode] = Tools::getValue('vmutc_originGradientPicker_real');
                    $element_css[$elementselected]['gradientangle'][$screen_mode] = Tools::getValue('vmutc_origingradientAngle');
                    $element_css[$elementselected]['gradientposition'][$screen_mode] = Tools::getValue('vmutc_origingradientPosition');
                    $element_css[$elementselected]['gradienttype'][$screen_mode] = Tools::getValue('vmutc_origingradientType');
                }
                $imgname = Tools::getValue('vmutc_BackgroundImage_input');
                if ($imgname == 'noitem') {
                    $imgname = '';
                }
                if ($imgname != '') {
                    $element_css[$elementselected]['background-image: '][$screen_mode] = "url('".CSSM_PLUGIN_URL."assets/img/gallery/" . basename($imgname) . "')" . $vmutc_BackgroundImage_input . "";
                    $element_css[$elementselected]['backgroundImageName'][$screen_mode] = (string) Tools::getValue('vmutc_BackgroundImage_input');
                }
                if (Tools::getValue('vmutcrepeat') != '') {
                    $element_css[$elementselected]['background-repeat: '][$screen_mode] = Tools::getValue('vmutcrepeat') . $vmutcrepeat . "";
                }
                if (Tools::getValue('vmutcattachment') != '') {
                    $element_css[$elementselected]['background-attachment: '][$screen_mode] = Tools::getValue('vmutcattachment') . $vmutcattachment . "";
                }
                if (Tools::getValue('vmutc_back_size') != '') {
                    $element_css[$elementselected]['backgroundSizeText'][$screen_mode] = Tools::getValue('vmutc_back_size') . $vmutc_back_size . "";
                }
                if (Tools::getValue('vmutc_background_size_width_input') != '') {
                    $element_css[$elementselected]['backgroundSizeWidth'][$screen_mode] = Tools::getValue('vmutc_background_size_width_input') . $vmutc_background_size_width_input . "";
                }
                if (Tools::getValue('vmutc_background_size_height_input') != '') {
                    $element_css[$elementselected]['backgroundSizeHeight'][$screen_mode] = Tools::getValue('vmutc_background_size_height_input') . $vmutc_background_size_height_input . "";
                }
                if (Tools::getValue('vmutc_background_size_width_input') == '' && Tools::getValue('vmutc_background_size_height_input') == '' && Tools::getValue('vmutc_back_size') != '') {
                    $element_css[$elementselected]['background-size: '][$screen_mode] = Tools::getValue('vmutc_back_size') . $vmutc_back_size . "";
                }
                if (Tools::getValue('vmutc_background_size_width_input') != '' && Tools::getValue('vmutc_background_size_height_input') != '') {
                    $element_css[$elementselected]['background-size: '][$screen_mode] = $element_css[$elementselected]['backgroundSizeWidth'][$screen_mode] . "% " . $element_css[$elementselected]['backgroundSizeHeight'][$screen_mode] . "%" . $vmutc_background_size_width_input . "";
                }
                if (Tools::getValue('vmutc_background_left_input') != '' && Tools::getValue('vmutc_background_top_input') != '') {
                    $element_css[$elementselected]['background-position: '][$screen_mode] = Tools::getValue('vmutc_background_left_input') . "% " . Tools::getValue('vmutc_background_top_input') . "%" . $vmutc_background_pos . "";
                }
                if (Tools::getValue('vmutc_background_left_input') != '') {
                    $element_css[$elementselected]['backgroundPositionX'][$screen_mode] = Tools::getValue('vmutc_background_left_input') . $vmutc_background_left_input . "";
                }
                if (Tools::getValue('vmutc_background_top_input') != '') {
                    $element_css[$elementselected]['backgroundPositionY'][$screen_mode] = Tools::getValue('vmutc_background_top_input') . $vmutc_background_top_input . "";
                }
                // Position
                $vmutc_position_left_input = (Tools::getValue('vmutc_position_left_input_important'));
                $vmutc_position_top_input = (Tools::getValue('vmutc_position_top_input_important'));
                $vmutc_position_right_input = (Tools::getValue('vmutc_position_right_input_important'));
                $vmutc_position_bottom_input = (Tools::getValue('vmutc_position_bottom_input_important'));
                $vmutc_position_relative = (Tools::getValue('vmutc_position_relative_important'));
                $vmutc_zindex = (Tools::getValue('vmutc_zindex_input_important'));
                if (Tools::getValue('vmutc_position_left_input') != '') {
                    $element_css[$elementselected]['left: '][$screen_mode] = Tools::getValue('vmutc_position_left_input') . "px" . $vmutc_position_left_input . "";
                }
                if (Tools::getValue('vmutc_position_top_input') != '') {
                    $element_css[$elementselected]['top: '][$screen_mode] = Tools::getValue('vmutc_position_top_input') . "px" . $vmutc_position_top_input . "";
                }
                if (Tools::getValue('vmutc_position_right_input') != '') {
                    $element_css[$elementselected]['right: '][$screen_mode] = Tools::getValue('vmutc_position_right_input') . "px" . $vmutc_position_right_input . "";
                }
                if (Tools::getValue('vmutc_position_bottom_input') != '') {
                    $element_css[$elementselected]['bottom: '][$screen_mode] = Tools::getValue('vmutc_position_bottom_input') . "px" . $vmutc_position_bottom_input . "";
                }
                if (Tools::getValue('vmutc_position_relative') != '') {
                    $element_css[$elementselected]['position: '][$screen_mode] = Tools::getValue('vmutc_position_relative') . $vmutc_position_relative . "";
                }
                if (Tools::getValue('vmutc_zindex_input') != '') {
                    $element_css[$elementselected]['z-index: '][$screen_mode] = Tools::getValue('vmutc_zindex_input') . $vmutc_zindex . "";
                }
                // Transform
                $vmutc_transform_important = (Tools::getValue('vmutc_transform_important'));
                $vmutc_transform_scale_input = (Tools::getValue('vmutc_transform_scale_input'));
                $vmutc_transform_rotate_input = (Tools::getValue('vmutc_transform_rotate_input'));
                $vmutc_transform_translateX_input = (Tools::getValue('vmutc_transform_translateX_input'));
                $vmutc_transform_translateY_input = (Tools::getValue('vmutc_transform_translateY_input'));
                $vmutc_transform_skewX_input = (Tools::getValue('vmutc_transform_skewX_input'));
                $vmutc_transform_skewY_input = (Tools::getValue('vmutc_transform_skewY_input'));
                if ($vmutc_transform_scale_input != '') {
                    $element_css[$elementselected]['transformScale'][$screen_mode] = $vmutc_transform_scale_input;
                }
                if ($vmutc_transform_rotate_input != '') {
                    $element_css[$elementselected]['transformRotate'][$screen_mode] = $vmutc_transform_rotate_input;
                }
                if ($vmutc_transform_translateX_input != '') {
                    $element_css[$elementselected]['transformTranslateX'][$screen_mode] = $vmutc_transform_translateX_input;
                }
                if ($vmutc_transform_translateY_input != '') {
                    $element_css[$elementselected]['transformTranslateY'][$screen_mode] = $vmutc_transform_translateY_input;
                }
                if ($vmutc_transform_skewX_input != '') {
                    $element_css[$elementselected]['transformSkewX'][$screen_mode] = $vmutc_transform_skewX_input;
                }
                if ($vmutc_transform_skewY_input != '') {
                    $element_css[$elementselected]['transformSkewY'][$screen_mode] = $vmutc_transform_skewY_input;
                }
                $element_css[$elementselected]['transformImportant'][$screen_mode] = $vmutc_transform_important;
                $transformStringMoz = '-moz-transform:';
                $transformStringWebkit = '-webkit-transform:';
                $transformStringO = '-o-transform:';
                $transformStringMs = '-ms-transform:';
                $transformString = '';
                $alltransformString = '';
                if ($vmutc_transform_scale_input != '') {
                    $transformStringMoz .= " scale(" . $vmutc_transform_scale_input . ")";
                    $transformStringWebkit .= " scale(" . $vmutc_transform_scale_input . ")";
                    $transformStringO .= " scale(" . $vmutc_transform_scale_input . ")";
                    $transformStringMs .= " scale(" . $vmutc_transform_scale_input . ")";
                    $transformString .= " scale(" . $vmutc_transform_scale_input . ")";
                }
                if ($vmutc_transform_rotate_input != '') {
                    $transformStringMoz .= " rotate(" . $vmutc_transform_rotate_input . "deg)";
                    $transformStringWebkit .= " rotate(" . $vmutc_transform_rotate_input . "deg)";
                    $transformStringO .= " rotate(" . $vmutc_transform_rotate_input . "deg)";
                    $transformStringMs .= " rotate(" . $vmutc_transform_rotate_input . "deg)";
                    $transformString .= " rotate(" . $vmutc_transform_rotate_input . "deg)";
                }
                if ($vmutc_transform_translateX_input != '' && $vmutc_transform_translateY_input != '') {
                    $transformStringMoz .= " translate(" . $vmutc_transform_translateX_input . "px," . $vmutc_transform_translateY_input . "px)";
                    $transformStringWebkit .= " translate(" . $vmutc_transform_translateX_input . "px," . $vmutc_transform_translateY_input . "px)";
                    $transformStringO .= " translate(" . $vmutc_transform_translateX_input . "px," . $vmutc_transform_translateY_input . "px)";
                    $transformStringMs .= " translate(" . $vmutc_transform_translateX_input . "px," . $vmutc_transform_translateY_input . "px)";
                    $transformString .= " translate(" . $vmutc_transform_translateX_input . "px," . $vmutc_transform_translateY_input . "px)";
                }
                if ($vmutc_transform_skewX_input != '' && $vmutc_transform_skewY_input != '') {
                    $transformStringMoz .= " skew(" . $vmutc_transform_skewX_input . "deg," . $vmutc_transform_skewY_input . "deg)";
                    $transformStringWebkit .= " skew(" . $vmutc_transform_skewX_input . "deg," . $vmutc_transform_skewY_input . "deg)";
                    $transformStringO .= " skew(" . $vmutc_transform_skewX_input . "deg," . $vmutc_transform_skewY_input . "deg)";
                    $transformStringMs .= " skew(" . $vmutc_transform_skewX_input . "deg," . $vmutc_transform_skewY_input . "deg)";
                    $transformString .= " skew(" . $vmutc_transform_skewX_input . "deg," . $vmutc_transform_skewY_input . "deg)";
                }
                $transformStringMoz .= $vmutc_transform_important . ';';
                $transformStringWebkit .= $vmutc_transform_important . ';';
                $transformStringO .= $vmutc_transform_important . ';';
                $transformStringMs .= $vmutc_transform_important . '';
                $transformString .= $vmutc_transform_important . ';';
                $alltransformString = $transformString . $transformStringMoz . $transformStringWebkit . $transformStringO . $transformStringMs;
                $element_css[$elementselected]['transform: '][$screen_mode] = $alltransformString;
                // Animation
                $vmutc_animation_when = Tools::getValue('vmutc_animation_when');
                if (isset($vmutc_animation_when) || $vmutc_animation_when != 'none') {
                    $vmutc_animation_speed = Tools::getValue('vmutc_animation_speed');
                    $vmutc_animation_do = Tools::getValue('vmutc_animation_do');
                    $vmutc_animation_infinite = Tools::getValue('vmutc_animation_infinite');
                    $element_animation[$elementselected]['when'] = $vmutc_animation_when;
                    $element_animation[$elementselected]['do'] = $vmutc_animation_do;
                    $element_animation[$elementselected]['infinite'] = $vmutc_animation_infinite;
                    $element_animation[$elementselected]['speed'] = $vmutc_animation_speed;
                }
                // SVG
                if (Tools::getValue('vmutc_svgstroke_color_real') != '') {
                    $element_css[$elementselected]['stroke: '][$screen_mode] = Tools::getValue('vmutc_svgstroke_color_real');
                }
                if (Tools::getValue('vmutc_svgfill_color_real') != '') {
                    $element_css[$elementselected]['fill: '][$screen_mode] = Tools::getValue('vmutc_svgfill_color_real');
                }
                if (Tools::getValue('vmutc_svgstroke_width_input') != '') {
                    $element_css[$elementselected]['stroke-width: '][$screen_mode] = Tools::getValue('vmutc_svgstroke_width_input');
                }
                // General
                if (Tools::getValue('vmutc_only_element') != '') {
                    $element_css[$elementselected]['only_element'][$screen_mode] = Tools::getValue('vmutc_only_element');
                }
                if (Tools::getValue('vmutc_display_none') != '') {
                    $element_css[$elementselected]['display:'][$screen_mode] = Tools::getValue('vmutc_display_none');
                }
                if (Tools::getValue('vmutc_custom_css') != '') {
                    $element_css[$elementselected]['custom_css'][$screen_mode] = Tools::getValue('vmutc_custom_css');
                }
                $saveDescription = '';
                if (Tools::getValue('vmutc_savedescription') != '') {
                    $saveDescription = Tools::getValue('vmutc_savedescription');
                    $element_css[$elementselected]['savedescription'][$screen_mode] = $saveDescription;
                }
                $themeCss2 = json_encode($element_css);
                $animations = json_encode($element_animation);
               
                if (isset($element_css[$elementselected]['font-family: '])) {
                    $fontname = $element_css[$elementselected]['font-family: '][$screen_mode];
                    $fontname = str_replace(' !important','',$fontname);
            
                    if(!in_array($fontname, $vmutc_fonts) && !in_array($fontname, $defaultfonts) ) {
                    $vmutc_fonts[] = $fontname;
                    $string_font = implode("|", $vmutc_fonts);
                    }
                }
                
                $wpdb->update(
                    $table_name_css, array(
                        'active' => 0,
                    ), array('id_theme' => (int) $themename['id'])
                );
                $wpdb->insert(
                    $table_name_css, array(
                        'id_theme' => (int) ($themename['id']),
                        'css' => $themeCss2,
                        'fonts' => $string_font,
                        'animation' => ($animations),
                        'description' => sanitize_text_field($saveDescription),
                        'date_add' => date('Y-m-d H:i:s'),
                        'active' => 1,
                    )
                );
                if ($string_font != "") {
                    $string_font = Tools::substr($string_font, 1);
                    $this->addToFeed('@import url("https://fonts.googleapis.com/css?family=' . $string_font . '");', $filename);
                    $this->addToFeed("\r\n", $filename);
                    $this->addToFeed("\r\n", $filename);
                }
                $media_queries = "";
                $close_tag = "";
                if ($screen_mode == "vmutc_mobile_mode") {
                    $media_queries = "@media only screen and (max-width : 767px) {\r\n ";
                    $close_tag = "}";
                }
                if ($screen_mode == "vmutc_tablet_mode") {
                    $media_queries = "@media only screen and (min-width : 768px) and (max-width : 1024px) {\r\n ";
                    $close_tag = "}";
                }
                $this->addToFeed($media_queries, $filename);
                foreach ($element_css as $key => $element) {
                    $this->addToFeed($key . "{", $filename);
                    if ($key != "") {
                        foreach ($element as $ekey => $value) {
                            if (isset($value[$screen_mode])) {
                                if ($value[$screen_mode] != "" && $value[$screen_mode] != "None" && $value[$screen_mode] != "px"
                                    && $value[$screen_mode] != "px px px " && $value[$screen_mode] != "px px px px "
                                    && $value[$screen_mode] != "url('".CSSM_PLUGIN_URL."assets/img/gallery/')" && $value[$screen_mode] != " !important"
                                    && $value[$screen_mode] != "%" && $value[$screen_mode] != "% %" && $ekey != "text_shadow_H"
                                    && $ekey != "text_shadow_V" && $ekey != "text_shadow_Blur" && $ekey != "text_shadow_color"
                                    && $ekey != "boxshadow_V" && $ekey != "boxshadow_H" && $ekey != "boxshadow_Blur"
                                    && $ekey != "boxshadow_Spread" && $ekey != "boxshadow_color" && $ekey != "backgroundImageName"
                                    && $ekey != "backgroundPositionX" && $ekey != "backgroundPositionY" && $ekey != "backgroundSizeText"
                                    && $ekey != "backgroundSizeWidth" && $ekey != "backgroundSizeHeight" && $ekey != "only_element"
                                    && $ekey != "custom_css" && $ekey != "transformScale" && $ekey != "transformRotate"
                                    && $ekey != "transformTranslateX" && $ekey != "transformTranslateY" && $ekey != "transformSkewX"
                                    && $ekey != "transformSkewY" && $ekey != "gradientused"
                                    && $ekey != "gradient" && $ekey != "gradienthandlers" && $ekey != "gradienttype"
                                    && $ekey != "gradientangle" && $ekey != "gradientposition" && $ekey != "gradienttextused"
                                    && $ekey != "gradienttext" && $ekey != "gradienttexthandlers" && $ekey != "gradienttexttype"
                                    && $ekey != "gradienttextangle" && $ekey != "gradienttextposition" && $ekey != "savedescription") {
                                    $this->addToFeed($ekey . $value[$screen_mode] . '; ', $filename);
                                }
                                if ($value[$screen_mode] != "" && $ekey == "custom_css") {
                                    $this->addToFeed($value[$screen_mode] . ' ', $filename);
                                }
                                if ($value[$screen_mode] != "" && ($ekey == "gradient" || $ekey == 'gradienttext')) {
                                    $this->addToFeed($value[$screen_mode] . ' ', $filename);
                                }
                            }
                        }
                        $this->addToFeed("}", $filename);
                        $this->addToFeed("\r\n", $filename);
                    }
                }
                $this->addToFeed($close_tag, $filename);
                echo 'updated with success';
                wp_die();
            }
        }

    }

    public function cssm_removeBlock()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_block = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $id = Tools::getValue('id');
            $wpdb->delete($table_block,  array( 'id' => (int) $id ));
            echo 'block removed with success';
            wp_die();
        }
    }

    public function cssm_deleteGalleryImage()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();

        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/gallery/' . basename($filename));
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/gallery/cache/' . basename($filename));
            echo 'image removed with success';
            wp_die();
        }
    }

    public function cssm_deleteGalleryVideo()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();

        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/video/' . basename($filename));
            echo 'video removed with success';
            wp_die();
        }
    }

    public function cssm_deleteGalleryAudio()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_block";
            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/audio/' . basename($filename));
            echo 'audio removed with success';
            wp_die();
        }
    }

    public function cssm_deleteGallerySvg()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/svg/' . basename($filename));
            echo 'svg removed with success';
            wp_die();
        }
    }

    public function cssm_deleteAll()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $theme = $wpdb->get_row('SELECT `id`, `name`, `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $theme->ip)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $filename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_mobile = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_tablet = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . basename($theme->name) . '.css';
            $publishfilename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmytheme' . $id_shop . '_' . basename($theme->name) . '.css';
          
            $table_theme_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
            $wpdb->delete($table_theme_css, array( 'id_theme' => (int) $theme->id ));

            @unlink($filename);
            @unlink($filename_mobile);
            @unlink($filename_tablet);
            @unlink($filename_inspector);
            @unlink($publishfilename);
            echo 'deleted with success';
            wp_die();
        }
    }

    public function cssm_publish()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $theme = $wpdb->get_row('SELECT `name`, `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $theme->ip)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $filename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_mobile = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_tablet = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . basename($theme->name) . '.css';
            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . basename($theme->name) . '.css';
            $publishfilename = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmytheme' . $id_shop . '_' . basename($theme->name) . '.css';
            $filenametemp = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmythemetemp' . $id_shop . '_' . basename($theme->name) . '.css';
           
            $fp1 = fopen($filenametemp, 'a+');
            if (file_exists($filename)) {
                $file1 = Tools::file_get_contents($filename);
            }
            if (file_exists($filename_mobile)) {
                $file2 = Tools::file_get_contents($filename_mobile);
            }
            if (file_exists($filename_tablet)) {
                $file4 = Tools::file_get_contents($filename_tablet);
            }
            if (file_exists($filename_inspector)) {
                $file6 = Tools::file_get_contents($filename_inspector);
            }
            if (file_exists($filename)) {
                fwrite($fp1, $file1);
            }
            if (file_exists($filename_mobile)) {
                fwrite($fp1, $file2);
            }
            if (file_exists($filename_tablet)) {
                fwrite($fp1, $file4);
            }
            if (file_exists($filename_inspector)) {
                fwrite($fp1, $file6);
            }
            fclose($fp1);
            $options = array('output_file' => $publishfilename);
            csscrush_file($filenametemp, $options);
            @unlink($filenametemp);
            echo 'published with success';
            wp_die();
        }
    }

    public function cssm_chooseBackgroundImage()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $index = '0';
            if ((Tools::getValue('swipersliderindex'))) {
                $index = Tools::getValue('swipersliderindex');
            }
            $what = Tools::getValue('what');
            $swipersliderindex = $index;       
        
            $img_gallery = ImgGallery::getPublicSide(CSSM_PLUGIN_DIR_PATH . 'assets/img/gallery', 10,$what,$swipersliderindex);
          
            wp_die();      

        }
    }

    public function cssm_chooseBackgroundVideo()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $what = Tools::getValue('what');

            $video_gallery = VideoGallery::getPublicSide(CSSM_PLUGIN_DIR_PATH . 'assets/img/video', 10,$what);
         wp_die();

        }

    }

    public function cssm_chooseAudio()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $what = Tools::getValue('what');
            $audio_gallery = AudioGallery::getPublicSide(CSSM_PLUGIN_DIR_PATH . 'assets/img/audio', 10, $what);
            wp_die();
        }

    }
    public function cssm_chooseSvg()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $what = Tools::getValue('what');
            $svg_gallery = SvgGallery::getPublicSide(CSSM_PLUGIN_DIR_PATH . 'assets/img/svg', 10, $what);
           wp_die();
        }

    }

    public function cssm_uploadImage()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            if (!empty($_FILES)) {
                if (!Tools::isRealImage($_FILES['file']['tmp_name'], $_FILES['file']['type']) || !Tools::isCorrectImageFileExt($_FILES['file']['name']) || preg_match('/\%00/', $_FILES['file']['name'])) {
                   echo 'Image format not recognized, allowed formats are: .gif, .jpg, .png';
                   wp_die();
                }
                else {
                    $tempFile = $_FILES['file']['tmp_name'];
                    $ext_allow = array('jpg', 'jpeg', 'png', 'gif', 'bmp');
                    $ext_file = Tools::strtolower(Tools::substr(strrchr($_FILES['file']['name'], '.'), 1));
                    if (in_array($ext_file, $ext_allow) && $_FILES['file']['size'] > 0) {
                        if (!preg_match('#[\x00-\x1F\x7F-\x9F/\\\\]#', $_FILES['file']['name'])) {
                            $targetPath2 = CSSM_PLUGIN_DIR_PATH . 'assets/img/gallery/';
                            $targetFile2 = $targetPath2 . basename($_FILES['file']['name']);
                            move_uploaded_file($tempFile, $targetFile2);
                            echo basename($_FILES['file']['name']);
                            wp_die();
                        }
                    }
                }
            }

        }

    }

    public function cssm_uploadVideo()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            if (!empty($_FILES)) {
                $tempFile = $_FILES['file']['tmp_name'];
                $ext_allow = array('mp4');
                $ext_file = Tools::strtolower(Tools::substr(strrchr($_FILES['file']['name'], '.'), 1));
                if (in_array($ext_file, $ext_allow) && $_FILES['file']['size'] > 0) {
                    if (!preg_match('#[\x00-\x1F\x7F-\x9F/\\\\]#', $_FILES['file']['name'])) {
                        $targetPath2 = CSSM_PLUGIN_DIR_PATH . 'assets/img/video/';
                        $targetFile2 = $targetPath2 . basename($_FILES['file']['name']);
                        move_uploaded_file($tempFile, $targetFile2);
                        echo basename($_FILES['file']['name']);
                        wp_die();
                    }
                }
            }

        }

    }

    public function cssm_uploadAudio()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            if (!empty($_FILES)) {
                $tempFile = $_FILES['file']['tmp_name'];
                $ext_allow = array('mp3');
                $ext_file = Tools::strtolower(Tools::substr(strrchr($_FILES['file']['name'], '.'), 1));
                if (in_array($ext_file, $ext_allow) && $_FILES['file']['size'] > 0) {
                    if (!preg_match('#[\x00-\x1F\x7F-\x9F/\\\\]#', $_FILES['file']['name'])) {
                        $targetPath2 = CSSM_PLUGIN_DIR_PATH . 'assets/img/audio/';
                        $targetFile2 = $targetPath2 . basename($_FILES['file']['name']);
                        move_uploaded_file($tempFile, $targetFile2);
                        echo basename($_FILES['file']['name']);
                        wp_die();
                    }
                }
            }
        }

    }

    public function cssm_uploadSvg()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            if (!empty($_FILES)) {
                $tempFile = $_FILES['file']['tmp_name'];
                $ext_allow = array('svg');
                $ext_file = Tools::strtolower(Tools::substr(strrchr($_FILES['file']['name'], '.'), 1));
                if (in_array($ext_file, $ext_allow) && $_FILES['file']['size'] > 0) {
                    if (!preg_match('#[\x00-\x1F\x7F-\x9F/\\\\]#', $_FILES['file']['name'])) {
                        $sanitizer = new Sanitizer();

                        $dirtySVG = Tools::file_get_contents($tempFile);
                        $cleanSVG = $sanitizer->sanitize($dirtySVG);
                        if ($cleanSVG === false) {
                            return false;
                        }

                        file_put_contents($tempFile, $cleanSVG);
                        $targetPath2 = CSSM_PLUGIN_DIR_PATH . 'assets/img/svg/';
                        $targetFile2 = $targetPath2 . basename($_FILES['file']['name']);
                        move_uploaded_file($tempFile, $targetFile2);
                        echo basename($_FILES['file']['name']);
                        wp_die();
                    }
                }
            }
        }

    }

    public function cssm_copySvgCode()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $svgcontent = Tools::file_get_contents(CSSM_PLUGIN_DIR_PATH . 'assets/img/svg/' . Tools::getValue('filename'));
            echo $svgcontent;
            wp_die();
        }

    }

    public function cssm_cleanCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            require_once CSSM_PLUGIN_DIR_PATH . 'lib/csscrush/CssCrush.php';
            $options = array('minify' => true,
                'formatter' => 'block');
            $result = csscrush_string(Tools::getValue('css'), $options);
            echo $result;
            wp_die();

        }

    }

    public function cssm_getActiveHistoric()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_theme_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
            $historic = $wpdb->get_row('SELECT id, date_add
					FROM `' . $table_theme_css . '`
					WHERE `id_theme` = ' . (int) Tools::getValue('id_theme') . ' AND active=1',ARRAY_A);
            echo json_encode($historic);
            wp_die();
        }

    }

    public function cssm_cleanCssComments()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            require_once CSSM_PLUGIN_DIR_PATH . 'lib/csscrush/CssCrush.php';
            $options = array('formatter' => 'block');
            $result = csscrush_string(Tools::getValue('css'));
            $result = csscrush_string($result, $options);
            echo $result;
            wp_die();

        }

    }
    public function cssm_loadCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . (int) Tools::getValue('id_shop') . '_' . basename(Tools::getValue('theme')) . '.css';
            $result = '';
            if (file_exists($filename_inspector)) {
                $result = Tools::file_get_contents($filename_inspector);
            }
            echo $result;
            wp_die();

        }

    }

    public function cssm_loadJs()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {           
           
                $filename_js = CSSM_PLUGIN_DIR_PATH . 'assets/js/custom.js';
            $result = '';
            if (file_exists($filename_js)) {
                $result = Tools::file_get_contents($filename_js);
            }
            echo $result;
            wp_die();

        }

    }

    public function cssm_deleteHistory()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {
            $table_theme_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
            $wpdb->delete( $table_theme_css, array('id' => (int) Tools::getValue('id_css')));
            echo "History Deleted";
            wp_die();

        }

    }

    public function cssm_deleteCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . (int) Tools::getValue('id_shop') . '_' . basename(Tools::getValue('theme')) . '.css';
            if (file_exists($filename_inspector)) {
                @unlink($filename_inspector);
                echo 'css file deleted';
                wp_die();
            }

        }

    }

    public function cssm_saveCss()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename_inspector = CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . (int) Tools::getValue('id_shop') . '_' . basename(Tools::getValue('theme')) . '.css';
            $fp1 = fopen($filename_inspector, 'w+');
            fwrite($fp1, Tools::getValue('css'));
            fclose($fp1);
            echo 'Css file saved with success';
            wp_die();

        }

    }

    public function cssm_saveJs()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

                $filename_js = CSSM_PLUGIN_DIR_PATH . 'assets/js/custom.js';
           
            $fp1 = fopen($filename_js, 'w+');
            fwrite($fp1, Tools::getValue('js'));
            fclose($fp1);
            echo 'Javascript file saved with success';
            wp_die();

        }

    }
    public function cssm_deleteVideo()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/video/' . basename($filename));
            echo 'video deleted';
            wp_die();

        }

    }

    public function cssm_deleteAudio()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/audio/' . basename($filename));
            echo 'audio deleted';
            wp_die();
        }

    }

    public function cssm_deleteSvg()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
        } else {

            $filename = Tools::getValue('filename');
            @unlink(CSSM_PLUGIN_DIR_PATH . 'assets/img/svg/' . basename($filename));
            echo 'svg deleted';
            wp_die();
        }

    }

    public function cssm_openHelp()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $id_shop = get_current_blog_id();
        $ips = $wpdb->get_var('SELECT `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');

        if (!check_ajax_referer('cssm-security-nonce', 'security', false) && !in_array('administrator', wp_get_current_user()->roles) && !in_array(Tools::getRemoteAddr(), $ips)) {
            wp_send_json_error('Invalid security token sent.');
            wp_die();
            } else {
                $help = Tools::getValue('help');
               echo the_content(include_once(CSSM_PLUGIN_DIR_PATH . 'views/help/' . $help . '.php')); 
               wp_die();
            }
           
    
    }

    public function addToFeed($str, $filename)
    {
        if (file_exists($filename)) {
            $fp = fopen($filename, 'ab');
            fwrite($fp, $str, Tools::strlen($str));
            fclose($fp);
        }
    }
}

new cssmAdminAjax();
