import { ConsultationForm } from "@/components/consultation/consultation-form";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";

export default function ConsultoriaPage() {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className="container max-w-4xl mx-auto px-6 py-20">
        <ConsultationForm />

        {/* Benefits Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            ¿Qué obtendrás en la consultoría?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold mb-2">Análisis Personalizado</h4>
              <p className="text-sm text-slate-300">
                Revisamos tus procesos actuales e identificamos oportunidades de
                automatización específicas para tu negocio.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg font-bold mb-2">Plan de Acción</h4>
              <p className="text-sm text-slate-300">
                Te entrego un plan priorizado de qué automatizar primero según
                impacto y facilidad de implementación.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-lg font-bold mb-2">Recomendaciones</h4>
              <p className="text-sm text-slate-300">
                Sugerencias de herramientas y tecnologías específicas para tu
                caso de uso.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg font-bold mb-2">Estimación de ROI</h4>
              <p className="text-sm text-slate-300">
                Cálculo aproximado del retorno de inversión y tiempo de
                recuperación.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
