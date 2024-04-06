import SamsungBannerCallButton from "./SamsungBannerCallButton";
import SamsungWhatsappButton from "./SamsungWhatsappButton";

const SamsungBanner = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/samsung/samsung-bg.avif')] bg-cover bg-fixed bg-[55%] bg-no-repeat sm:bg-[78%] "></div>
      <div className="relative z-10 flex h-[63vh] items-center justify-center md:h-screen">
        <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
          <h2 className="text-2xl font-semibold md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Samsung Service Center: Bringing you the best home appliance repair
            services
          </h2>
          <span className="text-sm sm:w-2/3 lg:leading-[1.75rem]">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
          </span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <SamsungBannerCallButton />
            <SamsungWhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamsungBanner;
