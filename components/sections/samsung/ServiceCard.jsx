import Image from "next/image";
import SamsungCallArrowButton from "../samsung/SamsungCallArrowButton";
// import BoschCallArrowButton from "./BoschCallArrowButton";

const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col  items-center max-w-[50rem] bg-[#eff1f2] rounded-3xl hover:bg-[#c2c4c4]">
      <Image
        className="max-w-52 transform object-fill transition-transform duration-300 p-2 hover:scale-110 md:h-[50%] "
        src={imageUrl}
        width={430}
        height={200}
        alt="image"
      />
      <div className="flex flex-col justify-center text-center  items-center gap-y-5 px-2 pb-7 pt-5">
        <h1 className="text-xl font-medium ">{heading}</h1>
        <span className="text-xs max-w-72 ">{description}</span>
        <SamsungCallArrowButton />
      </div>
    </div>
  );
};

export default ServiceCard;
