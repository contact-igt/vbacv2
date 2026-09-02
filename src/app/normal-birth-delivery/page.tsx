import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("normal-birth-delivery")!;

export const metadata: Metadata = {
  title: "Normal Birth & Delivery Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Birth planning, childbirth education and labour preparation with Dr. Santoshi Nandigam — clinically flexible care that never treats caesarean birth as a failure.",
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
