import Container from '@/components/Container';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { quoteDataFields, getWhatsappLink } from '@/data/content';

// Seção 20.5: explica que o atendimento começa pelo WhatsApp e o que pode
// ser pedido durante a conversa — deixando claro que isso NÃO é um
// formulário do site (seção 9).
export default function QuoteViaWhatsapp() {
  return (
    <section id="cotacao" className="bg-maroon-800 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Como pedir uma cotação"
            title="O atendimento começa pelo WhatsApp"
            align="center"
            tone="cream"
          />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-cream-100/80">
            Durante a conversa, alguns dados costumam ser solicitados para que a
            D.R.A. possa pesquisar as melhores opções para o seu perfil:
          </p>

          <ul className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
            {quoteDataFields.map((field) => (
              <li
                key={field}
                className="rounded-[4px] border border-cream-100/30 px-4 py-2 text-[14px] text-cream-100/85"
              >
                {field}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button
              href={getWhatsappLink(
                'Olá, Daniela! Vim pelo site da D.R.A. Seguros e gostaria de fazer uma cotação de Seguro Auto.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              analyticsLocation="auto_quote_section"
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
