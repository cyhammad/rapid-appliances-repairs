import Image from "next/image";

const ServiceCard = ({ iconImgPath, heading, description }) => {
  return (
    <div className="flex max-w-[300px] flex-col gap-y-5 border border-gray-400/60 p-10">
      <div className="group relative h-fit min-w-[20%]">
        <div className="absolute -z-10 -bottom-3 -left-5 h-12 w-12 rounded-full bg-yellow-400 duration-1000  group-hover:scale-125"></div>
        <Image
          src={iconImgPath}
          width={70}
          height={70}
          alt="repair person icon"
          className="transition-transform duration-1000 group-hover:scale-90"
        />
      </div>
      <span className="mt-5 text-2xl font-bold text-blue-950 transition-all duration-300 hover:text-yellow-400">
        {heading}
      </span>
      <span className="leading-6">{description}</span>
      <button className="font-bold w-fit uppercase text-blue-400">call us +</button>
    </div>
  );
};

export default ServiceCard;
