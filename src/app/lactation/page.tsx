import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("lactation")!;

export const metadata: Metadata = {
  title: "Lactation & Breastfeeding Support in Chennai – The Birth Wave",
  description:
    "Expert lactation counselling, latch assistance, positioning, and breastfeeding support with certified lactation specialists at The Birth Wave.",
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
