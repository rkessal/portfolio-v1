import Section from "../layouts/section";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Hero() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 800], ["0%", "40%"]);

  return (
    <Section>
      <motion.div style={{ y }} className="flex h-[60vh] items-center">
        <h1 className="text-4xl font-medium leading-relaxed lg:text-6xl lg:leading-relaxed xl:w-4/5">
          Je travaille la <span className="text-redMain-500">conception</span>,
          le <span className="text-redMain-500">design</span> et le{" "}
          <span className="text-redMain-500">développement</span> de vos
          produits digitaux.
        </h1>
      </motion.div>
    </Section>
  );
}
