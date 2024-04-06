import Image from "next/image";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="flex justify-center bg-blue-100/60">
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
        <div className="mt-10 flex justify-center flex-wrap">
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Washing Machine"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Dryer"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Stove/Cooker"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Refrigerator"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Television"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Gas Oven"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
          <ServiceCard
            iconImgPath={"/home/repair-person.svg"}
            heading={"Dishwasher"}
            description={
              "In house repair experts with 10+ years of experience. We provide the best high quality repair services of your home"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;