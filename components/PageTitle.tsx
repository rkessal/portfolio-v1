import React, { useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  const words = title.split(" ");
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
    <div className="flex flex-row flex-wrap mb-8 lg:max-w-7xl lg:mb-12">
      {words.map((word, index) => {
        const letters = word.split("");
        return (
          <motion.div
            key={index}
            variants={titleTransition}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex whitespace-pre overflow-y-hidden text-5xl leading-tight md:leading-tight md:text-6xl lg:text-7xl lg:leading-tight  2xl:leading-tight 2xl:text-8xl"
          >
            {letters.map((char, index) => (
              <motion.span key={index} variants={letterTransition}>
                {char}
                {index === letters.length - 1 && " "}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default PageTitle;
