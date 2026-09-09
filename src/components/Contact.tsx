import { Mail, MapPin, Phone, Clock3 } from 'lucide-react';
import { company } from '../data/company';

export function Contact() {
  return (
    <section id="contato" className="bg-slate-50 py-20">
      <div className="container-shell">
        <div className="mb-10 text-center">
          <span className="section-tag">Contato</span>
          <h2 className="section-heading mt-5">Solicite seu orçamento</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-5">
            <div className="card-surface p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Telefone</p>
                  <p className="mt-1 font-bold text-slate-900">{company.companyPhone}</p>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">E-mail</p>
                  <p className="mt-1 font-bold text-slate-900">{company.email}</p>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Atuação</p>
                  <p className="mt-1 font-bold text-slate-900">{company.address}</p>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-100 text-electric-700">
                  <Clock3 size={18} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Atendimento</p>
                  <p className="mt-1 font-bold text-slate-900">Segunda a Sexta, 08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Nome
                <input type="text" placeholder="Seu nome" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Telefone
                <input type="tel" placeholder="(85) 9 9999-9999" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                E-mail
                <input type="email" placeholder="seuemail@exemplo.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Serviço
                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400">
                  <option>Selecione</option>
                  {company.serviceTypes.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-700">
              Mensagem
              <textarea rows={5} placeholder="Descreva sua necessidade e o tipo de serviço solicitado..." className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
            </label>

            <button type="submit" className="premium-button mt-6 w-full">
              Solicitar orçamento
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
