import { areas } from '../data/company';

export function Areas() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-shell">
        <div className="mb-10 text-center">
          <span className="section-tag">Áreas de atuação</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img
                src={area.image}
                alt={`${area.title} em Fortaleza - TS Elétrica`}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-7">
                <h3 className="text-2xl font-black text-slate-900">{area.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
