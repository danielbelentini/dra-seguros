/**
 * Consentimento de cookies e carregamento condicional do Google Tag Manager.
 *
 * Regras (ver README, seção "Cookies e consentimento"):
 *  - O GTM NÃO é carregado antes de o visitante autorizar os cookies de
 *    análise. Sem autorização (recusa ou ainda sem escolha), nenhuma
 *    requisição vai ao Google e o dataLayer nem é criado.
 *  - A escolha fica no localStorage (chave `dra_consent`), com versão, data
 *    e validade de 6 meses. Escolha expirada ou de outra versão = pergunta
 *    de novo.
 *  - Ao autorizar, o Consent Mode v2 é configurado (padrão "denied" e logo
 *    em seguida `analytics_storage: granted`) ANTES de o GTM ser injetado.
 *  - Ao revogar, os cookies analíticos conhecidos são apagados e a página
 *    recarrega, para que nada do que já estava carregado continue rodando.
 *
 * Este arquivo só tem lógica (sem React). A interface está em
 * components/CookieConsent.jsx.
 */

export const CONSENT_STORAGE_KEY = 'dra_consent';

// Aumente este número sempre que a política de cookies mudar de forma que
// exija nova autorização: todos os visitantes voltam a ver a barra.
export const CONSENT_VERSION = 1;

// Validade da escolha: 6 meses (aprox. 183 dias).
export const CONSENT_VALIDITY_DAYS = 183;

// Eventos internos (window) usados para a interface conversar com este módulo.
export const OPEN_PREFERENCES_EVENT = 'dra:open-cookie-preferences';

const DAY_MS = 24 * 60 * 60 * 1000;

function getStorage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch (e) {
    // Navegador com armazenamento bloqueado: tratado como "sem escolha".
    return null;
  }
}

/**
 * Lê a escolha salva. Retorna null se não houver, se estiver corrompida,
 * se for de outra versão ou se já tiver expirado.
 */
export function readConsent() {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const record = JSON.parse(raw);
    if (!record || record.version !== CONSENT_VERSION) return null;
    if (typeof record.analytics !== 'boolean') return null;
    const expiresAt = Date.parse(record.expiresAt);
    if (Number.isNaN(expiresAt) || Date.now() >= expiresAt) return null;
    return record;
  } catch (e) {
    return null;
  }
}

/** O visitante autorizou os cookies de análise (e a escolha ainda vale)? */
export function hasAnalyticsConsent() {
  const record = readConsent();
  return Boolean(record && record.analytics);
}

/** Salva a escolha. `analytics` é true (autorizou) ou false (recusou). */
export function writeConsent(analytics) {
  const now = Date.now();
  const record = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(analytics),
    decidedAt: new Date(now).toISOString(),
    expiresAt: new Date(now + CONSENT_VALIDITY_DAYS * DAY_MS).toISOString(),
  };
  const storage = getStorage();
  if (storage) {
    try {
      storage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch (e) {
      // Sem armazenamento a escolha vale só nesta visita (a página recarrega
      // na revogação, então o GTM não continua carregado).
    }
  }
  return record;
}

/** Abre o painel de preferências (usado pelo botão do rodapé). */
export function openCookiePreferences() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

// ---------------------------------------------------------------------------
// Google Consent Mode v2 + Google Tag Manager
// ---------------------------------------------------------------------------

// Função gtag no formato esperado pelo Google: empurra o objeto `arguments`
// (e NÃO um array comum) para o dataLayer.
function gtag() {
  window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
}

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

/**
 * Carrega o GTM (uma única vez) já com o Consent Mode v2 configurado.
 * Retorna true se o GTM foi (ou já estava) carregado.
 */
export function loadGtm() {
  if (typeof window === 'undefined') return false;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return false;
  if (window.__draGtmLoaded) return true;

  ensureDataLayer();

  // 1) Estado padrão: tudo negado, exceto segurança.
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
  });

  // 2) O visitante autorizou a análise (e somente ela).
  gtag('consent', 'update', {
    analytics_storage: 'granted',
  });

  // 3) Só agora o container é injetado (snippet padrão do GTM).
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  document.head.appendChild(script);

  window.__draGtmLoaded = true;
  return true;
}

/** O GTM já foi carregado nesta página? */
export function isGtmLoaded() {
  return typeof window !== 'undefined' && Boolean(window.__draGtmLoaded);
}

// ---------------------------------------------------------------------------
// Limpeza de cookies analíticos
// ---------------------------------------------------------------------------

// Cookies do Google Analytics conhecidos: `_ga`, `_ga_<ID>` (GA4), `_gid` e
// `_gat*` (versões antigas). Só são gravados depois da autorização.
function isAnalyticsCookie(name) {
  return name === '_ga' || name === '_gid' || name.startsWith('_ga_') || name.startsWith('_gat');
}

/** Apaga os cookies de análise conhecidos (domínio atual e domínios pai). */
export function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return;
  const names = document.cookie
    .split(';')
    .map((part) => part.split('=')[0].trim())
    .filter(Boolean)
    .filter(isAnalyticsCookie);
  if (!names.length) return;

  // Ex.: "www.draseguros.com.br" -> [www.draseguros.com.br, draseguros.com.br, com.br]
  const host = window.location.hostname;
  const parts = host.split('.');
  const domains = [undefined];
  if (parts.length > 1 && !/^\d+(\.\d+){3}$/.test(host)) {
    for (let i = 0; i < parts.length - 1; i += 1) {
      domains.push(parts.slice(i).join('.'));
    }
  }

  names.forEach((name) => {
    domains.forEach((domain) => {
      const base = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      document.cookie = domain ? `${base}; domain=${domain}` : base;
      if (domain) document.cookie = `${base}; domain=.${domain}`;
    });
  });
}

// ---------------------------------------------------------------------------
// Aplicação da escolha
// ---------------------------------------------------------------------------

/**
 * Aplica a escolha do visitante.
 *  - autorizou: carrega o GTM (se ainda não estiver carregado).
 *  - recusou/revogou: se o GTM já estava carregado nesta página, atualiza o
 *    consentimento para "denied", apaga os cookies e recarrega a página.
 * Retorna "reload" quando a página está sendo recarregada.
 */
export function applyConsent(analytics) {
  if (analytics) {
    loadGtm();
    return 'loaded';
  }

  const wasLoaded = isGtmLoaded();
  if (wasLoaded && typeof window.dataLayer !== 'undefined') {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
  clearAnalyticsCookies();
  if (wasLoaded) {
    window.location.reload();
    return 'reload';
  }
  return 'none';
}
