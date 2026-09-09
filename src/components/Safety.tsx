import { company } from '../data/company';
import { SectionTitle } from './SectionTitle';

export function Safety() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionTitle tag="Segurança" title="Segurança e conformidade técnica" subtitle="Todos os serviços devem ser executados seguindo as normas técnicas e boas práticas aplicáveis ao projeto." />
          <div className="mt-8 flex flex-wrap gap-3">
            {company.norms.map((norm) => (
              <span key={norm} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-electric-300">
                {norm}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="space-y-5">
            {[
              'Execução conforme normas técnicas e boas práticas.',
              'Avaliação de riscos e procedimentos de segurança.',
              'Planejamento técnico para maior confiabilidade e eficiência.',
              'Ações orientadas à segurança, qualidade e conformidade operacional.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-electric-500 text-xs font-black text-slate-900">✓</span>
                <p className="text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
