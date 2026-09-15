import { company, siteUrl } from '../data/company';

export const localBusinessId = `${siteUrl}/#organization`;

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectricianContractor',
    '@id': localBusinessId,
    name: company.companyName,
    alternateName: 'TS Elétrica Tecnologia em Instalações',
    legalName: company.companyName,
    image: `${siteUrl}/logo-ts-eletrica.svg`,
    logo: `${siteUrl}/logo-ts-eletrica.svg`,
    description:
      'TS Elétrica é uma empresa de engenharia elétrica com foco em projetos, instalações, manutenção e atendimento elétrico emergencial 24h em Fortaleza, CE e Região Metropolitana.',
    slogan: 'Sua segurança começa com uma boa instalação elétrica!',
    areaServed: [...company.serviceAreas, 'Ceará', 'CE'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    telephone: '+55 85 997867316',
    email: company.email,
    sameAs: [company.instagram],
    url: siteUrl,
    hasMap: company.mapsEmbedUrl.replace('&output=embed', ''),
    inLanguage: 'pt-BR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de engenharia elétrica',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Projetos Elétricos' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalações Elétricas Residenciais, Comerciais e Industriais' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenção Elétrica Preventiva e Corretiva' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalação de CFTV e Câmeras de Segurança' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Montagem de Painéis Elétricos e QGBT' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SPDA e Sistemas de Aterramento' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Atendimento Elétrico Emergencial 24h' } },
      ],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: company.businessHours.commercial.days,
        opens: company.businessHours.commercial.opens,
        closes: company.businessHours.commercial.closes,
        description: 'Atendimento comercial',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: company.businessHours.emergency.days,
        opens: company.businessHours.emergency.opens,
        closes: company.businessHours.emergency.closes,
        description: 'Atendimento emergencial 24h',
      },
    ],
    knowsAbout: [
      'Engenharia elétrica',
      'Instalações elétricas',
      'Manutenção elétrica',
      'Projetos elétricos',
      'Quadros elétricos',
      'SPDA',
    ],
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function getServiceSchema(options: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: options.name,
    name: options.name,
    description: options.description,
    url: options.url,
    areaServed: company.serviceAreas,
    provider: { '@id': localBusinessId },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
