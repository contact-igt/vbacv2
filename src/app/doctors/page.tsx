import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/Container";
import { PageCTA } from "@/components/page/PageCTA";
import { EnquirySection } from "@/components/page/EnquirySection";
import { TeamAvatar } from "@/components/TeamAvatar";
import { site } from "@/lib/site";
import { team, getTeamMember } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet the Birthwave Care Team — Nungambakkam, Chennai",
  description:
    "The doctors and allied-care professionals behind The Birth Wave — obstetrics & gynaecology, pediatrics, fertility, pelvic health, lactation and emotional well-being, in Nungambakkam, Chennai.",
};

const founder = getTeamMember("santoshi-nandigam")!;
const clinical = team.filter((m) => m.group === "clinical");
const allied = team.filter((m) => m.group === "allied");

const connectedCare = [
  { label: "Pregnancy & Antenatal Care", href: "/pregnancy-antenatal-care" },
  { label: "Natural Birth", href: "/natural-birth" },
  { label: "Birth & VBAC", href: "/vbac" },
  { label: "Birth Preparation", href: "/birth-preparation" },
  { label: "Fertility", href: "/fertility-preconception" },
  { label: "Gynaecology", href: "/gynaecology" },
  { label: "Vaginismus & Pelvic Health", href: "/vaginismus" },
  { label: "Lactation", href: "/lactation" },
  { label: "Postpartum Care", href: "/postpartum-care" },
  { label: "Nutrition & Well-being", href: "/nutrition-emotional-wellbeing" },
  { label: "Newborn & Pediatric Care", href: "/newborn-pediatric-care" },
] as const;

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream py-16 md:py-20">
          <Container className="grid items-center gap-12 xl:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
                Our Care Team
              </p>
              <h1 className="mt-4 max-w-xl title-hero text-ink">
                Connected care, from one doctor to a whole team.
              </h1>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.6] text-muted">
                Birthwave brings obstetrics, pediatrics, fertility, pelvic health,
                lactation and emotional well-being together — so your care doesn&rsquo;t
                stop at one specialty.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#contact-form"
                  className="rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700"
                >
                  Book an Appointment
                </Link>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border bg-white px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-150 hover:border-brown hover:text-brown active:scale-[0.98]"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Editorial team composition — three verified portraits, not a
                generic illustration standing in for the whole team. */}
            <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[460px]">
              <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-[28px] bg-sky shadow-[0_16px_40px_rgba(97,62,55,0.18)]">
                <Image
                  src="/images/dr-santoshi-nandigam.png"
                  alt="Dr. Santoshi Nandigam"
                  fill
                  sizes="(min-width: 1280px) 320px, 60vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute right-0 top-0 h-[46%] w-[42%] overflow-hidden rounded-[24px] bg-blush shadow-[0_12px_30px_rgba(97,62,55,0.16)]">
                <Image
                  src="/images/birthwave/dr-bharathy.jpeg"
                  alt="Dr. Bharathy Kandasamy"
                  fill
                  sizes="(min-width: 1280px) 220px, 40vw"
                  className="object-cover object-[center_45%]"
                />
              </div>
              <div className="absolute bottom-0 right-0 h-[46%] w-[42%] overflow-hidden rounded-[24px] bg-pink shadow-[0_12px_30px_rgba(97,62,55,0.16)]">
                <Image
                  src="/images/birthwave/sheethal-sathya.png"
                  alt="Sheethal Sathya"
                  fill
                  sizes="(min-width: 1280px) 220px, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Founder feature */}
        <section className="bg-white py-16 md:py-20">
          <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
            <TeamAvatar member={founder} className="mx-auto h-[420px] w-full max-w-sm xl:h-[460px]" />
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
                Founder
              </p>
              <h2 className="mt-3 title-section text-ink">
                {founder.name}
              </h2>
              <p className="mt-1 text-[13.5px] font-medium text-muted">{founder.role}</p>
              {founder.credential && (
                <p className="mt-1 text-[13px] font-semibold text-link">{founder.credential}</p>
              )}
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
                {founder.bio}
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-7 inline-flex rounded-full bg-brown px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:bg-brown-600 active:scale-[0.98] active:bg-brown-700"
              >
                Book an Appointment
              </Link>
            </div>
          </Container>
        </section>

        {/* Clinical team */}
        <section className="bg-cream py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl title-section text-ink">
              Medical &amp; clinical team
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {clinical.map((member) => (
                <div key={member.slug} className="flex flex-col rounded-[22px] bg-white p-5">
                  <TeamAvatar member={member} className="aspect-square w-full" />
                  <p className="mt-4 font-display text-base font-bold text-ink">
                    {member.name}
                  </p>
                  {member.credential && (
                    <p className="mt-1 text-[13px] font-semibold text-link">
                      {member.credential}
                    </p>
                  )}
                  <p className="mt-1 flex-1 text-[15px] leading-relaxed text-muted">
                    {member.role}
                  </p>
                  {member.expertiseHref && (
                    <Link
                      href={member.expertiseHref}
                      className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-link"
                    >
                      Related care <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Allied care team */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <h2 className="max-w-xl title-section text-ink">
              Allied care team
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {allied.map((member) => (
                <div key={member.slug} className="flex flex-col rounded-[22px] bg-cream p-5">
                  <TeamAvatar member={member} className="aspect-square w-full" />
                  <p className="mt-4 font-display text-[15px] font-bold text-ink">
                    {member.name}
                  </p>
                  {member.credential && (
                    <p className="mt-1 text-[13px] font-semibold text-link">
                      {member.credential}
                    </p>
                  )}
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{member.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Connected care */}
        <section className="bg-brown py-16 text-white md:py-20">
          <Container>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-journey-eyebrow">
              One Team, Every Stage
            </p>
            <h2 className="mt-3 max-w-xl title-section text-white">
              How the team supports your care
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {connectedCare.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl bg-journey-card px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-journey-card/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <PageCTA
          heading="Ready to meet your care team?"
          body="Reach out by phone or WhatsApp, or send an enquiry and we'll match you with the right person."
        />

        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
