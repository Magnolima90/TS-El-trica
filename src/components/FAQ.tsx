import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/company';
import { SectionTitle } from './SectionTitle';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container-shell">
        <SectionTitle tag="FAQ" title="Dúvidas sobre serviços elétricos em Fortaleza" align="center" />

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900">{item.question}</span>
                    <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                </h3>
                <div className={`border-t border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600 ${isOpen ? 'block' : 'hidden'}`}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
