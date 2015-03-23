<?php
/*
 * Plugin Name: Customizer Widget Bug Fix
 * Plugin URI: http://reigelgallarde.me/programming/wordpress-customizer-widget-bug-fix
 * Description: Fixed for WordPress Customizer widget that instance is not available when you add a widget the first time without hitting Save and Publish button.
 * Author: Reigel Gallarde
 * Version: 0.1
 * Author URI: http://reigelgallarde.me
**/

function reigelgallarde_load_widgets_script() {
    wp_enqueue_script( 'admin_widget_bug_fix', plugins_url( 'widget-bug-fix.js', __FILE__ ), array( 'jquery' ) );
}
add_action( 'customize_controls_print_scripts', 'reigelgallarde_load_widgets_script' );
