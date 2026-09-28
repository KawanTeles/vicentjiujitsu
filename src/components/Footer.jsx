import React from 'react';
import { Instagram, MessageCircle, MapPin, Shield } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] border-t border-zinc-900 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-red-600 bg-zinc-900 shrink-0">
                <img
                  src="/images/avatar.jpg"
                  alt="Vicente Júnior BJJ Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-base font-black text-white uppercase tracking-wider font-display block leading-none">
                  Vicente Júnior <span className="text-red-600">BJJ</span>
                </span>
                <span className="text-xs text-zinc-400 font-semibold tracking-wider uppercase">
                  Núcleo Arapiraca • AL
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Centro oficial de formação e treinamento em Jiu-Jitsu. Linhagem tradicional De La Riva e alto rendimento sob comando de professores dedicados e certificados.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={ACADEMY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-colors"
                aria-label="Instagram Vicente Júnior BJJ Arapiraca"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors"
                aria-label="WhatsApp Vicente Júnior BJJ Arapiraca"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-red-500 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-red-500 transition-colors">Sobre a Equipe</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-red-500 transition-colors">Benefícios do Jiu-Jitsu</a>
              </li>
              <li>
                <a href="#modalidades" className="hover:text-red-500 transition-colors">Programas de Treino</a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-red-500 transition-colors">Grade de Horários</a>
              </li>
              <li>
                <a href="#professores" className="hover:text-red-500 transition-colors">Nossos Professores</a>
              </li>
              <li>
                <a href="#conquistas" className="hover:text-red-500 transition-colors">Conquistas &amp; Títulos</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-red-500 transition-colors">Localização &amp; Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary (Cols 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">
              Atendimento &amp; Localização
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Arapiraca – AL, Brasil (Agreste Alagoano)</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MessageCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Agendamentos diários via WhatsApp</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <Shield className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Linhagem Mestre Ricardo De La Riva</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-md shadow-red-600/20"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Agendar Aula Gratuita</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            &copy; {currentYear} Vicente Júnior BJJ – Núcleo Arapiraca. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-zinc-500">
            Tradição, Disciplina e Jiu-Jitsu para Toda a Vida.
          </p>
        </div>

      </div>
    </footer>
  );
}
