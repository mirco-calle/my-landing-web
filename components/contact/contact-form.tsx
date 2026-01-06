"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";
    if (formData.phone && !/^\+?[\d\s\-()]{7,}$/.test(formData.phone.trim()))
      newErrors.phone = "Teléfono inválido";
    if (!formData.subject.trim()) newErrors.subject = "El asunto es requerido";
    if (!formData.message.trim() || formData.message.trim().length < 10)
      newErrors.message = "El mensaje debe tener mínimo 10 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        type: "error",
        message: "Por favor, completa todos los campos correctamente",
      });
      return;
    }

    setStatus({ type: "loading" });

    // Simular envío - cuando tengas backend, aquí va la lógica real
    setTimeout(() => {
      console.log("Formulario enviado:", formData);
      setStatus({
        type: "success",
        message: "¡Mensaje enviado! Te contactaré en menos de 24 horas",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setStatus({ type: "idle" });
      }, 5000);
    }, 1000);
  };

  if (status.type === "success") {
    return (
      <div className="card p-6 md:p-8 text-center max-w-2xl mx-auto border-l-4 border-l-intelligent-500">
        <CheckCircle size={48} className="mx-auto mb-4 text-intelligent-500" />
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-slate-300 text-base md:text-lg">{status.message}</p>
        <p className="text-sm text-slate-400 mt-4">
          Revisa tu email (incluyendo spam) para mi respuesta
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 max-w-2xl mx-auto">
      {/* Nombre */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Nombre Completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors
            ${
              errors.name
                ? "border-red-500/50 focus:border-red-500"
                : "border-slate-600/50 focus:border-tech-500"
            }
            text-white placeholder:text-slate-400`}
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} /> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors
            ${
              errors.email
                ? "border-red-500/50 focus:border-red-500"
                : "border-slate-600/50 focus:border-tech-500"
            }
            text-white placeholder:text-slate-400`}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} /> {errors.email}
          </p>
        )}
      </div>

      {/* Teléfono */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Teléfono (Opcional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+34 123 456 789"
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors
            ${
              errors.phone
                ? "border-red-500/50 focus:border-red-500"
                : "border-slate-600/50 focus:border-tech-500"
            }
            text-white placeholder:text-slate-400`}
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} /> {errors.phone}
          </p>
        )}
      </div>

      {/* Asunto */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
          Asunto *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="¿Sobre qué es tu consulta?"
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors
            ${
              errors.subject
                ? "border-red-500/50 focus:border-red-500"
                : "border-slate-600/50 focus:border-tech-500"
            }
            text-white placeholder:text-slate-400`}
        />
        {errors.subject && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} /> {errors.subject}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntame más sobre tu proyecto o consulta..."
          rows={5}
          className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors resize-none
            ${
              errors.message
                ? "border-red-500/50 focus:border-red-500"
                : "border-slate-600/50 focus:border-tech-500"
            }
            text-white placeholder:text-slate-400`}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
            <AlertCircle size={14} /> {errors.message}
          </p>
        )}
      </div>

      {/* Estado de error general */}
      {status.type === "error" && status.message && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400">
          <AlertCircle size={18} />
          <p className="text-sm">{status.message}</p>
        </div>
      )}

      {/* Botón enviar */}
      <button
        type="submit"
        disabled={status.type === "loading"}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status.type === "loading" ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Mensaje"
        )}
      </button>

      <p className="text-xs text-slate-400 text-center mt-4">
        * Campos requeridos. Respeteré tu privacidad y no compartiré tu email.
      </p>
    </form>
  );
};
