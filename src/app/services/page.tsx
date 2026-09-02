import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/page/PageHero";
import { PageCTA } from "@/components/page/PageCTA";
import { EnquirySection } from "@/components/page/EnquirySection";
import { services, supportingServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Pregnancy, Birth, Fertility & Newborn Care | The Birth Wave",
  description:
    "Every Birthwave service, from pregnancy and antenatal care through VBAC, fertility, vaginismus support and newborn care — doctor-led, in Nungambakkam, Chennai.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          heading="Every stage of care, under one roof."
          intro="Six focused care pathways, each with its own page — plus a wider range of supporting services available on request."
          accent="blue"
          image={{
            src: "/images/birthwave/hero3.png",
            alt: "Every stage of care at The Birth Wave",
          }}
        />

        <section className="bg-cream py-10">
          <Container>
            <Link
              href="/natural-birth"
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 transition-colors hover:border-brown sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
                  Not Sure Where To Start?
                </p>
                <h2 className="mt-2 font-display text-lg font-bold text-ink">
                  Natural Birth — a starting point for every birth pathway
                </h2>
                <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-muted">
                  Normal birth, VBAC, birth preparation and what happens if plans need to
                  change — all in one place.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 self-start text-[13.5px] font-semibold text-link sm:self-auto">
                Visit Natural Birth <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group flex flex-col rounded-[22px] border border-border bg-cream p-6 transition-colors hover:border-brown"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-lg font-bold text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[16px] leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-link">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-cream py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl title-section text-ink">
              Supporting services
            </h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">
              A wider range of care is available at Birthwave. Tell us what you need and
              we&rsquo;ll guide you to the right appointment.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {supportingServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/contact?service=${item.slug}`}
                    className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-brown"
                  >
                    {item.title}
                    <span className="text-[13px] font-semibold text-link">
                      Talk to Birthwave &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <PageCTA
          heading="Not sure which service to choose?"
          body="Tell us what you need help with. We'll guide you to the right appointment pathway."
        />

        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
