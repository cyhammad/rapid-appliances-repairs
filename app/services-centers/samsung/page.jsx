import AboutSection from "@/components/sections/home/AboutSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";

const SamsungServiceCenterPage = () => {
  return (
    <div className="flex flex-col py-10">
      <MainBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default SamsungServiceCenterPage;
