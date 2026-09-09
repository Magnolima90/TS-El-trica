import { useState } from 'react';
import { portfolioItems } from '../data/company';
import { SectionTitle } from './SectionTitle';

const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Painéis', 'Energia Solar', 'Subestações', 'Manutenção'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? portfolioItems
      : portfolioItems.filter((project) => project.category === activeCategory);

  return (
    <section id="projetos" className="bg-slate-50 py-20">
      <div className="container-shell">
        <SectionTitle
          tag="Projetos"
          title="Trabalhos executados com qualidade e atenção técnica"
          subtitle="Projetos com foco em segurança, desempenho e soluções sob medida para cada ambiente."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? 'border-electric-300 bg-electric-500 text-slate-900 shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-electric-300 hover:text-electric-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - projeto de engenharia elétrica da TS Elétrica`}
                  width={900}
                  height={256}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-electric-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-electric-600">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
