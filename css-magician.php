<?php
/*
Plugin Name: Css Magician
Plugin URI: https://wordpress.org/plugins/css-magician
Description: The ultimate page configurator, editor and builder. Basic Version (free)
Author: Presta Magician
Version: 1.0.1
Author URI: https://presta-magician.com/
Text Domain: css-magician
Domain Path: /languages/
License: GPLv2
International Registered Trademark & Property of Presta Magician
Css Magician for Wordpress basic version.
 */
if (!defined('WPINC')) {
    die;
}
define('CSSM_VERSION', '1.0.1');
define('CSSM_PLUGIN_URL', plugins_url('/', __FILE__));
define('CSSM_PLUGIN_PATH', basename(dirname(__FILE__)));
define('CSSM_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));

require_once 'classes/Tools.php';

class CssMagicianSettings
{
    private $css_magician_settings_options;

    public function __construct()
    {
        if (is_admin()) {
            add_option('CSSM_VERSION_KEY', CSSM_VERSION);
            include_once 'controllers/admin/cssm-admin-ajax.php';
            add_filter('plugin_action_links', array($this, 'add_plugin_action_links'), 10, 2);
            add_filter('plugin_row_meta', array($this, 'add_plugin_meta_links'), 10, 2);
        }
        add_action('init', array($this, 'init'));
        add_action('wp_footer', array($this, 'cssm_front_end_function'));
        add_action('plugins_loaded', array($this, 'load_plugin_textdomain'));

    }

    public function add_plugin_action_links($links, $plugin_name)
    {
        if (strpos($plugin_name, basename(__FILE__))) {
            $settings_link = sprintf('<a href="%s">%s</a>', admin_url('admin.php?page=css-magician-settings'), esc_html__('Settings', 'css-magician'));
            array_unshift($links, $settings_link);
        }
        return $links;
    }
    public function add_plugin_meta_links($links, $plugin_name)
    {
        if (strpos($plugin_name, basename(__FILE__))) {
            $links[] = '<a href="https://www.presta-magician.com/en/5-css-magician-for-wordpress" target="_blanck">' . __('Upgrade to Premium', 'css-magician') . '</a>';
        }
        return $links;
    }

    public function cssm_front_end_function()
    {
        global $wpdb;
        $table_theme = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $table_theme_css = $wpdb->prefix . "cssm_ultimateconfigurator_themes_css";
        $table_theme_block = $wpdb->prefix . "cssm_ultimateconfigurator_block";
        $id_shop = get_current_blog_id();

        $theme = $wpdb->get_row('SELECT `id`, `name`, `ip` FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');
        $histories = $wpdb->get_results('SELECT * FROM `' . $table_theme_css . '` WHERE `id_theme` = ' . (int) ($theme->id) . ' ORDER BY id DESC');
        $selected_theme = $wpdb->get_row('SELECT * FROM `' . $table_theme . '` WHERE `id_shop` = ' . (int) ($id_shop) . ' AND `active` = 1');
        $animations = $wpdb->get_var('SELECT animation FROM `' . $table_theme_css . '` WHERE `id_theme` = ' . (int) ($theme->id) . ' ORDER BY id DESC');
        $advertisement_image = CSSM_PLUGIN_URL . 'assets/img/logo.png';
        $id_theme = $theme->id;
        $theme_name = $theme->name;
        $ips = $theme->ip;
        $allIp = explode(',', $ips);
        $id_lang = get_locale();
        $lang_iso = explode('_', $id_lang);
        $lang_iso = $lang_iso[0];
        $version = date('Y-m-d H:i:s');
        $csslink1 = "";
        $csslink2 = "";
        $csslink3 = "";
        $csslink4 = "";

        $animations = htmlentities($animations, ENT_QUOTES, 'UTF-8');

        echo '<input id="vmutc_animations" type="hidden" value="' . $animations . '"/>';
        echo '<input type="hidden" id="cssm_base_dir" name="cssm_base_dir" value="' . CSSM_PLUGIN_URL . '" />';
        echo '<input type="hidden" id="vmutc_lang" name="cssm_base_dir" value="' . $lang_iso . '" />';
        echo '<div id="vmutc_front_styles_container"></div>';

        $available_languages = get_available_languages();
        if (!function_exists('wp_get_available_translations')) {
            require_once ABSPATH . '/wp-admin/includes/translation-install.php';
        }
        $translations = wp_get_available_translations();

        $languages = array();
        foreach ($translations as $translation) {
            if (in_array($translation['language'], $available_languages)) {
                $languages[] = array(
                    'id_lang' => $translation['language'],
                    'native_name' => $translation['native_name'],
                );
            }
        }
        $languages[] = array(
            'id_lang' => 'en_US',
            'native_name' => 'English',
        );

        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        if (in_array('administrator', wp_get_current_user()->roles) && in_array(Tools::getRemoteAddr(), $allIp) && $selected_theme->display == '1' && !Tools::getValue('workmode') == 'nowork') {
            $allBlocks = $wpdb->get_results('SELECT * FROM `' . $table_theme_block . '` WHERE `id_theme` = ' . (int) ($id_theme) . ' AND `id_lang` = "' . sanitize_text_field($lang_iso) . '" ORDER BY id ASC', ARRAY_A);
            $allBlocks = wp_json_encode($allBlocks);
            $allBlocks = htmlentities($allBlocks, ENT_QUOTES, 'UTF-8');
            echo '<input type="hidden" id="vmutc_allblocks" name="vmutc_allblocks" value="' . $allBlocks . '" />';

            $this->enqueueStylizerScripts();
            include_once 'views/stylizer.php';
            include_once 'views/openWidgets.php';

            foreach (glob(CSSM_PLUGIN_DIR_PATH . 'views/widgets/*.php') as $filename) {
                $widgetName = basename($filename, '.php');
                include_once 'views/widgets/' . $widgetName . '.php';
            }

            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink1 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink2 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink3 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink4 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }

            wp_enqueue_style('cssmworkmythemeCss', $csslink1, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythememobileCss', $csslink2, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythemeinspectorCss', $csslink3, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythemetabletCss', $csslink4, array(), CSSM_VERSION, 'all');

        } else if (in_array('administrator', wp_get_current_user()->roles) && in_array(Tools::getRemoteAddr(), $allIp) && $selected_theme->display == '1' && Tools::getValue('workmode') == 'nowork') {
            $allBlocks = $wpdb->get_results('SELECT * FROM `' . $table_theme_block . '` WHERE `id_theme` = ' . (int) ($id_theme) . ' AND `id_lang` = "' . sanitize_text_field($lang_iso) . '" AND `publish`=1 ORDER BY id ASC', ARRAY_A);
            $allBlocks = wp_json_encode($allBlocks);
            $allBlocks = htmlentities($allBlocks, ENT_QUOTES, 'UTF-8');
            echo '<input type="hidden" id="vmutc_allblocks" name="vmutc_allblocks" value="' . $allBlocks . '" />';

            $this->enqueueScripts();
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink1 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink2 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_mobile' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink3 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_inspector' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink4 = CSSM_PLUGIN_URL . 'assets/css/vmutcworkmytheme_tablet' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }

            wp_enqueue_style('cssmworkmythemeCss', $csslink1, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythememobileCss', $csslink2, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythemeinspectorCss', $csslink3, array(), CSSM_VERSION, 'all');
            wp_enqueue_style('cssmworkmythemetabletCss', $csslink4, array(), CSSM_VERSION, 'all');
        } else if ((int) $theme->id) {
            $allBlocks = $wpdb->get_results('SELECT * FROM `' . $table_theme_block . '` WHERE `id_theme` = ' . (int) ($id_theme) . ' AND `id_lang` = "' . sanitize_text_field($lang_iso) . '" AND `publish`=1 ORDER BY id ASC', ARRAY_A);
            $allBlocks = wp_json_encode($allBlocks);
            $allBlocks = htmlentities($allBlocks, ENT_QUOTES, 'UTF-8');
            echo '<input type="hidden" id="vmutc_allblocks" name="vmutc_allblocks" value="' . $allBlocks . '" />';

            $this->enqueueScripts();
            if (file_exists(CSSM_PLUGIN_DIR_PATH . 'assets/css/vmutcmytheme' . $id_shop . '_' . $theme->name . '.css')) {
                $csslink1 = CSSM_PLUGIN_URL . 'assets/css/vmutcmytheme' . $id_shop . '_' . $theme->name . '.css?v=' . $version;
            }

            wp_enqueue_style('cssmmythemeCss', $csslink1, array(), CSSM_VERSION, 'all');
        }
    }

    public function load_plugin_textdomain()
    {
        load_plugin_textdomain('css-magician', false, CSSM_PLUGIN_PATH . '/languages/');
    }

    public function init()
    {
        add_action('admin_menu', array($this, 'css_magician_settings_add_plugin_page'));
        add_action('admin_init', array($this, 'css_magician_settings_page_init'));
  
    }
    public function enqueueStylizerScripts()
    {
        include_once 'languages/js-translate.php';
        wp_enqueue_style('jquery-ui', CSSM_PLUGIN_URL . 'assets/css/jquery-ui.min.css');
        wp_enqueue_style('fontawesomeCss', CSSM_PLUGIN_URL . 'assets/css/all.min.css');
        wp_enqueue_style('hookCss', CSSM_PLUGIN_URL . 'assets/css/hooks.min.css', 'all');
        wp_enqueue_style('flipclockCss', CSSM_PLUGIN_URL . 'assets/css/flipclock.min.css');
        wp_enqueue_style('swiperCss', CSSM_PLUGIN_URL . 'assets/css/swiper.min.css');
        wp_enqueue_style('gridstackCss', CSSM_PLUGIN_URL . 'assets/css/gridstack.min.css');

        wp_enqueue_script('jquery-ui-dialog');
        wp_enqueue_script('jquery-ui-draggable');
        wp_enqueue_script('jquery-ui-sortable');
        wp_enqueue_script('jquery-ui-slider');
        wp_enqueue_script('jquery-ui-tabs');
        wp_enqueue_script('jquery-ui-datepicker');
        wp_enqueue_script('jquery-ui-position');
        wp_enqueue_script('jquery-ui-droppable');

        wp_enqueue_style('animateCssCss', CSSM_PLUGIN_URL . 'assets/css/animate.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('StylizerCss', CSSM_PLUGIN_URL . 'assets/css/stylizer.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('spectrumCss', CSSM_PLUGIN_URL . 'assets/css/spectrum.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('fontpickerCss', CSSM_PLUGIN_URL . 'assets/css/jquery.fontpicker.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('imgalerryCss', CSSM_PLUGIN_URL . 'assets/css/imgallery.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('dropzoneCss', CSSM_PLUGIN_URL . 'assets/css/dropzone.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('sweetalert2Css', CSSM_PLUGIN_URL . 'assets/css/sweetalert2.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('fontawesomepickerCss', CSSM_PLUGIN_URL . 'assets/css/fontawesome-iconpicker.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('nouisliderCss', CSSM_PLUGIN_URL . 'assets/css/nouislider.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('timepickerCss', CSSM_PLUGIN_URL . 'assets/css/jquery-ui-timepicker-addon.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('grapickCss', CSSM_PLUGIN_URL . 'assets/css/grapick.min.css', array(), CSSM_VERSION, 'all');
        wp_enqueue_style('summernoteCss', CSSM_PLUGIN_URL . 'assets/css/summernote-lite.min.css', array(), CSSM_VERSION, 'all');

        wp_enqueue_script('vm_ultimateconfiguratorGridstack1', CSSM_PLUGIN_URL . 'assets/js/gridstack-poly.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorGridstack2', CSSM_PLUGIN_URL . 'assets/js/gridstack.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorGridstack3', CSSM_PLUGIN_URL . 'assets/js/gridstack.jQueryUI.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorDominspector', CSSM_PLUGIN_URL . 'assets/js/dom-inspector.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorSpectrum', CSSM_PLUGIN_URL . 'assets/js/spectrum.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorFontPicker', CSSM_PLUGIN_URL . 'assets/js/jquery.fontpicker.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorDropzone', CSSM_PLUGIN_URL . 'assets/js/dropzone/dropzone.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCssSelector', CSSM_PLUGIN_URL . 'assets/js/simmer.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorElocate', CSSM_PLUGIN_URL . 'assets/js/jquery.ellocate.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAce', CSSM_PLUGIN_URL . 'assets/js/ace/ace.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAcemode', CSSM_PLUGIN_URL . 'assets/js/ace/mode-css.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAceWorker', CSSM_PLUGIN_URL . 'assets/js/ace/worker-css.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAcemodeHtml', CSSM_PLUGIN_URL . 'assets/js/ace/mode-html.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAceWorkerHtml', CSSM_PLUGIN_URL . 'assets/js/ace/worker-html.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAcemodeJs', CSSM_PLUGIN_URL . 'assets/js/ace/mode-javascript.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAceWorkerJs', CSSM_PLUGIN_URL . 'assets/js/ace/worker-javascript.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAceTheme', CSSM_PLUGIN_URL . 'assets/js/ace/theme-monokai.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAceExt', CSSM_PLUGIN_URL . 'assets/js/ace/ext-language_tools.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCssRules', CSSM_PLUGIN_URL . 'assets/js/cssRules.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAnijs', CSSM_PLUGIN_URL . 'assets/js/anijs-min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorEditor', CSSM_PLUGIN_URL . 'assets/js/summernote-lite.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorSwal', CSSM_PLUGIN_URL . 'assets/js/sweetalert2.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorIcon', CSSM_PLUGIN_URL . 'assets/js/fontawesome-iconpicker.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorSlider', CSSM_PLUGIN_URL . 'assets/js/nouislider.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCountdown', CSSM_PLUGIN_URL . 'assets/js/jquery.countdown.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorDateTimePicker', CSSM_PLUGIN_URL . 'assets/js/jquery-ui-timepicker-addon.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorParticles', CSSM_PLUGIN_URL . 'assets/js/tsparticles.min.js', array('jquery'), CSSM_VERSION, true);

        wp_enqueue_script('vm_ultimateconfiguratorGrapick', CSSM_PLUGIN_URL . 'assets/js/grapick.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorParallax', CSSM_PLUGIN_URL . 'assets/js/jquery.paroller.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCircles', CSSM_PLUGIN_URL . 'assets/js/circles.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorFlipclock', CSSM_PLUGIN_URL . 'assets/js/flipclock.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCounterup', CSSM_PLUGIN_URL . 'assets/js/counterup.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorSwiperSlider', CSSM_PLUGIN_URL . 'assets/js/swiper.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorFront', CSSM_PLUGIN_URL . 'assets/js/front.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorStylizer', CSSM_PLUGIN_URL . 'assets/js/stylizer17.js', array('jquery', 'wp-i18n'), CSSM_VERSION, true);

        wp_localize_script('vm_ultimateconfiguratorStylizer', 'cssmTranslate', $translation_array);
        wp_localize_script('vm_ultimateconfiguratorStylizer', 'cssm_front_ajax_object',
            [
                'ajaxurl' => admin_url('admin-ajax.php'),
                'security' => wp_create_nonce('cssm-security-nonce'),
            ]
        );

        foreach (glob(CSSM_PLUGIN_DIR_PATH . 'assets/js/widgets/*.js') as $filename) {
            $widgetName = basename($filename, '.js');
            wp_enqueue_script('vm_ultimateconfigurator' . $widgetName, CSSM_PLUGIN_URL . 'assets/js/widgets/' . $widgetName . '.js', array('jquery'), CSSM_VERSION, true);
        }

    }

    public function enqueueScripts()
    {
        wp_enqueue_style('jquery-ui', CSSM_PLUGIN_URL . 'assets/css/jquery-ui.min.css');
        wp_enqueue_style('fontawesomeCss', CSSM_PLUGIN_URL . 'assets/css/all.min.css');
        wp_enqueue_style('hookCss', CSSM_PLUGIN_URL . 'assets/css/hooks.min.css', 'all');
        wp_enqueue_style('flipclockCss', CSSM_PLUGIN_URL . 'assets/css/flipclock.min.css');
        wp_enqueue_style('swiperCss', CSSM_PLUGIN_URL . 'assets/css/swiper.min.css');
        wp_enqueue_style('gridstackCss', CSSM_PLUGIN_URL . 'assets/css/gridstack.min.css');
        wp_enqueue_style('animateCssCss', CSSM_PLUGIN_URL . 'assets/css/animate.min.css', array(), CSSM_VERSION, 'all');

        wp_enqueue_script('jquery-ui-dialog');
        wp_enqueue_script('jquery-ui-draggable');
        wp_enqueue_script('jquery-ui-sortable');
        wp_enqueue_script('jquery-ui-droppable');

        wp_enqueue_script('vm_ultimateconfiguratorGridstack1', CSSM_PLUGIN_URL . 'assets/js/gridstack-poly.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorGridstack2', CSSM_PLUGIN_URL . 'assets/js/gridstack.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorGridstack3', CSSM_PLUGIN_URL . 'assets/js/gridstack.jQueryUI.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorAnijs', CSSM_PLUGIN_URL . 'assets/js/anijs-min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorEditor', CSSM_PLUGIN_URL . 'assets/js/summernote-lite.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCountdown', CSSM_PLUGIN_URL . 'assets/js/jquery.countdown.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorParticles', CSSM_PLUGIN_URL . 'assets/js/tsparticles.min.js', array('jquery'), CSSM_VERSION, true);

        wp_enqueue_script('vm_ultimateconfiguratorGrapick', CSSM_PLUGIN_URL . 'assets/js/grapick.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCircles', CSSM_PLUGIN_URL . 'assets/js/circles.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorFlipclock', CSSM_PLUGIN_URL . 'assets/js/flipclock.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorCounterup', CSSM_PLUGIN_URL . 'assets/js/counterup.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorSwiperSlider', CSSM_PLUGIN_URL . 'assets/js/swiper.min.js', array('jquery'), CSSM_VERSION, true);
        wp_enqueue_script('vm_ultimateconfiguratorFront', CSSM_PLUGIN_URL . 'assets/js/front.js', array('jquery'), CSSM_VERSION, true);

    }

    public function css_magician_settings_add_plugin_page()
    {
        add_menu_page(
            'Css Magician Settings',
            'Css Magician',
            'manage_options',
            'css-magician-settings',
            array($this, 'css_magician_settings_create_admin_page'),
            'dashicons-format-gallery'

        );
    }

    public function css_magician_settings_create_admin_page()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
        $results = $wpdb->get_results('SELECT * FROM ' . $table_name);
        $active_row = $wpdb->get_row('SELECT * FROM ' . $table_name . ' WHERE active=1');
        if (!$active_row) {
            $active_row = new stdClass();
            $active_row->id = 0;
            $active_row->ip = '';
            $active_row->display = 0;
            $active_row->active = 0;
        }

        ?>
		<div class="wrap css-magician-admin-settings">
			<h1><?php _e('Css Magician Settings', 'css-magician')?></h1>

			<form method="post">
			<input type="hidden" name="updated" value="true" />
			<table class="form-table">
			   	<tbody>
                        <tr>
                    		<th><label for="cssm_theme_name"><?php _e('Give a name to a theme', 'css-magician')?></label></th>
                    		<td><input name="cssm_theme_name" id="cssm_theme_name" type="text" value="" class="regular-text" />
							<button id="cssm_create_theme" type="button" class="button-secondary"><?php _e('Create a theme', 'css-magician')?>
							<span class="fas fa-spinner fa-spin" style="display:none;"></span>
                            </button><br>
                            <span class="description"><?php _e('Only use letters, numbers or underscore.', 'css-magician')?></span>
							</td>
                    	</tr>
                        <tr>
                    		<th><label for="cssm_select_id"><?php _e('Select a theme', 'css-magician')?></label></th>
                    		<td><select name="cssm_select_id" id="cssm_select_id">
							<option value="0">----------</option>
							<?php
foreach ($results as $theme) {
            $id = $theme->id;
            $name = $theme->name;
            ?>
							    <option value="<?php echo $id; ?>" <?php selected($active_row->id, $id, true);?>><?php echo $name; ?></option>
							<?php }
        ?>
                            </select>
                            <button id="cssm_delete_theme" type="button" class="button-secondary" style="color:#dd5151;border-color:#dd5151;" ><?php _e('Delete the selected theme', 'css-magician')?>
								<span class="fas fa-spinner fa-spin" style="display:none;"></span>
                                </button>
                            <br>
                            <span class="description"><?php _e('Choose a theme previously created to update his settings.', 'css-magician')?></span>
                        </td>
                    	    </tr>
						    <tr>
                    		    <th><label for="cssm_allowed_ips"><?php _e('Allowed IPs', 'css-magician')?></label></th>
                    		    <td><input name="cssm_allowed_ips" id="cssm_allowed_ips" type="text" value="<?php echo $active_row->ip; ?>" class="regular-text" />
							    <button id="cssm_getmyIP" type="button" class="button-secondary" ><?php _e('Add my IP', 'css-magician')?>
								<span class="fas fa-spinner fa-spin" style="display:none;"></span>
                                </button><br>
                                <span class="description"><?php _e('Click on "Add my IP" button, to automatically select your current IP.', 'css-magician')?></span><br>
                                <span class="description"><?php _e('The IPs have to be separated by a comma.', 'css-magician')?></span><br>
                                <span class="description"><?php _e('Only the IPs in that field will be autorized to access Css Magician stylizer in front office.', 'css-magician')?></span>

							    </td>
                    	    </tr>
						    <tr>
                    		    <th><label for="cssm_display_stylizer"><?php _e('Display Css Magician', 'css-magician')?></label></th>
                    		    <td><input name="cssm_display_stylizer" type="radio" value="0" <?php checked('0', $active_row->display);?> /><?php _e('No', 'css-magician')?>
                                <input name="cssm_display_stylizer" type="radio" value="1"  <?php checked('1', $active_row->display);?> /><?php _e('Yes', 'css-magician')?><br>
                                <span class="description"><?php _e('If validated the Css Magician stylizer is displayed for administrator with the allowed IP.', 'css-magician')?></span>

							    </td>
                    	    </tr>
						    <tr>
                    		    <th><label for="cssm_activate_stylizer"><?php _e('Active Css Magician', 'css-magician')?></label></th>
                    		    <td><input name="cssm_activate_stylizer" type="radio" value="0" <?php checked('0', $active_row->active);?> /><?php _e('No', 'css-magician')?>
							    <input name="cssm_activate_stylizer" type="radio" value="1" <?php checked('1', $active_row->active);?> /><?php _e('Yes', 'css-magician')?><br>
                                <span class="description"><?php _e('If Validated Css Magician is enabled for the selected theme.', 'css-magician')?></span><br>
                                <span class="description"><?php _e('If another theme is already activated, it will be disabled. Because only one theme can to be selected in the same time.', 'css-magician')?></span>

                            </td>
                    	    </tr>
                	    </tbody>
                    </table>
				    <p class="submit">
                        <button type="button" name="cssm_save_all_settings" id="cssm_save_all_settings" class="button button-primary"><?php _e('Save the settings of this Css Magician theme', 'css-magician')?>
					    <span class="fas fa-spinner fa-spin" style="display:none;"></span>
						</button>
                    </p>
			</form>
		</div>
	<?php }

    public function css_magician_settings_page_init()
    {
        include_once 'languages/js-translate.php';

        wp_enqueue_style('fontawesomeCss', CSSM_PLUGIN_URL . 'assets/css/all.min.css');
        wp_enqueue_style('sweetalert2', CSSM_PLUGIN_URL . 'assets/css/sweetalert2.min.css');

        wp_enqueue_script('cssm-admin-js', CSSM_PLUGIN_URL . 'assets/js/admin.min.js', array('jquery'));
        wp_localize_script('cssm-admin-js', 'cssm_admin_ajax_object',
            [
                'ajax_url' => admin_url('admin-ajax.php'),
                'security' => wp_create_nonce('cssm-security-nonce'),
            ]
        );
        wp_localize_script('cssm-admin-js', 'cssmTranslate', $translation_array);

        wp_enqueue_script('cssm-sweetalert2', CSSM_PLUGIN_URL . 'assets/js/sweetalert2.min.js', array('jquery'));
    }

}

$css_magician_settings = new CssMagicianSettings();
if (is_admin()) {
    include_once 'controllers/admin/cssm-admin-installdb.php';
    register_activation_hook(__FILE__, 'cssm_install');
}
