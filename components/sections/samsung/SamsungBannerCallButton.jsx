"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";
import Image from "next/image";


const SamsungBannerCallButton = () => {
  return (
   <div className="flex flex-col text-lg md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 flex justify-center flex-row bg-[#219ACD] text-white hover:bg-[#1984b1] rounded-xl duration-150 shadow-md"
                onClick={() => {
          window.location.href = `tel:${phoneNumber}`; }}
              >
                Call Us Now
                <Image
                  src="/images/phone.png"
                  className="max-w-xs ml-2 md:max-w-xl shadow-2xl"
                  height={30}
                  width={30}
                />
              </button>
            </div>
  );
};

export default SamsungBannerCallButton;
