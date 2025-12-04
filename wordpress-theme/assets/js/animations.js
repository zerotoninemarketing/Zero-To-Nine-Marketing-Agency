/**
 * Animation JavaScript for Zero To Nine Marketing Theme
 */

(function() {
    'use strict';

    // Initialize animations when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initScrollAnimations();
        initCounterAnimations();
        initParallaxEffects();
        initHoverEffects();
    });

    /**
     * Scroll-triggered animations
     */
    function initScrollAnimations() {
        // Create intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animation class based on data attribute
                    const animationType = element.dataset.animation || 'fadeIn';
                    element.classList.add('animate-' + animationType);
                    
                    // Unobserve after animation
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
            observer.observe(el);
        });
    }

    /**
     * Counter animations for statistics
     */
    function initCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.target);
                    const duration = parseInt(counter.dataset.duration) || 2000;
                    const suffix = counter.dataset.suffix || '';
                    
                    animateCounter(counter, target, duration, suffix);
                    counterObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function(counter) {
            counterObserver.observe(counter);
        });
    }

    /**
     * Animate counter from 0 to target value
     */
    function animateCounter(element, target, duration, suffix) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        }
        
        updateCounter();
    }

    /**
     * Parallax effects for background elements
     */
    function initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (parallaxElements.length === 0) return;
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(function(element) {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = 'translateY(' + yPos + 'px)';
            });
        }
        
        // Throttle scroll events
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
                setTimeout(function() {
                    ticking = false;
                }, 16);
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }

    /**
     * Enhanced hover effects
     */
    function initHoverEffects() {
        // Card hover effects
        const cards = document.querySelectorAll('.card, .blog-card');
        cards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            });
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(function(button) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    /**
     * Typing animation for hero text
     */
    function initTypingAnimation() {
        const typingElement = document.querySelector('.typing-animation');
        if (!typingElement) return;
        
        const text = typingElement.textContent;
        const speed = parseInt(typingElement.dataset.speed) || 100;
        
        typingElement.textContent = '';
        typingElement.style.borderRight = '2px solid #0099f1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(function() {
                    typingElement.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    /**
     * Staggered animation for grid items
     */
    function initStaggeredAnimation() {
        const gridItems = document.querySelectorAll('.stagger-animation');
        
        gridItems.forEach(function(item, index) {
            item.style.animationDelay = (index * 0.1) + 's';
        });
    }

    /**
     * Loading animation
     */
    function initLoadingAnimation() {
        const loader = document.querySelector('.page-loader');
        if (!loader) return;
        
        window.addEventListener('load', function() {
            loader.style.opacity = '0';
            setTimeout(function() {
                loader.style.display = 'none';
            }, 500);
        });
    }

    /**
     * Progress bar animation
     */
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const progressObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width || '100%';
                    
                    setTimeout(function() {
                        bar.style.width = width;
                    }, 200);
                    
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(function(bar) {
            progressObserver.observe(bar);
        });
    }

    // Initialize all animations
    initTypingAnimation();
    initStaggeredAnimation();
    initLoadingAnimation();
    initProgressBars();

    /**
     * Utility function to add animation classes
     */
    window.addAnimation = function(element, animationClass) {
        element.classList.add('animate-' + animationClass);
    };

    /**
     * Utility function to remove animation classes
     */
    window.removeAnimation = function(element, animationClass) {
        element.classList.remove('animate-' + animationClass);
    };

})();
