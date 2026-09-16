import { company, faqs, services } from './company';

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  intro: string;
  includedItems: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

function pickServices(titles: string[]) {
  return titles
    .map((title) => services.find((service) => service.title === title))
    .filter((service): service is (typeof services)[number] => Boolean(service))
    .map(({ title, description }) => ({ title, description }));
}

function pickFaqs(questions: string[]) {
  return questions
    .map((question) => faqs.find((item) => item.question === question))
    .filter((item): item is (typeof faqs)[number] => Boolean(item));
}

export const servicePages: ServicePage[] = [
  {
    slug: 'instalacao-residencial',
    name: 'Instalação Elétrica Residencial',
    title: 'Instalação Elétrica Residencial em Fortaleza',
    metaDescription:
      'Instalação elétrica residencial em Fortaleza e região metropolitana: projetos, execução e adequações com segurança, qualidade e conformidade técnica.',
    intro:
      'Projetos e adequações elétricas para casas, apartamentos e condomínios em Fortaleza e região, com planejamento técnico, execução segura e atenção aos detalhes em cada etapa da obra.',
    includedItems: pickServices(['Projetos Elétricos', 'Instalações Residenciais', 'Iluminação', 'Adequações Elétricas']),
    faq: pickFaqs(['Vocês atendem residências?', 'Como solicitar um orçamento?', 'Qual o prazo para receber um orçamento?']),
  },
  {
    slug: 'manutencao-preventiva',
    name: 'Manutenção Elétrica Preventiva',
    title: 'Manutenção Elétrica Preventiva em Fortaleza',
    metaDescription:
      'Manutenção elétrica preventiva em Fortaleza: ações programadas para reduzir falhas e aumentar a confiabilidade dos sistemas elétricos residenciais, comerciais e industriais.',
    intro:
      'Ações programadas para reduzir falhas, aumentar a confiabilidade dos sistemas elétricos e evitar paradas inesperadas, com inspeções técnicas periódicas em residências, empresas e indústrias.',
    includedItems: pickServices(['Manutenção Preventiva', 'Montagem de Painéis Elétricos', 'QGBT / Quadros Elétricos', 'Sistemas de Aterramento']),
    faq: pickFaqs(['Vocês realizam manutenção elétrica?', 'Vocês realizam inspeções e laudos?', 'Como solicitar um orçamento?']),
  },
  {
    slug: 'emergencia-24h',
    name: 'Atendimento Elétrico Emergencial 24h',
    title: 'Atendimento Elétrico Emergencial 24h em Fortaleza',
    metaDescription:
      'Atendimento elétrico emergencial 24 horas, todos os dias, em Fortaleza e região metropolitana. Diagnóstico e reparo rápido para restabelecer a segurança do sistema elétrico.',
    intro:
      'Atendimento emergencial disponível 24 horas por dia, todos os dias, para diagnóstico e reparo rápido em situações que comprometem a segurança ou o funcionamento do sistema elétrico.',
    includedItems: pickServices(['Manutenção Corretiva', 'Instalações Elétricas', 'QGBT / Quadros Elétricos']),
    faq: [
      {
        question: 'O atendimento emergencial funciona em qualquer horário?',
        answer: company.businessHours.emergency.label + '. Basta entrar em contato pelo WhatsApp ou telefone para acionar o atendimento.',
      },
      ...pickFaqs(['Como solicitar um orçamento?']),
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage {
  const service = servicePages.find((item) => item.slug === slug);
  if (!service) throw new Error(`Página de serviço não encontrada para o slug "${slug}"`);
  return service;
}
