// --- NAVBAR & MOBILE MENU ---
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById('main-header');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

window.addEventListener('scroll', function() {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg', 'bg-white/80');
            header.classList.remove('border-transparent');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/80');
            header.classList.add('border-transparent');
        }
    }
});
//transportation service in Bangladesh
// Intersection Observer for Transport Section
const observerOptions = {
    threshold: 0.2
};

const transportObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Find all reveal-hidden elements inside THIS section
            const elements = entry.target.querySelectorAll('.reveal-hidden');
            elements.forEach(el => el.classList.add('reveal-visible'));
            transportObserver.unobserve(entry.target); // Trigger only once
        }
    });
}, observerOptions);

// Target the transport section specifically
const transportSection = document.querySelector('#transport');
if (transportSection) {
    transportObserver.observe(transportSection);
}
// --- SHARED OBSERVER LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Transport & CNF Sliders
    const setupSlider = (slideClassName) => {
        const slides = document.querySelectorAll(slideClassName);
        if (slides.length > 0) {
            let currentSlide = 0;
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);
        }
    };

    setupSlider('.transport-slide');
    setupSlider('.cnf-image-slide');

    // 2. Intersection Observer for All Sections
    const observerOptions = { threshold: 0.2 };
    
    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Transport Section
                const transTexts = entry.target.querySelectorAll('.reveal-text');
                transTexts.forEach(text => text.classList.add('reveal-active'));

                // CNF Section
                const cnfElements = entry.target.querySelectorAll('.cnf-slide-in');
                cnfElements.forEach(el => el.classList.add('cnf-reveal-active'));

                // Mission & Vision Section
                const mission = entry.target.querySelector('.mission-reveal');
                const vision = entry.target.querySelector('.vision-reveal');
                if (mission) mission.classList.add('reveal-now');
                if (vision) setTimeout(() => vision.classList.add('reveal-now'), 300);

                generalObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe specific containers
    ['.reveal-container', '.cnf-reveal-container', '#mission-vision'].forEach(id => {
        const el = document.querySelector(id);
        if (el) generalObserver.observe(el);
    });
});