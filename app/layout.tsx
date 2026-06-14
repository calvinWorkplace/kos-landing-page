import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KostExecutivePloso | Kos Executive Strategis di Surabaya",
  description:
    "KostExecutivePloso — hunian kos executive nyaman, bersih, dan sangat strategis di Jl. Ploso, Tambaksari, Surabaya. Dekat UNAIR, UNESA, dan pusat kota. Berdiri sejak 2016.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={geistSans.variable}
      suppressHydrationWarning   /* required by next-themes */
    >
      <body className="min-h-screen antialiased bg-white dark:bg-slate-950 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
