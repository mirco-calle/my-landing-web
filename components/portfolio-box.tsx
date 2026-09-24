import Image from "next/image";
import Link from "next/link";
import { PortfolioProject } from "@/data";
import { ExternalLink, Github, Clock, Layers, Sparkles } from "lucide-react";

interface PortfolioBoxProps {
  data: PortfolioProject;
}

export const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const {
    id,
    title,
    subtitle,
    categoryLabel,
    image,
    urlGithub,
    urlDemo,
    description,
    tags,
    featured,
    inProgress,
    highlights,
  } = data;

  const hasDemo = urlDemo && urlDemo !== "#!" && urlDemo !== "#";
  const hasGithub = urlGithub && urlGithub !== "#!" && urlGithub !== "#";

  return (
    <div
      className={`group card p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-tech-500/60 hover:shadow-glow-blue relative ${
        featured ? "border-tech-500/40 bg-slate-800/70" : "border-slate-700/50"
      }`}
    >
      <div>
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg mb-4 bg-slate-900 border border-slate-700/50">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full text-xs font-semibold text-slate-200">
            {categoryLabel}
          </div>

          {/* Status Badge */}
          {inProgress ? (
            <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500/90 text-slate-950 font-bold backdrop-blur-md rounded-full text-xs flex items-center gap-1 shadow-md">
              <Clock size={12} />
              <span>En Preparación</span>
            </div>
          ) : featured ? (
            <div className="absolute top-3 right-3 px-3 py-1 bg-tech-500/90 text-white font-semibold backdrop-blur-md rounded-full text-xs flex items-center gap-1 shadow-md">
              <Sparkles size={12} />
              <span>Destacado</span>
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-white group-hover:text-tech-300 transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs font-semibold text-tech-400 mb-3 uppercase tracking-wider">
              {subtitle}
            </p>
          )}

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Highlights if any */}
          {highlights && highlights.length > 0 && (
            <ul className="mb-4 space-y-1.5 border-l-2 border-tech-500/40 pl-3">
              {highlights.map((h, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                  <span className="text-tech-400 font-bold">›</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-900/60 border border-slate-700/50 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-700/50 flex flex-wrap gap-3">
        {hasDemo ? (
          <Link
            href={urlDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary text-center text-xs sm:text-sm py-2 px-4 flex items-center justify-center gap-1.5"
          >
            <span>Ver Proyecto / Demo</span>
            <ExternalLink size={14} />
          </Link>
        ) : inProgress ? (
          <div className="flex-1 py-2 px-4 text-center text-xs sm:text-sm font-medium bg-slate-800/80 border border-amber-500/30 text-amber-300/90 rounded-lg">
            Documentación técnica en proceso
          </div>
        ) : (
          <span className="flex-1 py-2 px-4 text-center text-xs text-slate-400 bg-slate-800/40 rounded-lg">
            Demo privada
          </span>
        )}

        {hasGithub && (
          <Link
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium flex items-center gap-1.5"
            title="Ver repositorio GitHub"
          >
            <Github size={15} />
            <span>Código</span>
          </Link>
        )}
      </div>
    </div>
  );
};
