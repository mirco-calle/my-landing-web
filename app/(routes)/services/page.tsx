import { AvatarServices } from "@/components/avatar-services";
import { CircleImage } from "@/components/circle-image";
import { SliderServices } from "@/components/slider-services";
import TransitionPage from "@/components/TransitionPage";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div
        className="grid items-center justify-center min-h-screen max-w-5xl gap-6 
        px-4 py-8 mx-auto mt-16 md:grid-cols-2 md:px-20 relative z-10"
      >
        <div className="max-w-[450px] w-full mx-auto mt-16 md:mt-0">
          <h1
            className="text-3xl font-semibold leading-tight text-center py-4
                       md:text-left md:text-4xl md:mb-0"
          >
            Mis <span className="font-bold text-secondary">Servicios</span>
          </h1>
          <p className="mb-6 text-base text-gray-300 px-4 md:px-0 md:text-lg">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            typeScript, React, React-Native, Next.js diseño interfaces de
            usuario intuitivas y responsivas que reflejan la identidad de marca
            de mis clientes y mejoran su presencia en línea
          </p>
          <div className="text-center md:text-left">
            <Link
              href="https://wa.link/s3pozw"
              className="inline-block px-4 py-2.5 transition-all border-2 cursor-pointer 
                     text-secondary border-secondary text-md rounded-xl
                     hover:shadow-xl hover:shadow-secondary"
            >
              Contacta Conmigo
            </Link>
          </div>
        </div>
        {/* SLIDER */}
        <div className="relative z-10 mt-8 md:mt-0">
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default Services;
