import Container from './Container';
import Flourish from './Flourish';
import { ongoingSupport } from '@/data/content';

// Trilha vertical contínua (uma linha ligando os quatro momentos), para
// comunicar acompanhamento ao longo do tempo, e não quatro blocos soltos.
export default function OngoingSupport() {
  return (
    <section id="pos-contratacao" className="bg-maroon-900 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.1rem] leading-[1.18] text-cream-100 sm:text-[2.4rem]">
            {ongoingSupport.title}
          </h2>
          <Flourish tone="cream" align="center" className="mt-4" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-relaxed text-cream-100/75">
            {ongoingSupport.intro}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            className="pointer-events-none absolute left-[15px] top-2 bottom-2 w-px bg-cream-100/20"
            aria-hidden="true"
          />
          <ul className="space-y-10">
            {ongoingSupport.items.map((item) => (
              <li key={item.title} className="relative pl-11">
                <span
                  className="absolute left-0 top-1 h-[31px] w-[31px] rounded-full border border-cream-100/40 bg-maroon-900"
                  aria-hidden="true"
                />
                <p className="font-display text-[1.1rem] text-cream-100">{item.title}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-cream-100/75">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-16 max-w-[44ch] border-t border-cream-100/15 pt-8 text-center font-display text-[1.2rem] italic leading-snug text-cream-100">
          {ongoingSupport.closing}
        </p>
      </Container>
    </section>
  );
}
