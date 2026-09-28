import React from 'react';
import { GALLERY_IMAGES } from '../data/academyData';

export default function Estrutura() {
  return (
    <section id="estrutura" className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase font-display">
              Nosso Ambiente
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
            Estrutura preparada para a sua evolução.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
            Tatame amplo com absorção de impacto, higiene rigorosa e a melhor energia de treino em Arapiraca.
          </p>
        </div>

        {/* Editorial Photo Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* Main Large Item 1 (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-xl bg-zinc-950">
            <img
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[11px] font-bold text-red-500 uppercase tracking-widest block font-display">
                {GALLERY_IMAGES[0].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                {GALLERY_IMAGES[0].title}
              </h3>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[1].category}
              </span>
              <p className="text-xs font-bold text-white leading-tight">
                {GALLERY_IMAGES[1].title}
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[3].category}
              </span>
              <p className="text-xs font-bold text-white leading-tight">
                {GALLERY_IMAGES[3].title}
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[4].src}
              alt={GALLERY_IMAGES[4].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[4].category}
              </span>
              <p className="text-xs font-bold text-white leading-tight">
                {GALLERY_IMAGES[4].title}
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[5].src}
              alt={GALLERY_IMAGES[5].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[5].category}
              </span>
              <p className="text-xs font-bold text-white leading-tight">
                {GALLERY_IMAGES[5].title}
              </p>
            </div>
          </div>

          {/* Item 6 (Wide on md/lg: spans 2 cols) */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[6].src}
              alt={GALLERY_IMAGES[6].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[6].category}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                {GALLERY_IMAGES[6].title}
              </h4>
            </div>
          </div>

          {/* Item 7 */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden group border border-zinc-800 shadow-lg bg-zinc-950">
            <img
              src={GALLERY_IMAGES[8].src}
              alt={GALLERY_IMAGES[8].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                {GALLERY_IMAGES[8].category}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white font-display">
                {GALLERY_IMAGES[8].title}
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
