import Hero from '@/components/Hero';
import HowWeWork from '@/components/HowWeWork';
import Protection from '@/components/Protection';
import OngoingSupport from '@/components/OngoingSupport';
import AboutTestimonials from '@/components/AboutTestimonials';
import Insurers from '@/components/Insurers';
import CTA from '@/components/CTA';

// Estrutura da Home (refatoração): uma narrativa contínua —
// proteção → orientação → opções → acompanhamento → pessoa por trás da
// corretora → credibilidade → conversa.
export default function HomePage() {
  return (
    <>
      <Hero />
      <HowWeWork />
      <Protection />
      <OngoingSupport />
      <AboutTestimonials />
      <Insurers />
      <CTA />
    </>
  );
}
