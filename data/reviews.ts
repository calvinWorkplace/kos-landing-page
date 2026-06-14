import type { LS } from "@/lib/i18n";

export type Review = {
  id: number;
  name: string;
  date: LS;
  rating: 1 | 2 | 3 | 4 | 5;
  text: LS;
  source: "Google Maps";
  occupation?: LS;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Novita Manurung",
    date: { id: "2 tahun lalu", en: "2 years ago" },
    rating: 5,
    occupation: { id: "Local Guide · 84 ulasan", en: "Local Guide · 84 reviews" },
    source: "Google Maps",
    text: {
      id: "Pernah kost di sini sekitar 5 thn yg lalu. Kamar kost bersih & lumayan luas, dapat fasilitas kasur ukuran besar, AC, TV, lemari, meja & kamar mandi dalam. Ada dapur bersama yg cukup luas. Pemilik kostan cukup perhatian dengan keluhan anak kost. Overall waktu kost di sini cukup nyaman & bersih.",
      en: "Stayed here about 5 years ago. The room is clean and quite spacious — came with a large bed, AC, TV, wardrobe, desk, and private bathroom. There's also a shared kitchen that's quite large. The owner was attentive to residents' concerns. Overall, it was a comfortable and clean experience.",
    },
  },
  {
    id: 2,
    name: "Sultan Maulana",
    date: { id: "11 bulan lalu", en: "11 months ago" },
    rating: 5,
    occupation: { id: "Local Guide · 309 ulasan", en: "Local Guide · 309 reviews" },
    source: "Google Maps",
    text: {
      id: "Lokasi sesuai dengan Maps. Konfirmasi order cepat, pelayanan ramah.",
      en: "Location matches Google Maps exactly. Order confirmation was fast and the service was friendly.",
    },
  },
  {
    id: 3,
    name: "Bhun Ong",
    date: { id: "7 tahun lalu", en: "7 years ago" },
    rating: 5,
    occupation: { id: "Local Guide · 11 ulasan", en: "Local Guide · 11 reviews" },
    source: "Google Maps",
    text: {
      id: "Tempat bersih, nyaman, keamanan OK — memang cocok untuk putri-putri kita.",
      en: "Clean place, comfortable, and good security — truly suitable for our daughters.",
    },
  },
  {
    id: 4,
    name: "Rudi Istanto",
    date: { id: "9 tahun lalu", en: "9 years ago" },
    rating: 5,
    occupation: { id: "6 ulasan", en: "6 reviews" },
    source: "Google Maps",
    text: {
      id: "Tempat bersih, aman, nyaman, dan damai.",
      en: "Clean, safe, comfortable, and peaceful.",
    },
  },
];
