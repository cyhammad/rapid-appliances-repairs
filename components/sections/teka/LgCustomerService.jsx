import Image from "next/image";

export default function LgCustomerService() {
  return (
    <div>
      <div className="flex select-none justify-center ">
        <div className=" flex w-full max-w-[93rem] flex-col items-center justify-between pt-5  md:flex-row  md:px-5 ">
          <div className="flex  flex-col text-center md:text-start items-center justify-center px-5 md:w-2/5 md:items-start md:px-8">
            <p className="p-1 text-xl">Customer Service </p>
            <h2 className="text-wrap text-2xl  font-semibold md:leading-[3rem] text-lg-text sm:text-3xl md:max-w-[25rem]  md:text-5xl">
              Our comitment to you
            </h2>
            <span className=" mt-3 text-wrap text-sm  text-lg-text sm:text-base">
              All of our in-store professionals are trained to provide the best
              customer service and care.
            </span>
          </div>
          <Image
            className=" w-full shrink-0 px-5 pt-5 md:w-1/2  "
            src="/lg/customerService.jpeg"
            width={480}
            height={200}
            alt="image"
          />
        </div>
      </div>{" "}
      <div className="flex select-none justify-center mt-5">
        <div className=" flex w-full max-w-[93rem] flex-col-reverse items-center justify-between   md:flex-row  md:px-5 ">
          <Image
            className=" w-full shrink-0 px-5 pt-5 md:w-[53%]  "
            src="/lg/keepClean.jpeg"
            width={480}
            height={200}
            alt="image"
          />
          <div className="flex  flex-col  text-center sm:text-start items-center justify-center px-5 md:w-1/2 md:items-start md:px-8">
            <p className="p-1 text-xl">A Safe Environment </p>
            <h2 className="text-wrap text-xl   font-semibold md:leading-[3rem] text-lg-text sm:text-3xl md:max-w-[30rem]  md:text-5xl">
              Your health and safety comes first{" "}
            </h2>
            <span className=" mt-3 text-wrap text-sm  text-lg-text sm:text-base">
              We ensure that every visit to an LG Brandshop is pleasant and
              hygieni.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
