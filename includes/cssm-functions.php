<?php

function cssm_updatename() {
    $id_shop = get_current_blog_id();
    $vm_ultimateconfigurator_name =  sanitize_text_field($_POST['name']);
            if ($vm_ultimateconfigurator_name != "") {
                global $wpdb;
                $table_name = $wpdb->prefix . "cssm_ultimateconfigurator_themes";
                $wpdb->insert($table_name, array('id_shop' => $id_shop, 'name' => $vm_ultimateconfigurator_name, 'display' => 0, 'active' => 0, 'ip' =>'') );
                $lastid = $wpdb->insert_id;  
                echo $lastid;          
            }
    wp_die();
}

function cssm_getip(){
    $ip = '';
    if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
        //check ip from share internet
        $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
        //to check ip is pass from proxy
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
        $ip = $_SERVER['REMOTE_ADDR'];
        }
        echo $ip;
        wp_die();

}

add_action( 'wp_ajax_updatename', 'cssm_updatename' );
add_action( 'wp_ajax_getip', 'cssm_getip' );
