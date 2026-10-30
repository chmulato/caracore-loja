/* ==========================================================================
   CARA CORE INFORMÁTICA — CENTRAL DE DOWNLOADS (DOWNLOAD-APP.JS)
   Substitui store.js no padrão das lojas (Tailwind + portal-style.css).
   Mantém o contrato antigo: busca, chips de objetivo, filtro de maturidade,
   filtro de sistema, cópia de SHA-256, modal de integridade e tema claro/escuro.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------- elementos */
  const searchInput = document.getElementById('search-input');
  const chipButtons = Array.from(document.querySelectorAll('.chip-btn'));
  const maturityButtons = Array.from(document.querySelectorAll('.maturity-btn'));
  const osFilterSelect = document.getElementById('os-filter');
  const catalog = document.getElementById('products-catalog');
  const productCards = Array.from(document.querySelectorAll('#products-catalog > .product-card'));
  const resultsSummaryEl = document.getElementById('results-summary');
  const themeToggleBtn = document.getElementById('theme-toggle');
  const toastEl = document.getElementById('toast-msg');
  const integrityModal = document.getElementById('integrity-modal');
  const openModalBtn = document.getElementById('open-integrity-modal');
  const closeModalBtn = document.getElementById('close-integrity-modal');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  let currentGoal = 'all';
  let currentMaturity = 'all';
  let currentOS = 'all';
  let searchQuery = '';

  /* Grupos do catálogo, na ordem do catálogo canônico da matriz:
     Núcleo · Produtos verticais · Educação · Infraestrutura · Em breve.
     O rótulo da página é comercial; o id vem de catalog-data.js. */
  const catalogGroups = [
    {
      id: 'nucleo',
      eyebrow: 'Núcleo',
      title: 'Os produtos que conduzem a operação',
      description: 'PDV, CSO e Hub: caixa, frota e encomendas com o próprio acesso.',
      cards: ['pdv-java', 'pdv-v4', 'pdv-rust', 'cso-frotas', 'hub']
    },
    {
      id: 'produtos-verticais',
      eyebrow: 'Produtos verticais',
      title: 'Ferramentas de nicho',
      description: 'Agenda, estação de tratamento e bioinsumos.',
      cards: ['ink', 'ete', 'bioreator40']
    },
    {
      id: 'educacao',
      eyebrow: 'Educação',
      title: 'Formação e estudo',
      description: 'Lógica, identidade e leitura técnica.',
      cards: ['circuito', 'oidc', 'rebeldia']
    },
    {
      id: 'infraestrutura',
      eyebrow: 'Infraestrutura',
      title: 'Gestão local de licenças',
      description: 'Ferramenta de apoio ao ecossistema, com banco próprio.',
      cards: ['caracore-seed']
    },
    {
      id: 'em-breve',
      eyebrow: 'Em breve',
      title: 'Sem arquivo publicado',
      description: 'Itens em desenvolvimento. Nenhum botão de download, só o aviso de lançamento.',
      cards: ['cso-transportes', 'helianto']
    }
  ];

  /* ------------------------------------------------------- menu do topo */
  if (menuToggleBtn && mobileMenu) {
    menuToggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* -------------------------------------------------- organizar catálogo */
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
          <span class="catalog-eyebrow">${group.eyebrow}</span>
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

        /* O hash fica à vista; o resto do detalhe técnico recolhe. */
        const technicalDetails = document.createElement('details');
        technicalDetails.className = 'technical-details';
        technicalDetails.innerHTML = '<summary>Detalhes técnicos</summary>';

        ['.screen-schema', '.trust-metrics', '.specs-box'].forEach(selector => {
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

  /* ------------------------------------------- catálogo a partir do JSON */
  /* produtos.json é a fonte de versão, status, links e SHA-256. O HTML de
     cada card continua sendo o fallback quando o JSON não carrega. */
  const CATALOG_DATA_URL = 'assets/data/produtos.json';

  function hydrateProductCard(produto) {
    const card = document.getElementById(produto.ancora);
    if (!card) return;

    const versionTag = card.querySelector('.version-tag');
    if (versionTag && produto.rotuloVersao) versionTag.textContent = produto.rotuloVersao;

    /* Selo sempre com o rótulo e o id do catálogo canônico. */
    const badge = card.querySelector('.status-badge');
    const estagios = (window.CARACORE_CATALOG && window.CARACORE_CATALOG.estagios) || [];
    const estagio = estagios.find(item => item.id === produto.estagio);
    if (badge && estagio) {
      badge.textContent = estagio.rotulo;
      badge.className = 'status-badge status-' + estagio.id;
    }

    const downloads = Array.isArray(produto.downloads) ? produto.downloads : [];
    const primary = downloads.find(item => item.principal) || downloads[0];
    const primaryBtn = card.querySelector('.btn-download-primary');
    if (primaryBtn && primary && primary.url) primaryBtn.setAttribute('href', primary.url);

    const altButtons = Array.from(card.querySelectorAll('.btn-sub-dl'));
    downloads.filter(item => item !== primary).forEach((download, index) => {
      if (altButtons[index] && download.url) altButtons[index].setAttribute('href', download.url);
    });

    const hashes = Array.isArray(produto.sha256) ? produto.sha256 : [];
    const hashCodes = Array.from(card.querySelectorAll('.hash-code'));
    hashes.forEach((hash, index) => {
      if (!hashCodes[index] || !hash.valor) return;
      hashCodes[index].textContent = hash.valor;
      const box = hashCodes[index].closest('.checksum-box');
      const copyBtn = box ? box.querySelector('.btn-copy-hash') : null;
      if (copyBtn) copyBtn.setAttribute('onclick', "copyHash('" + hash.valor + "', this)");
    });
  }

  async function loadCatalogData() {
    try {
      const response = await fetch(CATALOG_DATA_URL, { cache: 'no-cache' });
      if (!response.ok) return;
      const data = await response.json();
      (data.produtos || []).forEach(hydrateProductCard);
      document.documentElement.classList.add('catalog-from-json');
    } catch (err) { /* sem JSON: o HTML estático continua valendo */ }
  }

  loadCatalogData();

  /* ------------------------------------------------------------ filtrar */
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

  /* -------------------------------------------------- busca e filtros */
  let searchTimer = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      clearTimeout(searchTimer);
      searchTimer = setTimeout(filterCards, 120);
    });
  }

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
  if (['disponivel', 'beta', 'piloto', 'desenvolvimento'].includes(initialMaturity)) {
    currentMaturity = initialMaturity;
    maturityButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-maturity') === initialMaturity);
    });
  }

  if (osFilterSelect) {
    osFilterSelect.addEventListener('change', (e) => {
      currentOS = e.target.value;
      filterCards();
    });
  }

  /* -------------------------------------------------- copiar SHA-256 */
  function showToast(text) {
    if (!toastEl) return;
    const textEl = toastEl.querySelector('.toast-text');
    if (textEl) textEl.textContent = text;
    toastEl.classList.add('show');
    setTimeout(() => toastEl.classList.remove('show'), 2800);
  }

  window.copyHash = function (hash, buttonEl) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(hash).catch(() => fallbackCopy(hash));
    } else {
      fallbackCopy(hash);
    }

    showToast('Hash SHA-256 copiado com sucesso!');

    if (buttonEl) {
      const originalHtml = buttonEl.innerHTML;
      buttonEl.classList.add('copied');
      buttonEl.innerHTML = '<i class="fas fa-check"></i>';
      setTimeout(() => {
        buttonEl.innerHTML = originalHtml;
        buttonEl.classList.remove('copied');
      }, 1800);
    }
  };

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'absolute';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (err) { /* silencioso */ }
    document.body.removeChild(ta);
  }

  /* --------------------------------------------------------- tema */
  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    themeToggleBtn.setAttribute('aria-label',
      theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  }

  const savedTheme = localStorage.getItem('caracore_theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('caracore_theme', next);
      updateThemeIcon(next);
    });
  }

  /* ------------------------------------------------ modal de integridade */
  function openModal() {
    if (!integrityModal) return;
    integrityModal.classList.add('active');
    integrityModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeModalBtn) closeModalBtn.focus();
  }

  function closeModal() {
    if (!integrityModal) return;
    integrityModal.classList.remove('active');
    integrityModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (openModalBtn) openModalBtn.focus();
  }

  /* Qualquer link para #ajuda-integridade (topo, menu mobile) abre o modal. */
  document.querySelectorAll('a[href="#ajuda-integridade"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openModal();
    });
  });

  if (openModalBtn) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (integrityModal) {
    integrityModal.addEventListener('click', (e) => {
      if (e.target === integrityModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && integrityModal && integrityModal.classList.contains('active')) {
      closeModal();
    }
  });

  if (location.hash === '#ajuda-integridade') openModal();

  /* -------------------------------------------------- estado inicial */
  filterCards();

  /* Âncora para produto (download.html#hub) precisa sobreviver à
     reorganização dos cards, por isso o scroll é refeito aqui. */
  const anchor = (location.hash || '').replace('#', '');
  if (anchor && anchor !== 'ajuda-integridade') {
    const target = document.getElementById(anchor);
    if (target && target.classList.contains('product-card')) {
      target.scrollIntoView({ block: 'center' });
    }
  }
});
