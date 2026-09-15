import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/company';

export function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1200;
    const starts = stats.map((stat) => {
      const numericValue = Number.parseFloat(stat.value.replace(/[^\d.]/g, '')) || 0;
      return numericValue;
    });

    const startTime = performance.now();

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(
        starts.map((target) => Math.round(target * eased)),
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="border-y border-slate-200 bg-slate-950 py-14 text-white">
      <div className="container-shell">
        <div className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-electric-300">Resultado e confiança</p>
          <h2 className="sr-only">Experiência da TS Elétrica em engenharia elétrica</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const displayValue = stat.value.includes('%')
              ? `${values[index] || 0}%`
              : stat.value.includes('+')
                ? `+${values[index] || 0}`
                : String(values[index] || 0);

            return (
              <div key={stat.label} className="card-lift rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-soft">
                <div className="text-4xl font-black tracking-tight text-electric-300">{displayValue}</div>
                <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
