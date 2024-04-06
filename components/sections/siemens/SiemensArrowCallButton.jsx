"use client";

import { phoneNumber } from "@/utils/phoneNumber";
import Image from "next/image";

const SiemensArrowCallButton = () => {
  return (
    <button
      className="bg-blac bg-primary hover:bg-primary-focus  flex items-center justify-end gap-2  rounded bg-gradient-to-r from-emerald-300 via-emerald-300  to-emerald-100 px-6 py-2 text-black shadow-md duration-150 hover:bg-gradient-to-r  hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-50"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      Call
    </button>
  );
};

export default SiemensArrowCallButton;
