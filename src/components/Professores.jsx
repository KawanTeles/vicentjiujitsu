import React from 'react';
import { Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { PROFESSORS, ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Professores() {
  return (
    <section id="professores" className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Corpo Docente de Elite
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Quem está ao seu lado no tatame.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Professores dedicados à sua segurança, aperfeiçoamento técnico e crescimento constante dentro e fora do tatame.
          </p>
        </div>

        {/* Featured Leader Card (Mestre Vicente Júnior) */}
        <div className="mb-10 bg-[#12131a] border border-red-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 relative">
              <div className="h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-zinc-700/80 shadow-xl bg-zinc-950">
                <img
                  src={PROFESSORS[0].image}
                  alt={PROFESSORS[0].name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                Linhagem De La Riva
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/40 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Líder Fundador da Equipe
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display">
                {PROFESSORS[0].name}
              </h3>

              <div className="flex items-center space-x-2 text-zinc-300 font-semibold text-sm">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{PROFESSORS[0].rank}</span>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {PROFESSORS[0].bio}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de agendar uma aula experimental na academia com a metodologia do Mestre Vicente Júnior.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-lg shadow-red-600/30"
                >
                  <span>TREINAR NA EQUIPE</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-zinc-400">
                  Presença garantida em aulões e seminários anuais em Arapiraca.
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Local Professors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSORS.slice(1).map((prof, idx) => (
            <div
              key={idx}
              className="bg-[#121319] border border-zinc-800/80 hover:border-red-600/50 rounded-2xl overflow-hidden group transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64 w-full overflow-hidden bg-zinc-950">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121319] via-[#121319]/25 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-zinc-700 px-2.5 py-1 rounded text-[10px] font-bold text-red-500 uppercase tracking-wider">
                  {prof.tag}
                </div>
              </div>

              <div className="p-5 space-y-2.5">
                <h4 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors font-display">
                  {prof.name}
                </h4>

                <span className="text-xs font-semibold text-zinc-400 block leading-tight">
                  {prof.rank}
                </span>

                <p className="text-zinc-400 text-xs leading-relaxed pt-1 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {prof.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Graduated Black Belts Mentions */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0f1015] border border-zinc-800/80 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-300">
            <strong className="text-white">Legado em expansão contínua:</strong> O núcleo de Arapiraca orgulhosamente formou novos faixas-pretas e instrutores graduados pela equipe, como Prof. Josinaldo Silva, Prof. EA Celestino e Prof. Adrian GK.
          </p>
        </div>

      </div>
    </section>
  );
}
