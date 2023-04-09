import { motion } from "framer-motion";
import BackToHome from "../components/backToHome";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

type Props = {
  router: string;
  children: JSX.Element | JSX.Element[];
  home?: boolean;
};

function Main({ router, children }: Props) {
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
    <>
      <Navbar />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="px-5 md:px-10 font-Inter"
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
export default Main;
