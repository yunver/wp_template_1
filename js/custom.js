(function($){
	var $main_menu = $("ul.nav"),
		$featured_section = $("#featured_section"),
		$featured = $("#featured"),
		slider,
		slider_arrows_speed = 300,
		image_hover_view_speed = 300,
		$featured_controls = $featured_section.find("#switcher li"),
		$image_slider = $("#image-content"),
		$image_control_item = $("#image-switcher li"),
		$comment_form = jQuery("form#commentform"),
		$tabbed_container = $("#all-tabs"),
		container_width = $("#main-area .container").innerWidth(),
		$second_menu = $("#second-menu > ul.nav"),
		is_ie7 = $("html#ie7").length;

	$(document).ready(function() {
		$main_menu.superfish({
			delay: 300,                            // one second delay on mouseout
			animation: {opacity:"show", height:"show"},  // fade-in and slide-down animation
			speed: "fast",                          // faster animation speed
			autoArrows: true,                           // disable generation of arrow mark-up
			dropShadows: false                            // disable drop shadows
		});

		$("article.post, article.page").fitVids();

		if($featured.length) {
			slider_settings = {
				slideshow: true,
				before: function(slider) {
					$featured_controls.closest("#switcher").find("li").removeClass("active-slide").eq(slider.animatingTo).addClass("active-slide");
				},
				start: function(slider) {
					slider = slider;
				}
			}

			slider_settings.pauseOnHover = true;

			$featured.flexslider(slider_settings);
		}

		$("#featured_section, #image-slider-section").hover(function() {
			$(this).find(".flex-direction-nav .flex-prev").css({"display":"block", "opacity":0}).stop(true, true).animate({"left":"60px", "opacity":1}, slider_arrows_speed);
			$(this).find(".flex-direction-nav .flex-next").css({"display":"block", "opacity":0}).stop(true, true).animate({"right":"60px", "opacity":1}, slider_arrows_speed);
		}, function() {
			$(this).find(".flex-direction-nav .flex-prev").stop(true, true).animate({"left":"0", "opacity":0}, slider_arrows_speed);
			$(this).find(".flex-direction-nav .flex-next").stop(true, true).animate({"right":"0", "opacity":0}, slider_arrows_speed);
		});

		$featured_controls.hover(function() {
			$(this).addClass("switcher_hover");
		}, function() {
			$(this).removeClass("switcher_hover");
		});

		$featured_controls.click(function() {
			var $this_control = $(this),
				order = $this_control.prevAll("li").length;

			if($this_control.hasClass("active-slide")) return;

			$this_control.closest("#switcher").find("li").removeClass("active-slide");
			$this_control.addClass("active-slide");

			$featured.flexslider(order);

			return false;
		});

		$("#all-tabs li").hover(function() {
			$(this).addClass("tab_link_hover");
		}, function() {
			$(this).removeClass("tab_link_hover");
		});

		if($image_slider.length) {
			slider_settings = {
				slideshow: true,
				before: function(slider){
					$image_control_item.closest('#image-switcher').find('li').removeClass('active_image').eq( slider.animatingTo ).addClass('active_image');
				},
				start: function(slider) {
					image_slider = slider;
				}
			}

			slider_settings.pauseOnHover = true;

			$image_slider.flexslider(slider_settings);
		}

		$image_control_item.hover(function() {
			if(!$(this).hasClass("active_image")) {
				$(this).find(".image_view").css({"display":"block", "opacity":0}).stop(true, true).animate({opacity:1}, image_hover_view_speed);
			}
		}, function() {
			$(this).find(".image_view").stop(true, true).animate({opacity:0}, image_hover_view_speed);
		});

		$image_control_item.click(function() {
			var $this_control_item = $(this),
				order = $this_control_item.prevAll("li").length;

			if($this_control_item.hasClass("active_image")) return;

			$this_control_item.closest("#image-switcher").find("li").removeClass("active_image");
			$this_control_item.addClass("active_image");

			$image_slider.flexslider(order);

			return false;
		});

		$("#tab-controls a").click(function() {
			var $this_li = $(this).closest("li"),
				order = $this_li.prevAll("li").length,
				prev_active_order = $this_li.closest("ul").find("li.active").prevAll("li").length;

			if($this_li.hasClass("active")) return false;

			$this_li.closest("ul").find("li").removeClass("active");
			$this_li.addClass("active");

			$tabbed_container.find(">div").eq(prev_active_order).animate({opacity:0}, 500, function() {
				$(this).css("display", "none");
				$tabbed_container.find(">div").eq(order).css({"display":"block", "opacity":0}).animate({opacity:1}, 500);
			});

			return false;
		});

		$comment_form.find("input:text, textarea").each(function(index,domEle) {
			var $et_current_input = jQuery(domEle),
				$et_comment_label = $et_current_input.siblings("label"),
				et_comment_label_value = $et_current_input.siblings("label").text();
			if($et_comment_label.length) {
				$et_comment_label.hide();
				if($et_current_input.siblings("span.required")) {
					et_comment_label_value += $et_current_input.siblings("span.required").text();
					$et_current_input.siblings("span.required").hide();
				}
				$et_current_input.val(et_comment_label_value);
			}
		}).bind("focus", function() {
			var et_label_text = jQuery(this).siblings("label").text();
			if(jQuery(this).siblings("span.required").length) et_label_text += jQuery(this).siblings("span.required").text();
			if(jQuery(this).val() === et_label_text) jQuery(this).val("");
		}).bind("blur", function() {
			var et_label_text = jQuery(this).siblings("label").text();
			if(jQuery(this).siblings("span.required").length) et_label_text += jQuery(this).siblings("span.required").text();
			if(jQuery(this).val() === "") jQuery(this).val(et_label_text);
		});

		// remove placeholder text before form submission
		$comment_form.submit(function() {
			$comment_form.find("input:text, textarea").each(function(index,domEle) {
				var $et_current_input = jQuery(domEle),
					$et_comment_label = $et_current_input.siblings("label"),
					et_comment_label_value = $et_current_input.siblings("label").text();

				if($et_comment_label.length && $et_comment_label.is(":hidden")) {
					if($et_comment_label.text() == $et_current_input.val())
						$et_current_input.val("");
				}
			});
		});

		/* Header search this site input[type="text"] focus or blur */
		search_bar();
		function search_bar() {
			var $searchform = $("#main-header #search-form"),
				$searchinput = $searchform.find("#searchinput"),
				searchvalue = $searchinput.val();

			$searchinput.focus(function() {
				if (jQuery(this).val() === searchvalue) jQuery(this).val("");
			}).blur(function() {
				if (jQuery(this).val() === "") jQuery(this).val(searchvalue);
			});
		}

		$("#second-menu > ul.nav > li").each(function() {
			var $this_li = $(this),
				li_text = $this_li.find("> a").html();
			$this_li.find("> a").html('<span class="main_text">' + li_text + '</span>' + (!is_ie7 ? '<span class="menu_slide">' + li_text + '</span>' : ''));
		} );

		if(!is_ie7) {
			$("#second-menu > ul.nav > li > a").hover(function() {
				$(this).find("span.main_text").css({"display":"block", "opacity":0}).stop(true, true).animate({"marginTop":"-59px", "opacity":1}, 400);
			}, function() {
				$(this).find("span.main_text").stop(true, true).animate({"marginTop":"0"}, 400);
			});
		}

		duplicate_menu($("#second-menu ul.nav"), $("#secondary-menu .mobile_nav"), "category_mobile_menu", "et_mobile_menu");
		function duplicate_menu(menu, append_to, menu_id, menu_class) {
			var $cloned_nav;

			menu.clone().attr("id", menu_id).removeClass().attr("class", menu_class).appendTo(append_to);
			$cloned_nav = append_to.find('> ul');
			$cloned_nav.find('.menu_slide').remove();
			$cloned_nav.find('li:first').addClass('et_first_mobile_item');

			append_to.click( function(){
				if ( $(this).hasClass('closed') ){
					$(this).removeClass( 'closed' ).addClass( 'opened' );
					$cloned_nav.slideDown( 500 );
				} else {
					$(this).removeClass( 'opened' ).addClass( 'closed' );
					$cloned_nav.slideUp( 500 );
				}
				return false;
			} );

			append_to.find('a').click( function(event){
				event.stopPropagation();
			} );
		}
	});

	$(window).load(function() {
		columns_height_fix();
		$("span.menu_slide").css("display", "block");
		center_menu();
		$second_menu.css("visibility", "visible");
	});

	function center_menu(){
		var second_menu_width;
		second_menu_width = $second_menu.innerWidth() + 1;
		$second_menu.css({"width":second_menu_width, "float":"none", "margin":"0 auto"});
	}

	function columns_height_fix() {
		var featured_tab_min_height = 0,
			$featured_tab = $("#switcher .switcher-content"),
			footer_widget_min_height = 0,
			$footer_widget = $(".footer-widget");

		$featured_tab.css("height", "auto");
		$footer_widget.css("height", "auto");

		if(container_width < 440) return;

		$featured_tab.each(function() {
			var this_height = $(this).height();
			if(featured_tab_min_height < this_height) featured_tab_min_height = this_height;
		}).each(function() {
			$(this).css("height", featured_tab_min_height);
		});

		$footer_widget.each(function() {
			var this_height = $(this).height();
			if(footer_widget_min_height < this_height) footer_widget_min_height = this_height;
		}).each(function() {
			$(this).css("height", footer_widget_min_height);
		});
	}

	$(window).resize(function() {
		if(container_width != $("#main-area .container").innerWidth()) {
			container_width = $("#main-area .container").innerWidth();
			$second_menu.css({"width":"auto", "float":"left"});
			center_menu();
			columns_height_fix();
			//if(!$featured.is(":visible")) $featured.flexslider("pause");
		}
	});
})(jQuery)