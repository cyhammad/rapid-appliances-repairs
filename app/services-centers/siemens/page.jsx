import SiemensAboutSection from "@/components/sections/siemens/SiemensAboutSection";
import SiemensBanner from "@/components/sections/siemens/SiemensBanner";
import SiemensCustomerService from "@/components/sections/siemens/SiemensCustomerService";
import SiemensRepair from "@/components/sections/siemens/SiemensRepair";
import SiemensServices from "@/components/sections/siemens/SiemensServices";
import SiemensText from "@/components/sections/siemens/SiemensText";
import React from "react";

const SiemensServiceCenterPage = () => {
  return (
    <>
      <SiemensBanner />
      <SiemensAboutSection />
      <SiemensText />
      <SiemensCustomerService />
      <SiemensServices />
      <SiemensRepair />
    </>
  );
};

export default SiemensServiceCenterPage;
