"use client";

import SiemensBannerCallButton from "./SiemensBannerCallButton";
import SiemensWhatsappButton from "./SiemensWhatsappButton";

const SiemensBanner = () => {
  return (
    <div className="relative z-0 h-[600px] w-full bg-[url('/banner_img.webp')] bg-cover bg-no-repeat sm:h-screen">
      <div className="absolute inset-0 flex justify-center bg-siemens-bg/70">
        <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
          <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Siemens Service Center: Bringing you the best home appliance repair
            services
          </h2>
          <span className="text-sm sm:w-2/3 lg:leading-[1.75rem]">
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
