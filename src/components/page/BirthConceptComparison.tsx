/**
 * Ported from the v2 LPS design pass. A short, explicit comparison between
 * Natural Birth (an approach to labour/birth) and Normal Vaginal Delivery
 * (the route of birth) — the two are related but not interchangeable.
 */
export function BirthConceptComparison({ className = "" }: { className?: string }) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
          Two related, different things
        </p>
        <h2 className="max-w-[640px] title-section text-ink">
          Natural Birth and Normal Vaginal Delivery aren&apos;t the same question.
        </h2>

        <div className="mt-10 grid gap-10 border-t border-ink/10 xl:grid-cols-2 xl:gap-16">
          <div className="border-b border-ink/10 py-7 xl:border-b-0 xl:border-r xl:pr-16">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-rose uppercase">
              An approach to labour and birth
            </p>
            <h3 className="mb-3 font-display text-2xl font-bold text-ink">Natural Birth</h3>
            <p className="text-[0.98rem] leading-relaxed text-muted">
              How you prepare for and experience labour — physiological progression, movement,
              breathing, relaxation, comfort measures and informed choice, with fewer routine
              interventions where clinically appropriate. It describes an approach, not which way
              your baby is born.
            </p>
          </div>
          <div className="py-7">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-rose uppercase">
              The route of birth
            </p>
            <h3 className="mb-3 font-display text-2xl font-bold text-ink">
              Normal Vaginal Delivery
            </h3>
            <p className="text-[0.98rem] leading-relaxed text-muted">
              Birth through the vagina rather than by Caesarean section. It may involve pain-relief
              options and other appropriate obstetric care depending on your preferences and
              clinical needs — it describes the route your baby is born, not the approach taken to
              get there.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-[720px] text-[0.98rem] leading-relaxed text-muted italic">
          Neither is a promise, and neither is the &ldquo;right&rdquo; choice for everyone. The
          approach that may be appropriate for you depends on your pregnancy, your preferences and
          your individual clinical circumstances — discuss this with your obstetrician.
        </p>
      </div>
    </section>
  );
}
