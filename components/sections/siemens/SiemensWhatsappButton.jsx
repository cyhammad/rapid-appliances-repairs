"use client";

import { phoneNumber, phoneNumberShort } from "@/utils/phoneNumber";

const SiemensWhatsappButton = () => {
  return (
    <button
      className="z-50 w-fit cursor-pointer bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-100 px-5 py-4 font-bold text-black hover:bg-gradient-to-r hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-50 sm:px-10 sm:py-5 sm:text-lg"
      onClick={() => window.open(`https://wa.me/${phoneNumber}`)}onClick={() => {
                  window.location.href = `//api.whatsapp.com/send?phone=${phoneNumber}&text=Hello! I'm looking for skilled professionals to diagnose and repair my home appliances. `;
                gtag_report_conversion(`tel:${phoneNumber}`);
                }}
    >
      Whatsapp: {phoneNumberShort}
    </button>
  );
};

export default SiemensWhatsappButton;
