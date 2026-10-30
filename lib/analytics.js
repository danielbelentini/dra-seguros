/**
 * Helper central de analytics (dataLayer).
 *
 * Eventos: `whatsapp_click` (links do WhatsApp), `navigation_click` (links que
 * levam a outra página do site) e `social_click` (redes sociais). Os três usam
 * o mesmo mecanismo abaixo. Links de navegação/redes usam data-track-event,
 * data-track-section e data-track-button no lugar de data-wa-*.
 *
 * O rastreamento de cliques no WhatsApp funciona assim:
 *  1. Cada link/botão que leva ao WhatsApp recebe dois atributos:
 *       data-wa-section="hero"            -> seção onde o elemento está
 *       data-wa-button="hero_whatsapp"    -> identificador do elemento
 *  2. Um único listener de clique (components/WhatsappTracker.jsx, montado
 *     uma vez no layout) detecta o clique e chama `trackWhatsappClick`.
 *  3. `page_name`, `button_label` e `link_url` são lidos no momento do clique
 *     (URL da página, texto visível e href reais do elemento).
 *
 * Isso evita duplicar lógica em cada componente: para rastrear um novo botão
 * basta adicionar os dois atributos `data-wa-*` nele.
 *
 * Este arquivo NÃO instala o GTM (isso fica em app/layout.js). Ele só
 * alimenta o `dataLayer`, que o GTM lê quando estiver carregado.
 */

// Identificadores estáveis de página, por rota. Rotas não listadas aqui
// caem no fallback (o próprio caminho convertido em snake_case).
const PAGE_NAMES = {
  '/': 'home',
  '/seguro-auto': 'seguro_auto',
};

export function getPageName(pathname = '/') {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (PAGE_NAMES[path]) return PAGE_NAMES[path];
  const slug = path.replace(/^\/+/, '').replace(/[^a-z0-9]+/gi, '_').toLowerCase();
  return slug || 'home';
}

// Texto visível do elemento no momento do clique, com espaços normalizados.
// Se o elemento não tiver texto visível (ex.: só imagem), usa o aria-label
// já existente nele; nunca inventa um rótulo. Elementos com
// data-wa-label-source="aria-label" usam sempre o aria-label (texto estável
// quando o texto visível só aparece em hover/desktop).
function getButtonLabel(element) {
  const clean = (value) => (value || '').replace(/\s+/g, ' ').trim();
  const aria = clean(element.getAttribute('aria-label'));
  if (element.getAttribute('data-wa-label-source') === 'aria-label' && aria) return aria;
  return clean(element.innerText || element.textContent) || aria;
}

// Monta e envia o evento. Inicializa o dataLayer sem substituir um array já
// existente (o GTM, quando carrega, reaproveita o mesmo array). Todos os
// eventos têm exatamente os mesmos cinco parâmetros além de `event`.
function pushEvent(eventName, element, sectionName, buttonName) {
  if (typeof window === 'undefined' || !element) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    page_name: getPageName(window.location.pathname),
    section_name: sectionName,
    button_name: buttonName,
    button_label: getButtonLabel(element),
    link_url: element.href,
  });
}

/**
 * Envia o evento `whatsapp_click` para o link informado.
 */
export function trackWhatsappClick(element) {
  if (!element) return;
  pushEvent(
    'whatsapp_click',
    element,
    element.getAttribute('data-wa-section'),
    element.getAttribute('data-wa-button')
  );
}

// Caminho sem barra final, para comparar páginas ("/seguro-auto/" = "/seguro-auto").
function normalizePath(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

// O link leva para a mesma página em que o visitante já está? (inclui
// âncoras, como "#sobre" estando na Home.) Só o caminho importa; a âncora
// ("#sobre") e a query string não definem uma página diferente.
function isSamePage(element) {
  try {
    const url = new URL(element.href, window.location.href);
    return (
      url.origin === window.location.origin &&
      normalizePath(url.pathname) === normalizePath(window.location.pathname)
    );
  } catch (e) {
    return false;
  }
}

// Eventos permitidos para links que não são WhatsApp. Qualquer outro valor em
// data-track-event é ignorado, para não criar eventos fora do escopo.
const LINK_EVENTS = ['navigation_click', 'social_click'];

/**
 * Envia `navigation_click` (link para outra página do site) ou
 * `social_click` (redes sociais), conforme data-track-event do link.
 * `navigation_click` só dispara quando o destino é uma página diferente da
 * atual: "Sobre" na Home não gera evento, mas "Sobre" em /seguro-auto
 * (que leva a /#sobre) gera.
 */
export function trackLinkClick(element) {
  if (!element) return;
  const eventName = element.getAttribute('data-track-event');
  if (!LINK_EVENTS.includes(eventName)) return;
  if (eventName === 'navigation_click' && isSamePage(element)) return;
  pushEvent(
    eventName,
    element,
    element.getAttribute('data-track-section'),
    element.getAttribute('data-track-button')
  );
}
