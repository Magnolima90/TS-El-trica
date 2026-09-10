import { Instagram } from 'lucide-react';
import { company } from '../data/company';

export function InstagramButton() {
  return (
    <div className="fixed bottom-[5.75rem] right-4 z-50 sm:bottom-[6.25rem] sm:right-5">
      <a
        href={company.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Seguir no Instagram"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_14px_26px_rgba(221,42,123,0.4)] transition hover:scale-105 sm:h-14 sm:w-14"
        style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
      >
        <Instagram size={22} />
      </a>
    </div>
  );
}
