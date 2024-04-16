"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";
import Image from "next/image";


const SamsungWhatsappButton = () => {
  return (
   <div className="flex flex-col text-lg md:flex-row md:gap-x-10 md:justify-start md:px-0 justify-center gap-y-2 px-10">
              <button
                className="px-5 py-4 flex justify-center flex-row bg-[#219ACD] text-white hover:bg-[#1984b1] rounded-xl duration-150 shadow-md"
                onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm in need of professional home appliance repair services and experts who can diagnose and fix. `;
                }}
              >
                Whats App Us
                <Image
                  src="/images/whatsapp.png"
                  className="max-w-xs ml-2 md:max-w-xl shadow-2xl"
                  height={30}
                  width={30}
                />
              </button>
            </div>
  );
};

export default SamsungWhatsappButton;
