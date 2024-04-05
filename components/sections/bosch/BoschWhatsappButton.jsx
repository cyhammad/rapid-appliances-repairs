"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const BoschWhatsappButton = () => {
  return (
    <button
      className="flex items-center gap-2 bg-[#007ac0] p-[0.85rem] text-white"
      onClick={() => window.open(`https://wa.me/${phoneNumber}`)}
    >
      Whatsapp: {phoneNumberShort}
    </button>
  );
};

export default BoschWhatsappButton;
