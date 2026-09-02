import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("vbac")!;

export const metadata: Metadata = {
  title: "VBAC — Vaginal Birth After Caesarean in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Considering VBAC after a previous caesarean? Individual assessment and honest planning with Dr. Santoshi Nandigam — no promised eligibility or outcome.",
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
