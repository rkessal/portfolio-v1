import { motion } from "framer-motion";
function Main({ router, children }) {
  console.log(router);
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: router !== undefined ? 200 : 0,
    },
    enter: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {
      opacity: 0,
      y: router !== undefined ? 200 : 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.4 }}
      className="container mx-auto px-5 font-Poppins"
    >
      {children}
    </motion.div>
  );
}

export default Main;
