// Initialize Scroll Trigger Animations
document.addEventListener('DOMContentLoaded', () => {
    initializeScrollAnimations();
});

function initializeScrollAnimations() {
    // Skip animations on shop.html
    const currentPage = window.location.pathname;
    if (currentPage.includes('shop.html')) {
        return;
    }

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('[data-animate]');

    if (animatedElements.length === 0) {
        return;
    }

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add animation class when element becomes visible
                entry.target.classList.add('animate-in');
                // Stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

// Reinitialize animations after dynamic content is loaded
window.reinitializeScrollAnimations = function() {
    initializeScrollAnimations();
};
