/* ==========================================================================
   CARA CORE INFORMÁTICA — CENTRAL DE DOWNLOADS (STORE.JS)
   Lógica interativa: Busca, Filtros, Cópia SHA256 e Modal de Integridade
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('search-input');
  const chipButtons = document.querySelectorAll('.chip-btn');
  const maturityButtons = document.querySelectorAll('.maturity-btn');
  const osFilterSelect = document.getElementById('os-filter');
  const catalog = document.getElementById('products-catalog');
  const productCards = Array.from(document.querySelectorAll('#products-catalog > .product-card'));
  const resultsSummaryEl = document.getElementById('results-summary');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const toastEl = document.getElementById('toast-msg');
  const integrityModal = document.getElementById('integrity-modal');
  const openModalBtn = document.getElementById('open-integrity-modal');
  const closeModalBtn = document.getElementById('close-integrity-modal');

  let currentGoal = 'all';
  let currentMaturity = 'all';
  let currentOS = 'all';
  let searchQuery = '';

  const catalogGroups = [
    {
      id: 'available-downloads',
      title: 'Disponível para download',
      description: 'Versões estáveis para instalar e usar agora.',
      cards: ['pdv-java', 'ink', 'ete', 'oidc', 'circuito', 'bioreator40']
    },
    {
      id: 'evaluation-previews',
      title: 'Avaliação e preview',
      description: 'Pilotos e pré-releases para avaliação; confira o status antes de instalar.',
      cards: ['pdv-v4', 'pdv-rust', 'hub', 'caracore-seed']
    },
    {
      id: 'online-products',
      title: 'Acesso online',
      description: 'Serviços acessados pelo navegador, sem instalador para baixar.',
      cards: ['cso-frotas']
    }
  ];

  function organizeCatalog() {
    if (!catalog || productCards.length === 0) return [];

    const fragment = document.createDocumentFragment();
    const sections = [];

    catalogGroups.forEach(group => {
      const section = document.createElement('section');
      section.className = 'catalog-section';
      section.id = group.id;
      section.innerHTML = `
        <header class="catalog-section-heading">
          <h2>${group.title}</h2>
          <p>${group.description}</p>
        </header>
        <div class="products-grid"></div>
      `;
      const grid = section.querySelector('.products-grid');

      group.cards.forEach(id => {
        const card = productCards.find(item => item.id === id);
        if (!card) return;

        grid.appendChild(card);
        const technicalDetails = document.createElement('details');
        technicalDetails.className = 'technical-details';
        technicalDetails.innerHTML = '<summary>Detalhes técnicos <i class="fas fa-chevron-down" aria-hidden="true"></i></summary>';

        ['.screen-schema', '.trust-metrics', '.specs-box', '.checksum-box'].forEach(selector => {
          card.querySelectorAll(selector).forEach(element => technicalDetails.appendChild(element));
        });

        if (technicalDetails.childElementCount > 1) card.appendChild(technicalDetails);
      });

      if (grid.children.length > 0) {
        fragment.appendChild(section);
        sections.push(section);
      }
    });

    catalog.replaceWith(fragment);
    document.documentElement.classList.add('catalog-enhanced');
    return sections;
  }

  const catalogSections = organizeCatalog();

  // Filter function
  function filterCards() {
    let visible = 0;

    productCards.forEach(card => {
      const title = card.getAttribute('data-title')?.toLowerCase() || '';
      const desc = card.getAttribute('data-desc')?.toLowerCase() || '';
      const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
      const goals = (card.getAttribute('data-goal') || '').split(/\s+/);
      const maturity = card.getAttribute('data-maturity') || '';
      const platforms = card.getAttribute('data-platforms')?.toLowerCase() || '';

      const matchesSearch = !searchQuery || 
        title.includes(searchQuery) || 
        desc.includes(searchQuery) || 
        tags.includes(searchQuery);

      const matchesGoal = currentGoal === 'all' || goals.includes(currentGoal);
      const matchesMaturity = currentMaturity === 'all' || maturity === currentMaturity;

      const matchesOS = currentOS === 'all' || platforms.includes(currentOS.toLowerCase());

      if (matchesSearch && matchesGoal && matchesMaturity && matchesOS) {
        card.style.display = 'flex';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsSummaryEl) {
      resultsSummaryEl.textContent = `Mostrando ${visible} de ${productCards.length} itens do catálogo`;
    }

    catalogSections.forEach(section => {
      section.hidden = !Array.from(section.querySelectorAll('.product-card'))
        .some(card => card.style.display !== 'none');
    });

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
      currentGoal = btn.getAttribute('data-goal') || 'all';
      filterCards();
    });
  });

  maturityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      maturityButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMaturity = btn.getAttribute('data-maturity') || 'all';
      filterCards();
    });
  });

  const initialMaturity = (location.hash || '').replace('#', '');
  if (['estavel', 'piloto', 'preview', 'planejamento'].includes(initialMaturity)) {
    currentMaturity = initialMaturity;
    maturityButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-maturity') === initialMaturity);
    });
  }

  if (location.hash === '#ajuda-integridade' && integrityModal) {
    integrityModal.classList.add('active');
  }

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
