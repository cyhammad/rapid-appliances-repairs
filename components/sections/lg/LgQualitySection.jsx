import Image from "next/image";
import React from "react";

const LgQualitySection = () => {
  return (
    <div className="flex justify-center shadow-lg bg-white">
      <div className="flex w-full max-w-7xl flex-col gap-y-10 px-5 py-10 md:flex-row">
        <div className="flex w-full gap-x-9 px-5 md:max-w-[45%] md:border-r md:border-gray-300">
          <div className="group relative h-fit min-w-[20%]">
            <Image
              src="/home/repair-person.svg"
              width={70}
              height={70}
              alt="repair person icon"
              className="transition-transform duration-1000 group-hover:scale-90"
            />
            <div className="absolute -bottom-3 -left-5 -z-10 h-12 w-12 rounded-full bg-yellow-300 duration-1000  group-hover:scale-125"></div>
          </div>
          <div className="flex flex-col justify-between gap-y-2">
            <span className="text-2xl font-bold">Quality Engineers</span>
            <span className="font-light leading-6">
              In house repair experts with 10+ years <br /> of experience. We
              provide the best high quality repair services of your home
            </span>
          </div>
        </div>
        <div className="flex w-full gap-x-9 px-5 md:max-w-[55%]  md:px-24">
          <div className="group relative h-fit min-w-[20%]">
            <Image
              src="/home/quality-icon.svg"
              width={70}
              height={70}
              alt="repair person icon"
              className="transition-transform duration-1000 group-hover:scale-90"
            />
            <div className="absolute -bottom-3 -left-5 -z-10 h-12 w-12 rounded-full bg-yellow-300 duration-1000  group-hover:scale-125"></div>
          </div>
          <div className="flex flex-col justify-between gap-y-2">
            <span className="text-2xl font-bold">
              High-Quality Repair Services
            </span>
            <span className="font-light leading-6">
              We provide the best high quality repair services of your home
              appliances in the Dubai and Abu Dhabi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgQualitySection;
