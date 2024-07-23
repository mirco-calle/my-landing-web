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
        className="grid items-center justify-center h-screen max-w-5lx gap-6 
      mx-auto md:grid-cols-2 md:px-20"
      >
        <div className=" max-w-[450px] mt-20 md:mt-0 ">
          <h1
            className="text-2xl leading-tight text-center py-10
                       md:text-left md:text-4xl md: mb-0"
          >
            Mis <span className=" font-bold text-secondary">Servicios</span>
          </h1>
          <p className="mb-5 text-xl text-gray-300 mx-6">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como HTML, CSS y JavaScript,
            typeScript, React, React-Native, Next.js diseño interfaces de
            usuario intuitivas y responsivas que reflejan la identidad de marca
            de mis clientes y mejoran su presencia en línea
          </p>
          <Link
            href="https://wa.link/s3pozw"
            className=" mx-5 px-2 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary  
                   text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary"
          >
            Contacta Conmigo
          </Link>
        </div>
        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default Services;
