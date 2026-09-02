import Image from "next/image";
import { Container } from "@/components/Container";
import { TextLink } from "@/components/home/TextLink";

const trustPoints = ["Pregnancy & birth", "Women's wellness", "Newborn & pediatric"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex scroll-mt-[100px] items-center overflow-hidden bg-cream py-14 md:py-20 xl:min-h-[720px]"
    >
      {/* Oversized outline circle bleeding off the bottom-right corner. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[170px] -bottom-[280px] h-[540px] w-[540px] rounded-full border border-rose/20"
      />

      <Container className="relative grid items-center gap-[55px] xl:grid-cols-[0.92fr_1.08fr] xl:gap-[50px]">
        <div className="od-rise relative z-[2]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            Women&rsquo;s Health &bull; Pregnancy &bull; Newborn Care
          </p>
          <h1 className="mt-4 max-w-[650px] title-hero text-ink">
            Care that sees the whole woman &mdash; before, during and after birth.
          </h1>

          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-[13px] font-medium text-muted"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full border border-rose"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] text-muted">
            From fertility and pregnancy to birth preparation, postpartum recovery and
            newborn care, Birthwave brings your care journey together with clarity,
            warmth and clinical guidance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-[18px]">
            <a
              href="#conversion-cta"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-rose-deep hover:shadow-[0_12px_24px_rgba(202,149,133,0.34)] active:translate-y-0 active:scale-[0.98]"
            >
              Book an Appointment
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <TextLink href="#services">Explore Our Care</TextLink>
          </div>
        </div>

        {/* Layered visual: dominant arched photo, overlapping smaller photo,
            floating note card. */}
        <div className="od-rise relative h-[430px] [animation-delay:0.08s] sm:h-[540px] xl:h-[580px]">
          <div className="absolute top-0 right-0 h-[380px] w-[78%] overflow-hidden rounded-[120px_120px_18px_18px] shadow-[var(--shadow-od)] sm:right-[4%] sm:h-[530px] sm:w-[74%] sm:rounded-[180px_180px_22px_22px]">
            <Image
              src="/images/home/dr-santoshi-clinic.jpg"
              alt="Dr. Santoshi Nandigam at her consulting desk in The Birth Wave clinic"
              fill
              sizes="(min-width: 1280px) 560px, 90vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-[200px] w-[40%] overflow-hidden rounded-[18px_70px_18px_70px] border-[6px] border-cream shadow-[var(--shadow-od)] sm:left-[2%] sm:h-[280px] sm:w-[35%] sm:rounded-[22px_100px_22px_100px] sm:border-[9px]">
            <Image
              src="/images/home/clinic-exterior.jpg"
              alt="The Birth Wave clinic entrance in Nungambakkam, Chennai"
              fill
              sizes="(min-width: 1280px) 240px, 40vw"
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 bottom-4 max-w-[150px] rounded-2xl bg-white p-[13px] text-[11px] leading-[1.35] text-muted shadow-[var(--shadow-od)] sm:bottom-[52px] sm:max-w-[190px] sm:px-5 sm:py-[18px] sm:text-[12.5px]">
            <span className="mb-1 block font-display text-[12px] font-semibold tracking-[0.12em] text-rose uppercase">
              Your Care Journey
            </span>
            <strong className="mb-1 block font-display text-[16px] leading-[1.2] font-bold text-ink sm:text-[18px]">
              One place for every chapter
            </strong>
            Fertility &bull; Pregnancy &bull; Birth &bull; Postpartum &bull; Baby
          </div>
        </div>
      </Container>
    </section>
  );
}
