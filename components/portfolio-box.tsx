import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

export const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlGithub, urlDemo } = data;

  return (
    <div className="group card-hover p-6 animate-fade-in">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Overlay badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-tech-500/90 backdrop-blur-sm rounded-full text-xs font-medium">
          IA & Automatización
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-tech-400 transition-colors">
        {title}
      </h3>

      <p className="text-slate-400 text-base mb-6 line-clamp-3">
        Implementación de soluciones avanzadas con IA y automatización para
        optimizar resultados y transformar procesos de negocio de manera
        medible.
      </p>

      <div className="flex gap-3">
        <Link
          href={urlDemo}
          target="_blank"
          className="flex-1 btn-primary text-center text-sm py-2"
        >
          Ver Caso Demo
        </Link>
        <Link
          href={urlGithub}
          target="_blank"
          className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-sm font-medium"
        >
          Detalles GitHub
        </Link>
      </div>
    </div>
  );
};
