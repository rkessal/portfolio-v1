import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: JSX.Element;
};

const AnimatedImage = ({ children }: Props) => {
  const transition = {
    delay: 0.4,
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  const variants = {
    initial: {
      scale: 1.1,
    },
    animate: {
      scale: 1,
      transition,
    },
  };

  return (
    <motion.div
      whileInView="animate"
      viewport={{ once: true }}
      initial="initial"
      variants={variants}
      className="relative h-full w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedImage;
