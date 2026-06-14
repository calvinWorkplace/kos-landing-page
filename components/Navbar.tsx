"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted]   = useState(false);

  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home,         href: "#hero" },
    { label: t.nav.facilities,   href: "#fasilitas" },
    { label: t.nav.rooms,        href: "#kamar" },
    { label: t.nav.location,     href: "#lokasi" },
    { label: t.nav.testimonials, href: "#testimoni" },
    { label: t.nav.faq,          href: "#faq" },
    { label: t.nav.contact,      href: "#footer" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleLang  = () => setLang(lang === "id" ? "en" : "id");

  const isDark = mounted && theme === "dark";

  // Shared icon-button styles
  const iconBtn = (transparent: boolean) =>
    `p-2 rounded-lg transition-colors ${
      transparent
        ? "text-white/80 hover:text-white hover:bg-white/15"
        : "text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-bold text-base sm:text-lg tracking-tight transition-colors ${
                scrolled ? "text-gray-800 dark:text-slate-100" : "text-white"
              }`}
            >
              {SITE_CONFIG.namePrefix}
              <span className="text-primary-muted">{SITE_CONFIG.nameSuffix}</span>
            </span>
          </button>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-slate-100"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right controls ── */}
          <div className="flex items-center gap-1.5">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className={`${iconBtn(!scrolled)} flex items-center gap-1 text-xs font-bold min-w-[44px] justify-center`}
              aria-label="Toggle language"
              title={lang === "id" ? "Switch to English" : "Ganti ke Indonesia"}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "id" ? "EN" : "ID"}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={iconBtn(!scrolled)}
              aria-label="Toggle theme"
            >
              {mounted
                ? isDark
                  ? <Sun  className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />
                : <Moon className="w-4 h-4" />}
            </button>

            {/* Desktop CTA */}
            <a
              href={`https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(
                `Halo ${SITE_CONFIG.name}, saya ingin tahu lebih lanjut tentang kamar kos yang tersedia.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors ml-1"
            >
              {t.nav.contactUs}
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden ${iconBtn(!scrolled)}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 mb-4 overflow-hidden">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-5 py-3 text-sm font-medium text-gray-700 dark:text-slate-300 hover:bg-primary-light dark:hover:bg-slate-800 hover:text-primary-dark transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 pb-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(
                  `Halo ${SITE_CONFIG.name}, saya ingin tahu lebih lanjut tentang kamar kos yang tersedia.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                {t.nav.contactUs}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
