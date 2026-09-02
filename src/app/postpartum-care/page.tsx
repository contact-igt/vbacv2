import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("postpartum-care")!;

export const metadata: Metadata = {
  title: "Postpartum Recovery & Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Comprehensive postpartum clinical review, lactation support, pelvic floor recovery, and emotional well-being care at The Birth Wave in Chennai.",
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
