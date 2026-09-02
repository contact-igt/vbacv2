import { Reveal } from "@/components/motion/Reveal";

export type CareGridItem = {
  number: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  feature?: boolean;
};

/**
 * Ported from the v2 LPS design pass.
 * - `layout="mosaic"` (default): a feature card, permanently rose-filled,
 *   spanning two rows beside a grid of smaller cards.
 * - `layout="even"`: a plain 3-up grid — every card the same size, white by
 *   default, filling rose with light text on hover.
 */
export function CareGrid({
  items,
  layout = "mosaic",
}: {
  items: CareGridItem[];
  layout?: "mosaic" | "even";
}) {
  const even = layout === "even";
  return (
    <div
      className={`grid gap-2.5 sm:gap-[14px] ${
        even
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-[1.25fr_0.75fr_0.75fr]"
      }`}
    >
      {items.map((item, i) => {
        // In the even grid every card looks and behaves the same: white,
        // turning rose with light text on hover.
        const solidRose = item.feature && !even;

        const cardClass = solidRose
          ? "col-span-2 min-h-[240px] rounded-[60px_22px_22px_22px] bg-rose text-white sm:col-span-1 sm:min-h-[440px] sm:rounded-[70px_28px_28px_28px] sm:[grid-row:span_2]"
          : `col-span-1 min-h-[200px] border border-ink/10 bg-white/70 transition-colors hover:border-rose hover:bg-rose ${
              even ? "sm:min-h-[230px]" : "sm:min-h-[225px]"
            }`;

        return (
          <Reveal
            key={item.title}
            as="article"
            delay={(i % 3) * 60}
            className={`group/card flex flex-col rounded-[22px_22px_8px_22px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-od)] sm:p-7 ${cardClass}`}
          >
            <span
              className={`font-display text-[13px] font-semibold ${
                solidRose ? "text-white/85" : "text-rose group-hover/card:text-white/85"
              }`}
            >
              {item.number}
            </span>
            <h3
              className={`mt-[18px] mb-[9px] font-display text-[20px] leading-[1.15] font-bold tracking-[-0.03em] sm:text-[24px] ${
                solidRose ? "" : "text-ink group-hover/card:text-white"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`flex-1 text-[13px] leading-[1.55] ${
                solidRose
                  ? "text-white/85"
                  : "text-muted group-hover/card:text-white/90"
              }`}
            >
              {item.description}
            </p>
            {item.linkLabel && (
              <a
                href={item.href ?? "#contact-form"}
                className={`group/link mt-auto pt-[22px] text-xs font-semibold ${
                  solidRose ? "text-white" : "text-rose group-hover/card:text-white"
                }`}
              >
                {item.linkLabel}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  →
                </span>
              </a>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
