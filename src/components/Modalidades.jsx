import React from 'react';
import { MessageCircle, ChevronRight, User, CheckCircle2 } from 'lucide-react';
import { MODALITIES } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Modalidades() {
  return (
    <section id="modalidades" className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Programas de Treinamento
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Encontre o treino ideal para você.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Aulas planejadas por nível técnico e faixa etária para garantir aprendizado progressivo, dinâmico e seguro.
          </p>
        </div>

        {/* Modalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MODALITIES.map((mod) => (
            <div
              key={mod.id}
              className="flex flex-col bg-[#121319] border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-600/10"
            >
              {/* Image Banner */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-zinc-950">
                <img
                  src={mod.image}
                  alt={mod.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-[#121319]/35 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-zinc-700/80 px-3 py-1 rounded-md shadow-md">
                  <span className="text-[11px] font-bold text-red-500 tracking-wider uppercase font-display">
                    {mod.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-500 transition-colors font-display">
                      {mod.title}
                    </h3>
                    <span className="text-xs font-medium text-zinc-400 block mt-0.5">
                      {mod.subtitle}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Target Audience Pill */}
                  <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-300 bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-lg">
                    <User className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{mod.target}</span>
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2 pt-1">
                    {mod.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={getWhatsAppUrl(mod.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs sm:text-sm tracking-wider py-3.5 px-4 rounded-xl transition-all duration-300 border border-zinc-700/80 hover:border-red-600 group/btn font-display shadow-md hover:shadow-red-600/30"
                  >
                    <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                    <span>QUERO FAZER UMA AULA</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
