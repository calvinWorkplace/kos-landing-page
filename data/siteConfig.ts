/**
 * Single source of truth for all brand / contact / identity data.
 * Update here and every component picks it up automatically.
 */
export const SITE_CONFIG = {
  /** Display name variants */
  name: "KostExecutivePloso",
  namePrefix: "KostExecutive",
  nameSuffix: "Ploso",

  /** Tagline shown in Hero */
  tagline: "Kos Executive Strategis di Jantung Surabaya",

  /** Contact */
  waNumber: "6285103098764",          // for wa.me URLs  (no + or spaces)
  waNumberDisplay: "+62 851-0309-8764",
  email: "kostexecutiveploso@gmail.com",

  /** Founding year — used in Hero stats and Footer */
  yearEstablished: 2016,

  /** Address */
  address: {
    street: "Jl. Ploso 1 No.22",
    kelurahan: "Ploso",
    kecamatan: "Kec. Tambaksari",
    city: "Surabaya",
    province: "Jawa Timur",
    zip: "60133",
    /** Full single-line address */
    full: "Jl. Ploso 1 No.22, Ploso, Kec. Tambaksari, Surabaya, Jawa Timur 60133",
    /** Shorter version for badges/map labels */
    short: "Jl. Ploso 1 No.22, Surabaya",
    /** Google Maps deep link */
    mapsUrl:
      "https://maps.google.com/?q=Jl.+Ploso+1+No.22+Tambaksari+Surabaya+Jawa+Timur",
  },
} as const;
