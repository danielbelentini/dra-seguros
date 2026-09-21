import Container from './Container';
import Button from './Button';
import { autoService, getWhatsappLink } from '@/data/content';

// Destaque comercial nº 1 do site (prioridade: Seguro Auto). O painel com
// borda existe para que a seção pareça um destaque deliberado dentro da
// Home — não uma segunda landing page e não um bloco genérico do mesmo
// peso visual das demais seções institucionais.
export default function FeaturedAuto() {
  return (
    <section id="seguro-auto" className="bg-cream-100 py-16 md:py-20">
      <Container>
        <div className="rounded-[6px] border border-maroon-700/20 bg-cream-200 px-7 py-10 md:px-12 md:py-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-[15px] font-medium text-maroon-500">Prioridade D.R.A.</p>
              <h2 className="mt-3 font-display text-[2.1rem] leading-[1.16] text-maroon-900 sm:text-[2.3rem]">
                {autoService.title}
              </h2>
            </div>

            <div className="border-l-2 border-maroon-700/25 pl-8">
              <p className="max-w-[52ch] text-[16px] leading-relaxed text-ink/75">
                {autoService.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button href={autoService.href} variant="primary">
                  {autoService.ctaLabel}
                </Button>
                <Button
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  analyticsLocation="home_featured_auto"
                  variant="secondary"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
