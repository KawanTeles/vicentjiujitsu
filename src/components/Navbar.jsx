import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Horários', href: '#horarios' },
    { name: 'Professores', href: '#professores' },
    { name: 'Conquistas', href: '#conquistas' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#localizacao' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-zinc-800/80 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-red-600/80 shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform duration-300 bg-zinc-900 shrink-0">
            <img
              src="/images/avatar.jpg"
              alt="Vicente Júnior BJJ Arapiraca Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-wider text-white uppercase font-display leading-none group-hover:text-red-500 transition-colors">
              Vicente Júnior <span className="text-red-600">BJJ</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-zinc-400 uppercase">
              Núcleo Arapiraca
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-zinc-300 hover:text-red-500 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white text-xs xl:text-sm font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>AGENDAR AULA</span>
          </a>
        </div>

        {/* Mobile Quick CTA + Hamburger */}
        <div className="flex lg:hidden items-center space-x-2 shrink-0">
          <a
            href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-1 sm:space-x-1.5 bg-red-600 hover:bg-red-500 active:scale-95 text-white text-[10.5px] sm:text-xs font-bold tracking-tight px-3 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-md shadow-red-600/30 whitespace-nowrap"
            aria-label="Agendar Aula Experimental"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>FAZER UMA AULA</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center text-zinc-300 hover:text-white rounded-lg bg-zinc-900/90 border border-zinc-800 transition-colors active:bg-zinc-800"
            aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu de Navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d12] border-b border-zinc-800 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-red-500 hover:bg-zinc-900/60 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl(ACADEMY_CONFIG.defaultWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-wider py-3 rounded-xl transition-all shadow-lg shadow-red-600/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>AGENDAR AULA NO WHATSAPP</span>
            </a>
          </div>

          <div className="text-center pt-2">
            <a
              href={ACADEMY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-red-400 transition-colors inline-flex items-center space-x-1"
            >
              <span>Instagram:</span>
              <strong className="text-zinc-200">{ACADEMY_CONFIG.instagramHandle}</strong>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
