import Container from '@/components/Container';
import Flourish from '@/components/Flourish';
import { privacyPolicy } from '@/data/privacy';
import { privacyHref, site } from '@/data/content';

// Enquanto `privacyPolicy.ready` for false (ver data/privacy.js), a página
// fica com "noindex" e fora do sitemap. O canonical é próprio da página: o
// layout define canonical "/" para o site todo e ele não deve valer aqui.
export const metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.seoDescription,
  alternates: { canonical: `${privacyHref}/` },
  robots: privacyPolicy.ready
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

function Block({ block }) {
  if (block.type === 'p') {
    return <p className="mt-4 text-[16px] leading-relaxed text-ink/80">{block.text}</p>;
  }

  if (block.type === 'ul') {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[16px] leading-relaxed text-ink/80 marker:text-maroon-700">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="mt-5 overflow-x-auto rounded-[6px] border border-maroon-700/15">
        <table className="w-full min-w-[34rem] border-collapse text-left text-[14.5px] leading-relaxed">
          <thead className="bg-cream-300 text-maroon-900">
            <tr>
              {block.head.map((cell) => (
                <th key={cell} scope="col" className="px-4 py-3 font-semibold">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-ink/80">
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-t border-maroon-700/15 align-top">
                {row.map((cell, index) => (
                  <td key={cell} className={`px-4 py-3 ${index === 0 ? 'font-medium text-maroon-900' : ''}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'contact') {
    return (
      <ul className="mt-4 space-y-2 text-[16px] leading-relaxed text-ink/80">
        <li>
          E-mail:{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-maroon-700 underline underline-offset-2 hover:text-maroon-900"
          >
            {site.email}
          </a>
        </li>
        <li>WhatsApp: {site.phone}</li>
      </ul>
    );
  }

  return null;
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-cream-100 pt-[84px]">
      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-maroon-700">
            {site.name}
          </p>
          <h1 className="mt-3 font-display text-[2.2rem] leading-[1.15] text-maroon-900 md:text-[2.7rem]">
            {privacyPolicy.title}
          </h1>
          <Flourish className="mt-5" />
          <p className="mt-5 text-[14px] text-ink/60">
            Última atualização: {privacyPolicy.lastUpdated}
          </p>

          {privacyPolicy.intro.map((text) => (
            <p key={text} className="mt-5 text-[16px] leading-relaxed text-ink/80">
              {text}
            </p>
          ))}

          {privacyPolicy.sections.map((section, index) => (
            <section key={section.title} className="mt-12">
              <h2 className="font-display text-[1.45rem] leading-snug text-maroon-900">
                {index + 1}. {section.title}
              </h2>
              {section.blocks.map((block, blockIndex) => (
                <Block key={`${section.title}-${blockIndex}`} block={block} />
              ))}
            </section>
          ))}
        </article>
      </Container>
    </section>
  );
}
