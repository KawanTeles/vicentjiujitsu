import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Dúvidas Frequentes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Tudo o que você precisa saber.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base">
            Respostas diretas para as dúvidas mais comuns de novos praticantes de Jiu-Jitsu.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#121319] border border-zinc-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-red-600 border-red-600 text-white' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-850">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Call */}
        <div className="mt-10 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-center space-y-3">
          <p className="text-xs sm:text-sm text-zinc-300">
            Ainda ficou com alguma dúvida sobre mensalidades, planos ou horários?
          </p>
          <a
            href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre a academia e gostaria de conversar.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-zinc-900 hover:bg-red-600 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-full border border-zinc-700 hover:border-red-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar com nosso atendimento no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
