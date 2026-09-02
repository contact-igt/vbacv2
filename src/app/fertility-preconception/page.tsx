import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("fertility-preconception")!;

export const metadata: Metadata = {
  title: "Fertility & Preconception Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Cycle guidance and preconception evaluation with Dr. Santoshi Nandigam — individual assessment before pregnancy planning, not generic advice.",
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
