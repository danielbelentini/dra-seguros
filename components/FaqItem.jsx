'use client';

import { ChevronIcon } from './icons';

// Item de accordion controlado (em vez de <details>/<summary> nativo) para
// permitir: só uma pergunta aberta por vez, transição suave de altura ao
// abrir/fechar e destaque em negrito na pergunta ativa.
export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-maroon-700/15 py-5 last:border-b-0">
      <h3 className="m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className={`flex w-full cursor-pointer items-center justify-between gap-6 text-left text-[16.5px] transition-colors duration-200 ${
            isOpen ? 'font-bold text-maroon-900' : 'font-medium text-maroon-900'
          }`}
        >
          {question}
          <ChevronIcon
            className={`h-5 w-5 shrink-0 text-maroon-700 transition-transform duration-300 ease-out ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>

      {/* Truque do grid-template-rows 0fr/1fr: permite animar para uma
          altura que a gente não conhece de antemão (o texto da resposta),
          coisa que "height: auto" não permite transicionar. */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-ink/70">{answer}</p>
        </div>
      </div>
    </div>
  );
}
