"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TextCallButton from "@/components/TextCallButton";

const LgHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white text-lg-text drop-shadow-sm ">
      <div className=" flex h-[6rem] w-full max-w-[93rem] items-center gap-12 px-5 sm:px-7 md:px-10 ">
        <div className="flex flex-col items-start">
          <Link
            href="/services-centers/siemens"
            className="flex max-h-10 max-w-24 items-center"
          >
            {logo}
          </Link>
         
        </div>
        <div className=" hidden cursor-pointer items-center justify-center gap-12 text-lg md:flex ">
          <h1 className="hover:color">
            <a>Home</a>
          </h1>
          <h1>
            <a>Services</a>
          </h1>
          <h1>
            <a>Contact Us</a>
          </h1>
        </div>

        <div className="ml-auto flex gap-4">
          <button onClick={handleMenuToggle}>{menu}</button>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="absolute inset-0 z-50 flex h-screen justify-center bg-lg-bg px-5 py-10 text-lg-text sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex w-full max-w-[78rem] flex-col">
              <div className="flex w-full justify-between">
                <Link
                  href="/services-centers/siemens"
                  className="flex max-h-11 max-w-28 items-center"
                >
                  {logo}
                </Link>
                <button onClick={() => setShowMenu(false)}>{cross}</button>
              </div>
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{ x: -500 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col px-7 py-16"
              >
                <Link
                  href="/services-centers/bosch"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Home</span>
                  {chevron}
                </Link>
                <Link
                  href="/services-centers/bosch"
                  className="flex items-center justify-between gap-x-3 px-10 py-3 hover:bg-white/5 sm:w-1/3"
                >
                  <span>Services</span>
                  {chevron}
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
                  src="/bosch/globe.svg"
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
const logo = (
 <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M0 0h192.756v192.756H0V0z"/><path d="M58.656 120.188c3.248-1.775 6.453-3.595 9.571-5.587-2.382-2.685-5.543-4.114-9.182-4.114-.13 0-.26.044-.39.044-3.205.52-6.193 1.645-8.012 4.547-1.602 2.858-2.208 6.626-.779 9.831 2.902-1.603 5.846-3.119 8.792-4.721zm23.343-1.343c.39-.217.737-.39 1.126-.605-.26-1.43-.606-2.858-1.126-4.245a27.832 27.832 0 0 0-2.079-4.287c-2.035-3.205-5.067-6.193-8.358-8.099-3.811-2.209-8.402-3.118-12.906-2.815-4.547.304-8.965 1.776-12.473 4.417-5.977 4.245-8.835 11.088-9.182 18.19 0 7.275 3.638 14.898 10.308 19.013 3.378 2.469 7.275 3.335 11.347 3.595 5.067.303 10.48-.304 15.591.044l3.465-12.344c-6.02-.174-12.646.173-18.667-.174 7.537-4.505 15.246-8.489 22.954-12.69zM130.723 143.878l-17.108.174-15.158-17.281L94.17 143.7l-13.296.178 10.784-43.396 13.252.173-3.119 12.04 13.254-12.342h17.582l-22 21.697 20.096 21.828z" fill="#cc2229"/><path fill="#cc2229" d="M184.252 78.524l-2.814 13.643H40.336l-14.075 51.711H12.488l12.82-51.581-16.804-.303 2.858-13.47h172.89z"/><path d="M150.082 144.181l18.361-.303 10.74-43.223-12.635.112-1.271 4.649c-4.373-3.508-9.609-5.715-15.195-6.104-.477-.043-.953-.087-1.43-.087-7.406.606-14.941 3.941-19.143 10.568-.303.476-.562.996-.824 1.472-3.334 6.67-3.031 15.505.824 21.958a21.863 21.863 0 0 0 1.861 2.599c4.593 6.8 11.435 8.23 18.712 8.359zm9.18-28.151c1.084 1.732 2.037 3.941 1.863 6.02l-2.686 9.961-8.357.174c-3.553-.087-6.887-.823-8.879-3.984-2.08-3.162-3.031-7.406-1.43-10.914 1.559-3.465 5.197-5.544 8.531-6.193.607-.043 1.17-.043 1.777-.043 3.681.172 6.843 2.077 9.181 4.979zM55.061 51.586c3.032 4.591 3.162 12.041.173 16.804-3.811 5.847-10.437 9.052-17.28 8.099-5.846-.649-10.74-5.414-12.992-10.48-2.209-5.067-1.083-12.17 2.555-16.458 3.941-4.764 10.611-6.973 16.804-5.717 4.244.953 8.358 3.812 10.74 7.752z" fill="#cc2229"/></g></svg>
);
const menu = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.16576 4.05908H21.4783C21.9098 4.05908 22.2595 3.70933 22.2595 3.27783V1.32471C22.2595 0.893213 21.9098 0.543457 21.4783 0.543457H1.16576C0.734262 0.543457 0.384506 0.893213 0.384506 1.32471V3.27783C0.384506 3.70933 0.734262 4.05908 1.16576 4.05908ZM1.16576 11.8716H21.4783C21.9098 11.8716 22.2595 11.5218 22.2595 11.0903V9.13721C22.2595 8.70571 21.9098 8.35596 21.4783 8.35596H1.16576C0.734262 8.35596 0.384506 8.70571 0.384506 9.13721V11.0903C0.384506 11.5218 0.734262 11.8716 1.16576 11.8716ZM1.16576 19.6841H21.4783C21.9098 19.6841 22.2595 19.3343 22.2595 18.9028V16.9497C22.2595 16.5182 21.9098 16.1685 21.4783 16.1685H1.16576C0.734262 16.1685 0.384506 16.5182 0.384506 16.9497V18.9028C0.384506 19.3343 0.734262 19.6841 1.16576 19.6841Z"
      fill="#4a4946"
    />
  </svg>
);
const cross = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.61526 1.61526C2.7868 0.443727 4.68633 0.443677 5.85791 1.61526L20 15.7574L34.1422 1.61526C35.3137 0.443687 37.2132 0.443667 38.3848 1.61526C39.5564 2.7868 39.5564 4.68629 38.3848 5.85787L24.2427 20L38.3848 34.1421C39.5564 35.3137 39.5564 37.2132 38.3848 38.3848C37.2132 39.5564 35.3137 39.5563 34.1422 38.3848L20 24.2426L5.85791 38.3848C4.68634 39.5563 2.78681 39.5563 1.61527 38.3848C0.443666 37.2132 0.443686 35.3137 1.61527 34.1421L15.7574 20L1.61527 5.85787C0.443696 4.6863 0.443656 2.78687 1.61526 1.61526Z"
      fill="#4a4946"
    />
  </svg>
);
const chevron = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999939 22C0.868332 22.0008 0.73787 21.9755 0.616033 21.9258C0.494195 21.876 0.383379 21.8027 0.289939 21.71C0.19621 21.617 0.121816 21.5064 0.0710478 21.3846C0.0202791 21.2627 -0.00585938 21.132 -0.00585938 21C-0.00585938 20.868 0.0202791 20.7373 0.0710478 20.6154C0.121816 20.4936 0.19621 20.383 0.289939 20.29L9.58994 11L0.289939 1.71C0.101635 1.5217 -0.00415278 1.2663 -0.00415277 1C-0.00415277 0.733701 0.101635 0.478306 0.289939 0.290002C0.478243 0.101699 0.733637 -0.00408935 0.999939 -0.00408936C1.26624 -0.00408936 1.52164 0.101699 1.70994 0.290002L11.7099 10.29C11.8037 10.383 11.8781 10.4936 11.9288 10.6154C11.9796 10.7373 12.0057 10.868 12.0057 11C12.0057 11.132 11.9796 11.2627 11.9288 11.3846C11.8781 11.5064 11.8037 11.617 11.7099 11.71L1.70994 21.71C1.6165 21.8027 1.50568 21.876 1.38385 21.9258C1.26201 21.9755 1.13155 22.0008 0.999939 22Z"
      fill="#4a4946"
    />
  </svg>
);

export default LgHeader;
