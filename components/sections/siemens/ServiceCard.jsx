import Image from "next/image";
import SiemensArrowCallButton from "./SiemensArrowCallButton";

const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Image className="w-full sm:w-1/2" src={imageUrl} width={430} height={221} alt="image" />
      <div className="flex flex-col gap-y-5 bg-[#00183c] sm:w-1/2 p-5 hover:bg-siemens-card-color">
        <h1 className="text-2xl">{heading}</h1>
        <span>{description}</span>
        <SiemensArrowCallButton />
      </div>
    </div>
  );
};

export default ServiceCard;
