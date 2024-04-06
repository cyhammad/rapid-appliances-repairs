import Image from "next/image";
import Header from "@/components/headers/Header";
import CallHeader from "@/components/headers/CallHeader";
import MainBanner from "@/components/sections/home/MainBanner";
import QualitySection from "@/components/sections/home/QualitySection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import Footer from "@/components/sections/home/Footer";

export default function Home() {
  return (
    <body className="flex flex-col ">
      <CallHeader />
      <Header />
      <MainBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
      <Footer />
    </body>
  );
}
