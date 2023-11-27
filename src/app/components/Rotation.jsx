import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Rotation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center md:mt-40 mt-5">
      <motion.h1
        className="md:text-5xl text-xl md:mb-40 mb-10 transition"
        style={{
          rotate: scrollY * 0.5 + "deg",
        }}
      >
        ✦
      </motion.h1>
    </div>
  );
};

export default Rotation;
