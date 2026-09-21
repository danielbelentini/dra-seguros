import Container from './Container';
import SectionHeading from './SectionHeading';
import ProcessSteps from './ProcessSteps';
import Differentials from './Differentials';
import { HeartIcon } from './icons';
import { philosophyQuote, philosophyText, processSteps } from '@/data/content';

/**
 * Seção única que reúne posicionamento + processo + diferenciais (antes
 * três seções grandes e independentes: Philosophy, ProcessSteps e
 * Differentials). A ideia não é uma seção maior, e sim uma só narrativa com
 * hierarquia interna — ver briefing de reorganização da Home.
 *
 * ProcessSteps e Differentials continuam existindo como componentes
 * próprios (usados também, standalone, em /seguro-auto); aqui eles são
 * renderizados em modo `embedded`, sem duplicar seção/título.
 */
export default function CareApproach() {
  return (
    <section id="como-cuidamos" className="bg-cream-200 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Como a D.R.A. trabalha"
          title="Como a D.R.A. cuida do seu seguro"
          align="center"
        />

        {/* Posicionamento — elemento de abertura/destaque da seção, não um
            título isolado. */}
        <div className="mx-auto mt-10 max-w-[56ch] text-center">
          <p className="flex items-start justify-center gap-3 font-display text-[1.35rem] italic leading-snug text-maroon-800 sm:text-[1.55rem]">
            <HeartIcon className="mt-2 h-4 w-4 shrink-0 text-maroon-500" aria-hidden="true" />
            <span>&ldquo;{philosophyQuote}&rdquo;</span>
          </p>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink/70">{philosophyText}</p>
        </div>

        {/* Processo */}
        <div className="mt-16 border-t border-maroon-700/15 pt-14">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-maroon-500">
            Do primeiro contato à decisão
          </h3>
          <div className="mt-10">
            <ProcessSteps steps={processSteps} tone="cream" embedded />
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-16 border-t border-maroon-700/15 pt-14">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-maroon-500">
            Diferenciais
          </h3>
          <div className="mt-10">
            <Differentials tone="cream" embedded />
          </div>
        </div>
      </Container>
    </section>
  );
}
