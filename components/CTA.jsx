import Button from './Button';
import SmartImage from './SmartImage';
import ImagePlaceholder from './ImagePlaceholder';
import { ctaFinal } from '@/data/content';

// CTA final (seções 19.9 e 20.12). Aceita `content` para ser reutilizado
// também na página /seguro-auto com uma chamada mais específica
// (data/content.js -> autoCtaFinal), sem duplicar o componente.
//
// `overlay="solid"` e `imagePlaceholder` foram adicionados para o CTA de
// /seguro-auto (briefing de ajustes: visual semelhante ao Hero — imagem
// conceitual, overlay vinho uniforme, SEM gradiente). Sem esses props, o
// comportamento da Home continua exatamente o mesmo de antes.
export default function CTA({
  id = 'cta-final',
  content = ctaFinal,
  analyticsLocation = 'cta_final',
  overlay = 'gradient',
  imagePlaceholder = false,
  placeholderNote,
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-28 md:py-36">
      {imagePlaceholder ? (
        <ImagePlaceholder note={placeholderNote} className="absolute inset-0 -z-20 h-full w-full" />
      ) : (
        <SmartImage
          src="/images/cta-bg"
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div
        className={`absolute inset-0 -z-10 ${
          overlay === 'solid'
            ? 'bg-maroon-900/80'
            : 'bg-gradient-to-b from-maroon-900/88 via-maroon-900/55 to-maroon-900/10'
        }`}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-[2rem] leading-[1.25] text-cream-100 sm:text-[2.5rem]">
          {content.title}
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-[16px] leading-relaxed text-cream-100/75">
          {content.subtitle}
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-gold" aria-hidden="true" />
        <div className="mt-8">
          <Button
            href={content.buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            analyticsLocation={analyticsLocation}
            variant="inverse"
          >
            {content.buttonLabel}
          </Button>
        </div>

        {content.support?.length ? (
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[13.5px] text-cream-100/70">
            {content.support.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true" className="text-cream-100/40">•</span> : null}
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
