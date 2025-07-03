"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ImagesSlider } from "../../../app/ImagesSlider";
import CallAndWhatsappButton from "../../buttons/CallAndWhatsappButton";
import { cn } from "@/libs/utils";

export function SiemensBanner({ company = "Appliance Services UAE" }) {
  const images = ["/banner-1.jpeg", "/banner-2.jpeg", "/banner-3.jpeg"];
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  useEffect(() => {
    let loaded = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === images.length) setIsImagesLoaded(true);
      };
    });
  }, []);

  return (
    <div className="relative h-[40rem] w-full">
      {/* Loader Overlay */}
      {!isImagesLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isImagesLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90"
        >
          <div className="animate-spin rounded-full h-14 w-14 border-4 border-white border-t-transparent mb-4" />
          <p className="text-white text-sm opacity-75 tracking-wide">
            Hang On          </p>
        </motion.div>
      )}

      <ImagesSlider
        className={cn(
          "h-full",
          company === "Siemens" ? "mt-0" : "mt-[60px]"
        )}
        images={images}
      >
        {isImagesLoaded && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-50 flex flex-col justify-center items-center text-center px-4"
          >
            <motion.h1 className="font-extrabold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4 drop-shadow-lg">
              Authorized {company} Service Center
            </motion.h1>
            <motion.p
              className="max-w-4xl text-white/90 md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Get reliable and professional repair services with certified experts.
              We restore your appliances quickly and effectively so your home stays
              stress-free. Trusted by hundreds of families across the UAE.
            </motion.p>
            <CallAndWhatsappButton company={company} banner />
          </motion.div>
        )}
      </ImagesSlider>
    </div>
  );
}
