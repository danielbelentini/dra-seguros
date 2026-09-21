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
  sitemap.js        → gera sitemap.xml no build
  robots.js         → gera robots.txt no build
  not-found.js       → página 404
  globals.css        → estilos globais, acessibilidade e tokens de cor
components/
  Header.jsx          → cabeçalho fixo com transparência e menu mobile
  Footer.jsx          → rodapé com navegação, redes sociais e logo
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

O projeto já vem preparado para receber o GTM, sem precisar mexer em código:

1. Copie `.env.local.example` para `.env.local`.
2. Preencha `NEXT_PUBLIC_GTM_ID` com o ID do seu container (formato `GTM-XXXXXXX`).
3. Rode `npm run build` normalmente — o script do GTM é injetado no `<head>`
   (e o `<noscript>` logo no `<body>`) automaticamente.

Sem essa variável definida, o site funciona normalmente e simplesmente não
carrega o GTM (útil para rodar localmente sem "sujar" as métricas reais).

**Eventos de clique no WhatsApp**: como o WhatsApp é o único canal de
conversão do site, todo botão/link que leva pra lá já dispara um evento
`whatsapp_click` no `dataLayer`, com o parâmetro `click_location` indicando
de onde veio o clique (`header`, `header_mobile`, `hero`, `faq`,
`cta_final`, `footer`, `footer_social`). Essa lógica está centralizada em
`lib/analytics.js` — é só criar, no GTM, uma tag de evento do GA4 que
escuta `whatsapp_click` e mapeia `click_location` como parâmetro
personalizado. Isso permite ver no GA4 exatamente qual seção da página gera
mais cliques (e depois criar públicos de remarketing por seção, se quiser).

Se preferir usar o GA4 direto (sem GTM), dá pra adaptar `lib/analytics.js`
para chamar `window.gtag('event', 'whatsapp_click', {...})` em vez de
`dataLayer.push`.

## Deploy

Depois de `npm run build`, envie o conteúdo da pasta `out/` para o servidor.
Alguns exemplos comuns:

- **Hospedagem tradicional / cPanel**: envie o conteúdo de `out/` via FTP
  para a pasta pública do site (`public_html`, `www`, etc.).
- **Netlify / Cloudflare Pages**: comando de build `npm run build`, pasta de
  publicação `out`.
- **GitHub Pages**: publique o conteúdo de `out/` na branch/pasta configurada.
