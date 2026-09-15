import { MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function WhatsAppFloat() {
  const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-105 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/60" style={{ animation: 'whatsappPulse 2.4s ease-out infinite' }} aria-hidden="true" />
      <MessageCircle size={26} fill="currentColor" strokeWidth={1.8} />
    </a>
  );
}
