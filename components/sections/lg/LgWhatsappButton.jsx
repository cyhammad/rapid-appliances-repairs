"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const LgWhatsappButton = () => {
  return <button className="flex items-center gap-2 bg-[#A40033] rounded p-[0.85rem] text-white font-bold" onClick={() => window.open(`https://wa.me/${phoneNumber}`)}>
      Whatsapp Us
    </button>;
};

export default LgWhatsappButton;
