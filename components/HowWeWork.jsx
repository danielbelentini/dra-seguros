import Container from './Container';
import Flourish from './Flourish';
import { howWeWork } from '@/data/content';

// As quatro etapas formam uma composição contínua (uma linha ligando os
// números), em vez de quatro cards grandes e independentes.
export default function HowWeWork() {
  return (
    <section id="como-trabalho" className="bg-cream-200 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[15px] font-medium text-maroon-500">Como a D.R.A. trabalha</p>
          <h2 className="mt-3 font-display text-[1.7rem] italic leading-snug text-maroon-900 sm:text-[2rem]">
            &ldquo;{howWeWork.title}&rdquo;
          </h2>
          <Flourish align="center" className="mt-5" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-relaxed text-ink/70">
            {howWeWork.intro}
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute inset-x-0 top-[15px] hidden h-px bg-maroon-700/20 lg:block"
            aria-hidden="true"
          />
          {howWeWork.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-maroon-700 text-[13px] font-semibold text-cream-100">
                {index + 1}
              </span>
              <p className="mt-4 font-display text-[1.08rem] leading-snug text-maroon-900">
                {step.title}
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-[46ch] border-t border-maroon-700/15 pt-8 text-center font-display text-[1.2rem] italic leading-snug text-maroon-800">
          {howWeWork.closing}
        </p>
      </Container>
    </section>
  );
}
