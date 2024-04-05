"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungWhatsappButton = () => {
  return <button className="flex w-fit items-center gap-2 bg-slate-500 p-[0.85rem] text-white font-bold rounded" onClick={() => window.open(`https://wa.me/${phoneNumber}`)}>
      Whatsapp: {phoneNumberShort}
    </button>;
};

export default SamsungWhatsappButton;
