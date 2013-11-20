<div id="search-form">
	<form method="get" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<input type="text" value="<?php esc_attr_e( '搜索网站...', 'Yunver' ); ?>" name="s" id="searchinput" />
		<input type="image" src="<?php echo get_template_directory_uri(); ?>/images/search_btn.png" id="searchsubmit" />
	</form>
</div>