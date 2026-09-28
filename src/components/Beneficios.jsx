import React from 'react';
import { Shield, Activity, UserCheck, Zap, Users, TrendingUp } from 'lucide-react';
import { BENEFITS } from '../data/academyData';

export default function Beneficios() {
  const getIcon = (name) => {
    switch (name) {
      case 'Shield': return <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      case 'Activity': return <Activity className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      case 'Zap': return <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      case 'Users': return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
      default: return <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-white transition-colors duration-300" />;
    }
  };

  return (
    <section id="beneficios" className="py-16 sm:py-28 relative bg-[#0c0c10] border-y border-zinc-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Transformação para a Vida
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Por que treinar Jiu-Jitsu?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Os ganhos do Jiu-Jitsu vão muito além dos golpes: constroem uma mente inabalável e um corpo forte.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#131318] border border-zinc-800/80 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-red-600/10 overflow-hidden"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-300 shrink-0">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 tracking-wide group-hover:text-red-500 transition-colors font-display">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-500 group-hover:to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
