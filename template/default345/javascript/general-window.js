/* ============================================================
   Agrupamento de Escolas Escultor António Fernandes de Sá
   Janela de boas-vindas estilo Windows clássico
   ============================================================ */

(function () {
  'use strict';

  /* ── CSS injetado ── */
  const css = `
    /* Overlay */
    #slb-welcome-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, .45);
      z-index: 99998;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: slb-fade-in .15s ease;
    }

    @keyframes slb-fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    /* Janela principal */
    #slb-welcome-window {
      position: relative;
      width: 420px;
      background: #d4d0c8;
      border: 2px solid;
      border-color: #ffffff #808080 #808080 #ffffff;
      box-shadow: 2px 2px 0 #000, inset 1px 1px 0 #dfdfdf;
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      font-size: 11px;
      color: #000;
      animation: slb-pop-in .2s ease;
      user-select: none;
      cursor: default;
    }

    @keyframes slb-pop-in {
      from { transform: scale(.92); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }

    /* Barra de título */
    #slb-welcome-titlebar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3px 4px 3px 6px;
      background: linear-gradient(to right, #0a246a, #a6caf0);
      height: 22px;
    }

    #slb-welcome-titlebar-left {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    #slb-welcome-titlebar-icon {
      width: 16px;
      height: 16px;
      image-rendering: pixelated;
      flex-shrink: 0;
    }

    #slb-welcome-titlebar-text {
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      font-size: 11px;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 1px 1px 0 #00008B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: .01em;
    }

    /* Botão fechar */
    #slb-welcome-close {
      width: 21px;
      height: 21px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    #slb-welcome-close img {
      width: 21px;
      height: 21px;
      image-rendering: pixelated;
      display: block;
      border: none;
    }

    /* Corpo da janela */
    #slb-welcome-body {
      padding: 16px 18px 14px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    /* Área de conteúdo com ícone */
    #slb-welcome-content {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    #slb-welcome-mascot {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      image-rendering: pixelated;
    }

    #slb-welcome-message {
      flex: 1;
    }

    #slb-welcome-message p {
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      font-size: 12px;
      color: #000;
      line-height: 1.55;
      margin: 0 0 6px;
    }

    #slb-welcome-message p:last-child {
      margin-bottom: 0;
    }

    #slb-welcome-message strong {
      font-weight: bold;
      color: #0a246a;
    }

    /* Separador */
    #slb-welcome-divider {
      height: 2px;
      background: transparent;
      border-top: 1px solid #808080;
      border-bottom: 1px solid #ffffff;
      margin: 2px 0;
    }

    /* Área de botões */
    #slb-welcome-footer {
      display: flex;
      justify-content: center;
      gap: 8px;
      padding-top: 4px;
    }

    /* Botão OK estilo Windows */
    #slb-welcome-ok {
      min-width: 80px;
      height: 23px;
      padding: 0 14px;
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      font-size: 11px;
      color: #000;
      background: #d4d0c8;
      border: 2px solid;
      border-color: #ffffff #808080 #808080 #ffffff;
      box-shadow: inset 1px 1px 0 #dfdfdf;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
    }

    #slb-welcome-ok:hover {
      background: #e0ddd6;
    }

    #slb-welcome-ok:active {
      border-color: #808080 #ffffff #ffffff #808080;
      box-shadow: inset 1px 1px 0 #808080;
      padding-top: 1px;
      padding-left: 15px;
    }

    /* Barra de progresso decorativa */
    #slb-welcome-progress-wrap {
      background: #fff;
      border: 1px solid;
      border-color: #808080 #dfdfdf #dfdfdf #808080;
      height: 14px;
      overflow: hidden;
    }

    #slb-welcome-progress-bar {
      height: 100%;
      background: repeating-linear-gradient(
        90deg,
        #0a246a 0px,
        #0a246a 8px,
        #a6caf0 8px,
        #a6caf0 10px
      );
      animation: slb-progress 1.8s ease-in-out infinite alternate;
      width: 40%;
    }

    @keyframes slb-progress {
      from { margin-left: 0; }
      to   { margin-left: 60%; }
    }

    /* Checkbox "não mostrar novamente" */
    #slb-welcome-checkbox-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'Tahoma', 'MS Sans Serif', Arial, sans-serif;
      font-size: 11px;
      color: #000;
      cursor: pointer;
    }

    #slb-welcome-checkbox {
      width: 13px;
      height: 13px;
      border: 1px solid;
      border-color: #808080 #ffffff #ffffff #808080;
      background: #fff;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      flex-shrink: 0;
      position: relative;
    }

    #slb-welcome-checkbox:checked::after {
      content: "✔";
      position: absolute;
      top: -2px;
      left: 1px;
      font-size: 10px;
      color: #000;
      font-weight: bold;
    }
  `;

  /* ── Injetar CSS ── */
  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'slb-welcome-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── Construir HTML da janela ── */
  function buildWindow() {
    const overlay = document.createElement('div');
    overlay.id = 'slb-welcome-overlay';

    overlay.innerHTML = `
      <div id="slb-welcome-window" role="dialog" aria-modal="true" aria-labelledby="slb-welcome-titlebar-text">

        <!-- Barra de título -->
        <div id="slb-welcome-titlebar">
          <div id="slb-welcome-titlebar-left">
            <!-- Ícone de pasta/escola clássico em SVG inline (16×16) -->
            <svg id="slb-welcome-titlebar-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="4" width="14" height="10" fill="#f0c040" stroke="#808000" stroke-width="1"/>
              <rect x="1" y="5" width="14" height="9" fill="#ffd966"/>
              <rect x="1" y="4" width="5" height="2" fill="#f0c040" stroke="#808000" stroke-width="1"/>
              <rect x="2" y="7" width="12" height="1" fill="#fff" opacity=".3"/>
            </svg>
            <span id="slb-welcome-titlebar-text">Bem-vindo</span>
          </div>
          <!-- Botão fechar com imagem externa -->
          <button id="slb-welcome-close" title="Fechar" aria-label="Fechar janela">
            <img
              id="slb-close-img"
              src="https://arvoredosaber.neocities.org/cancel.png"
              alt="Fechar"
            />
          </button>
        </div>

        <!-- Corpo -->
        <div id="slb-welcome-body">

          <!-- Mensagem principal -->
          <div id="slb-welcome-content">
            <!-- Ícone de escola SVG 48×48 -->
            <svg id="slb-welcome-mascot" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <!-- Edifício -->
              <rect x="4"  y="20" width="40" height="24" fill="#c8d8e8" stroke="#4a5568" stroke-width="1.5"/>
              <!-- Telhado -->
              <polygon points="2,20 24,6 46,20" fill="#d4736a" stroke="#4a5568" stroke-width="1.5"/>
              <!-- Porta -->
              <rect x="19" y="34" width="10" height="10" rx="1" fill="#8b6914" stroke="#4a5568" stroke-width="1"/>
              <circle cx="27" cy="39" r="1" fill="#ffd700"/>
              <!-- Janela esquerda -->
              <rect x="8"  y="26" width="8" height="7" fill="#87ceeb" stroke="#4a5568" stroke-width="1"/>
              <line x1="12" y1="26" x2="12" y2="33" stroke="#4a5568" stroke-width=".8"/>
              <line x1="8"  y1="29" x2="16" y2="29" stroke="#4a5568" stroke-width=".8"/>
              <!-- Janela direita -->
              <rect x="32" y="26" width="8" height="7" fill="#87ceeb" stroke="#4a5568" stroke-width="1"/>
              <line x1="36" y1="26" x2="36" y2="33" stroke="#4a5568" stroke-width=".8"/>
              <line x1="32" y1="29" x2="40" y2="29" stroke="#4a5568" stroke-width=".8"/>
              <!-- Bandeira no topo -->
              <line x1="24" y1="4" x2="24" y2="0" stroke="#4a5568" stroke-width="1"/>
              <polygon points="24,0 32,2 24,4" fill="#006600"/>
            </svg>

            <div id="slb-welcome-message">
              <p>Bem-vindo ao site do<br>
              <strong>Agrupamento de Escolas<br>Escultor António Fernandes de Sá!</strong></p>
              <p>Esperamos que encontre toda a informação que procura. Explore as nossas secções e fique a par das novidades da nossa comunidade escolar.</p>
            </div>
          </div>

          <!-- Barra de progresso decorativa -->
          <div id="slb-welcome-progress-wrap">
            <div id="slb-welcome-progress-bar"></div>
          </div>

          <div id="slb-welcome-divider"></div>

          <!-- Rodapé com checkbox + botão OK -->
          <div id="slb-welcome-footer">
            <label id="slb-welcome-checkbox-wrap">
              <input type="checkbox" id="slb-welcome-checkbox" />
              Não mostrar novamente
            </label>
            <button id="slb-welcome-ok">
              ✔&nbsp;OK
            </button>
          </div>

        </div>
      </div>
    `;

    return overlay;
  }

  /* ── Fechar janela ── */
  function closeWindow(overlay) {
    overlay.style.transition = 'opacity .15s ease';
    overlay.style.opacity = '0';
    setTimeout(function () {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      const style = document.getElementById('slb-welcome-styles');
      if (style) style.parentNode.removeChild(style);
    }, 150);
  }

  /* ── Inicializar ── */
  function init() {
    /* Verificar se o utilizador escolheu "não mostrar novamente" */
    try {
      if (localStorage.getItem('slb-welcome-dismissed') === '1') return;
    } catch (e) { /* localStorage pode estar bloqueado */ }

    injectStyles();

    const overlay = buildWindow();
    document.body.appendChild(overlay);

    const closeBtn  = document.getElementById('slb-welcome-close');
    const closeImg  = document.getElementById('slb-close-img');
    const okBtn     = document.getElementById('slb-welcome-ok');
    const checkbox  = document.getElementById('slb-welcome-checkbox');

    /* Hover na imagem do botão fechar */
    closeBtn.addEventListener('mouseenter', function () {
      closeImg.src = 'https://arvoredosaber.neocities.org/cancel_f2.png';
    });
    closeBtn.addEventListener('mouseleave', function () {
      closeImg.src = 'https://arvoredosaber.neocities.org/cancel.png';
    });

    /* Fechar ao clicar no × */
    closeBtn.addEventListener('click', function () {
      guardarPreferencia();
      closeWindow(overlay);
    });

    /* Fechar ao clicar em OK */
    okBtn.addEventListener('click', function () {
      guardarPreferencia();
      closeWindow(overlay);
    });

    /* Fechar ao clicar fora da janela */
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        guardarPreferencia();
        closeWindow(overlay);
      }
    });

    /* Fechar com ESC */
    document.addEventListener('keydown', function onKeyDown(e) {
      if (e.key === 'Escape') {
        guardarPreferencia();
        closeWindow(overlay);
        document.removeEventListener('keydown', onKeyDown);
      }
    });

    /* Guardar preferência "não mostrar" */
    function guardarPreferencia() {
      if (checkbox && checkbox.checked) {
        try { localStorage.setItem('slb-welcome-dismissed', '1'); } catch (e) {}
      }
    }

    /* Focar o botão OK por acessibilidade */
    setTimeout(function () { okBtn.focus(); }, 100);
  }

  /* Correr após o DOM estar pronto */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
