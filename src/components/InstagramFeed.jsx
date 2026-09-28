import React from 'react';
import { Instagram, ExternalLink, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS, ACADEMY_CONFIG } from '../data/academyData';

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-28 relative bg-[#08080a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3.5 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-zinc-900 border border-zinc-800 px-3.5 py-1.5 rounded-full">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase font-display">
                {ACADEMY_CONFIG.instagramHandle}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display">
              Vivemos o Jiu-Jitsu todos os dias.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base">
              Acompanhe a rotina dos treinos, bastidores de competições, aulões e conquistas da nossa equipe.
            </p>
          </div>

          <div>
            <a
              href={ACADEMY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:opacity-90 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-pink-600/25"
            >
              <Instagram className="w-4 h-4" />
              <span>VER NO INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={ACADEMY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#121319] border border-zinc-800/80 hover:border-pink-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              {/* Image with hover heart */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 text-white">
                  <Heart className="w-6 h-6 text-pink-500 fill-pink-500 animate-pulse" />
                  <span className="font-bold text-sm">{post.likes}</span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-200">{post.author}</span>
                  <span className="text-[11px] text-zinc-500">{post.likes}</span>
                </div>
                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
