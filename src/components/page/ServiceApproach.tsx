import Image from "next/image";

/**
 * "The Birthwave approach" — ported to the v2 LPS `EditorialBand` layout:
 * left editorial column with numbered hairline principle rows, right column
 * an arched photo (the page's own hero image when available).
 */
export function ServiceApproach({
  eyebrow,
  heading,
  body,
  items,
  image,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  items: readonly { title: string; description: string }[];
  image?: { src: string; alt: string };
}) {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div
        className={`mx-auto grid w-full max-w-[1220px] items-center gap-14 px-6 sm:px-8 lg:px-12 ${
          image ? "xl:grid-cols-2 xl:gap-[90px]" : ""
        }`}
      >
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            {eyebrow}
          </p>
          <h2 className="max-w-[530px] title-section text-ink">
            {heading}
          </h2>
          <p className="mt-6 max-w-[520px] text-[1.02rem] leading-relaxed whitespace-pre-line text-muted">
            {body}
          </p>
          <div className="mt-8 border-t border-ink/10">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/10 py-4"
              >
                <span className="font-display text-lg font-bold text-rose">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[19px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-0.5 text-[13.5px] text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {image && (
          <div className="relative h-[330px] w-full overflow-hidden rounded-[100px_22px_100px_22px] shadow-[var(--shadow-od)] sm:h-[480px] sm:rounded-[140px_28px_140px_28px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
