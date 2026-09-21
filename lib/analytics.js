/**
 * Helper central de analytics. Mantém o disparo de eventos em um só lugar,
 * então basta ajustar aqui se o nome do evento ou os parâmetros mudarem
 * no GTM/GA4 — não precisa mexer em cada componente que tem um botão.
 *
 * Requer o container do GTM carregado (ver app/layout.js + .env.local).
 * Se o GTM não estiver configurado, a função simplesmente não faz nada
 * (não quebra o site em dev/preview sem variável de ambiente).
 */
export function trackWhatsappClick(location) {
  if (typeof window === 'undefined' || !window.dataLayer) return;

  window.dataLayer.push({
    event: 'whatsapp_click',
    click_location: location, // ex.: 'header', 'hero', 'cta_final', 'faq', 'footer'
  });
}
