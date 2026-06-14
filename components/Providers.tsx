"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
