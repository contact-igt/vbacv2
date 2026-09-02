"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { LineArtIllustration, type LineArtVariant } from "@/components/illustrations/LineArt";
import { site } from "@/lib/site";

const ACCENT = {
  rose: "text-rose",
  blue: "text-rose",
  coral: "text-coral",
} as const;

// Overlapping colour-field behind illustration-only heroes (no real photo),
// echoing the home hero's visual language.
const ACCENT_BLOBS = {
  rose: ["bg-rose/25", "bg-brown/10", "bg-coral/15"],
  blue: ["bg-rose/25", "bg-coral/15", "bg-brown/10"],
  coral: ["bg-coral/20", "bg-rose/20", "bg-brown/10"],
} as const;

const HERO_TRUST = [
  "Doctor-led care",
  "Pregnancy → birth → recovery",
  "Nungambakkam, Chennai",
];

/**
 * Inner-page hero — ported to the v2 LPS layered-photo layout: an oversized
 * outline circle bleeding off-frame, a dominant arched portrait with a smaller
 * overlapping photo, and a hairline trust row under the CTAs. Pages with no
 * photo keep the illustration + colour-field fallback unchanged.
 */
export function PageHero({
  eyebrow,
  heading,
  intro,
  accent = "rose",
  image,
  imageSide,
  illustration,
  badge,
  tag,
  tone = "light",
  bookHref = "#enquiry",
}: {
  eyebrow: string;
  heading: ReactNode;
  intro: string;
  accent?: keyof typeof ACCENT;
  image?: { src: string; alt: string; objectPosition?: string };
  imageSide?: { src: string; alt: string };
  illustration?: LineArtVariant;
  badge?: string;
  tag?: { heading: string; body: string };
  tone?: "light" | "dark";
  bookHref?: string;
}) {
  const dark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden pt-[112px] pb-[58px] md:pt-[140px] md:pb-[86px] xl:min-h-[720px] ${
        dark ? "bg-ink text-white" : "bg-cream"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[100px] -right-[29vw] h-[58vw] w-[58vw] rounded-full border border-rose/20"
      />

      <div className="relative mx-auto grid w-full max-w-[1220px] items-center gap-12 px-6 sm:px-8 lg:px-12 xl:grid-cols-[0.88fr_1.12fr] xl:gap-[60px]">
        <div className="max-w-[680px] xl:max-w-none">
          <p
            className={`mb-5 text-xs font-semibold tracking-[0.16em] uppercase ${
              dark ? "text-coral" : ACCENT[accent]
            }`}
          >
            {eyebrow}
          </p>
          <h1 className="max-w-[620px] title-hero">
            {heading}
          </h1>
          <p
            className={`mt-[22px] mb-8 max-w-[510px] text-[15px] leading-relaxed sm:text-lg ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {intro}
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <a
              href={bookHref}
              onClick={(e) => {
                if (bookHref.startsWith("#")) {
                  e.preventDefault();
                  const targetId = bookHref.substring(1);
                  const el =
                    document.getElementById(targetId) ||
                    document.getElementById("enquiry") ||
                    document.getElementById("contact-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full px-[23px] text-sm font-semibold shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                dark
                  ? "bg-white text-ink hover:bg-blush"
                  : "bg-rose text-white hover:bg-rose-deep"
              }`}
            >
              Book an Appointment
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
              className={`inline-flex min-h-[50px] items-center justify-center rounded-full border px-[23px] text-sm font-semibold transition-colors ${
                dark
                  ? "border-white/30 text-white hover:bg-white/10"
                  : "border-border bg-white/50 text-ink hover:border-rose hover:bg-white"
              }`}
            >
              Chat on WhatsApp
            </a>
          </div>
          <div
            className={`mt-[29px] flex flex-wrap gap-[9px] text-[11px] ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {HERO_TRUST.map((item, index) => (
              <span
                key={item}
                className={
                  index < HERO_TRUST.length - 1
                    ? `border-r pr-[9px] ${dark ? "border-white/25" : "border-ink/15"}`
                    : ""
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {image ? (
          <div className="relative mt-2 h-[380px] sm:h-[540px] xl:mt-0">
            <div
              className={`absolute top-0 right-0 overflow-hidden rounded-[130px_130px_20px_20px] shadow-[var(--shadow-od)] sm:rounded-[190px_190px_26px_26px] ${
                imageSide ? "h-[345px] w-[78%] sm:h-[510px]" : "h-[360px] w-[92%] sm:h-[530px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1280px) 560px, 90vw"
                priority
                className={`object-cover ${image.objectPosition ?? "object-center"}`}
              />
            </div>
            {imageSide && (
              <div
                className={`absolute bottom-0 left-0 h-[175px] w-[41%] overflow-hidden rounded-[20px_70px_20px_70px] border-[6px] shadow-[var(--shadow-od)] sm:h-[250px] sm:rounded-[28px_120px_28px_120px] sm:border-[9px] ${
                  dark ? "border-ink" : "border-cream"
                }`}
              >
                <Image
                  src={imageSide.src}
                  alt={imageSide.alt}
                  fill
                  sizes="(min-width: 1280px) 240px, 41vw"
                  className="object-cover"
                />
              </div>
            )}
            {badge && (
              <span className="absolute top-[18px] left-[2%] rounded-full bg-white px-3 py-2 text-[9px] font-semibold text-brown shadow-[var(--shadow-od)] sm:top-[26px] sm:text-[11px]">
                {badge}
              </span>
            )}
            {tag && (
              <div className="absolute right-0 bottom-[12px] max-w-[150px] rounded-2xl bg-white p-[13px] text-[10px] leading-[1.35] text-muted shadow-[var(--shadow-od)] sm:right-[1%] sm:bottom-[36px] sm:max-w-[190px] sm:p-[18px] sm:text-xs">
                <strong className="mb-1 block font-display text-base leading-[1.1] font-bold text-ink sm:text-xl">
                  {tag.heading}
                </strong>
                {tag.body}
              </div>
            )}
          </div>
        ) : (
          <div className="relative mx-auto flex h-[380px] w-full max-w-lg items-center justify-center overflow-hidden rounded-[120px_32px_32px_32px] bg-blush p-4 sm:h-[460px]">
            <div
              className={`absolute -left-8 top-10 h-52 w-52 rounded-full ${ACCENT_BLOBS[accent][0]}`}
              aria-hidden="true"
            />
            <div
              className={`absolute right-0 top-0 h-40 w-40 rounded-full ${ACCENT_BLOBS[accent][1]}`}
              aria-hidden="true"
            />
            <div
              className={`absolute bottom-0 right-6 h-48 w-48 rounded-full ${ACCENT_BLOBS[accent][2]}`}
              aria-hidden="true"
            />
            <LineArtIllustration
              variant={illustration ?? "pregnancy"}
              className="relative h-64 w-64 opacity-90 sm:h-72 sm:w-72"
            />
          </div>
        )}
      </div>
    </section>
  );
}
