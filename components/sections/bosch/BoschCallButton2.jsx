"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const BoschCallButton2 = () => {
  return (
    <button
      className="flex items-center gap-2 bg-[#007ac0] p-[0.85rem] text-white"
      oonClick={() => {
          window.open(`tel:${phoneNumber}`);
          gtag_report_conversion(`tel:${phoneNumber}`);
        }}

    >
      Call us now {phoneNumberShort}
    </button>
  );
};

export default BoschCallButton2;
