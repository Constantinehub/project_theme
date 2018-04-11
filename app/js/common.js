$(function() {

	$(".js_search, .js_search-close").on("click", function() {
		$(".header_search").toggleClass("search_active");
	});

	$(".fcarousel_box").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
	});

	$('.video_play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$(".reviews_box").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: false
	});

	$(".backtotop_btn").on('click', function() {
    $('html, body').animate({
        scrollTop: $("html").offset().top
    }, 500);
  });

});
