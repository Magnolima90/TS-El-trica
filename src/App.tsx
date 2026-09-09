import { useEffect } from 'react';
import { About } from './components/About';
import { Areas } from './components/Areas';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Differentials } from './components/Differentials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Safety } from './components/Safety';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('[data-animate]');

    if (!animatedItems.length) return;

    const revealVisibleItems = () => {
      animatedItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          item.classList.add('is-visible');
        }
      });
    };

    if (!('IntersectionObserver' in window)) {
      revealVisibleItems();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    animatedItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        item.classList.add('is-visible');
      } else {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <div data-animate>
          <Hero />
        </div>
        <div data-animate>
          <Stats />
        </div>
        <div data-animate>
          <Services />
        </div>
        <div data-animate>
          <About />
        </div>
        <div data-animate>
          <Areas />
        </div>
        <div data-animate>
          <Differentials />
        </div>
        <div data-animate>
          <Portfolio />
        </div>
        <div data-animate>
          <Process />
        </div>
        <div data-animate>
          <Safety />
        </div>
        <div data-animate>
          <Testimonials />
        </div>
        <div data-animate>
          <FAQ />
        </div>
        <div data-animate>
          <CTA />
        </div>
        <div data-animate>
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
