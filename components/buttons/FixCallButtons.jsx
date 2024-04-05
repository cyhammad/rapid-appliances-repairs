"use client";

import React from "react";
import Image from "next/image";
import { phoneNumber } from "@/utils/phoneNumber";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center justify-between gap-2 p-5">
      <a
        href={`tel:${phoneNumber}`}
        className="p-3 rounded-full border-none bg-blue-400 hover:bg-blue-500"
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <Image src="/phone.svg" width={32} height={32} alt="Phone" />
      </a>
      <a
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`}
        target="_blank"
        className="rounded-full p-1.5 border-none bg-green-500 hover:bg-green-600"
        onClick={() => window.open(`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hey, I want Home Appliance Repair Service.`)}
      >
        <Image src="/whatsapp.svg" width={45} height={45} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FixedCallButtons;
