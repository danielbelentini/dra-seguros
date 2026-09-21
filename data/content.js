// Centralize aqui todo o texto e dados do site.
// Trocar informações (telefone, textos, depoimentos, seguradoras) não exige mexer nos componentes.
//
// REGRA DO PROJETO: nada aqui pode ser inventado (estatísticas, depoimentos,
// coberturas, números de seguradoras, certificações). Onde não há dado real
// confirmado pela cliente, use um placeholder explícito em maiúsculas entre
// colchetes — nunca um valor fictício "para preencher espaço".

export const site = {
  name: 'D.R.A. Seguros',
  ownerName: 'Daniela Regina de Almeida',
  tagline: 'Corretora de Seguros',
  phone: '+55 11 94704-4839',
  phoneHref: '5511947044839',
  email: 'contato@draseguros.com.br',
  city: 'São Paulo, SP',
  yearsExperience: 18,
  // Nenhum número/certificado oficial da SUSEP foi fornecido até o momento.
  susep: '[INFORMAÇÃO/CERTIFICADO SUSEP — INSERIR DADO OFICIAL]',
  url: 'https://www.draseguros.com.br',
};

// WhatsApp é o único canal de contato da D.R.A. Seguros.
// Todos os CTAs do site apontam para cá.
export const whatsapp = {
  number: '5511947044839', // DDI + DDD + número, só dígitos
  defaultMessage:
    'Olá, Daniela! Vim pelo site da D.R.A. Seguros e gostaria de uma cotação de seguro.',
};

/**
 * Monta o link do WhatsApp (wa.me) com mensagem pré-preenchida.
 * Passe um texto próprio para personalizar a mensagem de um botão específico.
 */
export function getWhatsappLink(message) {
  const text = message || whatsapp.defaultMessage;
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// Navegação do header. "href" começando com "#" é âncora nas seções da Home;
// o Header resolve o link corretamente também quando o visitante está em
// /seguro-auto (prefixando com "/"). Não existe item "Início": o logo
// textual no header já leva para a Home (ver seção 17 do briefing).
export const navLinks = [
  { label: 'Seguro Auto', href: '/seguro-auto' },
  { label: 'Sobre a D.R.A.', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

// O WhatsApp é o principal canal de conversão e é tratado à parte (botão
// flutuante), não como mais uma rede social do footer.
export const socialLinks = [
  // [REDES SOCIAIS — CONFIRMAR/INSERIR LINKS OFICIAIS]
  { label: 'Instagram', href: 'https://www.instagram.com/d.r.aseguros/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100068894874511', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniela-regina-de-almeida-a1b4b6431/', icon: 'linkedin' },
];

// Propósito institucional — declaração literal da cliente (seção 5).
export const purpose =
  'A DRA Seguros tem um único objetivo, ajudar a proteger os seus bens para que você tenha conforto e tranquilidade para aproveitar seus melhores momentos.';

// Frase institucional — declaração da própria corretora sobre sua filosofia
// de trabalho. Não usar como comparação ofensiva a outras corretoras.
export const philosophyQuote = 'Algumas Corretoras "vendem" seguros. Eu faço seguros.';

// Mensagem conceitual de pós-venda (seção 20.6) — pode ser refinada na
// redação, mas sem mudar o sentido.
export const postSaleQuote = 'Você contrata o seguro. A D.R.A. continua cuidando de você.';

// Único número institucional autorizado para destaque (seção 21).
// Não adicionar nenhuma outra estatística (clientes, satisfação, sinistros).
export const yearsExperience = site.yearsExperience;

// =====================================================================
// HOME — refatoração estrutural (Hero, Como a D.R.A. trabalha, Proteção
// para diferentes necessidades, Seu seguro não termina na contratação,
// D.R.A. + Daniela + depoimentos, Seguradoras, CTA final). Textos vindos
// literalmente do briefing de refatoração — não reescrever por conta própria.
// =====================================================================

export const homeHero = {
  headline: 'Seguro é proteção. Escolher bem também.',
  text: 'A D.R.A. ajuda você a encontrar o seguro adequado para proteger seus bens, sua família e o que é importante para você, com orientação clara e acompanhamento de verdade.',
  ctaLabel: 'Fale com a D.R.A. pelo WhatsApp',
  // Linha de apoio do Hero, separada em itens para facilitar o
  // empilhamento responsivo (o separador "•" é aplicado na renderização).
  support: [
    '18 anos de experiência',
    'Atendimento em todo o Brasil',
    'Suporte durante toda a jornada',
  ],
};

export const howWeWork = {
  title: philosophyQuote,
  intro:
    'Para mim, contratar um seguro não é apenas escolher uma cobertura e receber uma apólice. É entender o que você realmente precisa, apresentar as opções com clareza e estar por perto quando você precisar.',
  steps: [
    {
      title: 'Entendo o que você precisa',
      text: 'Conversamos sobre seu momento, seus bens e o que você quer proteger.',
    },
    {
      title: 'Busco as opções adequadas',
      text: 'Comparo as alternativas disponíveis entre as seguradoras com as quais trabalho.',
    },
    {
      title: 'Explico antes de você decidir',
      text: 'Você conhece as coberturas, condições e diferenças antes de escolher.',
    },
    {
      title: 'Continuo com você depois da contratação',
      text: 'Renovação, dúvidas, pagamentos, assistência ou sinistro, você continua tendo com quem contar.',
    },
  ],
  closing: 'Seguro não termina quando a apólice é contratada. O meu trabalho também não.',
};

// "Proteção para diferentes necessidades" — o Auto recebe mais destaque
// visual no portfólio, mas o texto nunca deve chamá-lo de prioridade.
export const protection = {
  title: 'Proteção para diferentes necessidades',
  intro:
    'Da proteção do seu carro à sua casa, família, negócio e patrimônio, a D.R.A. encontra opções para diferentes momentos e necessidades.',
  auto: {
    text: 'Proteção para o seu carro, com coberturas e opções que fazem sentido para o seu perfil.',
    ctaLabel: 'Conheça o Seguro Auto',
    href: '/seguro-auto',
  },
  // "Demais seguros" — sem CTA individual (seção 3 do briefing de refatoração).
  otherInsurances: [
    {
      name: 'Seguro Residencial',
      text: 'Proteção para sua casa, seus bens e o que faz parte dela.',
    },
    {
      name: 'Seguro de Vida',
      text: 'Proteção financeira para você e para quem é importante na sua vida.',
    },
    {
      name: 'Seguro para Celular',
      text: 'Mais tranquilidade para proteger um aparelho que faz parte da sua rotina.',
    },
    {
      name: 'Responsabilidade Civil',
      text: 'Proteção para situações em que você ou sua atividade possam causar danos a terceiros.',
    },
    {
      name: 'Seguro Empresarial',
      text: 'Proteção para sua empresa, sua estrutura e o seu patrimônio.',
    },
    {
      name: 'Seguro Cyber',
      text: 'Proteção para riscos digitais que podem afetar pessoas e empresas.',
    },
  ],
  otherSolutionsIntro:
    'Além dos seguros, a D.R.A. também trabalha com outras soluções para diferentes necessidades:',
  otherSolutions: [
    'Previdência',
    'Consórcio',
    'Financiamento de veículos',
    'Fiança Locatícia',
    'Capitalização Locatícia',
  ],
  closingTitle: 'Não sabe qual proteção faz sentido para você?',
  closingText: 'Tire suas dúvidas com a D.R.A.',
  closingCtaLabel: 'Falar pelo WhatsApp',
};

// "Seu seguro não termina na contratação"
export const ongoingSupport = {
  title: 'Seu seguro não termina na contratação.',
  intro: 'Quando você contrata um seguro com a D.R.A., continua tendo alguém para contar quando precisar.',
  items: [
    {
      title: 'Durante a vigência',
      text: 'Dúvidas sobre o seguro, alterações, documentos e outras necessidades do dia a dia.',
    },
    {
      title: 'Na renovação',
      text: 'Acompanhamento para que você não fique sem proteção e possa avaliar novamente as opções disponíveis.',
    },
    {
      title: 'Quando acontece um imprevisto',
      text: 'Orientação e suporte para acionar o seguro e entender os próximos passos.',
    },
    {
      title: 'Quando você precisa resolver alguma coisa',
      text: 'Pagamentos, assistência, contato com a seguradora ou qualquer outra questão relacionada à sua apólice.',
    },
  ],
  closing: 'Você contrata um seguro, mas não fica sozinho depois disso.',
};

// "D.R.A. + Daniela + depoimentos" — sem informação biográfica não
// fornecida pela cliente; reaproveita `purpose` (seção 5) para o texto de
// apresentação, que já é uma declaração literal da própria D.R.A.
export const aboutTestimonials = {
  title: 'Por trás da D.R.A., tem alguém que cuida de verdade.',
  testimonialsSubtitle: 'Quem já conta com a D.R.A.',
};

export const insurersSection = {
  title: 'Seguradoras com as quais a D.R.A. trabalha',
  text: 'A D.R.A. trabalha com diferentes seguradoras para encontrar opções de proteção que façam sentido para cada cliente e cada necessidade.',
};

// Botão flutuante do WhatsApp — usa o avatar ilustrado da Daniela em vez de
// um botão genérico. Enquanto o arquivo final não estiver disponível, usa
// o placeholder "IMAGEM" no mesmo tamanho/proporção.
export const floatingWhatsapp = {
  avatarSrc: '/images/avatar-daniela-whatsapp-site',
  hoverTitle: 'Fale com a Daniela',
  hoverSubtitle: 'Tire suas dúvidas pelo WhatsApp',
};

// Diferenciais confirmados (seções 19.6 e 20.9). Não criar números novos.
export const differentials = [
  '18 anos de experiência no mercado de seguros',
  'Atendimento próximo, direto com a Daniela',
  'Comparação entre opções de diferentes seguradoras',
  'Transparência na explicação de coberturas e condições',
  'Acompanhamento no pós-venda',
  'Suporte em situações de sinistro',
  'Acompanhamento no processo de renovação',
];

// Fluxo de cotação usado na página de Seguro Auto (seção 20.3), com o
// primeiro passo adaptado para incluir os dados do veículo.
export const autoProcessSteps = [
  {
    title: 'Dados do cliente e do veículo',
    description: 'Você informa seus dados e as características do veículo.',
  },
  {
    title: 'Pesquisa em diferentes seguradoras',
    description: 'A D.R.A. busca opções compatíveis com o seu perfil.',
  },
  {
    title: 'Comparação',
    description: 'Valores, coberturas e condições são comparados lado a lado.',
  },
  {
    title: 'Apresentação das opções',
    description: 'Você recebe as alternativas encontradas, de forma clara.',
  },
  {
    title: 'Explicação',
    description: 'Daniela explica as diferenças entre as opções apresentadas.',
  },
  {
    title: 'Decisão do cliente',
    description: 'Você escolhe qual opção deseja contratar.',
  },
];

// O que considerar antes de contratar (seção 20.2 e 20.4) — conteúdo
// educativo genérico, sem citar cobertura específica de nenhuma seguradora.
export const priceIsNotEverything = [
  'Coberturas incluídas na apólice',
  'Valor e condições da franquia',
  'Proteção para terceiros',
  'Condições gerais do contrato',
  'Necessidades específicas de quem vai segurar o veículo',
];

export const whatToConsider = [
  'Proteção do próprio veículo',
  'Responsabilidade perante terceiros',
  'Franquia',
  'Valores',
  'Condições da apólice',
  'Perfil e necessidades de quem contrata',
];

// Dados normalmente solicitados durante o atendimento pelo WhatsApp
// (seções 9 e 20.5). Isto NÃO é um formulário do site — é só uma explicação
// do que pode ser pedido durante a conversa.
export const quoteDataFields = [
  'Dados pessoais',
  'CPF',
  'CEP de pernoite do veículo',
  'Dados do veículo',
  'Placa ou documento do veículo',
];

export const postSaleBullets = [
  'Dúvidas sobre a apólice',
  'Questões relacionadas ao pagamento',
  'Assistência em situações de sinistro',
  'Renovação, com apresentação de novas opções e condições',
];

// Seguradoras/grupos com os quais a D.R.A. trabalha (seção 11). Apenas
// grupos e nomes confirmados — sem logos recriados e sem números como
// "trabalhamos com X seguradoras".
export const insurerGroups = [
  { group: 'Grupo Porto', brands: ['Porto Seguro', 'Azul', 'Itaú', 'Mitsui'] },
  { group: 'Tokio Marine', brands: [] },
  { group: 'Mapfre', brands: [] },
  { group: 'Bradesco Seguros', brands: [] },
  { group: 'Allianz', brands: [] },
  { group: 'Suhai', brands: [] },
  { group: 'Grupo HDI', brands: ['HDI', 'Yelum', 'Aliro'] },
];

// Depoimentos — somente reais. Enquanto não forem fornecidos pela cliente,
// os campos abaixo ficam como placeholder explícito (seções 4 e 19.8/20.10).
export const testimonials = [
  {
    id: 1,
    name: '[NOME DO CLIENTE]',
    role: '[DEPOIMENTO REAL A INSERIR]',
    quote: '[DEPOIMENTO REAL A INSERIR]',
    avatar: 'avatar-1',
  },
  {
    id: 2,
    name: '[NOME DO CLIENTE]',
    role: '[DEPOIMENTO REAL A INSERIR]',
    quote: '[DEPOIMENTO REAL A INSERIR]',
    avatar: 'avatar-2',
  },
  {
    id: 3,
    name: '[NOME DO CLIENTE]',
    role: '[DEPOIMENTO REAL A INSERIR]',
    quote: '[DEPOIMENTO REAL A INSERIR]',
    avatar: 'avatar-3',
  },
];

// FAQ da página /seguro-auto (seção 20.11), baseado nas dúvidas reais
// levantadas pela cliente. Respostas deixam claro quando algo depende das
// condições da apólice/seguradora — sem prometer regras universais.
export const faqs = [
  {
    id: 'faq-1',
    question: 'Como funciona uma cotação?',
    answer:
      'Você conta o que precisa, a D.R.A. pesquisa opções em diferentes seguradoras, compara valores, coberturas e condições, apresenta as alternativas e explica as diferenças para você decidir.',
  },
  {
    id: 'faq-2',
    question: 'Quais dados são necessários?',
    answer:
      'Normalmente são solicitados dados pessoais, CPF, CEP de pernoite do veículo e dados do veículo (placa ou documento). Isso é pedido durante o atendimento pelo WhatsApp, não é um formulário do site.',
  },
  {
    id: 'faq-3',
    question: 'O que é franquia?',
    answer:
      'É o valor que pode ficar sob responsabilidade do segurado em caso de sinistro, conforme as condições da apólice. O valor e as regras variam de acordo com a seguradora e o plano escolhido.',
  },
  {
    id: 'faq-4',
    question: 'Por que considerar cobertura para terceiros?',
    answer:
      'A D.R.A. considera essa cobertura importante para quem dirige, já que pode ajudar a cobrir danos causados a outras pessoas ou veículos. Isso não é uma regra universal, cada caso e cada apólice têm suas particularidades.',
  },
  {
    id: 'faq-5',
    question: 'O que acontece se houver atraso no pagamento?',
    answer:
      'As condições em caso de atraso dependem da apólice e da seguradora contratada. Se isso acontecer, o ideal é falar diretamente com a D.R.A. para entender as opções disponíveis no seu caso.',
  },
  {
    id: 'faq-6',
    question: 'Quem recebe a indenização quando o segurado e o proprietário do veículo são pessoas diferentes?',
    answer:
      'Isso depende das condições definidas na apólice e das regras da seguradora. A D.R.A. orienta sobre esse ponto no momento da contratação para evitar dúvidas mais adiante.',
  },
  {
    id: 'faq-7',
    question: 'O que acontece em caso de sinistro?',
    answer:
      'A D.R.A. orienta e acompanha você durante todo o processo junto à seguradora. A decisão final sobre cobertura, aprovação e prazo de indenização depende da seguradora e das condições da apólice.',
  },
  {
    id: 'faq-8',
    question: 'Como funciona a renovação?',
    answer:
      'Quando a apólice está próxima do vencimento, a D.R.A. entra em contato com você e apresenta novas opções, valores e condições para a renovação.',
  },
];

export const ctaFinal = {
  title: 'Vamos encontrar a proteção certa para você?',
  subtitle:
    'Conte para a D.R.A. o que você precisa proteger. Vamos conversar sobre as opções e entender juntos o que faz sentido para você.',
  buttonLabel: 'Falar com a D.R.A. pelo WhatsApp',
  buttonHref: getWhatsappLink(),
};

export const autoCtaFinal = {
  title: 'Faça sua cotação de Seguro Auto',
  subtitle: 'Conte o que você precisa e a D.R.A. cuida de pesquisar, comparar e explicar as opções.',
  buttonLabel: 'Faça sua cotação pelo WhatsApp',
  buttonHref: getWhatsappLink(
    'Olá, Daniela! Vim pelo site da D.R.A. Seguros e gostaria de fazer uma cotação de Seguro Auto.'
  ),
};

export const seo = {
  title: 'D.R.A. Seguros | Corretora de Seguros com Daniela Regina de Almeida',
  description:
    'Corretora de seguros com 18 anos de experiência. Pesquisa, compara seguradoras e orienta você na contratação de Seguro Auto, Residencial e demais produtos.',
  keywords: [
    'corretora de seguros',
    'seguro de automóvel',
    'seguro residencial',
    'cotação de seguro',
    'D.R.A. Seguros',
  ],
};

export const autoSeo = {
  title: 'Seguro Auto | D.R.A. Seguros',
  description:
    'Cotação de Seguro Auto com orientação da D.R.A. Seguros: pesquisa em diferentes seguradoras, comparação de coberturas e acompanhamento no pós-venda.',
  keywords: ['seguro auto', 'cotação seguro auto', 'seguro de automóvel', 'D.R.A. Seguros'],
};
