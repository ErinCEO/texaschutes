import { business, services } from "@/lib/business";

const dayMap: Record<string, string> = {
  Monday: "Mo",
  Tuesday: "Tu",
  Wednesday: "We",
  Thursday: "Th",
  Friday: "Fr",
  Saturday: "Sa",
  Sunday: "Su",
};

export function LocalBusinessJsonLd() {
  const openingHours = business.hours
    .filter((h) => h.open && h.close)
    .map((h) => `${dayMap[h.day]} ${h.open}-${h.close}`);

  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${business.url}/#business`,
    name: business.legalName,
    image: `${business.url}/brand/texas-chutes-logo.png`,
    logo: `${business.url}/brand/texas-chutes-logo.png`,
    url: business.url,
    telephone: business.phoneE164,
    email: business.email,
    priceRange: "$$",
    foundingDate: business.founded,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHours,
    areaServed: business.serviceArea.map((region) => ({
      "@type": "State",
      name: region,
    })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
