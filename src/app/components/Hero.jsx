"use client"
import React from "react";
import { motion } from "framer-motion";
import { Montserrat, Dancing_Script } from "next/font/google";
const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const montSerrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Hero = () => {
  return (
    <div className="z-10 text-center flex-col md:justify-start items-center p-10 flex relative overflow-hidden justify-center h-screen mb-10">
      <div
        id="hero-title"
        className=" flex flex-col justify-center items-center md:mt-5 mb-5 relative -mt-80"
      >
        <div
          className={`overflow-hidden relative md:text-sm text-xs md:mb-2 mb-5 ${montSerrat.className}`}
        >
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            FRONTEND DEVELOPER
          </motion.p>
        </div>
        <motion.div
          className={`z-10 items-center font-normal md:text-9xl text-4xl mb-5 ${montSerrat.className}`}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          ENGINEERING
        </motion.div>
        <motion.div
          className={`z-10 items-center font-normal md:text-9xl text-4xl mb-5 ${montSerrat.className}`}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          ELEGANCE
        </motion.div>
        <motion.div
          className={`z-10 items-center font-extralight md:text-4xl text-xl ${playFair.className}`}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          designing
        </motion.div>
        <motion.div
          className={`z-10 items-center font-thin md:text-4xl text-xl ${playFair.className}`}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
        >
          unforgettable digital journeys
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
