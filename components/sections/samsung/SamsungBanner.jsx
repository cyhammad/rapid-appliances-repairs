import SamsungBannerCallButton from "./SamsungBannerCallButton";
import SamsungWhatsappButton from "./SamsungWhatsappButton";

const SamsungBanner = () => {
  return (
    <div className="relative z-0 h-[600px] w-full bg-[url('/samsung/samsung-bg.avif')] bg-cover bg-no-repeat text-white sm:h-screen">
      <div className="absolute inset-0 flex justify-center bg-siemens-bg/50">
        <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
          <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Samsung Service Center: Bringing you the best home appliance repair
            services
          </h2>
          <span className="text-sm sm:w-2/3 lg:leading-[1.75rem]">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
          </span>
          <div className="flex flex-col gap-2">
          <SamsungBannerCallButton />
          <SamsungWhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamsungBanner;
