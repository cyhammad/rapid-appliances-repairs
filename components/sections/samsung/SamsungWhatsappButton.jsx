"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungWhatsappButton = () => {
  return (
    <button
      className="flex w-fit items-center gap-2 rounded bg-black p-[0.85rem] px-4 text-sm font-medium text-white "
      onClick={() => window.open(`https://wa.me/${phoneNumber}`)}
    >
      Whatsapp: {phoneNumberShort}
    </button>
  );
};

export default SamsungWhatsappButton;
