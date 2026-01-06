"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-navy-950/80 backdrop-blur-sm">
      <div className="z-20 grid items-center h-full p-6 py-20 pt-32 md:py-0 md:grid-cols-2 gap-8">
        <Image
          src="/home-4.png"
          className="mx-auto py-5 md:size-80 md:py-0 rounded-full border-4 border-tech-500/30 shadow-glow-blue"
          priority
          width="300"
          height="300"
          alt="Mirco Calle - Arquitecto de Soluciones Inteligentes"
        />
        <div className="flex flex-col justify-center max-w-2xl">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-5xl md:mb-10 font-bold">
            No vendo software.{" "}
            <span className="block mt-2 text-gradient">
              Automatizo decisiones que hacen crecer tu negocio.
            </span>
          </h1>

          <div className="mb-6 text-xl md:text-2xl font-medium text-tech-400 text-center md:text-left">
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

          <p className="mx-auto mb-6 text-base md:text-lg text-slate-300 md:mx-0 md:mb-8 leading-relaxed">
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start md:gap-6">
            <Link
              href="/portfolio"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Ver Casos de Éxito
            </Link>
            <Link
              href="/contact"
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Consultoría Gratuita
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-intelligent-500 font-bold text-lg">
                80+
              </span>
              <span>Negocios transformados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-tech-500 font-bold text-lg">200+</span>
              <span>Procesos automatizados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
