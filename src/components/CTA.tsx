import { ArrowRight } from 'lucide-react';
import { ButtonWhatsApp } from './ButtonWhatsApp';

export function CTA() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-8 shadow-soft sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-tag !border-electric-400/30 !bg-electric-500/10 !text-electric-300">Solicite uma avaliação</span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Precisa de uma solução elétrica?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Fale com nossa equipe e solicite uma avaliação para o seu projeto.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#contato" className="premium-button">
                Solicitar orçamento
                <ArrowRight className="ml-2" size={16} />
              </a>
              <ButtonWhatsApp className="bg-[#25D366]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
