"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { dict, type Lang, type LS, ls } from "./i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** The full translation dictionary for the active language. */
  t: (typeof dict)[Lang];
  /** Helper to resolve a bilingual LS string with the active lang. */
  r: (field: LS) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const r = useCallback((field: LS) => ls(field, lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang], r }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
