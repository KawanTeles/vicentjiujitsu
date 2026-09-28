import { ACADEMY_CONFIG } from '../data/academyData';

export function getWhatsAppUrl(customMessage) {
  const number = ACADEMY_CONFIG.whatsappNumber;
  const msg = customMessage || ACADEMY_CONFIG.defaultWhatsappMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
}
