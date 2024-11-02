// Fade-in effect on scroll
window.addEventListener('DOMContentLoaded', () => {
    const aboutItems = document.querySelectorAll('.about-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    aboutItems.forEach(item => observer.observe(item));
});
