import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "framer-motion";

export const TextRevealCard = ({ text, revealText }) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();

    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div className="sm:flex hidden items-center justify-center mb-52">
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        ref={cardRef}
        className="w-fit rounded-lg p-8 relative overflow-hidden"
      >
        <div className="h-40 relative flex items-center overflow-hidden">
          <motion.div
            style={{
              width: "100%",
            }}
            animate={
              isMouseOver
                ? {
                    opacity: widthPercentage > 0 ? 1 : 0,
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
                : {
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
            }
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="absolute bg-[#1f2125] will-change-transform"
          >
            <p
              style={{
                textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
              }}
              className="text-base sm:text-7xl py-10 font-bold  bg-clip-text  bg-gradient-to-b from-white to-neutral-300"
            >
              {revealText}
            </p>
          </motion.div>
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute  will-change-transform"
          ></motion.div>

          <div className="overflow-hidden mask-image:linear-gradient(to_bottom,transparent,white,transparent)">
            <p className="text-base sm:text-7xl py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
              {text}
            </p>
            <MemoizedStars />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(140)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);