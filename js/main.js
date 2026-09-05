/**
 * Scripts principales - Escuela de Informática (UNA)
 * js/main.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // === CARRUSEL DE NOVEDADES (HERO) ===
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        if (!slides || slides.length <= 1) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides.length > 1) {
        // Transición automática cada 5 segundos
        setInterval(nextSlide, 5000);
    }
});
