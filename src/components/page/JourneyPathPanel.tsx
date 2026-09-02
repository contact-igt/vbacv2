export type PathStep = { number: string; label: string };

/**
 * The dark rounded "continuum" bar shown directly under the hero — ported
 * verbatim from the v2 LPS design pass (`JourneyPathPanel`).
 */
export function JourneyPathPanel({
  eyebrow,
  label,
  steps,
}: {
  eyebrow: string;
  label: string;
  steps: readonly PathStep[];
}) {
  return (
    <section className="pb-12 md:pb-20">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-9 rounded-[24px_70px_24px_70px] bg-[#3a2823] px-5 py-6 text-white sm:rounded-[34px_110px_34px_110px] sm:px-[38px] sm:py-7 xl:grid-cols-[1.1fr_2fr]">
          <div className="font-display text-[13px] leading-tight font-semibold tracking-[-0.02em]">
            <span className="mb-1.5 block font-body text-[11px] font-normal tracking-[0.06em] text-[#e6c8be] uppercase">
              {eyebrow}
            </span>
            {label}
          </div>
          <div className="flex gap-5 overflow-x-auto pb-1 sm:grid sm:grid-cols-5 sm:gap-2.5 sm:overflow-visible sm:pb-0">
            {steps.map((step) => (
              <div
                key={step.number}
                className="min-w-[112px] border-l border-white/25 pl-[15px] sm:min-w-0"
              >
                <b className="mb-2 block font-display text-xs font-semibold text-[#f3cfc6]">
                  {step.number}
                </b>
                <span className="text-[13px] text-[#eaded9]">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
