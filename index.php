<?php
while ( have_posts() ) : the_post();

	$ogp_img = get_template_directory_uri().'/assets/img/ogp/ogp.jpg';

	$pageArray = array(
		'title' => $post->post_title.' | イベント',
		'description' => '「'.$post->post_title.'」についてのイベント情報を掲載しています。',
		'keywords' => '',
		'image' => $ogp_img,
	);
?>
<?php get_header(); ?>
<!-- .l-main -->
<main class="l-main g">
	<article class="p-art">
		<header class="p-art_h">
			<div class="c-ttl c-ttlPageTtl">
				<h2>
					<span class="lg m-fs__pc_26 m-fs__sp_21"><span>イベント情報</span></span>
				</h2>
			</div>
		</header>
		<div class="p-art_c">
			<?php the_content(); ?>
		</div>
	</article>
	<aside class="l-aside"></aside>
</main>
<!-- /.l-main -->
<?php get_footer(); ?>
<?php
	endwhile;
?>