(function($){
	$(document).ready(function(){
		$('#main-slider').slick();

		$('.js-menu-item-parent a').click(function () {
			$(this).parent('.js-menu-item-parent').toggleClass('menu-item-active');
		});

		function carPriceFormat(el) {
			$(el).each(function () {
				var str = $(this).text();
				$(this).text(str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
			});
		}

		$(window).load(function () {
			carPriceFormat('.js-format-price');
		});

		$('.js-main-slider__slide__prod__plus').click(function() {
			$('.main-slider__slide__prod_active').removeClass('.main-slider__slide__prod_active');
			$(this).parent().toggleClass('main-slider__slide__prod_active');
		});
	});
})(jQuery);