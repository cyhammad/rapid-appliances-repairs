import React from "react";
import Image from "next/image";
import SiemensBannerCallButton from "./SiemensBannerCallButton";

export default function SiemensCustomerService() {
  return (
    <div>
      <div className="mt-5 flex select-none justify-center md:mt-10">
        <div className=" flex w-full max-w-[80rem] flex-col  items-center justify-between px-5 md:flex-row md:px-7  lg:px-5  ">
          <div className="justify-centermd:w-2/5  flex flex-col items-center text-center md:items-start md:text-start ">
            <h2 className="text-wrap text-2xl font-thin  sm:text-3xl  md:max-w-[25rem] md:text-4xl  md:leading-[3rem]">
              Customer service: repairs{" "}
            </h2>
            <span className=" mt-3 max-w-96 text-wrap text-start text-sm text-[#a3acbd] sm:text-base">
              Siemens Service team will help you to identify the fault with your
              appliance, find the reason and take care of the troubleshooting.{" "}
            </span>
          </div>
          <Image
            className=" mt-5 w-full  shrink-0 md:w-1/2  "
            src="/siemens/customerService.webp"
            width={480}
            height={200}
            alt="image"
          />
        </div>
      </div>
      <div className="mt-5 flex select-none justify-center md:mt-10">
        <div className=" flex w-full max-w-[80rem] flex-col items-center  justify-between gap-5 px-5 md:flex-row-reverse md:px-7  lg:px-5 ">
          <div className="justify-centermd:w-2/5  flex flex-col items-center text-center md:items-start md:text-start ">
            <h2 className="text-wrap text-2xl font-thin  sm:text-3xl  md:text-4xl   md:leading-[3rem]">
              Contact Us:
            </h2>
            <span className=" mt-3 text-wrap pb-10 text-start text-sm text-[#a3acbd] sm:text-base">
              You can call us directly to help you with any issue you may have
              with your product. our official distributor in UAE.
            </span>
            <SiemensBannerCallButton />
          </div>
          <Image
            className=" mt-5 w-full  shrink-0 md:w-1/2  "
            src="/siemens/contactUs.webp"
            width={480}
            height={200}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
