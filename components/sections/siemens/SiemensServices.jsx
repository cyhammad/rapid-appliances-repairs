"use client";

import Image from "next/image";
import ServiceCard from "./ServiceCard";

const SiemensServices = () => {
  return <div className="flex justify-center py-20">
      <div className="flex max-w-[78rem] flex-col gap-y-10 px-5 sm:px-7 lg:px-10 2xl:px-0">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-semibold">Professional Services</h1>
          <span className="font-light">
            Our professional services include:
          </span>
          <div className="flex max-w-3xl flex-wrap gap-4">
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Washing Machine Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Refrigerator Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Dryer Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Coffee Machine Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Dishwasher Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Gas Oven Repair
            </span>
            <span className="rounded-full border border-blue-300 px-5 py-2 text-sm text-blue-300">
              Stove / Cooker Repair
            </span>
          </div>
        </div>
        <div className="grid gap-10 sm:px-5 lg:grid-cols-2 2xl:px-0">
          <ServiceCard imageUrl={"/washing-machine.webp"} heading={"Washing Machine Repair"} description={"Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."} />
          <ServiceCard imageUrl={"/siemens/siemens-coffee.webp"} heading={"Coffee Machine Repair"} description={"Our professional coffee machine repair service provides expert diagnostics and precise repairs ensuring optimal functionality."} />
          <ServiceCard imageUrl={"/refrigerator.webp"} heading={"Refrigerator Repair"} description={"Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly."} />
          <ServiceCard imageUrl={"/stove.webp"} heading={"Stove/Cooker Repair"} description={"We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement parts for long lasting"} />
          <ServiceCard imageUrl={"/dishwasher.webp"} heading={"Dishwasher Repair"} description={"We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."} />
          <ServiceCard imageUrl={"/oven.webp"} heading={"Gas Oven Repair"} description={"Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."} />
          <ServiceCard imageUrl={"/washing-machine.webp"} heading={"Dryer Repair"} description={"Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer."} />
        </div>
      </div>
    </div>;
};

export default SiemensServices;
