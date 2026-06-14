"use client";

import { Star, Quote } from "lucide-react";
import { reviews, type Review } from "@/data/reviews";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/LanguageContext";

/* ── Helpers ────────────────────────────────────────────────────── */
function getInitials(name: string): string {
  return name.split(" ").slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "").join("");
}

const AVATAR_PALETTES = [
  "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-900/60 dark:text-rose-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300",
];
function avatarColour(name: string) {
  return AVATAR_PALETTES[name.charCodeAt(0) % AVATAR_PALETTES.length];
}

/* ── Google G Logo ──────────────────────────────────────────────── */
function GoogleLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

/* ── Star row ───────────────────────────────────────────────────── */
function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200 dark:fill-slate-600 dark:text-slate-600"}`}
        />
      ))}
    </div>
  );
}

/* ── Review card ────────────────────────────────────────────────── */
function ReviewCard({ review }: { review: Review }) {
  const { t, r } = useLanguage();
  const initials = getInitials(review.name);
  const colour   = avatarColour(review.name);

  return (
    <article className="relative bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col gap-4">
      <Quote className="absolute top-5 right-5 w-8 h-8 text-gray-100 dark:text-slate-700 fill-gray-100 dark:fill-slate-700" aria-hidden />

      {/* Avatar + name + google badge */}
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${colour}`}>
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-gray-800 dark:text-slate-100 text-sm leading-tight truncate">{review.name}</p>
          {review.occupation && (
            <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5 truncate">{r(review.occupation)}</p>
          )}
        </div>
        <div className="shrink-0 flex flex-col items-center gap-0.5">
          <GoogleLogo size={18} />
          <span className="text-gray-400 dark:text-slate-500 text-[9px] font-medium leading-none">Google</span>
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center justify-between gap-2">
        <StarRow rating={review.rating} />
        <span className="text-gray-400 dark:text-slate-500 text-xs shrink-0">{r(review.date)}</span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed flex-1">
        {r(review.text)}
      </p>

      {/* Footer */}
      <div className="pt-2 border-t border-gray-50 dark:border-slate-700">
        <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-slate-500">
          <GoogleLogo size={11} />
          {t.testimonials.reviewedAt} {review.source}
        </span>
      </div>
    </article>
  );
}

/* ── Score banner ───────────────────────────────────────────────── */
const GMAPS_RATING = "4.1";
const GMAPS_TOTAL  = 90;

function ScoreBanner() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl shadow-sm px-8 py-6 mb-12 max-w-lg mx-auto">
      <div className="flex flex-col items-center sm:items-start">
        <span className="text-5xl font-extrabold text-gray-800 dark:text-slate-100 leading-none">{GMAPS_RATING}</span>
        <StarRow rating={4} />
        <span className="text-gray-400 dark:text-slate-500 text-xs mt-1">
          {t.testimonials.reviewFromPrefix} {GMAPS_TOTAL} {t.testimonials.reviewFromSuffix}
        </span>
      </div>
      <div className="hidden sm:block w-px h-14 bg-gray-100 dark:bg-slate-700" />
      <div className="flex flex-col items-center sm:items-start gap-1">
        <div className="flex items-center gap-1.5">
          <GoogleLogo size={20} />
          <span className="font-semibold text-gray-700 dark:text-slate-200 text-sm">Google Maps</span>
        </div>
        <p className="text-gray-400 dark:text-slate-500 text-xs text-center sm:text-left">
          {t.testimonials.officialRating}
        </p>
        <a
          href={SITE_CONFIG.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary hover:text-primary-dark font-medium transition-colors"
        >
          {t.testimonials.seeAll}
        </a>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-primary-light dark:bg-primary/20 text-primary dark:text-primary-muted text-sm font-semibold rounded-full mb-4">
            {t.testimonials.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-slate-100 mb-4 tracking-tight">
            {t.testimonials.title}{" "}
            <span className="text-primary">{t.testimonials.titleAccent}</span>
          </h2>
          <p className="max-w-md mx-auto text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.testimonials.sub}
          </p>
        </div>

        <ScoreBanner />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE_CONFIG.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-gray-700 dark:text-slate-300 hover:border-primary hover:text-primary hover:bg-primary-light dark:hover:bg-primary/20 transition-all shadow-sm"
          >
            <GoogleLogo size={16} />
            {t.testimonials.readAllBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
