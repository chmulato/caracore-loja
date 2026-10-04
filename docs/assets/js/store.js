/* ==========================================================================
   CARA CORE INFORMÁTICA — CENTRAL DE DOWNLOADS (STORE.JS)
   Lógica interativa: Busca, Filtros, Cópia SHA256 e Modal de Integridade
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('search-input');
  const chipButtons = document.querySelectorAll('.chip-btn');
  const osFilterSelect = document.getElementById('os-filter');
  const productCards = document.querySelectorAll('.product-card');
  const resultsSummaryEl = document.getElementById('results-summary');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const toastEl = document.getElementById('toast-msg');
  const integrityModal = document.getElementById('integrity-modal');
  const openModalBtn = document.getElementById('open-integrity-modal');
  const closeModalBtn = document.getElementById('close-integrity-modal');

  let currentCategory = 'all';
  let currentOS = 'all';
  let searchQuery = '';

  // Filter function
  function filterCards() {
    let visible = 0;

    productCards.forEach(card => {
      const title = card.getAttribute('data-title')?.toLowerCase() || '';
      const desc = card.getAttribute('data-desc')?.toLowerCase() || '';
      const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
      const category = card.getAttribute('data-category') || '';
      const platforms = card.getAttribute('data-platforms')?.toLowerCase() || '';

      const matchesSearch = !searchQuery || 
        title.includes(searchQuery) || 
        desc.includes(searchQuery) || 
        tags.includes(searchQuery);

      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      const matchesOS = currentOS === 'all' || platforms.includes(currentOS.toLowerCase());

      if (matchesSearch && matchesCategory && matchesOS) {
        card.style.display = 'flex';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsSummaryEl) {
      resultsSummaryEl.textContent = `Mostrando ${visible} de ${productCards.length} itens do catálogo`;
    }

    const noResultsEl = document.getElementById('no-results-state');
    if (noResultsEl) {
      noResultsEl.style.display = visible === 0 ? 'block' : 'none';
    }
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }

  // Category chip handlers
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-cat') || 'all';
      filterCards();
    });
  });

  // OS select handler
  if (osFilterSelect) {
    osFilterSelect.addEventListener('change', (e) => {
      currentOS = e.target.value;
      filterCards();
    });
  }

  // Copy SHA256 function
  window.copyHash = function(hash, buttonEl) {
    if (!navigator.clipboard) {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = hash;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } else {
      navigator.clipboard.writeText(hash);
    }

    showToast('Hash SHA256 copiado com sucesso!');

    if (buttonEl) {
      const originalHtml = buttonEl.innerHTML;
      buttonEl.innerHTML = '<i class="fas fa-check" style="color: var(--emerald-400);"></i>';
      setTimeout(() => {
        buttonEl.innerHTML = originalHtml;
      }, 1800);
    }
  };

  // Toast notification
  function showToast(text) {
    if (!toastEl) return;
    toastEl.querySelector('.toast-text').textContent = text;
    toastEl.classList.add('show');
    setTimeout(() => {
      toastEl.classList.remove('show');
    }, 2800);
  }

  // Theme toggle
  const savedTheme = localStorage.getItem('caracore_theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const newTheme = isLight ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('caracore_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'light' 
      ? '<i class="fas fa-moon"></i>' 
      : '<i class="fas fa-sun"></i>';
  }

  // Integrity modal
  if (openModalBtn && integrityModal) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      integrityModal.classList.add('active');
    });
  }

  if (closeModalBtn && integrityModal) {
    closeModalBtn.addEventListener('click', () => {
      integrityModal.classList.remove('active');
    });
  }

  if (integrityModal) {
    integrityModal.addEventListener('click', (e) => {
      if (e.target === integrityModal) {
        integrityModal.classList.remove('active');
      }
    });
  }

  // Keyboard escape for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && integrityModal && integrityModal.classList.contains('active')) {
      integrityModal.classList.remove('active');
    }
  });

  // Run initial filter
  filterCards();
});
