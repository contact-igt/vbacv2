import { Reveal } from "@/components/motion/Reveal";

export function WhoItsFor({
  heading = "Who this may be relevant for",
  points,
  id = "who-its-for",
}: {
  heading?: string;
  points: readonly string[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-[100px] bg-cream py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <h2 className="max-w-xl title-section text-ink">
          {heading}
        </h2>
        <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal
              key={point}
              as="li"
              delay={i * 60}
              className="flex items-start gap-3 rounded-[18px] border border-ink/10 bg-white/70 p-5 text-[15px] leading-relaxed text-ink/80"
            >
              <span
                className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose"
                aria-hidden="true"
              />
              {point}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
