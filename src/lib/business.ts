export const business = {
  legalName: "Texas Chutes, LLC",
  name: "Texas Chutes",
  tagline: "Trash, recycle, and linen chute experts serving the South.",
  description:
    "Texas Chutes is a family-owned chute service company installing, repairing, and inspecting trash, recycling, and linen chute systems for commercial and high-rise properties across the Gulf South.",
  // TODO: confirm correct unit number with client (home page lists Unit A, contact page lists Unit C)
  streetAddress: "14812 S. Access Road",
  addressLocality: "Canyon Lake",
  addressRegion: "TX",
  postalCode: "78133",
  addressCountry: "US",
  phone: "(830) 964-3102",
  phoneE164: "+18309643102",
  email: "info@texaschutes.com",
  url: "https://texaschutes.com",
  hours: [
    { day: "Monday", open: "08:00", close: "16:30" },
    { day: "Tuesday", open: "08:00", close: "16:30" },
    { day: "Wednesday", open: "08:00", close: "16:30" },
    { day: "Thursday", open: "08:00", close: "16:30" },
    { day: "Friday", open: "08:00", close: "16:30" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ],
  serviceArea: ["Texas", "Louisiana", "Oklahoma", "Arkansas", "Tennessee", "Georgia"],
  founded: "2013",
  geo: { latitude: 29.8788, longitude: -98.2589 },
  social: {
    // placeholders — fill in when client supplies handles
    facebook: "",
    linkedin: "",
  },
} as const;

export const services = [
  {
    slug: "installations",
    title: "New Chute Installations",
    blurb:
      "Turn-key trash, recycling, and linen chute systems for high-rises, hospitals, hotels, and multifamily projects.",
  },
  {
    slug: "repairs",
    title: "Repairs & Maintenance",
    blurb:
      "Door replacements, latch and spring rebuilds, discharge door service, fusible-link checks, and full preventative maintenance.",
  },
  {
    slug: "products",
    title: "Compactors & Odor Control",
    blurb:
      "Authorized provider of Midland Chutes, Century Chutes, and Precision Machinery / International Dynetics compactors.",
  },
  {
    slug: "projects",
    title: "NFPA-82 Annual Inspections",
    blurb:
      "Complimentary floor-by-floor inspections with written repair proposals, so your building stays code-compliant.",
  },
] as const;
