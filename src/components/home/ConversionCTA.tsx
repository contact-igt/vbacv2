import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function ConversionCTA() {
  return (
    <section
      id="conversion-cta"
      className="relative scroll-mt-[100px] overflow-hidden bg-ink py-[100px] text-white"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-[250px] -right-[160px] h-[500px] w-[500px] rounded-full border border-white/15"
      />
      <Container className="relative z-[1] block md:flex md:items-end md:justify-between md:gap-10">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-blush uppercase">
            Need Help Choosing?
          </p>
          <h2 className="mt-4 max-w-[650px] title-section">
            Not sure which service to choose?
          </h2>
        </div>
        <div className="shrink-0">
          <p className="mt-5 mb-6 max-w-[390px] text-[16px] leading-relaxed text-white/70 md:mt-0">
            Tell us what you need help with. We&rsquo;ll guide you to the right
            appointment pathway.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#enquiry"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-rose-deep active:translate-y-0 active:scale-[0.98]"
            >
              Book Appointment
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/30 bg-transparent px-[23px] text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
