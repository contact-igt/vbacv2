import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/home/TextLink";

const services = [
  {
    title: "Pregnancy & Antenatal Care",
    description:
      "Routine and high touch pregnancy care with a clear plan for each trimester.",
    href: "/pregnancy-antenatal-care",
    span: "col-span-1 sm:col-span-4",
  },
  {
    title: "Fertility & Preconception",
    description: "Evaluation, counselling and planning before pregnancy.",
    href: "/fertility-preconception",
    span: "col-span-1 sm:col-span-4",
  },
  {
    title: "Normal Birth & VBAC Support",
    description:
      "Personalised discussions around birth preferences, eligibility and preparation.",
    href: "/normal-birth-delivery",
    span: "col-span-2 sm:col-span-4",
  },
  {
    title: "Gynaecology & Women’s Wellness",
    description: "Care for menstrual, hormonal and common gynaecological concerns.",
    href: "/gynaecology",
    span: "col-span-1 sm:col-span-6",
  },
  {
    title: "Vaginismus & Intimate Wellness",
    description:
      "Private, sensitive support for pain, fear and intimacy related concerns.",
    href: "/vaginismus",
    span: "col-span-1 sm:col-span-3",
  },
  {
    title: "Newborn & Pediatric Care",
    description:
      "Newborn review, vaccination guidance and continuing pediatric care.",
    href: "/newborn-pediatric-care",
    span: "col-span-1 sm:col-span-3",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-[100px] bg-sand py-16 md:py-[110px]">
      <Container>
        <div className="mb-9 block md:mb-[52px] xl:flex xl:items-end xl:justify-between xl:gap-[30px]">
          <div className="max-w-[700px]">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
              Care Across Every Chapter
            </p>
            <h2 className="mt-4 title-section text-ink">
              Specialist care, designed around your journey.
            </h2>
            <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-muted md:text-[17px]">
              Comprehensive, doctor-led clinical services tailored to your individual
              health and wellness needs.
            </p>
          </div>
          <TextLink href="#conversion-cta" className="mt-5 shrink-0 xl:mt-0">
            Find the right care
          </TextLink>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-12 sm:gap-[14px]">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 80}
              className={service.span}
            >
              <Link
                href={service.href}
                className="group flex h-full min-h-[215px] min-w-0 flex-col rounded-[20px] border border-border bg-white/70 p-5 transition-[transform,box-shadow,background,border-color] duration-300 hover:-translate-y-[5px] hover:border-transparent hover:bg-rose hover:shadow-[var(--shadow-od)] sm:min-h-[220px] sm:p-[27px]"
              >
                <span className="mb-auto font-display text-sm text-rose group-hover:text-white/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-[18px] mb-[9px] font-display text-[clamp(16px,4.6vw,20px)] leading-[1.1] font-bold tracking-[-0.01em] break-words text-ink group-hover:text-white sm:text-[24px]">
                  {service.title}
                </h3>
                <p className="text-[13px] leading-[1.5] text-muted group-hover:text-white/85 sm:text-sm">
                  {service.description}
                </p>
                <span className="mt-[19px] text-[13px] font-bold text-rose group-hover:text-white/85">
                  Explore service →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
