"use client";

import React from "react";
import Image from "next/image";
import { phoneNumber } from "@/utils/phoneNumber";

const FixedCallButtons = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-center justify-between gap-2 p-5">
      <a
        href={`tel:${phoneNumber}`}
        className="rounded-full border-none bg-rose-600 p-3 hover:bg-rose-700"
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <Image src="/phone.svg" width={32} height={32} alt="Phone" />
      </a>
      <a
        href={`//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm in need of professional home appliance repair services and experts who can diagnose and fix.`}
        target="_blank"
        className="rounded-full border-none bg-green-500 p-1.5 hover:bg-green-600"
       onClick={() => {
          window.open(
            `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm looking for skilled professionals to diagnose and repair my home appliances.`
          );
          gtag_report_conversion(`tel:${phoneNumber}`);

        }}

      >
        <Image src="/whatsapp.svg" width={45} height={45} alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FixedCallButtons;
