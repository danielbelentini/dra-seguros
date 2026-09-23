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

// =====================================================================
// PÁGINA /seguro-auto — reestruturação pedida no briefing de ajustes:
// estrutura mais enxuta e narrativa (Hero → preço não é tudo → perfil →
// pós-venda → prova social → FAQ → CTA final), sem seção de seguradoras
// nem "Diferenciais" genérico (já cobertos na Home). Textos vêm
// literalmente do briefing de ajustes — não reescrever por conta própria.
// =====================================================================

export const autoHero = {
  title: 'Mais do que o menor preço, a cobertura certa para o seu carro.',
  text: 'Encontrar um seguro Auto não é só comparar valores. É entender o que você precisa proteger, avaliar as opções e escolher uma proteção que faça sentido para o seu perfil.',
  ctaLabel: 'Fazer minha cotação pelo WhatsApp',
};

// Seção única que substitui as antigas "Não é só o menor preço" +
// "O que considerar" (eram duas seções separadas e redundantes).
export const autoPriceConsiderations = {
  eyebrow: 'Antes de decidir',
  title: 'Seguro Auto não é só uma questão de preço',
  intro:
    'Na hora de contratar um seguro, o valor é importante, mas não é a única coisa que você precisa considerar. Coberturas, franquia, assistência e as características do seu uso do veículo podem fazer diferença quando você mais precisar do seguro.',
  points: [
    {
      title: 'Coberturas',
      text: 'Entenda o que está protegido e quais situações estão incluídas na sua apólice.',
    },
    {
      title: 'Franquia',
      text: 'O valor da franquia pode fazer diferença no momento de utilizar o seguro. É importante entender como ela funciona antes de contratar.',
    },
    {
      title: 'Assistências',
      text: 'Serviços como guincho, chaveiro e assistência 24 horas podem fazer parte da proteção e variar de acordo com a opção contratada.',
    },
    {
      title: 'Seu perfil de uso',
      text: 'A forma como você utiliza o carro, onde ele circula e outras características podem influenciar as opções de seguro disponíveis.',
    },
    {
      title: 'Condições do seguro',
      text: 'Além do preço, é importante conhecer as condições, limites e regras da cobertura escolhida.',
    },
    {
      title: 'A seguradora',
      text: 'Cada seguradora possui produtos, coberturas e condições diferentes. Por isso, comparar opções pode ajudar a encontrar uma alternativa adequada ao seu perfil.',
    },
  ],
  closing: 'Por isso, olhar apenas para o valor da cotação pode não contar toda a história.',
};

// Substitui a antiga sequência de 6 passos ("Do seu perfil à decisão
// final"), que repetia a seção anterior. Aqui o foco é só no ponto de
// partida (o perfil do cliente), sem simular um fluxo de várias etapas.
export const autoProfileApproach = {
  eyebrow: 'Como a D.R.A. faz a cotação',
  title: 'Cada cotação começa pelo seu perfil',
  intro:
    'Antes de apresentar uma opção, a D.R.A. procura entender como você utiliza o veículo, o que deseja proteger e o que é importante para você.',
  points: [
    {
      title: 'Seu veículo',
      text: 'Características e informações importantes para a cotação.',
    },
    {
      title: 'Sua rotina',
      text: 'Como você utiliza o carro no dia a dia.',
    },
    {
      title: 'Suas necessidades',
      text: 'O que você espera da proteção e quais coberturas são importantes para você.',
    },
  ],
  closing:
    'A partir dessas informações, a D.R.A. busca as opções disponíveis e apresenta as diferenças para que você possa escolher com clareza.',
};

// Pós-venda da página /seguro-auto — reúne também o que antes era a seção
// separada de "sinistro" (a página não deve mais falar de cotação aqui,
// só de pós-venda).
export const autoPostSale = {
  eyebrow: 'Pós-venda',
  title: 'Seu seguro não termina na contratação.',
  intro:
    'Contratar o seguro é apenas o começo. Quando você precisa de ajuda depois disso, continua tendo com quem contar.',
  items: [
    {
      title: 'No dia a dia',
      text: 'Dúvidas sobre a apólice, alterações, documentos, pagamentos ou qualquer outra questão relacionada ao seu seguro.',
    },
    {
      title: 'Na renovação',
      text: 'Acompanhamento para avaliar as opções disponíveis novamente e evitar que você fique sem proteção.',
    },
    {
      title: 'Quando acontece um imprevisto',
      text: 'Orientação para entender como acionar o seguro, quais são os próximos passos e o que fazer em cada situação.',
    },
    {
      title: 'No contato com a seguradora',
      text: 'A D.R.A. ajuda no contato e acompanha a situação quando houver alguma questão que precise ser resolvida junto à seguradora.',
    },
  ],
  closing: 'Você não precisa descobrir sozinho o que fazer quando precisar do seu seguro.',
};

// Prova social específica do Seguro Auto — UM depoimento real (a Home já
// concentra a prova social institucional, ver `testimonials` abaixo).
// Sem depoimento inventado: enquanto não for fornecido pela cliente, os
// campos ficam como placeholder explícito.
export const autoTestimonial = {
  eyebrow: 'Prova social',
  title: 'Quem já contou com a D.R.A.',
  intro:
    'Mais do que contratar um seguro, o importante é saber que existe alguém para orientar você quando precisar.',
  testimonial: {
    name: '[NOME DO CLIENTE]',
    role: '[DEPOIMENTO REAL DE CLIENTE DE SEGURO AUTO A INSERIR]',
    quote: '[DEPOIMENTO REAL DE CLIENTE DE SEGURO AUTO A INSERIR]',
    avatar: 'avatar-1',
  },
};

// FAQ específico da página /seguro-auto (6 perguntas do briefing de
// ajustes — substitui as 8 perguntas antigas, que incluíam temas já
// cobertos em outras seções da própria página).
export const autoFaqs = [
  {
    id: 'auto-faq-1',
    question: 'A D.R.A. faz cotação com mais de uma seguradora?',
    answer:
      'Sim. A D.R.A. trabalha com diferentes seguradoras e busca as opções disponíveis de acordo com o perfil do cliente e do veículo.',
  },
  {
    id: 'auto-faq-2',
    question: 'O que preciso informar para fazer uma cotação?',
    answer:
      'A Daniela vai solicitar algumas informações sobre você e o veículo para entender o perfil e buscar as opções adequadas. Ela orienta você durante o processo.',
  },
  {
    id: 'auto-faq-3',
    question: 'Preciso contratar o seguro depois de receber a cotação?',
    answer:
      'Não. A cotação serve para você conhecer as opções disponíveis e decidir com tranquilidade. A contratação só acontece se a opção fizer sentido para você.',
  },
  {
    id: 'auto-faq-4',
    question: 'Posso tirar dúvidas pelo WhatsApp antes de contratar?',
    answer:
      'Sim. Você pode conversar diretamente com a D.R.A. para entender as opções, esclarecer dúvidas e receber orientação antes de tomar sua decisão.',
  },
  {
    id: 'auto-faq-5',
    question: 'A D.R.A. também ajuda depois que o seguro é contratado?',
    answer:
      'Sim. O atendimento continua depois da contratação, inclusive em situações como dúvidas sobre a apólice, alterações, renovação e necessidade de acionar o seguro.',
  },
  {
    id: 'auto-faq-6',
    question: 'Posso fazer a cotação mesmo sem saber exatamente qual cobertura quero?',
    answer:
      'Sim. Você não precisa chegar sabendo qual seguro ou cobertura contratar. A conversa inicial serve justamente para entender sua necessidade e orientar você sobre as opções.',
  },
];

// Seguradoras/grupos com os quais a D.R.A. trabalha (seção 11). Apenas
// grupos e nomes confirmados — sem logos recriados e sem números como
// "trabalhamos com X seguradoras".
export const insurerGroups = [
  { 
    group: 'Grupo Porto', 
    brands: [
      { name: 'Porto Seguro', logo: '/images/seguradoras/logo-porto-seguro' },
      { name: 'Azul Seguros' , logo: '/images/seguradoras/logo-azul-seguros' },
      { name: 'Itaú', logo: '/images/seguradoras/logo-itau' },
      { name: 'Mitsui', logo: '/images/seguradoras/logo-mitsui' }
    ]
  },
  { 
    group: 'Tokio Marine', 
    brands: [{ name: 'Tokio Marine', logo: '/images/seguradoras/logo-tokio-marine' } ]},
  { 
    group: 'Mapfre', 
    brands: [ { name: 'Mapfre', logo: '/images/seguradoras/logo-mapfre' } ] 
  },
  { 
    group: 'Bradesco Seguros', 
    brands: [ { name: 'Bradesco Seguros', logo: '/images/seguradoras/logo-bradesco-seguros' } ] 
  },
  { 
    group: 'Allianz', 
    brands: [ { name: 'Allianz', logo: '/images/seguradoras/logo-allianz' } ] 
  },
  { 
    group: 'Suhai', 
    brands: [ { name: 'Suhai', logo: '/images/seguradoras/logo-suhai' } ] 
  },
  { 
    group: 'Grupo HDI', 
    brands: [
      { name: 'HDI', logo: '/images/seguradoras/logo-hdi' }, 
      { name: 'Yelum', logo: '/images/seguradoras/logo-yelum' }, 
      { name: 'Aliro', logo: '/images/seguradoras/logo-aliro' }
    ]
  },
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
  title: 'Vamos encontrar a proteção certa para o seu carro?',
  subtitle:
    'Conte para a D.R.A. um pouco sobre o seu carro e como você pretende utilizá-lo. A partir disso, vamos conversar sobre as opções de Seguro Auto que fazem sentido para você.',
  buttonLabel: 'Fazer minha cotação pelo WhatsApp',
  buttonHref: getWhatsappLink(
    'Olá, Daniela! Vim pelo site da D.R.A. Seguros e gostaria de fazer uma cotação de Seguro Auto.'
  ),
  support: ['Atendimento personalizado', 'Diferentes opções de seguro', 'Suporte durante toda a jornada'],
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
