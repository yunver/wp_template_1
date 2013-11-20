<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>韵味儿</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<link rel="stylesheet" href="<?php bloginfo( 'stylesheet_url' ); ?>" type="text/css" />
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
		<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.8.3.min.js"></script>
		<!--[if lt IE 9]>
		<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/html5.js"></script>
		<![endif]-->
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<header id="main-header">
			<div class="container clearfix">
				<div id="search">
					<?php get_search_form(); ?>
				</div>
				<!--end #search-->
			</div>
			<!--end .container-->
		</header>
		<!--end #main-header-->

		<div class="container">
			<div id="logo-area">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
					<img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" id="logo"/>
				</a>
			</div>
		</div>
		<!--end .container-->

		<div id="secondary-menu">
			<div class="container">
				<a href="#" class="mobile_nav closed">
					菜单<span></span>
					<ul id="category_mobile_menu" class="et_mobile_menu">
						<li id="" class="menu-item current-menu-item">
							<a href="index.html">
								<span class="main_text">首页</span>
							</a>
						</li>
						<li id="" class="menu-item">
							<a href="page.html"><span class="main_text">
								文章<span> »</span></span>
							</a>
							<ul class="sub-menu" style="display:none; visibility:hidden;">
								<li id="" class="menu-item">
									<a href="page.html">工作</a>
								</li>
								<li id="" class="menu-item">
									<a href="page.html">生活</a>
								</li>
								<li id="" class="menu-item">
									<a href="page.html">游记</a>
								</li>
							</ul>
						</li>
						<li id="" class="menu-item">
							<a href="page.html">
								<span class="main_text">画廊</span>
							</a>
						</li>
						<li id="" class="menu-item">
							<a href="page-full.html">
								<span class="main_text">关于</span>
							</a>
						</li>
						<li id="" class="menu-item">
							<a href="page-contact.html">
								<span class="main_text">联系我</span>
							</a>
						</li>
					</ul>
				</a>
				<nav id="second-menu" class="clearfix">
					<ul id="menu-categories" class="nav">
						<li id="" class="menu-item current-menu-item">
							<a href="index.html">首页</a>
						</li>
						<li id="" class="menu-item">
							<a href="page.html">文章</a>
							<ul class="sub-menu">
								<li id="" class="menu-item">
									<a href="page.html">工作</a>
								</li>
								<li id="" class="menu-item">
									<a href="page.html">生活</a>
								</li>
								<li id="" class="menu-item">
									<a href="page.html">游记</a>
								</li>
							</ul>
						</li>
						<li id="" class="menu-item">
							<a href="page.html">图片</a>
						</li>
						<li id="" class="menu-item">
							<a href="page-full.html">关于</a>
						</li>
						<li id="" class="menu-item">
							<a href="page-contact.html">联系我</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<!--end #secondary-menu-->

		<div id="main-area">
			<div class="container">