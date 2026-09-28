import React from 'react';
import { MapPin, MessageCircle, Clock, Navigation, Instagram } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Localizacao() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Vicente Junior BJJ Arapiraca AL')}`;

  return (
    <section id="localizacao" className="py-16 sm:py-28 relative bg-[#0c0c10] border-y border-zinc-900/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Onde Estamos
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Venha treinar com a gente.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Estamos de portas abertas em Arapiraca esperando por você. Venha fazer uma visita!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Address Details */}
          <div className="lg:col-span-5 bg-[#121319] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Vicente Júnior BJJ – Arapiraca
              </h3>

              {/* Address item */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-red-600/15 border border-red-600/30 text-red-500 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Localização
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {ACADEMY_CONFIG.addressFull}
                  </p>
                  <p className="text-xs text-zinc-400">
                    Arapiraca – AL (Agreste Alagoano)
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-red-600/15 border border-red-600/30 text-red-500 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Horário de Atendimento
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Segunda a Sexta: 06:00 às 22:00
                  </p>
                  <p className="text-xs text-zinc-400">
                    Sábados: 08:30 às 12:00
                  </p>
                </div>
              </div>

              {/* WhatsApp direct item */}
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-red-600/15 border border-red-600/30 text-red-500 shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    WhatsApp &amp; Agendamento
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Atendimento Rápido e Direto
                  </p>
                  <p className="text-xs text-zinc-400">
                    Agende sua aula experimental gratuita
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-3">
              <a
                href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-red-600/30 font-display"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>FALAR NO WHATSAPP</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-all"
              >
                <Navigation className="w-4 h-4 text-red-500" />
                <span>ABRIR NO GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-zinc-800 shadow-xl relative bg-zinc-950">
            <iframe
              title="Localização Vicente Júnior BJJ Arapiraca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62886.53597405903!2d-36.6961129486328!3d-9.7540242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7043818e3c66cf1%3A0xe54316d8a2a5efbc!2sArapiraca%2C%20AL!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0 filter invert-[0.9] hue-rotate-180 contrast-125"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay card for click */}
            <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md border border-zinc-700/80 p-3 rounded-xl text-left hidden sm:block">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                Ponto de Treinamento
              </span>
              <span className="text-xs font-bold text-white block">
                Arapiraca - Alagoas
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
