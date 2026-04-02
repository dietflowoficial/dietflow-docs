import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

const baseUrl = 'https://docs.dietflow.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  const docsEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...docsEntries,
  ];
}
