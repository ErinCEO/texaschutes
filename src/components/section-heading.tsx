import { FadeUp } from "@/components/motion-primitives";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  index?: string;
  eyebrow: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const headingClass =
    tone === "dark"
      ? "text-white"
      : "text-[var(--ink)]";
  const eyebrowClass =
    tone === "dark"
      ? "text-[var(--copper)]"
      : "text-[var(--ink-soft)]/70";
  const descriptionClass =
    tone === "dark" ? "text-white/70" : "text-[var(--ink-soft)]";

  return (
    <FadeUp className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          className={`h-px w-10 ${
            tone === "dark" ? "bg-[var(--copper)]" : "bg-[var(--brand)]"
          }`}
        />
        <span className={`eyebrow ${eyebrowClass}`}>
          {index ? `(${index}) — ` : ""}
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-5 font-display font-semibold tracking-tight text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.02] max-w-4xl ${headingClass} ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${descriptionClass} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
