"use client";

import { phoneNumber } from "@/utils/phoneNumber";
import { call } from "@/utils/svgs";

const SamsungFixedCallButton = () => {
  return (
    <button
      className="fixed bottom-[10.5rem] right-[-4.5rem] z-50 flex w-fit rotate-[-90deg] cursor-pointer items-center  gap-x-5 bg-black py-2 pl-5  pr-7 text-base text-white"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      {call} <span>Contact Us</span>
    </button>
  );
};

export default SamsungFixedCallButton;
