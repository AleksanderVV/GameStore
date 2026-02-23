<?php
/**
 * Plugin Name:       Blocks Gamestore
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blocks-gamestore
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'BLOCKS_GAMESTORE_PATH', plugin_dir_path( __FILE__ ) );

require_once(BLOCKS_GAMESTORE_PATH . 'blocks.php');

add_filter('block_categories_all', function ($categories) {
	return array_merge($categories, [
		[
			'slug' => 'gamestore',
			'title' => __( 'Gamestore', 'blocks-gamestore' ),
		]
	]);
});

function create_block_blocks_gamestore_block_init() {

	register_block_type( __DIR__ . "/build/block-header" );
	register_block_type( __DIR__ . "/build/block-hero" );
	register_block_type( __DIR__ . "/build/block-games-line", [
		'render_callback' => 'view_block_games_line',
	] );
	register_block_type( __DIR__ . "/build/block-recent-news", [
		'render_callback' => 'view_block_recent_news',
	] );
	register_block_type( __DIR__ . "/build/block-subscribe", [
		'render_callback' => 'view_block_subscribe',
	] );
}
add_action( 'init', 'create_block_blocks_gamestore_block_init' );
