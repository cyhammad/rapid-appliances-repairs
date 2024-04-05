import Image from "next/image";
import BoschCallButton2 from "./BoschCallButton2";
import BoschWhatsappButton from "./BoschWhatsappButton";

export default function BoschCustomerService() {
  return (
    <div className="">
      <div className="flex select-none justify-center  ">
        <div className=" flex w-full max-w-[79rem] flex-col  justify-between pt-5  md:flex-row  md:px-7 xl:px-0 ">
          <div className="flex  flex-col text-center md:w-1/2 md:items-start md:text-start">
            <h2 className="text-wrap text-2xl  font-semibold   sm:text-3xl   md:text-3xl">
              Quality Repair Services{" "}
            </h2>
            <span className=" mt-3 text-wrap px-5 text-sm text-lg-text sm:text-base md:px-0">
            Bosch is committed to providing quality repair services. To ensure
              that your Bosch product is fixed to the highest standards, Bosch
              experts are available to diagnose and repair any issue you may be
              experiencing. These experts are trained and authorized by Bosch,
              and have access to the latest tools, parts, and technology to get
              your product working like new again. rust the experts at Bosch
              to keep your product running smoothly for years to come.
            </span>
          </div>
          <Image
            className=" w-full shrink-0 px-5 pt-5 md:w-1/2 md:pt-0  "
            src="/bosch/Quality.webp"
            width={480}
            height={200}
            alt="image"
          />
        </div>
      </div>
      <div className="flex select-none justify-center mt-10 ">
        <div className=" flex w-full max-w-[79rem] flex-col-reverse  justify-between pt-5  md:flex-row  md:px-7 xl:px-0 ">
        <Image
            className=" w-full shrink-0 pt-5  md:px-0 px-5 md:pr-8 md:w-1/2 md:pt-0  "
            src="/bosch/contactUs.webp"
            width={480}
            height={200}
            alt="image"
          />
          <div className="flex  flex-col text-center md:w-1/2 justify-center pr-3 md:items-start md:text-start">
            <h2 className="text-wrap text-2xl  font-semibold   sm:text-3xl   md:text-3xl">
              Contact Us
            </h2>
            <span className=" mt-3 text-wrap px-5 text-sm text-lg-text sm:text-base md:px-0">
            You can call us directly to help you with any issue you may have with your product. our official distributor in UAE, Homewide LLC:
            </span>
            <div className="flex  sm:flex-row flex-col items-center mt-5 gap-3 justify-center ">

            <BoschCallButton2 />
            <BoschWhatsappButton />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
