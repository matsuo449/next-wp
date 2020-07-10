<?php
//カスタム投稿読み込み
require_once locate_template("inc/add_post_type.php");
//管理画面系設定
require_once locate_template("inc/admin_custom.php");
//サイト表示系設定
require_once locate_template("inc/page_custom.php");
//サイト表示系設定
require_once locate_template("inc/amp_custom.php");
//php関数系
require_once locate_template("inc/php_functions.php");
// ショートコード
require_once locate_template("inc/shortcode.php");
// postデータをcontactform側にわたす
require_once locate_template("inc/cf7_formdata.php");
// カスタムダッシュボード
require_once locate_template("inc/dashbord.php");

require_once locate_template("inc/get_thumbnail.php");

// WP REST APIカスタマイズ用
// アイキャッチのURL含める
// function add_thumbnail_to_JSON() {
// register_rest_field(
//     ['item', 'useful', 'pr'],
//     'featured_image',
//     array('get_callback' => 'wp_get_image')
// );
// }
// function wp_get_image($object, $field_name, $request) {
// $feat_img_medium = wp_get_attachment_image_src($object['featured_media'], 'medium', true);
// $feat_img_full = wp_get_attachment_image_src($object['featured_media'], 'medium_large', true);
// return [
//     'src' => $feat_img_medium[0],
//     'src_full' => $feat_img_full[0],
//     'width' => $feat_img_medium[1],
//     'height' => $feat_img_medium[2]
// ];
// }
// add_action('rest_api_init', 'add_thumbnail_to_JSON');

//REST APIにアイキャッチ追加
add_action('rest_api_init', 'custom_wp_rest_api_post');
function custom_wp_rest_api_post() {
  register_rest_field('post',
    'featured_image',
    array(
      'get_callback' => 'rest_api_add_image',
      'update_callback' => null,
      'schema' => null,
    )
  );
}
 
function rest_api_add_image($object, $field_name, $request) {
  $feat_img_array = wp_get_attachment_image_src($object['featured_media'], 'large', true);
  return [
    'src' => $feat_img_array[0],
    'width' => $feat_img_array[1],
    'height' => $feat_img_array[2],
  ];
}