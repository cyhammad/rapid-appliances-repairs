import SiemensAboutSection from "@/components/sections/siemens/SiemensAboutSection";
import SiemensBanner from "@/components/sections/siemens/SiemensBanner";
import SiemensMissionSection from "@/components/sections/siemens/SiemensMissionSection";
import SiemensQualitySection from "@/components/sections/siemens/SiemensQualitySection";
import SiemensServices from "@/components/sections/siemens/SiemensServices";

const SiemensServiceCenterPage = () => {
  return (
    <div className="my-24 flex flex-col">
      <SiemensBanner />
      <SiemensQualitySection />
      <SiemensAboutSection />
      <SiemensServices />
      <SiemensMissionSection />
    </div>
  );
};

export default SiemensServiceCenterPage;
