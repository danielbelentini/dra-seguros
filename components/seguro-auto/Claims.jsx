import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';

// Seção 20.7: explica que a D.R.A. orienta e acompanha o cliente durante o
// processo de sinistro — sem prometer aprovação, prazo ou resultado
// (decisão final é sempre da seguradora e das condições da apólice).
export default function Claims() {
  return (
    <section id="sinistros" className="bg-maroon-900 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Em caso de sinistro"
            title="Você não fica sozinho"
            align="center"
            tone="cream"
          />
          <p className="mx-auto mt-6 max-w-[56ch] text-[16.5px] leading-relaxed text-cream-100/80">
            Se acontecer um sinistro, a D.R.A. orienta e acompanha você durante
            todo o processo junto à seguradora. A decisão sobre cobertura,
            aprovação e prazo de indenização depende sempre da seguradora e das
            condições específicas da sua apólice.
          </p>
        </div>
      </Container>
    </section>
  );
}
