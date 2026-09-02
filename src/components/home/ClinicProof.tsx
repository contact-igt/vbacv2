import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * "Inside The Birthwave — A space designed to feel calm." Ported from the v2
 * LPS ClinicProofSection: one large panel beside two stacked panels, authentic
 * clinic photography, no text overlays.
 */
export function ClinicProof() {
  return (
    <section className="bg-sand py-16 md:py-[110px]">
      <Container>
        <div className="max-w-[700px]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            Inside The Birth Wave
          </p>
          <h2 className="mt-4 title-section text-ink">
            A space designed to feel calm.
          </h2>
        </div>

        <div className="mt-[50px] grid gap-[18px] md:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-3xl bg-rose md:min-h-[420px]">
            <Image
              src="/images/home/clinic-lounge.jpg"
              alt="The waiting lounge at The Birth Wave clinic, with soft lighting and a lit arched alcove"
              fill
              sizes="(min-width: 768px) 55vw, 92vw"
              className="object-cover"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-[18px] md:grid-cols-1 md:grid-rows-[1.169fr_1fr]">
            <Reveal className="relative min-h-[180px] overflow-hidden rounded-3xl bg-paper">
              <Image
                src="/images/home/clinic-signage-wall.jpg"
                alt="The Birth Wave wordmark backlit on the consultation wing wall"
                fill
                sizes="(min-width: 768px) 40vw, 45vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={90} className="relative min-h-[180px] overflow-hidden rounded-3xl bg-paper">
              <Image
                src="/images/home/clinic-consult-lounge.jpg"
                alt="Seating and consulting alcoves inside The Birth Wave clinic"
                fill
                sizes="(min-width: 768px) 40vw, 45vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
