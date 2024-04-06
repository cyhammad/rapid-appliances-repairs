import Image from "next/image";
import SamsungCallArrowButton from "../samsung/SamsungCallArrowButton";
import SiemensArrowCallButton from "./SiemensArrowCallButton";

const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex max-w-[90rem]  flex-col items-center rounded-3xl bg-[#00183c] hover:bg-siemens-card-color">
      <Image
        className="max-w-52 transform object-fill p-2 transition-transform duration-300 hover:scale-110 md:h-[50%] "
        src={imageUrl}
        width={430}
        height={200}
        alt="image"
      />
      <div className="flex flex-col items-center justify-center  gap-y-5 px-2 pb-7 pt-5 text-center">
        <h1 className="text-xl font-semibold">{heading}</h1>
        <span className="max-w-[34rem] text-xs text-[#a3acbd]">
          {description}
        </span>
        <SiemensArrowCallButton />
      </div>
    </div>
  );
};

export default ServiceCard;
