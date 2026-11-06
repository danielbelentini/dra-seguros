# D.R.A. Seguros — Landing Page

Landing page institucional da corretora **D.R.A. Seguros** (Daniela Regina de
Almeida), construída em **Next.js 14 (App Router) + React 18**, com
**exportação 100% estática** — o resultado do build é um conjunto de arquivos
HTML/CSS/JS que roda em qualquer hospedagem, sem precisar de Node.js no
servidor.

## Pré-requisitos

- Node.js 18.18+ (recomendado 20 LTS)
- npm 9+

## Como rodar

```bash
npm install       # instala as dependências
npm run dev       # ambiente de desenvolvimento em http://localhost:3000
```

## Como gerar o site estático (produção)

```bash
npm run build
```

Isso cria a pasta **`out/`** na raiz do projeto, já com todo o site estático
(HTML, CSS, JS e imagens). É o conteúdo dessa pasta que deve ser enviado
para o servidor de hospedagem (FTP, painel de hospedagem, Netlify, Vercel,
Cloudflare Pages, GitHub Pages, S3, etc. — qualquer host de arquivos
estáticos funciona).

> Não é necessário `npm run start` nem qualquer servidor Node em produção:
> basta hospedar o conteúdo da pasta `out/`.

## Estrutura do projeto

```
app/
  layout.js        → estrutura raiz, fontes, metadados de SEO e JSON-LD
  page.js           → monta a página inicial com todas as seções
  politica-de-privacidade/page.js → Política de Privacidade
  sitemap.js        → gera sitemap.xml no build
  robots.js         → gera robots.txt no build
  not-found.js       → página 404
  globals.css        → estilos globais, acessibilidade e tokens de cor
components/
  Header.jsx          → cabeçalho fixo com transparência e menu mobile
  Footer.jsx          → rodapé com navegação, redes sociais, logo, Política de
                        Privacidade e "Preferências de cookies"
  CookieConsent.jsx   → barra de cookies e painel de preferências
  Hero.jsx            → seção inicial
  About.jsx           → seção "Sobre a profissional"
  Services.jsx        → seção de serviços (usa ServiceCard.jsx)
  ServiceCard.jsx      → card reutilizável de serviço
  Testimonials.jsx     → carrossel de depoimentos (autoplay a cada 4s)
  FAQ.jsx              → seção de dúvidas (usa FaqItem.jsx)
  FaqItem.jsx           → item de accordion reutilizável (details/summary)
  CTA.jsx               → seção de chamada final com foto de fundo
  SmartImage.jsx        → imagem com <picture> (.webp + fallback .jpg/.png)
  Button.jsx             → botão reutilizável (variantes primary/secondary/etc.)
  Container.jsx          → wrapper de largura máxima
  Flourish.jsx            → traço decorativo (assinatura visual da marca)
  icons.jsx                → ícones em SVG puro (sem dependências externas)
data/
  content.js                → todo o texto do site (fácil de editar)
  privacy.js                 → texto da Política de Privacidade
lib/
  analytics.js               → eventos do dataLayer (só com consentimento)
  consent.js                  → consentimento, Consent Mode v2 e GTM condicional
public/images/                → imagens (placeholders inclusos)
scripts/generate-placeholders.py → script que gerou os placeholders atuais
```

## Como editar o conteúdo (textos, telefone, links)

Praticamente todo o texto do site está centralizado em **`data/content.js`**:
nome, telefone, WhatsApp, redes sociais, serviços, depoimentos, perguntas
frequentes e textos de SEO. Edite esse arquivo e não precisa mexer em
nenhum componente.

## Como trocar as imagens (placeholders → fotos reais)

Todas as imagens de conteúdo usam o componente `SmartImage`, que renderiza:

```html
<picture>
  <source srcSet="/images/hero.webp" type="image/webp" />
  <img src="/images/hero.jpg" ... />
</picture>
```

Para trocar uma foto, basta **substituir o arquivo em `public/images/`
mantendo o mesmo nome**, gerando os dois formatos (`.webp` e `.jpg`):

| Uso                         | Arquivo base            | Tamanho sugerido |
| ---------------------------- | ------------------------ | ----------------- |
| Foto da Daniela no Hero      | `public/images/hero`     | 1000×1250px        |
| Foto da Daniela no Sobre     | `public/images/about`    | 900×1100px         |
| Foto de fundo do CTA final   | `public/images/cta-bg`   | 1920×1080px        |
| Avatares dos depoimentos     | `public/images/avatar-1/2/3` | 240×240px      |
| Logo (com fundo)             | `public/images/logo.png` | conforme original   |
| Logo (fundo transparente, usada no rodapé escuro) | `public/images/logo-transparent.png` | conforme original |
| Imagem de compartilhamento (Open Graph) | `public/images/og-image` | 1200×630px |

Se preferir usar apenas um formato (ex. só `.jpg`), altere a prop `fallback`
do `SmartImage` ou remova o `<source>` do componente — ele funciona mesmo
sem o `.webp`, mas o ideal para performance é manter os dois.

O script `scripts/generate-placeholders.py` (Python + Pillow) foi usado para
gerar os placeholders atuais na paleta da marca; pode ser reaproveitado ou
apagado quando as fotos reais forem inseridas.

## Cores e tipografia

- Paleta definida em `tailwind.config.js` (`maroon`, `cream`, `gold`, `ink`),
  extraída diretamente do logo enviado.
- Tipografia: **Fraunces** (serifada, títulos) + **Karla** (texto), carregadas
  via `next/font/google` em `app/layout.js` — ficam self-hosted no build
  final (nenhuma requisição externa em produção).

## SEO

- Metadados (title, description, Open Graph, Twitter Card) em `app/layout.js`,
  usando os textos de `data/content.js`.
- Dados estruturados JSON-LD (`InsuranceAgency`) para melhorar a exibição em
  buscadores.
- `sitemap.xml` e `robots.txt` gerados automaticamente no build.
- **Antes de publicar**, atualize `site.url` em `data/content.js` para o
  domínio real — ele é usado nas URLs canônicas, no sitemap e no robots.txt.

## Acessibilidade

- HTML semântico (`header`, `main`, `nav`, `section`, `footer`, `details`/`summary`).
- Link "Pular para o conteúdo" para quem navega por teclado.
- Foco visível (`:focus-visible`) em toda a página.
- Contraste de cores verificado entre texto e fundo.
- Carrossel de depoimentos pausa ao passar o mouse/focar e respeita
  `prefers-reduced-motion` (não gira automaticamente para quem desativou
  animações no sistema).
- Indicadores do carrossel são botões acessíveis (`role="tab"`, rótulos com
  o nome de quem depõe).
- O item ativo do menu (`Header.jsx`) é atualizado via `IntersectionObserver`
  conforme a seção correspondente entra na tela, com `aria-current="true"`
  no link ativo para leitores de tela.

## Performance

- Exportação estática (sem servidor Node, sem tempo de resposta de backend).
- Imagens em `.webp` com fallback automático.
- Fontes self-hosted (sem bloqueio de renderização por fontes externas).
- Sem bibliotecas de carrossel externas (implementado em React puro, leve).
- Ícones em SVG inline (sem pacote de ícones).

## Google Tag Manager (GTM) e eventos de clique no WhatsApp

O GTM é carregado **somente depois que o visitante autoriza os cookies de
análise** (ver a seção "Cookies, consentimento e Política de Privacidade"
abaixo). O ID do container vem da variável `NEXT_PUBLIC_GTM_ID`:

1. Localmente: crie `.env.local` com `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`.
2. **No Netlify** (e em qualquer outra hospedagem): o `.env.local` não vai
   para o repositório (está no `.gitignore`). Cadastre a mesma variável em
   *Site configuration → Environment variables* **antes** do build de
   produção; sem ela o GTM não é carregado e nada é medido.
3. Rode `npm run build` normalmente.

Sem essa variável definida, o site funciona normalmente e simplesmente não
carrega o GTM (útil para rodar localmente sem "sujar" as métricas reais).

**Eventos de clique no WhatsApp**: como o WhatsApp é o único canal de
conversão do site, todo botão/link que leva pra lá dispara um evento
`whatsapp_click` no `dataLayer`, com estes parâmetros (além de `event`):

| Parâmetro | Origem |
| --- | --- |
| `page_name` | rota atual (`home`, `seguro_auto`...), via `getPageName` em `lib/analytics.js` |
| `section_name` | atributo `data-wa-section` do link |
| `button_name` | atributo `data-wa-button` do link (único por elemento) |
| `button_label` | texto visível do link no momento do clique |
| `link_url` | `href` completo do link |

Como funciona: um único listener (`components/WhatsappTracker.jsx`, montado
no `app/layout.js`) captura cliques em `a[data-wa-section][data-wa-button]`
e chama `trackWhatsappClick` (`lib/analytics.js`), que inicializa o
`dataLayer` sem sobrescrever um já existente. **Para rastrear um novo botão
de WhatsApp**, basta adicionar `data-wa-section="..."` e
`data-wa-button="..."` (identificador único) no link ou no `<Button>`.

**Eventos de navegação e redes sociais**: o mesmo listener e os mesmos cinco
parâmetros valem para dois eventos adicionais:

| Evento | Quando dispara |
| --- | --- |
| `navigation_click` | link que leva a **outra página** do site (Home ↔ `/seguro-auto`). Âncoras da mesma página não disparam: "Sobre" na Home não gera evento, mas em `/seguro-auto` (link `/#sobre`) gera. |
| `social_click` | links de redes sociais do footer |

O link recebe `data-track-event` (`navigation_click` ou `social_click`),
`data-track-section` e `data-track-button` (identificador único). Para
rastrear um novo link, basta adicionar esses três atributos. O destino é
comparado com a página atual no momento do clique (`trackLinkClick` em
`lib/analytics.js`). Itens do menu usam `trackId` em `navLinks`
(`data/content.js`) para formar o `button_name`.

No GTM, crie um acionador de evento personalizado para cada evento
(`whatsapp_click`, `navigation_click`, `social_click`) e uma tag de evento do
GA4 que mapeie os cinco parâmetros acima.

**Importante:** esses três eventos só são enviados ao `dataLayer` quando o
visitante autorizou os cookies de análise (`pushEvent` em `lib/analytics.js`).
Isso é necessário porque o GTM, ao carregar depois do aceite, processa tudo o
que já estiver no `dataLayer`; sem essa trava, um clique feito antes da
autorização seria enviado ao GA4 retroativamente. O link continua funcionando
normalmente; o clique só não é registrado.

## Cookies, consentimento e Política de Privacidade

- **Barra de cookies** (`components/CookieConsent.jsx`): fixa na parte de
  baixo, não bloqueante, com "Aceitar" e "Recusar" de mesmo destaque e o link
  da Política. O painel de preferências (Necessários sempre ativos; Análise
  liga/desliga) abre pelo botão **"Preferências de cookies"** do rodapé.
- **Lógica** (`lib/consent.js`): guarda a escolha no `localStorage`
  (chave `dra_consent`: versão, data, validade e categorias). Validade de
  6 meses (`CONSENT_VALIDITY_DAYS`). Para forçar nova pergunta a todos os
  visitantes (por exemplo, depois de mudar a política de cookies), aumente
  `CONSENT_VERSION`.
- **GTM condicional**: sem autorização, o container não é carregado, nenhuma
  requisição vai ao Google e o `dataLayer` nem é criado. Ao autorizar, o
  Consent Mode v2 é configurado antes do GTM: `default` com tudo `denied`
  (exceto `security_storage: granted`) e, logo em seguida, `update` com
  `analytics_storage: granted`. Só então o script do GTM é injetado (uma
  única vez). O `<noscript>` do GTM foi removido do layout porque carregaria
  o container sem consentimento.
- **Revogação**: ao desligar a análise, os cookies `_ga`, `_ga_*`, `_gid` e
  `_gat*` são apagados e a página recarrega.
- **Política de Privacidade**: página `/politica-de-privacidade`
  (`app/politica-de-privacidade/page.js`), texto em `data/privacy.js`.
  Enquanto `privacyPolicy.ready` for `false`, a página fica com `noindex` e
  fora do sitemap. Veja no topo de `data/privacy.js` o que precisa ser
  confirmado antes de trocar para `true`.
- Textos da barra e do painel: `cookieConsent` em `data/content.js`.
- Dados da empresa (razão social, CNPJ, SUSEP) estão em `site`, em
  `data/content.js`.

## Deploy

Depois de `npm run build`, envie o conteúdo da pasta `out/` para o servidor.
Alguns exemplos comuns:

- **Hospedagem tradicional / cPanel**: envie o conteúdo de `out/` via FTP
  para a pasta pública do site (`public_html`, `www`, etc.).
- **Netlify / Cloudflare Pages**: comando de build `npm run build`, pasta de
  publicação `out`.
- **GitHub Pages**: publique o conteúdo de `out/` na branch/pasta configurada.
