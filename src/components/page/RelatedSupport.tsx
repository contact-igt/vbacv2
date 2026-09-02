import Link from "next/link";
import { services, type ServiceContent } from "@/lib/services";

/**
 * Related / connected care — ported to the v2 LPS `RelatedCareBand`: a dark
 * band with a sticky editorial column beside hairline link rows.
 */
export function RelatedSupport({
  currentSlug,
  connectedCare,
}: {
  currentSlug: string;
  connectedCare?: ServiceContent["connectedCare"];
}) {
  const cards = connectedCare
    ? connectedCare.cards
    : services
        .filter((s) => s.slug !== currentSlug)
        .slice(0, 3)
        .map((s) => ({
          title: s.title,
          description: s.shortDescription,
          href: `/${s.slug}`,
          ctaText: "Learn more",
        }));

  const eyebrow = connectedCare?.eyebrow ?? "Related care";
  const heading = connectedCare?.heading ?? "Related Birthwave support";
  const intro =
    connectedCare?.intro ??
    "Care, preparation and ongoing support, connected in one journey.";

  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto grid w-full max-w-[1220px] gap-12 px-6 sm:px-8 lg:px-12 xl:grid-cols-[0.75fr_1.25fr] xl:gap-[90px]">
        <div className="xl:sticky xl:top-[120px] xl:self-start">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-coral uppercase">
            {eyebrow}
          </p>
          <h2 className="title-section">
            {heading}
          </h2>
          <p className="my-6 max-w-[390px] text-[15px] leading-relaxed text-white/70">{intro}</p>
          <Link
            href="#contact-form"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-blush"
          >
            Talk to the team
          </Link>
        </div>

        <div className="border-t border-white/20">
          {cards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="grid grid-cols-[1fr_auto] items-start gap-4 border-b border-white/20 py-7 transition-[padding] duration-200 hover:pl-2.5"
            >
              <div>
                <h3 className="font-display text-[24px] leading-[1.15] font-semibold sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-[7px] max-w-[500px] text-sm text-white/70">{item.description}</p>
              </div>
              <span aria-hidden="true" className="text-2xl text-coral">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
