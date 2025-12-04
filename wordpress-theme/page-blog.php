<?php
/**
 * Template Name: Blog Page
 * 
 * @package ZeroToNineMarketing
 */

get_header(); ?>

<main id="main" class="site-main">
    <!-- Blog Hero Section -->
    <section class="blog-hero bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Marketing Insights & Strategies</h1>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with our latest SEO tips, marketing strategies, and industry insights
            </p>
        </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <?php
            $blog_posts = new WP_Query(array(
                'post_type' => 'post',
                'posts_per_page' => -1, // Show ALL posts, no limit
                'post_status' => 'publish',
                'ignore_sticky_posts' => true, // Don't let sticky posts affect the count
                'orderby' => 'date',
                'order' => 'DESC'
            ));
            
            if ($blog_posts->have_posts()):
            ?>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <?php while ($blog_posts->have_posts()): $blog_posts->the_post(); ?>
                        <article class="blog-card group">
                            <a href="<?php the_permalink(); ?>" class="block">
                                <?php if (has_post_thumbnail()): ?>
                                    <div class="mb-4 overflow-hidden rounded-lg">
                                        <?php the_post_thumbnail('medium', array('class' => 'w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300')); ?>
                                    </div>
                                <?php endif; ?>
                                
                                <div class="flex-1">
                                    <h2 class="blog-title group-hover:text-brand-blue transition-colors">
                                        <?php the_title(); ?>
                                    </h2>
                                    
                                    <div class="blog-meta mb-3">
                                        <span class="text-sm text-gray-500">
                                            <?php echo get_the_date(); ?>
                                        </span>
                                        <?php if (has_category()): ?>
                                            <span class="text-sm text-gray-500"> • </span>
                                            <span class="text-sm text-brand-blue">
                                                <?php the_category(', '); ?>
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                    
                                    <p class="text-gray-600 text-sm leading-relaxed">
                                        <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                    </p>
                                </div>
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <?php if ($blog_posts->max_num_pages > 1): ?>
                    <nav class="pagination-wrapper text-center">
                        <?php
                        echo paginate_links(array(
                            'total' => $blog_posts->max_num_pages,
                            'current' => $paged,
                            'format' => '?paged=%#%',
                            'prev_text' => '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg> Previous',
                            'next_text' => 'Next <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>',
                            'type' => 'list',
                            'end_size' => 2,
                            'mid_size' => 1,
                        ));
                        ?>
                    </nav>
                <?php endif; ?>

            <?php else: ?>
                <div class="text-center py-12">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">No blog posts found</h2>
                    <p class="text-gray-600 mb-6">Check back soon for new content!</p>
                    <a href="<?php echo home_url('/'); ?>" class="btn-primary">
                        Back to Home
                    </a>
                </div>
            <?php endif; ?>
            
            <?php wp_reset_postdata(); ?>
        </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Insights
            </h2>
            <p class="text-xl text-blue-100 mb-8">
                Get weekly SEO tips, marketing strategies, and industry news delivered to your inbox
            </p>
            
            <form class="newsletter-form max-w-md mx-auto">
                <div class="flex flex-col sm:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
                        required
                    >
                    <button 
                        type="submit" 
                        class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Subscribe
                    </button>
                </div>
                <p class="text-sm text-blue-200 mt-3">
                    No spam, unsubscribe at any time.
                </p>
            </form>
        </div>
    </section>
</main>

<style>
/* Blog-specific styles */
.blog-hero {
    background: linear-gradient(120deg, #e0f7fa 0%, #fff 100%);
}

.blog-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    padding: 2rem;
    min-height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.blog-title {
    font-size: 1.1rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem 0;
    color: #222;
    text-decoration: none;
}

.blog-meta {
    font-size: 0.9rem;
    color: #888;
}

/* Pagination styles */
.pagination-wrapper .page-numbers {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    border-radius: 0.5rem;
    text-decoration: none;
    color: #6b7280;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    transition: all 0.2s ease;
}

.pagination-wrapper .page-numbers:hover,
.pagination-wrapper .page-numbers.current {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.pagination-wrapper .page-numbers.prev,
.pagination-wrapper .page-numbers.next {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
</style>

<?php get_footer(); ?>
