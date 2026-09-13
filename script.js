// Efek Animasi Muncul Halus (Fade In) saat Scroll
document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.querySelector('.page-loader');

    window.addEventListener('load', () => {
        window.setTimeout(() => pageLoader?.classList.add('is-hidden'), 350);
    }, { once: true });

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Terapkan animasi pada elemen card dan section
    const animatedElements = document.querySelectorAll('.card, .section-title, .skills-wrapper');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
