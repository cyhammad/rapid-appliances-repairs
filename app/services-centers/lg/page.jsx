import AboutSection from "@/components/sections/home/AboutSection";
import OurMissionSection from "@/components/sections/home/OurMissionSection";
import { LgBanner } from "@/components/sections/lg/LgBanner";
import LgQualitySection from "@/components/sections/lg/LgQualitySection";
import LgServices from "@/components/sections/lg/LgServices";

const LgServiceCenterPage = () => {
  return (
    <div className="flex flex-col">
      <LgBanner company="Lg"/>
      <LgQualitySection />
      <AboutSection />
      <LgServices />
      <OurMissionSection />
    </div>
  );
};

export default LgServiceCenterPage;
