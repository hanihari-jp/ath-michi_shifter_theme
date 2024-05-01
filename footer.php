<!-- footer -->
<footer>
	<!-- .l-footer -->
	<div class="l-footer g">
		<div class="l-footer_nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
			</ul>
		</div>
	</div>
	<!-- /.l-footer -->
	<!-- .l-copy -->
	<div class="l-copy g">
		<p>Copyright &copy; 田中ソウケン All Rights Reserved.</p>
	</div>
	<!-- /.l-copy -->
</footer>
<!-- /footer -->


</div>
<!-- /.l-wrapper -->



<script src="<?php echo get_template_directory_uri(); ?>/assets/js/basis/intersection-observer.js"></script>
<script>
	document.addEventListener('DOMContentLoaded', function() {
		var lazyImages = [].slice.call(document.querySelectorAll('.js-lazy'));

		if ( 'IntersectionObserver' in window ) {
			let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
						let lazyImage = entry.target;
						lazyImage.src = lazyImage.dataset.src;
						if (typeof lazyImage.dataset.srcset === 'undefined') {
						}else{
							lazyImage.srcset = lazyImage.dataset.srcset;
						}
						lazyImageObserver.unobserve(lazyImage);
					}
				});
			});

			lazyImages.forEach(function(lazyImage) {
				lazyImageObserver.observe(lazyImage);
			});

		} else {
			// Possibly fall back to a more compatible method here
		}
	});
</script>


<script src="<?php echo get_template_directory_uri(); ?>/assets/js/basis/jquery.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/common.js"></script>


<?php wp_footer(); ?>

</body>
</html>