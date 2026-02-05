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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mis <span className="text-gradient">Servicios</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Ayudo a negocios a transformar sus ideas en interfaces digitales
              claras, eficientes y orientadas a resultados. Diseño y desarrollo
              experiencias web modernas que no solo se ven bien, sino que guían
              al usuario a tomar decisiones, optimizan la conversión y
              fortalecen la presencia digital de la marca. Cada interfaz está
              pensada para ser intuitiva, responsiva y alineada a los objetivos
              del negocio, combinando diseño estratégico y tecnología moderna
              para crear productos digitales que escalan y generan valor real.
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
            <div className="card p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                ¿Listo para transformar tu presencia digital?
              </h2>
              <p className="text-slate-300 mb-6 text-base md:text-lg">
                Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos
              </p>

              <Link
                href="https://wa.link/epmdlm"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <MessageCircle size={20} />
                Contacta Conmigo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
