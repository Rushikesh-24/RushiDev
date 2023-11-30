import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Skill = () => {
  return (
    <>
      <div className="flex justify-center items-center" id="skills">
      <motion.h1 className={`${playFair.className} md:text-9xl text-5xl mb-20`}
      whileInView={{scale:1,rotate:0}}
      initial={{scale:0,rotate:180}}
      transition={{delay:0.3,ease:'easeInOut'}}
      
      >
        Skills
      </motion.h1>
      </div>
      <div className="flex justify-center items-center md:gap-10 flex-wrap gap-4 mb-10">
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <FaReact size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <FaHtml5 size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <FaCss3 size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2}}
        >
          <IoLogoJavascript size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <SiTailwindcss size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <TbBrandNextjs size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <TbBrandCpp size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2 }}
        >
          <SiFramer size={30} />
        </motion.div>
      </div>
    </>
  );
};

export default Skill;
