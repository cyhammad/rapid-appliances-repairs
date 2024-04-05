import { aboutContent } from "@/utils/aboutContent";


const SamsungAboutUsSection = () => {
  return (
    <div className="flex items-center justify-center mb-10 bg-[#eff1f2] py-10 lg:h-[20rem]">
      <div className="flex w-full max-w-[78rem]  flex-col px-5">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <span className="mt-3 pb-4 pt-5 text-sm ">
          {aboutContent}
        </span>
      </div>
    </div>
  );
};

export default SamsungAboutUsSection;
