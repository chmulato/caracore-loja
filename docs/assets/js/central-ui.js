/* ==========================================================================
   CARA CORE INFORMÁTICA — CENTRAL DE DOWNLOADS (CENTRAL-UI.JS)
   Casca compartilhada pelas páginas internas da central (index.html,
   mapa.html e roadmap.html). Aqui ficam só os comportamentos do cabeçalho que
   não dependem do catálogo: alternância de tema e menu do celular.
   O catálogo continua com download-app.js, que tem busca, filtros, cópia de
   SHA256 e modal de integridade.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  /* ------------------------------------------------------- menu do topo */
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------------------- tema */
  function readSavedTheme() {
    try {
      const saved = localStorage.getItem('caracore_theme');
      return (saved === 'dark' || saved === 'light') ? saved : 'light';
    } catch (err) {
      return 'light'; /* file:// ou storage bloqueado: segue no claro */
    }
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    themeToggleBtn.setAttribute('aria-label',
      theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  }

  updateThemeIcon(readSavedTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('caracore_theme', next); } catch (err) { /* silencioso */ }
      updateThemeIcon(next);
    });
  }
});
