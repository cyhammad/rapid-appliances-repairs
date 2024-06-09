"use client";

import { phoneNumber } from "@/utils/phoneNumber";
import { chevron } from "@/utils/svgs";

const TextCallButton = () => {
  return (
    <button
      href="/services-centers/bosch"
      className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
     onClick={() => {
          window.open(`tel:${phoneNumber}`);
          gtag_report_conversion(`tel:${phoneNumber}`);
        }}    >
      <span>Contact Us</span>
      {chevron}
    </button>
  );
};

export default TextCallButton;
