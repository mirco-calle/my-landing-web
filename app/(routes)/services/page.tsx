import { AvatarServices } from "@/components/servicesComponent/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/servicesComponent/slider-services";
import TransitionPage from "@/components/TransitionPage";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-20 md:py-32">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-500/10 border border-tech-500/20 text-xs font-semibold text-tech-400 uppercase tracking-wider mb-4">
              Servicios & Capacidades
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Servicios <span className="text-gradient">Especializados</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Brindo soporte técnico integrando criterio de <strong className="text-white">Ingeniería Civil</strong>, metodología <strong className="text-white">BIM (Revit)</strong>, análisis estructural preliminar con <strong className="text-white">Autodesk Robot</strong>, y desarrollo de <strong className="text-white">software y plataformas SaaS</strong> para digitalizar la gestión de obras y presupuestos.
            </p>
          </div>

          {/* Services Grid Section */}
          <div className="mb-16 md:mb-20">
            <div className="flex justify-center">
              <SliderServices />
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="card p-8 md:p-10 border-tech-500/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                ¿Tienes un proyecto de ingeniería o desarrollo?
              </h2>
              <p className="text-slate-300 mb-6 text-sm md:text-base">
                Conversemos sobre requerimientos técnicos, modelado BIM, cálculo o desarrollo de herramientas a medida para tu empresa.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="https://wa.link/epmdlm"
                  target="_blank"
                  className="btn-primary inline-flex items-center gap-2 justify-center text-sm"
                >
                  <MessageCircle size={18} />
                  <span>Contactar por WhatsApp</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center gap-2 justify-center text-sm"
                >
                  <span>Enviar Formulario Técnico</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
