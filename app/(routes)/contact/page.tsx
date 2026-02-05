"use client";

import { useState } from "react";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";
import { ContactForm } from "@/components/contact/contact-form";
import { FAQSection } from "@/components/contact/faq-section";
import { dataContactInfo, dataContactSocial, dataContactFAQ } from "@/data";
import { Mail, MessageCircle, Clock, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      {/* Hero Section */}
      <section className="relative z-10 min-h-fit md:min-h-screen flex items-center pt-40 pb-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
              Vamos a<span className="text-gradient block">Colaborar</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Cuéntame sobre tu proyecto, automatización o idea. Responderé en
              menos de 24 horas con soluciones personalizadas para tu negocio.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {dataContactInfo.map(({ id, icon, label, value, description }) => (
              <Link
                key={id}
                href={
                  label === "Email"
                    ? `mailto:mirkex.guitar@gmail.com`
                    : label === "WhatsApp"
                      ? "https://wa.link/epmdlm"
                      : "#"
                }
                target={
                  label !== "Respuesta" && label !== "Ubicación"
                    ? "_blank"
                    : undefined
                }
                className={`card p-5 md:p-6 text-center hover:border-tech-500/50 transition-all duration-300 group ${
                  (label === "Email" || label === "WhatsApp") &&
                  "hover:shadow-glow-blue cursor-pointer"
                }`}
              >
                <div className="text-4xl md:text-5xl mb-3">{icon}</div>
                <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                  {label}
                </h3>
                <p className="text-tech-400 font-semibold text-sm md:text-base mb-2">
                  {value}
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  {description}
                </p>
                {(label === "Email" || label === "WhatsApp") && (
                  <div className="mt-3 inline-block text-tech-400 group-hover:translate-x-1 transition-transform">
                    <ExternalLink size={16} />
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Two Column Section: Form + Social */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Envíame tu Mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Social Column */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                Conéctate Conmigo
              </h2>
              <div className="space-y-4">
                {dataContactSocial.map(
                  ({ id, name, icon, url, description }) => (
                    <Link
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card p-4 md:p-5 flex items-start gap-4 hover:border-tech-500/50 hover:bg-slate-700/30 transition-all duration-300 group"
                    >
                      <div className="text-3xl flex-shrink-0 mt-1">{icon}</div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-white text-sm md:text-base group-hover:text-tech-400 transition-colors">
                          {name}
                        </h3>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                      <ExternalLink
                        size={16}
                        className="flex-shrink-0 text-tech-400 mt-1 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ),
                )}
              </div>

              {/* Availability Banner */}
              <div className="card p-5 md:p-6 mt-6 md:mt-8 bg-gradient-to-br from-intelligent-500/10 to-tech-500/10 border-l-4 border-l-intelligent-500">
                <div className="flex gap-3 mb-3">
                  <Clock
                    size={20}
                    className="text-intelligent-400 flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-white">
                      Disponibilidad
                    </p>
                    <p className="text-xs md:text-sm text-slate-300">
                      Respondo de lunes a viernes, 9:00 - 18:00 CET
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-16 md:mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
                Preguntas Frecuentes
              </h2>
              <FAQSection faqs={dataContactFAQ} />
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <div className="card p-6 md:p-10 bg-gradient-to-br from-tech-500/5 to-intelligent-500/5">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Tienes prisa?
              </h2>
              <p className="text-slate-300 mb-6 text-sm md:text-base">
                Contáctame directamente por WhatsApp para respuestas inmediatas
              </p>
              <Link
                href="https://wa.link/epmdlm"
                target="_blank"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chat por WhatsApp
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
