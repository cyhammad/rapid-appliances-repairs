import { aboutContent } from "@/utils/aboutContent";
import Image from "next/image";

const BoschAboutSection = () => {
  return (
    <div className="relative mt-10 flex select-none justify-center bg-[#ffffff] md:h-[70vh]">
      <div className=" flex w-full max-w-[80rem] flex-col items-center justify-between md:flex-row md:px-3">
        <div className="flex  flex-col  justify-center px-5 md:w-3/5 md:px-7  xl:px-0 ">
          <h2 className="text-wrap text-3xl font-semibold  text-lg-text">
            About Us
          </h2>
          <span className=" mt-3 text-sm text-lg-text sm:text-base">
            {aboutContent}
          </span>
        </div>
        <Image
          className="w-full shrink-0 pt-5 md:absolute md:right-0 md:w-[40%]"
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
