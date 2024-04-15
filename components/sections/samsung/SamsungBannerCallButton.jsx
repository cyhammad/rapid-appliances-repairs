"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungBannerCallButton = () => {
  return (
    <button
      className="flex w-fit min-w-[250px] items-center gap-2 rounded bg-blue-400 px-10 py-[0.85rem] text-center text-sm font-medium text-white"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      Call us now: {phoneNumberShort}
    </button>
  );
};

export default SamsungBannerCallButton;
