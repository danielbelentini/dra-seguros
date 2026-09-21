import Container from '@/components/Container';
import Button from '@/components/Button';

export const metadata = {
  title: 'Página não encontrada',
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream-200 pt-[84px]">
      <Container className="text-center">
        <p className="font-display text-6xl text-maroon-700">404</p>
        <h1 className="mt-4 font-display text-2xl text-maroon-900">
          Essa página não foi encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-[46ch] text-[15.5px] text-ink/70">
          O endereço pode ter mudado. Volte para o início e continue a
          navegação por lá.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Voltar ao início</Button>
        </div>
      </Container>
    </section>
  );
}
