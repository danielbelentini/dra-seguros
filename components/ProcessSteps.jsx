import Container from './Container';
import SectionHeading from './SectionHeading';

/**
 * Fluxo horizontal simples de passos numerados. Recebe `steps` para que a
 * Home (fluxo de 5 passos, seção 19.5) e a página /seguro-auto (fluxo de 6
 * passos com dados do veículo, seção 20.3) reaproveitem o mesmo componente
 * sem duplicar markup.
 */
export default function ProcessSteps({
  id,
  eyebrow = 'Como funciona',
  title = 'Do primeiro contato à decisão',
  steps,
  tone = 'cream',
}) {
  const sectionBg = tone === 'maroon' ? 'bg-maroon-900' : 'bg-cream-200';
  const headingTone = tone === 'maroon' ? 'cream' : 'maroon';
  const numberColor = tone === 'maroon' ? 'text-cream-100/30' : 'text-maroon-700/20';
  const titleColor = tone === 'maroon' ? 'text-cream-100' : 'text-maroon-900';
  const textColor = tone === 'maroon' ? 'text-cream-100/75' : 'text-ink/70';
  const dividerColor = tone === 'maroon' ? 'border-cream-100/15' : 'border-maroon-700/15';

  // Tailwind precisa de classes estáticas e completas no código-fonte para
  // gerá-las no build — por isso um mapa fixo em vez de interpolar o número
  // de passos dentro do nome da classe.
  const gridColsByCount = {
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-3',
    6: 'lg:grid-cols-3',
  };
  const gridCols = gridColsByCount[steps.length] || 'lg:grid-cols-3';

  return (
    <section id={id} className={`${sectionBg} py-20 md:py-24`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" tone={headingTone} />

        <ol className={`mx-auto mt-14 grid max-w-5xl gap-x-8 gap-y-10 sm:grid-cols-2 ${gridCols}`}>
          {steps.map((step, index) => (
            <li key={step.title} className={`border-t pt-5 ${dividerColor}`}>
              <span className={`font-display text-3xl ${numberColor}`}>{String(index + 1).padStart(2, '0')}</span>
              <p className={`mt-3 font-display text-[1.15rem] ${titleColor}`}>{step.title}</p>
              <p className={`mt-2 text-[15px] leading-relaxed ${textColor}`}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
