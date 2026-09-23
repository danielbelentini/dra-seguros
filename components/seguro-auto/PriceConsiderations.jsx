import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { autoPriceConsiderations } from '@/data/content';

// Substitui as antigas duas seções separadas ("Não é só o menor preço" +
// "O que considerar") por uma única seção editorial e compacta — os 6
// pontos NÃO viram cards grandes, só uma composição em lista leve.
export default function PriceConsiderations() {
  const { eyebrow, title, intro, points, closing } = autoPriceConsiderations;

  return (
    <section id="preco" className="bg-cream-200 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
          <p className="mx-auto mt-6 max-w-[60ch] text-center text-[16.5px] leading-relaxed text-ink/70">
            {intro}
          </p>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point.title} className="border-t border-maroon-700/15 pt-4">
              <dt className="font-display text-[1.05rem] text-maroon-900">{point.title}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink/70">{point.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-14 max-w-[52ch] text-center font-display text-[1.15rem] italic leading-snug text-maroon-800">
          {closing}
        </p>
      </Container>
    </section>
  );
}
