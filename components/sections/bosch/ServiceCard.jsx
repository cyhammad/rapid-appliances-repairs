import Image from "next/image";
import BoschCallArrowButton from "./BoschCallArrowButton";

const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col justify-between bg-[#eff1f2] rounded-md hover:bg-[#c2c4c4]">
      <Image
        className="w-full transform px-5 pt-5 transition-transform duration-300 hover:scale-110 md:h-1/2"
        src={imageUrl}
        width={430}
        height={200}
        alt="image"
      />
      <div className="flex flex-col gap-y-5 p-5">
        <h1 className="text-2xl font-semibold ">{heading}</h1>
        <span>{description}</span>
        <BoschCallArrowButton />
      </div>
    </div>
  );
};

export default ServiceCard;
