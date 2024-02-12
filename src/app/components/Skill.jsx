import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { SiFramer } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
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
      <div className="flex justify-center items-center md:mt-0 mt-28" id="skills">
      <motion.h1 className={`${playFair.className} md:text-9xl text-5xl md:mb-20 mb-10`}
      whileInView={{scale:1,rotate:0}}
      initial={{scale:0,rotate:180}}
      transition={{delay:0.3,ease:'easeInOut',duration:1}}
      
      >
        Skills
      </motion.h1>
      </div>
      <div className="flex justify-center items-center md:gap-10 flex-wrap gap-4 md:mb-10 mb-32">
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <FaReact size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <FaHtml5 size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <FaCss3 size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5}}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <IoLogoJavascript size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <SiTailwindcss size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <TbBrandNextjs size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <TbBrandCpp size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <SiFramer size={30} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <SiExpress size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <FaNode size={40} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3, opacity: 0.8 }}
          transition={{ delay: 0.2,duration:0.5 }}
          whileInView={{y:0,opacity:1}}
          initial={{y:100,opacity:0}}
        >
          <SiMongodb size={40} />
        </motion.div>
      </div>
    </>
  );
};

export default Skill;
