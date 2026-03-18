// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const bars = this.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }

    // Mobile dropdown handling
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.dropdown-toggle');
        
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });

    // ===== HERO CAROUSEL =====
    class Carousel {
        constructor() {
            this.slides = document.querySelectorAll('.carousel-slide');
            this.prevBtn = document.querySelector('.prev');
            this.nextBtn = document.querySelector('.next');
            this.dotsContainer = document.querySelector('.carousel-dots');
            this.currentSlide = 0;
            this.slideInterval = null;
            this.autoPlayDelay = 5000;

            if (this.slides.length > 0) {
                this.init();
            }
        }

        init() {
            // Create dots
            this.slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });

            this.dots = document.querySelectorAll('.dot');
            this.updateDots();

            // Event listeners
            this.prevBtn.addEventListener('click', () => this.prevSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());

            // Auto play
            this.startAutoPlay();

            // Pause on hover
            const carousel = document.querySelector('.carousel-container');
            carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());

            // Touch events for mobile
            let touchStartX = 0;
            let touchEndX = 0;

            carousel.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            carousel.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            }, { passive: true });
        }

        handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchEndX - touchStartX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.prevSlide();
                } else {
                    this.nextSlide();
                }
            }
        }

        goToSlide(index) {
            this.slides.forEach(slide => slide.classList.remove('active'));
            this.slides[index].classList.add('active');
            this.currentSlide = index;
            this.updateDots();
        }

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            this.goToSlide(this.currentSlide);
        }

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.goToSlide(this.currentSlide);
        }

        updateDots() {
            this.dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        }

        startAutoPlay() {
            this.stopAutoPlay();
            this.slideInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
        }

        stopAutoPlay() {
            if (this.slideInterval) {
                clearInterval(this.slideInterval);
                this.slideInterval = null;
            }
        }
    }

    // Initialize carousel
    new Carousel();

    // ===== SCROLL REVEAL ANIMATION =====
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== STICKY NAVIGATION BACKGROUND CHANGE =====
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    }

    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // ===== HOVER EFFECTS FOR CARDS =====
    const cards = document.querySelectorAll('.welcome-card, .event-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== LIVE MASS BUTTON =====
    const playButton = document.querySelector('.play-button');
    
    if (playButton) {
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Simulate YouTube link opening
            window.open('https://youtube.com', '_blank');
        });
    }

    // ===== COUNTDOWN TO NEXT MASS (optional feature) =====
    function updateMassCountdown() {
        const now = new Date();
        const sundayMass = new Date();
        sundayMass.setHours(10, 0, 0, 0); // 10:00 AM Sunday
        
        // If today is Sunday and time is past 10 AM, get next Sunday
        if (now.getDay() === 0 && now > sundayMass) {
            sundayMass.setDate(sundayMass.getDate() + 7);
        } else {
            // Get next Sunday
            sundayMass.setDate(sundayMass.getDate() + ((7 - sundayMass.getDay()) % 7));
        }
        
        const diff = sundayMass - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            const countdownElement = document.getElementById('mass-countdown');
            if (countdownElement) {
                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m until next Sunday Mass`;
            }
        }
    }

    // Update countdown every minute
    setInterval(updateMassCountdown, 60000);
    updateMassCountdown();

    // ===== ACTIVE NAVIGATION LINK =====
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveNavLink();

    // ===== RESIZE HANDLER =====
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Reinitialize mobile menu behavior on resize
            if (window.innerWidth > 768) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                navMenu.classList.remove('active');
            }
        }, 250);
    });

    // ===== PARALLAX EFFECT FOR HERO (optional) =====
    const heroSection = document.querySelector('.hero-carousel');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // ===== FORM VALIDATION FOR CONTACT (will be used in contact.html) =====
    window.validateForm = function(formId) {
        const form = document.getElementById(formId);
        if (!form) return true;

        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                
                // Add error message
                let errorMsg = input.nextElementSibling;
                if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                    errorMsg = document.createElement('span');
                    errorMsg.classList.add('error-message');
                    input.parentNode.insertBefore(errorMsg, input.nextSibling);
                }
                errorMsg.textContent = 'This field is required';
            } else {
                input.classList.remove('error');
                const errorMsg = input.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });

        return isValid;
    };

    // ===== LAZY LOADING IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    console.log('Mutungo Catholic Parish website initialized successfully!');
});
