"use client";
import Link from "next/link";
import { CheckCircle, ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: {
    id: number;
    name: string;
    description: string;
    category: string;
    logo: string;
    affiliateUrl?: string;
    pricing: string;
    features: string[];
    myReview: string;
    officialUrl: string;
  };
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const hasAffiliate = tool.affiliateUrl && tool.affiliateUrl !== "";
  const linkToUse = hasAffiliate ? tool.affiliateUrl : tool.officialUrl;

  return (
    <div className="card-hover p-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-slate-800/50 rounded-lg flex items-center justify-center flex-shrink-0">
          {/* Placeholder for logo - replace with actual logo */}
          <span className="text-2xl">🛠️</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
          <p className="text-sm text-tech-400">{tool.category}</p>
        </div>
        <span className="text-lg font-bold text-intelligent-500 whitespace-nowrap">
          {tool.pricing}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-300 mb-4">{tool.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-4 flex-1">
        {tool.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle
              size={16}
              className="text-intelligent-500 mt-0.5 flex-shrink-0"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* My Review */}
      <div className="p-4 bg-slate-800/50 rounded-lg mb-4">
        <p className="text-sm italic text-slate-300">"{tool.myReview}"</p>
        <p className="text-xs text-slate-400 mt-2">- Mirco Calle</p>
      </div>

      {/* CTA Button */}
      <a
        href={linkToUse}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
      >
        {hasAffiliate ? "Probar Gratis" : "Visitar Sitio"}
        <ExternalLink size={16} />
      </a>

      {/* Affiliate Disclaimer */}
      {hasAffiliate && (
        <p className="text-xs text-center text-slate-400 mt-2">
          * Link de afiliado - Recibo una comisión sin costo extra para ti
        </p>
      )}
    </div>
  );
};
