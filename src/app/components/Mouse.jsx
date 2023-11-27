"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mouse = () => {
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  useEffect(() => {
    const mouseMove = (e) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 5.5,
      y: mousePosition.y - 5.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  }; 
  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={"default"}
      ></motion.div>
    </>
  );
};

export default Mouse;
