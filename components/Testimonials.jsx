'use client';

import { useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flourish from './Flourish';
import SmartImage from './SmartImage';
import { testimonials } from '@/data/content';

const INTERVAL_MS = 4000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (paused || prefersReducedMotion) return undefined;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL_MS);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  // Pausa o giro automático quando a aba não está visível
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return (
    <section id="depoimentos" className="bg-cream-100 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-[60ch] text-center">
          <p className="text-[15px] font-medium text-maroon-500">Depoimentos</p>
          <h2 className="mt-3 font-display text-[2.1rem] leading-[1.18] text-maroon-900 sm:text-[2.4rem]">
            Quem confia, indica
          </h2>
          <Flourish align="center" className="mt-4" />
        </div>

        <div
          className="relative mx-auto mt-14 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            role="region"
            aria-label="Depoimentos de clientes"
            aria-live="polite"
            className="relative overflow-hidden"
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.id}
                className={`px-2 text-center transition-opacity duration-500 ${
                  i === index ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
                }`}
                aria-hidden={i !== index}
              >
                <SmartImage
                  src={`/images/${t.avatar}`}
                  alt=""
                  width={72}
                  height={72}
                  className="mx-auto h-[72px] w-[72px] rounded-full object-cover"
                />
                <blockquote className="mt-6 font-display text-[1.3rem] leading-relaxed text-maroon-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-[14.5px] text-ink/60">
                  <span className="font-semibold text-ink/80">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-9 flex items-center justify-center gap-2.5" role="tablist" aria-label="Selecionar depoimento">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ver depoimento de ${t.name}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  i === index ? 'bg-maroon-700' : 'bg-maroon-700/25 hover:bg-maroon-700/50'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
