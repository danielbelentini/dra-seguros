import Container from './Container';
import Flourish from './Flourish';
import SmartImage from './SmartImage';
import { insurerGroups, insurersSection } from '@/data/content';

// Achata os grupos em marcas individuais para a grade de logos (ex.: o
// Grupo Porto vira Porto Seguro, Azul, Itaú e Mitsui). Todas recebem o
// mesmo tamanho e tratamento visual — a cliente trabalha com mais
// frequência com Tokio Marine, Allianz e Azul, mas isso não deve aparecer
// como destaque nesta grade.
const brands = insurerGroups.flatMap((g) => (g.brands.length > 0 ? g.brands : [g.group]));

export default function Insurers() {
  return (
    <section id="seguradoras" className="bg-cream-300 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.1rem] leading-[1.18] text-maroon-900 sm:text-[2.4rem]">
            {insurersSection.title}
          </h2>
          <Flourish align="center" className="mt-4" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-relaxed text-ink/70">
            {insurersSection.text}
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {brands.map((brand) => (
            <li key={brand} className="flex flex-col items-center gap-3 text-center">
              <SmartImage
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                width={140}
                height={70}
                className="h-[70px] w-auto object-contain grayscale"
                fallback="png"
              />
              <span className="text-[13px] text-ink/60">{brand.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
