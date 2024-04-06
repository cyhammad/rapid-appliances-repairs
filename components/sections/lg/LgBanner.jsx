import LgFixedCallButton from "./LgFixedCallButton";
import LgCallButton from "./LgCallButton";
import LgWhatsappButton from "./LgWhatsappButton";

const LgBanner = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url('/lg/lg1.avif')` }}
      ></div>
      <div className="relative z-10 flex h-[530px] items-center justify-center sm:h-screen">
        <div className="absolute inset-0 flex justify-center">
          <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 pt-16 sm:px-7 sm:pt-0 md:px-10 xl:px-0">
            <h2 className="text-2xl text-white md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
              LG Service Center: Bringing you the best home appliance repair
              services
            </h2>
            <span className="text-sm text-white sm:w-2/3 lg:leading-[1.75rem]">
              With our extensive knowledge, expertise, and commitment to
              customer satisfaction. We are dedicated to providing you with the
              highest quality repairs
            </span>
            <div className="flex max-w-56 flex-col gap-2  sm:max-w-96 sm:flex-row">
              <LgCallButton />
              <LgWhatsappButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgBanner;
