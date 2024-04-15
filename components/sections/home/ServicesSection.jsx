import Image from "next/image";
import ServiceCard from "../samsung/ServiceCard";

const ServicesSection = () => {
  return (
    <div className="flex justify-center border-y border-black/30">
      <div className="flex w-full max-w-7xl flex-col gap-y-5 px-5 py-20">
        <div className="flex items-center gap-x-1">
          <Image src="/home/line.svg" width={25} height={25} alt="line" />
          <span className="text-sm font-semibold uppercase text-[#285EB2]">
            Our Services
          </span>
        </div>
        <span className="text-[2.5rem] font-extrabold leading-[3.0rem]">
          What We Do For Our Customers
        </span>
        <span className="font-light text-black/80">
          Through our commitment to organic growth, we continuously evolve our
          approach to appliance repairs, staying agile in response to changing
          market demands. By integrating disruptive innovations into our
          practices, we deliver efficient and effective services that exceed
          customer expectations.
        </span>
        <div className="grid gap-10 sm:px-5 md:grid-cols-3 lg:grid-cols-4 2xl:px-0">
          <ServiceCard
            imageUrl={"/samsung/washingMachine.avif"}
            heading={"Washing Machine Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your washing machine."
            }
            id={"washing-machine"}
          />
          <ServiceCard
            imageUrl={"/samsung/ref.webp"}
            heading={"Refrigerator Repair"}
            description={
              "Whether it's a noisy compressor, a torn gasket, or a sealed door issue causing your refrigerator not to freeze properly."
            }
            id={"refrigerator"}
          />
          <ServiceCard
            imageUrl={"/samsung/tv.webp"}
            heading={"Television Repair"}
            description={
              "Our professional TV repair service provides expert diagnostics and precise repairs ensuring optimal functionality."
            }
            id={"television"}
          />
          <ServiceCard
            imageUrl={"/samsung/stove.webp"}
            heading={"Stove/Cooker Repair"}
            description={
              "We offer fast and efficient repairs for all types of stoves and cookers. We only use high quality replacement part."
            }
            id={"stove-cooker"}
          />
          <ServiceCard
            imageUrl={"/samsung/dishwasher.avif"}
            heading={"Dishwasher Repair"}
            description={
              "We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
            }
            id={"dishwasher"}
          />
          <ServiceCard
            imageUrl={"/samsung/oven.webp"}
            heading={"Gas Oven Repair"}
            description={
              "Issues like temperature inconsistencies, ignition problems, gas leaks are resolved by our professionals."
            }
            id={"gas-oven"}
          />
          <ServiceCard
            imageUrl={"/samsung/washingMachine.avif"}
            heading={"Dryer Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer."
            }
            id={"dryer"}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
