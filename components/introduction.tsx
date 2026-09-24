"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <section className="relative z-20 w-full min-h-screen flex items-center">
      {/* Mobile: Stack vertically, Desktop: 2 columns */}
      <div className="w-full px-4 py-24 pt-28 sm:px-6 md:px-8 lg:px-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image - Smaller on mobile, order changes on desktop */}
          <div className="flex justify-center md:order-1 order-1">
            <Image
              src="/home-4.png"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-tech-500/30 shadow-glow-blue object-cover"
              alt="Mirco Calle - Ingeniero Civil & Desarrollador de Software"
              priority
              width={320}
              height={320}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-tech-500/10 border border-tech-500/20 w-fit mb-3 mx-auto md:mx-0">
              <span className="w-2 h-2 rounded-full bg-tech-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-tech-400 tracking-wide uppercase">
                Ingeniero Civil & Desarrollador de Software
              </span>
            </div>

            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left font-bold">
              Ingeniero Civil creando
              <span className="block mt-2 text-gradient">
                tecnología para la construcción.
              </span>
            </h1>

            <div className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl font-medium text-tech-400 text-center md:text-left min-h-[32px]">
              <TypeAnimation
                sequence={[
                  "BIM & Modelado con Revit",
                  2200,
                  "Cálculo & Modelado Estructural (Robot)",
                  2200,
                  "Software & SaaS para Construcción (HPress)",
                  2200,
                  "Automatización de Presupuestos & Cómputos",
                  2200,
                  "Inteligencia Artificial aplicada a Construcción",
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block"
              />
            </div>

            <p className="mb-6 text-sm sm:text-base md:text-lg text-slate-300 text-center md:text-left leading-relaxed">
              Soy <strong className="text-white font-semibold">Mirco Calle</strong>, Ingeniero Civil especializado en desarrollar software, plataformas SaaS y automatizaciones para resolver problemas reales en obras, cálculo estructural y gestión de costos de construcción.
            </p>

            {/* Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/portfolio"
                className="btn-primary w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Ver Proyectos & Software
              </Link>
              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Contactar Conmigo
              </Link>
            </div>

            {/* Technical Pillars Badges */}
            <div className="flex mt-6 pt-5 border-t border-slate-700/50 flex-wrap justify-center md:justify-start gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70">
                <span className="text-tech-400 font-bold">✓</span>
                <span>Ingeniería Civil & BIM</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70">
                <span className="text-intelligent-400 font-bold">✓</span>
                <span>SaaS de Construcción (HPress)</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/70">
                <span className="text-tech-400 font-bold">✓</span>
                <span>IA & Automatización AEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
