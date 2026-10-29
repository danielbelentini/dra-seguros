/**
 * Helper central de analytics (dataLayer).
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

/**
 * Envia o evento `whatsapp_click` ao dataLayer para o link informado.
 * Inicializa o dataLayer sem substituir um array já existente (o GTM,
 * quando carrega, reaproveita o mesmo array).
 */
export function trackWhatsappClick(element) {
  if (typeof window === 'undefined' || !element) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    page_name: getPageName(window.location.pathname),
    section_name: element.getAttribute('data-wa-section'),
    button_name: element.getAttribute('data-wa-button'),
    button_label: getButtonLabel(element),
    link_url: element.href,
  });
}
