import { ToolCard } from "@/components/tools/tool-card";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";
import { dataRecommendedTools } from "@/data";
import Link from "next/link";

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    Hosting: "☁️",
    Automatización: "⚙️",
    IA: "🤖",
    Desarrollo: "💻",
  };
  return icons[category] || "🛠️";
};

export default function HerramientasPage() {
  const categories = Array.from(
    new Set(dataRecommendedTools.map((t) => t.category))
  );

  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className="container max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Herramientas que{" "}
            <span className="text-gradient">Uso y Recomiendo</span>
          </h1>

          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Estas son las herramientas que uso diariamente en mis proyectos de
            automatización. Solo recomiendo lo que realmente funciona.
          </p>
        </div>

        {/* Tools by Category */}
        {categories.map((category) => {
          const toolsInCategory = dataRecommendedTools.filter(
            (t) => t.category === category
          );

          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="text-tech-500">
                  {getCategoryIcon(category)}
                </span>
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolsInCategory.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <div className="card text-center p-8 mt-16 bg-gradient-to-br from-tech-500/10 to-intelligent-500/10">
          <h3 className="text-2xl font-bold mb-4">
            ¿No sabes qué herramientas necesitas?
          </h3>
          <p className="text-slate-300 mb-6">
            Agenda una consultoría gratuita y te ayudo a elegir el stack
            perfecto para tu proyecto
          </p>
          <Link href="/consultoria" className="btn-primary inline-block">
            Agendar Consultoría Gratuita
          </Link>
        </div>
      </div>
    </>
  );
}
