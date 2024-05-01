(function($){
	$(function() {

		// form file
		if( $('.js-file').length ) {
			$('.js-file').on('change', function(){
				var file = $(this).prop('files')[0];
				parent = $(this).parents('.file--w');
				if (!($(this).children(".filename .name").length)) {
					parent.addClass('is-changed');
				}
				parent.find('.filename .name').html(file.name);
			});
			$('.js-file--reset').on('click', function(){
				parent = $(this).parents('.file--w');
				parent.removeClass('is-changed');
				parent.find('.js-file').val('');
				parent.find('.filename .name').html('');
			});
		}



	});



})(jQuery);