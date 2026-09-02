import { Container } from "@/components/Container";

const items = [
  { num: "01", title: "Women's Health", copy: "Care through changing stages" },
  { num: "02", title: "Pregnancy & Birth", copy: "Preparation, birth and recovery" },
  { num: "03", title: "Newborn & Child", copy: "Pediatric and vaccination care" },
];

export function TrustStrip() {
  return (
    <section className="od-rise relative z-[3] -mt-6 [animation-delay:0.16s] sm:-mt-[25px]">
      <Container>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-paper shadow-[var(--shadow-od-strip)] sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-center gap-4 border-b border-border px-5 py-[17px] leading-[1.6] last:border-b-0 sm:border-r sm:border-b-0 sm:px-7 sm:py-[22px] sm:last:border-r-0"
            >
              <span className="font-display text-2xl font-bold text-rose">{item.num}</span>
              <div>
                <strong className="block text-[15px] font-semibold text-ink">
                  {item.title}
                </strong>
                <span className="block text-[13px] text-muted">{item.copy}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
