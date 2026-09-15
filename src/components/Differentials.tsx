import { Check, ShieldCheck } from 'lucide-react';
import { differentials } from '../data/company';
import { SectionTitle } from './SectionTitle';

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-20">
      <div className="container-shell">
        <SectionTitle
          tag="Diferenciais"
          title="Por que escolher a TS Elétrica em Fortaleza?"
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {differentials.map((item) => (
            <div key={item} className="card-surface flex items-center gap-3 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                <Check size={18} />
              </div>
              <span className="font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-electric-200 bg-gradient-to-r from-electric-50 to-white p-8 shadow-soft">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric-600">Compromisso</p>
              <h3 className="mt-2 text-2xl font-black text-slate-900">Segurança, qualidade e atendimento de alto nível</h3>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white">
              <ShieldCheck size={18} className="text-electric-300" />
              Execução responsável
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
