import { ChevronIcon } from './icons';

export default function FaqItem({ question, answer }) {
  return (
    <details className="group border-b border-maroon-700/15 py-5 first:pt-0 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[16.5px] font-medium text-maroon-900 marker:content-none">
        {question}
        <ChevronIcon className="h-5 w-5 shrink-0 text-maroon-700 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="mt-3 max-w-[62ch] text-[15.5px] leading-relaxed text-ink/70">{answer}</p>
    </details>
  );
}
