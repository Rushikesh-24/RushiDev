import React, { useRef } from "react";
import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  wrap,
  useAnimationFrame,
  motion,
} from "framer-motion";
import { Dancing_Script, Montserrat } from "next/font/google";
const playFair = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const montSerrat = Montserrat({
  weight: ["400", "300"],
  subsets: ["latin"],
  display: "swap",
});

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ">
      <motion.div
        className="scroller font-semibold md:text-9xl text-4xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className={`block mr-2 md:mr-8  ${playFair.className}`}>
          {children}{" "}
        </span>
        <span className={`block mr-2 md:mr-8  ${playFair.className}`}>
          {children}{" "}
        </span>
        <span className={`block mr-2 md:mr-8  ${playFair.className}`}>
          {children}{" "}
        </span>
        <span className={`block mr-2 md:mr-8  ${playFair.className}`}>
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
}

const MovingText = (props) => {
  return (
    <section className="md:mb-72 mb-10 md:mt-40 mt-10">
      <ParallaxText baseVelocity={10}>{props.text1}</ParallaxText>
      <ParallaxText baseVelocity={5}>{props.text2}</ParallaxText>
      <ParallaxText baseVelocity={-10}>{props.text3}</ParallaxText>
    </section>
  );
};

export default MovingText;
