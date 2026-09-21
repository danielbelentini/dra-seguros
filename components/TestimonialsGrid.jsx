import SmartImage from './SmartImage';
import { testimonials } from '@/data/content';

// Diferente do carrossel de Testimonials.jsx (usado em /seguro-auto), aqui
// os três depoimentos aparecem lado a lado no desktop e empilhados no
// mobile, sem rotação automática — conforme pedido para a seção combinada
// da Home.
export default function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
      {testimonials.map((t) => (
        <figure key={t.id} className="text-center md:text-left">
          <SmartImage
            src={`/images/${t.avatar}`}
            alt=""
            width={56}
            height={56}
            className="mx-auto h-14 w-14 rounded-full object-cover md:mx-0"
          />
          <blockquote className="mt-5 font-display text-[1.05rem] leading-relaxed text-maroon-900">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-[14px] text-ink/60">
            <span className="font-semibold text-ink/80">{t.name}</span> · {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
