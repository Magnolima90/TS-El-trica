'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Hero } from './Hero';

export type PanelKey = 'servicos' | 'projetos' | 'sobre' | 'realizados' | 'localizacao';

const panelLabels: Record<PanelKey, string> = {
  servicos: 'Serviços',
  projetos: 'Projetos',
  sobre: 'Sobre',
  realizados: 'Projetos realizados',
  localizacao: 'Localização',
};

type PanelHostProps = {
  panels: Record<PanelKey, ReactNode>;
};

export function PanelHost({ panels }: PanelHostProps) {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);

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

  const close = () => setActivePanel(null);

  return (
    <>
      <main id="conteudo">
        <Hero onOpenPanel={(panel) => setActivePanel(panel as PanelKey)} />
      </main>

      <div
        className="panel-backdrop"
        data-state={activePanel ? 'open' : 'closed'}
        aria-hidden={!activePanel}
        onClick={close}
      >
        <section
          className="content-panel"
          role="dialog"
          aria-modal="true"
          aria-label={activePanel ? `${panelLabels[activePanel]} - TS Elétrica` : undefined}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            className="panel-close"
            aria-label="Fechar painel"
            tabIndex={activePanel ? 0 : -1}
            onClick={close}
          >
            ×
          </button>

          {(Object.keys(panels) as PanelKey[]).map((key) => (
            <div key={key} className={activePanel === key ? undefined : 'hidden'}>
              {panels[key]}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
