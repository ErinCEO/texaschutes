import { business } from "@/lib/business";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function NapBlock({ variant = "footer" }: { variant?: "footer" | "card" }) {
  const open = business.hours.filter((h) => h.open && h.close);
  const closed = business.hours.filter((h) => !h.open);

  const containerCls =
    variant === "card"
      ? "rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm"
      : "";

  return (
    <address
      className={`${containerCls} not-italic text-sm leading-relaxed text-[var(--steel)]`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={business.legalName} />
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <MapPin className="h-4 w-4 mt-0.5 text-[var(--brand)] shrink-0" />
          <span
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="streetAddress">{business.streetAddress}</span>
            <br />
            <span itemProp="addressLocality">{business.addressLocality}</span>,{" "}
            <span itemProp="addressRegion">{business.addressRegion}</span>{" "}
            <span itemProp="postalCode">{business.postalCode}</span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Phone className="h-4 w-4 mt-0.5 text-[var(--brand)] shrink-0" />
          <a
            href={`tel:${business.phoneE164}`}
            itemProp="telephone"
            className="hover:text-[var(--brand)] font-medium"
          >
            {business.phone}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="h-4 w-4 mt-0.5 text-[var(--brand)] shrink-0" />
          <a
            href={`mailto:${business.email}`}
            itemProp="email"
            className="hover:text-[var(--brand)]"
          >
            {business.email}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="h-4 w-4 mt-0.5 text-[var(--brand)] shrink-0" />
          <span>
            {open[0].day}–{open[open.length - 1].day} · {open[0].open}–
            {open[0].close}
            <br />
            <span className="text-[var(--steel-soft)]">
              {closed.map((d) => d.day).join(" & ")}: Closed
            </span>
          </span>
        </li>
      </ul>
    </address>
  );
}
