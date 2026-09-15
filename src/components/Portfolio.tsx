'use client';

import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioItems } from '../data/company';
import { SectionTitle } from './SectionTitle';

const categories = ['Todos', 'Painéis Elétricos', 'Iluminação Comercial'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'Todos'
      ? portfolioItems.filter((project) => !project.hideFromAll)
      : portfolioItems.filter((project) => project.category === activeCategory);

  const activeItem = lightboxIndex !== null ? filteredProjects[lightboxIndex] : null;

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => setLightboxIndex((current) => (current === null ? null : (current - 1 + filteredProjects.length) % filteredProjects.length));
  const showNext = () => setLightboxIndex((current) => (current === null ? null : (current + 1) % filteredProjects.length));

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredProjects.length]);

  return (
    <section id="projetos" className="bg-slate-50 py-20">
      <div className="container-shell">
        <SectionTitle
          tag="Projetos realizados"
          title="Trabalhos executados com qualidade e atenção técnica"
          subtitle="Fotos e vídeos reais de painéis elétricos e instalações executadas pela TS Elétrica."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
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
          {filteredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.type === 'video' ? project.poster : project.src}
                  alt={`${project.title} - projeto executado pela TS Elétrica`}
                  width={900}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {project.type === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/25 transition group-hover:bg-slate-950/35">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-electric-600 shadow-lg transition group-hover:scale-110">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-full bg-electric-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-electric-600">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Projeto anterior"
            className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Próximo projeto"
            className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            {activeItem.type === 'video' ? (
              <video
                key={activeItem.src}
                src={activeItem.src}
                poster={activeItem.poster}
                controls
                autoPlay
                className="max-h-[75vh] w-full rounded-2xl bg-black"
              />
            ) : (
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[75vh] w-full rounded-2xl object-contain"
              />
            )}
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-bold">{activeItem.title}</p>
              <p className="mt-1 text-sm text-slate-300">{activeItem.description}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
