import Image from "next/image";

export default function SamsungFix() {
  return (
    <div className="mt-10 flex select-none justify-center bg-[#000] text-white  ">
      <div className=" flex w-full max-w-[80rem] flex-col items-center  justify-between md:flex-row">
        <div className="flex  flex-col  justify-center px-5 md:w-3/5 md:px-7  xl:px-0 ">
          <p className="mt-4">WE CAN FIX IT, FAST</p>
          <h2 className="text-wrap text-3xl  mt-4 font-normal  md:text-5xl">
            Home appliance repairs
          </h2>
          <span className=" mt-10 gap-2 flex items-center text-sm sm:text-base">
            {tick}
            78% of faults are fixed on the first visit
          </span>
          <span className=" mt-3  flex gap-2  items-center  text-sm sm:text-base">
            {tick}
            Book the earliest availability or choose a day that suits you
          </span>
          <span className=" mt-3  flex gap-2  items-center  text-sm sm:text-base">
            {tick}
            Fixed prices with no hidden costs
          </span>
        </div>
        <Image
          className=" w-full shrink-0 pt-5 md:w-[40%]  "
          src="/samsung/fix.png"
          width={480}
          height={200}
          alt="image"
        />
      </div>
    </div>
  );
}

const tick = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 26 26">
        <path fill="#ffffff" d="M26.98047,5.99023c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-15.29297,15.29297l-6.29297,-6.29297c-0.25082,-0.26124 -0.62327,-0.36647 -0.97371,-0.27511c-0.35044,0.09136 -0.62411,0.36503 -0.71547,0.71547c-0.09136,0.35044 0.01388,0.72289 0.27511,0.97371l7,7c0.39053,0.39037 1.02353,0.39037 1.41406,0l16,-16c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988z"></path>
      </svg>
);
