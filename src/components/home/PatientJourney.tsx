import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Find the care path that matches your concern.",
  },
  {
    n: "02",
    title: "Book",
    body: "Choose appointment or WhatsApp as the next step.",
  },
  {
    n: "03",
    title: "Consult",
    body: "Meet the right doctor with your context already understood.",
  },
  {
    n: "04",
    title: "Continue",
    body: "Receive follow up guidance and move into the next stage of care.",
  },
] as const;

const DOT_OFFSETS = ["0%", "33.33%", "66.66%", "100%"];

export function PatientJourney() {
  return (
    <section
      id="patient-journey"
      className="scroll-mt-[100px] bg-cream py-16 md:py-[110px]"
    >
      <Container>
        <div className="mb-[60px] block xl:flex xl:items-end xl:justify-between xl:gap-10">
          <div className="max-w-[700px]">
            <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
              From First Question To Follow Up
            </p>
            <h2 className="mt-4 title-section text-ink">
              A simpler care journey, with fewer gaps between steps.
            </h2>
          </div>
          <p className="mt-[18px] max-w-[320px] text-muted xl:mt-0">
            From initial guidance to treatment and post-care follow up, we support you
            every step of the way.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative mt-[30px] hidden h-px bg-border sm:block xl:mt-0"
        >
          {DOT_OFFSETS.map((left) => (
            <span
              key={left}
              className="absolute -top-1 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-rose first:translate-x-0 last:-translate-x-full"
              style={{ left }}
            />
          ))}
        </div>

        <ol className="grid gap-[26px] border-l border-border pl-[25px] sm:grid-cols-4 sm:gap-5 sm:border-l-0 sm:pt-8 sm:pl-0">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80}>
              <span className="font-display text-[18px] text-rose">{step.n}</span>
              <h3 className="mt-2.5 mb-[5px] font-display text-[21px] font-bold text-ink">
                {step.title}
              </h3>
              <p className="text-sm text-muted sm:max-w-[180px]">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
