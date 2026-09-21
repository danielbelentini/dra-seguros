import Container from './Container';
import SectionHeading from './SectionHeading';
import { otherServices } from '@/data/content';

// Apresentação concisa dos demais produtos, deliberadamente mais simples do
// que o destaque de Seguro Auto (seção anterior): sem painel, sem cards
// grandes, sem ícone por produto, sem descrições que não foram confirmadas.
export default function OtherServices() {
  return (
    <section className="bg-cream-200 py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow="Também trabalhamos com" title="Outros seguros" align="center" />

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
          {otherServices.map((service) => (
            <li
              key={service}
              className="border-b border-maroon-700/15 pb-3 text-[15.5px] text-ink/80"
            >
              {service}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
