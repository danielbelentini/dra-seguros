import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import { insurerGroups } from '@/data/content';

// Seção 20.8: apresenta os grupos/seguradoras informados no briefing.
// Sem logos recriados — enquanto os arquivos oficiais não forem
// fornecidos, os nomes aparecem em texto simples (seção 11).
export default function InsurerList() {
  return (
    <section id="seguradoras" className="bg-cream-100 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Seguradoras"
            title="Grupos com os quais trabalhamos"
            align="center"
          />
          <p className="mx-auto mt-5 max-w-[52ch] text-center text-[14.5px] text-ink/55">
            [LOGOS DAS SEGURADORAS — INSERIR ARQUIVOS OFICIAIS APÓS VALIDAÇÃO]
          </p>

          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {insurerGroups.map(({ group, brands }) => (
              <li key={group} className="border-b border-maroon-700/15 pb-4">
                <p className="font-display text-[1.05rem] text-maroon-800">{group}</p>
                {brands.length > 0 ? (
                  <p className="mt-1 text-[14px] text-ink/60">{brands.join(' · ')}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
