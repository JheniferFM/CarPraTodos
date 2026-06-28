document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if (!body) return;

  const toolbar = document.createElement('div');
  toolbar.className = 'accessibility-toolbar';
  toolbar.setAttribute('aria-label', 'Ferramentas de acessibilidade');
  toolbar.innerHTML = `
    <button class="a11y-btn" type="button" data-action="contrast" aria-label="Alternar alto contraste">
      <i class="bi bi-circle-half"></i>
      <span>Contraste</span>
    </button>
    <button class="a11y-btn" type="button" data-action="font" aria-label="Aumentar fonte">
      <i class="bi bi-type"></i>
      <span>Fonte</span>
    </button>
    <button class="a11y-btn" type="button" data-action="voice" aria-label="Leitura por voz">
      <i class="bi bi-volume-up"></i>
      <span>Voz</span>
    </button>
    <button class="a11y-btn" type="button" data-action="vlibras" aria-label="Abrir suporte de libras">
      <i class="bi bi-signpost-2"></i>
      <span>VLibras</span>
    </button>
  `;

  if (window.matchMedia('(max-width: 767px)').matches) {
    toolbar.style.position = 'static';
    toolbar.style.top = 'auto';
    toolbar.style.bottom = 'auto';
    toolbar.style.right = 'auto';
    toolbar.style.left = 'auto';
    toolbar.style.margin = '1rem auto 0';
    toolbar.style.width = 'min(100%, calc(100vw - 2rem))';
    toolbar.style.maxWidth = '100%';
    toolbar.style.boxShadow = 'none';
    toolbar.style.background = 'rgba(255, 255, 255, 0.98)';
    toolbar.style.zIndex = 'auto';
  }

  const panel = document.createElement('div');
  panel.className = 'a11y-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-live', 'polite');

  const setAccessibilityPanel = (mode = 'default') => {
    if (mode === 'libras') {
      panel.innerHTML = `
        <div class="libras-panel-content">
          <div class="libras-illustration mb-3" style="display:flex;align-items:center;justify-content:center;">
            <div style="width:140px;height:140px;border-radius:999px;background:#e6f4ff;display:flex;align-items:center;justify-content:center;box-shadow:0 16px 36px rgba(0,0,0,0.12);">
              <span style="font-size:4rem;">🤟</span>
            </div>
          </div>
          <strong>Exemplo visual de Libras</strong>
          <p class="mb-3">Veja um gesto simples em Libras para “Olá” e outro para “Navegar”.</p>
          <div class="libras-card p-3 rounded-3 bg-soft mb-3" style="border:1px solid rgba(46,125,50,0.12);">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
              <div style="width:56px;height:56px;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px rgba(0,0,0,0.06);">
                <span style="font-size:2rem;">👋</span>
              </div>
              <div>
                <strong>Olá</strong>
                <p style="margin:0;">Mão aberta junto ao rosto, gesto amigável.</p>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:1rem;">
              <div style="width:56px;height:56px;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 16px rgba(0,0,0,0.06);">
                <span style="font-size:2rem;">👉</span>
              </div>
              <div>
                <strong>Navegar</strong>
                <p style="margin:0;">Apontar com a mão em direção ao caminho desejado.</p>
              </div>
            </div>
          </div>
          <button class="btn btn-outline-primary" type="button" data-action="close-panel">Fechar</button>
        </div>
      `;
    } else {
      panel.innerHTML = `
        <strong>Recursos de acessibilidade</strong>
        <p class="mb-2">O ambiente já oferece contraste, ajuste de fonte, leitura por voz e suporte visual para navegação mais confortável.</p>
        <button class="btn btn-outline-primary" type="button" data-action="close-panel">Fechar</button>
      `;
    }
  };

  setAccessibilityPanel();

  const skipLink = document.createElement('a');
  skipLink.href = '#home';
  skipLink.className = 'visually-hidden focusable';
  skipLink.textContent = 'Pular para o conteúdo principal';

  const bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  bottomNav.setAttribute('aria-label', 'Navegação móvel');

  const navItems = [
    { label: 'Início', icon: 'bi-house-door', targetId: 'home', fallback: 'index.html#home' },
    { label: 'Visão geral', icon: 'bi-grid', targetId: 'sobre', fallback: 'index.html#sobre' },
    { label: 'Benefícios', icon: 'bi-map', targetId: 'beneficios', fallback: 'beneficios.html' },
    { label: 'Serviços', icon: 'bi-journal-bookmark', targetId: 'servicos', fallback: 'index.html#servicos' },
  ];

  bottomNav.innerHTML = navItems.map((item, index) => {
    const activeClass = index === 0 ? ' class="active"' : '';
    return `<a href="${item.fallback}" data-target="${item.targetId}"${activeClass}><i class="bi ${item.icon}"></i><span>${item.label}</span></a>`;
  }).join('');

  document.body.insertBefore(skipLink, document.body.firstChild);
  document.body.appendChild(toolbar);
  document.body.appendChild(panel);
  document.body.appendChild(bottomNav);

  // Navegação do menu móvel
  const navLinks = bottomNav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
      const targetId = this.dataset.target;
      const href = this.getAttribute('href');
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        e.preventDefault();
        e.stopPropagation();

        // Remove active de todos
        navLinks.forEach(a => a.classList.remove('active'));
        // Adiciona active no clicado
        this.classList.add('active');
        
        // Scroll para o elemento
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else if (href) {
        // Deixa o link navegar para a página correta
        window.location.href = href;
      }
    });
  });

  let dragStartX = 0;
  let dragStartY = 0;
  let toolbarLeft = 0;
  let toolbarTop = 0;
  let dragging = false;

  const startDrag = (x, y) => {
    dragging = true;
    toolbar.classList.add('dragging');
    dragStartX = x;
    dragStartY = y;
    const rect = toolbar.getBoundingClientRect();
    toolbarLeft = rect.left;
    toolbarTop = rect.top;
    toolbar.style.position = 'fixed';
    toolbar.style.top = `${toolbarTop}px`;
    toolbar.style.left = `${toolbarLeft}px`;
    toolbar.style.right = 'auto';
    toolbar.style.bottom = 'auto';
    toolbar.style.margin = '0';
  };

  const moveDrag = (x, y) => {
    if (!dragging) return;
    const deltaX = x - dragStartX;
    const deltaY = y - dragStartY;
    toolbar.style.left = `${Math.min(Math.max(toolbarLeft + deltaX, 8), window.innerWidth - toolbar.offsetWidth - 8)}px`;
    toolbar.style.top = `${Math.min(Math.max(toolbarTop + deltaY, 8), window.innerHeight - toolbar.offsetHeight - 8)}px`;
  };

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    toolbar.classList.remove('dragging');
  };

  toolbar.addEventListener('touchstart', (event) => {
    if (event.target.closest('button')) return;
    const touch = event.touches[0];
    startDrag(touch.clientX, touch.clientY);
  });

  toolbar.addEventListener('touchmove', (event) => {
    if (!dragging) return;
    const touch = event.touches[0];
    moveDrag(touch.clientX, touch.clientY);
    event.preventDefault();
  }, { passive: false });

  toolbar.addEventListener('touchend', endDrag);
  toolbar.addEventListener('touchcancel', endDrag);

  toolbar.addEventListener('mousedown', (event) => {
    if (event.target.closest('button')) return;
    startDrag(event.clientX, event.clientY);
  });

  window.addEventListener('mousemove', (event) => {
    if (!dragging) return;
    moveDrag(event.clientX, event.clientY);
  });

  window.addEventListener('mouseup', endDrag);

  toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const action = button.dataset.action;

    if (action === 'contrast') {
      body.classList.toggle('contrast-mode');
      button.classList.toggle('active');
    }

    if (action === 'font') {
      const current = Number(body.dataset.fontScale || 1);
      const next = current >= 3 ? 1 : current + 1;
      body.dataset.fontScale = String(next);
      button.querySelector('span').textContent = next === 1 ? 'Fonte' : `Fonte ${next}`;
    }

    if (action === 'voice') {
      const content = document.querySelector('#home')?.textContent?.trim() || document.querySelector('main')?.textContent?.trim() || document.title;
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = 'pt-BR';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }

    if (action === 'vlibras') {
      setAccessibilityPanel('libras');
      panel.classList.add('open');
    }
  });

  panel.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.action === 'close-panel') {
      panel.classList.remove('open');
    }
  });
});
