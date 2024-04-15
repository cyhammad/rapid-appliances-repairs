import AboutSection from "@/components/sections/home/AboutSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";

const BoschServiceCenterPage = () => {
  return (
    <div className="flex flex-col my-10">
      <MainBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default BoschServiceCenterPage;
