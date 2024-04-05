import Image from "next/image";

const SiemensFixedContactButton = () => {
  return (
    <button className="fixed bottom-5 right-5 z-50 flex w-fit cursor-pointer items-center gap-x-5 bg-white py-3 pl-5 pr-7 text-lg font-bold text-black sm:bottom-10 sm:right-10">
      <Image src="/icons/siemens-call-icon.svg" width={30} height={30} />
      <span>Contact Us</span>
    </button>
  );
};

export default SiemensFixedContactButton;
