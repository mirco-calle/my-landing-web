import { HotmartBuyButton } from "@/components/products/hotmart-buy-button";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";
import { dataDigitalProducts } from "@/data";
import { notFound } from "next/navigation";
import { CheckCircle, Star, Clock, Users } from "lucide-react";
import Link from "next/link";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = dataDigitalProducts.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className="container max-w-6xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/productos" className="hover:text-tech-400">
            Productos
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.title}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Image & Info */}
          <div>
            {/* Product Image */}
            <div className="card p-8 mb-6">
              <div className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-8xl mb-4">
                📦
              </div>
              {product.badge && (
                <div className="text-center">
                  <span className="px-4 py-2 bg-intelligent-500/20 text-intelligent-500 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            {product.results && (
              <div className="grid grid-cols-3 gap-4">
                <div className="card p-4 text-center">
                  <Clock size={24} className="mx-auto mb-2 text-tech-500" />
                  <p className="text-xs text-slate-400 mb-1">Setup</p>
                  <p className="text-sm font-bold">{product.results.setup}</p>
                </div>
                <div className="card p-4 text-center">
                  <Star
                    size={24}
                    className="mx-auto mb-2 text-intelligent-500"
                  />
                  <p className="text-xs text-slate-400 mb-1">ROI</p>
                  <p className="text-sm font-bold">{product.results.roi}</p>
                </div>
                <div className="card p-4 text-center">
                  <Users size={24} className="mx-auto mb-2 text-tech-500" />
                  <p className="text-xs text-slate-400 mb-1">Ahorro</p>
                  <p className="text-sm font-bold">
                    {product.results.timeSaved}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-lg text-slate-300 mb-6">{product.description}</p>

            {/* Price */}
            <div className="card p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Precio</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-intelligent-500">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-slate-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                {product.originalPrice && (
                  <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                    Ahorra ${product.originalPrice - product.price}
                  </div>
                )}
              </div>

              <HotmartBuyButton
                productUrl={product.hotmartUrl}
                productName={product.title}
                price={product.price}
                className="w-full btn-primary py-4 text-lg"
              />

              {product.hotmartUrl === "" && (
                <p className="text-xs text-center text-slate-400 mt-2">
                  🔜 Próximamente disponible - Déjanos tu email para avisarte
                </p>
              )}

              <p className="text-xs text-center text-slate-400 mt-4">
                ✅ Pago seguro procesado por Hotmart
                <br />✅ Garantía de 7 días
              </p>
            </div>

            {/* Category */}
            <p className="text-sm text-tech-400 mb-4">
              Categoría: {product.category}
            </p>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">¿Qué incluye?</h2>
          <div className="card p-8">
            <ul className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-intelligent-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What You Get */}
        {product.whatYouGet && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Lo que recibirás</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.whatYouGet.map((item, i) => (
                <div key={i} className="card p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-tech-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-tech-500 font-bold">{i + 1}</span>
                    </div>
                    <p className="text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ideal For */}
        {product.idealFor && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Ideal para</h2>
            <div className="card p-8">
              <ul className="grid md:grid-cols-2 gap-4">
                {product.idealFor.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-intelligent-500 rounded-full"></div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <div className="card text-center p-8 bg-gradient-to-br from-tech-500/10 to-intelligent-500/10">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para automatizar tu negocio?
          </h3>
          <p className="text-slate-300 mb-6">
            Descarga este template y empieza a ahorrar tiempo hoy mismo
          </p>
          <HotmartBuyButton
            productUrl={product.hotmartUrl}
            productName={product.title}
            price={product.price}
            className="btn-primary inline-block px-8 py-4 text-lg"
          />
        </div>
      </div>
    </>
  );
}
