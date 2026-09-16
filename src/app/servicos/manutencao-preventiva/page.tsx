import type { Metadata } from 'next';
import { ServicePageTemplate } from '../../../components/ServicePageTemplate';
import { getServiceBySlug } from '../../../data/servicePages';
import { buildServiceMetadata } from '../../../lib/metadata';

const service = getServiceBySlug('manutencao-preventiva');

export const metadata: Metadata = buildServiceMetadata(service);

export default function ManutencaoPreventivaPage() {
  return <ServicePageTemplate service={service} />;
}
