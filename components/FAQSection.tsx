"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const askWaLink = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(
    `Halo ${SITE_CONFIG.name}, saya punya pertanyaan tentang kos Anda.`
  )}`;

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-sm font-semibold rounded-full mb-4">
            {t.faq.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
            {t.faq.title}
            <br className="hidden sm:block" />
            {" "}{t.faq.titleLine2}
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            {t.faq.sub}
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white dark:bg-slate-800 rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-primary dark:border-primary shadow-sm shadow-primary/10"
                    : "border-gray-100 dark:border-slate-700 hover:border-gray-200 dark:hover:border-slate-600"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-800 dark:text-slate-100 text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed border-t border-gray-100 dark:border-slate-700 pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-slate-400 text-sm mb-4">{t.faq.stillQ}</p>
          <a
            href={askWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors"
          >
            {t.faq.askWaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
