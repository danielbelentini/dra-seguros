import Container from './Container';
import Button from './Button';
import Flourish from './Flourish';
import { getWhatsappLink, protection } from '@/data/content';
import { ArrowIcon } from './icons';

// Seguro Auto recebe mais peso visual (faixa própria, contraste de cor),
// mas o texto nunca o chama de "prioridade". Os demais seguros aparecem
// juntos, com o mesmo tratamento entre si, para transmitir um portfólio
// amplo — sem CTA individual e sem a categoria "Outros seguros".
export default function Protection() {
  return (
    <section id="protecao" className="bg-cream-100 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[2.1rem] leading-[1.18] text-maroon-900 sm:text-[2.4rem]">
            {protection.title}
          </h2>
          <Flourish align="center" className="mt-4" />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16px] leading-relaxed text-ink/70">
            {protection.intro}
          </p>
        </div>

        {/* Seguro Auto — faixa própria, com mais contraste e espaço do que os
            demais itens, mas sem linguagem de prioridade comercial. */}
        <div className="mt-14 flex flex-col gap-6 rounded-[6px] bg-maroon-800 px-8 py-10 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <div>
            <p className="font-display text-[1.5rem] text-cream-100">Seguro Auto</p>
            <p className="mt-2 max-w-[48ch] text-[15.5px] leading-relaxed text-cream-100/80">
              {protection.auto.text}
            </p>
          </div>
          <Button href={protection.auto.href} variant="inverse" className="shrink-0">
            {protection.auto.ctaLabel}
            <ArrowIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        {/* Demais seguros — mesmo tratamento entre si, sem CTA individual. */}
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {protection.otherInsurances.map((service) => (
            <li key={service.name} className="border-t border-maroon-700/15 pt-5">
              <p className="font-display text-[1.05rem] text-maroon-900">{service.name}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink/70">{service.text}</p>
            </li>
          ))}
        </ul>

        {/* Outras soluções — lista compacta em linha, sem cards. */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-maroon-700/15 pt-10 text-center">
          <p className="text-[15px] text-ink/70">{protection.otherSolutionsIntro}</p>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] font-medium text-maroon-800">
            {protection.otherSolutions.join(' • ')}
          </p>
        </div>

        {/* Fechamento da seção com CTA para o WhatsApp. */}
        <div className="mx-auto mt-14 max-w-md text-center">
          <p className="font-display text-[1.2rem] text-maroon-900">{protection.closingTitle}</p>
          <p className="mt-1 text-[15px] text-ink/70">{protection.closingText}</p>
          <div className="mt-6">
            <Button
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              analyticsLocation="protecao"
              variant="secondary"
            >
              {protection.closingCtaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
