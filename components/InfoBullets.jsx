import Container from './Container';
import SectionHeading from './SectionHeading';
import { CheckIcon } from './icons';

/**
 * Seção educativa simples: título + texto de apoio opcional + lista de
 * tópicos. Reaproveitada nas seções 20.2 e 20.4 do briefing, que têm a
 * mesma forma (lista de pontos a considerar) com conteúdos diferentes.
 */
export default function InfoBullets({ id, eyebrow, title, intro, items, tone = 'cream' }) {
  const sectionBg = tone === 'maroon' ? 'bg-maroon-900' : 'bg-cream-200';
  const headingTone = tone === 'maroon' ? 'cream' : 'maroon';
  const introColor = tone === 'maroon' ? 'text-cream-100/80' : 'text-ink/70';
  const itemColor = tone === 'maroon' ? 'text-cream-100/90' : 'text-ink/80';
  const iconColor = tone === 'maroon' ? 'text-cream-100' : 'text-maroon-600';

  return (
    <section id={id} className={`${sectionBg} py-20 md:py-24`}>
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" tone={headingTone} />
          {intro ? (
            <p className={`mx-auto mt-6 max-w-[58ch] text-center text-[16.5px] leading-relaxed ${introColor}`}>
              {intro}
            </p>
          ) : null}

          <ul className="mx-auto mt-10 grid max-w-xl gap-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className={`mt-1 h-4 w-4 shrink-0 ${iconColor}`} aria-hidden="true" />
                <span className={`text-[15.5px] leading-relaxed ${itemColor}`}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
