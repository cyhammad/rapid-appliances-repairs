"use client";

import { call } from "@/utils/svgs";

const LgFixedCallButton = () => {
  return (
    <button className="fixed bottom-[10.5rem] right-[-4.5rem] z-50 flex w-fit rotate-[-90deg] cursor-pointer items-center  gap-x-5 bg-[#a50034] py-2 pl-5  pr-7 text-base text-white">
      {call} <span>Contact Us</span>
    </button>
  );
};

export default LgFixedCallButton;
