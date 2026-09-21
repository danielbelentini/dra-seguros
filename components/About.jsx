import Container from './Container';
import Flourish from './Flourish';
import SmartImage from './SmartImage';
import Testimonials from './Testimonials';
import { site, purpose } from '@/data/content';

// Seção "Sobre a D.R.A. + prova social" (reorganização da Home): a foto real
// da Daniela, o texto institucional e um depoimento no mesmo momento da
// página — responde "quem está por trás da D.R.A. e por que confiar nela".
// Só usa informações confirmadas pela cliente; nada de biografia inventada.
export default function About() {
  return (
    <section id="sobre" className="bg-cream-100 py-20 md:py-28">
      <Container className="grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="relative mx-auto w-full max-w-[420px] md:sticky md:top-28 md:max-w-none">
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
          <p className="text-[15px] font-medium text-maroon-500">Sobre a D.R.A.</p>
          <h2 className="mt-3 font-display text-[2.1rem] leading-[1.18] text-maroon-900 sm:text-[2.4rem]">
            {site.ownerName}
          </h2>
          <Flourish className="mt-4" />

          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-relaxed text-ink/75">{purpose}</p>

          <Testimonials embedded />
        </div>
      </Container>
    </section>
  );
}
