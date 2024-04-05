"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const LgCallButton = () => {
  return <button className="flex items-center gap-2 bg-[#A40033] p-[0.85rem] rounded font-bold text-white" onClick={() => window.open(`tel:${phoneNumber}`)}>
      Call us: {phoneNumberShort}
    </button>;
};

export default LgCallButton;
