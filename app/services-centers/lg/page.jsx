import LgBanner from "@/components/sections/lg/LgBanner";
import LgServices from "@/components/sections/lg/LgServices";
import LgAbout from "@/components/sections/lg/LgAbout";
import LgCallButton from "@/components/sections/lg/LgCallButton";
import LgWhatsappButton from "@/components/sections/lg/LgWhatsappButton";
import LgCustomerService from "@/components/sections/lg/LgCustomerService";

const LgServiceCenterPage = () => {
  return (
    <div>
      <LgBanner />
      <LgServices />
      <LgCustomerService/>
      <LgAbout />
    </div>
  );
};

export default LgServiceCenterPage;
