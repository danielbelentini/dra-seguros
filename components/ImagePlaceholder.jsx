/**
 * Ocupa a área de uma futura imagem real com um placeholder literal
 * ("IMAGEM"), sem tentar simular uma foto com gradientes/formas em CSS.
 * Usado enquanto o material fotográfico definitivo não é fornecido —
 * quando a imagem real chegar, basta trocar este componente por
 * <SmartImage src="..." .../> no mesmo lugar (ver comentário nos
 * componentes que o utilizam).
 */
export default function ImagePlaceholder({ note, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-cream-100/25 bg-maroon-900 ${className}`}
      aria-hidden="true"
    >
      <div className="px-6 text-center">
        <p className="font-display text-2xl tracking-[0.1em] text-cream-100/70">IMAGEM</p>
        {note ? <p className="mt-2 max-w-[32ch] text-[12px] leading-relaxed text-cream-100/40">{note}</p> : null}
      </div>
    </div>
  );
}
