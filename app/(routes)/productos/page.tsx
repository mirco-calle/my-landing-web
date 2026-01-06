import { ProductCard } from "@/components/products/product-card";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";
import { dataDigitalProducts } from "@/data";
import { Package, TrendingUp, Clock } from "lucide-react";

export default function ProductosPage() {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className="container max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Productos <span className="text-gradient">Digitales</span>
          </h1>

          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Templates y recursos listos para usar que te ahorrarán semanas de
            trabajo. Cada producto incluye soporte y actualizaciones.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="card p-6 text-center">
            <Package size={32} className="mx-auto mb-3 text-tech-500" />
            <h3 className="font-bold mb-2">Listo para Usar</h3>
            <p className="text-sm text-slate-300">
              Descarga e implementa en menos de 2 horas
            </p>
          </div>
          <div className="card p-6 text-center">
            <TrendingUp
              size={32}
              className="mx-auto mb-3 text-intelligent-500"
            />
            <h3 className="font-bold mb-2">ROI Garantizado</h3>
            <p className="text-sm text-slate-300">
              Recupera tu inversión en la primera semana
            </p>
          </div>
          <div className="card p-6 text-center">
            <Clock size={32} className="mx-auto mb-3 text-tech-500" />
            <h3 className="font-bold mb-2">Soporte Incluido</h3>
            <p className="text-sm text-slate-300">
              30 días de soporte por email sin costo extra
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dataDigitalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {dataDigitalProducts.length === 0 && (
          <div className="card p-12 text-center">
            <p className="text-xl text-slate-400">
              Próximamente lanzaremos productos digitales
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="card text-center p-8 bg-gradient-to-br from-tech-500/10 to-intelligent-500/10">
          <h3 className="text-2xl font-bold mb-4">
            ¿Necesitas algo personalizado?
          </h3>
          <p className="text-slate-300 mb-6">
            Si necesitas un template o automatización específica para tu
            negocio, podemos crearlo juntos
          </p>
          <a href="/consultoria" className="btn-primary inline-block">
            Solicitar Desarrollo Personalizado
          </a>
        </div>
      </div>
    </>
  );
}
