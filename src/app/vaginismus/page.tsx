import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("vaginismus")!;

export const metadata: Metadata = {
  title: "Vaginismus & Intimate Wellness in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Private, unhurried support for pain and fear around intimacy with Dr. Adithi Nair — a judgement-free first conversation, at your pace.",
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
