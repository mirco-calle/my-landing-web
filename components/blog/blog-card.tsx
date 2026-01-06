"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishDate: string;
    author: string;
    image: string;
    featured?: boolean;
    tags: string[];
  };
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group card-hover h-full flex flex-col overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-tech-500/90 backdrop-blur-sm rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>

          {/* Featured Badge */}
          {post.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-intelligent-500/90 backdrop-blur-sm rounded-full text-xs font-medium">
                ⭐ Destacado
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-tech-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>
                {new Date(post.publishDate).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-800/50 rounded text-xs text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between text-sm">
            <span className="text-slate-400">Leer artículo</span>
            <span className="text-tech-500 group-hover:text-intelligent-500 transition-colors">
              →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
