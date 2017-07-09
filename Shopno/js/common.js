$(function() {
	//Cup class switching
	// $('.main_header .cup_wrap .cup').click(function() {
	// 	if($(this).hasClass('blue_cup')) {	
	// 		$(this).addClass('orange_cup').removeClass('blue_cup');	
	// 	}
 //      else {	
 //        	$(this).addClass('blue_cup').removeClass('orange_cup');	
 //      }
	// });
	//Owl Carousel About Us
	$(".s_about .owl-carousel").owlCarousel({
		responsive : {
					0 : {
						items : 1,
						autoplay: true,
						autoplayTimeout: 5000,
						loop: true,
					}
				}
	});
	//Owl Carousel Reviews
	var owl = $('.s_reviews .owl-carousel');
	owl.owlCarousel({
		responsive : {
					0 : {
						items : 1,
						//autoplay: true,
						autoplayTimeout: 5000,
						loop: true,
					}
				}
	});
	//Img_descr content toggle
	owl.on('changed.owl.carousel',function(property){
	    var current = property.item.index;
	    var img_descr = $(property.target).find(".owl-item").eq(current).find("img").next();
	     $('#slide_text').html(img_descr.html());
	});
	//Img_descr nav buttons
	$(".s_reviews .nav_button_left").click(function () {
	    owl.trigger('prev.owl.carousel');
	});

	$(".s_reviews .nav_button_right").click(function () {
	    owl.trigger('next.owl.carousel');
	});

	//Show Comments
	$('.s_team .content_wrap .img_wrap').mouseover(function() {
		$(this).children('.img_descr').show();
	})
	;
	$('.s_team .content_wrap .img_wrap').mouseout(function() {
		$(this).children('.img_descr').hide();
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

	//Animation
	$(".header_text").animated("fadeIn", "fadeOut");
	$("section h2, section h3, .s_services .content_wrap, .s_team .content_wrap").animated("fadeInUp", "fadeOutUp");
	$(".s_about .slider, .s_reviews .slider, .main_footer .main_form").animated("fadeInLeft", "fadeOutLeft");
	$(".s_about .slider_text, .s_reviews .slide_textm, .main_footer .contact_map").animated("fadeInRight", "fadeOutRight");
	$(".s_works .content_wrap, .main_footer .social_wrap").animated("fadeInUp", "fadeOutUp");

});
