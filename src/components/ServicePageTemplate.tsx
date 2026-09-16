import { CheckCircle, ChevronRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { FAQ } from './FAQ';
import { WhatsAppFloat } from './WhatsAppFloat';
import { siteUrl } from '../data/company';
import type { ServicePage } from '../data/servicePages';
import { getBreadcrumbSchema, getFaqSchema, getServiceSchema } from '../lib/schema';
import { getWhatsAppLink } from '../lib/whatsapp';

export function ServicePageTemplate({ service }: { service: ServicePage }) {
  const pageUrl = `${siteUrl}/servicos/${service.slug}`;
  const whatsappUrl = getWhatsAppLink(service.name);

  const serviceSchema = getServiceSchema({ name: service.name, description: service.metaDescription, url: pageUrl });
  const faqSchema = getFaqSchema(service.faq);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Início', url: siteUrl },
    { name: 'Serviços', url: `${siteUrl}/#servicos` },
    { name: service.name, url: pageUrl },
  ]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="container-shell py-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <img src="/logo-ts-eletrica.svg" alt="TS Elétrica" width={140} height={47} className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <nav aria-label="Breadcrumb" className="container-shell mt-6 flex items-center gap-1.5 text-sm text-slate-500">
        <Link href="/" className="hover:text-electric-600">Início</Link>
        <ChevronRight size={14} />
        <Link href="/#servicos" className="hover:text-electric-600">Serviços</Link>
        <ChevronRight size={14} />
        <span className="font-semibold text-slate-800">{service.name}</span>
      </nav>

      <section className="container-shell py-10 sm:py-14">
        <span className="section-tag">Serviço</span>
        <h1 className="section-heading mt-5 max-w-3xl">{service.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{service.intro}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-button mt-8 inline-flex bg-[#25D366] text-white hover:bg-[#2eda70]"
        >
          <MessageCircle className="mr-2" size={18} />
          Solicitar orçamento pelo WhatsApp
        </a>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {service.includedItems.map((item) => (
            <div key={item.title} className="card-surface flex items-start gap-3 p-5">
              <CheckCircle className="mt-0.5 shrink-0 text-electric-600" size={20} />
              <div>
                <p className="font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ items={service.faq} title={`Dúvidas sobre ${service.name.toLowerCase()}`} />

      <WhatsAppFloat />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </div>
  );
}
