import { FadeUp } from "@/components/motion-primitives";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeUp className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--steel-soft)] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--steel)] max-w-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg text-[var(--steel-soft)] leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
