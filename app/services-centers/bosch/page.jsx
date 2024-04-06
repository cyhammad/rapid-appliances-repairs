import BoschAboutSection from "@/components/sections/bosch/BoschAbout";
import BoschBanner from "@/components/sections/bosch/BoschBanner";
import BoschCustomerService from "@/components/sections/bosch/BoschCustomerService";
import BoschServices from "@/components/sections/bosch/BoschServices";
import Image from "next/image";

const BoschServiceCenterPage = () => {
  return (
    <div>
      <BoschBanner />
      <BoschAboutSection />
      <BoschCustomerService />
      <BoschServices />
    </div>
  );
};

export default BoschServiceCenterPage;
