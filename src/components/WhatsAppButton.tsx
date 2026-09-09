import { MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function WhatsAppButton() {
  const waUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 sm:h-16 sm:w-16"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/60 animate-ping" />
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
