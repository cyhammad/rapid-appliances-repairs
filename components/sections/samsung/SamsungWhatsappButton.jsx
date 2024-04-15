"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungWhatsappButton = () => {
  return (
    <button
      className="flex w-fit min-w-[250px] items-center gap-2 rounded bg-blue-400 px-10 py-[0.85rem] text-sm font-medium text-white"
      onClick={() => window.open(`https://wa.me/${phoneNumber}`)}
    >
      Whatsapp: {phoneNumberShort}
    </button>
  );
};

export default SamsungWhatsappButton;
