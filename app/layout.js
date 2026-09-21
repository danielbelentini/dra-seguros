import { Fraunces, Karla, Bodoni_Moda } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import { seo, site } from '@/data/content';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Usada exclusivamente na assinatura textual "D.R.A. / SEGUROS" do header —
// não substitui a tipografia geral do site (Fraunces/Karla seguem como
// display/body). Ver seção 16 do briefing: o header usa uma assinatura em
// texto no lugar de um símbolo, e Bodoni Moda é a fonte que mais se
// aproxima do desenho da logo original.
const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-brand',
  weight: ['500', '600'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.ownerName }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    title: seo.title,
    description: seo.description,
    siteName: site.name,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/images/favicon-180.png', sizes: '180x180', type: 'image/png' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: site.name,
  founder: site.ownerName,
  image: `${site.url}/images/og-image.jpg`,
  url: site.url,
  telephone: `+${site.phoneHref}`,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressCountry: 'BR',
  },
  areaServed: 'BR',
};

// ID do container do Google Tag Manager (ex.: "GTM-XXXXXXX").
// Defina em .env.local — veja o README para instruções. Sem essa variável,
// o site funciona normalmente, só não carrega o GTM.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${karla.variable} ${bodoniModa.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GTM_ID ? (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        ) : null}
      </head>
      <body className="font-body antialiased">
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
