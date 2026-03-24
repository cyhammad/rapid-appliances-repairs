import { aboutContent } from "@/utils/aboutContent";
import Image from "next/image";

const LgAbout = () => {
  return (
    <div className="flex select-none justify-center bg-[#F9F7F3] mt-10 ">
      <div className=" flex md:flex-row flex-col w-full max-w-[93rem]  justify-between items-center  px-5 py-10">
          <div className="md:w-3/5  flex  flex-col  justify-center md:px-8 px-5">
            <h2 className="text-3xl font-semibold text-lg-text  text-wrap">About Us</h2>
            <span className=" text-sm text-lg-text mt-3 sm:text-base">
              {aboutContent}
            </span>
          </div>
          <Image
            className=" md:w-[40%] w-full  px-5 pt-5 shrink-0  "
            src="/lg/aboutUs.avif"
            width={480}
            height={200}
            alt="image"
          />
      </div>
    </div>
  );
};

export default LgAbout;
