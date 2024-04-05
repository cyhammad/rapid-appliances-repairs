"use client";

import { phoneNumber } from "@/utils/phoneNumber";
import Image from "next/image";

const SiemensArrowCallButton = () => {
  return (
    <button
      className="flex items-center justify-end gap-2"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      <span className="text-lg font-bold">Call</span>
      <Image
        src="/icons/siemens-arrow-right-icon.svg"
        width={20}
        height={20}
        alt="arrow icon"
      />
    </button>
  );
};

export default SiemensArrowCallButton;
