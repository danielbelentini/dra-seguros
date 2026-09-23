import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { autoProfileApproach } from '@/data/content';

// Substitui a antiga sequência de 6 passos numerados ("Do seu perfil à
// decisão final"), que repetia o conteúdo da seção anterior. Aqui fica
// só o essencial sobre o ponto de partida da cotação — sem simular
// novamente um fluxo de várias etapas.
export default function ProfileApproach() {
  const { eyebrow, title, intro, points, closing } = autoProfileApproach;

  return (
    <section id="como-funciona" className="bg-maroon-900 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" tone="cream" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-cream-100/80">
            {intro}
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-3">
          {points.map((point) => (
            <li key={point.title} className="text-center sm:text-left">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-gold">
                {point.title}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-cream-100/85">{point.text}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-[56ch] text-center text-[15.5px] leading-relaxed text-cream-100/70">
          {closing}
        </p>
      </Container>
    </section>
  );
}
