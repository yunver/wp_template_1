<?php
add_action('after_setup_theme', 'setup_theme');
if(!function_exists('setup_theme')) {
	function setup_theme() {
		/* 定义全局变量 */
		global $themename, $shortname, $store_options_in_one_row;
		$themename = 'Yunver';
		$shortname = 'yunver';
		$store_options_in_one_row = true;

		//require_once(TEMPLATEPATH . '/panel/core_functions.php'); //在后台添加panel模块
		add_filter('pre_option_link_manager_enabled', '__return_true'); //在admin显示链接模块
		load_theme_textdomain('Yunver', get_template_directory().'/lang');
		add_action('wp_enqueue_scripts', 'load_yunver_scripts'); //添加加载js文件函数
		add_action('wp_head', 'add_viewport_meta'); //添加支持响应式函数
	}
}

/* 加载js文件 */
function load_yunver_scripts() {
	if(!is_admin()) {
		$template_dir = get_template_directory_uri();

		wp_enqueue_script('superfish', $template_dir.'/js/superfish.js', array('jquery'), '1.0', true);
		wp_enqueue_script('flexslider', $template_dir.'/js/jquery.flexslider-min.js', array('jquery'), '1.0', true);
		wp_enqueue_script('fitvids', $template_dir.'/js/jquery.fitvids.js', array('jquery'), '1.0', true);
		wp_enqueue_script('custom_script', $template_dir.'/js/custom.js', array('jquery'), '1.0', true);
	}
}

/* 支持响应式 */
function add_viewport_meta() {
	echo '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />';
}
?>