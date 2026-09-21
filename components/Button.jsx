'use client';

import { trackWhatsappClick } from '@/lib/analytics';

/**
 * Botão reutilizável. Se `analyticsLocation` for informado, dispara um
 * evento "whatsapp_click" pro GTM/GA4 ao clicar — ver lib/analytics.js.
 * Precisa ser Client Component ('use client') por causa do onClick;
 * componentes de seção (Hero, CTA, FAQ) continuam sendo Server Components
 * normalmente, só passam uma string como prop.
 */
export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  analyticsLocation,
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

  const handleClick = (event) => {
    if (analyticsLocation) trackWhatsappClick(analyticsLocation);
    if (onClick) onClick(event);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
