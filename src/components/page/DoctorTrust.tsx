import { TeamAvatar } from "@/components/TeamAvatar";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import type { TeamMember } from "@/lib/team";

export function DoctorTrust({
  member,
  eyebrow = "Doctor Led, Women-Centred Care",
  heading,
  body,
  bullets,
  id = "doctor",
}: {
  member: TeamMember;
  eyebrow?: string;
  heading: string;
  body: string;
  bullets: readonly string[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-[100px] bg-white py-16 md:py-20">
      <Container className="grid items-center gap-12 xl:grid-cols-[420px_1fr] xl:gap-16">
        <Reveal>
          <div className="relative mx-auto h-[380px] w-full max-w-sm xl:h-[440px]">
            <TeamAvatar
              member={member}
              className="h-full w-full !rounded-[120px_20px_20px_20px]"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white p-4 text-center shadow-[0_8px_24px_rgba(46,36,33,0.08)]">
              <p className="font-display text-[15px] font-bold text-ink">{member.name}</p>
              <p className="mt-0.5 text-[13px] text-muted">
                {member.role.split(" · ").slice(0, 2).join(" · ")}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-rose">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl title-section text-ink whitespace-pre-line">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-muted">{body}</p>

            <ul className="mt-6 space-y-2.5">
              {bullets.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-[15px] font-medium text-ink/80"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#contact-form"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-rose px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-deep active:scale-[0.98]"
            >
              Book a Consultation with {member.name.split(" ").slice(0, 2).join(" ")}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
