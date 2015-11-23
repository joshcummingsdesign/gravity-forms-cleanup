<?php
/*
Plugin Name: Gravity Forms Cleanup
Plugin URI:  http://www.joshcummingsdesign.com
Description: Create your own forms and pass data to Gravity Forms
Version:     1.0
Author:      Josh Cummings
Author URI:  http://www.joshcummingsdesign.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: gfcu
Domain Path: /languages
*/

/*****************************************
* Enqueue Scripts
/****************************************/

function gfcu_register_scripts() {

	wp_enqueue_script('main_js', plugin_dir_url( __FILE__ ) . 'js/main.js', array( 'jquery' ), null, true);

}
add_action( 'wp_enqueue_scripts', 'gfcu_register_scripts' );
