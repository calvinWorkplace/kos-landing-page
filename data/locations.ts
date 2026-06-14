import type { LS } from "@/lib/i18n";

export type LocationItem = {
  name: string;      // proper noun — same in both languages
  distance: string;
  duration: string;
};

export type LocationCategory = {
  id: string;
  category: LS;
  variant: "campus" | "shopping";
  items: LocationItem[];
};

export const locationCategories: LocationCategory[] = [
  {
    id: "kampus",
    category: {
      id: "Kampus Terdekat",
      en: "Nearest Universities",
    },
    variant: "campus",
    items: [
      { name: "UNAIR Kampus A (Kedokteran)",          distance: "1.2 km", duration: "5 Min" },
      { name: "UNAIR Kampus B (FISIP, FEB, dll)",     distance: "2.0 km", duration: "8 Min" },
      { name: "UNESA Kampus 3 (FKP)",                 distance: "3.5 km", duration: "12 Min" },
      { name: "Widya Mandala Kalijudan",               distance: "1.8 km", duration: "7 Min" },
      { name: "Universitas Muhammadiyah Surabaya",     distance: "4.2 km", duration: "15 Min" },
    ],
  },
  {
    id: "belanja",
    category: {
      id: "Pusat Belanja & Fasilitas",
      en: "Shopping & Facilities",
    },
    variant: "shopping",
    items: [
      { name: "Alfamart",         distance: "150 m",  duration: "2 Min" },
      { name: "Pasar Tambahrejo", distance: "600 m",  duration: "3 Min" },
      { name: "Pasar Pacar Keling",distance: "1.1 km", duration: "5 Min" },
      { name: "Hi-Tech Mall",     distance: "3.2 km", duration: "12 Min" },
      { name: "Grand City Mall",  distance: "4.5 km", duration: "18 Min" },
      { name: "Tunjungan Plaza",  distance: "5.0 km", duration: "20 Min" },
    ],
  },
];
