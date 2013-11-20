<?php get_header(); ?>

	<?php get_template_part( 'includes/featured', 'home' ); ?>

	<div id="quote">
		<h2>知多少</h2>
		<p>等的人，等待中花落知多少。经得起，岁月动摇。</p>
	</div>
	<!--end #quote-->

	<div id="content-area" class="clearfix">
		<div id="left-area">
			<div id="recent-images">
				<h3 class="main-title">最近的图片</h3>
				<a href="#" class="more">更多</a>
				<div class="clear"></div>
				<div id="image-slider-section">
					<div id="image-content" class="flexslider">
						<ul class="slides" id="image-content-ul">
							<li>
								<a href="#">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery8.png" alt="" />
									<span class="overlay"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery6.png" alt="" />
									<span class="overlay"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery3.png" alt="" />
									<span class="overlay"></span>
								</a>
							</li>
							<li>
								<a href="#">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery4.png" alt="" />
									<span class="overlay"></span>
								</a>
							</li>
						</ul>
						<!--end .slides-->
						<ul id="image-switcher" class="clearfix">
							<li class="active_image">
								<div class="image_image">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery8.png" alt="" />
									<span class="image_view"></span>
								</div>
							</li>
							<li>
								<div class="image_image">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery6.png" alt="" />
									<span class="image_view"></span>
								</div>
							</li>
							<li>
								<div class="image_image">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery3.png" alt="" />
									<span class="image_view"></span>
								</div>
							</li>
							<li>
								<div class="image_image">
									<img src="<?php echo get_template_directory_uri(); ?>/images/demoimg/gallery4.png" alt="" />
									<span class="image_view"></span>
								</div>
							</li>
						</ul>
						<!--end #image-switcher-->
					</div>
					<!--end #image-content-->
				</div>
				<!--end #image-slider-section-->
			</div>
			<!--end #recent-images-->

		</div>
		<!--end #left-area-->
	</div>
	<!--end #content-area-->

<?php get_footer(); ?>