/**
 * Lógica interactiva de Práctica Profesional Supervisada (PPS)
 * js/pps.js
 */

document.addEventListener('DOMContentLoaded', () => {
    // === CONTROL DE PESTAÑAS (TABS) ===
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function switchTab(targetTab) {
        if (!targetTab) return;

        // Desactivar todos los botones y paneles
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        tabPanels.forEach(panel => {
            panel.classList.remove('active');
        });

        // Activar el tab seleccionado
        targetTab.classList.add('active');
        targetTab.setAttribute('aria-selected', 'true');
        const controlledPanelId = targetTab.getAttribute('aria-controls');
        const controlledPanel = document.getElementById(controlledPanelId);
        if (controlledPanel) {
            controlledPanel.classList.add('active');
        }
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn));

        // Accesibilidad con teclado (Flechas Izquierda / Derecha)
        btn.addEventListener('keydown', (e) => {
            const tabsArray = Array.from(tabButtons);
            const index = tabsArray.indexOf(btn);
            if (e.key === 'ArrowRight') {
                const nextTab = tabsArray[(index + 1) % tabsArray.length];
                nextTab.focus();
                switchTab(nextTab);
            } else if (e.key === 'ArrowLeft') {
                const prevTab = tabsArray[(index - 1 + tabsArray.length) % tabsArray.length];
                prevTab.focus();
                switchTab(prevTab);
            }
        });
    });

    // Soporte para deep-linking: si la URL contiene #documentacion, abrir esa pestaña directamente
    if (window.location.hash === '#documentacion') {
        const docTab = document.getElementById('tab-documentacion');
        if (docTab) switchTab(docTab);
    }

    // === CONTROL DE ACORDEÓN (FAQS) ===
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const toggleAllBtn = document.getElementById('toggle-all-faqs');
    let allExpanded = false;

    function toggleAccordion(header) {
        const item = header.closest('.accordion-item');
        const isCurrentlyActive = item.classList.contains('active');
        const body = item.querySelector('.accordion-body');

        if (isCurrentlyActive) {
            item.classList.remove('active');
            header.setAttribute('aria-expanded', 'false');
            body.style.maxHeight = null;
        } else {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
            body.style.maxHeight = body.scrollHeight + 50 + 'px';
        }
    }

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => toggleAccordion(header));
    });

    if (toggleAllBtn) {
        toggleAllBtn.addEventListener('click', () => {
            allExpanded = !allExpanded;
            accordionHeaders.forEach(header => {
                const item = header.closest('.accordion-item');
                const body = item.querySelector('.accordion-body');
                if (allExpanded) {
                    item.classList.add('active');
                    header.setAttribute('aria-expanded', 'true');
                    body.style.maxHeight = body.scrollHeight + 50 + 'px';
                } else {
                    item.classList.remove('active');
                    header.setAttribute('aria-expanded', 'false');
                    body.style.maxHeight = null;
                }
            });
            toggleAllBtn.textContent = allExpanded ? 'Contraer Todas' : 'Expandir Todas';
        });
    }

    // === SIMULACIÓN DE DESCARGA CON TOAST Y ARCHIVO LOCAL ===
    const toast = document.getElementById('toast-notify');
    const toastText = document.getElementById('toast-text');

    function triggerDownload(fileName) {
        if (toast && toastText) {
            toastText.textContent = `Descargando archivo: ${fileName}`;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3500);
        }

        // Descarga simulada de archivo Blob oficial
        const dummyContent = `Universidad Nacional de Costa Rica - Escuela de Informática\nDocumento: ${fileName}\nFecha de Emisión: ${new Date().toLocaleDateString()}\nEstado: Oficial Normado`;
        const blob = new Blob([dummyContent], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    document.querySelectorAll('.download-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const fileName = button.getAttribute('data-file') || 'Plantilla_PPS_UNA.docx';
            triggerDownload(fileName);
        });
    });

    const btnDownloadPrimary = document.getElementById('btn-download-primary');
    if (btnDownloadPrimary) {
        btnDownloadPrimary.addEventListener('click', (e) => {
            e.preventDefault();
            const docTab = document.getElementById('tab-documentacion');
            if (docTab) switchTab(docTab);
            triggerDownload('Plantilla_Oficial_Anteproyecto_PPS_2026.docx');
        });
    }
});
