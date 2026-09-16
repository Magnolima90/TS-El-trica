import type { Metadata } from 'next';
import { siteUrl } from '../data/company';
import type { ServicePage } from '../data/servicePages';

export function buildServiceMetadata(service: ServicePage): Metadata {
  const url = `${siteUrl}/servicos/${service.slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
    },
  };
}
