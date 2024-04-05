"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungWhatsappButton = () => {
  return <button className="flex w-fit items-center gap-2 bg-black font-medium rounded-3xl text-sm p-[0.85rem] px-4 text-white " onClick={() => window.open(`https://wa.me/${phoneNumber}`)}>
      Whatsapp: {phoneNumberShort}
    </button>;
};

export default SamsungWhatsappButton;
