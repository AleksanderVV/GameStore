<?php
function gamestore_styles() {
	wp_enqueue_style('gamestore-general', get_template_directory_uri() . '/assets/css/gamestore.css', [], wp_get_theme()->get( 'Version' ));
	wp_enqueue_script('gamestore-theme-related', get_template_directory_uri() . '/assets/js/gamestore-theme-related.js', [], wp_get_theme()->get( 'Version' ), true);

	//Swiper Slider
	wp_enqueue_style('swiper-bundle',get_template_directory_uri() . '/assets/css/swiper-bundle.min.css',[],wp_get_theme()->get( 'Version' ));
	wp_enqueue_script('swiper-bundle', get_template_directory_uri() . '/assets/js/swiper-bundle.min.js', [], wp_get_theme()->get( 'Version' ), true);
	
}
add_action( 'wp_enqueue_scripts', 'gamestore_styles' );

function gamestore_google_fonts() {

	$fonts = array(
		'Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700',
		'Urbanist:ital,wght@0,100..900;1,100..900',
	);

	if ( 'off' === _x( 'on', 'Google font: on or off', 'gamestore' ) ) {
		return '';
	}

	$family_query = implode( '&family=', $fonts );

	return 'https://fonts.googleapis.com/css2?family=' . $family_query . '&display=swap';
}

function gamestore_google_fonts_script() {
	wp_enqueue_style('gamestore-google-fonts', gamestore_google_fonts(), array(), '1.0.0' );
}

add_action( 'wp_enqueue_scripts', 'gamestore_google_fonts_script' );

// Load assets for the block editor.

function gamestore_gutenberg_styles() {
	wp_enqueue_style('gamestore-google-fonts', gamestore_google_fonts(), array(), '1.0.0' );
	
	if(is_admin()){
		add_editor_style('/assets/css/editor-style.css');
		// add_editor_style('/assets/css/woo-cart.css');
		wp_enqueue_style('gamestore-editor-style',get_template_directory_uri() . '/assets/css/editor-style.css',['gamestore-google-fonts'],wp_get_theme()->get( 'Version' ));
		// wp_enqueue_style('woo-cart-editor-style',get_template_directory_uri() . '/assets/css/woo-cart.css',[],wp_get_theme()->get( 'Version' ));
	  }
}
add_action( 'enqueue_block_editor_assets', 'gamestore_gutenberg_styles' );