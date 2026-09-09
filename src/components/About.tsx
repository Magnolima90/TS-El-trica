import { ArrowRight, BadgeCheck, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="bg-white py-20">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="section-tag">Sobre nós</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            TS Elétrica | Engenharia Elétrica em Fortaleza
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Nossa empresa atua no mercado de engenharia elétrica com foco em soluções duráveis, técnicas e seguras para cada projeto. Trabalhamos com planejamento, execução, manutenção e suporte técnico para garantir qualidade em cada etapa.
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              'Equipe qualificada',
              'Segurança',
              'Qualidade',
              'Cumprimento de prazos',
              'Atendimento personalizado',
              'Soluções sob medida',
              'Conformidade com normas técnicas',
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                <CheckCircle className="text-electric-600" size={18} />
                {item}
              </div>
            ))}
          </div>
          <a href="#contato" className="premium-button mt-8">
            Conheça nossa empresa
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Equipe da TS Elétrica em reunião técnica de engenharia elétrica"
            className="h-72 w-full rounded-[2rem] object-cover shadow-soft sm:h-[420px]"
            loading="lazy"
          />
          <div className="space-y-5">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"
              alt="Infraestrutura elétrica em obra de engenharia para instalação e manutenção"
              className="h-44 w-full rounded-[2rem] object-cover shadow-soft"
              loading="lazy"
            />
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-500 text-slate-900">
                  <BadgeCheck size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-electric-300">Compromisso</p>
                  <p className="text-xl font-bold">Execução segura</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Nosso processo prioriza organização, segurança, qualificação técnica e bom atendimento para cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
