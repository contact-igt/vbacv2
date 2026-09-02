import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("nutrition-emotional-wellbeing")!;

export const metadata: Metadata = {
  title: "Nutrition & Emotional Well-being in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Personalized nutrition planning, pregnancy diet guidance, and empathetic psychological support at The Birth Wave in Chennai.",
};

export default function Page() {
  return (
    <>
      <Header />
      <ServiceLandingPage service={service} />
      <Footer />
    </>
  );
}
