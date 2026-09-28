import React from 'react';
import { MessageCircle, ChevronRight, ShieldCheck, Award, Users, Zap } from 'lucide-react';
import { ACADEMY_CONFIG, HIGHLIGHTS } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />;
      case 'Award': return <Award className="w-4 h-4 text-red-500 flex-shrink-0" />;
      case 'Users': return <Users className="w-4 h-4 text-red-500 flex-shrink-0" />;
      case 'Zap': return <Zap className="w-4 h-4 text-red-500 flex-shrink-0" />;
      default: return <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-10 sm:pt-36 sm:pb-20 min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image & Layered Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/instagram_25.jpg"
          alt="Equipe Vicente Júnior BJJ Arapiraca reunida no tatame"
          className="w-full h-full object-cover object-[65%_center] sm:object-center filter brightness-[0.88] contrast-105 scale-105 transition-transform duration-1000"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/40 sm:to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/95 via-[#08080a]/75 sm:via-[#08080a]/60 to-transparent" />
        {/* Subtle red atmosphere glow */}
        <div className="absolute top-1/4 right-5 sm:right-20 w-80 sm:w-96 h-80 sm:h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-2xl sm:max-w-3xl space-y-4 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/30 via-zinc-900/90 to-zinc-900 border border-red-600/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-200 uppercase font-display">
              Vicente Júnior BJJ • Núcleo Arapiraca
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.15rem,6.8vw,4.4rem)] font-black text-white leading-[1.08] tracking-tight drop-shadow-lg font-display">
            Seu próximo nível <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-red-600">
              começa no tatame.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-zinc-200 font-normal leading-relaxed max-w-xl drop-shadow-md">
            Treine Jiu-Jitsu em um ambiente de <strong className="text-white font-semibold">disciplina, tradição De La Riva e evolução técnica</strong>. 
            Metodologia consagrada para iniciantes, crianças e competidores em Arapiraca.
          </p>

          {/* CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[54px] inline-flex items-center justify-center space-x-2.5 bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base font-black tracking-wider py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-xl shadow-red-600/35 hover:shadow-red-600/55 active:scale-[0.99] group font-display"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>AGENDAR AULA EXPERIMENTAL</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#sobre"
              className="w-full sm:w-auto min-h-[50px] inline-flex items-center justify-center space-x-2 bg-zinc-950/75 hover:bg-zinc-900 text-zinc-200 border border-zinc-700/80 text-xs sm:text-sm font-bold tracking-wide py-3.5 px-6 rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              <span>CONHECER A EQUIPE</span>
            </a>
          </div>

          {/* Highlights Row (Desktop) */}
          <div className="hidden lg:grid pt-8 grid-cols-4 gap-3 max-w-3xl border-t border-zinc-800/70">
            {HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2.5 bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3 backdrop-blur-md hover:border-red-600/40 transition-colors"
              >
                {getHighlightIcon(item.icon)}
                <div>
                  <span className="text-xs font-bold text-zinc-200 block leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-zinc-400 block leading-tight">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Highlights Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#08080a]/90 backdrop-blur-md border-t border-zinc-800/70 lg:hidden py-3 px-4">
        <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 bg-zinc-900/90 border border-zinc-800/80 rounded-lg p-2"
            >
              {getHighlightIcon(item.icon)}
              <span className="text-[11px] font-bold text-zinc-200 leading-tight truncate">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
