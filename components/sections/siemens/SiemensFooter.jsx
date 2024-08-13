
import Image from "next/image";

const SiemensFooter = () => {
  return (
    <div className="flex justify-center border-t border-black/30">
      <footer className="flex w-full max-w-[78rem] flex-col gap-y-5 px-5 py-10">
        <h1 className="text-2xl font-medium">Siemens Repair Center</h1>
        <span className="text-sm font-light text-black/50">
          An authorized service provider specialized in appliance repair and maintenance services in
          Dubai and Abu Dhabi of all the Siemens home appliances.
        </span>
        <div className="flex flex-col gap-y-5 text-black/80">
          <span className="underline">Home</span>
          <span className="underline">About Us</span>
          <span className="underline">Services</span>
          <span className="underline">Terms of use</span>
          <span className="underline">Privacy Policy</span>
        </div>
        <span className="border-t border-white/25 pt-5 text-center text-xs text-black/50">
         By Adil Hussain Technical Services LLC
        </span>
      </footer>
    </div>
  );
};

export default SiemensFooter;
