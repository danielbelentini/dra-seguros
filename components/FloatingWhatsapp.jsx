'use client';

import SmartImage from './SmartImage';
import { getWhatsappLink, floatingWhatsapp } from '@/data/content';
import { trackWhatsappClick } from '@/lib/analytics';

// Substitui o botão tradicional de WhatsApp por um avatar ilustrado da
// Daniela (o arquivo já traz um pequeno símbolo do WhatsApp embutido) —
// sem círculo verde grande em volta, sem exagero visual.
export default function FloatingWhatsapp() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick('floating_button')}
      aria-label={`${floatingWhatsapp.hoverTitle}, ${floatingWhatsapp.hoverSubtitle}`}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 md:bottom-7 md:right-7"
    >
      <span className="pointer-events-none hidden -translate-x-2 flex-col items-end rounded-[6px] bg-cream-100 px-4 py-2.5 text-right opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 md:flex">
        <span className="text-[13px] font-semibold text-maroon-800">{floatingWhatsapp.hoverTitle}</span>
        <span className="text-[12px] text-ink/60">{floatingWhatsapp.hoverSubtitle}</span>
      </span>

      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full p-1 shadow-lg transition-transform duration-200 group-hover:scale-105">
        <SmartImage
          src={floatingWhatsapp.avatarSrc}
          alt="Falar com a Daniela no WhatsApp"
          width={64}
          height={64}
          className="h-full w-full rounded-full object-cover"
        />
      </span>
    </a>
  );
}
