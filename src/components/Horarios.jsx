import React, { useState } from 'react';
import { Clock, Calendar, MessageCircle, Info } from 'lucide-react';
import { SCHEDULE_TABS, SCHEDULE_DATA, ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Horarios() {
  const [activeTab, setActiveTab] = useState('todos');

  const filteredSchedule = activeTab === 'todos'
    ? SCHEDULE_DATA
    : SCHEDULE_DATA.filter(item => item.category === activeTab);

  return (
    <section id="horarios" className="py-16 sm:py-28 relative bg-[#0c0c10] border-y border-zinc-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Grade de Horários
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Treine na hora que cabe na sua rotina.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Aulas distribuídas pela manhã, meio-dia e noite para você nunca deixar de evoluir.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-10">
          {SCHEDULE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 font-display ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-zinc-800 bg-[#121319] shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/80 text-zinc-400 text-xs uppercase tracking-wider font-display">
                <th className="py-4 px-6 font-bold">Horário</th>
                <th className="py-4 px-6 font-bold">Dias da Semana</th>
                <th className="py-4 px-6 font-bold">Turma / Modalidade</th>
                <th className="py-4 px-6 font-bold">Nível / Público</th>
                <th className="py-4 px-6 font-bold">Instrutor</th>
                <th className="py-4 px-6 font-bold text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-sm">
              {filteredSchedule.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-zinc-900/60 transition-colors group"
                >
                  <td className="py-4 px-6 font-bold text-white flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="font-display tracking-wide">{row.time}</span>
                  </td>
                  <td className="py-4 px-6 text-zinc-300 font-medium">
                    {row.days}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-white group-hover:text-red-500 transition-colors block">
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-zinc-400">
                    <span className="inline-block bg-zinc-900 px-2.5 py-1 rounded text-xs border border-zinc-800">
                      {row.level}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-zinc-300 text-xs">
                    {row.instructor}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <a
                      href={getWhatsAppUrl(`Olá! Gostaria de agendar uma aula no horário ${row.time} (${row.type}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-600/40 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Agendar</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="grid grid-cols-1 gap-3.5 md:hidden">
          {filteredSchedule.map((row, idx) => (
            <div
              key={idx}
              className="bg-[#121319] border border-zinc-800 rounded-xl p-4 space-y-3 shadow-md"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                <div className="flex items-center space-x-2 text-red-500 font-bold font-display text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{row.time}</span>
                </div>
                <span className="text-[11px] font-semibold text-zinc-400 bg-zinc-900 px-2.5 py-0.5 rounded border border-zinc-800">
                  {row.level}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white font-display">
                  {row.type}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-zinc-400 mt-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{row.days}</span>
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Instrutor: <span className="text-zinc-300">{row.instructor}</span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de agendar uma aula experimental no horário ${row.time} (${row.type}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Agendar Neste Horário</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note Below Schedule */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-zinc-400 text-xs sm:text-sm text-center">
          <Info className="w-4 h-4 text-red-500 shrink-0" />
          <span>
            Os horários podem sofrer pequenas adequações sazonais. Confirme sua vaga pelo WhatsApp oficial.
          </span>
        </div>

      </div>
    </section>
  );
}
