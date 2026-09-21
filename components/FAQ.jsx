import Container from './Container';
import Flourish from './Flourish';
import FaqItem from './FaqItem';
import Button from './Button';
import { faqs, getWhatsappLink } from '@/data/content';

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-200 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[15px] font-medium text-maroon-500">Dúvidas frequentes</p>
            <h2 className="mt-3 font-display text-[2.1rem] leading-[1.18] text-maroon-900 sm:text-[2.4rem]">
              Perguntas que eu mais escuto
            </h2>
            <Flourish className="mt-4" />
            <p className="mt-6 max-w-[42ch] text-[15.5px] leading-relaxed text-ink/70">
              Não achou sua dúvida aqui? Me chame diretamente pelo WhatsApp.
            </p>
            <Button
              href={getWhatsappLink('Olá, Daniela! Tenho uma dúvida sobre seguros.')}
              target="_blank"
              rel="noopener noreferrer"
              analyticsLocation="faq"
              variant="secondary"
              className="mt-6"
            >
              Chamar no WhatsApp
            </Button>
          </div>

          <div className="rounded-[6px] bg-cream-100 px-6 py-2 md:px-10">
            {faqs.map((faq) => (
              <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

