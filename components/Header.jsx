'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import Container from './Container';
import { navLinks, getWhatsappLink } from '@/data/content';
import { trackWhatsappClick } from '@/lib/analytics';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visibleIds, setVisibleIds] = useState(() => new Set());
  // "Contato" é o próprio footer, que costuma ser mais baixo que a área de
  // ativação do IntersectionObserver (rootMargin abaixo) — perto do fim da
  // página não sobra espaço para rolar mais e o footer nunca chega a subir
  // até essa faixa. Por isso ele é tratado à parte: assim que o topo da
  // última seção da página (a que vem logo antes do footer) passa da
  // faixa do header fixo, "Contato" já é marcado como ativo.
  const [contatoReached, setContatoReached] = useState(false);

  // Âncoras (ex.: "#sobre") só existem na Home. Fora da Home, o mesmo link
  // deve levar de volta para a Home e rolar até a seção.
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

  const anchorIds = useMemo(
    () =>
      navLinks
        .filter((link) => link.href.startsWith('#'))
        .map((link) => link.href.replace('#', '')),
    []
  );

  // Entre as seções visíveis, prevalece a primeira na ordem do documento.
  // Se nenhuma âncora do menu estiver visível, nenhum item fica marcado
  // (evita ativação falsa ao passar da última seção da Home) — exceto
  // quando `contatoReached` força "Contato" (ver efeito abaixo).
  const activeId = contatoReached ? 'contato' : anchorIds.find((id) => visibleIds.has(id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = anchorIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIds((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              next.add(entry.target.id);
            } else {
              next.delete(entry.target.id);
            }
          });
          return next;
        });
      },
      { rootMargin: '-96px 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [anchorIds, pathname]);

  // Ver comentário na declaração de `contatoReached`. Em vez de depender
  // do IntersectionObserver (que exige o footer subir bem alto na tela,
  // algo que nem sempre é possível perto do fim da página), observa a
  // última seção de conteúdo de cada página (o último filho de
  // #main-content, logo antes do <Footer/> em app/layout.js) e marca
  // "Contato" como ativo assim que o topo dela ultrapassa a faixa do
  // header fixo (84px). Como é a última seção da página, não há nada
  // depois para "desmarcar" o item de volta.
  useEffect(() => {
    const lastSection = document.getElementById('main-content')?.lastElementChild;
    if (!lastSection) {
      setContatoReached(false);
      return undefined;
    }

    const onScroll = () => {
      setContatoReached(lastSection.getBoundingClientRect().top <= 84);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const handleLinkClick = () => setOpen(false);

  const isLinkActive = (link) => {
    if (link.href.startsWith('#')) return link.href === `#${activeId}`;
    // Links de rota (ex.: "Seguro Auto") ficam ativos pela URL atual, mas
    // isso não pode continuar valendo quando o scroll já chegou em
    // "Contato" — só um item do menu pode estar ativo por vez.
    if (contatoReached) return false;
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  };

  const navLinkClasses = (link) => {
    const isActive = isLinkActive(link);
    return `relative text-[15px] font-medium transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-maroon-700 after:transition-all after:duration-300 ${
      isActive
        ? 'text-maroon-700 after:w-full'
        : 'text-ink/80 hover:text-maroon-700 after:w-0'
    }`;
  };

  const mobileLinkClasses = (link) => {
    const isActive = isLinkActive(link);
    return `py-2.5 text-[15px] font-medium transition-colors ${
      isActive ? 'text-maroon-700 font-semibold' : 'text-ink/85 hover:text-maroon-700'
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-sm shadow-[0_1px_0_0_rgba(110,21,38,0.12)]'
          : 'bg-cream-100/55 backdrop-blur-sm'
      }`}
    >
      <Container className="flex h-[84px] items-center justify-between">
        {/* Assinatura textual da marca — sem símbolo ao lado (seção 16 do briefing). */}
        <a href="/" className="flex shrink-0 flex-col leading-none font-brand text-maroon-800">
          <span className="text-[1.55rem] tracking-[0.02em]">D.R.A.</span>
          <span className="mt-0.5 text-[10px] font-medium tracking-[0.32em] text-maroon-500">
            SEGUROS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              aria-current={isLinkActive(link) ? 'true' : undefined}
              className={navLinkClasses(link)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsappClick('header')}
          className="hidden md:inline-flex items-center rounded-[4px] bg-maroon-700 px-5 py-2.5 text-[14px] font-semibold text-cream-100 hover:bg-maroon-800 transition-colors"
        >
          Faça sua cotação
        </a>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 h-10 w-10 items-center"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[2px] w-6 bg-maroon-800 transition-transform duration-200 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-maroon-800 transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-maroon-800 transition-transform duration-200 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-cream-100 transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <Container className="flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={handleLinkClick}
              aria-current={isLinkActive(link) ? 'true' : undefined}
              className={mobileLinkClasses(link)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsappClick('header_mobile');
              handleLinkClick();
            }}
            className="mt-2 inline-flex items-center justify-center rounded-[4px] bg-maroon-700 px-5 py-3 text-[14px] font-semibold text-cream-100"
          >
            Faça sua cotação
          </a>
        </Container>
      </div>
    </header>
  );
}
