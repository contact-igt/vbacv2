import Image from "next/image";

/**
 * Image + copy + hairline bullet list band — ported from the v2 LPS design
 * pass (`FeatureBand`). Used where the design calls for a short checklist
 * rather than numbered principles.
 */
export function FeatureBand({
  eyebrow,
  heading,
  body,
  points,
  image,
  ctaLabel = "Talk to the team",
  ctaHref = "#contact-form",
}: {
  eyebrow: string;
  heading: string;
  body: string;
  points: readonly string[];
  image: { src: string; alt: string };
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1220px] items-center gap-14 px-6 sm:px-8 lg:px-12 xl:grid-cols-[0.9fr_1.1fr] xl:gap-[70px]">
        <div className="relative h-[330px] w-full overflow-hidden rounded-[100px_22px_100px_22px] shadow-[var(--shadow-od)] sm:h-[470px] sm:rounded-[170px_30px_30px_30px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            {eyebrow}
          </p>
          <h2 className="max-w-[580px] title-section text-ink">{heading}</h2>
          <p className="mt-6 mb-7 max-w-[480px] text-base leading-relaxed text-muted">
            {body}
          </p>
          <ul className="mb-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="border-t border-ink/10 py-3 text-[13px] text-ink"
              >
                <span aria-hidden="true" className="mr-2 text-rose">
                  ↗
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-rose px-6 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-deep active:scale-[0.98]"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
