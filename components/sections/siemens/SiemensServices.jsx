"use client";

import Image from "next/image";
import ServiceCard from "./ServiceCard";

const SiemensServices = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="flex max-w-[80rem] flex-col gap-y-10 px-5 sm:px-7 lg:px-5 ">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-wrap text-2xl font-thin  sm:text-3xl  md:max-w-[25rem] md:text-4xl  md:leading-[3rem]">
            Professional Services{" "}
          </h2>
          <span className="font-light">Our professional services include:</span>
        </div>
        <div className="ld:grid-cols-3 grid gap-10 sm:grid-cols-2 sm:px-5 xl:grid-cols-4 2xl:px-0">
          <ServiceCard
            imageUrl={"/samsung/washingMachine.avif"}
            heading={"Washing Machine Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/ref.webp"}
            heading={"Refrigerator Repair"}
            description={
              "Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/tv.webp"}
            heading={"Television Repair"}
            description={
              "Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/stove.webp"}
            heading={"Stove/Cooker Repair"}
            description={
              "We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement part."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/dishwasher.avif"}
            heading={"Dishwasher Repair"}
            description={
              "We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/oven.webp"}
            heading={"Gas Oven Repair"}
            description={
              "Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."
            }
          />
          <ServiceCard
            imageUrl={"/samsung/washingMachine.avif"}
            heading={"Dryer Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SiemensServices;
