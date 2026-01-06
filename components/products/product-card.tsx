import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    thumbnail: string;
    category: string;
    badge?: string;
    features: string[];
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Link href={`/productos/${product.slug}`}>
      <article className="card-hover p-6 h-full flex flex-col group cursor-pointer">
        {/* Badge */}
        {product.badge && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-intelligent-500/20 text-intelligent-500 rounded-full text-xs font-medium">
              {product.badge}
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative mb-4 h-48 bg-slate-800/50 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            📦
          </div>
          {/* Cuando tengas imagen real:
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
          />
          */}

          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              -{discount}%
            </div>
          )}
        </div>

        {/* Category */}
        <p className="text-xs text-tech-400 mb-2">{product.category}</p>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-tech-400 transition-colors line-clamp-2">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-intelligent-500">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Features Preview */}
        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-slate-300"
            >
              <CheckCircle
                size={14}
                className="text-intelligent-500 mt-0.5 flex-shrink-0"
              />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-xs text-slate-400 pl-5">
              +{product.features.length - 3} características más
            </li>
          )}
        </ul>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between text-sm">
          <span className="text-slate-400">Ver detalles</span>
          <span className="text-tech-500 group-hover:text-intelligent-500 transition-colors">
            →
          </span>
        </div>
      </article>
    </Link>
  );
};
