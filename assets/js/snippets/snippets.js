(function($){
	$(function() {

		/*
			ページ内スクロールリンク
		*/
		$('a[href="#"]').click(function() {
			return false;
		});
		$('a[href^=#]').not('a[href="#"]').click(function() {
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


		let scrTop = 0;
		const $window = $(window);
		const smoothScroll = function(el) {
			if(!$(el).length) return;
			let pos = el=="#PageTop" ? 0 : Math.floor($(el).offset().top-$("#Header").outerHeight());
			$("html, body").animate({scrollTop: pos});
		};








		/*
			アコーディオン

			[class]
				.js-accordion ... ターゲット
				.js-accordion__btn ... ボタン
				.js-accordion__parent ... ターゲットとボタンを内包
		*/
		if( $('.js-accordion').length ){
			$('.js-accordion__btn').click(function(){
				target = $(this).closest('.js-accordion__parent').find('.js-accordion');
				if( target.css('display') === 'block' ){
					target.stop().slideUp(300);
				}else{
					target.stop().slideDown(300);
				}
			});
		}


		/*
			ドロップダウン

			[class]
				.js-dropdown ... ターゲット
				.js-dropdown__btn ... ボタン
				.js-dropdown__parent ... ターゲットとボタンを内包
		*/
		if( $('.js-dropdown').length ){
			$('.js-dropdown').hide();
			$('.js-dropdown__btn').hover(function(){
				target = $(this).closest('.js-dropdown__parent').find('.js-dropdown');
				target.stop().slideDown(300);
			}, function(){
				target = $(this).closest('.js-dropdown__parent').find('.js-dropdown');
				target.stop().slideUp(300);
			});
		}



		/*
			ポップアップ

			[class]
				.js-popup ... ターゲット
				.js-popup__open ... オープンボタン
				.js-popup__close ... クローズボタン
		*/
		if( $('.js-popup').length ){
			elem = $('.js-popup');
			elem.append('<div class="js-popup__close"><span></span><span></span></div>');

			$('.js-popup__open').click(function(){
				elem.fadeIn(300).css("display","flex");
			});
			$('.js-popup__close').click(function(){
				elem.fadeOut(300);
			});
		}




		/*
			スクロールエフェクト（wow.js）

			ビューポートに入ったら自動的にアニメーション

			[class]
				.wow ... ターゲット
				.[action] ... アクション
			[option(html)]
				data-wow-duration="1.0s" ... アニメーションの時間
				data-wow-delay="0.3s" ... アニメーションがスタートする時間
				data-wow-offset="10" ... アニメーションがスタートする距離
				data-wow-iteration="1" ... アニメーションの繰り返し回数

			[action]
				bounce
				flash
				pulse
				rubberBand
				shake
				swing
				tada
				wobble
				jello
				bounceIn
				bounceInDown
				bounceInLeft
				bounceInRight
				bounceInUp
				bounceOut
				bounceOutDown
				bounceOutLeft
				bounceOutRight
				bounceOutUp
				fadeIn
				fadeInDown
				fadeInDownBig
				fadeInLeft
				fadeInLeftBig
				fadeInRight
				fadeInRightBig
				fadeInUp
				fadeInUpBig
				fadeOut
				fadeOutDown
				fadeOutDownBig
				fadeOutLeft
				fadeOutLeftBig
				fadeOutRight
				fadeOutRightBig
				fadeOutUp
				fadeOutUpBig
				flipInX
				flipInY
				flipOutX
				flipOutY
				lightSpeedIn
				lightSpeedOut
				rotateIn
				rotateInDownLeft
				rotateInDownRight
				rotateInUpLeft
				rotateInUpRight
				rotateOut
				rotateOutDownLeft
				rotateOutDownRight
				rotateOutUpLeft
				rotateOutUpRight
				hinge
				rollIn
				rollOut
				zoomIn
				zoomInDown
				zoomInLeft
				zoomInRight
				zoomInUp
				zoomOut
				zoomOutDown
				zoomOutLeft
				zoomOutRight
				zoomOutUp
				slideInDown
				slideInLeft
				slideInRight
				slideInUp
				slideOutDown
				slideOutLeft
				slideOutRight
				slideOutUp
		*/
		if( $('.js-wow').length ){
			wow = new WOW({
				mobile: true
			}).init();
		}



		/*
			スクロールエフェクト（scrollme）

			スクロール値に応じたアニメーション（コマ送り）

			[class]
				.scrollme ... ラッパー
				.animateme ... ターゲット
			[option]
				date-when=""
					enter ... コンテナがビューポートに入ったとき
					exit ... コンテナのボトムがビューポートに入ったとき
					view ... ビューポートに入った時から出る時まで
					span ... コンテナがビューポートに入った時からボトムが出るまで
				data-from="1" ... 開始時のポシション（0〜1）
				data-to="0" ... 終了時のポシション（0〜1）
				data-easing=""
					easeout ... ゆっくり終わる（デフォルト）
					easein ... ゆっくり始まる
					easeinout ... ゆっくり始まってゆっくり終わる
					linear ... イージングを利用しない（一定）
				data-opacity="1" ... 開始前の要素の透明度（0〜1）
				data-scale, data-scalex, data-scaley & data-scalez ... 開始前の要素の拡大や縮小度合い
				data-rotatex, data-rotatey & data-rotatez ... 開始前の要素の回転角度
				data-translatex, data-translatey & data-translatez ... 開始前の要素の移動位置
		*/



		/*
			パララックス（Rellax.js）

			視差効果（スクロールを遅らせたり早めたり）

			[class]
				.js-rellax .. ターゲット
			[option(html)]
				data-rellax-speed="4" ... スクロールスピード（-10〜10）
				data-rellax-percentage="0.5" ... パーセント（0〜1、0.5でセンタリング）
				data-rellax-zindex="5" ... 重なり
		*/
		if( $('.js-rellax').length ){
			var rellax = new Rellax('.rellax');
		}



		/*
			スライダー（SliderPro）

			[option]
				width //横幅を設定。%表示の場合は’’で囲んで設定する。
				height //高さの設定をします。
				responsive //レスポンシブの設定。trueかfalseで設定します。
				aspectRatio //縦横比の設定 初期:-1 ...-1以外に設定すると高さがアスペクト比を維持するための数値となります。
				imageScaleMode //画像のスケールモード(background-size的な) 初期:'cover' 選べる値'cover', 'contain', 'exact' and 'none'　
				centerImage //画像の中央表示をします。 初期:true
				autoHeight //スライダーの高さの調整します。 初期:false
				startSlide //スライダーをどの画像で始めるかを選択します。 初期:0
				shuffle //スライドをシャッフルして表示します。 初期:false
				orientation //スライダーの切り替わりが縦向きか横向きかを選択します。 初期:'horizontal' ...'vertical'
				forceSize //スライダーの幅を横幅いっぱいに設定します。 初期:'none' ... 'fullWidth', 'fullHeight' and 'none'
				loop //スライドがループします。 初期:true
				slideDistance //スライド間の距離(px)を設定します。 初期:10
				slideAnimationDuration //スライドのアニメーションの時間を設定します。 初期:700
				heightAnimationDuration //高さのアニメーションの時間を設定します。 初期:700
				visibleSize //表示しているスライドの前後のスライドを表示し見えるようにする 初期:'auto' ...%で指定
				breakpoints //ブレイクポイントの設定 初期:null
				fade //フェードを使用するか否か 初期:'false'
				fadeOutPreviousSlide //前のスライドがフェードアウトされた時に次のスライドがフェードインする 初期:true
				fadeDuration //フェードアニメーションの時間 初期:500
				autoplay //自動再生 初期:true
				autoplayDelay //自動再生の遅延/間隔の設定(ミリ秒) 初期:5000
				autoplayDirection //自動再生の場合にスライドの進む方向  初期:'normal' ...'backwards'
				autoplayOnHover //スライドにホバーした際のスライダーの設定(一時停止、ストップ,なし) 初期:'pause' ... 'stop','none'
				arrows //矢印ボタンの表示 初期:false
				fadeArrows //ホバー時に矢印ボタンを表示する 初期:true
				buttons //スライドのページャの表示をする 初期:true
				keyboard //キーボードでスライドを動かせるようにする 初期:true
				keyboardOnlyOnFocus //スライダーにフォーカスがあるときのみ、キーボード入力に応答するか否かの設定 初期:false
				touchSwipe //タッチスワイプをするか否か 初期:true
				touchSwipeThreshold //タッチスワイプによるスライドが動く最低限の値を設定 初期:50
				fadeCaption //キャプションをフェードさせるか否か 初期:true
				captionFadeDuration //キャプションのフェードアニメーション時間の設定 初期:500
				fullScreen //フルスクリーンボタンの設定 初期:false
				fadeFullScreen //ボタンをホバー時に表示する 初期:true
				waitForLayers //レイヤーが消えた後に次のスライドへ行く 初期:false
				autoScaleLayers //レイヤーが自動的にスケールする 初期:true
				autoScaleReference //レイヤーを縮小する必要がどのくらいかを決定するために、現在のスライド幅と比較される基準幅を設定する。 初期:-1
				smallSize //スライドのサイズがこのサイズ未満の場合、スモール版の画像を使用 初期:480
				mediumSize //スライドのサイズがこのサイズ未満の場合、ミディアム版の画像を使用 初期:768
				largeSize //スライドのサイズがこのサイズ未満の場合、ラージ版の画像を使用 初期:1024
				updateHash //新しいスライドが選択されたときにハッシュが更新されるか否か 初期:false
				reachVideoAction //映像の要素があるスライドが選択された時に映像のアクションを設定 初期:'none' ...  'playVideo' and 'none'
				leaveVideoAction //映像の要素があるスライドから移動するに映像のアクションを設定 初期:'pauseVideo' ... 'stopVideo', 'pauseVideo', 'removeVideo' and 'none'
				playVideoAction //映像の再生開始時にスライダーのアクションを設定 初期:'stopAutoplay' ... 'stopAutoplay' and 'none'
				pauseVideoAction //映像が一時停止されたときのスライダーのアクションを設定 初期:'none' ... 'startAutoplay' and 'none'
				endVideoAction //映像が終了したときのスライダーのアクションを設定 初期:'none' ... 'startAutoplay', 'nextSlide', 'replayVideo' and 'none'
				thumbnailWidth //サムネイルの幅の設定 初期:100
				thumbnailHeight //サムネイルの高さの設定 初期:80
				thumbnailsPosition //サムネイルの位置の設定 初期:'bottom' ... 'top', 'bottom', 'right' and 'left'
				thumbnailPointer //ポインタが選択されたサムネイルの表示をするかしないか 初期:false
				thumbnailArrows //サムネイルの矢印が有効になるかどうか 初期:false
				fadeThumbnailArrows //サムネイルの矢印がフェードインするかどうか 初期:true
				thumbnailTouchSwipe //サムネイルのタッチスワイプができるかどうか 初期:true

		*/

		// __topMV
		if( $('.slider-pro.__topMV').length ){
			$('.slider-pro.__topMV').sliderPro({
				width: "100%",//横幅
				height: 700,//高さ
				slideAnimationDuration: 1000,//アニメーションの時間
				autoplayDelay: 5000,//間隔の時間
				responsive: true,//レスポンシブ
				autoplayOnHover: 'none',//hover時
				buttons: true,//ナビゲーションボタン
				arrows: true,//prevnext矢印
				thumbnailWidth: 150,//サムネイルの横幅
				thumbnailHeight: 70,//サムネイルの縦幅
				thumbnailArrows: true,//サムネイルのprevnext矢印
				slideDistance: 0,//スライド同士の距離
				visibleSize: '100%',//前後のスライドを表示
				endVideoAction: 'startAutoplay',
				breakpoints: {
					480: {//表示方法を変えるサイズ
						thumbnailWidth: 110,
						thumbnailHeight: 40,
						height: 400
					},
					1200: {//表示方法を変えるサイズ
						height: 500
					}
				}
			});
		}

		// __animation
		if( $('.slider-pro.__animation').length ){
			$('.slider-pro.__animation').sliderPro({
				width: 600,//横幅
				height: 400,//高さ
				slideAnimationDuration: 1000,//アニメーションの時間
				autoplayDelay: 5000,//間隔の時間
				responsive: true,//レスポンシブ
				autoplayOnHover: 'none',//hover時
				buttons: true,//ナビゲーションボタン
				arrows: true,//prevnext矢印
				thumbnailWidth: 150,//サムネイルの横幅
				thumbnailHeight: 70,//サムネイルの縦幅
				thumbnailArrows: true,//サムネイルのprevnext矢印
				slideDistance: 0,//スライド同士の距離
				visibleSize: 600,//前後のスライドを表示
				endVideoAction: 'startAutoplay',
				breakpoints: {
					480: {//表示方法を変えるサイズ
						thumbnailWidth: 110,
						thumbnailHeight: 40,
						height: 400
					},
					1200: {//表示方法を変えるサイズ
						height: 500
					}
				}
			});
		}
		$('.slider-pro.__animation .sp-button').click(function(){
			return false;
		});



		// __imgSlider
		if( $('.slider-pro.__imgSlider').length ){
			$('.slider-pro.__imgSlider').sliderPro({
				width: 1200,//横幅
				height: 500,//高さ
				slideAnimationDuration: 1000,//アニメーションの時間
				autoplayDelay: 5000,//間隔の時間
				responsive: true,//レスポンシブ
				autoplayOnHover: 'none',//hover時
				buttons: false,//ナビゲーションボタン
				arrows: true,//prevnext矢印
				thumbnailWidth: 150,//サムネイルの横幅
				thumbnailHeight: 70,//サムネイルの縦幅
				thumbnailArrows: true,//サムネイルのprevnext矢印
				slideDistance: 0,//スライド同士の距離
				visibleSize: '100%',//前後のスライドを表示
				endVideoAction: 'startAutoplay',
				breakpoints: {
					480: {//表示方法を変えるサイズ
						thumbnailWidth: 110,
						thumbnailHeight: 40,
						height: 300
					},
					1200: {//表示方法を変えるサイズ
						height: 400
					}
				}
			});
		}

		// __carousel
		if( $('.slider-pro.__carousel').length ){
			$('.slider-pro.__carousel').sliderPro({
				width: 300,//横幅
				height: 300,//高さ
				slideAnimationDuration: 1000,//アニメーションの時間
				autoplayDelay: 5000,//間隔の時間
				responsive: true,
				autoplayOnHover: 'none',
				buttons: false,//ナビゲーションボタン
				arrows: true,
				slideDistance: 0,//スライド同士の距離
				visibleSize: '100%',//前後のスライドを表示
				endVideoAction: 'startAutoplay',
				breakpoints: {
					480: {//表示方法を変えるサイズ
						thumbnailWidth: 110,
						thumbnailHeight: 40
					},
					1200: {//表示方法を変えるサイズ
						height: 400
					}
				}
			});
		}







		$(window).on('load scroll resize', function(){

			var w = $(this);

			/*
				固定フッター

				[class]
					.js-fixedFooter ... 固定ターゲット
					.js-fixedFooter__parent ... ポジションターゲット
			*/

			if( $('.js-fixedFooter').length ){
				h = $('.js-fixedFooter').height();
				$('.js-fixedFooter__parent').height(h);
				if( w.scrollTop() + w.height() < $('.js-fixedFooter__parent').offset().top + $('.js-fixedFooter').height() ) {
					$('.js-fixedFooter').addClass('__fixed');
				}else{
					$('.js-fixedFooter').removeClass('__fixed');
				}
			}


			/*
				固定ヘッダー

				[class]
					.js-fixedHeader ... 固定ターゲット
					.js-fixedHeader__parent ... ポジションターゲット
			*/

			if( $('.js-fixedHeader').length ){
				h = $('.js-fixedHeader').height();
				$('.js-fixedHeader__parent').height(h);
				if( w.scrollTop() > $('.js-fixedHeader__parent').offset().top ) {
					$('.js-fixedHeader').addClass('__fixed');
				}else{
					$('.js-fixedHeader').removeClass('__fixed');
				}
			}



			/*
				固定タイトル

				[class]
					.js-fixedTitle ... 固定ターゲット
					.js-fixedTitle__parent ... ポジションターゲット
					.js-fixedTitle__w ... ラッパー
			*/

			if( $('.js-fixedTitle').length ){
				$('.js-fixedTitle').each(function(){
					elem = $(this);
					h = elem.height();
					parent = elem.closest('.js-fixedTitle__parent');
					parent_h = parent.height();
					elem_w = elem.closest('.js-fixedTitle__w');
					elem_w.height(h);
					if( w.scrollTop() > parent.offset().top && w.scrollTop() < parent.offset().top + parent_h ) {
						$(this).addClass('__fixed');
					}else{
						$(this).removeClass('__fixed');
					}
				});
			}








		});







		/*
			.c_sec
		*/

		// .c_secColumnC
		if( $('.c_secColumnC').length ){
			elem = $('.c_secColumnC');
			elem.find('._i').hover(function(){
				$(this).find('._c').slideDown(300);
			},function(){
				$(this).find('._c').slideUp(300);
			});
		}



		/*
			.c_xxx
		*/



		// .c_bgScroll
		win = $(window);

		if( $('.c_bgScroll').length ){
			$(window).scroll(function() {

				$('.c_bgScroll').each(function(index) {
					elem = $(this);
					offsetPositions = elem.offset();

						// この領域がブラウザに表示されている場合
						if ((win.scrollTop() + win.height()) > offsetPositions.top && ((offsetPositions.top + elem.height()) > win.scrollTop())) {
							var offsetY =  -((win.scrollTop() + win.height() - offsetPositions.top )/ 1.6);
							//var offsetY =  -(win.scrollTop()/ 17);
							var positions = 'center bottom ' + offsetY + 'px';
							elem.css('backgroundPosition', positions);
						}
				});
			});
		}






	});



})(jQuery);