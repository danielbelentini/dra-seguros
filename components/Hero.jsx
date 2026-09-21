import Container from './Container';
import Button from './Button';
import Flourish from './Flourish';
import SmartImage from './SmartImage';
import { getWhatsappLink, homeHero } from '@/data/content';

// Hero da Home (refatoração). A imagem final deve ter maior interesse
// visual do lado direito e uma área mais tranquila à esquerda para
// receber o texto; o overlay reforça isso, ficando mais forte à esquerda
// e esmaecendo progressivamente em direção à direita. Sem foto da Daniela.
export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-[84px]">
      <SmartImage
        src="/images/hero-home-bg"
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-900/94 via-maroon-900/55 to-maroon-900/10"
        aria-hidden="true"
      />

      <Container className="py-24 md:py-32">
        <div className="max-w-xl md:max-w-2xl animate-rise-in">
          <h1 className="font-display text-[2.4rem] leading-[1.14] text-cream-100 sm:text-[2.9rem] md:text-[3.2rem]">
            {homeHero.headline}
          </h1>
          <Flourish tone="cream" className="mt-6" />
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-cream-100/85">
            {homeHero.text}
          </p>

          <div className="mt-9">
            <Button
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              analyticsLocation="hero"
              variant="inverse"
            >
              {homeHero.ctaLabel}
            </Button>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-cream-100/20 pt-6 text-[14px] text-cream-100/75">
            {homeHero.support.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? <span aria-hidden="true" className="text-cream-100/40">•</span> : null}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
