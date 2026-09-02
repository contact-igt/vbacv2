import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("birth-preparation")!;

export const metadata: Metadata = {
  title: "Birth Preparation & Childbirth Education in Chennai – The Birth Wave",
  description:
    "Comprehensive birth preparation, birthing position practice, labour guidance, and birth partner readiness with DONA-certified birth doulas at The Birth Wave.",
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
