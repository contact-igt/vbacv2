"use client";

import { useId, useState } from "react";

/**
 * Ported to the v2 LPS `FAQAccordion` + two-column layout: heading left,
 * hairline question rows right with a rose "+" that rotates open, first
 * item open by default.
 */
export function PageFAQ({
  eyebrow = "Before You Book",
  heading,
  faqs,
}: {
  eyebrow?: string;
  heading: string;
  faqs: readonly { q: string; a: string }[];
}) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-[100px] bg-paper py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1220px] gap-10 px-6 sm:px-8 lg:px-12 xl:grid-cols-[0.65fr_1.35fr] xl:gap-[90px]">
        <div className="max-w-[700px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
            {eyebrow}
          </p>
          <h2 className="title-section text-ink">
            {heading}
          </h2>
        </div>

        <div className="border-t border-ink/12">
          {faqs.map((item, index) => {
            const open = index === openIndex;
            return (
              <div key={item.q} className="border-b border-ink/12">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`${uid}-panel-${index}`}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    className="flex min-h-[70px] w-full items-center justify-between gap-4 py-[22px] text-left text-[0.95rem] font-semibold text-ink transition-colors hover:text-rose"
                  >
                    <span className="min-w-0 flex-1">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className={`grid h-[25px] w-[25px] shrink-0 place-items-center font-display text-2xl leading-none text-rose transition-transform duration-200 ${
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
                      className={`text-[0.9rem] leading-relaxed whitespace-pre-line text-muted ${
                        open ? "pr-8 pb-6" : ""
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
      </div>
    </section>
  );
}
