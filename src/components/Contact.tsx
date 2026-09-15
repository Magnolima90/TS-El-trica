import { Mail, MapPin, Phone, Clock3 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { company } from '../data/company';

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const nome = data.get('nome')?.toString().trim() || '';
    const telefone = data.get('telefone')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const servico = data.get('servico')?.toString().trim() || '';
    const mensagem = data.get('mensagem')?.toString().trim() || '';

    const linhas = [
      'Olá! Gostaria de solicitar um orçamento.',
      nome && `Nome: ${nome}`,
      telefone && `Telefone: ${telefone}`,
      email && `E-mail: ${email}`,
      servico && `Serviço: ${servico}`,
      mensagem && `Mensagem: ${mensagem}`,
    ].filter(Boolean);

    const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(linhas.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    form.reset();
    setSending(false);
  };

  return (
    <section id="contato" className="bg-slate-50 py-20">
      <div className="container-shell">
        <div className="mb-10 text-center">
          <span className="section-tag">Contato</span>
          <h2 className="section-heading mt-5">Orçamento de engenharia elétrica em Fortaleza</h2>
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
                  <a href={company.companyPhoneLink} className="mt-1 block font-bold text-slate-900 transition hover:text-electric-600">{company.companyPhone}</a>
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
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Área de atendimento</p>
                  <p className="mt-1 font-bold text-slate-900">{company.serviceAreas.join(', ')}</p>
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
                  <p className="mt-1 font-bold text-slate-900">Comercial: Seg a Sex, 08:00 às 18:00</p>
                  {company.emergency24h ? (
                    <p className="mt-0.5 text-sm font-bold text-red-600">Emergências: 24h, todos os dias</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
              <iframe
                src={company.mapsEmbedUrl}
                title={`Mapa da área de atendimento da ${company.companyName}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Nome
                <input name="nome" type="text" required autoComplete="name" placeholder="Seu nome" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Telefone
                <input name="telefone" type="tel" required autoComplete="tel" placeholder="(85) 9 9999-9999" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                E-mail
                <input name="email" type="email" autoComplete="email" placeholder="seuemail@exemplo.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Serviço
                <select name="servico" defaultValue="" className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400">
                  <option value="" disabled>Selecione</option>
                  {company.serviceTypes.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-slate-700">
              Mensagem
              <textarea name="mensagem" rows={5} placeholder="Descreva sua necessidade e o tipo de serviço solicitado..." className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-electric-400" />
            </label>

            <button type="submit" disabled={sending} className="premium-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
              {sending ? 'Enviando...' : 'Solicitar orçamento pelo WhatsApp'}
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Ao enviar, abriremos o WhatsApp com sua solicitação pronta para envio.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
