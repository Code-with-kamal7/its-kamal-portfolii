/* ====================================
   INTERACTIONS.JS
   User Interactions, Navigation & Effects
   ==================================== */

class PortfolioInteractions {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navMenu = document.getElementById('nav-menu');
        this.menuToggle = document.getElementById('menu-toggle');
        this.themeToggle = document.getElementById('theme-toggle');
        this.contactForm = document.getElementById('contact-form');
        this.formStatus = document.getElementById('form-status');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.scrollThreshold = 50;
        
        this.currentTheme = CONFIG.getTheme();
        
        this.init();
    }

    /**
     * Initialize all interactions
     */
    init() {
        CONFIG.Logger.log('Initializing Portfolio Interactions');
        
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupContactForm();
        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupInputFocus();
        
        // Initialize GSAP animations
        if (window.portfolioAnimations) {
            window.portfolioAnimations.initializeEventAnimations();
        }
    }

    /**
     * Setup navigation bar effects
     */
    setupNavigation() {
        // Scroll-based navbar transparency
        window.addEventListener('scroll', CONFIG.throttle(() => {
            if (window.scrollY > this.scrollThreshold) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, 50));
        
        // Active link highlighting
        window.addEventListener('scroll', CONFIG.throttle(() => {
            this.updateActiveNavLink();
        }, 100));
    }

    /**
     * Update active navigation link
     */
    updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }

    /**
     * Setup theme toggle
     */
    setupThemeToggle() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    /**
     * Toggle between light and dark theme
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        
        // Animate transition
        if (window.portfolioAnimations) {
            const tl = window.portfolioAnimations.animateThemeTransition();
            tl.to(document.body, {
                opacity: 0,
                duration: 0.3
            }, 0)
            .call(() => {
                CONFIG.setTheme(newTheme);
                this.currentTheme = newTheme;
            }, null, 0.15)
            .to(document.body, {
                opacity: 1,
                duration: 0.3
            }, 0.15);
        } else {
            CONFIG.setTheme(newTheme);
            this.currentTheme = newTheme;
        }
    }

    /**
     * Setup mobile menu
     */
    setupMobileMenu() {
        this.menuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close menu when link is clicked
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        this.menuToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    /**
     * Close mobile menu
     */
    closeMobileMenu() {
        this.menuToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    /**
     * Setup contact form submission
     */
    setupContactForm() {
        if (!this.contactForm) return;
        
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });
    }

    /**
     * Handle contact form submission
     */
    handleFormSubmit() {
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!this.validateForm(formData)) {
            this.showFormStatus('Please fill all fields correctly', 'error');
            return;
        }
        
        // Disable submit button
        const submitBtn = this.contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (in real app, use fetch/axios)
        setTimeout(() => {
            // Here you would send data to backend
            CONFIG.Logger.log('Form submitted:', formData);
            
            this.showFormStatus('Message sent successfully! Thanks for reaching out!', 'success');
            this.contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // Animate success
            if (window.portfolioAnimations) {
                window.portfolioAnimations.animateSuccessMessage(this.formStatus);
            }
        }, 1500);
    }

    /**
     * Validate form data
     */
    validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return (
            data.name.trim().length > 0 &&
            emailRegex.test(data.email) &&
            data.subject.trim().length > 0 &&
            data.message.trim().length > 0
        );
    }

    /**
     * Show form status message
     */
    showFormStatus(message, type) {
        this.formStatus.textContent = message;
        this.formStatus.className = `form-status show ${type}`;
    }

    /**
     * Setup scroll effects
     */
    setupScrollEffects() {
        // Parallax effect on scroll
        window.addEventListener('scroll', CONFIG.throttle(() => {
            this.updateParallaxElements();
        }, 30));
    }

    /**
     * Update parallax elements
     */
    updateParallaxElements() {
        const scrollY = window.scrollY;
        
        // Apply parallax to hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
        
        // Apply parallax to section titles
        document.querySelectorAll('.section-title').forEach(title => {
            const titlePos = title.parentElement.offsetTop;
            const offset = scrollY - titlePos;
            if (offset > -window.innerHeight && offset < window.innerHeight) {
                title.style.opacity = 1 - Math.max(0, offset * 0.001);
            }
        });
    }

    /**
     * Setup smooth scroll for navigation
     */
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('data-section');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    CONFIG.smoothScrollToElement(targetElement, 60);
                }
            });
        });
        
        // Also handle button clicks
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        CONFIG.smoothScrollToElement(targetElement, 60);
                    }
                }
            });
        });
    }

    /**
     * Setup input focus animations
     */
    setupInputFocus() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    /**
     * Show notification
     */
    showNotification(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff006e' : '#00d9ff'};
            color: #000;
            border-radius: 8px;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    /**
     * Handle skill badge click
     */
    setupSkillInteractions() {
        const skillBadges = document.querySelectorAll('.skill-badge');
        
        skillBadges.forEach(badge => {
            badge.addEventListener('click', function() {
                const skillName = this.getAttribute('data-skill');
                CONFIG.Logger.log('Skill clicked:', skillName);
                
                // Could trigger additional actions here
            });
        });
    }

    /**
     * Handle project card interactions
     */
    setupProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const codeBtn = card.querySelector('.btn-code');
            const demoBtn = card.querySelector('.btn-demo');
            
            if (codeBtn) {
                codeBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showNotification('GitHub link will open in new tab', 'info');
                    // window.open('github-link', '_blank');
                });
            }
            
            if (demoBtn) {
                demoBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showNotification('Live demo will open in new tab', 'info');
                    // window.open('demo-link', '_blank');
                });
            }
        });
    }

    /**
     * Initialize all advanced interactions
     */
    initializeAdvancedInteractions() {
        this.setupSkillInteractions();
        this.setupProjectInteractions();
    }
}

// Initialize interactions
let portfolioInteractions = null;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioInteractions = new PortfolioInteractions();
        window.portfolioInteractions = portfolioInteractions;
        portfolioInteractions.initializeAdvancedInteractions();
    });
} else {
    portfolioInteractions = new PortfolioInteractions();
    window.portfolioInteractions = portfolioInteractions;
    portfolioInteractions.initializeAdvancedInteractions();
}

// Additional CSS animations for notifications
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
