import { site } from "@/lib/site";

/**
 * CTA band — ported to the v2 LPS dark-section styling with an oversized
 * outline circle. Sits before the blush enquiry form so the two conversion
 * sections stay visually distinct.
 */
export function PageCTA({
  eyebrow = "Ready When You Are",
  heading,
  body,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full border border-white/15"
      />
      <div className="relative mx-auto flex w-full max-w-[1220px] flex-col items-start justify-between gap-8 px-6 sm:px-8 lg:px-12 xl:flex-row xl:items-center">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-coral uppercase">
            {eyebrow}
          </p>
          <h2 className="title-section">
            {heading}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3.5">
          <a
            href="#enquiry"
            className="rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-blush active:scale-[0.98]"
          >
            Book an Appointment
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
          <a
            href={site.phoneHref}
            className="rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call: {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
