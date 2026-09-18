import {
  BriefcaseBusiness,
  Building2,
  FolderKanban,
  Instagram,
  MapPin,
  MessageCircle,
  UserRound,
} from 'lucide-react';
import Image from 'next/image';
import { company } from '../data/company';
import proprietarioPhoto from '../assets/proprietario-ts-eletrica.jpg';

const heroLinks = [
  { panel: 'servicos', label: 'Serviços', ariaLabel: 'Serviços', icon: BriefcaseBusiness },
  { panel: 'projetos', label: 'Projetos', ariaLabel: 'Projetos', icon: FolderKanban },
  { panel: 'sobre', label: 'Sobre', ariaLabel: 'Sobre', icon: UserRound },
  { panel: 'realizados', label: 'Realizados', ariaLabel: 'Projetos Realizados', icon: Building2 },
  { panel: 'localizacao', label: 'Localização', ariaLabel: 'Localização', icon: MapPin },
];

const whatsappHref = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

type HeroProps = {
  onOpenPanel: (panel: string) => void;
};

export function Hero({ onOpenPanel }: HeroProps) {
  return (
    <section id="inicio" className="relative isolate flex h-[100svh] min-h-[560px] flex-col overflow-hidden bg-slate-950 text-white">
      <Image
        src={proprietarioPhoto}
        alt="Profissional da TS Elétrica em uma instalação elétrica"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_68%] lg:object-[62%_22%]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.2),_transparent_45%),linear-gradient(90deg,rgba(2,6,23,0.86)_0%,rgba(2,6,23,0.58)_28%,rgba(2,6,23,0.22)_58%,rgba(2,6,23,0.86)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <header className="relative z-20 shrink-0">
        <div className="container-shell flex items-center justify-between pt-4 sm:pt-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-ts-eletrica.svg"
              alt="TS Elétrica"
              width={180}
              height={60}
              className="w-[120px] sm:w-[180px]"
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir a TS Elétrica no Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_10px_20px_rgba(221,42,123,0.35)] transition duration-300 hover:scale-105"
              style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
            >
              <Instagram size={16} />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Falar no WhatsApp"
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-[0_10px_20px_rgba(37,211,102,0.4)] transition duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/70" style={{ animation: 'whatsappPulse 2.4s ease-out infinite' }} aria-hidden="true" />
              <MessageCircle size={16} fill="currentColor" strokeWidth={1.8} />
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-sm sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Fortaleza · CE
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 min-h-0 flex-1">
        <h1 className="sr-only">
          TS Elétrica - Eletricista em Fortaleza, CE | Instalações e Manutenção Elétrica Residencial, Comercial e Industrial
        </h1>
      </div>

      <nav aria-label="Acesso rápido" className="relative z-20 shrink-0 px-3 pb-4 sm:px-4 sm:pb-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 rounded-[1.4rem] border border-white/15 bg-slate-950/65 p-2 shadow-[0_25px_70px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:grid-cols-3 sm:rounded-[1.65rem] lg:grid-cols-5 lg:gap-3 lg:p-3">
          {heroLinks.map(({ panel, label, ariaLabel, icon: Icon }, index) => (
            <button
              key={panel}
              type="button"
              onClick={() => onOpenPanel(panel)}
              aria-label={ariaLabel}
              className={`hero-dock-link${index === heroLinks.length - 1 ? ' col-span-2 sm:col-span-1' : ''}`}
            >
              <Icon size={16} strokeWidth={1.8} className="sm:h-[18px] sm:w-[18px]" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
}

