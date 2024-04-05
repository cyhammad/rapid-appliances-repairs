import ServiceCard from "./ServiceCard";

const BoschServices = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex max-w-[82rem] flex-col gap-y-10 px-5 sm:px-10 lg:px-10 2xl:px-0">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl font-bold lg:text-5xl">
            Quick overview of what we repair{" "}
          </h1>
          <span className="p-1 font-light">
            Providing best professional services
          </span>
        </div>
        <div className="grid gap-10 sm:px-5 md:grid-cols-2 lg:grid-cols-3 2xl:px-0">
          <ServiceCard
            imageUrl={"/bosch/washer.jpg"}
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
            imageUrl={"/bosch/coffee.jpg"}
            heading={"Coffee Machine Repair"}
            description={
              "Our professional coffee machine repair service offers expert diagnostics and precise repairs for optimal functionality."
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
            imageUrl={"/dishwasher.webp"}
            heading={"Dishwasher Repair"}
            description={
              "We resolve common issues such as leaks, poor cleaning and unusual noises to ensure a spotless and efficient cleaning."
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
            imageUrl={"/bosch/washer.jpg"}
            heading={"Dryer Repair"}
            description={
              "Delivering top-tier, professional solutions that guarantee the optimal performance of your Dryer."
            }
          />
        </div>
      </div>
      <div className="relative z-0 mt-10 h-[500px] w-full bg-[url('/bosch/trust.webp')] bg-cover bg-no-repeat text-white sm:h-screen">
        <div className="bg-lg-bg/4 absolute inset-0 flex justify-center">
          <div className="flex max-w-[78rem] flex-col items-center justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
            <h2 className="text-wrap bg-white text-2xl font-semibold text-black md:w-2/3 md:bg-transparent  md:text-5xl lg:text-7xl lg:leading-[6rem]">
              Trust in our experts. Trust in Bosch{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoschServices;
