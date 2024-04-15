import BoschBanner from "@/components/sections/bosch/BoschBanner";
import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";

const BoschServiceCenterPage = () => {
  return (
    <div className="flex flex-col my-10">
      <BoschBanner />
      <QualitySection />
      <AboutSection />
      <ServicesSection />
      <OurMissionSection />
    </div>
  );
};

export default BoschServiceCenterPage;
