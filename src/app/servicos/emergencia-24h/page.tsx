import type { Metadata } from 'next';
import { ServicePageTemplate } from '../../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../../data/servicePages';
import { buildServiceMetadata } from '../../../lib/metadata';

const service = getServiceBySlug('emergencia-24h');

export const metadata: Metadata = buildServiceMetadata(service);

export default function Emergencia24hPage() {
  return <ServicePageTemplate service={service} />;
}
