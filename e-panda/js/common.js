$(function() {
	//Высота экрана
	$(".main_head").css("min-height", $(window).height());
	//Липкий навбар
	$(".navbar_wrap").sticky({topSpacing:0});      
	//Анимация текста хедера
	$(".main_head .logo_container").animated("fadeInDown", "fadeOutUp");
	$(".header_wrapper h1").animated("fadeIn", "fadeOut");
	$(".header_wrapper p").animated("fadeInUp", "fadeOutDown");
	//Товары
	$(".goods_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("#goods_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	//ScrollToId
	$(".main_navbar ul a").mPageScroll2id();

	$('#video_placeholder').click(function(){
    var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
    $(this).replaceWith(video);
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
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


