<?php
	$ogp_img = get_template_directory_uri().'/assets/img/ogp/ogp.png';

	$pageArray = array(
		'title' => 'ブログ',
		'description' => '田中ソウケンのブログ記事一覧を掲載しています。',
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
					<span class="lg m-fs__pc_26 m-fs__sp_21"><span>ブログ</span></span>
				</h2>
			</div>
		</header>
		<div class="p-art_c">
<?php
	if( have_posts() ) :
?>
			<div class="c-listBlog">
				<ul>
<?php
		while ( have_posts() ) : the_post();
			$cfs = array();
			$cfs['art_c'] = get_field('art_c');
			$cfs['setting'] = get_field('setting');

?>
					<li>
						<a href="<?php the_permalink(); ?>">
							<div class="img">
<?php
			if( $cfs['setting']['main-img'] ):
				$img_pc = wp_get_attachment_image_src( $cfs['setting']['main-img']['ID'], 'thumb_pc' );
				$img_pc_2 = wp_get_attachment_image_src( $cfs['setting']['main-img']['ID'], 'thumb_pc_2' );
				$img_sp = wp_get_attachment_image_src( $cfs['setting']['main-img']['ID'], 'thumb_sp' );
				$img_sp_2 = wp_get_attachment_image_src( $cfs['setting']['main-img']['ID'], 'thumb_sp_2' );
?>
								<img src="<?php echo get_template_directory_uri(); ?>/assets/img/common/1x1.png" width="<?= $img_pc[1] ?>" height="<?= $img_pc[2] ?>" data-src="<?= $img_pc[0] ?>" data-srcset="<?= $img_pc_2[0] ?> 2x" alt="" class="only_pc js-lazy">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/img/common/1x1.png" width="<?= $img_sp[1] ?>" height="<?= $img_sp[2] ?>" data-src="<?= $img_sp[0] ?>" data-srcset="<?= $img_sp_2[0] ?> 2x" alt="" class="only_sp js-lazy">
<?php
			endif;
?>
							</div>
							<div class="txtbox">
								<div class="ttl"><?= the_title() ?></div>
								<div class="btn c-btn">
									<span class="a"><span>詳細へ</span></span>
								</div>
							</div>
						</a>
					</li>
<?php
		endwhile;
?>
				</ul>
			</div>
<?php
	else :
?>
			<div class="txt c-txt m-ta__center">
				<p>表示できる記事がありません。</p>
			</div>
<?php
	endif;
?>
			<div class="c-listPaging">
				<?php wp_pagenavi(); ?>
			</div>
		</div>
	</article>
<?php get_sidebar(); ?>
</main>
<!-- /.l-main -->
<?php get_footer(); ?>