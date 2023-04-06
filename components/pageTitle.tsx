import React, { useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  const titleAsChar = title.split("");
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const titleTransition = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const letterTransition = {
    initial: { y: 100 },
    animate: {
      y: 0,
      transition,
    },
  };

  return (
    <motion.div
      variants={titleTransition}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex whitespace-pre shrink-0 overflow-hidden text-5xl leading-tight text-redMain mb-8 md:leading-tight md:text-6xl lg:text-7xl lg:leading-tight lg:max-w-7xl lg:mb-12 2xl:leading-tight 2xl:text-8xl"
    >
      {titleAsChar.map((char, index) => (
        <motion.span key={index} variants={letterTransition}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
