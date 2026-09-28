import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Beneficios from './components/Beneficios';
import Modalidades from './components/Modalidades';
import Horarios from './components/Horarios';
import Professores from './components/Professores';
import Conquistas from './components/Conquistas';
import Estrutura from './components/Estrutura';
import Depoimentos from './components/Depoimentos';
import InstagramFeed from './components/InstagramFeed';
import Localizacao from './components/Localizacao';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Beneficios />
        <Modalidades />
        <Horarios />
        <Professores />
        <Conquistas />
        <Estrutura />
        <Depoimentos />
        <InstagramFeed />
        <Localizacao />
        <FAQ />
        <CTAFinal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
