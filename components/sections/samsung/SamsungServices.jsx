import ServiceCard from "../samsung/ServiceCard";

const SamsungServices = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex max-w-[82rem] flex-col gap-y-10 px-5 sm:px-10 lg:px-10 2xl:px-0">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl font-semibold lg:text-4xl">
            Which service interest you?
          </h1>
          <span className="font-light">Our professional services include:</span>
          <div className="flex max-w-7xl flex-wrap gap-4">
            <span className="rounded-full border border-[#d7dadb] bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Washing Machine Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Refrigerator Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              TV Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Stove / Cooker Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Dishwasher Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Dryer Repair
            </span>
            <span className="rounded-full border border-[#d7dadb]  bg-[#eff1f2] px-5 py-2 text-sm hover:bg-[#c2c4c4]">
              Gas Oven Repair
            </span>
          </div>
        </div>
        <div className="grid gap-10 sm:px-5 md:grid-cols-3  lg:grid-cols-4 2xl:px-0">
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
      <div className="relative z-0 mt-10 h-[500px] w-full bg-[url('/samsung/service.webp')] bg-cover bg-no-repeat text-white sm:h-screen">
        <div className="bg-lg-bg/4 absolute inset-0 flex justify-center">
          <div className="flex max-w-[78rem] flex-col items-center justify-end gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
            <h2 className="text-center text-2xl font-semibold uppercase md:w-2/3 md:text-3xl  lg:text-5xl lg:leading-[4rem]">
              The Best Place for Repairing Samsung Products
            </h2>
            <div className="flex max-w-56 flex-col gap-2  sm:max-w-96 sm:flex-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamsungServices;
