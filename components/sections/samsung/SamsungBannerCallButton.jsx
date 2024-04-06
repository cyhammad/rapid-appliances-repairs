"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungBannerCallButton = () => {
  return (
    <button
      className="flex w-fit items-center gap-2 rounded bg-black p-[0.85rem] text-sm font-medium text-white"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      Call us now: {phoneNumberShort}
    </button>
  );
};

export default SamsungBannerCallButton;
