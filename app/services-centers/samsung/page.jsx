import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SamsungBanner from "@/components/sections/samsung/SamsungBanner";

const SamsungServiceCenterPage = () => {
  return (
    <div className="flex flex-col py-10">
      <SamsungBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default SamsungServiceCenterPage;
