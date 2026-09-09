import { ArrowUpRight, Cable, Building2, Factory, ShieldCheck, Wrench, Home, CircuitBoard, CloudLightning, Cpu, Gauge, Warehouse, Bot, ClipboardCheck, ThermometerSun, Zap, Bolt, SunMedium, PanelTop, CheckCircle2 } from 'lucide-react';
import { services } from '../data/company';
import { SectionTitle } from './SectionTitle';

const iconMap = {
  Bolt,
  Cable,
  ShieldCheck,
  Wrench,
  Factory,
  Building2,
  Home,
  PanelTop,
  CircuitBoard,
  CloudLightning,
  Cpu,
  SunMedium,
  Gauge,
  Warehouse,
  Bot,
  ClipboardCheck,
  ThermometerSun,
  Zap,
};

export function Services() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="container-shell">
        <SectionTitle
          tag="Soluções elétricas"
          title="Serviços de Engenharia Elétrica em Fortaleza"
          subtitle="Do planejamento à execução, entregamos soluções elétricas pensadas para performance, conformidade e durabilidade."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? CheckCircle2;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-electric-200 hover:shadow-[0_24px_45px_-26px_rgba(250,204,21,0.45)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-50 to-electric-100 text-electric-700 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>

                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-electric-700 transition hover:text-electric-800"
                >
                  Solicitar orçamento
                  <ArrowUpRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
