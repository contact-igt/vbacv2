import type { ReactNode } from "react";

/** Ported from the v2 LPS design pass. Rose eyebrow, fluid display heading,
 *  optional description. `tone="dark"` for use on dark bands. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`max-w-[700px] ${className}`}>
      <p
        className={`mb-4 text-xs font-semibold tracking-[0.16em] uppercase ${
          tone === "dark" ? "text-coral" : "text-rose"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`title-section ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-[580px] text-[1.05rem] leading-relaxed ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
