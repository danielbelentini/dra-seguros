'use client';

import { usePathname } from 'next/navigation';
import Container from './Container';
import Flourish from './Flourish';
import { navLinks, socialLinks, site, getWhatsappLink } from '@/data/content';
import { socialIcons } from './icons';
import { trackWhatsappClick } from '@/lib/analytics';

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === '/';
  // "#contato" existe globalmente (o footer está em todas as páginas).
  // Só as âncoras exclusivas da Home (como "#sobre") precisam ser
  // resolvidas de volta para "/".
  const homeOnlyAnchors = ['sobre'];
  const resolveHref = (href) => {
    if (!href.startsWith('#')) return href;
    const anchorId = href.replace('#', '');
    if (!homeOnlyAnchors.includes(anchorId)) return href;
    return isHome ? href : `/${href}`;
  };

  return (
    <footer id="contato" className="bg-maroon-900 text-cream-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            {/* Logo original da D.R.A., em tamanho maior para garantir leitura
                (a versão em texto do header não é usada aqui — ver seção 16). */}
            <img
              src="/images/logo.png"
              alt={`${site.name} — ${site.ownerName}`}
              width={128}
              height={120}
              className="h-28 w-auto rounded-[6px] object-contain"
            />
            <Flourish tone="cream" className="mt-5" />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-cream-100/70">
              Corretora de seguros conduzida pessoalmente por {site.ownerName}, com
              atendimento direto do primeiro contato ao sinistro.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-cream-100/90">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={resolveHref(link.href)}
                    className="text-[15px] text-cream-100/70 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-cream-100/90">Contato</p>
            <ul className="mt-4 space-y-2.5 text-[15px] text-cream-100/70">
              <li>
                <a
                  href={getWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsappClick('footer')}
                  className="hover:text-cream-100 transition-colors"
                >
                  {site.phone} (WhatsApp)
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-cream-100 transition-colors">
                  {site.email}
                </a>
              </li>
              <li>{site.city}</li>
            </ul>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    onClick={s.icon === 'whatsapp' ? () => trackWhatsappClick('footer_social') : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/25 text-cream-100/85 hover:border-cream-100/60 hover:text-cream-100 transition-colors"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream-100/15 pt-6 text-[13px] text-cream-100/55">
          <p>© {year} {site.name} · {site.ownerName}</p>
          <p className="text-cream-100/40">{site.susep}</p>
        </div>
      </Container>
    </footer>
  );
}
