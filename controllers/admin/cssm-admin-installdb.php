<?php
if ( ! defined( 'CSSM_VERSION' ) ) {
	die( '-1' );
}

function cssm_install() {
    global $wpdb;
    global $cssm_db_version;    

    $table_name = $wpdb->prefix . 'cssm_test';
    
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
        name tinytext NOT NULL,
        text text NOT NULL,
        url varchar(55) DEFAULT '' NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";
    
    $queries = [			
    "CREATE TABLE IF NOT EXISTS `" . $wpdb->prefix . "cssm_ultimateconfigurator_themes` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `id_shop` int(10) unsigned NOT NULL,
            `name` VARCHAR(100),
            `display` tinyint(1) unsigned NOT NULL DEFAULT '0',
            `active` tinyint(1) unsigned NOT NULL DEFAULT '0',
            `ip` VARCHAR(100),
            PRIMARY KEY (`id`,`id_shop`,`name`)
    ) $charset_collate",
    "CREATE TABLE IF NOT EXISTS `" . $wpdb->prefix . "cssm_ultimateconfigurator_themes_css` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `id_theme` int(10) unsigned NOT NULL,
            `css` LONGTEXT,
            `fonts` TEXT,
            `animation` LONGTEXT,
            `description` LONGTEXT,
            `date_add` datetime,
            `active` tinyint(1) unsigned NOT NULL DEFAULT '0',
            PRIMARY KEY (`id`,`id_theme`)
    ) $charset_collate",
    "CREATE TABLE IF NOT EXISTS `" . $wpdb->prefix . "cssm_ultimateconfigurator_block` (
                                `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `id_theme` int(10) unsigned NOT NULL,
            `id_block` VARCHAR(100),
            `what` VARCHAR(100),
            `whatClass` VARCHAR(100),
            `parent` TEXT,
            `where` VARCHAR(10),
            `style` TEXT,
            `id_lang` VARCHAR(5),
            `admin_block` LONGTEXT,
            `front_block` LONGTEXT,
            `publish` TINYINT(4) DEFAULT '0',
            `date_add` datetime,
            `date_upd` datetime,
            PRIMARY KEY (`id`,`id_theme`,`id_block`,`id_lang`)
    ) $charset_collate",
    "CREATE TABLE IF NOT EXISTS `" . $wpdb->prefix . "cssm_ultimateconfigurator_animator` (
            `id_scene` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `id_theme` int(10) unsigned NOT NULL,
            `name` VARCHAR(128) NOT NULL,
            `layer_timeline` LONGTEXT NOT NULL,
            `key_timeline` LONGTEXT NOT NULL,
             PRIMARY KEY (`id_scene`,`id_theme`)
    ) $charset_collate"
    ];    
    require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    foreach ( $queries as $sql ) {
        dbDelta( $sql );
    }
    add_option( 'cssm_db_version', $cssm_db_version ); 
  
}


