"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const BoschCallButton2 = () => {
  return (
    <button
      className="flex items-center gap-2 bg-[#007ac0] p-[0.85rem] text-white"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      Call us now {phoneNumberShort}
    </button>
  );
};

export default BoschCallButton2;
