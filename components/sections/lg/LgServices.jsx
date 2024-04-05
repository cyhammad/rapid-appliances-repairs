"use client";

import Image from "next/image";
import ServiceCard from "./ServiceCard";
import LgCallButton from "./LgCallButton";
import LgCustomerService from "./LgCustomerService";

const LgServices = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center py-5 md:py-10">
      <div className="flex max-w-[93rem] flex-col gap-y-10 px-5 sm:px-10 lg:px-10 2xl:px-0">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-center text-3xl font-medium text-lg-text md:text-5xl lg:text-4xl">
            Repair Services for LG Products
          </h1>
          <p className=" text-center font-medium text-lg-text">
            Expert technicians dedicated to restoring your LG devices to peak
            performance.
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:gap-6 sm:px-5 md:grid-cols-2 lg:grid-cols-3 2xl:px-0">
          <ServiceCard
            imageUrl={"/lg/hi.avif"}
            heading={"Washing Machine Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."
            }
          />
          <ServiceCard
            imageUrl={"/lg/ref.jpeg"}
            heading={"Refrigerator Repair"}
            description={
              "Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly."
            }
          />
          <ServiceCard
            imageUrl={"/lg/lg.webp"}
            heading={"Television Repair"}
            description={
              "Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality."
            }
          />
          <ServiceCard
            imageUrl={"/lg/stove.webp"}
            heading={"Stove/Cooker Repair"}
            description={
              "We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement part."
            }
          />
          <ServiceCard
            imageUrl={"/lg/dsih.avif"}
            heading={"Dishwasher Repair"}
            description={
              "We resolve common issues such as leaks, poor cleaning and unusual noises to ensure  efficient cleaning."
            }
          />
          <ServiceCard
            imageUrl={"/oven.webp"}
            heading={"Gas Oven Repair"}
            description={
              "Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."
            }
          />
          <ServiceCard
            imageUrl={"/lg/hi.avif"}
            heading={"Dryer Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer."
            }
          />
        </div>
      </div>
      <div className="relative z-0 mt-10 h-[500px] w-full bg-[url('/lg/bestPlace.avif')] bg-cover bg-no-repeat text-white sm:h-screen">
        <div className="bg-lg-bg/4 absolute inset-0 flex justify-center">
          <div className="flex max-w-[78rem] flex-col items-center justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
            <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
              THE BEST PLACE TO REPAIR LG PRODUCTS{" "}
            </h2>
            <p>
              Visit an LG Brandshop to shop a wide range of LG products and
              receive expert advice.{" "}
            </p>
            <div className="flex max-w-56 flex-col gap-2  sm:max-w-96 sm:flex-row">
              <LgCallButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgServices;
