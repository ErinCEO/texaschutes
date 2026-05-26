import { business } from "@/lib/business";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function NapBlock({ variant = "footer" }: { variant?: "footer" | "card" }) {
  const open = business.hours.filter((h) => h.open && h.close);
  const closed = business.hours.filter((h) => !h.open);

  const containerCls =
    variant === "card"
      ? "rounded-2xl border border-[var(--line)] bg-white p-7"
      : "";

  return (
    <address
      className={`${containerCls} not-italic text-sm leading-relaxed text-[var(--ink)]`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={business.legalName} />
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
        <Item icon={MapPin} label="Address">
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
        </Item>
        <Item icon={Phone} label="Phone">
          <a
            href={`tel:${business.phoneE164}`}
            itemProp="telephone"
            className="font-medium hover:text-[var(--brand)]"
          >
            {business.phone}
          </a>
        </Item>
        <Item icon={Mail} label="Email">
          <a
            href={`mailto:${business.email}`}
            itemProp="email"
            className="hover:text-[var(--brand)]"
          >
            {business.email}
          </a>
        </Item>
        <Item icon={Clock} label="Hours">
          <span>
            {open[0].day}–{open[open.length - 1].day} · {open[0].open}–
            {open[0].close}
            <br />
            <span className="opacity-70">
              {closed.map((d) => d.day).join(" & ")}: Closed
            </span>
          </span>
        </Item>
      </div>
    </address>
  );
}

function Item({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 mt-1 text-[var(--brand)] shrink-0" />
      <div>
        <div className="eyebrow opacity-60 mb-1">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
