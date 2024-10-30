<?php

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit();
}

function cssm_delete_plugin()
{
    global $wpdb;

    $wpdb->query(sprintf("DROP TABLE IF EXISTS %s",
        $wpdb->prefix . 'cssm_ultimateconfigurator'));
    $wpdb->query(sprintf("DROP TABLE IF EXISTS %s",
        $wpdb->prefix . 'cssm_ultimateconfigurator_themes'));
    $wpdb->query(sprintf("DROP TABLE IF EXISTS %s",
        $wpdb->prefix . 'cssm_ultimateconfigurator_themes_css'));
    $wpdb->query(sprintf("DROP TABLE IF EXISTS %s",
        $wpdb->prefix . 'cssm_ultimateconfigurator_block'));
    $wpdb->query(sprintf("DROP TABLE IF EXISTS %s",
        $wpdb->prefix . 'cssm_ultimateconfigurator_animator'));
}

cssm_delete_plugin();
