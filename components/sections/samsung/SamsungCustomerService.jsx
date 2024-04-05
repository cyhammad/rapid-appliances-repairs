import Image from "next/image";
import SamsungBannerCallButton from "./SamsungBannerCallButton";
import SamsungWhatsappButton from "./SamsungWhatsappButton";
export default function SamsungCustomerService() {
  return (
    <div className="mt-10">
      <div className="flex select-none justify-center  ">
        <div className=" flex w-full max-w-[79rem] flex-col  justify-between   md:flex-row  md:px-10 xl:px-0 ">
          <div className="flex  flex-col text-center md:w-1/2 md:items-start md:text-start">
            <h2 className="text-wrap text-2xl  font-semibold   sm:text-3xl   md:text-3xl">
              Quality Repair Services{" "}
            </h2>
            <span className=" mt-3 text-wrap px-5 text-sm text-lg-text sm:text-base md:px-1">
              Samsung is committed to providing quality repair services. To
              ensure that your Samsung product is fixed to the highest
              standards, Samsung experts are available to diagnose and repair
              any issue you may be experiencing. These experts are trained and
              authorized by Samsung, and have access to the latest tools, parts,
              and technology to get your product working like new again. rust
              the experts at Samsung to keep your product running smoothly for
              years to come.
            </span>
          </div>
          <Image
            className=" w-full shrink-0 md:w-1/2   "
            src="/bosch/Quality.webp"
            width={480}
            height={200}
            alt="image"
          />
        </div>
      </div>
      <div className="mt-10 flex select-none justify-center ">
        <div className=" flex w-full max-w-[79rem] flex-col-reverse  justify-between pt-5  md:flex-row  md:px-7 xl:px-0 ">
          <Image
            className=" w-full shrink-0 pt-5  sm:px-5 md:w-1/2  md:px-0 md:pr-8 md:pt-0  "
            src="/bosch/contactUs.webp"
            width={480}
            height={200}
            alt="image"
          />
          <div className="flex  flex-col justify-center pr-3 text-center md:w-1/2 md:items-start md:text-start">
            <h2 className="text-wrap text-2xl  font-semibold   sm:text-3xl   md:text-3xl">
              Contact Us
            </h2>
            <span className=" mt-3 text-wrap px-5 text-sm text-lg-text sm:text-base md:px-0">
              You can call us directly to help you with any issue you may have
              with your product. our official distributor in UAE, Homewide LLC:
            </span>
            <div className="mt-5  flex flex-col items-center justify-center gap-3 sm:flex-row ">
              <div className="flex flex-col gap-2 sm:flex-row">
                <SamsungBannerCallButton />
                <SamsungWhatsappButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
