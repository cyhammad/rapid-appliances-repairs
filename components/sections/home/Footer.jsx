import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#071125]">
      <footer className="flex w-full max-w-7xl flex-col gap-y-5 px-5 pb-10 text-gray-300">
        <div className="mt-5 flex pt-10 items-center gap-2">
          <h1 className="text-[20px] font-bold sm:text-[30px] text-yellow-400">
            Repair Appliances Repair Center
          </h1>
        </div>

        <span className="text-sm font-light ">
          A company specializing in appliance repair and maintenance services in
          Dubai and Abu Dhabi of all the Lg home appliances.
        </span>
        <div className="flex flex-col gap-y-5 ">
          <span className="hover:underline">Home</span>
          <span className="hover:underline">About Us</span>
          <span className="hover:underline">Services</span>
          <span className="hover:underline">Terms of use</span>
          <span className="hover:underline">Privacy Policy</span>
        </div>
        <span className="border-t border-gray-700 pt-5 text-center text-xs">
          © 2024 Rapid Repair Center. All rights reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
