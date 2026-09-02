/**
 * The dark rounded "continuum" panel — ported from the v2 LPS design pass
 * (`JourneyPathPanel`). Keeps Birthwave's fuller step copy (title + body)
 * inside the panel rather than v2's label-only steps.
 */
export function JourneySteps({
  eyebrow,
  heading,
  intro,
  steps,
  id = "journey",
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: readonly { title: string; body: string }[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-[100px] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className="rounded-[28px_70px_28px_70px] bg-[#3a2823] px-6 py-10 text-white sm:rounded-[34px_110px_34px_110px] sm:px-[42px] sm:py-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#e6c8be] uppercase">
            {eyebrow}
          </p>
          <h2 className="max-w-[620px] title-section">
            {heading}
          </h2>
          <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-white/70">{intro}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="border-l border-white/25 pl-4"
              >
                <b className="mb-2 block font-display text-sm font-semibold text-[#f3cfc6]">
                  {String(i + 1).padStart(2, "0")}
                </b>
                <h3 className="mb-1.5 font-display text-[17px] font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#eaded9]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
