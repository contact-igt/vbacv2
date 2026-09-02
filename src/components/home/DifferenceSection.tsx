import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    num: "01",
    title: "Patient-first, always",
    copy: "Space to ask, understand and make informed decisions.",
  },
  {
    num: "02",
    title: "Continuity of care",
    copy: "Support that connects pregnancy, birth, recovery and childhood.",
  },
  {
    num: "03",
    title: "Whole-person support",
    copy: "Guidance across nutrition, movement, wellbeing and counselling.",
  },
  {
    num: "04",
    title: "Warm, welcoming care",
    copy: "A calm environment designed around real family needs.",
  },
];

export function DifferenceSection() {
  return (
    <section className="bg-sky py-16 md:py-[110px]">
      <Container>
        <div className="max-w-[700px]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            The Birthwave difference
          </p>
          <h2 className="mt-4 title-section text-ink">
            More than appointments. Care for the whole experience.
          </h2>
        </div>

        <div className="mt-[54px] grid gap-[18px] sm:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 80}
              className="grid grid-cols-[45px_1fr] gap-4 border-t border-ink/20 py-[22px] sm:py-[30px]"
            >
              <span className="font-display text-[23px] text-rose">{item.num}</span>
              <div>
                <h3 className="mb-[5px] font-display text-[22px] font-bold text-ink">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
