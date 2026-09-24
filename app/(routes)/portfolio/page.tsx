"use client";

import { useState } from "react";
import { AvatarPortfolio } from "@/components/avatar-portfolio";
import { CircleImage } from "@/components/circle-image";
import { PortfolioBox } from "@/components/portfolio-box";
import TransitionPage from "@/components/TransitionPage";
import { dataPortfolio, PortfolioProject } from "@/data";
import { Layers, Code2, Sparkles, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

type FilterType = "all" | "bim" | "saas";

const PortfolioPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = dataPortfolio.filter((item) => {
    if (filter === "all") return true;
    if (filter === "bim") return item.category === "bim";
    if (filter === "saas") return item.category === "saas" || item.category === "web";
    return true;
  });

  return (
    <>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      <section className="relative z-10 min-h-screen pt-32 pb-24 md:py-36">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-500/10 border border-tech-500/20 text-xs font-semibold text-tech-400 uppercase tracking-wider mb-4">
              Portfolio & Proyectos
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Ingeniería Civil &{" "}
              <span className="text-gradient">Tecnología de Construcción</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Proyectos de modelado BIM, cálculo estructural con Autodesk Revit y Robot, y desarrollo de plataformas SaaS especializadas para la industria AEC.
            </p>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mt-6"></div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === "all"
                  ? "bg-gradient-accent text-white shadow-glow-blue"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50"
              }`}
            >
              <Sparkles size={15} />
              <span>Todos los Proyectos ({dataPortfolio.length})</span>
            </button>

            <button
              onClick={() => setFilter("bim")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === "bim"
                  ? "bg-gradient-accent text-white shadow-glow-blue"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50"
              }`}
            >
              <Building2 size={15} />
              <span>Ingeniería Civil & BIM (Revit / Robot)</span>
            </button>

            <button
              onClick={() => setFilter("saas")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                filter === "saas"
                  ? "bg-gradient-accent text-white shadow-glow-blue"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50"
              }`}
            >
              <Code2 size={15} />
              <span>Software & SaaS (HPress / LoveArt)</span>
            </button>
          </div>

          {/* Section Context Note for BIM if active */}
          {filter === "bim" && (
            <div className="card p-5 md:p-6 mb-10 border-tech-500/30 bg-slate-900/60 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <Layers className="text-tech-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Especialización en Modelado Estructural & BIM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Esta sección está dedicada al modelado tridimensional con Autodesk Revit, análisis y cálculo de solicitaciones con Autodesk Robot Structural Analysis, generación de planos técnicos de despiece y cómputos métricos (Quantity Takeoff). Aquí incorporo mis casos prácticos y proyectos técnicos de ingeniería.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {filteredProjects.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>

          {/* Bottom Technical Callout */}
          <div className="mt-16 md:mt-20 card p-6 md:p-8 max-w-4xl mx-auto text-center border-tech-500/30">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              ¿Requieres soporte en cálculo, modelado BIM o desarrollo de software?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
              Colaboro en proyectos de modelado estructural en Revit, cálculo con Robot, y desarrollo soluciones digitales a medida para la industria de la construcción.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <span>Coordinar una llamada técnica</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
