"use client";
import Link from "next/link";
import { dataBlogCategories, dataBlogPosts, dataLeadMagnets } from "@/data";
import { TrendingUp, Calendar } from "lucide-react";

export const BlogSidebar = () => {
  const popularPosts = dataBlogPosts.filter((p) => p.featured).slice(0, 3);
  const leadMagnet = dataLeadMagnets[0];

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <span>📂</span> Categorías
        </h3>
        <div className="space-y-2">
          {dataBlogCategories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/categoria/${category.slug}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
            >
              <span className="flex items-center gap-2 text-slate-300 group-hover:text-white">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
              <span className="text-xs text-slate-500 group-hover:text-tech-400">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="card p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-tech-500" />
          Artículos Populares
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="text-sm font-semibold text-slate-200 group-hover:text-tech-400 transition-colors line-clamp-2 mb-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar size={12} />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("es-ES", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Lead Magnet CTA */}
      <div className="card p-6 bg-gradient-to-br from-tech-500/10 to-intelligent-500/10 border-tech-500/30">
        <div className="text-center">
          <div className="text-4xl mb-3">📥</div>
          <h3 className="text-lg font-bold mb-2">{leadMagnet.title}</h3>
          <p className="text-sm text-slate-300 mb-4">
            {leadMagnet.description.substring(0, 100)}...
          </p>
          <Link
            href="#lead-magnet"
            className="btn-primary w-full text-center text-sm py-2"
          >
            {leadMagnet.ctaText}
          </Link>
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="card p-6 text-center">
        <h3 className="text-lg font-bold mb-2">¿Necesitas Ayuda?</h3>
        <p className="text-sm text-slate-300 mb-4">
          Agenda una consultoría gratuita de 30 minutos
        </p>
        <Link
          href="/consultoria"
          className="btn-secondary w-full text-center text-sm py-2"
        >
          Agendar Consultoría
        </Link>
      </div>
    </aside>
  );
};
