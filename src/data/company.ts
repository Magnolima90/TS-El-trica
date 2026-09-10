export const company = {
  companyName: 'TS Elétrica',
  companyPhone: '(85) 9 9786-7316',
  companyPhoneLink: 'tel:+5585997867316',
  whatsapp: '5585997867316',
  email: 'ta_rcianosilva@hotmail.com',
  address: 'Fortaleza – CE',
  instagram: 'https://instagram.com/ts_eletricaa',
  experienceYears: 10,
  projectsCount: 500,
  clientsCount: 300,
  emergency24h: true,
  whatsappMessage: 'Olá! Gostaria de solicitar um orçamento para um serviço elétrico.',
  whatsappEmergencyMessage: 'Olá! Preciso de atendimento elétrico de emergência.',
  serviceTypes: ['Projetos Elétricos', 'Instalações Elétricas', 'Manutenção', 'Painéis Elétricos', 'Energia Solar'],
  norms: ['NR-10', 'NR-35', 'ABNT NBR 5410', 'ABNT NBR 5419', 'ART, quando aplicável'],
  serviceAreas: ['Fortaleza', 'Caucaia', 'Maracanaú', 'Eusébio', 'Aquiraz', 'Pacatuba', 'Itaitinga', 'São Gonçalo do Amarante'],
  mapsEmbedUrl: 'https://www.google.com/maps?q=Fortaleza,+CE&output=embed',
};

export const stats = [
  { value: '+10', label: 'Anos de experiência', suffix: true },
  { value: '+500', label: 'Projetos realizados', suffix: true },
  { value: '+300', label: 'Clientes atendidos', suffix: true },
  { value: '100%', label: 'Compromisso com segurança', suffix: false },
];

export const services = [
  { title: 'Projetos Elétricos', description: 'Cálculos, layouts e soluções técnicas para projetos executivos e detalhados.', icon: 'Bolt' },
  { title: 'Instalações Elétricas', description: 'Execução de instalações em baixa e média tensão com segurança e qualidade.', icon: 'Cable' },
  { title: 'Manutenção Preventiva', description: 'Ações programadas para reduzir falhas e aumentar a confiabilidade dos sistemas.', icon: 'ShieldCheck' },
  { title: 'Manutenção Corretiva', description: 'Diagnóstico e reparo rápido para restabelecer o funcionamento do sistema elétrico.', icon: 'Wrench' },
  { title: 'Instalações Industriais', description: 'Infraestrutura elétrica para ambientes industriais e processos produtivos.', icon: 'Factory' },
  { title: 'Instalações Comerciais', description: 'Soluções para lojas, escritórios, shoppings, hospitais e prédios comerciais.', icon: 'Building2' },
  { title: 'Instalações Residenciais', description: 'Projetos e adequações para casas, apartamentos e condomínios.', icon: 'Home' },
  { title: 'Montagem de Painéis Elétricos', description: 'Montagem e organização de painéis de comando e distribuição.', icon: 'PanelTop' },
  { title: 'QGBT / Quadros Elétricos', description: 'Dimensionamento e montagem de quadros para diferentes demandas elétricas.', icon: 'CircuitBoard' },
  { title: 'SPDA', description: 'Proteção contra descargas atmosféricas e sistemas de aterramento.', icon: 'CloudLightning' },
  { title: 'Sistemas de Aterramento', description: 'Estruturas certificadas para segurança e funcionalidade dos circuitos.', icon: 'Cpu' },
  { title: 'Energia Solar', description: 'Geração distribuída com projetos e instalações de sistemas fotovoltaicos.', icon: 'SunMedium' },
  { title: 'Geradores', description: 'Instalações e manutenção para continuidade operacional em emergências.', icon: 'Gauge' },
  { title: 'Subestações', description: 'Estruturas e sistemas para distribuição e transformação de energia.', icon: 'Warehouse' },
  { title: 'Automação Industrial', description: 'Integração e controle inteligente para otimizar processos produtivos.', icon: 'Bot' },
  { title: 'Laudos e Inspeções Técnicas', description: 'Avaliações detalhadas para segurança, conformidade e diagnóstico.', icon: 'ClipboardCheck' },
  { title: 'Termografia', description: 'Análises térmicas para identificar pontos críticos e riscos elétricos.', icon: 'ThermometerSun' },
  { title: 'Eficiência Energética', description: 'Diagnósticos e ações para reduzir consumo, perdas e custos operacionais.', icon: 'Zap' },
];

export type PortfolioItem =
  | { type: 'image'; title: string; category: string; description: string; src: string }
  | { type: 'video'; title: string; category: string; description: string; src: string; poster: string };

export const portfolioItems: PortfolioItem[] = [
  { type: 'image', title: 'Quadro Geral de Baixa Tensão (QGBT)', category: 'Painéis Elétricos', description: 'Montagem de QGBT industrial com organização de circuitos, disjuntores e DPS.', src: '/projetos/painel-qgbt-industrial.jpg' },
  { type: 'image', title: 'Sala Multimídia com Iluminação Cênica', category: 'Iluminação Comercial', description: 'Projeto de iluminação cênica em LED para sala corporativa com forro rebaixado.', src: '/projetos/escritorio-home-theater-led.jpg' },
  { type: 'video', title: 'Iluminação em Camadas no Forro', category: 'Iluminação Comercial', description: 'Instalação de iluminação em LED em forro de gesso em camadas, com vista panorâmica de Fortaleza.', src: '/projetos/video-teto-led-camadas.mp4', poster: '/projetos/video-teto-led-camadas-poster.jpg' },
  { type: 'image', title: 'Painel de Medição Individualizada', category: 'Painéis Elétricos', description: 'Quadro com múltiplos medidores de energia, cabeamento organizado e identificado.', src: '/projetos/quadro-medidores-finalizado.jpg' },
  { type: 'image', title: 'Corredor com Iluminação em Sanca', category: 'Iluminação Comercial', description: 'Projeto de iluminação em LED contínua no forro, integrado ao ar-condicionado e acabamento em madeira.', src: '/projetos/escritorio-corredor-led.jpg' },
  { type: 'video', title: 'Iluminação em Sanca — Eusébio, CE', category: 'Iluminação Comercial', description: 'Instalação de iluminação em LED em sanca de corredor, projeto executado em Eusébio, CE.', src: '/projetos/video-corredor-led-eusebio.mp4', poster: '/projetos/video-corredor-led-eusebio-poster.jpg' },
  { type: 'image', title: 'Quadro de Distribuição', category: 'Painéis Elétricos', description: 'Montagem de quadro de distribuição com disjuntores, DPS e barramentos organizados.', src: '/projetos/quadro-distribuicao-organizado.jpg' },
  { type: 'image', title: 'Escada com Iluminação Embutida', category: 'Iluminação Comercial', description: 'Iluminação em LED embutida em guarda-corpo de madeira curvo, destacando o design arquitetônico.', src: '/projetos/escritorio-escada-led.jpg' },
  { type: 'video', title: 'Acabamento com Iluminação Integrada', category: 'Iluminação Comercial', description: 'Execução de revestimento em madeira com iluminação em LED integrada ao ambiente.', src: '/projetos/video-acabamento-madeira.mp4', poster: '/projetos/video-acabamento-madeira-poster.jpg' },
  { type: 'image', title: 'Copa Corporativa com Iluminação em LED', category: 'Iluminação Comercial', description: 'Instalação elétrica e iluminação em LED embutida em marcenaria para escritório corporativo.', src: '/projetos/escritorio-copa-led.jpg' },
  { type: 'image', title: 'Sala Privativa com Iluminação em LED', category: 'Iluminação Comercial', description: 'Iluminação de destaque em teto e marcenaria para sala privativa corporativa.', src: '/projetos/escritorio-sala-reuniao-led.jpg' },
  { type: 'video', title: 'Projeto Concluído com Sucesso', category: 'Iluminação Comercial', description: 'Registro de mais uma etapa de instalação elétrica e acabamento concluída.', src: '/projetos/video-porta-concluida.mp4', poster: '/projetos/video-porta-concluida-poster.jpg' },
  { type: 'video', title: 'Detalhe de Componentes de Qualidade', category: 'Painéis Elétricos', description: 'Detalhe de disjuntores e componentes utilizados na montagem dos quadros elétricos.', src: '/projetos/video-detalhe-disjuntores.mp4', poster: '/projetos/video-detalhe-disjuntores-poster.jpg' },
];

export const faqs = [
  { question: 'Como solicitar um orçamento?', answer: 'Você pode entrar em contato pelo WhatsApp, telefone ou enviar a mensagem pelo formulário de contato. Nossa equipe irá entender a demanda e retornar com orientação técnica e comercial.' },
  { question: 'Vocês atendem residências?', answer: 'Sim. Atendemos instalações, reformas, adequações, manutenção e projetos elétricos residenciais com foco em segurança e qualidade.' },
  { question: 'Vocês atendem empresas e indústrias?', answer: 'Sim. Realizamos projetos, instalações, manutenção e adequações para ambientes comerciais e industriais, incluindo infraestrutura e painéis elétricos.' },
  { question: 'Vocês realizam manutenção elétrica?', answer: 'Sim. Oferecemos manutenção preventiva e corretiva para evitar falhas, melhorar desempenho e garantir maior segurança operacional.' },
  { question: 'Vocês trabalham com projetos elétricos?', answer: 'Sim. Desenvolvemos projetos elétricos sob medida para atender as necessidades técnicas e operacionais de cada cliente.' },
  { question: 'Vocês fazem instalação de energia solar?', answer: 'Sim. Realizamos estudos, dimensionamento e instalação de sistemas fotovoltaicos para geração de energia sustentável.' },
  { question: 'Vocês realizam inspeções e laudos?', answer: 'Sim. Executamos inspeções, laudos e avaliações técnicas para diagnóstico, conformidade e melhoria de segurança.' },
  { question: 'Qual o prazo para receber um orçamento?', answer: 'Depende da complexidade do projeto. Em geral, retornamos com a avaliação inicial rapidamente e apresentamos a proposta em tempo hábil.' },
];

export const testimonials = [
  { name: 'Maria Silva', text: 'Equipe muito profissional, atenciosa e técnica. Entenderam a necessidade do projeto e entregaram com excelência.', role: 'Proprietária de residência' },
  { name: 'João Pereira', text: 'Excelente qualidade na execução e atenção aos detalhes. O atendimento foi rápido e a solução foi eficiente.', role: 'Diretor comercial' },
  { name: 'Carlos Mendes', text: 'Profissionalismo, organização e segurança em todos os procedimentos. Recomendo fortemente.', role: 'Gestor industrial' },
];

export const processSteps = [
  { number: '01', title: 'Diagnóstico', description: 'Entendemos a necessidade do cliente.' },
  { number: '02', title: 'Análise técnica', description: 'Nossa equipe avalia o local e a solução adequada.' },
  { number: '03', title: 'Projeto e orçamento', description: 'Elaboramos a proposta técnica e comercial.' },
  { number: '04', title: 'Execução', description: 'Realizamos o serviço com segurança e qualidade.' },
  { number: '05', title: 'Entrega', description: 'Finalizamos o projeto e realizamos os testes necessários.' },
];

export const areas = [
  {
    title: 'Residencial',
    description: 'Instalações, reformas, adequações, iluminação, quadros elétricos e manutenção.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Comercial',
    description: 'Projetos, instalações, manutenção, iluminação, infraestrutura e adequações elétricas.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Industrial',
    description: 'Painéis, máquinas, automação, manutenção, infraestrutura, subestações e sistemas elétricos.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
  },
];

export const differentials = [
  'Atendimento emergencial 24h',
  'Equipe especializada',
  'Atendimento rápido',
  'Orçamento personalizado',
  'Segurança em primeiro lugar',
  'Qualidade nos materiais',
  'Cumprimento de prazos',
  'Suporte técnico',
  'Soluções personalizadas',
];

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];
