"use client";
import { Search } from "lucide-react";

export const BlogHero = () => {
  return (
    <section className="relative z-10 pt-32 pb-20 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Blog de <span className="text-gradient">Automatización e IA</span>
        </h1>

        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Aprende a automatizar procesos, implementar IA y transformar tu
          negocio con guías prácticas, casos de éxito y tutoriales paso a paso.
        </p>

        {/* Search Bar (Optional for Phase 1) */}
        {/* <div className="max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-tech-500 text-white"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
