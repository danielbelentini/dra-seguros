'use client';

import { useEffect } from 'react';
import { trackWhatsappClick } from '@/lib/analytics';

// Único listener de cliques do site para o evento "whatsapp_click".
// Montado uma vez no layout; usa delegação de evento, então cobre qualquer
// link marcado com data-wa-section + data-wa-button (inclusive em
// componentes renderizados no servidor) sem listeners por botão.
// O push acontece de forma síncrona no clique, antes da navegação, e não
// chama preventDefault: o link se comporta exatamente como antes.
export default function WhatsappTracker() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[data-wa-button][data-wa-section]');
      if (link) trackWhatsappClick(link);
    };

    // O clique com o botão do meio (abrir em nova aba) não dispara "click",
    // só "auxclick". Os dois eventos são exclusivos para um mesmo gesto, então
    // não há risco de duplicar. O botão direito (button 2) é ignorado.
    const handleAuxClick = (event) => {
      if (event.button === 1) handleClick(event);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('auxclick', handleAuxClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('auxclick', handleAuxClick);
    };
  }, []);

  return null;
}
