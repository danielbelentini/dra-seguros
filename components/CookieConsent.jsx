'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Container from './Container';
import { cookieConsent, privacyHref } from '@/data/content';
import {
  OPEN_PREFERENCES_EVENT,
  applyConsent,
  loadGtm,
  readConsent,
  writeConsent,
} from '@/lib/consent';

// Barra de consentimento (fixa na parte de baixo, não bloqueante) e painel
// de preferências (aberto pelo botão "Preferências de cookies" do rodapé).
//
// Regras:
//  - Nada é renderizado antes de ler a escolha salva (evita o "pisca" do
//    banner na hidratação).
//  - "Aceitar" e "Recusar" têm exatamente o mesmo estilo e destaque.
//  - Quando a barra está aberta, ela publica sua altura em
//    --consent-bar-height (usada pelo botão flutuante do WhatsApp e pelo
//    padding do body, para nada ficar escondido atrás dela).

const choiceButtonClass =
  'inline-flex items-center justify-center rounded-[4px] bg-maroon-700 px-6 py-3 text-[15px] font-semibold tracking-wide text-cream-100 transition-colors duration-200 hover:bg-maroon-800 active:bg-maroon-900';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function CookieConsent() {
  const { banner, preferences } = cookieConsent;

  const [ready, setReady] = useState(false);
  const [record, setRecord] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);

  const barRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  const barVisible = ready && !record;

  // Leitura inicial da escolha salva + abertura do painel pelo rodapé.
  useEffect(() => {
    const saved = readConsent();
    setRecord(saved);
    setReady(true);
    // Escolha anterior ainda válida e com análise autorizada: carrega o GTM
    // (com o Consent Mode já configurado) sem perguntar de novo.
    if (saved && saved.analytics) loadGtm();

    const handleOpen = () => {
      openerRef.current = document.activeElement;
      const current = readConsent();
      setDraftAnalytics(Boolean(current && current.analytics));
      setModalOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpen);
  }, []);

  // Publica a altura da barra para o resto da página.
  useEffect(() => {
    const root = document.documentElement;
    const el = barRef.current;
    if (!barVisible || !el) {
      root.style.removeProperty('--consent-bar-height');
      return undefined;
    }
    const update = () => root.style.setProperty('--consent-bar-height', `${el.offsetHeight}px`);
    update();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    if (observer) observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', update);
      root.style.removeProperty('--consent-bar-height');
    };
  }, [barVisible]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    const opener = openerRef.current;
    openerRef.current = null;
    // Devolve o foco ao elemento que abriu o painel.
    if (opener && typeof opener.focus === 'function') {
      window.requestAnimationFrame(() => opener.focus());
    }
  }, []);

  const choose = useCallback(
    (analytics) => {
      const saved = writeConsent(analytics);
      setRecord(saved);
      closeModal();
      applyConsent(analytics);
    },
    [closeModal]
  );

  // Foco controlado, Esc e Tab dentro do painel; bloqueia a rolagem do fundo.
  useEffect(() => {
    if (!modalOpen) return undefined;
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const getFocusable = () => Array.from(dialog.querySelectorAll(FOCUSABLE));
    const first = dialog.querySelector('[data-autofocus]') || getFocusable()[0];
    if (first) first.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = getFocusable();
      if (!items.length) return;
      const head = items[0];
      const tail = items[items.length - 1];
      const active = document.activeElement;
      if (!dialog.contains(active)) {
        event.preventDefault();
        head.focus();
      } else if (event.shiftKey && active === head) {
        event.preventDefault();
        tail.focus();
      } else if (!event.shiftKey && active === tail) {
        event.preventDefault();
        head.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [modalOpen, closeModal]);

  if (!ready) return null;

  return (
    <>
      {barVisible ? (
        <div
          ref={barRef}
          role="region"
          aria-label="Aviso de cookies"
          data-cookie-bar
          className="fixed inset-x-0 bottom-0 z-50 border-t border-maroon-700/20 bg-cream-100 shadow-[0_-8px_24px_rgba(74,14,27,0.12)]"
        >
          <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-10 md:py-5">
            <div className="max-w-3xl">
              <p className="font-display text-[1.05rem] leading-snug text-maroon-900">
                {banner.title}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-ink/75">
                {banner.text}{' '}
                <a
                  href={privacyHref}
                  className="font-medium text-maroon-700 underline underline-offset-2 hover:text-maroon-900"
                >
                  {banner.policyLabel}
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:flex md:shrink-0">
              <button
                type="button"
                data-cookie-accept
                className={choiceButtonClass}
                onClick={() => choose(true)}
              >
                {banner.acceptLabel}
              </button>
              <button
                type="button"
                data-cookie-decline
                className={choiceButtonClass}
                onClick={() => choose(false)}
              >
                {banner.declineLabel}
              </button>
            </div>
          </Container>
        </div>
      ) : null}

      {modalOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            data-cookie-dialog
            className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[8px] bg-cream-100 p-6 shadow-xl sm:rounded-[8px] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="cookie-preferences-title"
                className="font-display text-[1.5rem] leading-tight text-maroon-900"
              >
                {preferences.title}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                aria-label={preferences.closeLabel}
                className="-mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-maroon-800 transition-colors hover:bg-maroon-50"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/75">
              {preferences.intro}{' '}
              <a
                href={privacyHref}
                className="font-medium text-maroon-700 underline underline-offset-2 hover:text-maroon-900"
              >
                {preferences.policyLabel}
              </a>
            </p>

            <div className="mt-6 space-y-5">
              <div className="border-t border-maroon-700/15 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-[1.05rem] text-maroon-900">
                    {preferences.necessary.title}
                  </p>
                  <span className="text-[13px] font-semibold text-maroon-700">
                    {preferences.necessary.status}
                  </span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
                  {preferences.necessary.text}
                </p>
              </div>

              <div className="border-t border-maroon-700/15 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p
                    id="cookie-analytics-label"
                    className="font-display text-[1.05rem] text-maroon-900"
                  >
                    {preferences.analytics.title}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-semibold text-maroon-700" aria-hidden="true">
                      {draftAnalytics ? preferences.analytics.onLabel : preferences.analytics.offLabel}
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={draftAnalytics}
                      aria-labelledby="cookie-analytics-label"
                      data-cookie-analytics-switch
                      data-autofocus
                      onClick={() => setDraftAnalytics((value) => !value)}
                      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors duration-200 ${
                        draftAnalytics ? 'bg-maroon-700' : 'bg-ink/30'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block h-5 w-5 rounded-full bg-cream-100 shadow transition-transform duration-200 ${
                          draftAnalytics ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
                  {preferences.analytics.text}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                data-cookie-save
                className={`${choiceButtonClass} w-full sm:w-auto`}
                onClick={() => choose(draftAnalytics)}
              >
                {preferences.saveLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
