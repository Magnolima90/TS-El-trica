import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-ts-eletrica.svg"
                alt="Logo TS Elétrica"
                className="h-12 w-12 rounded-2xl border border-white/10 bg-slate-900 object-cover"
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
              <li className="flex items-center gap-2"><Phone size={14} className="text-electric-300" /> {company.companyPhone}</li>
              <li className="flex items-center gap-2"><MessageCircle size={14} className="text-electric-300" /> WhatsApp</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-electric-300" /> {company.email}</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-electric-300" /> {company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4 text-slate-300">
            <a href={company.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-2 transition hover:border-electric-400 hover:text-electric-300"><Instagram size={16} /></a>
            <a href={company.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-white/10 p-2 transition hover:border-electric-400 hover:text-electric-300"><Facebook size={16} /></a>
            <a href={company.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 transition hover:border-electric-400 hover:text-electric-300"><Linkedin size={16} /></a>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            <a href="#" className="transition hover:text-electric-300">Política de Privacidade</a>
            <a href="#" className="transition hover:text-electric-300">Termos de Uso</a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          © 2026 {company.companyName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
