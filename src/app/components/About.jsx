import React, { useEffect, useState } from "react";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { Montserrat, Dancing_Script } from "next/font/google";
const montSerrat = Montserrat({
  weight: ["400", "300"],
  subsets: ["latin"],
  display: "swap",
});
const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const About = () => {
 

  return (
    <div
      className="md:mt-40 flex justify-center items-center md:mb-96 flex-col mt-10 mb-10"
      id="about"
    >
      <motion.h1 className={`${playFair.className} md:text-9xl text-5xl mb-20`}
      whileInView={{scale:1,rotate:0}}
      initial={{scale:0,rotate:180}}
      transition={{delay:0.3,ease:'easeInOut',duration:1}}
      
      >
        About
      </motion.h1>
      <motion.p
        className={`w-3/5 text-center md:text-xl ${montSerrat.className} text-xs`}
        whileHover={{ scale: 1.2 }}
        transition={{ delay: 0.3,ease:'easeInOut', stiffness: 400, damping: 10,duration:1 }}
        initial={{opacity:0,scale:0.8}}
        whileInView={{opacity:1,scale:1}}
      >
        I am a Frontend Developer and a Computer Engineering student at Goa
        Engineering College, India. I'm passionate about crafting seamless
        digital experiences. With a fervor for creating intuitive user
        interfaces and a drive to delve deeper into the world of software
        development, I'm committed to mastering the art of code. My ambition is
        to evolve into a versatile Software Developer, merging my technical
        acumen with innovative solutions to build impactful and user-centric
        applications that resonate in the digital sphere. Through continuous
        learning and a proactive approach, I aim to contribute significantly to
        the dynamic landscape of technology.
      </motion.p>
    </div>
  );
};

export default About;
