import { site } from '@/data/content';

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
