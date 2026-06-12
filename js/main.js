/* ============================================
   UTPRERAK ARCHITECTS — Main Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // Subtle focus transition for form fields
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transition = 'all 0.3s ease';
        });
    });

    // Smooth reveal animation for sections on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                entry.target.classList.remove('reveal-init');
                // we can stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .grid > div').forEach((el) => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });

    // Smooth scroll for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
