"use client";

import Image from "next/image";
import SamsungCallArrowButton from "../samsung/SamsungCallArrowButton";
import { usePathname, useRouter } from "next/navigation";

const ServiceCard = ({ imageUrl, heading, description, id }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex max-w-[50rem]  flex-col items-center rounded-3xl bg-[#eff1f2] hover:bg-[#c2c4c4]">
      <Image
        className="max-w-52 transform object-fill p-2 transition-transform duration-300 hover:scale-110 md:h-[50%] "
        src={imageUrl}
        width={430}
        height={200}
        alt="image"
        onClick={() => router.push(pathname + "/service/" + id)}
      />
      <div className="flex flex-col items-center justify-center  gap-y-5 px-2 pb-7 pt-5 text-center">
        <h1
          className="text-xl font-medium"
          onClick={() => router.push(pathname + "/service/" + id)}
        >
          {heading}
        </h1>
        <span
          className="max-w-72 text-xs"
          onClick={() => router.push(pathname + "/service/" + id)}
        >
          {description}
        </span>
        <SamsungCallArrowButton />
      </div>
    </div>
  );
};

export default ServiceCard;
