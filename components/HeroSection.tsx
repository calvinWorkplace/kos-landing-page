"use client";

import { MapPin, Star, CalendarDays } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/LanguageContext";

const currentYear = new Date().getFullYear();
const yearsRunning = currentYear - SITE_CONFIG.yearEstablished;

const HERO_BG_URL =
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80";

export default function HeroSection() {
  const { t } = useLanguage();

  const waLink = `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(
    `Halo ${SITE_CONFIG.name}, saya ingin tahu lebih lanjut tentang kamar kos yang tersedia.`
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — bg-fixed ties image sizing to viewport, not element height, so no zoom on resize */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-primary-dark/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-sm font-medium mb-6">
          <MapPin className="w-4 h-4 text-primary-muted shrink-0" />
          <span>{t.hero.locationBadge}</span>
        </div>

        {/* Brand eyebrow */}
        <p className="text-primary-muted font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3">
          {t.hero.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          {t.hero.h1a}{" "}
          <span className="text-primary-muted">{t.hero.h1accent}</span>
          <br className="hidden sm:block" />
          {" "}{t.hero.h1b}
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-10">
          {t.hero.sub}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kamar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            {t.hero.ctaRooms}
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold text-base rounded-xl hover:bg-white/25 transition-colors"
          >
            {t.hero.ctaWa}
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-2xl font-bold text-white">4.9</span>
            </div>
            <span className="text-xs sm:text-sm text-white/70">{t.hero.statRating}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">120+</span>
            <span className="text-xs sm:text-sm text-white/70">{t.hero.statHappy}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4 text-primary-muted" />
              <span className="text-2xl font-bold text-white">{yearsRunning}+</span>
            </div>
            <span className="text-xs sm:text-sm text-white/70">{t.hero.statYears}</span>
          </div>
        </div>

        {/* Since ribbon */}
        <p className="mt-4 text-white/50 text-xs tracking-widest uppercase">
          {t.hero.sincePrefix} {SITE_CONFIG.yearEstablished} · {t.hero.sinceCity}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/50 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
