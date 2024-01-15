"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Dancing_Script, Montserrat } from "next/font/google";

const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const montSerrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <header className="sticky top-5 z-50">
    <div className="flex relative justify-between w-auto items-center m-5 right-0 top-0">
      <Link href="/">
        <motion.img
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.6 }}
        src="/logo.svg" alt="" className="lg:w-24 w-14" />
      </Link>
      <div className="relative">
        <motion.button
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.6 }}
          onClick={handleClick}
          className="relative flex-col justify-center items-center mr-3 z-50"
        >
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-5 ${
                        isOpen
                          ? "rotate-45 md:translate-y-2.5 translate-y-1 bg-gray-600"
                          : "-translate-y-0.5"
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm md:my-2 my-0.5 w-5 ${
                        isOpen ? "opacity-0" : "opacity-100 "
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-5 ${
                        isOpen
                          ? "-rotate-45 md:-translate-y-2.5 -translate-y-1 bg-gray-600"
                          : "translate-y-0.5"
                      }`}
          ></span>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, translateX: 400 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -400 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 lightmode z-40"
            >
              <div className="lightmode">
                <ul className="flex flex-col items-center justify-center w-screen h-screen md:text-9xl text-6xl gap-7 md:gap-1 font-semibold md:font-normal">
                  <Link
                    href="#about"
                    className={`mt-5 h-auto ${playFair.className}`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.1, stiffness: 400, damping: 10 }}
                      onClick={handleClick}
                    > 
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    className={`mt-5 h-auto ${playFair.className}`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.1, stiffness: 400, damping: 10 }}
                      onClick={handleClick}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  <Link
                    href="#skills"
                    className={`mt-5 h-auto ${playFair.className}`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.1, stiffness: 400, damping: 10 }}
                      onClick={handleClick}
                    >
                      Skills
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    className={`mt-5 h-auto hover:${montSerrat.className} ${playFair.className}`}
                  >
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.1, stiffness: 400, damping: 10 }}
                      onClick={handleClick}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </header>
  );
};

export default Header;
