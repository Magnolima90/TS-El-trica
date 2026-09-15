import { useEffect, useState } from 'react';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Differentials } from './components/Differentials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Safety } from './components/Safety';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle('panel-open', Boolean(activePanel));
    return () => document.body.classList.remove('panel-open');
  }, [activePanel]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePanel(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <main id="conteudo">
        <Hero onOpenPanel={setActivePanel} />
      </main>

      {activePanel ? (
        <div className="panel-backdrop" onClick={() => setActivePanel(null)}>
          <section
            className="content-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${activePanel} - TS Elétrica`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="panel-close"
              aria-label="Fechar painel"
              onClick={() => setActivePanel(null)}
            >
              ×
            </button>
            {activePanel === 'servicos' ? <Services /> : null}
            {activePanel === 'projetos' ? <Process /> : null}
            {activePanel === 'sobre' ? (
              <>
                <About />
                <Stats />
                <Differentials />
                <Safety />
                <Testimonials />
                <FAQ />
              </>
            ) : null}
            {activePanel === 'realizados' ? <Portfolio /> : null}
            {activePanel === 'localizacao' ? <Contact /> : null}
          </section>
        </div>
      ) : null}

      <div className="sr-only">
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
