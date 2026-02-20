<?php 
// Popup View
function gamestore_footer_search_popup(){
  ?>
    <div class="popup-games-search-container">
        <span id="close-search"></span>
        <div class="search-container">
        <div class="search-bar wrapper">
            <h2 class="search-label">Search</h2>
            <input type="text" name="game-title" id="popup-search-input" placeholder="Search for Games" />
            <p class="search-popup-title">You might be interested</p>
        </div>
        <div class="search-results-wrapper">
            <div class="popup-search-results wrapper"></div>
        </div>
        </div>
    </div>
  <?php
}
add_action('wp_footer','gamestore_footer_search_popup');