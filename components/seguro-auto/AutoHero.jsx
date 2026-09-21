import Container from '@/components/Container';
import Button from '@/components/Button';
import Flourish from '@/components/Flourish';
import SmartImage from '@/components/SmartImage';
import { getWhatsappLink, yearsExperience } from '@/data/content';

// Seção 20.1: imagem de fundo automotiva sofisticada, com espaço de
// respiro para o texto e overlay para garantir contraste. Sem Daniela.
export default function AutoHero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-[84px]">
      <SmartImage
        src="/images/hero-auto-bg"
        alt=""
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-maroon-900/92 via-maroon-900/78 to-maroon-900/45"
        aria-hidden="true"
      />

      <Container className="py-24 md:py-32">
        <div className="max-w-xl md:max-w-2xl">
          <p className="text-[14px] font-semibold tracking-[0.14em] text-gold">SEGURO AUTO</p>
          <h1 className="mt-3 font-display text-[2.4rem] leading-[1.14] text-cream-100 sm:text-[2.9rem] md:text-[3.1rem]">
            Mais do que o menor preço: a cobertura certa para o seu carro.
          </h1>
          <Flourish tone="cream" className="mt-6" />
          <p className="mt-6 max-w-[48ch] text-[17px] leading-relaxed text-cream-100/85">
            Há {yearsExperience} anos pesquisando, comparando e explicando opções de
            Seguro Auto para que você contrate com clareza — e continue
            acompanhado depois da contratação.
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
              Faça sua cotação pelo WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
