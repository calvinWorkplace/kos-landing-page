// ─── Types ────────────────────────────────────────────────────────────────────
export type Lang = "id" | "en";

/** A bilingual string used in data files (rooms, locations, reviews). */
export type LS = { id: string; en: string };

/** Helper: pick the correct string from an LS by active language. */
export function ls(field: LS, lang: Lang): string {
  return field[lang];
}

// ─── Internal types ───────────────────────────────────────────────────────────
type Feature  = { title: string; desc: string };
type FaqItem  = { q: string; a: string };
type Transport = { emoji: string; label: string; desc: string };

type Dict = {
  nav: {
    home: string; facilities: string; rooms: string;
    location: string; testimonials: string; faq: string;
    contact: string; contactUs: string;
  };
  hero: {
    locationBadge: string;
    eyebrow: string;
    h1a: string; h1accent: string; h1b: string;
    sub: string;
    ctaRooms: string; ctaWa: string;
    statRating: string; statHappy: string; statYears: string;
    sincePrefix: string; sinceCity: string;
  };
  features: {
    badge: string; title: string; titleLine2: string; sub: string;
    items: Feature[];
  };
  rooms: {
    badge: string; title: string; titleLine2: string; sub: string;
    availableOf: string;   // e.g. "{n} dari {total}" → replace {n} & {total}
    roomsStillAvailable: string;
    priceNote: string;
    roomLabel: string; sizeLabel: string;
    statusAvailable: string; statusFull: string;
    notFound: string; notFoundSub: string;
    consultBtn: string;
    bookWa: string; fullBtn: string;
  };
  location: {
    badge: string; title: string; titleLine2: string; sub: string;
    openMapsFull: string; openMapsShort: string;
    nearestSuffix: string;  // "{n} lokasi terdekat" → prepend n
    transports: Transport[];
  };
  testimonials: {
    badge: string; title: string; titleAccent: string; sub: string;
    reviewFromPrefix: string; reviewFromSuffix: string;
    officialRating: string; seeAll: string;
    reviewedAt: string; readAllBtn: string;
  };
  faq: {
    badge: string; title: string; titleLine2: string; sub: string;
    stillQ: string; askWaBtn: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string; since: string;
    navHeader: string; roomsHeader: string; contactHeader: string;
    openMapsBtn: string;
    copyrightSince: string;
    madeWith: string;
  };
};

// ─── Dictionary ───────────────────────────────────────────────────────────────
export const dict: Record<Lang, Dict> = {
  // ════════════════════════════════ INDONESIAN ════════════════════════════════
  id: {
    nav: {
      home: "Beranda",
      facilities: "Fasilitas",
      rooms: "Kamar",
      location: "Lokasi",
      testimonials: "Testimoni",
      faq: "FAQ",
      contact: "Kontak",
      contactUs: "Hubungi Kami",
    },
    hero: {
      locationBadge: "Jl. Ploso 1 No.22, Surabaya",
      eyebrow: "KostExecutivePloso",
      h1a: "Kos Executive",
      h1accent: "Strategis",
      h1b: "di Jantung Surabaya",
      sub: "Berdiri sejak 2016, KostExecutivePloso menghadirkan hunian bersih, aman, dan sangat strategis — selangkah dari kampus UNAIR, pusat belanja, dan akses transportasi utama Kota Surabaya.",
      ctaRooms: "Lihat Kamar",
      ctaWa: "Chat WhatsApp",
      statRating: "Rating",
      statHappy: "Penghuni Puas",
      statYears: "Tahun Berdiri",
      sincePrefix: "Berdiri sejak",
      sinceCity: "Surabaya, Jawa Timur",
    },
    features: {
      badge: "Fasilitas Unggulan",
      title: "Semua yang Anda Butuhkan,",
      titleLine2: "Ada di Sini",
      sub: "Kami menyediakan fasilitas lengkap agar Anda dapat fokus belajar dan bekerja tanpa khawatir soal kenyamanan.",
      items: [
        { title: "WiFi Super Cepat",       desc: "Koneksi internet fiber optik hingga 100 Mbps, stabil untuk bekerja dan belajar dari kamar." },
        { title: "Keamanan 24 Jam",        desc: "CCTV terpasang di seluruh area, petugas keamanan jaga malam, dan akses pintu dengan kunci digital." },
        { title: "Dapur Bersama",          desc: "Dapur umum bersih dilengkapi kompor gas, kulkas, dan peralatan memasak yang memadai." },
        { title: "Parkir Luas & Aman",     desc: "Area parkir motor dan mobil yang luas, berkeamanan, dan tercover CCTV selama 24 jam." },
        { title: "Air Bersih Lancar",      desc: "Sumber air dari PDAM dengan tandon cadangan besar. Air panas tersedia di beberapa kamar." },
        { title: "Listrik Token Mandiri",  desc: "Setiap kamar menggunakan meteran listrik token sendiri sehingga lebih hemat dan transparan." },
        { title: "Kebersihan Terjaga",     desc: "Area bersama dibersihkan setiap hari oleh petugas kebersihan profesional kami." },
        { title: "Jam Akses Fleksibel",    desc: "Tidak ada jam malam. Penghuni bebas keluar-masuk kapan saja dengan akses kartu." },
      ],
    },
    rooms: {
      badge: "Katalog Kamar",
      title: "Pilih Kamar Sesuai",
      titleLine2: "Kebutuhan Anda",
      sub: "Kami menyediakan berbagai tipe kamar dengan harga bervariasi. Semua kamar sudah termasuk akses WiFi dan fasilitas bersama.",
      availableOf: "{n} dari {total}",
      roomsStillAvailable: "kamar masih tersedia",
      priceNote: "/ bulan",
      roomLabel: "1 Kamar",
      sizeLabel: "",
      statusAvailable: "Tersedia",
      statusFull: "Penuh",
      notFound: "Tidak menemukan yang cocok?",
      notFoundSub: "Hubungi kami langsung via WhatsApp. Kami siap membantu Anda menemukan kamar yang paling sesuai dengan kebutuhan dan budget Anda.",
      consultBtn: "Konsultasi Gratis",
      bookWa: "Booking via WhatsApp",
      fullBtn: "Kamar Penuh",
    },
    location: {
      badge: "Lokasi Strategis",
      title: "Dekat ke Mana-Mana,",
      titleLine2: "Mudah Dijangkau",
      sub: "KostExecutivePloso berlokasi di titik strategis Tambaksari, Surabaya — akses mudah ke kampus ternama, pasar, dan pusat perbelanjaan kota.",
      openMapsFull: "Buka di Google Maps",
      openMapsShort: "→ Buka Maps",
      nearestSuffix: "lokasi terdekat",
      transports: [
        { emoji: "🚗", label: "Akses Mobil",         desc: "Jalan utama besar, parkir luas tersedia" },
        { emoji: "🛵", label: "Akses Motor",          desc: "Gang lebar, parkir motor tertutup" },
        { emoji: "🚌", label: "Transportasi Umum",    desc: "Halte bus & angkot 2 menit jalan kaki" },
      ],
    },
    testimonials: {
      badge: "Testimoni",
      title: "Apa Kata",
      titleAccent: "Mereka?",
      sub: "Ulasan jujur dari penghuni KostExecutivePloso langsung di Google Maps.",
      reviewFromPrefix: "dari",
      reviewFromSuffix: "ulasan Google Maps",
      officialRating: "Rating resmi KostExecutivePloso",
      seeAll: "Lihat semua ulasan →",
      reviewedAt: "Ulasan di",
      readAllBtn: "Baca Semua Ulasan di Google Maps",
    },
    faq: {
      badge: "FAQ",
      title: "Pertanyaan yang Sering",
      titleLine2: "Ditanyakan",
      sub: "Belum menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp.",
      stillQ: "Masih ada pertanyaan lain?",
      askWaBtn: "Tanya Langsung via WhatsApp",
      items: [
        {
          q: "Apakah ada jam malam atau batasan akses?",
          a: "Tidak ada jam malam di KostExecutivePloso. Penghuni bebas keluar masuk kapan saja menggunakan akses kartu pintar (smart card) yang diberikan saat check-in. Area parkir juga terbuka 24 jam, sehingga Anda tidak perlu khawatir pulang malam.",
        },
        {
          q: "Bagaimana sistem pembayaran sewa kamar?",
          a: "Sewa dibayarkan bulanan, paling lambat tanggal 5 setiap bulannya. Kami menerima pembayaran via transfer bank (BCA, BRI, Mandiri), QRIS, atau tunai langsung ke pengelola. Tidak ada biaya tersembunyi — harga yang tertera sudah termasuk air PDAM dan kebersihan area bersama.",
        },
        {
          q: "Apakah boleh membawa pasangan atau tamu menginap?",
          a: "Tamu diperbolehkan berkunjung hingga pukul 22.00 WIB. Untuk tamu yang menginap, wajib melapor terlebih dahulu ke pengelola dan dikenakan biaya tambahan sebesar Rp 30.000 per malam. Kebijakan ini diberlakukan demi kenyamanan dan keamanan seluruh penghuni.",
        },
        {
          q: "Apakah listrik sudah termasuk dalam biaya sewa?",
          a: "Setiap kamar menggunakan meteran listrik token (PLN prabayar) yang terpisah, sehingga biaya listrik ditanggung masing-masing penghuni sesuai pemakaian. Hal ini lebih adil dan transparan. Kami juga menyediakan reminder pengisian token agar Anda tidak kehabisan listrik.",
        },
        {
          q: "Berapa lama kontrak sewa minimal?",
          a: "Kontrak sewa minimal adalah 1 bulan. Kami juga menawarkan diskon menarik untuk kontrak jangka panjang: diskon 5% untuk kontrak 6 bulan, dan diskon 10% untuk kontrak 1 tahun (12 bulan) yang dibayar di muka.",
        },
        {
          q: "Apakah ada fasilitas laundry?",
          a: "Saat ini kami tidak menyediakan mesin cuci sendiri, namun terdapat jasa laundry kiloan yang berlokasi hanya 50 meter dari kos dengan harga Rp 6.000/kg dan layanan antar-jemput ke kamar. Penghuni KostExecutivePloso mendapatkan harga khusus dari laundry rekanan kami.",
        },
      ],
    },
    footer: {
      tagline: "Hunian kos executive yang nyaman, bersih, dan sangat strategis di Kota Surabaya.",
      since: "Melayani mahasiswa & karyawan",
      navHeader: "Navigasi",
      roomsHeader: "Tipe Kamar",
      contactHeader: "Kontak & Lokasi",
      openMapsBtn: "Buka di Google Maps",
      copyrightSince: "Berdiri sejak",
      madeWith: "Dibuat dengan ❤️ untuk kenyamanan Anda",
    },
  },

  // ══════════════════════════════════ ENGLISH ═════════════════════════════════
  en: {
    nav: {
      home: "Home",
      facilities: "Facilities",
      rooms: "Rooms",
      location: "Location",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      contactUs: "Contact Us",
    },
    hero: {
      locationBadge: "Jl. Ploso 1 No.22, Surabaya",
      eyebrow: "KostExecutivePloso",
      h1a: "Executive Boarding House,",
      h1accent: "Strategically",
      h1b: "in Central Surabaya",
      sub: "Established in 2016, KostExecutivePloso offers clean, safe, and strategically located accommodation — steps away from UNAIR campus, shopping centres, and major transport hubs in Surabaya.",
      ctaRooms: "View Rooms",
      ctaWa: "Chat on WhatsApp",
      statRating: "Rating",
      statHappy: "Happy Residents",
      statYears: "Years Running",
      sincePrefix: "Est.",
      sinceCity: "Surabaya, East Java",
    },
    features: {
      badge: "Key Facilities",
      title: "Everything You Need,",
      titleLine2: "Right Here",
      sub: "We provide complete facilities so you can focus on studying and working without worrying about comfort.",
      items: [
        { title: "Super-Fast WiFi",        desc: "Fibre-optic internet up to 100 Mbps — stable for remote work and studying from your room." },
        { title: "24-Hour Security",       desc: "CCTV throughout the premises, night security guard, and digital keycard door access." },
        { title: "Shared Kitchen",         desc: "A clean communal kitchen equipped with a gas stove, refrigerator, and adequate cookware." },
        { title: "Spacious & Safe Parking",desc: "Ample parking for motorcycles and cars, secured and covered by CCTV around the clock." },
        { title: "Clean Running Water",    desc: "Municipal water supply with a large backup tank. Hot water available in select rooms." },
        { title: "Individual Power Meter", desc: "Each room has its own prepaid electricity meter — fair, transparent, and cost-effective." },
        { title: "Cleanliness Maintained", desc: "All common areas are cleaned daily by our professional cleaning staff." },
        { title: "Flexible Access Hours",  desc: "No curfew. Residents can come and go at any hour using their smart keycard." },
      ],
    },
    rooms: {
      badge: "Room Catalogue",
      title: "Choose a Room That Fits",
      titleLine2: "Your Needs",
      sub: "We offer a variety of room types at different price points. All rooms include WiFi access and shared facilities.",
      availableOf: "{n} of {total}",
      roomsStillAvailable: "rooms still available",
      priceNote: "/ month",
      roomLabel: "1 Room",
      sizeLabel: "",
      statusAvailable: "Available",
      statusFull: "Full",
      notFound: "Didn't find the right fit?",
      notFoundSub: "Contact us directly via WhatsApp. We are ready to help you find the room that best suits your needs and budget.",
      consultBtn: "Free Consultation",
      bookWa: "Book via WhatsApp",
      fullBtn: "Room Full",
    },
    location: {
      badge: "Strategic Location",
      title: "Close to Everything,",
      titleLine2: "Easy to Reach",
      sub: "KostExecutivePloso is situated at a strategic point in Tambaksari, Surabaya — easy access to top universities, markets, and city shopping centres.",
      openMapsFull: "Open in Google Maps",
      openMapsShort: "→ Open Maps",
      nearestSuffix: "nearest locations",
      transports: [
        { emoji: "🚗", label: "Car Access",         desc: "Main road nearby, spacious parking available" },
        { emoji: "🛵", label: "Motorcycle Access",   desc: "Wide lane, covered motorcycle parking" },
        { emoji: "🚌", label: "Public Transport",    desc: "Bus & minibus stop just 2 minutes on foot" },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Do",
      titleAccent: "They Say?",
      sub: "Honest reviews from KostExecutivePloso residents directly on Google Maps.",
      reviewFromPrefix: "from",
      reviewFromSuffix: "Google Maps reviews",
      officialRating: "Official rating of KostExecutivePloso",
      seeAll: "See all reviews →",
      reviewedAt: "Reviewed on",
      readAllBtn: "Read All Reviews on Google Maps",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked",
      titleLine2: "Questions",
      sub: "Haven't found the answer you're looking for? Contact us directly via WhatsApp.",
      stillQ: "Still have more questions?",
      askWaBtn: "Ask Directly via WhatsApp",
      items: [
        {
          q: "Is there a curfew or access restriction?",
          a: "There is no curfew at KostExecutivePloso. Residents are free to come and go at any time using the smart keycard issued at check-in. The parking area is also open 24 hours, so you never need to worry about coming home late.",
        },
        {
          q: "How does the room rental payment system work?",
          a: "Rent is paid monthly, no later than the 5th of each month. We accept payment via bank transfer (BCA, BRI, Mandiri), QRIS, or cash directly to the manager. There are no hidden fees — the listed price already includes tap water and common-area cleaning.",
        },
        {
          q: "Are partners or overnight guests allowed?",
          a: "Guests may visit until 10:00 PM. For guests staying overnight, prior notice to the manager is required and an additional charge of Rp 30,000 per night applies. This policy is enforced to ensure the comfort and safety of all residents.",
        },
        {
          q: "Is electricity included in the rental fee?",
          a: "Each room has its own separate prepaid electricity meter (PLN prabayar), so electricity costs are borne by each resident based on actual usage. This is fairer and more transparent. We also provide token top-up reminders so you never run out of power.",
        },
        {
          q: "What is the minimum rental contract period?",
          a: "The minimum rental period is 1 month. We also offer attractive discounts for long-term contracts: 5% off for a 6-month contract, and 10% off for a full-year (12-month) contract paid upfront.",
        },
        {
          q: "Is there a laundry facility?",
          a: "We do not currently have our own washing machines, but there is a per-kilogram laundry service located only 50 metres from the kost, priced at Rp 6,000/kg with a room pickup-and-delivery service. KostExecutivePloso residents receive a special discounted rate from our partner laundry.",
        },
      ],
    },
    footer: {
      tagline: "A comfortable, clean, and highly strategic executive boarding house in Surabaya.",
      since: "Serving students & professionals",
      navHeader: "Navigation",
      roomsHeader: "Room Types",
      contactHeader: "Contact & Location",
      openMapsBtn: "Open in Google Maps",
      copyrightSince: "Est.",
      madeWith: "Made with ❤️ for your comfort",
    },
  },
};
