import React from 'react'

export default function SiemensRepair() {
  return (
<div className="relative z-0 mt-10 md:h-[600px] h-[400px] w-full bg-[url('/siemens/bookRepair.webp')] bg-cover bg-no-repeat text-white ">
        <div className="bg-gradient-to-t from-black absolute inset-0 flex justify-center">
          <div className="flex max-w-[78rem] flex-col items-center justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
            <h2 className="text-2xl md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Book a repair for Siemens home appliances            </h2>
            <p className="md:w-2/3 ">
            Siemens offers optimal repair services for all Siemens home appliances. From washing machine to coffee-maker repairs – Siemens Service is there for you.
            </p>           

            <div className="flex max-w-56 flex-col gap-2  sm:max-w-96 sm:flex-row">
              {/* <LgCallButton /> */}
            </div>
          </div>
        </div>
      </div>  )
}
