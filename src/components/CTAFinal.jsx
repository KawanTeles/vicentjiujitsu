import React from 'react';
import { MessageCircle, ChevronRight, ShieldCheck, Flame } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function CTAFinal() {
  return (
    <section className="py-20 sm:py-28 relative bg-[#09090c] overflow-hidden">
      {/* Background with real mats photo & gradient */}
      <div className="absolute inset-0 z-0 opacity-20 filter contrast-125">
        <img
          src="/images/instagram_50.jpg"
          alt="Tatame Vicente Júnior BJJ Arapiraca"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-[#08080a]" />
      </div>

      {/* Fiery Red Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-600/40 px-4 py-1.5 rounded-full shadow-lg">
          <Flame className="w-4 h-4 text-red-500 animate-bounce" />
          <span className="text-xs font-bold tracking-widest text-red-400 uppercase font-display">
            Sua primeira aula é por nossa conta
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display tracking-tight">
          Seu próximo passo <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-red-600">
            começa no tatame.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Dê o primeiro passo para uma vida com mais confiança, disciplina física e mental. Venha fazer uma aula experimental gratuita na Vicente Júnior BJJ Arapiraca.
        </p>

        {/* Large Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-500 text-white text-base sm:text-lg font-black tracking-wider py-4 sm:py-5 px-8 sm:px-12 rounded-2xl transition-all duration-300 shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 hover:-translate-y-1 active:scale-95 group font-display"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span>QUERO FAZER UMA AULA</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Professores graduados</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>Ambiente seguro e familiar</span>
          </div>
        </div>

      </div>
    </section>
  );
}
