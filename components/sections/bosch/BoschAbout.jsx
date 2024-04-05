import { aboutContent } from "@/utils/aboutContent";
import Image from "next/image";

const BoschAboutSection = () => {
  return (
    <div className="flex select-none justify-center bg-[#ffffff] mt-10  ">
    <div className=" flex md:flex-row flex-col w-full max-w-[80rem]  justify-between items-center">
        <div className="md:w-3/5  flex  flex-col xl:px-0 md:px-7 px-5  justify-center ">
          <h2 className="text-3xl font-semibold text-lg-text  text-wrap">About Us</h2>
          <span className=" text-sm text-lg-text mt-3 sm:text-base">
            {aboutContent}
          </span>
        </div>
        <Image
          className=" md:w-[40%] w-full pt-5 shrink-0  "
          src="/bosch/aboutUs.jpeg"
          width={480}
          height={200}
          alt="image"
        />
    </div>
  </div>
  );
};

export default BoschAboutSection;
