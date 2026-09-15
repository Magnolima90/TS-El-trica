import { Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-shell pb-44 pt-16 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-ts-eletrica.svg"
                alt="Logo da TS Elétrica - Soluções Elétricas em Fortaleza"
                width={48}
                height={48}
                className="h-12 w-auto rounded-2xl border border-white/10 bg-slate-900 object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Fortaleza – CE</p>
                <p className="text-lg font-black text-white">TS Elétrica</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Especialistas em engenharia elétrica e instalações com foco em segurança, qualidade e soluções sob medida para cada necessidade.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a href="#inicio" className="transition hover:text-electric-300">Início</a></li>
              <li><a href="#sobre" className="transition hover:text-electric-300">Sobre</a></li>
              <li><a href="#servicos" className="transition hover:text-electric-300">Serviços</a></li>
              <li><a href="#projetos" className="transition hover:text-electric-300">Projetos</a></li>
              <li><a href="#contato" className="transition hover:text-electric-300">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone size={14} className="text-electric-300" /> <a href={company.companyPhoneLink} className="transition hover:text-electric-300">{company.companyPhone}</a></li>
              <li className="flex items-center gap-2"><MessageCircle size={14} className="text-electric-300" /> WhatsApp</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-electric-300" /> <a href={`mailto:${company.email}`} className="transition hover:text-electric-300">{company.email}</a></li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-electric-300" /> {company.address}</li>
              <li className="text-xs leading-5 text-slate-400">Atende: {company.serviceAreas.join(', ')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <a
            href={company.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Seguir a TS Elétrica no Instagram"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-white shadow-[0_10px_20px_rgba(221,42,123,0.35)] transition hover:scale-105"
            style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
          >
            <Instagram size={18} />
            Siga no Instagram
          </a>

          <div className="text-sm text-slate-400">
            © 2026 {company.companyName}. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
