import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("newborn-pediatric-care")!;

export const metadata: Metadata = {
  title: "Newborn, Pediatric & Vaccination Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Newborn review, vaccination guidance and continuing pediatric care with the same team that saw you through pregnancy and birth.",
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
