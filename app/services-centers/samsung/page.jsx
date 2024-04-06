import SamsungAboutUsSection from "@/components/sections/samsung/SamsungAboutUsSection";
import SamsungBanner from "@/components/sections/samsung/SamsungBanner";
import SamsungCustomerService from "@/components/sections/samsung/SamsungCustomerService";
import SamsungFix from "@/components/sections/samsung/SamsungFix";
import SamsungFixedCallButton from "@/components/sections/samsung/SamsungFixedCallButton";
import SamsungServices from "@/components/sections/samsung/SamsungServices";
import React from "react";

const SamsungServiceCenterPage = () => {
  return (
    <div>
      <SamsungBanner />
      <SamsungAboutUsSection />
      <SamsungCustomerService />
      <SamsungFix />
      <SamsungServices />
    </div>
  );
};

export default SamsungServiceCenterPage;
