import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';
import { Differentials } from '../components/Differentials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { PanelHost } from '../components/PanelHost';
import { Portfolio } from '../components/Portfolio';
import { Process } from '../components/Process';
import { Safety } from '../components/Safety';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import { faqs } from '../data/company';
import { getFaqSchema } from '../lib/schema';

export default function HomePage() {
  const faqSchema = getFaqSchema(faqs);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <PanelHost
        panels={{
          servicos: <Services />,
          projetos: <Process />,
          sobre: (
            <>
              <About />
              <Stats />
              <Differentials />
              <Safety />
              <Testimonials />
              <FAQ />
            </>
          ),
          realizados: <Portfolio />,
          localizacao: <Contact />,
        }}
      />

      <div className="sr-only">
        <CTA />
        <Footer />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
