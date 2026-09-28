import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-3">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-[#13141d] border border-zinc-700/80 text-white text-xs py-2 px-3.5 rounded-full shadow-2xl relative animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="font-semibold text-zinc-200">
            Fale conosco e agende sua aula!
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-zinc-400 hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
        className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-40" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
}
