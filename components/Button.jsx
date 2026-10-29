'use client';


/**
 * Botão reutilizável. Para rastrear um botão que leva ao WhatsApp, passe
 * `data-wa-section` e `data-wa-button` (repassados ao <a> via ...rest); o
 * clique é capturado por components/WhatsappTracker.jsx — ver lib/analytics.js.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[4px] px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-colors duration-200 ease-out';

  const variants = {
    primary:
      'bg-maroon-700 text-cream-100 hover:bg-maroon-800 active:bg-maroon-900',
    secondary:
      'bg-transparent text-maroon-700 border border-maroon-700 hover:bg-maroon-50',
    inverse:
      'bg-cream-100 text-maroon-800 hover:bg-white',
    ghost:
      'bg-transparent text-cream-100 border border-cream-100/70 hover:bg-cream-100/10',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
