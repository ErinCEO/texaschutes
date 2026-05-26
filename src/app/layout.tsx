import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LocalBusinessJsonLd } from "@/components/schema-jsonld";
import { business } from "@/lib/business";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.legalName} — Trash, Recycle & Linen Chute Specialists`,
    template: `%s · ${business.legalName}`,
  },
  description: business.description,
  keywords: [
    "trash chute repair",
    "linen chute installation",
    "recycle chute",
    "compactor repair",
    "NFPA-82 inspection",
    "Midland Chutes",
    "Canyon Lake TX",
  ],
  openGraph: {
    type: "website",
    siteName: business.legalName,
    title: `${business.legalName} — Trash, Recycle & Linen Chute Specialists`,
    description: business.description,
    locale: "en_US",
    url: business.url,
  },
  twitter: {
    card: "summary_large_image",
    title: business.legalName,
    description: business.description,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
