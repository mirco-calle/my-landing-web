"use client";

import Link from "next/link";
import { Building2, Code2, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export const AboutProfile = () => {
  const steps = [
    {
      number: "01",
      icon: <Building2 className="text-tech-400" size={28} />,
      title: "Ingeniería Civil",
      subtitle: "Fundamentos Técnicos y Obra",
      description:
        "Base sólida en comportamiento estructural, análisis de cargas, cómputos métricos y procesos constructivos. Comprensión profunda de las necesidades y dolores reales del sector de la construcción.",
      points: [
        "Criterio y normativas técnicas de construcción",
        "Análisis de esfuerzos y predimensionamiento",
        "Gestión de costos, insumos y tiempos de obra",
      ],
      color: "from-blue-500/20 to-transparent",
    },
    {
      number: "02",
      icon: <Code2 className="text-intelligent-400" size={28} />,
      title: "Desarrollo de Software & SaaS",
      subtitle: "Construcción de Productos Digitales",
      description:
        "Experiencia práctica creando aplicaciones reales y plataformas SaaS en producción (como HPress, LoveArt y DigiCard). Arquitecturas multi-tenant, backend robusto y frontend moderno.",
      points: [
        "Desarrollo Full Stack (React, Next.js, Django, DBs)",
        "Sistemas multi-inquilino escalables",
        "Interfaces intuitivas orientadas a productividad",
      ],
      color: "from-emerald-500/20 to-transparent",
    },
    {
      number: "03",
      icon: <Cpu className="text-purple-400" size={28} />,
      title: "Construction Tech & BIM",
      subtitle: "La Intersección Profesional",
      description:
        "Mi enfoque actual: unificar la ingeniería civil con tecnología avanzada. Modelado BIM con Revit, análisis estructural con Robot, automatizaciones de presupuestos y soluciones de IA aplicadas a AEC.",
      points: [
        "Modelado BIM & documentación con Autodesk Revit",
        "Análisis estructural con Robot Structural Analysis",
        "Automatización de cómputos y cálculo de presupuestos (HPress)",
      ],
      color: "from-purple-500/20 to-transparent",
    },
  ];

  return (
    <section id="sobre-mi" className="relative z-20 py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-500/10 border border-tech-500/20 text-xs font-semibold text-tech-400 uppercase tracking-wider mb-4">
          Perfil Híbrido
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Ingeniería Civil + Software:{" "}
          <span className="text-gradient">Una combinación con propósito</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          No considero la ingeniería y el desarrollo como dos carreras separadas. Mi desarrollo de software tiene un dominio específico y claro:{" "}
          <strong className="text-white">la industria de la construcción y la ingeniería estructural.</strong>
        </p>
      </div>

      {/* Grid of 3 Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="card p-6 md:p-7 relative flex flex-col justify-between hover:border-tech-500/50 hover:shadow-glow-blue transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-2xl font-mono font-bold text-slate-600 group-hover:text-tech-400 transition-colors">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-tech-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-xs font-medium text-slate-400 mb-4 uppercase tracking-wider">
                {step.subtitle}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {step.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-700/50 space-y-2">
              {step.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-tech-400 flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Narrative Callout */}
      <div className="card p-6 md:p-8 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border-tech-500/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-lg md:text-xl font-bold text-white mb-2">
              ¿Por qué esta especialización?
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              La construcción necesita herramientas que entiendan la lógica de obra, el cálculo y el rigor normativo. Desarrollar software desde la perspectiva de un Ingeniero Civil me permite construir soluciones precisas, prácticas y verdaderamente útiles.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn-primary flex items-center gap-2 text-sm whitespace-nowrap"
          >
            <span>Explorar Proyectos & SaaS</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
