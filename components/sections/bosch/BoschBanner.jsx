import Image from "next/image";
import { phoneNumber } from "@/utils/phoneNumber";
import BoschCallButton from "./BoschCallButton";
import BoschCallButton2 from "./BoschCallButton2";
import BoschWhatsappButton from "./BoschWhatsappButton";

const BoschBanner = () => {
  return (
    <div className="relative">
      <div className="bg-ata absolute inset-0 bg-[url('/bosch/bosch.webp')] bg-cover bg-fixed bg-[78%] bg-no-repeat"></div>
      <div className="relative z-10 flex h-[63vh] items-center justify-center bg-black/60 text-white md:h-screen">
        <div className="flex max-w-[78rem] flex-col justify-center gap-y-10 px-5 sm:px-7 md:px-10 xl:px-0">
          <h2 className="text-2xl font-semibold md:w-2/3 md:text-3xl lg:text-5xl lg:leading-[4rem]">
            Introducing the best Bosch appliance repair services.
          </h2>
          <span className="text-sm sm:w-2/3 lg:leading-[1.75rem]">
            {" "}
            With our extensive knowledge, expertise, and commitment to customer
            satisfaction. We are dedicated to providing you with the highest
            quality repairs.
          </span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <BoschCallButton2 />
            <BoschWhatsappButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoschBanner;
const chevron = (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999939 22C0.868332 22.0008 0.73787 21.9755 0.616033 21.9258C0.494195 21.876 0.383379 21.8027 0.289939 21.71C0.19621 21.617 0.121816 21.5064 0.0710478 21.3846C0.0202791 21.2627 -0.00585938 21.132 -0.00585938 21C-0.00585938 20.868 0.0202791 20.7373 0.0710478 20.6154C0.121816 20.4936 0.19621 20.383 0.289939 20.29L9.58994 11L0.289939 1.71C0.101635 1.5217 -0.00415278 1.2663 -0.00415277 1C-0.00415277 0.733701 0.101635 0.478306 0.289939 0.290002C0.478243 0.101699 0.733637 -0.00408935 0.999939 -0.00408936C1.26624 -0.00408936 1.52164 0.101699 1.70994 0.290002L11.7099 10.29C11.8037 10.383 11.8781 10.4936 11.9288 10.6154C11.9796 10.7373 12.0057 10.868 12.0057 11C12.0057 11.132 11.9796 11.2627 11.9288 11.3846C11.8781 11.5064 11.8037 11.617 11.7099 11.71L1.70994 21.71C1.6165 21.8027 1.50568 21.876 1.38385 21.9258C1.26201 21.9755 1.13155 22.0008 0.999939 22Z"
      fill="white"
    />
  </svg>
);
