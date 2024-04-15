import { Pacifico } from "next/font/google";
import Image from "next/image";
import SamsungBannerCallButton from "../samsung/SamsungBannerCallButton";
import SamsungWhatsappButton from "../samsung/SamsungWhatsappButton";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const SiemensBanner = () => {
  return (
    <div className="relative flex justify-center overflow-hidden bg-[#eff1f2]">
      <div className="w-full max-w-7xl px-5 py-14 md:py-20">
        <div className="flex flex-col gap-y-3 lg:max-w-[50%] xl:max-w-[550px]">
          <span
            className={`text-2xl font-extrabold text-gray-400 sm:text-3xl ${pacifico.className}`}
          >
            We Provide ...
          </span>
          <span className="text-5xl font-extrabold sm:text-6xl">
            Authorized Bosch Appliances Repair Services
          </span>
          <span className="mt-5 text-3xl font-bold">
            Same day service Guaranteed
          </span>
          <span className="mt-5 text-xl">
            We provide the best appliance services in Dubai and Abu Dhabi from
            Siemens home appliances.
          </span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <SamsungBannerCallButton />
            <SamsungWhatsappButton />
          </div>
        </div>
      </div>
      <div className="absolute left-5 top-44 -z-10 h-28 w-28 rounded-full bg-yellow-300/70"></div>
      <div className="absolute -right-44 top-96 -z-10 h-80 w-80 rounded-full bg-blue-900/85 md:-left-44"></div>
      <Image
        src="/home/washing-machine-repair.png"
        width={700}
        height={1000}
        alt="washing machine repair"
        className="absolute right-0 top-0 z-0 hidden xl:block"
      />
    </div>
  );
};

export default SiemensBanner;
