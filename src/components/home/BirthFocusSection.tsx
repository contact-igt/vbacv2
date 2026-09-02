import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const focusItems = [
  {
    num: "01",
    title: "Antenatal & Pregnancy Care",
    copy: "Support through each stage of pregnancy.",
    href: "/pregnancy-antenatal-care",
  },
  {
    num: "02",
    title: "Natural Birth",
    copy: "Preparing for an informed, low-intervention experience where appropriate.",
    href: "/natural-birth",
  },
  {
    num: "03",
    title: "Normal Birth & Delivery",
    copy: "Supportive care for vaginal birth based on individual clinical needs.",
    href: "/normal-birth-delivery",
  },
  {
    num: "04",
    title: "VBAC Counselling",
    copy: "Understand your options after a previous Caesarean.",
    href: "/vbac",
  },
];

export function BirthFocusSection() {
  return (
    <section
      id="birth-focus"
      className="scroll-mt-[100px] bg-ink py-16 text-white md:py-[110px]"
    >
      <Container className="grid items-start gap-[55px] xl:grid-cols-[1.1fr_0.9fr] xl:gap-[90px]">
        <div className="static xl:sticky xl:top-[130px]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            Your birth, your choices
          </p>
          <h2 className="mt-4 max-w-[510px] title-section">
            Supported with care.
          </h2>
          <p className="my-6 max-w-[410px] text-[15px] text-white/70">
            We help you understand your options and prepare for a safe, informed birth
            experience based on your individual clinical needs.
          </p>
          <a
            href="#conversion-cta"
            className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-rose px-[23px] text-sm font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-rose-deep"
          >
            Talk to our team
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        <div className="border-t border-white/20">
          {focusItems.map((item, i) => (
            <Reveal
              key={item.num}
              as="div"
              delay={i * 70}
              className="border-b border-white/20"
            >
              <Link
                href={item.href}
                className="group grid grid-cols-[32px_1fr_auto] items-start gap-2.5 py-[27px] sm:grid-cols-[48px_1fr_auto] sm:gap-[18px]"
              >
                <span className="font-display text-[22px] text-rose">{item.num}</span>
                <div className="min-w-0">
                  <h3 className="mb-1.5 font-display text-[22px] font-bold sm:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="max-w-[440px] text-[14px] text-white/65 sm:text-[15px]">
                    {item.copy}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl text-rose transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
