import { aboutContent } from "@/utils/aboutContent";

const SiemensAboutSection = () => {
  return (
    <div className="mb-20 flex justify-center bg-white/5 py-10">
      <div className="flex w-full max-w-[78rem] flex-col px-5">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <span className="py-10 text-sm text-white/50">{aboutContent}</span>
      </div>
    </div>
  );
};

export default SiemensAboutSection;
