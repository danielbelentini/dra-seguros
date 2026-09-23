import Container from '@/components/Container';
import Flourish from '@/components/Flourish';
import SmartImage from '@/components/SmartImage';
import { autoTestimonial } from '@/data/content';

// Prova social da página /seguro-auto: UM depoimento real de cliente de
// Seguro Auto (a Home já concentra a prova social institucional, com
// vários depoimentos — não repetir isso aqui). Nada inventado: enquanto o
// depoimento real não for fornecido pela cliente, os campos ficam com
// placeholder explícito (ver data/content.js -> autoTestimonial).
export default function AutoTestimonial() {
  const { eyebrow, title, intro, testimonial } = autoTestimonial;

  return (
    <section id="depoimento" className="bg-maroon-800 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[15px] font-medium text-cream-100/80">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.1rem] leading-[1.18] text-cream-100 sm:text-[2.4rem]">
            {title}
          </h2>
          <Flourish align="center" tone="cream" className="mt-4" />
          <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-relaxed text-cream-100/75">
            {intro}
          </p>
        </div>

        <figure className="mx-auto mt-14 max-w-xl text-center">
          <SmartImage
            src={`/images/${testimonial.avatar}`}
            alt=""
            width={72}
            height={72}
            className="mx-auto h-[72px] w-[72px] rounded-full object-cover"
          />
          <blockquote className="mt-6 font-display text-[1.3rem] leading-relaxed text-cream-100">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[14.5px] text-cream-100/60">
            <span className="font-semibold text-cream-100/85">{testimonial.name}</span> · {testimonial.role}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
