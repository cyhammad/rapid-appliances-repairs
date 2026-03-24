"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const LgWhatsappButton = () => {
  return <button className="flex items-center gap-2 bg-[#A40033] rounded p-[0.85rem] text-white font-bold" onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm looking for skilled professionals to diagnose and repair my home appliances. `;
                gtag_report_conversion(`tel:${phoneNumber}`);
                }}>
      Whatsapp Us
    </button>;
};

export default LgWhatsappButton;
