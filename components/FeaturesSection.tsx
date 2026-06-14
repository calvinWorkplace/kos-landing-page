"use client";

import {
  Wifi, ShieldCheck, UtensilsCrossed, Car,
  Droplets, Zap, Trash2, Clock,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS = [Wifi, ShieldCheck, UtensilsCrossed, Car, Droplets, Zap, Trash2, Clock];

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section id="fasilitas" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-sm font-semibold rounded-full mb-4">
            {t.features.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
            {t.features.title}
            <br className="hidden sm:block" />
            {" "}{t.features.titleLine2}
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.features.sub}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.features.items.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={feature.title}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary-muted/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-slate-100 mb-2 text-base">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
