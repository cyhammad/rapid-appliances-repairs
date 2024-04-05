"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SiemensBannerCallButton = () => {
  return (
    <button
      className="z-50 w-fit cursor-pointer bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-100 px-5 py-4 font-bold text-black hover:bg-gradient-to-r hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-50 sm:px-10 sm:py-5 sm:text-lg"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      Call Us Now: {phoneNumberShort}
    </button>
  );
};

export default SiemensBannerCallButton;
