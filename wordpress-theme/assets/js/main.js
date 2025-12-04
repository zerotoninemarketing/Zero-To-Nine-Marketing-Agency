/**
 * Main JavaScript file for Zero To Nine Marketing Theme
 */

(function($) {
    'use strict';

    // Initialize when document is ready
    $(document).ready(function() {
        initMobileMenu();
        initScrollAnimations();
        initSmoothScrolling();
        initFormValidation();
    });

    /**
     * Mobile Menu Functionality
     */
    function initMobileMenu() {
        const $mobileToggle = $('.mobile-menu-toggle');
        const $mobileMenu = $('.mobile-menu');

        $mobileToggle.on('click', function() {
            const isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            $mobileMenu.toggleClass('hidden');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.mobile-menu-toggle, .mobile-menu').length) {
                $mobileMenu.addClass('hidden');
                $mobileToggle.attr('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking on a link
        $mobileMenu.find('a').on('click', function() {
            $mobileMenu.addClass('hidden');
            $mobileToggle.attr('aria-expanded', 'false');
        });
    }

    /**
     * Scroll Animations
     */
    function initScrollAnimations() {
        // Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe all elements with animate-on-scroll class
            document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
                observer.observe(el);
            });
        }

        // Navbar background on scroll
        $(window).on('scroll', function() {
            const $navbar = $('.navbar');
            if ($(window).scrollTop() > 50) {
                $navbar.addClass('bg-white shadow-lg');
            } else {
                $navbar.removeClass('bg-white shadow-lg');
            }
        });
    }

    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
                location.hostname === this.hostname) {
                
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        });
    }

    /**
     * Form Validation
     */
    function initFormValidation() {
        // Contact form validation
        $('.contact-form').on('submit', function(e) {
            e.preventDefault();
            
            const $form = $(this);
            const $submitBtn = $form.find('button[type="submit"]');
            const originalText = $submitBtn.text();
            
            // Basic validation
            let isValid = true;
            $form.find('input[required], textarea[required]').each(function() {
                if (!$(this).val().trim()) {
                    $(this).addClass('border-red-500');
                    isValid = false;
                } else {
                    $(this).removeClass('border-red-500');
                }
            });
            
            // Email validation
            const email = $form.find('input[type="email"]').val();
            if (email && !isValidEmail(email)) {
                $form.find('input[type="email"]').addClass('border-red-500');
                isValid = false;
            }
            
            if (isValid) {
                // Show loading state
                $submitBtn.text('Sending...').prop('disabled', true);
                
                // Simulate form submission (replace with actual AJAX call)
                setTimeout(function() {
                    $submitBtn.text('Message Sent!').removeClass('bg-blue-600').addClass('bg-green-600');
                    $form[0].reset();
                    
                    setTimeout(function() {
                        $submitBtn.text(originalText).removeClass('bg-green-600').addClass('bg-blue-600').prop('disabled', false);
                    }, 3000);
                }, 2000);
            }
        });
    }

    /**
     * Utility Functions
     */
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Chart Animation (for hero section)
     */
    function animateChart() {
        const chartPath = document.querySelector('.chart-path');
        if (chartPath) {
            // Reset animation
            chartPath.style.strokeDashoffset = '1000';
            
            // Trigger animation
            setTimeout(function() {
                chartPath.style.animation = 'draw 2s ease-out forwards';
            }, 500);
        }
    }

    // Initialize chart animation when page loads
    $(window).on('load', function() {
        animateChart();
    });

    /**
     * Lazy Loading for Images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    // Initialize lazy loading
    initLazyLoading();

    /**
     * Back to Top Button
     */
    function initBackToTop() {
        // Create back to top button
        const backToTop = $('<button class="back-to-top fixed bottom-8 right-8 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 invisible z-50"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg></button>');
        $('body').append(backToTop);

        // Show/hide button based on scroll position
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                backToTop.removeClass('opacity-0 invisible').addClass('opacity-100 visible');
            } else {
                backToTop.removeClass('opacity-100 visible').addClass('opacity-0 invisible');
            }
        });

        // Scroll to top when clicked
        backToTop.on('click', function() {
            $('html, body').animate({scrollTop: 0}, 800);
        });
    }

    // Initialize back to top button
    initBackToTop();

})(jQuery);
