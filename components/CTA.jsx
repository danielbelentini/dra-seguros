import Button from './Button';
import SmartImage from './SmartImage';
import { ctaFinal } from '@/data/content';

// CTA final (seções 19.9 e 20.12). Aceita `content` para ser reutilizado
// também na página /seguro-auto com uma chamada mais específica
// (data/content.js -> autoCtaFinal), sem duplicar o componente.
export default function CTA({ id = 'cta-final', content = ctaFinal, analyticsLocation = 'cta_final' }) {
  return (
    <section id={id} className="relative isolate overflow-hidden py-28 md:py-36">
      <SmartImage
        src="/images/cta-bg"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-maroon-900/88 via-maroon-900/55 to-maroon-900/10"
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
      </div>
    </section>
  );
}
