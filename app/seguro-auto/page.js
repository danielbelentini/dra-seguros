import AutoHero from '@/components/seguro-auto/AutoHero';
import PriceConsiderations from '@/components/seguro-auto/PriceConsiderations';
import ProfileApproach from '@/components/seguro-auto/ProfileApproach';
import PostSale from '@/components/seguro-auto/PostSale';
import AutoTestimonial from '@/components/seguro-auto/AutoTestimonial';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { autoSeo, autoFaqs, autoCtaFinal } from '@/data/content';

export const metadata = {
  title: autoSeo.title,
  description: autoSeo.description,
  keywords: autoSeo.keywords,
};

// Página permanente de serviço — não uma landing page de anúncio.
// Estrutura reduzida e narrativa conforme o briefing de ajustes:
// Hero → preço não é tudo → perfil → pós-venda → prova social → FAQ →
// CTA final. Sem seção de seguradoras nem "Diferenciais" genérico aqui —
// esse conteúdo já está na Home, para não repetir informação.
export default function SeguroAutoPage() {
  return (
    <>
      <AutoHero />

      <PriceConsiderations />

      <ProfileApproach />

      <PostSale />

      <AutoTestimonial />

      <FAQ items={autoFaqs} />

      <CTA
        id="cta-final"
        content={autoCtaFinal}
        analyticsLocation="auto_cta_final"
        overlay="solid"
        imagePlaceholder
        placeholderNote="Imagem conceitual de carro · mesmo tratamento visual do Hero"
      />
    </>
  );
}
