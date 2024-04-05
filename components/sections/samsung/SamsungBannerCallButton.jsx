"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SamsungBannerCallButton = () => {
  return <button className="flex w-fit items-center gap-2 bg-black p-[0.85rem] font-medium rounded-3xl text-sm text-white" onClick={() => window.open(`tel:${phoneNumber}`)}>
      Call us now: {phoneNumberShort}
    </button>;
};

export default SamsungBannerCallButton;
