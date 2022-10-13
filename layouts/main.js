import { motion } from "framer-motion";
import BackToHome from "../components/backToHome";
function Main({ router, children, home }) {
  console.log(router);
  const variants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: router !== undefined ? 100 : 0,
    },
    enter: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: {
      opacity: 0,
      y: router !== undefined ? 100 : 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="container mx-auto px-5 font-Poppins"
    >
      {!home && <BackToHome />}
      {children}
      {!home && <BackToHome />}
    </motion.div>
  );
}
export default Main;
