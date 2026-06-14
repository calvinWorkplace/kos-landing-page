"use client";

import { rooms } from "@/data/rooms";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/LanguageContext";
import RoomCard from "./RoomCard";
import { BedDouble } from "lucide-react";

export default function RoomCatalog() {
  const { t } = useLanguage();

  const available = rooms.filter((r) => r.status === "available").length;

  const availableLabel = t.rooms.availableOf
    .replace("{n}", String(available))
    .replace("{total}", String(rooms.length));

  const consultWaLink = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(
    `Halo ${SITE_CONFIG.name}, saya ingin konsultasi mengenai kamar kos yang tersedia.`
  )}`;

  return (
    <section id="kamar" className="py-20 md:py-28 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-sm font-semibold rounded-full mb-4">
            {t.rooms.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
            {t.rooms.title}
            <br className="hidden sm:block" />
            {" "}{t.rooms.titleLine2}
          </h2>
          <p className="max-w-xl mx-auto text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            {t.rooms.sub}
          </p>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full">
            <BedDouble className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
              {availableLabel} {t.rooms.roomsStillAvailable}
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center bg-primary-light dark:bg-primary/15 rounded-2xl p-8 md:p-12 border border-transparent dark:border-primary/20">
          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-slate-100 mb-2">
            {t.rooms.notFound}
          </h3>
          <p className="text-gray-500 dark:text-slate-400 mb-6 text-sm sm:text-base max-w-md mx-auto">
            {t.rooms.notFoundSub}
          </p>
          <a
            href={consultWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
          >
            {t.rooms.consultBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
