import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { company } from '../data/company';
import { ButtonWhatsApp } from './ButtonWhatsApp';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 pb-20 pt-12 text-white sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.25),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_25%)]" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:34px_34px] opacity-20" />

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/35 bg-electric-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-electric-300">
              <Sparkles size={14} />
              Engenharia elétrica profissional
            </span>
            {company.emergency24h ? (
              <a
                href={company.companyPhoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 transition hover:bg-red-500/25"
              >
                <PhoneCall size={14} />
                Emergência 24h
              </a>
            ) : null}
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            TS Elétrica | Soluções Elétricas em Fortaleza
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            A TS Elétrica oferece projetos, instalações, manutenção e soluções em engenharia elétrica com foco em segurança, eficiência e atendimento ágil em Fortaleza – CE.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contato" className="premium-button">
              Solicitar orçamento
              <ArrowRight className="ml-2" size={16} />
            </a>
            <ButtonWhatsApp className="bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.25)]" />
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

        <div className="relative">
          <div className="hero-float relative overflow-hidden rounded-[2rem] border border-electric-300/40 bg-slate-900 shadow-[0_30px_60px_rgba(250,204,21,0.2)]">
            <img
              src="/projetos/escritorio-corredor-led.jpg"
              alt="Projeto de iluminação em LED executado pela TS Elétrica em escritório corporativo"
              width={1242}
              height={933}
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

            <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] border border-white/10 bg-slate-950/80 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-electric-300">Atendimento em Fortaleza</p>
                  <p className="mt-2 text-2xl font-black text-white">TS Elétrica</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-500 text-slate-900 shadow-[0_12px_26px_rgba(250,204,21,0.45)]">
                  <Zap size={22} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-200">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-electric-300"><ShieldCheck size={15} /> Segurança</div>
                  <p className="mt-2 font-semibold text-white">Normas e processo rigoroso</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center gap-2 text-electric-300"><CheckCircle2 size={15} /> Qualidade</div>
                  <p className="mt-2 font-semibold text-white">Execução com cuidado e precisão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

