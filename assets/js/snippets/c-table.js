(function($){
	$(function() {

		// table TheadCol
		if( $('.js-tableTheadCol, .p-blog table').length && $('.js-tableTheadCol thead').length ) {
			$('.js-tableTheadCol, .p-blog table').each(function(){
				var parent = $(this);
				parent.addClass('is-attr');
				var array = new Array();
				i=1;
				parent.find('thead th').each(function(){
					array[i] = $(this).text();
					i++;
				});
				parent.find('tbody tr').each(function(){
					i=1;
					max=0;
					$(this).find('td').each(function(){
						if(array[i]) {
							$(this).attr('data-thead', array[i]);
						} else{
							$(this).addClass('is-nottl');
						}
						i++;
					});
				});
			});
		}






	});



})(jQuery);