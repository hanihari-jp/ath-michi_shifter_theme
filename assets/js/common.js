(function($){
	$(function() {

		$('a[href="#"]').click(function() {
			return false;
		});
		$('a[href^="#"]').not('a[href="#"]').on('click', function() {
			// スクロールの速度
			var speed = 400; // ミリ秒
			// アンカーの値取得
			var href= $(this).attr("href");
			// 移動先を取得
			var target = $(href == "#" || href == "" ? 'html' : href);
			// 移動先を数値で取得
			var position = target.offset().top;
			// スムーススクロール
			$('body,html').animate({scrollTop:position}, speed, 'swing');
			return false;
		});











	});


	$(window).on('load', function(){

		w = $(window).innerWidth();
		if(w < 768){


		$('.js-gNav').on('click', function(){
			if( $('.js-gNav_i').css('display') === 'block' ){
				$('.js-gNav_i').slideUp(200);
			}else{
				$('.js-gNav_i').slideDown(200);
			}
		});
		$('.js-gNav_close').on('click', function(){
			$('.js-gNav_i').slideUp(200);
		});



		}



	});




	$(window).on('load resize scroll', function(){



	});




})(jQuery);