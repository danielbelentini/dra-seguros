import Container from '@/components/Container';
import Flourish from '@/components/Flourish';
import { postSaleQuote, postSaleBullets } from '@/data/content';

// Seção 20.6: mostra que o atendimento não termina com a contratação.
export default function PostSale() {
  return (
    <section id="pos-venda" className="bg-cream-100 py-20 md:py-24">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-[15px] font-medium text-maroon-500">Pós-venda</p>
          <p className="mt-3 font-display text-[1.9rem] italic leading-snug text-maroon-900 sm:text-[2.1rem]">
            &ldquo;{postSaleQuote}&rdquo;
          </p>
          <Flourish className="mt-5" />
        </div>

        <ul className="space-y-4">
          {postSaleBullets.map((item) => (
            <li key={item} className="border-b border-maroon-700/15 pb-4 text-[15.5px] text-ink/80">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
