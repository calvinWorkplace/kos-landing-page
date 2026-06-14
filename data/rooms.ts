import type { LS } from "@/lib/i18n";

export type RoomStatus = "available" | "full";  // internal key; label comes from dict

export type Room = {
  id: number;
  title: LS;
  subtitle: LS;
  price: string;
  status: RoomStatus;
  size: string;
  description: LS;
  facilities: LS[];
  image: string;
  whatsappMessage: string;   // always Indonesian — owner speaks ID
};

export const rooms: Room[] = [
  {
    id: 1,
    title:    { id: "Kamar Tipe A",           en: "Room Type A" },
    subtitle: { id: "AC + Kamar Mandi Dalam", en: "AC + Private Bathroom" },
    price: "Rp 1.500.000",
    status: "available",
    size: "4 × 4 m²",
    description: {
      id: "Kamar premium dengan AC dan kamar mandi pribadi. Ideal bagi karyawan atau mahasiswa yang menginginkan privasi dan kenyamanan penuh sepanjang hari.",
      en: "A premium room with air conditioning and a private bathroom. Ideal for working professionals or students who want full privacy and comfort throughout the day.",
    },
    facilities: [
      { id: "AC",                en: "Air Conditioning" },
      { id: "KM Dalam",          en: "Private Bathroom" },
      { id: "Lemari 2 Pintu",    en: "2-Door Wardrobe" },
      { id: "Meja Belajar",      en: "Study Desk" },
      { id: "WiFi",              en: "WiFi" },
      { id: "Kasur Spring Bed",  en: "Spring Bed" },
    ],
    image: "https://picsum.photos/seed/kamar-tipe-a/800/600",
    whatsappMessage:
      "Halo KostExecutivePloso, saya tertarik dengan Kamar Tipe A (AC + KM Dalam) seharga Rp 1.500.000/bulan. Apakah masih tersedia?",
  },
  {
    id: 2,
    title:    { id: "Kamar Tipe B",                       en: "Room Type B" },
    subtitle: { id: "Kipas Angin + Kamar Mandi Dalam",    en: "Fan + Private Bathroom" },
    price: "Rp 1.100.000",
    status: "available",
    size: "3 × 4 m²",
    description: {
      id: "Kamar nyaman dengan kamar mandi dalam dan kipas angin. Pilihan hemat tanpa mengorbankan privasi, cocok untuk mahasiswa dengan budget terbatas.",
      en: "A comfortable room with a private bathroom and fan. A budget-friendly option without sacrificing privacy, perfect for students on a tighter budget.",
    },
    facilities: [
      { id: "Kipas Angin", en: "Fan" },
      { id: "KM Dalam",    en: "Private Bathroom" },
      { id: "Lemari",      en: "Wardrobe" },
      { id: "Meja Belajar",en: "Study Desk" },
      { id: "WiFi",        en: "WiFi" },
      { id: "Kasur Busa",  en: "Foam Mattress" },
    ],
    image: "https://picsum.photos/seed/kamar-tipe-b/800/600",
    whatsappMessage:
      "Halo KostExecutivePloso, saya tertarik dengan Kamar Tipe B (Kipas + KM Dalam) seharga Rp 1.100.000/bulan. Apakah masih tersedia?",
  },
  {
    id: 3,
    title:    { id: "Kamar Tipe C",              en: "Room Type C" },
    subtitle: { id: "AC + Kamar Mandi Luar",     en: "AC + Shared Bathroom" },
    price: "Rp 900.000",
    status: "full",
    size: "3 × 3 m²",
    description: {
      id: "Kamar ber-AC yang ekonomis dengan kamar mandi bersama yang bersih dan terawat. Kamar mandi luar dibersihkan setiap hari oleh petugas.",
      en: "An economical air-conditioned room with a clean and well-maintained shared bathroom. The communal bathroom is cleaned daily by staff.",
    },
    facilities: [
      { id: "AC",                    en: "Air Conditioning" },
      { id: "KM Luar (Bersama)",     en: "Shared Bathroom" },
      { id: "Lemari",                en: "Wardrobe" },
      { id: "Meja Belajar",          en: "Study Desk" },
      { id: "WiFi",                  en: "WiFi" },
    ],
    image: "https://picsum.photos/seed/kamar-tipe-c/800/600",
    whatsappMessage:
      "Halo KostExecutivePloso, saya tertarik dengan Kamar Tipe C (AC + KM Luar) seharga Rp 900.000/bulan. Apakah sudah ada yang kosong?",
  },
  {
    id: 4,
    title:    { id: "Kamar Tipe D",                      en: "Room Type D" },
    subtitle: { id: "Kipas Angin + Kamar Mandi Luar",    en: "Fan + Shared Bathroom" },
    price: "Rp 650.000",
    status: "available",
    size: "3 × 3 m²",
    description: {
      id: "Pilihan paling ekonomis dengan fasilitas standar yang memadai. Sangat cocok untuk mahasiswa baru yang ingin tinggal dekat kampus dengan harga terjangkau.",
      en: "The most economical option with adequate standard facilities. Ideal for new students looking to stay close to campus at an affordable price.",
    },
    facilities: [
      { id: "Kipas Angin",       en: "Fan" },
      { id: "KM Luar (Bersama)", en: "Shared Bathroom" },
      { id: "Lemari Kecil",      en: "Small Wardrobe" },
      { id: "WiFi",              en: "WiFi" },
    ],
    image: "https://picsum.photos/seed/kamar-tipe-d/800/600",
    whatsappMessage:
      "Halo KostExecutivePloso, saya tertarik dengan Kamar Tipe D (Kipas + KM Luar) seharga Rp 650.000/bulan. Apakah masih tersedia?",
  },
];

export const WA_NUMBER = "6285103098764";
