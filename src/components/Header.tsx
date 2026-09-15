import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/company';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Página inicial">
          <img
            src="/logo-ts-eletrica.svg"
            alt="Logo da TS Elétrica - Soluções Elétricas em Fortaleza"
            width={44}
            height={44}
            className="h-11 w-auto rounded-2xl border border-slate-200 bg-slate-950 object-cover shadow-soft"
          />
          <div className="hidden sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Eletricista</p>
            <p className="text-lg font-black tracking-tight text-slate-900">TS Elétrica</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-electric-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/5585997867316?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-4 py-2 text-sm font-bold text-[#0d7a3d] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="#contato" className="premium-button">
            Solicitar orçamento
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="https://wa.me/5585997867316?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2.5 text-slate-800"
            aria-label="Abrir menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-electric-600"
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setMobileOpen(false)} className="premium-button mt-2">
              Solicitar orçamento
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
