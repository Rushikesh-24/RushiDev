import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Project = () => {
  // State variables to control visibility of project info
  const [showSeniorProjectInfo, setShowSeniorProjectInfo] = useState(false);
  const [showUtopiaProjectInfo, setShowUtopiaProjectInfo] = useState(false);

  // Function to toggle visibility of project info for Senior Project
  const toggleSeniorProjectInfo = () => {
    setShowSeniorProjectInfo(!showSeniorProjectInfo);
  };

  // Function to toggle visibility of project info for Utopia Project
  const toggleUtopiaProjectInfo = () => {
    setShowUtopiaProjectInfo(!showUtopiaProjectInfo);
  };
  return (
    <div id="project">
      <div className="flex justify-center items-center mt-10">
      <motion.h1 className={`${playFair.className} md:text-9xl text-5xl mb-20`}
      whileInView={{scale:1,rotate:0}}
      initial={{scale:0,rotate:180}}
      transition={{delay:0.3,ease:'easeInOut',duration:1}}
      
      >
        My Projects
      </motion.h1>
      </div>
      <div className="flex flex-col cursor-auto">
        <motion.div
          id="SeniorSphere"
          className="project-container md:flex-row hover:gap-0"
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {showSeniorProjectInfo && (
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="project-text md:w-1/4"
            >
              <div className="flex-col">
                <h3 className="project-description md:text-lg md:mx-0 mt-4">
                  Senior Sphere: HackTech Hackathon project
                </h3>
                <div id="buttons" className="md:mt-2 mt-5">
                  <Link href="https://senior-sphere.vercel.app/">
                    <motion.button
                      className="border-white bg-white text-black border rounded-2xl md:h-10 md:w-32 hover:bg-transparent hover:text-white text-xs mx-2 h-7 w-24"
                      whileHover={{ scale: 1.1 }}
                    >
                      PROJECT
                    </motion.button>
                  </Link>
                  <Link href="https://github.com/Rushikesh-24/SeniorSphere">
                    <motion.button
                      className="border-white bg-white text-black border rounded-2xl md:h-10 md:w-32 hover:bg-transparent hover:text-white text-xs mx-2 h-7 w-24"
                      whileHover={{ scale: 1.1 }}
                    >
                      GITHUB REPO
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          <motion.img
            src="/SeniorProject.png"
            alt=""
            className="project-image"
            onClick={toggleSeniorProjectInfo}
            initial={{x:-100}}
            whileInView={{x:0}}
            transition={{duration:1}}
          />
        </motion.div>
        <motion.div
          id="utopiaStore"
          className="project-container md:flex-row-reverse hover:gap-0 mt-10"
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 0.3,duration:1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {showUtopiaProjectInfo && (
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="project-text md:w-1/4"
            >
              <div className="flex-col">
                <h3 className="project-description md:text-lg md:mx-0 mt-4">
                  Utopia Store: Engaging E-commerce Powered by Next.js & React
                </h3>
                <div id="buttons" className="md:mt-2 mt-5">
                  <Link href="https://utopia-store.vercel.app/">
                    <motion.button
                      className="border-white bg-white text-black border rounded-2xl md:h-10 md:w-32 hover:bg-transparent hover:text-white text-xs mx-2 h-7 w-24"
                      whileHover={{ scale: 1.1 }}
                    >
                      PROJECT
                    </motion.button>
                  </Link>
                  <Link href="https://github.com/Rushikesh-24/utopia-store">
                    <motion.button
                      className="border-white bg-white text-black border rounded-2xl md:h-10 md:w-32 hover:bg-transparent hover:text-white text-xs mx-2 h-7 w-24"
                      whileHover={{ scale: 1.1 }}
                    >
                      GITHUB REPO
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
          <motion.img
            src="/utopiaProject.png"
            alt=""
            className="project-image"
            onClick={toggleUtopiaProjectInfo}
            initial={{x:100}}
            whileInView={{x:0}}
            transition={{duration:1}}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
