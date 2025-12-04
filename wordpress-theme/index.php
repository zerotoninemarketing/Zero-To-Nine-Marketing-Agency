<?php
/**
 * The main template file
 *
 * @package ZeroToNineMarketing
 */

get_header(); ?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="hero-section relative isolate overflow-hidden">
        <!-- Background Graphics -->
        <div class="hero-bg"></div>
        
        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
                        <span class="text-brand-blue">Dominate Search Results</span> 
                        <span class="text-gray-900">with AI-SEO</span>
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        <?php echo get_theme_mod('ztn_hero_subtitle', 'Increase relevant traffic to your website and stay ahead of the curve in both traditional and AI-powered search. We optimize for Google Search Experience, ChatGPT ranking, and emerging AI answer engines.'); ?>
                    </p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <a href="<?php echo home_url('/contact'); ?>" class="btn-primary">
                            Get Free SEO Audit
                        </a>
                        <a href="<?php echo home_url('/case-studies'); ?>" class="btn-secondary">
                            View Case Studies <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                <!-- Animated Growth Chart -->
                <div class="relative h-[400px] bg-white rounded-2xl shadow-xl p-6">
                    <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
                    <!-- Grid Lines -->
                    <div class="absolute inset-x-6 inset-y-12 grid grid-rows-4 gap-0">
                        <?php for ($i = 0; $i < 5; $i++): ?>
                            <div class="border-t border-gray-100"></div>
                        <?php endfor; ?>
                    </div>
                    <!-- Y-axis labels -->
                    <div class="absolute left-0 top-12 h-[calc(100%-48px)] flex flex-col justify-between">
                        <?php foreach ([100, 75, 50, 25, 0] as $value): ?>
                            <span class="text-sm text-gray-500"><?php echo $value; ?>%</span>
                        <?php endforeach; ?>
                    </div>
                    <!-- Growth Line -->
                    <div class="absolute bottom-12 left-12 right-6 h-[calc(100%-48px)]">
                        <svg class="w-full h-full" preserveAspectRatio="none">
                            <path
                                d="M0 336 C 100 300, 200 100, 400 50"
                                class="stroke-brand-cyan stroke-2 fill-none chart-path"
                            />
                        </svg>
                        <!-- Gradient Fill -->
                        <div class="absolute inset-0 bg-gradient-to-t from-brand-cyan/10 to-transparent" style="clip-path: polygon(0 100%, 0 80%, 25% 60%, 50% 30%, 100% 15%, 100% 100%)"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Google Search Console Results -->
    <section class="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Our SEO Results</h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    We've generated millions of impressions and helped clients dominate search results
                </p>
            </div>
            
            <!-- GSC Screenshots -->
            <div class="card p-8 mb-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Google Search Console Results
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- GSC Performance Overview -->
                    <div class="bg-gray-50 rounded-lg p-6">
                        <h4 class="font-semibold text-gray-900 mb-4 text-center">Performance Overview</h4>
                        <div class="bg-white rounded-lg p-4">
                        <?php 
                        $gsc_performance = get_template_directory_uri() . '/assets/images/gsc-performance.jpg';
                        if (file_exists(get_template_directory() . '/assets/images/gsc-performance.jpg')): ?>
                            <img 
                                src="<?php echo $gsc_performance; ?>" 
                                alt="Google Search Console Performance Overview"
                                class="w-full h-auto rounded-lg shadow-sm"
                            />
                        <?php else: ?>
                            <div class="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-sm flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <span class="text-blue-600 font-medium">GSC Performance</span>
                                    <p class="text-xs text-blue-500 mt-1">Upload gsc-performance.jpg</p>
                                </div>
                            </div>
                        <?php endif; ?>
                        </div>
                    </div>
                    
                    <!-- GSC Search Analytics -->
                    <div class="bg-gray-50 rounded-lg p-6">
                        <h4 class="font-semibold text-gray-900 mb-4 text-center">Search Analytics</h4>
                        <div class="bg-white rounded-lg p-4">
                        <?php 
                        $gsc_analytics = get_template_directory_uri() . '/assets/images/gsc-analytics.jpg';
                        if (file_exists(get_template_directory() . '/assets/images/gsc-analytics.jpg')): ?>
                            <img 
                                src="<?php echo $gsc_analytics; ?>" 
                                alt="Google Search Console Search Analytics"
                                class="w-full h-auto rounded-lg shadow-sm"
                            />
                        <?php else: ?>
                            <div class="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-sm flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-12 h-12 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <span class="text-green-600 font-medium">GSC Analytics</span>
                                    <p class="text-xs text-green-500 mt-1">Upload gsc-analytics.jpg</p>
                                </div>
                            </div>
                        <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Metrics Section -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="card p-8 text-center">
                    <div class="text-4xl font-bold text-blue-600 mb-2">18.8M+</div>
                    <div class="text-lg font-semibold text-gray-900 mb-2">Total Impressions</div>
                    <div class="text-sm text-gray-600">Generated across one single client campaign</div>
                    <div class="text-xs text-gray-500 mt-2">Last 12 months</div>
                </div>
                
                <div class="card p-8 text-center">
                    <div class="text-4xl font-bold text-green-600 mb-2">4.5M+</div>
                    <div class="text-lg font-semibold text-gray-900 mb-2">Recent Impressions</div>
                    <div class="text-sm text-gray-600">Accelerated growth for one of our clients in recent months</div>
                    <div class="text-xs text-gray-500 mt-2">Last 3 months</div>
                </div>
            </div>
            
            <!-- Authority Proof Section -->
            <div class="card p-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Featured Backlinks & Authority
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">H</span>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">HubSpot</p>
                            <p class="text-sm text-gray-600">MSOffice Geek featured</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">F</span>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Foretec DS</p>
                            <p class="text-sm text-gray-600">MSOffice Geek coverage</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">E</span>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Excel Data Pro</p>
                            <p class="text-sm text-gray-600">Domain Authority 20+</p>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">50+</span>
                        </div>
                        <div>
                            <p class="font-semibold text-gray-900">Client Success</p>
                            <p class="text-sm text-gray-600">Across 15+ industries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Performance Marketing Section -->
    <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Performance Marketing Excellence
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Beyond SEO, we deliver exceptional results through targeted paid advertising campaigns and Google Ads Performance
                </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Meta Ads Performance</h3>
                    <div class="space-y-4 mb-6">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Average CTR</span>
                            <span class="font-semibold text-green-600">3.2%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Conversion Rate</span>
                            <span class="font-semibold text-blue-600">8.5%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">ROAS</span>
                            <span class="font-semibold text-purple-600">4.2x</span>
                        </div>
                    </div>
                    
                    <!-- Meta Ads Results -->
                    <div class="bg-white rounded-lg p-4">
                        <div class="w-full h-48 bg-gray-200 rounded-lg shadow-sm flex items-center justify-center">
                            <span class="text-gray-500">Meta Ads Dashboard Screenshot</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Google Ads Performance</h3>
                    <div class="space-y-4 mb-6">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Quality Score</span>
                            <span class="font-semibold text-green-600">8.7/10</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Click-Through Rate</span>
                            <span class="font-semibold text-blue-600">4.1%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Cost per Conversion</span>
                            <span class="font-semibold text-purple-600">$24.50</span>
                        </div>
                    </div>
                    
                    <!-- Google Ads Results -->
                    <div class="bg-white rounded-lg p-4">
                        <div class="w-full h-48 bg-gray-200 rounded-lg shadow-sm flex items-center justify-center">
                            <span class="text-gray-500">Google Ads Dashboard Screenshot</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center">
                <p class="text-lg text-gray-600 mb-6">
                    Our performance marketing campaigns consistently deliver exceptional ROI and measurable business growth
                </p>
                <a href="<?php echo home_url('/services/performance-marketing'); ?>" class="btn-primary">
                    Learn More About Performance Marketing
                    <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Trusted by Brands -->
    <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Trusted by Leading Brands
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    We've helped businesses across industries achieve remarkable growth through strategic SEO
                </p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                <?php foreach (ztn_get_client_logos() as $brand): ?>
                    <div class="text-center group flex flex-col items-center">
                        <!-- Clickable Client Logo -->
                        <?php 
                        $logo_path = get_template_directory() . '/assets/images/' . basename($brand['logo']);
                        $logo_url = get_template_directory_uri() . '/assets/images/' . basename($brand['logo']);
                        if (file_exists($logo_path)): ?>
                            <a 
                                href="<?php echo esc_url($brand['url']); ?>" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="block w-24 h-16 mb-3 group-hover:scale-105 transition-transform flex items-center justify-center"
                                title="<?php echo esc_attr('Visit ' . $brand['name'] . ' website'); ?>"
                            >
                                <img 
                                    src="<?php echo esc_url($logo_url); ?>" 
                                    alt="<?php echo esc_attr($brand['name'] . ' logo'); ?>"
                                    class="max-w-full max-h-full object-contain"
                                />
                            </a>
                        <?php else: ?>
                            <a 
                                href="<?php echo esc_url($brand['url']); ?>" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                class="block w-24 h-16 mb-3 group-hover:scale-105 transition-transform flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"
                                title="<?php echo esc_attr('Visit ' . $brand['name'] . ' website'); ?>"
                            >
                                <div class="text-center">
                                    <div class="text-white font-bold text-xs leading-tight">
                                        <?php echo esc_html($brand['name']); ?>
                                    </div>
                                    <div class="text-white text-xs opacity-75 mt-1">
                                        Logo
                                    </div>
                                </div>
                            </a>
                        <?php endif; ?>
                        <p class="text-sm font-medium text-gray-900 mb-1 text-center"><?php echo esc_html($brand['name']); ?></p>
                        <p class="text-xs text-gray-500 mb-1 text-center"><?php echo esc_html($brand['type']); ?></p>
                        <p class="text-xs text-gray-400 leading-tight text-center"><?php echo esc_html($brand['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- SEO Case Studies -->
    <section class="section-padding section-bg-gray">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    SEO Success Stories
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Real results from businesses that transformed their online presence with our AI-optimized Content and Google Search Experience Optimization strategies
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $case_studies = array(
                    array(
                        'title' => 'E-commerce SEO',
                        'client' => 'iOrders',
                        'metrics' => array(
                            array('label' => 'Organic Traffic', 'value' => '620%', 'color' => 'text-green-600'),
                            array('label' => 'Monthly Sales', 'value' => '467%', 'color' => 'text-blue-600'),
                            array('label' => 'Keyword Rankings', 'value' => 'Top 10', 'color' => 'text-purple-600')
                        ),
                        'description' => 'Comprehensive SEO strategy including technical optimization, content creation, and link building.'
                    ),
                    array(
                        'title' => 'Local SEO',
                        'client' => 'South District',
                        'metrics' => array(
                            array('label' => 'Local Rankings', 'value' => 'Top 3', 'color' => 'text-green-600'),
                            array('label' => 'Online Orders', 'value' => '380%', 'color' => 'text-blue-600'),
                            array('label' => 'Google My Business', 'value' => 'Optimized', 'color' => 'text-purple-600')
                        ),
                        'description' => 'Local SEO optimization with Google My Business management and citation building.'
                    ),
                    array(
                        'title' => 'B2B SaaS SEO',
                        'client' => 'Excel Data Pro',
                        'metrics' => array(
                            array('label' => 'HubSpot Backlink', 'value' => 'Achieved', 'color' => 'text-green-600'),
                            array('label' => 'Organic Traffic', 'value' => '450%', 'color' => 'text-blue-600'),
                            array('label' => 'Lead Generation', 'value' => '300%', 'color' => 'text-purple-600')
                        ),
                        'description' => 'B2B content strategy with high-authority backlink building and technical SEO.'
                    )
                );
                
                foreach ($case_studies as $case_study):
                ?>
                    <div class="card p-6">
                        <div class="mb-4">
                            <h3 class="text-xl font-semibold text-gray-900 mb-1"><?php echo esc_html($case_study['title']); ?></h3>
                            <p class="text-sm text-gray-500"><?php echo esc_html($case_study['client']); ?></p>
                        </div>
                        
                        <div class="space-y-3 mb-4">
                            <?php foreach ($case_study['metrics'] as $metric): ?>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-600"><?php echo esc_html($metric['label']); ?>:</span>
                                    <span class="font-semibold <?php echo esc_attr($metric['color']); ?>"><?php echo esc_html($metric['value']); ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                        
                        <p class="text-sm text-gray-600"><?php echo esc_html($case_study['description']); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
            
            <div class="text-center mt-8">
                <a href="<?php echo home_url('/case-studies'); ?>" class="btn-secondary">
                    View All Case Studies
                    <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Overview -->
    <section class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                    Transparent SEO Pricing
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                    Choose the plan that fits your business needs. All plans include content creation, optimization, and backlink building.
                </p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-8">
                <?php foreach (ztn_get_pricing_plans() as $plan): ?>
                    <div class="card p-8 relative <?php echo $plan['popular'] ? 'border-blue-500 transform scale-105' : 'border-gray-200'; ?>">
                        <?php if ($plan['popular']): ?>
                            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </span>
                            </div>
                        <?php endif; ?>
                        
                        <div class="text-center">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2"><?php echo esc_html($plan['name']); ?></h3>
                            <div class="text-4xl font-bold text-gray-900 mb-2"><?php echo esc_html($plan['price']); ?></div>
                            <div class="text-sm text-gray-600 mb-6">per month</div>
                            
                            <div class="text-sm font-semibold text-gray-900 mb-4"><?php echo esc_html($plan['pages']); ?></div>
                            
                            <ul class="text-left space-y-3 mb-8">
                                <?php foreach ($plan['features'] as $feature): ?>
                                    <li class="flex items-center">
                                        <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <?php echo esc_html($feature); ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center">
                <a href="<?php echo home_url('/pricing'); ?>" class="btn-primary">
                    View Detailed Pricing
                    <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
                <p class="text-sm text-gray-600 mt-4">
                    30-day results guarantee • No long-term contracts • Cancel anytime
                </p>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <div class="section-padding section-bg-gray">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="max-w-2xl text-center mb-16 mx-auto">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What Our Clients Say
                </h2>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    Real results from real businesses we've helped grow.
                </p>
            </div>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <?php
                $testimonials = array(
                    array(
                        'name' => 'Curvylane Team',
                        'role' => 'Fashion E-commerce',
                        'content' => 'Zero To Nine helped us increase our online sales by 467% in just 8 months. Their comprehensive marketing approach and expertise in the UAE market is unmatched.',
                        'rating' => 5
                    ),
                    array(
                        'name' => 'Boketto Management',
                        'role' => 'Restaurant Chain',
                        'content' => 'The team at Zero To Nine transformed our local presence completely. Our restaurants now rank #1 in local search and our online orders increased by 380%.',
                        'rating' => 5
                    ),
                    array(
                        'name' => 'Caro Jewels Team',
                        'role' => 'Luxury Jewelry',
                        'content' => 'Working with Zero To Nine was a game-changer for our luxury brand. Their premium marketing strategies helped us increase our average order value by 213%.',
                        'rating' => 5
                    )
                );
                
                foreach ($testimonials as $testimonial):
                ?>
                    <div class="card p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-full flex items-center justify-center text-white font-semibold">
                                <?php echo esc_html($testimonial['name'][0]); ?>
                            </div>
                            <div class="ml-4">
                                <h3 class="font-semibold text-gray-900"><?php echo esc_html($testimonial['name']); ?></h3>
                                <p class="text-sm text-gray-600"><?php echo esc_html($testimonial['role']); ?></p>
                            </div>
                        </div>
                        <div class="flex mb-4">
                            <?php for ($i = 0; $i < $testimonial['rating']; $i++): ?>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            <?php endfor; ?>
                        </div>
                        <p class="text-gray-600 italic">"<?php echo esc_html($testimonial['content']); ?>"</p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <!-- Final CTA Section -->
    <section class="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">
                Ready to Dominate Search Results?
            </h2>
            <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join 50+ businesses that have transformed their online presence with our AI-SEO strategies. 
                Get started with a free technical SEO audit today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo home_url('/contact'); ?>" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Free SEO Audit
                </a>
                <a href="<?php echo home_url('/case-studies'); ?>" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                    View Case Studies
                </a>
            </div>
            <p class="text-sm text-blue-200 mt-4">
                30-day results guarantee • No long-term contracts • Cancel anytime
            </p>
        </div>
    </section>
</main>

<?php get_footer(); ?>
