import type { MetadataRoute } from 'next';
import { siteUrl } from '../data/company';
import { servicePages } from '../data/servicePages';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicos/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
