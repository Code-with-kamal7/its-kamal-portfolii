/* ====================================
   ANIMATIONS.JS
   GSAP Animation Sequences & Effects
   ==================================== */

class PortfolioAnimations {
    constructor() {
        this.tl = null;
        this.scrollTriggerTls = [];
        this.init();
    }

    /**
     * Initialize all animations
     */
    init() {
        CONFIG.Logger.log('Initializing GSAP Animations');
        
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);
        
        // Setup animations
        this.animateHero();
        this.setupScrollTriggers();
        this.setupScrollAnim();
    }

    /**
     * Hero section typewriter and intro animations
     */
    animateHero() {
        const tl = gsap.timeline();
        
        // Animate hero title
        tl.to('.hero-title', {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }, 0)
        
        // Typewriter effect for name
        .to('.name-text', {
            duration: 3,
            onStart: () => {
                this.typewriterEffect('.name-text', 'Kamal Kishore', 0.08);
            }
        }, 0.3)
        
        // Animate subtitle
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, 1)
        
        // Animate description
        .to('.hero-description', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, 1.2)
        
        // Stagger button animations
        .to('.hero-buttons', {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        }, 1.4)
        
        .to('.btn', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out'
        }, 1.4)
        
        // Scroll indicator animation
        .to('.scroll-indicator', {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, 1.8);
        
        this.tl = tl;
    }

    /**
     * Setup scroll trigger animations for sections
     */
    setupScrollTriggers() {
        // About section
        gsap.to('.about-text', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top center+=100',
                toggleActions: 'play none none reverse',
                markers: false
            }
        });
        
        gsap.to('.stat-card', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out',
            scrollTrigger: {
                trigger: '.about-stats',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Skills section
        gsap.to('.skill-category', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to('.skill-badge', {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out',
            scrollTrigger: {
                trigger: '.skills-grid',
                start: 'top center',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Projects section
        gsap.to('.project-card', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        
        // Contact section
        gsap.to('.contact-form-wrapper', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
        
        gsap.to('.contact-info', {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    }

    /**
     * Scroll animation controls
     */
    setupScrollAnim() {
        // Parallax text effect on scroll
        gsap.to('.section-title', {
            y: -50,
            duration: 1,
            scrollTrigger: {
                trigger: '.section',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                markers: false
            }
        });
    }

    /**
     * Typewriter effect
     */
    typewriterEffect(selector, text, speed = 0.08) {
        const element = document.querySelector(selector);
        if (!element) return;
        
        element.textContent = '';
        let charIndex = 0;
        
        const type = () => {
            if (charIndex < text.length) {
                element.textContent += text[charIndex];
                charIndex++;
                setTimeout(type, speed * 1000);
            }
        };
        
        type();
    }

    /**
     * Animate on hover
     */
    setupHoverAnimations() {
        // Skill badges
        document.querySelectorAll('.skill-badge').forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -10,
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
            
            badge.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
        });
        
        // Project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -15,
                    boxShadow: '0 20px 60px rgba(0, 217, 255, 0.3)',
                    duration: 0.4,
                    ease: 'power3.out'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    boxShadow: '0 0 0px rgba(0, 217, 255, 0)',
                    duration: 0.4,
                    ease: 'power3.out'
                });
            });
        });
        
        // Stat cards
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    y: -8,
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
            
            card.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
        });
        
        // Contact methods
        document.querySelectorAll('.contact-method').forEach(method => {
            method.addEventListener('mouseenter', function() {
                gsap.to(this, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
            
            method.addEventListener('mouseleave', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'back.out'
                });
            });
        });
    }

    /**
     * Button click animations
     */
    setupButtonAnimations() {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                gsap.to(this, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            });
        });
    }

    /**
     * Animate section visibility
     */
    animateSectionOnScroll(sectionSelector) {
        gsap.to(sectionSelector, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: sectionSelector,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            }
        });
    }

    /**
     * Form input animations
     */
    setupFormAnimations() {
        const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                gsap.to(this, {
                    scale: 1.02,
                    duration: 0.2
                });
            });
            
            input.addEventListener('blur', function() {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.2
                });
            });
        });
    }

    /**
     * Theme transition animation
     */
    animateThemeTransition() {
        return gsap.timeline({
            duration: 0.3,
            ease: 'power2.inOut'
        });
    }

    /**
     * Success message animation
     */
    animateSuccessMessage(element) {
        const tl = gsap.timeline();
        
        tl.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out'
        })
        .to(element, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: 'power2.in'
        }, 3);
    }

    /**
     * Stagger reveal animation
     */
    staggerReveal(elements, duration = 0.5, delay = 0.1) {
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: delay,
            ease: 'power3.out'
        });
    }

    /**
     * Floating animation
     */
    addFloatingAnimation(element, distance = 20, duration = 3) {
        gsap.to(element, {
            y: distance,
            duration: duration,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }

    /**
     * Glow pulse animation
     */
    addGlowPulse(element) {
        gsap.to(element, {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(181, 55, 242, 0.4)',
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    }

    /**
     * Initialize all event-based animations
     */
    initializeEventAnimations() {
        this.setupHoverAnimations();
        this.setupButtonAnimations();
        this.setupFormAnimations();
    }
}

// Initialize animations
let portfolioAnimations = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioAnimations = new PortfolioAnimations();
        window.portfolioAnimations = portfolioAnimations;
    });
} else {
    portfolioAnimations = new PortfolioAnimations();
    window.portfolioAnimations = portfolioAnimations;
}
