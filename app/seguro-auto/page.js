import AutoHero from '@/components/seguro-auto/AutoHero';
import InfoBullets from '@/components/InfoBullets';
import ProcessSteps from '@/components/ProcessSteps';
import QuoteViaWhatsapp from '@/components/seguro-auto/QuoteViaWhatsapp';
import PostSale from '@/components/seguro-auto/PostSale';
import Claims from '@/components/seguro-auto/Claims';
import InsurerList from '@/components/seguro-auto/InsurerList';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import {
  autoSeo,
  priceIsNotEverything,
  whatToConsider,
  autoProcessSteps,
  autoCtaFinal,
} from '@/data/content';

export const metadata = {
  title: autoSeo.title,
  description: autoSeo.description,
  keywords: autoSeo.keywords,
};

// Página permanente de serviço — não uma landing page de anúncio (seção 20).
// Estrutura fiel à seção 20 do briefing, com fundos alternados entre
// cream/maroon a cada seção para manter a hierarquia visual (seção 27).
export default function SeguroAutoPage() {
  return (
    <>
      <AutoHero />

      <InfoBullets
        id="preco"
        eyebrow="Antes de decidir"
        title="Não é só o menor preço"
        intro="Uma boa cotação considera mais do que o valor da mensalidade."
        items={priceIsNotEverything}
        tone="cream"
      />

      <ProcessSteps
        id="como-funciona"
        eyebrow="Como a D.R.A. faz a cotação"
        title="Do seu perfil à decisão final"
        steps={autoProcessSteps}
        tone="maroon"
      />

      <InfoBullets
        id="o-que-considerar"
        eyebrow="Vale a pena avaliar"
        title="O que considerar"
        items={whatToConsider}
        tone="cream"
      />

      <QuoteViaWhatsapp />
      <PostSale />
      <Claims />
      <InsurerList />

      <Differentials
        id="diferenciais"
        eyebrow="Por que contar com a D.R.A."
        title="Diferenciais"
        tone="maroon"
      />

      <Testimonials />
      <FAQ />

      <CTA id="cta-final" content={autoCtaFinal} analyticsLocation="auto_cta_final" />
    </>
  );
}
