'use client'
import { phoneNumber } from "@/utils/phoneNumber";

const SamsungCallArrowButton = () => {
  return (
    <button
      className="flex items-center rounded-3xl justify-end gap-2 bg-black"
      onClick={() => window.open(`tel:${phoneNumber}`)}
    >
      <span className=" text-white px-5 p-1 ">Call</span>
    </button>
  );
};

const arrow = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.52 13.98L59.89 39.34H0.5V56.66H59.89L34.52 82.02L48 95.5L95.5 48L48 0.5L34.52 13.98Z"
      fill="black"
    />
  </svg>
);

export default SamsungCallArrowButton;
