
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// Script to change navbar style on scroll
  window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('shadow-lg', 'bg-white/80');
      header.classList.remove('border-transparent');
    } else {
      header.classList.remove('shadow-lg', 'bg-white/80');
      header.classList.add('border-transparent');
    }
  });

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
// JavaScript for Image Slider and Scroll Animation for Transport Section
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Image Slider Logic (5 Seconds)
    const slides = document.querySelectorAll('.transport-slide');
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);

    // 2. Scroll Animation Logic
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const texts = entry.target.querySelectorAll('.reveal-text');
          texts.forEach(text => text.classList.add('reveal-active'));
        }
      });
    }, observerOptions);

    observer.observe(document.querySelector('.reveal-container'));
  });


// JavaScript for Image Slider and Scroll Animation for CNF Section
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. IMAGE SLIDER LOGIC ---
  const slides = document.querySelectorAll('.cnf-image-slide');
  let currentSlide = 0;

  function nextCnfSlide() {
    // Remove active class from current
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to next
    slides[currentSlide].classList.add('active');
  }

  // Run the slider every 5 seconds
  if (slides.length > 0) {
    setInterval(nextCnfSlide, 5000);
  }

  // --- 2. SCROLL REVEAL LOGIC ---
  const cnfObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll('.cnf-slide-in');
        elements.forEach(el => {
          el.classList.add('cnf-reveal-active');
        });
        // Unobserve once animation is triggered for better performance
        cnfObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const container = document.querySelector('.cnf-reveal-container');
  if (container) {
    cnfObserver.observe(container);
  }
});

// JavaScript for Image Slider and Scroll Animation for Mission & Vision Section
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.mission-reveal').classList.add('reveal-now');
                // Small delay for the vision card to create a staggered effect
                setTimeout(() => {
                    entry.target.querySelector('.vision-reveal').classList.add('reveal-now');
                }, 300);
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionObserver.observe(document.querySelector('#mission-vision'));
});