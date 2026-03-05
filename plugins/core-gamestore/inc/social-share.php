<?php 

function gamestore_social_share($url, $title) {
    $encoded_url = urlencode($url);
    $encoded_title = urlencode($title);

    $twitter_url = "https://twitter.com/intent/tweet?url={$encoded_url}&text={$encoded_title}";
    $facebook_url = "https://www.facebook.com/sharer/sharer.php?u={$encoded_url}";
    $pinterest_url = "https://pinterest.com/pin/create/button/?url={$encoded_url}&description={$encoded_title}";

    return "
        <div class='social-share-buttons'>
            <a href='{$twitter_url}' class='twiter-icon' target='_blank'>Share on Twitter</a>
            <a href='{$facebook_url}' class='facebook-icon' target='_blank'>Share on Facebook</a>
            <a href='{$pinterest_url}' class='pinteres-icon' target='_blank'>Share on Pinterest</a>
        </div>
    ";
}