import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    num: "01",
    title: "Medical Care",
    tags: "Obstetrics · Gynaecology · Fertility · Pediatrics",
    copy: "Clinical consultations and medical care appropriate to each stage of the journey.",
  },
  {
    num: "02",
    title: "Birth & Recovery Support",
    tags: "Childbirth Education · Lactation · Pelvic-Floor Therapy",
    copy: "Support to help women prepare for birth, breastfeeding and recovery.",
  },
  {
    num: "03",
    title: "Holistic Wellbeing",
    tags: "Nutrition · Psychology · Yoga · Strength & Conditioning",
    copy: "Support for physical and emotional wellbeing alongside appropriate medical care.",
  },
];

export function ApproachSection() {
  return (
    <section id="about" className="scroll-mt-[100px] bg-paper py-16 md:py-[110px]">
      <Container className="grid items-start gap-[38px] sm:gap-[55px] xl:grid-cols-[0.85fr_1.15fr] xl:gap-[100px]">
        <Reveal>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            The Birthwave Way
          </p>
          <h2 className="mt-4 max-w-[480px] title-section text-ink">
            Because every part of your wellbeing matters.
          </h2>
          <p className="mt-6 max-w-[480px] text-[16px] leading-relaxed text-muted md:text-[17px]">
            Pregnancy and women&rsquo;s health are not only about appointments and reports.
            Nutrition, movement, emotional wellbeing, preparation for birth, breastfeeding
            and recovery can all be part of the journey &mdash; that is why Birthwave brings
            different areas of care together around the woman.
          </p>
        </Reveal>

        <div className="mt-1.5 border-t border-border">
          {pillars.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 80}
              className="grid grid-cols-[63px_1fr] gap-5 border-b border-border py-[22px] sm:grid-cols-[85px_1fr]"
            >
              <b className="font-display text-2xl font-normal text-rose">{item.num}</b>
              <div>
                <h3 className="mb-[3px] text-[18px] font-semibold text-ink">{item.title}</h3>
                <p className="mb-1 text-[12px] font-semibold tracking-[0.02em] text-rose">
                  {item.tags}
                </p>
                <p className="text-[15px] text-muted">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
