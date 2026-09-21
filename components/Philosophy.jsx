import Container from './Container';
import Flourish from './Flourish';
import { philosophyQuote, philosophyText } from '@/data/content';

// Seção 19.2 do briefing: mostra que a D.R.A. não trabalha apenas com a
// venda de uma apólice. Fundo maroon para diferenciar visualmente da seção
// anterior (Hero) e da seguinte, conforme exigido na seção 27.
export default function Philosophy() {
  return (
    <section className="bg-maroon-800 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-[62ch] text-center">
          <blockquote className="font-display text-[1.6rem] italic leading-snug text-cream-100 sm:text-[1.9rem]">
            &ldquo;{philosophyQuote}&rdquo;
          </blockquote>
          <Flourish tone="cream" align="center" className="mt-6" />
          <p className="mt-6 text-[16px] leading-relaxed text-cream-100/80">{philosophyText}</p>
        </div>
      </Container>
    </section>
  );
}
