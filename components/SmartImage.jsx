/**
 * SmartImage
 * Renderiza <picture> com fonte .webp e fallback (.jpg por padrão, ou .png).
 * Basta trocar os arquivos em /public/images mantendo o mesmo nome-base
 * (ex.: hero.webp + hero.jpg) para atualizar as imagens do site.
 *
 * Uso: <SmartImage src="/images/hero" alt="..." width={1000} height={1250} />
 */
export default function SmartImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fallback = 'jpg',
  sizes,
}) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.${fallback}`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        className={className}
      />
    </picture>
  );
}
