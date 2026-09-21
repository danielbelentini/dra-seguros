import Container from './Container';
import Flourish from './Flourish';
import SmartImage from './SmartImage';
import TestimonialsGrid from './TestimonialsGrid';
import { site, purpose, aboutTestimonials, yearsExperience } from '@/data/content';

// Reúne a apresentação da D.R.A./Daniela e os depoimentos numa única
// seção, em vez de duas seções separadas. Nenhuma informação biográfica
// além do que a cliente forneceu (seção 5 do briefing original: propósito
// institucional + anos de experiência).
export default function AboutTestimonials() {
  return (
    <section id="sobre" className="bg-cream-100 py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="relative mx-auto w-full max-w-[380px] md:max-w-none">
            <div
              className="absolute -bottom-5 -right-5 -z-10 hidden h-full w-full rounded-[6px] bg-maroon-50 md:block"
              aria-hidden="true"
            />
            <SmartImage
              src="/images/about"
              alt="Daniela Regina de Almeida"
              width={900}
              height={1100}
              className="w-full rounded-[6px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-[2rem] leading-[1.2] text-maroon-900 sm:text-[2.3rem]">
              {aboutTestimonials.title}
            </h2>
            <Flourish className="mt-5" />
            <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-ink/75">{purpose}</p>
            <p className="mt-5 text-[15px] text-maroon-700">
              {site.ownerName} · {yearsExperience} anos de experiência
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-maroon-700/15 pt-16">
          <p className="text-center text-[15px] font-medium text-maroon-500">
            {aboutTestimonials.testimonialsSubtitle}
          </p>
          <div className="mx-auto mt-10 max-w-4xl">
            <TestimonialsGrid />
          </div>
        </div>
      </Container>
    </section>
  );
}
