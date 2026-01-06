"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full">
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="card overflow-hidden">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-slate-700/30 transition-colors text-left"
            >
              <h3 className="font-semibold text-sm md:text-base pr-4 text-white">
                {faq.question}
              </h3>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-tech-400 transition-transform duration-300 ${
                  openId === faq.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {openId === faq.id && (
              <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-700/50 pt-4">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
