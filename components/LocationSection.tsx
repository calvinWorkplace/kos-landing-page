"use client";

import { GraduationCap, ShoppingBag, Clock, MapPin, Navigation } from "lucide-react";
import { locationCategories, type LocationCategory } from "@/data/locations";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/LanguageContext";

/* ── Colour tokens per variant ─────────────────────────────────── */
const VARIANTS = {
  campus: {
    badge:     "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
    timeBadge: "bg-blue-600 text-white",
    header:    "from-blue-600 to-blue-500",
    headerIcon:"bg-white/20",
    dot:       "bg-blue-400",
  },
  shopping: {
    badge:     "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
    timeBadge: "bg-emerald-600 text-white",
    header:    "from-emerald-600 to-emerald-500",
    headerIcon:"bg-white/20",
    dot:       "bg-emerald-400",
  },
} as const;

function CategoryIcon({ variant, className }: { variant: LocationCategory["variant"]; className?: string }) {
  return variant === "campus"
    ? <GraduationCap className={className} />
    : <ShoppingBag   className={className} />;
}

function CategoryCard({ cat, nearestSuffix }: { cat: LocationCategory; nearestSuffix: string }) {
  const { r } = useLanguage();
  const v = VARIANTS[cat.variant];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      {/* Card header */}
      <div className={`bg-gradient-to-r ${v.header} px-6 py-5 flex items-center gap-3`}>
        <div className={`w-10 h-10 rounded-xl ${v.headerIcon} flex items-center justify-center shrink-0`}>
          <CategoryIcon variant={cat.variant} className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-base leading-tight">{r(cat.category)}</h3>
          <p className="text-white/75 text-xs mt-0.5">{cat.items.length} {nearestSuffix}</p>
        </div>
      </div>

      {/* Location list */}
      <ul className="divide-y divide-gray-50 dark:divide-slate-700 flex-1">
        {cat.items.map((item, idx) => (
          <li
            key={idx}
            className="group flex items-center justify-between gap-3 px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className={`w-2 h-2 rounded-full shrink-0 ${v.dot}`} />
              <span className="text-gray-700 dark:text-slate-200 text-sm font-medium leading-snug truncate">
                {item.name}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium ${v.badge}`}>
                <Navigation className="w-2.5 h-2.5" />
                {item.distance}
              </span>
              <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${v.timeBadge}`}>
                <Clock className="w-2.5 h-2.5" />
                {item.duration}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section id="lokasi" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-sm font-semibold rounded-full mb-4">
            {t.location.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
            {t.location.title}
            <br className="hidden sm:block" />
            {" "}{t.location.titleLine2}
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.location.sub}
          </p>
        </div>

        {/* Address pill */}
        <div className="flex justify-center mb-10">
          <a
            href={SITE_CONFIG.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-sm text-gray-600 dark:text-slate-300 hover:bg-primary-light dark:hover:bg-primary/20 hover:border-primary hover:text-primary transition-all group"
          >
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span className="font-medium">{SITE_CONFIG.address.full}</span>
            <span className="text-xs text-gray-400 dark:text-slate-500 group-hover:text-primary transition-colors hidden sm:inline">
              {t.location.openMapsShort}
            </span>
          </a>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {locationCategories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} nearestSuffix={t.location.nearestSuffix} />
          ))}
        </div>


      </div>
    </section>
  );
}
