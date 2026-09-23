import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { autoPostSale } from '@/data/content';

// Pós-venda da página /seguro-auto. Reúne também o que antes era a seção
// separada de "sinistro" (Claims.jsx) como um dos 4 pontos abaixo — a
// página não deve ter uma seção própria falando de cotação aqui, só de
// pós-venda, sem prometer aprovação, prazo ou resultado de sinistro
// (a decisão final é sempre da seguradora e das condições da apólice).
export default function PostSale() {
  const { eyebrow, title, intro, items, closing } = autoPostSale;

  return (
    <section id="pos-venda" className="bg-cream-100 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-ink/70">
            {intro}
          </p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-t border-maroon-700/15 pt-4">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-maroon-600">
                {item.title}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink/75">{item.text}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-12 max-w-[52ch] text-center font-display text-[1.1rem] italic leading-snug text-maroon-800">
          {closing}
        </p>
      </Container>
    </section>
  );
}
