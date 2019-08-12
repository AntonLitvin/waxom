$(function() {


// swiper slider
var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


// toggle-button
$('.toggle-btn').on('click', function() {
	$(this).toggleClass('on');
	$('.main-menu').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768') {
		$('.main-menu').removeAttr('style');
		$('.toggle-btn').removeClass('on');
	}
});


// Scroll to block
$('.main-menu a').on('click', function () {

	var elementClick = $(this).attr('href');
	var destination = $(elementClick).offset().top;

	if ($(elementClick).length != 0 ) {
		$('html, body').animate({ scrollTop: destination - 60 }, 800);
	}

	$('.main-menu').removeAttr('style');
	$('.toggle-btn').removeClass('on');

	return false; 
});


// Fixed Header
$(window).scroll(function() {
	if($(this).scrollTop() >= 30) {
		$('.page-header').addClass('scroll');
	}
	else{
		$('.page-header').removeClass('scroll');
	}
});


// Isotope
 $('.isotope-grid').imagesLoaded (function() { // imagesLoaded - фиксит косяки изотопа
	var $grid = $('.isotope-grid');

	$grid.isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		percentPosition: true
	});

	$('#filters').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	$('#filters').each( function( i, buttonGroup ) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});
});


// Spincrement
var countShow = true;
var countbox = "#stats";
$(window).on("scroll load resize", function() {
	if(!countShow) return false;
	var w_top = $(window).scrollTop();
	var e_top = $(countbox).offset().top;
	var w_height = $(window).height();
	var d_height = $(document).height();
	var e_height = $(countbox).outerHeight();
	if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
		$(".spincrement").spincrement({
			thousandSeparator: "",
			duration: 3000
		});
		countShow = false;
	}
});


});