import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/home/TextLink";
import { TeamAvatar } from "@/components/TeamAvatar";
import { team, getTeamMember } from "@/lib/team";

const founder = getTeamMember("santoshi-nandigam")!;
const members = team.filter((m) => m.group !== "founder");

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-[100px] bg-paper py-16 md:py-[110px]">
      <Container>
        <div className="mb-[52px] max-w-[700px]">
          <p className="text-[13px] font-semibold tracking-[0.14em] text-rose uppercase">
            The people behind your care
          </p>
          <h2 className="mt-4 title-section text-ink">
            Meet a team that listens.
          </h2>
          <p className="mt-4 max-w-[580px] text-[16px] leading-relaxed text-muted md:text-[17px]">
            A multidisciplinary care team supporting women, mothers, babies and families.
          </p>
        </div>

        <div className="grid items-start gap-[55px] xl:grid-cols-[0.8fr_1.2fr] xl:gap-[70px]">
          <Reveal className="grid items-end gap-5 sm:grid-cols-2 sm:gap-[30px]">
            <div className="relative h-[360px] overflow-hidden rounded-[120px_20px_20px_20px] bg-sand sm:h-[410px]">
              <Image
                src="/images/team/dr-santoshi-nandigam.png"
                alt={`Portrait of ${founder.name}, Founder of The Birth Wave`}
                fill
                sizes="(max-width: 640px) 90vw, 260px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.14em] text-rose uppercase">
                Featured care team
              </p>
              <h3 className="mt-3 mb-2 font-display text-[26px] font-bold text-ink sm:text-[30px]">
                {founder.name}
              </h3>
              <p className="mb-[18px] text-sm text-muted">
                Founder &middot; Obstetrician &amp; Gynaecologist
              </p>
              <TextLink href="#conversion-cta">Book a consultation</TextLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-[22px]">
            {members.map((member, i) => (
              <Reveal key={member.slug} as="article" delay={(i % 3) * 80} className="group">
                <TeamAvatar
                  member={member}
                  focal="top"
                  className="mb-3.5 h-[180px] transition-transform duration-300 group-hover:-translate-y-1 sm:h-[210px]"
                />
                <h3 className="mb-0.5 font-display text-[19px] font-bold text-ink sm:text-[21px]">
                  {member.name}
                </h3>
                <p className="text-[13px] text-muted">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
