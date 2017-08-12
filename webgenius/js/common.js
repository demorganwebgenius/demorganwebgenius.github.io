$(function() {
	//Main-slider

	$(".main_slider .slider_wrap .owl-carousel").owlCarousel({
		responsive : {
					0 : {
						items : 1,
						autoplay: true,
						autoplayTimeout: 5000,
						nav: true,
						navText: ["<img src='img/left_arrow.png'>","<img src='img/right_arrow.png'>"],
						loop: true,
						dots: false
					}
				}
	});
	$(".slider_wrap .owl-theme .owl-nav .owl-next").hover(function() {
		var bgi = 'img/right_arrow_hover.png';
		$(this).css('background-image', 'url(' + bgi +')');
	},function() {
		$(this).css('background-image', 'none');
	});
	$(".slider_wrap .owl-theme .owl-nav .owl-prev").hover(function() {
		var bgi = 'img/left_arrow_hover.png';
		$(this).css('background-image', 'url(' + bgi +')');
	},function() {
		$(this).css('background-image', 'none');
	});
	$(".slider_wrap .owl-theme .plus").hover(function() {
		var bgi = 'img/plus_button_hover.png';
		$(this).attr('src', bgi);
	},function() {
		var bgi = 'img/plus_button.png';
		$(this).attr('src', bgi);
	});
	//Portfolio Overlay
	$(".s_portfolio .grid_wrap .overlay_rot").mouseover(function() {
		$(this).siblings('.overlay').show();
		var src = $(this).siblings('.item').attr("src");
		src = src.substr(0,26) + "_hover.png";
		$(this).siblings('.item').attr("src", src);
	});
	$('.s_portfolio .grid_wrap .overlay_rot').mouseout(function() {
		$(this).siblings('.overlay').hide();
		var src = $(this).siblings('.item').attr("src");
		src = src.substr(0,26) + ".png";
		$(this).siblings('.item').attr("src", src);
	});
	//Testimonials Slider
	$(".s_testimonials .slider_wrap .owl-carousel").owlCarousel({
		responsive : {
					0 : {
						items : 1,
						autoplay: true,
						autoplayTimeout: 5000,
						loop: true,
						dots: true,
						dotsData: true
					}
				}
	});
	//Ribbon Slider
		$(".s_ribbon .slider_wrap .owl-carousel").owlCarousel({
			responsive : {
						0 : {
							items : 1,
							autoplay: true,
							autoplayTimeout: 5000,
							loop: true,
							dots: true,
							dotsData: true
						}
					}
		});
	//Clients Slider
		$(".s_clients .slider_wrap .owl-carousel").owlCarousel({
			responsive : {
						0 : {
							items : 1,
							autoplay: true,
							autoplayTimeout: 5000,
							loop: true,
							dots: true,
							dotsData: true
						}
					}
		});
	//Clients logos hover
	$(".s_clients .s_clients_logo").hover(function() {
		var src = $(this).attr("src");
		src = src.substr(0,24) + "_hover.png";
		$(this).attr("src", src);
	}, function() {
		var src = $(this).attr("src");
		src = src.substr(0,24) + ".png";
		$(this).attr("src", src);
	});
	//Team Social Hover
	$(".s_team .photo").mouseover(function() {
		$(this).children('.overlay').show();
	});
	$('.s_team .photo').mouseout(function() {
		$(this).children('.overlay').hide();
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
