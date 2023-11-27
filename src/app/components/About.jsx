import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const controls = useAnimation();
  const yOffset = 20;
  const paragraphVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY > 100) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [scrollY, controls]);

  return (
    <div
      className="md:mt-40 flex justify-center items-center md:mb-96 flex-col mt-10 mb-10"
      id="about"
    >
      <h1 className={`${playFair.className} md:text-9xl text-5xl mb-20`}>
        About
      </h1>
      <motion.p
        className={`w-3/5 text-center md:text-xl ${montSerrat.className} text-xs`}
        variants={paragraphVariants}
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.3 }}
        transition={{ delay: 0.2, stiffness: 400, damping: 10 }}
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
