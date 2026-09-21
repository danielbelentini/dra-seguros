import Container from './Container';
import SectionHeading from './SectionHeading';
import { differentials } from '@/data/content';
import { CheckIcon } from './icons';

/**
 * Lista de diferenciais confirmados (seções 19.6 e 20.9). Mesmo conteúdo
 * reaproveitado na Home e na página /seguro-auto; `tone` permite alternar
 * o fundo para respeitar a hierarquia visual entre seções (seção 27).
 */
export default function Differentials({
  id = 'diferenciais',
  eyebrow = 'Por que a D.R.A.',
  title = 'Diferenciais',
  tone = 'cream',
}) {
  const sectionBg = tone === 'maroon' ? 'bg-maroon-900' : 'bg-cream-100';
  const headingTone = tone === 'maroon' ? 'cream' : 'maroon';
  const itemColor = tone === 'maroon' ? 'text-cream-100/85' : 'text-ink/80';
  const iconColor = tone === 'maroon' ? 'text-cream-100' : 'text-maroon-600';

  return (
    <section id={id} className={`${sectionBg} py-20 md:py-24`}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" tone={headingTone} />

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {differentials.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${iconColor}`} aria-hidden="true" />
              <span className={`text-[15.5px] leading-relaxed ${itemColor}`}>{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
