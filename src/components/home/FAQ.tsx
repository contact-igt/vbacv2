"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

const faqs = [
  {
    q: "When should I first visit during pregnancy?",
    a: "As soon as you have a positive test or missed period — an early visit helps confirm dates and plan your antenatal schedule.",
  },
  {
    q: "Can I discuss normal birth or VBAC options with the doctor?",
    a: "Yes — birth preferences, including VBAC eligibility, are discussed as part of your antenatal visits.",
  },
  {
    q: "Does Birthwave support fertility and preconception concerns?",
    a: "Yes, fertility, preconception counselling and cycle guidance are part of our care pathways.",
  },
  {
    q: "Can I continue newborn and pediatric care after delivery?",
    a: "Yes — newborn review and continuing pediatric care are available after delivery.",
  },
] as const;

export function FAQ() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-[100px] bg-paper py-16 md:py-[110px]">
      <Container className="grid gap-10 md:gap-[55px] xl:grid-cols-[0.72fr_1.28fr] xl:gap-[100px]">
        <div className="max-w-[700px]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            Before You Book
          </p>
          <h2 className="mt-4 title-section text-ink">
            Questions patients often have before they book.
          </h2>
          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-muted md:text-[17px]">
            Have another question? Our care team will be happy to help.
          </p>
          <Link
            href="#enquiry"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-rose"
          >
            Contact Birthwave
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="border-t border-border">
          {faqs.map((item, index) => {
            const open = index === openIndex;
            return (
              <div key={item.q} className="border-b border-border">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${uid}-panel-${index}`}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex min-h-[70px] w-full items-center justify-between gap-4 py-[18px] text-left text-base font-bold text-ink transition-colors hover:text-rose"
                  >
                    <span className="min-w-0 flex-1">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`grid h-[27px] w-[27px] shrink-0 place-items-center font-display text-[27px] leading-none text-rose transition-transform duration-200 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`${uid}-panel-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-[15px] leading-relaxed text-muted ${
                        open ? "pr-[42px] pb-[22px]" : ""
                      }`}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
