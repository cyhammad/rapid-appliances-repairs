"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const BoschWhatsappButton = () => {
  return (
    <button
      className="flex items-center gap-2 bg-[#007ac0] p-[0.85rem] text-white"
      onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm looking for skilled professionals to diagnose and repair my home appliances. `;
                gtag_report_conversion(`tel:${phoneNumber}`);
                }}
    >
      Whatsapp: {phoneNumberShort}
    </button>
  );
};

export default BoschWhatsappButton;
