import { Suspense } from "react";
import { EnquiryForm } from "@/components/page/EnquiryForm";
import { site } from "@/lib/site";

// Shared wrapper around the one EnquiryForm implementation — every public
// page ends with this so the conversion path is identical everywhere.
// Layout ported from the v2 LPS `ConversionSection`: a blush field with an
// oversized outline circle, an editorial column beside the contained form card.
export function EnquirySection({
  eyebrow = "Begin your care journey",
  heading = "Send an enquiry",
  body = "Prefer to write ahead? Fill this in and continue on WhatsApp.",
  defaultService,
  id = "enquiry",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  defaultService?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-[100px] overflow-hidden bg-[#e8d9d1] py-16 md:py-24"
    >
      <div id="enquiry" className="absolute -top-[100px]" />
      <div id="contact-form" className="absolute -top-[100px]" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full border border-rose/30"
      />
      <div className="relative mx-auto grid w-full max-w-[1220px] items-start gap-12 px-6 sm:px-8 lg:px-12 xl:grid-cols-[1fr_0.9fr] xl:gap-[70px]">
        <div className="flex flex-col justify-center xl:pt-6">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            {eyebrow}
          </p>
          <h2 className="title-section text-ink">
            {heading}
          </h2>
          <p className="mt-5 max-w-[420px] text-[16px] leading-relaxed text-muted">{body}</p>
          <a
            href={site.phoneHref}
            className="group mt-7 inline-flex min-h-[48px] w-fit items-center justify-center gap-2.5 rounded-full bg-white px-6 text-sm font-semibold text-ink shadow-[0_8px_18px_rgba(202,149,133,0.2)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Call {site.phone}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <Suspense fallback={null}>
          <EnquiryForm defaultService={defaultService} />
        </Suspense>
      </div>
    </section>
  );
}
