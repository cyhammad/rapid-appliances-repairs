import AboutSection from "@/components/sections/home/AboutSection";
import MainBanner from "@/components/sections/home/MainBanner";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import QualitySection from "@/components/sections/home/QualitySection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import SiemensBanner from "@/components/sections/siemens/SiemensBanner";
import SiemensServices from "@/components/sections/siemens/SiemensServices";

const SiemensServiceCenterPage = () => {
  return (
    <div className="my-24 flex flex-col">
      <SiemensBanner />
      <QualitySection />
      <AboutSection />
      <SiemensServices />
      <OurMissionSection />
    </div>
  );
};

export default SiemensServiceCenterPage;
