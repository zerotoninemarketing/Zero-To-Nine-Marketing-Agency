<?php
/**
 * The template for displaying all single posts
 *
 * @package ZeroToNineMarketing
 */

get_header(); ?>

<main id="main" class="site-main">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class('max-w-4xl mx-auto'); ?>>
                <!-- Post Header -->
                <header class="entry-header mb-8">
                    <h1 class="entry-title text-4xl font-bold text-gray-900 mb-4">
                        <?php the_title(); ?>
                    </h1>
                    
                    <div class="entry-meta text-gray-600 mb-6">
                        <span class="posted-on">
                            <time class="entry-date published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                <?php echo get_the_date(); ?>
                            </time>
                        </span>
                        
                        <?php if (get_the_author()): ?>
                            <span class="byline"> by 
                                <span class="author vcard">
                                    <a class="url fn n" href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">
                                        <?php echo get_the_author(); ?>
                                    </a>
                                </span>
                            </span>
                        <?php endif; ?>
                        
                        <?php if (has_category()): ?>
                            <span class="cat-links"> in 
                                <?php the_category(', '); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </header>

                <!-- Featured Image (constrained size) -->
                <?php if (has_post_thumbnail()): ?>
                    <div class="entry-thumbnail mb-8">
                        <?php
                        // Use a reasonable size and constrain max height so it doesn't dominate the viewport
                        the_post_thumbnail(
                            'medium_large',
                            array(
                                'class' => 'w-full h-auto max-h-96 md:max-h-[28rem] object-contain rounded-lg shadow-lg mx-auto'
                            )
                        );
                        ?>
                    </div>
                <?php endif; ?>

                <!-- Post Content -->
                <div class="entry-content prose prose-lg max-w-none">
                    <?php
                    the_content();
                    
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'ztn'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <!-- Post Footer -->
                <footer class="entry-footer mt-8 pt-8 border-t border-gray-200">
                    <?php if (has_tag()): ?>
                        <div class="tags-links mb-4">
                            <span class="text-sm font-medium text-gray-700">Tags: </span>
                            <?php the_tags('', ', ', ''); ?>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Social Sharing -->
                    <div class="social-sharing">
                        <h4 class="text-sm font-medium text-gray-700 mb-2">Share this post:</h4>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" 
                               target="_blank" rel="noopener noreferrer" 
                               class="text-blue-600 hover:text-blue-800 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" 
                               target="_blank" rel="noopener noreferrer" 
                               class="text-blue-400 hover:text-blue-600 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode(get_permalink()); ?>" 
                               target="_blank" rel="noopener noreferrer" 
                               class="text-blue-700 hover:text-blue-900 transition-colors">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </article>

            <!-- Navigation to next/previous posts -->
            <nav class="post-navigation mt-12 pt-8 border-t border-gray-200">
                <div class="flex justify-between">
                    <?php
                    $prev_post = get_previous_post();
                    $next_post = get_next_post();
                    ?>
                    
                    <?php if ($prev_post): ?>
                        <div class="prev-post">
                            <a href="<?php echo get_permalink($prev_post->ID); ?>" class="flex items-center text-gray-600 hover:text-brand-blue transition-colors">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                <div>
                                    <div class="text-sm text-gray-500">Previous Post</div>
                                    <div class="font-medium"><?php echo get_the_title($prev_post->ID); ?></div>
                                </div>
                            </a>
                        </div>
                    <?php endif; ?>
                    
                    <?php if ($next_post): ?>
                        <div class="next-post">
                            <a href="<?php echo get_permalink($next_post->ID); ?>" class="flex items-center text-gray-600 hover:text-brand-blue transition-colors">
                                <div class="text-right">
                                    <div class="text-sm text-gray-500">Next Post</div>
                                    <div class="font-medium"><?php echo get_the_title($next_post->ID); ?></div>
                                </div>
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </nav>

            <!-- Related Posts -->
            <?php
            $related_posts = get_posts(array(
                'category__in' => wp_get_post_categories(get_the_ID()),
                'numberposts' => 3,
                'post__not_in' => array(get_the_ID())
            ));
            
            if ($related_posts):
            ?>
                <section class="related-posts mt-12 pt-8 border-t border-gray-200">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
                    <div class="grid md:grid-cols-3 gap-6">
                        <?php foreach ($related_posts as $related_post): ?>
                            <article class="card p-6">
                                <?php if (has_post_thumbnail($related_post->ID)): ?>
                                    <div class="mb-4">
                                        <a href="<?php echo get_permalink($related_post->ID); ?>">
                                            <?php echo get_the_post_thumbnail($related_post->ID, 'medium', array('class' => 'w-full h-48 object-cover rounded-lg')); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                                
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">
                                    <a href="<?php echo get_permalink($related_post->ID); ?>" class="hover:text-brand-blue transition-colors">
                                        <?php echo get_the_title($related_post->ID); ?>
                                    </a>
                                </h4>
                                
                                <p class="text-gray-600 text-sm mb-3">
                                    <?php echo wp_trim_words(get_the_excerpt($related_post->ID), 15); ?>
                                </p>
                                
                                <div class="text-xs text-gray-500">
                                    <?php echo get_the_date('', $related_post->ID); ?>
                                </div>
                            </article>
                        <?php endforeach; ?>
                    </div>
                </section>
            <?php endif; ?>

            <!-- Comments -->
            <?php
            if (comments_open() || get_comments_number()):
                comments_template();
            endif;
            ?>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
