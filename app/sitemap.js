import { site, privacyHref } from '@/data/content';
import { privacyPolicy } from '@/data/privacy';

// Páginas públicas do site. A Política de Privacidade só entra aqui quando
// estiver validada para publicação (privacyPolicy.ready em data/privacy.js).
export default function sitemap() {
  const pages = [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${site.url}/seguro-auto/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  if (privacyPolicy.ready) {
    pages.push({
      url: `${site.url}${privacyHref}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    });
  }

  return pages;
}
