import { ArrowRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { company } from '../data/company';
import { ButtonWhatsApp } from './ButtonWhatsApp';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 pb-20 pt-12 text-white sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.25),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_25%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:34px_34px] opacity-20" />

      <div className="container-shell relative">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/35 bg-electric-500/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-electric-300">
              <Sparkles size={14} />
              Engenharia elétrica profissional
            </span>
            {company.emergency24h ? (
              <a
                href={company.companyPhoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/15 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 transition hover:bg-red-500/25"
              >
                <PhoneCall size={14} />
                Emergência 24h
              </a>
            ) : null}
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Soluções Elétricas com Segurança e Qualidade
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A TS Elétrica oferece projetos, instalações, manutenção e soluções em engenharia elétrica com foco em segurança, eficiência e atendimento ágil em Fortaleza – CE.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonWhatsApp text="Solicitar Orçamento" className="bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.25)]" />
            <a href="#servicos" className="premium-button border border-white/20 bg-white/10 text-white hover:bg-white/15">
              Conhecer serviços
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            {[
              'Atendimento emergencial 24h',
              'Soluções personalizadas',
              'Segurança e qualidade',
              'Suporte técnico',
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <CheckCircle2 className="text-electric-300" size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

