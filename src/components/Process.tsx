import { ArrowRight, CheckCheck, Gauge, Lightbulb, Wrench, ShieldCheck } from 'lucide-react';
import { processSteps } from '../data/company';

const icons = [Lightbulb, Gauge, Wrench, ShieldCheck, CheckCheck];

export function Process() {
  return (
    <section className="bg-white py-20">
      <div className="container-shell">
        <div className="text-center">
          <span className="section-tag">Processo</span>
          <h2 className="section-heading mt-5">Como trabalhamos</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = icons[index] ?? Wrench;
            return (
              <div key={step.number} className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <Icon size={20} />
                </div>
                <p className="mt-5 text-2xl font-black text-electric-600">{step.number}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                {index < processSteps.length - 1 ? <ArrowRight className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block" size={18} /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
