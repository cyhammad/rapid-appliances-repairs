"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";

const SiemensHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  const handledev = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={
        header
          ? "fixed z-50 w-full flex items-center justify-center bg-siemens-bg"
          : "fixed z-50 flex w-full items-center justify-center"
      }
    >
      <div className="flex h-24 w-full max-w-[78rem] justify-between px-5 sm:px-7 md:px-10 xl:px-0">
        <Link href="/services-centers/siemens" className="flex items-center">
          <Image
            src="/logos/siemens-logo-white.svg"
            width={130}
            height={22}
            alt="siemens logo"
            quality={100}
          />
        </Link>
        <button className="" onClick={() => setShowMenu(true)}>
          <Image
            src="/icons/siemens-menu-icon.svg"
            width={30}
            height={22}
            alt="menu icon"
          />
        </button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute inset-0 z-50 flex h-screen justify-center bg-siemens-bg px-5 py-10 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex w-full max-w-[78rem] flex-col">
              <div className="flex w-full justify-between">
                <Image
                  src="/logos/siemens-logo-white.svg"
                  width={130}
                  height={22}
                  alt="siemens logo"
                />
                <button onClick={() => setShowMenu(false)}>
                  <Image
                    src="/icons/siemens-close-icon.svg"
                    width={14}
                    height={14}
                    alt="close icon"
                  />
                </button>
              </div>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col px-7 py-16"
              >
                <Link
                  href="/services-centers/siemens"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Home</span>
                  <Image
                    src="/icons/siemens-chevron-right-icon.svg"
                    width={6}
                    height={6}
                    alt="arrow icon"
                  />
                </Link>
                <Link
                  href="/services-centers/siemens"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Services</span>
                  <Image
                    src="/icons/siemens-chevron-right-icon.svg"
                    width={6}
                    height={6}
                    alt="arrow icon"
                  />
                </Link>
                <TextCallButton />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="flex w-full items-center gap-x-5 px-5 py-16 sm:px-16"
              >
                <Image
                  src="/icons/siemens-globe-icon.svg"
                  width={50}
                  height={50}
                  alt="globe icon"
                />
                <span className="text-xl font-extralight sm:text-2xl">
                  Services available in Dubai and Abu Dhabi
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiemensHeader;
