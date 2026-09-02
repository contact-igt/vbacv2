import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BirthDeliveryCarePage } from "@/components/birth-delivery-care/BirthDeliveryCarePage";

export const metadata: Metadata = {
  title: "Natural Birth & Delivery Care in Nungambakkam, Chennai – The Birth Wave",
  description:
    "Doctor-led natural birth preparation, labour guidance, and VBAC care with Dr. Santoshi Nandigam at The Birth Wave, Nungambakkam, Chennai.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <BirthDeliveryCarePage />
      </main>
      <Footer />
    </>
  );
}
