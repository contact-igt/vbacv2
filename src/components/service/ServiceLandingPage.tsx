import { PageHero } from "@/components/page/PageHero";
import { WhoItsFor } from "@/components/page/WhoItsFor";
import { DoctorTrust } from "@/components/page/DoctorTrust";
// import { JourneySteps } from "@/components/page/JourneySteps"; // hidden per request
import { ServiceApproach } from "@/components/page/ServiceApproach";
import { VideoExperience } from "@/components/home/VideoExperience";
import { RelatedSupport } from "@/components/page/RelatedSupport";
import { PageFAQ } from "@/components/page/PageFAQ";
import { PageCTA } from "@/components/page/PageCTA";
import { EnquirySection } from "@/components/page/EnquirySection";
import { SectionHeading } from "@/components/page/SectionHeading";
import { CareGrid } from "@/components/page/CareGrid";
import { JourneyPathPanel } from "@/components/page/JourneyPathPanel";
import { BirthConceptComparison } from "@/components/page/BirthConceptComparison";
import { FeatureBand } from "@/components/page/FeatureBand";
import type { ServiceContent } from "@/lib/services";
import { getTeamMember, team } from "@/lib/team";

function parsePoint(point: string) {
  const separatorMatch = point.match(/^(.*?)\s*(?:—|–|-|:)\s+(.*)$/);
  if (separatorMatch && separatorMatch[1].length < 60) {
    return {
      title: separatorMatch[1].trim(),
      description: separatorMatch[2].trim(),
    };
  }
  return {
    title: null,
    description: point.trim(),
  };
}

// Shared structure for all priority landing pages (patient-intent hero →
// explanation → who it's for → doctor trust → journey → related support →
// FAQ → CTA → form). Per-page copy, imagery and accent color come from
// lib/services.ts so pages share a system without being visual clones.
export function ServiceLandingPage({
  service,
  isAdLanding = false,
}: {
  service: ServiceContent;
  isAdLanding?: boolean;
}) {
  const expert = getTeamMember(service.expertSlug) ?? team[0];

  return (
    <main>
      <PageHero
        eyebrow={service.hero.eyebrow}
        heading={service.hero.heading}
        intro={service.hero.intro}
        accent={service.accent}
        image={service.image}
        imageSide={service.imageSide}
        illustration={service.illustration}
        badge={service.hero.badge}
        tag={service.hero.tag}
      />

      <VideoExperience />

      {service.continuum && (
        <JourneyPathPanel
          eyebrow={service.continuum.eyebrow}
          label={service.continuum.label}
          steps={service.continuum.steps}
        />
      )}

      <section id="care-overview" className="scroll-mt-[100px] bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Care & Support"
            title={service.explanation.heading}
            description={service.explanation.body}
          />
          <div className="mt-12">
            <CareGrid
              items={service.explanation.points.map((point, index) => {
                const { title, description } = parsePoint(point);
                return {
                  number: String(index + 1).padStart(2, "0"),
                  title: title ?? description,
                  description: title ? description : "",
                  feature: index === 0,
                };
              })}
            />
          </div>
        </div>
      </section>

      {service.showBirthComparison && <BirthConceptComparison className="bg-sand" />}

      {service.featureBand && (
        <FeatureBand
          eyebrow={service.featureBand.eyebrow}
          heading={service.featureBand.heading}
          body={service.featureBand.body}
          points={service.featureBand.points}
          image={service.featureBand.image}
        />
      )}

      {service.whoItsFor && service.whoItsFor.length > 0 && (
        <WhoItsFor points={service.whoItsFor} />
      )}

      {/* "Pregnancy Journey" steps section — hidden on website + landing pages per request
      <JourneySteps
        eyebrow={service.journey.eyebrow}
        heading={service.journey.heading}
        intro={service.journey.intro}
        steps={service.journey.steps}
      />
      */}

      <DoctorTrust
        member={expert}
        heading={service.doctorTrust.heading}
        body={service.doctorTrust.body}
        bullets={service.doctorTrust.bullets}
      />

      {service.approach && (
        <ServiceApproach
          eyebrow={service.approach.eyebrow}
          heading={service.approach.heading}
          body={service.approach.body}
          items={service.approach.items}
          image={service.approach.image ?? service.image}
        />
      )}

      {!isAdLanding && (
        <RelatedSupport
          currentSlug={service.slug}
          connectedCare={service.connectedCare}
        />
      )}

      <PageFAQ heading={`Questions about ${service.title}`} faqs={service.faqs} />

      <PageCTA heading={service.cta.heading} body={service.cta.body} />

      <EnquirySection defaultService={service.slug} />
    </main>
  );
}
