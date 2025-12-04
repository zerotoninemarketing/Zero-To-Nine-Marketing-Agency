<?php
/**
 * Zero To Nine Marketing Theme Functions
 * 
 * @package ZeroToNineMarketing
 * @version 1.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function ztn_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'ztn'),
        'footer' => __('Footer Menu', 'ztn'),
    ));
    
    // Add image sizes
    add_image_size('hero-image', 1200, 600, true);
    add_image_size('blog-thumbnail', 400, 250, true);
    add_image_size('client-logo', 200, 100, true);
}
add_action('after_setup_theme', 'ztn_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function ztn_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('ztn-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue Tailwind CSS
    wp_enqueue_style('tailwind-css', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', array(), '2.2.19');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('ztn-script', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Enqueue animations script
    wp_enqueue_script('ztn-animations', get_template_directory_uri() . '/assets/js/animations.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'ztn_scripts');

/**
 * Register Widget Areas
 */
function ztn_widgets_init() {
    register_sidebar(array(
        'name'          => __('Blog Sidebar', 'ztn'),
        'id'            => 'blog-sidebar',
        'description'   => __('Add widgets here to appear in your blog sidebar.', 'ztn'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Widgets', 'ztn'),
        'id'            => 'footer-widgets',
        'description'   => __('Add widgets here to appear in your footer.', 'ztn'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'ztn_widgets_init');

/**
 * Custom Post Types
 */
function ztn_custom_post_types() {
    // Case Studies
    register_post_type('case_study', array(
        'labels' => array(
            'name' => 'Case Studies',
            'singular_name' => 'Case Study',
            'add_new' => 'Add New Case Study',
            'add_new_item' => 'Add New Case Study',
            'edit_item' => 'Edit Case Study',
            'new_item' => 'New Case Study',
            'view_item' => 'View Case Study',
            'search_items' => 'Search Case Studies',
            'not_found' => 'No case studies found',
            'not_found_in_trash' => 'No case studies found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-chart-line',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'case-studies'),
    ));
    
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Testimonial',
            'edit_item' => 'Edit Testimonial',
            'new_item' => 'New Testimonial',
            'view_item' => 'View Testimonial',
            'search_items' => 'Search Testimonials',
            'not_found' => 'No testimonials found',
            'not_found_in_trash' => 'No testimonials found in trash'
        ),
        'public' => true,
        'has_archive' => false,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'ztn_custom_post_types');

/**
 * Custom Fields for Case Studies
 */
function ztn_case_study_meta_boxes() {
    add_meta_box(
        'case_study_details',
        'Case Study Details',
        'ztn_case_study_meta_box_callback',
        'case_study',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'ztn_case_study_meta_boxes');

function ztn_case_study_meta_box_callback($post) {
    wp_nonce_field('ztn_case_study_meta_box', 'ztn_case_study_meta_box_nonce');
    
    $client = get_post_meta($post->ID, '_case_study_client', true);
    $metrics = get_post_meta($post->ID, '_case_study_metrics', true);
    $results = get_post_meta($post->ID, '_case_study_results', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="case_study_client">Client Name</label></th>';
    echo '<td><input type="text" id="case_study_client" name="case_study_client" value="' . esc_attr($client) . '" size="50" /></td></tr>';
    echo '<tr><th><label for="case_study_metrics">Key Metrics</label></th>';
    echo '<td><textarea id="case_study_metrics" name="case_study_metrics" rows="3" cols="50">' . esc_textarea($metrics) . '</textarea></td></tr>';
    echo '<tr><th><label for="case_study_results">Results</label></th>';
    echo '<td><textarea id="case_study_results" name="case_study_results" rows="3" cols="50">' . esc_textarea($results) . '</textarea></td></tr>';
    echo '</table>';
}

function ztn_save_case_study_meta($post_id) {
    if (!isset($_POST['ztn_case_study_meta_box_nonce'])) return;
    if (!wp_verify_nonce($_POST['ztn_case_study_meta_box_nonce'], 'ztn_case_study_meta_box')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    if (isset($_POST['case_study_client'])) {
        update_post_meta($post_id, '_case_study_client', sanitize_text_field($_POST['case_study_client']));
    }
    if (isset($_POST['case_study_metrics'])) {
        update_post_meta($post_id, '_case_study_metrics', sanitize_textarea_field($_POST['case_study_metrics']));
    }
    if (isset($_POST['case_study_results'])) {
        update_post_meta($post_id, '_case_study_results', sanitize_textarea_field($_POST['case_study_results']));
    }
}
add_action('save_post', 'ztn_save_case_study_meta');

/**
 * Custom Fields for Testimonials
 */
function ztn_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial_details',
        'Testimonial Details',
        'ztn_testimonial_meta_box_callback',
        'testimonial',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'ztn_testimonial_meta_boxes');

function ztn_testimonial_meta_box_callback($post) {
    wp_nonce_field('ztn_testimonial_meta_box', 'ztn_testimonial_meta_box_nonce');
    
    $author = get_post_meta($post->ID, '_testimonial_author', true);
    $role = get_post_meta($post->ID, '_testimonial_role', true);
    $rating = get_post_meta($post->ID, '_testimonial_rating', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="testimonial_author">Author Name</label></th>';
    echo '<td><input type="text" id="testimonial_author" name="testimonial_author" value="' . esc_attr($author) . '" size="50" /></td></tr>';
    echo '<tr><th><label for="testimonial_role">Author Role/Company</label></th>';
    echo '<td><input type="text" id="testimonial_role" name="testimonial_role" value="' . esc_attr($role) . '" size="50" /></td></tr>';
    echo '<tr><th><label for="testimonial_rating">Rating (1-5)</label></th>';
    echo '<td><input type="number" id="testimonial_rating" name="testimonial_rating" value="' . esc_attr($rating) . '" min="1" max="5" /></td></tr>';
    echo '</table>';
}

function ztn_save_testimonial_meta($post_id) {
    if (!isset($_POST['ztn_testimonial_meta_box_nonce'])) return;
    if (!wp_verify_nonce($_POST['ztn_testimonial_meta_box_nonce'], 'ztn_testimonial_meta_box')) return;
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    if (isset($_POST['testimonial_author'])) {
        update_post_meta($post_id, '_testimonial_author', sanitize_text_field($_POST['testimonial_author']));
    }
    if (isset($_POST['testimonial_role'])) {
        update_post_meta($post_id, '_testimonial_role', sanitize_text_field($_POST['testimonial_role']));
    }
    if (isset($_POST['testimonial_rating'])) {
        update_post_meta($post_id, '_testimonial_rating', intval($_POST['testimonial_rating']));
    }
}
add_action('save_post', 'ztn_save_testimonial_meta');

/**
 * Customizer Settings
 */
function ztn_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('ztn_hero', array(
        'title' => __('Hero Section', 'ztn'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('ztn_hero_title', array(
        'default' => 'Dominate Search Results with AI-SEO',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('ztn_hero_title', array(
        'label' => __('Hero Title', 'ztn'),
        'section' => 'ztn_hero',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('ztn_hero_subtitle', array(
        'default' => 'Increase relevant traffic to your website and stay ahead of the curve in both traditional and AI-powered search.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('ztn_hero_subtitle', array(
        'label' => __('Hero Subtitle', 'ztn'),
        'section' => 'ztn_hero',
        'type' => 'textarea',
    ));
    
    // Contact Information
    $wp_customize->add_section('ztn_contact', array(
        'title' => __('Contact Information', 'ztn'),
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('ztn_phone', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('ztn_phone', array(
        'label' => __('Phone Number', 'ztn'),
        'section' => 'ztn_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('ztn_email', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('ztn_email', array(
        'label' => __('Email Address', 'ztn'),
        'section' => 'ztn_contact',
        'type' => 'email',
    ));
}
add_action('customize_register', 'ztn_customize_register');

/**
 * Helper Functions
 */
function ztn_get_client_logos() {
    return array(
        array(
            'name' => 'iOrders',
            'type' => 'Restaurant SaaS',
            'description' => 'Restaurant management software for Canada & US',
            'logo' => get_template_directory_uri() . '/assets/images/iorders-logo.png',
            'url' => 'https://www.iorders.ca/'
        ),
        array(
            'name' => 'South District Group',
            'type' => 'Debt Collection',
            'description' => 'Professional debt collection services',
            'logo' => get_template_directory_uri() . '/assets/images/south-district-logo.png',
            'url' => 'https://www.southdistrictgroup.com/'
        ),
        array(
            'name' => 'Excel Data Pro',
            'type' => 'B2B SaaS',
            'description' => 'Excel automation & data solutions',
            'logo' => get_template_directory_uri() . '/assets/images/excel-data-pro-logo.jpg',
            'url' => 'https://exceldatapro.com/'
        ),
        array(
            'name' => 'MSOffice Geek',
            'type' => 'Software Solutions',
            'description' => 'Microsoft Office optimization tools',
            'logo' => get_template_directory_uri() . '/assets/images/msoffice-geek-logo.webp',
            'url' => 'https://msofficegeek.com/'
        ),
        array(
            'name' => 'Ready Resume Templates',
            'type' => 'Content Business',
            'description' => 'Professional resume templates',
            'logo' => get_template_directory_uri() . '/assets/images/ready-resume-logo.png',
            'url' => 'https://readyresumetemplates.com/'
        ),
        array(
            'name' => 'Flight Path Travel',
            'type' => 'Travel Agency',
            'description' => 'International travel services',
            'logo' => get_template_directory_uri() . '/assets/images/flight-path-logo.png',
            'url' => 'https://www.flightpathtravel.in/'
        )
    );
}

function ztn_get_pricing_plans() {
    return array(
        array(
            'name' => 'Starter',
            'price' => '$550',
            'pages' => '15 Content Pages',
            'features' => array('Blog Posts & Service Pages', 'Backlink Building', 'Monthly Reporting'),
            'popular' => false
        ),
        array(
            'name' => 'Growth',
            'price' => '$850',
            'pages' => '25 Content Pages',
            'features' => array('Priority Content Creation', 'Advanced Backlink Strategy', 'Bi-weekly Reporting', 'Competitor Analysis'),
            'popular' => true
        ),
        array(
            'name' => 'Enterprise',
            'price' => '$1,699',
            'pages' => '50 Content Pages',
            'features' => array('Premium Content Strategy', 'High-Authority Backlinks', 'Weekly Reporting', 'Dedicated SEO Manager'),
            'popular' => false
        )
    );
}

/**
 * Remove WordPress version from head
 */
remove_action('wp_head', 'wp_generator');

/**
 * Add custom body classes
 */
function ztn_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'home-page';
    }
    if (is_page_template('page-blog.php')) {
        $classes[] = 'blog-page';
    }
    return $classes;
}
add_filter('body_class', 'ztn_body_classes');

/**
 * Custom excerpt length
 */
function ztn_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'ztn_excerpt_length');

/**
 * Custom excerpt more
 */
function ztn_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'ztn_excerpt_more');

/**
 * Default menu fallback
 */
function ztn_default_menu() {
    echo '<ul class="flex space-x-8">';
    echo '<li><a href="' . home_url('/') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Home</a></li>';
    echo '<li><a href="' . home_url('/services') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Services</a></li>';
    echo '<li><a href="' . home_url('/about') . '" class="text-gray-700 hover:text-brand-blue transition-colors">About</a></li>';
    echo '<li><a href="' . home_url('/case-studies') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Case Studies</a></li>';
    echo '<li><a href="' . home_url('/pricing') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Pricing</a></li>';
    echo '<li><a href="' . home_url('/blog') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Blog</a></li>';
    echo '<li><a href="' . home_url('/contact') . '" class="text-gray-700 hover:text-brand-blue transition-colors">Contact</a></li>';
    echo '</ul>';
}

/**
 * Default mobile menu fallback
 */
function ztn_default_mobile_menu() {
    echo '<ul class="space-y-1">';
    echo '<li><a href="' . home_url('/') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Home</a></li>';
    echo '<li><a href="' . home_url('/services') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Services</a></li>';
    echo '<li><a href="' . home_url('/about') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">About</a></li>';
    echo '<li><a href="' . home_url('/case-studies') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Case Studies</a></li>';
    echo '<li><a href="' . home_url('/pricing') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Pricing</a></li>';
    echo '<li><a href="' . home_url('/blog') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Blog</a></li>';
    echo '<li><a href="' . home_url('/contact') . '" class="block px-3 py-2 text-gray-700 hover:text-brand-blue transition-colors">Contact</a></li>';
    echo '</ul>';
}

/**
 * Ensure blog page shows all posts - override any WordPress reading settings
 */
function ztn_blog_query_override($query) {
    // Only affect the main query on blog page template
    if (!is_admin() && is_page_template('page-blog.php') && $query->is_main_query()) {
        $query->set('posts_per_page', -1);
        $query->set('nopaging', true);
    }
}
add_action('pre_get_posts', 'ztn_blog_query_override');
?>
