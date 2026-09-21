import Flourish from './Flourish';

/**
 * Cabeçalho de seção reutilizável: rótulo curto + título + flourish.
 * Mantém a hierarquia tipográfica consistente entre Home e /seguro-auto
 * sem duplicar as mesmas três linhas de markup em cada seção nova.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  tone = 'maroon',
  className = '',
}) {
  const isCenter = align === 'center';
  const eyebrowColor = tone === 'cream' ? 'text-cream-100/80' : 'text-maroon-500';
  const titleColor = tone === 'cream' ? 'text-cream-100' : 'text-maroon-900';

  return (
    <div className={`${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow ? (
        <p className={`text-[15px] font-medium ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <h2 className={`mt-3 font-display text-[2.1rem] leading-[1.18] sm:text-[2.4rem] ${titleColor}`}>
        {title}
      </h2>
      <Flourish align={align} tone={tone} className="mt-4" />
    </div>
  );
}
