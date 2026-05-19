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
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    // Simulating form submission
    btn.innerText = "Confirmed!";
    btn.style.backgroundColor = "#50C878";
    btn.style.color = "white";
    
    // Reset form after 3 seconds
    setTimeout(() => {
        e.target.reset();
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
        btn.style.color = "";
    }, 3000);
});
