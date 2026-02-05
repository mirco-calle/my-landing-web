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
              priority
              width="320"
              height="320"
              alt="Mirco Calle - Arquitecto de Soluciones Inteligentes"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 md:order-2">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left font-bold">
              No vendo software.
              <span className="block mt-2 text-gradient">
                Automatizo decisiones que hacen crecer tu negocio.
              </span>
            </h1>

            <div className="mb-4 sm:mb-6 text-lg sm:text-xl md:text-2xl font-medium text-tech-400 text-center md:text-left">
              <TypeAnimation
                sequence={[
                  "Automatizo procesos complejos",
                  2000,
                  "Implemento IA que vende más",
                  2000,
                  "Optimizo operaciones con datos",
                  2000,
                  "Transformo negocios con tecnología",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block"
              />
            </div>

            <p className="mb-6 text-sm sm:text-base md:text-lg text-slate-300 text-center md:text-left leading-relaxed">
              Diseño e implemento{" "}
              <span className="text-tech-400 font-semibold">
                sistemas inteligentes con IA
              </span>{" "}
              que ayudan a los negocios a{" "}
              <span className="text-intelligent-400 font-semibold">
                vender más
              </span>
              , optimizar procesos y tomar mejores decisiones basadas en datos.
            </p>

            {/* Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link
                href="/portfolio"
                className="btn-primary w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Ver Casos de Éxito
              </Link>
              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Consultoría Gratuita
              </Link>
            </div>

            {/* Trust indicators - Hidden on very small screens, visible from sm */}
            <div className="hidden sm:flex mt-6 pt-5 border-t border-slate-700/50 flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-intelligent-500 font-bold text-base sm:text-lg">
                  80+
                </span>
                <span>Negocios transformados</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-tech-500 font-bold text-base sm:text-lg">
                  200+
                </span>
                <span>Procesos automatizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
