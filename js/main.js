/**
 * Scripts principales - Escuela de Informática (UNA)
 * js/main.js
 * Incluye lógica de carrusel institucional y menú móvil off-canvas accesible.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. CARRUSEL INSTITUCIONAL (HERO)
    // ==========================================
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        if (!slides || slides.length <= 1) return;
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    if (slides && slides.length > 1) {
        setInterval(nextSlide, 5000);
    }

    // ==========================================
    // 2. MENÚ MÓVIL OFF-CANVAS (HAMBURGUESA)
    // ==========================================
    const toggleBtn = document.getElementById('mobileNavToggle');
    const closeBtn = document.getElementById('drawerCloseBtn');
    const backdrop = document.getElementById('drawerBackdrop');
    const drawer = document.getElementById('mobileDrawer');

    function openDrawer() {
        if (!drawer || !backdrop) return;
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('active');
        backdrop.setAttribute('aria-hidden', 'false');
        document.body.classList.add('drawer-open');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'true');
        }
        // Foco inicial en el botón de cierre para accesibilidad
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 100);
        }
    }

    function closeDrawer() {
        if (!drawer || !backdrop) return;
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('active');
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('drawer-open');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.focus();
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isOpen = drawer && drawer.classList.contains('open');
            if (isOpen) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeDrawer);
    }

    // Cerrar al pulsar tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
            closeDrawer();
        }
    });

    // ==========================================
    // 3. ACORDEONES DENTRO DEL MENÚ MÓVIL
    // ==========================================
    const accordionButtons = document.querySelectorAll('.mobile-accordion-btn');

    accordionButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            const subpanel = btn.nextElementSibling;

            // Opcional: cerrar otros acordeones abiertos al mismo nivel para mantener orden
            accordionButtons.forEach((otherBtn) => {
                if (otherBtn !== btn && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.setAttribute('aria-expanded', 'false');
                    const otherPanel = otherBtn.nextElementSibling;
                    if (otherPanel) {
                        otherPanel.style.maxHeight = null;
                        otherPanel.classList.remove('open');
                    }
                }
            });

            // Toggle actual
            if (isExpanded) {
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
                if (subpanel) {
                    subpanel.style.maxHeight = null;
                    subpanel.classList.remove('open');
                }
            } else {
                btn.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
                if (subpanel) {
                    subpanel.classList.add('open');
                    subpanel.style.maxHeight = subpanel.scrollHeight + 'px';
                }
            }
        });
    });

    // Abrir automáticamente el subpanel si ya tenía clase 'active-parent'
    const activeParent = document.querySelector('.mobile-accordion-btn.active-parent');
    if (activeParent) {
        const panel = activeParent.nextElementSibling;
        if (panel) {
            panel.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }
});
