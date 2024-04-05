import Image from "next/image";
import LgFixedCallButton from "./LgFixedCallButton";
import LgCallButton from "./LgCallButton";
import LgWhatsappButton from "./LgWhatsappButton";

const LgBanner = () => {
  return (
    <div className="relative z-0 h-[500px] w-full bg-[url('/lg/lg1.avif')] bg-cover bg-no-repeat text-white sm:h-screen">
      <div className="bg-black/10 absolute inset-0 flex justify-center">
        <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 sm:px-7 pt-16 sm:pt-0 md:px-10 xl:px-0">
          <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            LG Service Center: Bringing you the best home appliance repair
            services
          </h2>
          <span className="text-sm sm:w-2/3 lg:leading-[1.75rem]">
            With our extensive knowledge, expertise, and commitment to customer
            satisfaction. We are dedicated to providing you with the highest
            quality repairs
          </span>
          <div className="flex sm:flex-row flex-col max-w-56  sm:max-w-96 gap-2">
          <LgCallButton />
            <LgWhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgBanner;