// Texto da Política de Privacidade (página /politica-de-privacidade).
//
// IMPORTANTE — estado de publicação:
//  `ready: false` mantém a página com `noindex` (buscadores não a indexam) e
//  fora do sitemap. Troque para `true` somente depois de:
//   1. ativar de fato o e-mail de contato (o domínio draseguros.com.br ainda
//      precisa estar registrado e o e-mail funcionando);
//   2. (opcional) detalhar fornecedores e prazo de retenção, hoje descritos de
//      forma geral, de propósito, para não afirmar o que não foi confirmado.
//      Já confirmado pela Daniela em 06/11/2026: não pede dados de saúde pelo
//      WhatsApp (a seguradora/operadora envia o questionário ao segurado), só
//      recebe dados de menores por intermédio dos pais, e renova apólices
//      após informar o segurado e com o consentimento dele;
//   3. conferir a configuração do GA4 (retenção de dados) e do hospedeiro;
//   4. revisão jurídica do texto, de preferência.
//  Atualize também `lastUpdated` na data da publicação.

import { site } from './content';

export const privacyPolicy = {
  ready: false,
  title: 'Política de Privacidade',
  lastUpdated: '6 de novembro de 2026',
  seoDescription:
    'Saiba como a D.R.A. Seguros trata as informações de navegação do site, os dados do atendimento pelo WhatsApp e os cookies, conforme a LGPD.',

  intro: [
    'A D.R.A. Seguros respeita a sua privacidade e se compromete com a proteção dos seus dados pessoais.',
    'Esta Política explica, em linguagem simples, como tratamos as informações relacionadas à navegação neste site e ao atendimento realizado pela corretora, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº 13.709/2018).',
  ],

  sections: [
    {
      title: 'Quem é o responsável pelo tratamento dos dados',
      blocks: [
        {
          type: 'p',
          text: `O responsável pelo tratamento dos dados pessoais tratados por meio deste site e do atendimento da D.R.A. Seguros é a ${site.legalName}, inscrita no CNPJ sob o nº ${site.cnpj} e registrada na SUSEP sob o nº ${site.susepNumber}, que atua sob a marca D.R.A. Seguros, conduzida por ${site.ownerName}.`,
        },
        {
          type: 'p',
          text: 'Na LGPD, quem decide como os dados são tratados é chamado de controlador.',
        },
      ],
    },
    {
      title: 'Quais informações são tratadas durante a navegação no site',
      blocks: [
        {
          type: 'p',
          text: 'Durante a navegação, podem ser tratadas informações técnicas e comportamentais, como:',
        },
        {
          type: 'ul',
          items: [
            'páginas visitadas e tempo de navegação;',
            'cliques e interações com botões e links do site, como os botões de WhatsApp, os links de navegação e os de redes sociais;',
            'data e horário do acesso;',
            'tipo de dispositivo, navegador, sistema operacional e idioma;',
            'localização aproximada (como cidade ou região) e origem do acesso;',
            'identificadores gerados pelas ferramentas de análise (cookies), somente se você autorizar.',
          ],
        },
        {
          type: 'p',
          text: 'Esses dados são técnicos e comportamentais. Ainda assim, identificadores de navegação podem ser considerados dados pessoais, conforme o contexto, e por isso são tratados com os cuidados descritos nesta Política.',
        },
        {
          type: 'p',
          text: 'O site não possui formulários de cadastro e não solicita nome, CPF ou outros dados pessoais diretamente nas páginas. Os dados necessários para uma cotação são pedidos durante o atendimento pelo WhatsApp (veja a seção 4).',
        },
        {
          type: 'p',
          text: 'Para o funcionamento e a segurança do site, o provedor de hospedagem também pode registrar dados técnicos de acesso, como o endereço IP, em seus registros de servidor.',
        },
      ],
    },
    {
      title: 'Para que as informações são utilizadas e em quais bases legais',
      blocks: [
        {
          type: 'p',
          text: 'Usamos as informações de navegação para entender quais páginas e conteúdos despertam mais interesse, avaliar o desempenho do site, medir a utilização dos botões de contato e identificar oportunidades de melhoria. Atualmente, não utilizamos essas informações para publicidade ou remarketing.',
        },
        {
          type: 'p',
          text: 'Cada finalidade se apoia na base legal que lhe é aplicável, e não em uma única base para todos os casos:',
        },
        {
          type: 'table',
          head: ['Finalidade', 'Base legal (LGPD)'],
          rows: [
            [
              'Cookies de análise e medição da navegação no site',
              'Consentimento (art. 7º, I). Só ocorre depois da sua autorização, que pode ser retirada a qualquer momento.',
            ],
            [
              'Atendimento solicitado por você, elaboração de cotações e contratação de seguros',
              'Procedimentos preliminares e execução de contrato, a pedido do titular (art. 7º, V).',
            ],
            [
              'Contato com segurados sobre a renovação de apólices, depois de informá-los',
              'Consentimento do segurado (art. 7º, I), que pode ser retirado a qualquer momento.',
            ],
            [
              'Cumprimento de obrigações da atividade de corretagem de seguros',
              'Obrigação legal ou regulatória (art. 7º, II).',
            ],
            [
              'Defesa de direitos em processos judiciais, administrativos ou arbitrais',
              'Exercício regular de direitos (art. 7º, VI).',
            ],
          ],
        },
      ],
    },
    {
      title: 'Como funciona o atendimento pelo WhatsApp',
      blocks: [
        {
          type: 'p',
          text: 'Os botões de WhatsApp do site abrem uma conversa direta com a D.R.A. Seguros. Nesse atendimento, a Daniela poderá solicitar dados pessoais (como nome e informações de contato), dados do veículo e outras informações necessárias para elaborar cotações, apresentar opções de cobertura e viabilizar a contratação, conforme o tipo de seguro.',
        },
        {
          type: 'p',
          text: 'Não solicitamos dados de saúde pelo WhatsApp. Em produtos que exigem essas informações, como seguro de vida e plano de saúde, a própria seguradora ou operadora envia o questionário diretamente ao segurado, e o tratamento desses dados segue a política de privacidade dela.',
        },
        {
          type: 'p',
          text: 'Também não atendemos nem recebemos dados de crianças e adolescentes diretamente: quando forem necessários para um seguro, eles são informados pelos pais ou responsáveis legais.',
        },
        {
          type: 'p',
          text: 'Para quem já é segurado, a D.R.A. Seguros entra em contato sobre a renovação das apólices, informando o segurado antes e contando com o consentimento dele.',
        },
        {
          type: 'p',
          text: 'Você não é obrigado a fornecer esses dados, mas, sem eles, pode não ser possível elaborar uma cotação ou contratar o seguro.',
        },
        {
          type: 'p',
          text: 'O WhatsApp é um serviço operado pela WhatsApp/Meta e está sujeito aos termos e à política de privacidade da própria plataforma, sobre os quais a D.R.A. Seguros não tem controle. Recomendamos que você envie apenas as informações necessárias ao atendimento.',
        },
      ],
    },
    {
      title: 'Como funcionam os cookies e as tecnologias de armazenamento',
      blocks: [
        {
          type: 'p',
          text: 'Cookies são pequenos arquivos gravados no seu navegador. Além deles, o site usa o armazenamento local do navegador (localStorage) para lembrar a sua escolha sobre cookies. O localStorage não é um cookie, mas é tratado com o mesmo cuidado e está descrito abaixo.',
        },
        {
          type: 'table',
          head: ['Nome', 'Finalidade', 'Duração', 'Fornecedor'],
          rows: [
            [
              'dra_consent (localStorage)',
              'Guardar a sua escolha sobre cookies (preferência, data e versão do consentimento). Necessário para não perguntar a cada visita.',
              '6 meses, ou até você alterar a escolha',
              'D.R.A. Seguros',
            ],
            [
              '_ga',
              'Distinguir visitantes de forma pseudonimizada, para gerar estatísticas de uso do site. Só é gravado com a sua autorização.',
              'Até 2 anos (padrão do Google Analytics)',
              'Google (Google Analytics)',
            ],
            [
              '_ga_*',
              'Manter o estado da sessão de navegação no Google Analytics 4. Só é gravado com a sua autorização.',
              'Até 2 anos (padrão do Google Analytics)',
              'Google (Google Analytics)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Os cookies de análise ficam desativados até você autorizar. Enquanto isso não acontece, o Google Tag Manager, que carrega o Google Analytics, nem é carregado. Se você recusar, nenhum cookie de análise é usado.',
        },
        {
          type: 'p',
          text: 'Recusar os cookies de análise não impede a navegação no site nem o contato pelo WhatsApp.',
        },
        {
          type: 'p',
          text: 'Você pode mudar a sua escolha a qualquer momento pelo link "Preferências de cookies", no rodapé de todas as páginas. Ao retirar a autorização, os cookies de análise conhecidos são apagados e a página é recarregada. Você também pode apagar cookies e dados do site nas configurações do seu navegador. A escolha é pedida novamente após 6 meses ou quando esta Política mudar de forma que exija nova autorização.',
        },
      ],
    },
    {
      title: 'Uso do Google Analytics e participação do Google',
      blocks: [
        {
          type: 'p',
          text: 'Usamos o Google Analytics 4, serviço do Google, para medir o uso do site. Ele é carregado pelo Google Tag Manager, também do Google, e apenas depois da sua autorização. O Google atua como fornecedor de tecnologia, tratando as informações de análise em nosso nome, e também tem as suas próprias condições e política de privacidade.',
        },
        {
          type: 'p',
          text: 'Atualmente, não utilizamos ferramentas de publicidade ou remarketing neste site. Se isso mudar, esta Política será atualizada e a sua autorização será pedida novamente.',
        },
      ],
    },
    {
      title: 'Compartilhamento de informações',
      blocks: [
        {
          type: 'p',
          text: 'As informações de navegação são processadas pelas ferramentas tecnológicas usadas no site, de acordo com as finalidades descritas nesta Política: o Google (análise) e o provedor de hospedagem (funcionamento e segurança).',
        },
        {
          type: 'p',
          text: 'Os dados fornecidos por você durante o atendimento podem ser compartilhados com as seguradoras e com outros prestadores envolvidos na elaboração de cotações e na contratação dos seguros, apenas na medida necessária para isso. Também podem ser compartilhados com autoridades e órgãos reguladores, quando houver obrigação legal ou ordem de autoridade competente.',
        },
      ],
    },
    {
      title: 'Transferência internacional de dados',
      blocks: [
        {
          type: 'p',
          text: 'Algumas das ferramentas citadas, como o Google e o WhatsApp/Meta, podem tratar dados em servidores localizados fora do Brasil, inclusive nos Estados Unidos. Quando isso ocorre, a transferência deve observar a LGPD (art. 33), por meio dos mecanismos adotados pelos respectivos fornecedores, como cláusulas contratuais padrão ou outras hipóteses legais.',
        },
      ],
    },
    {
      title: 'Segurança e retenção das informações',
      blocks: [
        {
          type: 'p',
          text: 'Buscamos adotar medidas adequadas para proteger as informações tratadas contra acessos não autorizados, perda ou uso indevido.',
        },
        {
          type: 'p',
          text: 'Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas nesta Política, atender às obrigações legais e regulatórias da atividade de corretagem de seguros e exercer direitos em processos judiciais, administrativos ou arbitrais. Depois disso, os dados são eliminados ou anonimizados, salvo quando a lei permitir a sua conservação. Os dados de análise ficam armazenados no Google Analytics pelo período de retenção configurado na conta do site.',
        },
      ],
    },
    {
      title: 'Seus direitos como titular de dados',
      blocks: [
        {
          type: 'p',
          text: 'Nos termos da LGPD, você pode solicitar, observadas as condições previstas em lei:',
        },
        {
          type: 'ul',
          items: [
            'confirmação de que tratamos dados pessoais seus;',
            'acesso aos seus dados;',
            'correção de dados incompletos, inexatos ou desatualizados;',
            'anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;',
            'portabilidade dos dados, quando aplicável;',
            'eliminação dos dados tratados com base no seu consentimento;',
            'informação sobre as entidades com as quais compartilhamos dados;',
            'informação sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa recusa;',
            'revogação do consentimento, a qualquer momento;',
            'oposição a tratamentos feitos sem o seu consentimento, quando houver descumprimento da lei.',
          ],
        },
        {
          type: 'p',
          text: 'Para exercer esses direitos, use o canal da seção 11. Podemos pedir informações adicionais para confirmar a sua identidade e responderemos dentro dos prazos legais. Você também pode apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD).',
        },
      ],
    },
    {
      title: 'Canal para dúvidas e solicitações sobre privacidade',
      blocks: [
        {
          type: 'p',
          text: 'Para dúvidas sobre esta Política ou solicitações relacionadas aos seus dados pessoais, fale com a D.R.A. Seguros por um destes canais:',
        },
        { type: 'contact' },
      ],
    },
    {
      title: 'Atualizações desta Política',
      blocks: [
        {
          type: 'p',
          text: 'Esta Política poderá ser atualizada para refletir mudanças nos serviços, nas práticas de tratamento de dados ou na legislação. A versão mais recente estará sempre nesta página, com a data da última atualização. Quando uma mudança exigir nova autorização para cookies, a barra de cookies voltará a ser exibida.',
        },
      ],
    },
  ],
};
