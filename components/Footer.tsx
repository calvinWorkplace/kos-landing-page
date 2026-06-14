"use client";

import { MapPin, Phone, Mail, Share2, Home } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useLanguage } from "@/lib/LanguageContext";

const quickLinks = [
  { key: "home" as const,         href: "#hero" },
  { key: "facilities" as const,   href: "#fasilitas" },
  { key: "rooms" as const,        href: "#kamar" },
  { key: "location" as const,     href: "#lokasi" },
  { key: "testimonials" as const, href: "#testimoni" },
  { key: "faq" as const,          href: "#faq" },
];

const roomLinks = [
  { label: "Kamar Tipe A — Rp 1.500.000", href: "#kamar" },
  { label: "Kamar Tipe B — Rp 1.100.000", href: "#kamar" },
  { label: "Kamar Tipe C — Rp 900.000",   href: "#kamar" },
  { label: "Kamar Tipe D — Rp 650.000",   href: "#kamar" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();
  const waLink = `https://wa.me/${SITE_CONFIG.waNumber}`;

  return (
    <footer id="footer" className="bg-gray-900 dark:bg-slate-950 text-gray-300 transition-colors">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg leading-tight">
                {SITE_CONFIG.namePrefix}
                <span className="text-primary-muted">{SITE_CONFIG.nameSuffix}</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">{t.footer.tagline}</p>
            <p className="text-gray-500 text-xs mb-5">
              {t.footer.copyrightSince} {SITE_CONFIG.yearEstablished} · {t.footer.since}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Share2 className="w-4 h-4" />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="WhatsApp">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-lg bg-gray-800 dark:bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t.footer.navHeader}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.key}>
                  <a href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-muted transition-colors inline-block hover:translate-x-0.5">
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Room types ── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t.footer.roomsHeader}
            </h4>
            <ul className="space-y-3">
              {roomLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-muted transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact & map ── */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t.footer.contactHeader}
            </h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-muted shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-muted shrink-0" />
                <a href={`tel:${SITE_CONFIG.waNumber}`}
                  className="text-gray-400 text-sm hover:text-primary-muted transition-colors">
                  {SITE_CONFIG.waNumberDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-muted shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 text-sm hover:text-primary-muted transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            {/* Map placeholder */}
            <div className="w-full h-36 bg-gray-800 dark:bg-slate-800 rounded-xl border border-gray-700 dark:border-slate-700 flex flex-col items-center justify-center gap-2 overflow-hidden relative">
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_20px,#4b5563_20px,#4b5563_21px),repeating-linear-gradient(90deg,transparent,transparent_20px,#4b5563_20px,#4b5563_21px)]" />
              <MapPin className="w-7 h-7 text-primary-muted relative z-10" />
              <span className="text-gray-400 text-xs font-medium relative z-10 text-center px-2">
                {SITE_CONFIG.address.short}
              </span>
              <a
                href={SITE_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-xs px-3 py-1.5 bg-primary/80 hover:bg-primary text-white rounded-lg transition-colors"
              >
                {t.footer.openMapsBtn}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {currentYear} {SITE_CONFIG.name} · {t.footer.copyrightSince}{" "}
            {SITE_CONFIG.yearEstablished}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
