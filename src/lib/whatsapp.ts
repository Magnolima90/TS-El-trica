import { company } from '../data/company';

/** Monta um link wa.me a partir de uma mensagem já pronta (encoding centralizado aqui). */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Mensagens específicas por serviço, no mesmo tom das já usadas no site
// (company.whatsappMessage / company.whatsappEmergencyMessage). Serviços sem
// entrada aqui caem no texto genérico abaixo.
const serviceMessageOverrides: Record<string, string> = {
  'Instalações Residenciais': 'Olá! Gostaria de solicitar um orçamento para instalação elétrica residencial.',
  'Manutenção Preventiva': 'Olá! Gostaria de agendar uma manutenção elétrica preventiva.',
  'Manutenção Corretiva': company.whatsappEmergencyMessage,
  'Atendimento Elétrico Emergencial 24h': company.whatsappEmergencyMessage,
};

/** Monta o link do WhatsApp (wa.me) com uma mensagem específica para o serviço informado. */
export function getWhatsAppLink(servico: string): string {
  const message = serviceMessageOverrides[servico] ?? `Olá! Gostaria de solicitar um orçamento para o serviço de ${servico}.`;
  return buildWhatsAppUrl(message);
}
