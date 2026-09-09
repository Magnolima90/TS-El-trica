import { testimonials } from '../data/company';
import { SectionTitle } from './SectionTitle';

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-shell">
        <SectionTitle
          tag="Avaliações"
          title="Confiança construída por resultado e atendimento"
          subtitle="Experiências compartilhadas por clientes que priorizam segurança, organização e qualidade técnica."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-electric-200">
              <div className="flex gap-1 text-electric-500">★★★★★</div>
              <p className="mt-5 text-base leading-7 text-slate-600">“{testimonial.text}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
