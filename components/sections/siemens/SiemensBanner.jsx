"use client";

import SiemensBannerCallButton from "./SiemensBannerCallButton";
import SiemensWhatsappButton from "./SiemensWhatsappButton";

const SiemensBanner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/banner_img.webp')] bg-cover bg-fixed bg-[38%] bg-no-repeat md:bg-[88%] "></div>
      <div className="relative z-10 flex h-[63vh] items-center justify-center bg-siemens-bg/60 md:h-screen">
        <div className=" max-w-[78rem]  justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
          <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Siemens Service Center: Bringing you the best home appliance repair
            services
          </h2>
          <span className="text-sm text-[#a3acbd] sm:w-2/3  lg:leading-[1.75rem]">
            With our extensive knowledge, expertise, and commitment to customer
            satisfaction. We are dedicated to providing you with the highest
            quality repairs.
          </span>
          <div className="flex flex-col gap-2">
            <SiemensBannerCallButton />
            <SiemensWhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiemensBanner;
