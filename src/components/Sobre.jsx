import React from 'react';
import { CircleCheck, Shield, Award, Users, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/academyData';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Photography Composition */}
          <div className="relative">
            <div className="relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/90 group bg-zinc-950">
              <img
                src="/images/instagram_50.jpg"
                alt="Seminário e Equipe Vicente Júnior BJJ Arapiraca reunida"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl bg-black/85 backdrop-blur-md border border-zinc-800/80 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 sm:p-2.5 bg-red-600 rounded-lg shrink-0">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs sm:text-sm font-display tracking-wide">
                      TRADIÇÃO &amp; EXCELÊNCIA TÉCNICA
                    </h4>
                    <p className="text-zinc-400 text-[11px] sm:text-xs">
                      Linhagem direta de Ricardo De La Riva no coração de Arapiraca
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -bottom-3 -right-3 w-40 h-40 border-b-2 border-r-2 border-red-600 rounded-br-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
                Mais do que um treino. Uma equipe.
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-display">
              Mais do que treinar. <br />
              <span className="text-red-500">Fazer parte de uma família.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Na <strong className="text-white font-semibold">Vicente Júnior BJJ Arapiraca</strong>, 
              acreditamos que a arte suave é muito mais do que golpes e técnicas de luta — é uma ferramenta poderosa de transformação pessoal, caráter, saúde e lealdade.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm sm:leading-relaxed">
              Sob a chancela do <strong className="text-zinc-200">Mestre Luiz Vicente da Silva Júnior</strong> (faixa-preta 4º grau formado por Ricardo De La Riva, com títulos mundiais e pan-americanos), o núcleo Arapiraca reúne uma equipe técnica altamente qualificada liderada pelos professores locais. Aqui, iniciantes, crianças, mulheres e competidores encontram o suporte ideal para evoluir com segurança e respeito.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3">
                <CircleCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Metodologia consolidada com raízes puras da escola De La Riva.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CircleCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Professores graduados e ativos em competições estaduais e nacionais.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CircleCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Tatame higienizado, ambiente acolhedor, familiar e inclusivo.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CircleCheck className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                  Aulas programadas para autodefesa, condicionamento e alta performance.
                </span>
              </div>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800/80">
              {ACHIEVEMENTS.map((item, idx) => (
                <div key={idx} className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3 text-center">
                  <span className="text-xl sm:text-2xl font-black text-red-500 block font-display">
                    {item.stat}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-200 block leading-tight mt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[9.5px] text-zinc-400 block leading-tight mt-0.5">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
