"use client";

import { phoneNumber } from "@/utils/phoneNumber";

const BoschCallButton = () => {
  return (
    <button
      className="fixed bottom-[12.5rem] right-[-3.2rem] z-50 flex w-fit rotate-[-90deg] cursor-pointer items-center gap-x-5 border border-[#007ac0] bg-white py-2 pl-5  pr-7 text-lg text-[#007ac0]"
     onClick={() => {
          window.open(`tel:${phoneNumber}`);
          gtag_report_conversion(`tel:${phoneNumber}`);
        }}

    >
      <span>Contact Us</span>
    </button>
  );
};

export default BoschCallButton;
