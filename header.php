<?php
	global $pageArray;
?>
<!DOCTYPE HTML>
<html lang="ja">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta charset="utf-8">
<title><?= $pageArray['title'] ?> | <?= get_bloginfo('description') ?></title>
<meta name="description" content="<?= $pageArray['description'] ?>">
<meta name="keywords" content="<?= $pageArray['keywords'] ?>">
<meta name="format-detection" content="telephone=no">

<!--link href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css" rel="stylesheet" type="text/css"-->
<link href="<?php echo get_template_directory_uri(); ?>/assets/css/style-sp.css" media="screen and (max-width:767px)" rel="stylesheet" type="text/css">
<link href="<?php echo get_template_directory_uri(); ?>/assets/css/style-pc.css" media="screen and (min-width:768px)" rel="stylesheet" type="text/css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet">
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/basis/html5.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/basis/rem.min.js"></script>
<![endif]-->

<!-- ogp -->
<meta property="og:title" content="<?= $pageArray['title'] ?>">
<meta property="og:type" content="website">
<meta property="og:url" content="<?= home_url() ?>">
<meta property="og:image" content="<?= $pageArray['image'] ?>">
<meta property="og:site_name" content="<?= get_bloginfo('description') ?>">
<meta property="og:description" content="<?= $pageArray['description'] ?>">
<!-- facebook -->
<meta property="fb:app_id" content="">
<!-- twitter -->
<meta name="twitter:card" content="summary_large_image">
<!-- /ogp -->





<?php wp_head(); ?>
</head>

<body>
<!-- .l-wrapper -->
<div class="l-wrapper w">
<!-- header -->
<header id="header">
	<!-- .l-header -->
	<div class="l-header g">
		<div class="l-header_logo">
			<h1 class="h">
				<a href="/">Shifter Sample</a>
			</h1>
		</div>
	</div>
	<!-- /.l-header -->
	<!-- .l-gNav -->
	<nav class="l-gNav js-gNav g">
		<div class="l-gNav_i js-gNav_i">
			<ul class="t-fntGoogle">
				<li><a href="/">Home</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
				<li><a href="/">Page</a></li>
			</ul>
			<div class="l-gNav_close js-gNav_close"></div>
		</div>
		<div class="l-gNav_btn">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</nav>
	<!-- /.l-gNav -->
</header>
<!-- /header -->