"use client";
import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  challenge: string;
}

export const ConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Integrar con Calendly o sistema de agendamiento
    console.log("Consultoría solicitada:", formData);

    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle size={64} className="mx-auto mb-4 text-intelligent-500" />
        <h3 className="text-3xl font-bold mb-4">¡Solicitud Recibida!</h3>
        <p className="text-lg text-slate-300 mb-6">
          Te contactaré en las próximas 24 horas para coordinar la consultoría.
        </p>
        <p className="text-sm text-slate-400">
          Revisa tu email (incluyendo spam) para confirmar la cita.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <Calendar size={48} className="mx-auto mb-4 text-tech-500" />
        <h2 className="text-3xl font-bold mb-2">
          Consultoría Gratuita de 30 Minutos
        </h2>
        <p className="text-lg text-slate-300">
          Analizamos tu negocio e identificamos oportunidades de automatización
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-slate-800/50 rounded-lg">
          <p className="text-2xl font-bold text-tech-400">30min</p>
          <p className="text-sm text-slate-400">Duración</p>
        </div>
        <div className="text-center p-4 bg-slate-800/50 rounded-lg">
          <p className="text-2xl font-bold text-tech-400">100% Gratis</p>
          <p className="text-sm text-slate-400">Sin compromiso</p>
        </div>
        <div className="text-center p-4 bg-slate-800/50 rounded-lg">
          <p className="text-2xl font-bold text-tech-400">Por Zoom</p>
          <p className="text-sm text-slate-400">Desde tu oficina</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-tech-500 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-tech-500 text-white"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono (WhatsApp)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-tech-500 text-white"
          />
          <input
            type="text"
            name="company"
            placeholder="Nombre de tu empresa"
            value={formData.company}
            onChange={handleChange}
            className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-tech-500 text-white"
          />
        </div>

        <textarea
          name="challenge"
          placeholder="¿Cuál es tu principal desafío o proceso que quieres automatizar?"
          value={formData.challenge}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-tech-500 text-white"
        />

        <button type="submit" className="w-full btn-primary py-4 text-lg">
          Solicitar Consultoría Gratuita
        </button>

        <p className="text-xs text-center text-slate-400">
          Al enviar, aceptas que te contacte para coordinar la consultoría.
        </p>
      </form>
    </div>
  );
};
