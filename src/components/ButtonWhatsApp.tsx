import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { company } from '../data/company';

export function ButtonWhatsApp({ text = 'Falar no WhatsApp', className = '' }: { text?: string; className?: string }) {
  const url = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 ${className}`}
    >
      <MessageCircle size={18} />
      {text}
      <ArrowUpRight size={16} />
    </a>
  );
}
