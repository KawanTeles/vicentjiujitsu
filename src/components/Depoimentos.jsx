import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/academyData';

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 sm:py-28 relative bg-[#0c0c10] border-y border-zinc-900/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Voz de Quem Treina
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            A transformação vivida na prática.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Histórias reais de quem encontrou na Vicente Júnior BJJ Arapiraca disciplina, saúde e uma nova família.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121319] border border-zinc-800/80 hover:border-red-600/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-red-500/40" />

                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center text-red-500 font-bold font-display text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {t.name}
                  </h4>
                  <span className="text-xs text-zinc-400 block">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
