/* ===== VARIABLES ===== */
:root {
    --gold: #D4AF37;
    --gold-light: #F4E5B9;
    --burgundy: #800020;
    --burgundy-dark: #4A0012;
    --deep-blue: #1A2B3C;
    --deep-blue-light: #2C3E50;
    --white: #FFFFFF;
    --off-white: #F8F9FA;
    --gray-light: #E9ECEF;
    --gray: #6C757D;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --shadow-hover: 0 20px 25px -5px rgba(0,0,0,0.2);
    --transition: all 0.3s ease;
}

/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--deep-blue);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== NAVIGATION ===== */
.navbar {
    position: sticky;
    top: 0;
    background: var(--white);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    padding: 1rem 0;
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h2 {
    font-size: 1.8rem;
    color: var(--deep-blue);
    position: relative;
}

.logo h2 span {
    display: block;
    font-size: 0.9rem;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    color: var(--burgundy);
    letter-spacing: 2px;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-menu a {
    font-size: 1rem;
    font-weight: 500;
    color: var(--deep-blue);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--gold);
    transition: var(--transition);
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
    width: 80%;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--burgundy);
}

/* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-toggle i {
    font-size: 0.8rem;
    margin-left: 0.3rem;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: var(--white);
    min-width: 200px;
    box-shadow: var(--shadow-md);
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: var(--transition);
    z-index: 100;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-menu li {
    padding: 0.5rem 1rem;
}

.dropdown-menu li:hover {
    background: var(--gold-light);
}

/* Mobile Menu */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--deep-blue);
    margin: 3px 0;
    transition: var(--transition);
}

/* ===== HERO CAROUSEL ===== */
.hero-carousel {
    height: 90vh;
    position: relative;
    overflow: hidden;
}

.carousel-container {
    height: 100%;
    position: relative;
}

.carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.carousel-slide.active {
    opacity: 1;
}

.slide-content {
    max-width: 800px;
    padding: 2rem;
    color: var(--white);
    transform: translateY(0);
}

.slide-content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    animation: slideUpFade 1s ease;
}

.slide-content p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
    animation: slideUpFade 1s ease 0.2s both;
}

.slide-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    animation: slideUpFade 1s ease 0.4s both;
}

.btn-primary, .btn-secondary, .btn-outline {
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: var(--gold);
    color: var(--deep-blue);
}

.btn-primary:hover {
    background: var(--burgundy);
    color: var(--white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background: var(--burgundy);
    color: var(--white);
}

.btn-secondary:hover {
    background: var(--deep-blue);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-outline {
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);
}

.btn-outline:hover {
    background: var(--white);
    color: var(--deep-blue);
    transform: translateY(-2px);
}

.carousel-nav button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.3);
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    color: var(--white);
    font-size: 1.2rem;
    transition: var(--transition);
}

.carousel-nav button:hover {
    background: var(--gold);
    color: var(--deep-blue);
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

.carousel-dots {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: var(--transition);
}

.dot.active {
    background: var(--gold);
    transform: scale(1.2);
}

/* ===== WELCOME SECTION ===== */
.welcome-section {
    padding: 5rem 0;
    background: var(--off-white);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.subtitle {
    color: var(--gold);
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
}

.section-header h2 {
    font-size: 3rem;
    color: var(--deep-blue);
    margin: 0.5rem 0;
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gold);
}

.section-description {
    color: var(--gray);
    margin-top: 1rem;
}

.welcome-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.welcome-card {
    background: var(--white);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.welcome-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--burgundy));
    transform: scaleX(0);
    transition: var(--transition);
}

.welcome-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.welcome-card:hover::before {
    transform: scaleX(1);
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--gold-light), var(--white));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: var(--transition);
}

.icon-wrapper i {
    font-size: 2rem;
    color: var(--burgundy);
}

.welcome-card:hover .icon-wrapper {
    background: var(--gold);
}

.welcome-card:hover .icon-wrapper i {
    color: var(--deep-blue);
}

.welcome-card h3 {
    margin-bottom: 1rem;
    color: var(--deep-blue);
}

/* ===== PRIEST SECTION ===== */
.priest-section {
    padding: 5rem 0;
    background: var(--white);
}

.priest-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.priest-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.priest-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.priest-image:hover img {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(212,175,55,0.2), rgba(128,0,32,0.2));
    pointer-events: none;
}

.priest-content {
    padding: 2rem;
}

.priest-content h2 {
    font-size: 2.5rem;
    margin: 0.5rem 0;
}

.priest-title {
    color: var(--gold);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    font-weight: 500;
}

.priest-message {
    position: relative;
    padding: 2rem;
    background: var(--off-white);
    border-radius: 8px;
    margin: 2rem 0;
}

.priest-message i {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    color: var(--gold);
    opacity: 0.3;
}

.priest-message p {
    font-style: italic;
    line-height: 1.8;
}

.priest-signature h4 {
    color: var(--burgundy);
    font-size: 1.5rem;
}

/* ===== LIVE MASS SECTION ===== */
.live-mass-section {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--deep-blue), var(--deep-blue-light));
    color: var(--white);
}

.live-mass-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.live-mass-content h2 {
    font-size: 3rem;
    margin: 0.5rem 0 1rem;
}

.mass-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.mass-schedule-mini {
    background: rgba(255,255,255,0.1);
    padding: 2rem;
    border-radius: 8px;
}

.mass-schedule-mini h4 {
    color: var(--gold);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.mass-schedule-mini ul li {
    margin: 0.5rem 0;
}

.mass-schedule-mini i {
    color: var(--gold);
    margin-right: 0.5rem;
}

.video-thumbnail {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.video-thumbnail img {
    width: 100%;
    height: auto;
    transition: var(--transition);
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: var(--gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.play-button i {
    color: var(--deep-blue);
    font-size: 2rem;
    margin-left: 5px;
}

.play-button:hover {
    background: var(--white);
    transform: translate(-50%, -50%) scale(1.1);
}

.live-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--burgundy);
    color: var(--white);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 600;
    animation: pulse 2s infinite;
}

/* ===== EVENTS PREVIEW ===== */
.events-preview {
    padding: 5rem 0;
    background: var(--off-white);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.event-card {
    display: flex;
    gap: 1.5rem;
    background: var(--white);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.event-card:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-md);
}

.event-date {
    text-align: center;
    min-width: 80px;
}

.event-date .day {
    font-size: 2rem;
    font-weight: 700;
    color: var(--burgundy);
    line-height: 1;
}

.event-date .month {
    font-size: 1rem;
    color: var(--gold);
    text-transform: uppercase;
}

.event-details h3 {
    margin-bottom: 0.5rem;
}

.event-details p {
    color: var(--gray);
    font-size: 0.9rem;
    margin: 0.2rem 0;
}

.event-details i {
    color: var(--gold);
    width: 20px;
}

.events-cta {
    text-align: center;
}

/* ===== FOOTER ===== */
.footer {
    background: var(--deep-blue);
    color: var(--white);
    padding: 4rem 0 2rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-info h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.footer-info p {
    opacity: 0.8;
    margin-bottom: 1.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--gold);
    transform: translateY(-3px);
}

.footer-links h4,
.footer-contact h4,
.footer-mass h4 {
    color: var(--gold);
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.footer-links ul li,
.footer-contact ul li,
.footer-mass ul li {
    margin: 0.5rem 0;
}

.footer-links ul li a:hover {
    color: var(--gold);
    padding-left: 5px;
}

.footer-contact i,
.footer-mass i {
    color: var(--gold);
    width: 25px;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* ===== ANIMATIONS ===== */
@keyframes slideUpFade {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

/* Reveal Animation */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }
    
    .priest-grid,
    .live-mass-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .slide-content h1 {
        font-size: 3rem;
    }
}

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--white);
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
        box-shadow: var(--shadow-md);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .dropdown-menu {
        position: static;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        display: none;
    }
    
    .dropdown.active .dropdown-menu {
        display: block;
    }
    
    .slide-content h1 {
        font-size: 2.5rem;
    }
    
    .slide-buttons {
        flex-direction: column;
    }
    
    .slide-content p {
        font-size: 1.1rem;
    }
    
    .welcome-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .slide-content h1 {
        font-size: 2rem;
    }
    
    .priest-content {
        padding: 1rem;
    }
    
    .event-card {
        flex-direction: column;
        text-align: center;
    }
}
