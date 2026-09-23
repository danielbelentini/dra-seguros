import Container from '@/components/Container';
import Button from '@/components/Button';
import Flourish from '@/components/Flourish';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { getWhatsappLink, autoHero } from '@/data/content';

// Hero da página /seguro-auto (briefing de ajustes). A imagem final deve
// ser conceitual (carro), ocupando todo o Hero, com o carro mais presente
// à direita e a área esquerda mais "limpa" para o texto — overlay vinho
// uniforme por cima, sem gradiente, sem foto da Daniela. Enquanto a
// imagem definitiva não é fornecida, usa-se o ImagePlaceholder literal.
// Quando a foto chegar, trocar o <ImagePlaceholder> abaixo por:
// <SmartImage src="/images/hero-auto-bg" alt="" width={1920} height={1080} priority className="absolute inset-0 -z-20 h-full w-full object-cover" />
export default function AutoHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-[84px]">
      <ImagePlaceholder
        note="Imagem conceitual de carro · mais presente à direita, área esquerda limpa para o texto"
        className="absolute inset-0 -z-20 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-maroon-900/78" aria-hidden="true" />

      <Container className="py-24 md:py-32">
        <div className="max-w-xl md:max-w-2xl">
          <p className="text-[14px] font-semibold tracking-[0.14em] text-gold">SEGURO AUTO</p>
          <h1 className="mt-3 font-display text-[2.4rem] leading-[1.14] text-cream-100 sm:text-[2.9rem] md:text-[3.1rem]">
            {autoHero.title}
          </h1>
          <Flourish tone="cream" className="mt-6" />
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-cream-100/85">
            {autoHero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              href={getWhatsappLink(
                'Olá, Daniela! Vim pelo site da D.R.A. Seguros e gostaria de fazer uma cotação de Seguro Auto.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              analyticsLocation="auto_hero"
              variant="inverse"
            >
              {autoHero.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
