// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Simple Scroll Animation (Intersection Observer)
const animateElements = document.querySelectorAll('[data-aos]');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

animateElements.forEach(el => {
    observer.observe(el);
});

// RSVP Form Submit Logic
document.getElementById('rsvpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const rsvpBox = document.querySelector('.rsvp-box');
    
    // Replace the form with a success message
    rsvpBox.innerHTML = `
        <h2 class="section-title light-title" style="margin-bottom: 1rem;">Confirmed!</h2>
        <p class="rsvp-text" style="font-size: 1.5rem; color: #F3E5AB;">Thank you for your reservation. We look forward to celebrating with you!</p>
    `;
});
