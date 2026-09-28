import React from 'react';
import { Trophy, Medal, Flame, Star, ChevronRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Conquistas() {
  const highlights = [
    {
      title: "11x Campeão da Liga Alagoana",
      desc: "Domínio comprovado nas categorias Gi (com quimono) e No-Gi (sem quimono) sob comando do Prof. Jadson Leite.",
      icon: Trophy,
      color: "text-amber-400"
    },
    {
      title: "Seminários Internacionais",
      desc: "Aulões exclusivos com Mestre Vicente Júnior compartilhando as técnicas mais modernas do circuito mundial.",
      icon: Star,
      color: "text-red-500"
    },
    {
      title: "Formação de Faixas-Pretas",
      desc: "Tradição viva no coração do Agreste Alagoano formando atletas e professores de conduta exemplar.",
      icon: Medal,
      color: "text-zinc-200"
    },
    {
      title: "Performance Competitiva",
      desc: "Alunos no pódio em competições regionais e estaduais com índice altíssimo de finalizações.",
      icon: Flame,
      color: "text-red-500"
    }
  ];

  return (
    <section id="conquistas" className="py-16 sm:py-28 relative bg-[#0c0c10] border-y border-zinc-900/90 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trophy narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-xs font-bold tracking-widest text-amber-500 uppercase font-display">
                Tradição &amp; Alta Performance
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
              Resultados construídos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">
                dentro do tatame.
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              O prestígio da Vicente Júnior BJJ Arapiraca não é fruto do acaso. É o reflexo de milhares de horas de treino duro, respeito mútuo e uma linhagem técnica refinada iniciada por Ricardo De La Riva.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121319] border border-zinc-800/80 hover:border-amber-500/40 transition-colors"
                  >
                    <IconComponent className={`w-6 h-6 ${item.color} mb-2.5`} />
                    <h3 className="text-sm font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma aula experimental e conhecer o time de competição da Vicente Júnior BJJ.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-red-600/30 font-display"
              >
                <span>QUERO EVOLUIR COM A EQUIPE</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo Card of Champion & Podiums */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative group">
                <img
                  src="/images/instagram_1.jpg"
                  alt="Prof. Jadson Leite - 11x Campeão da Liga Alagoana de Jiu-Jitsu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    11x Campeão
                  </span>
                  <span className="text-xs font-bold text-white leading-tight block">
                    Prof. Jadson Leite no topo do pódio
                  </span>
                </div>
              </div>

              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative group">
                <img
                  src="/images/instagram_12.jpg"
                  alt="Pódio da Liga Alagoana de Jiu-Jitsu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-left">
                  <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider block">
                    1ª Etapa Estadual
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Medalha de Ouro Gi &amp; No-Gi
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="h-44 sm:h-52 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative group">
                <img
                  src="/images/instagram_19.jpg"
                  alt="Graduação de faixas Vicente Junior BJJ Arapiraca"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 text-left">
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                    Reconhecimento
                  </span>
                  <span className="text-xs font-bold text-white block">
                    Graduação de Faixas &amp; Mérito
                  </span>
                </div>
              </div>

              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative group">
                <img
                  src="/images/instagram_30.jpg"
                  alt="Novos Faixas-Pretas formados em Arapiraca"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest block">
                    Faixas Pretas
                  </span>
                  <span className="text-xs font-bold text-white leading-tight block">
                    Novos Mestres Formados no Tatame
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
