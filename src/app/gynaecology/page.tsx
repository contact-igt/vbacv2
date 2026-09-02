import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceLandingPage } from "@/components/service/ServiceLandingPage";
import { getService } from "@/lib/services";

const service = getService("gynaecology")!;

export const metadata: Metadata = {
  title: "Gynaecology & Women’s Wellness in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Comprehensive, compassionate gynaecological care for menstrual health, PCOS, pelvic wellness, and routine checkups at The Birth Wave in Chennai.",
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
