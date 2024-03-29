import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

type Props = {
  index: number;
  link: string;
  src: string;
  label: string;
  tags: Tag[];
};

type Tag = {
  tag: string;
};

const Project = ({ index, link, src, label, tags }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  let toTheLeft = index % 2 === 0 ? true : false;
  return (
    <div ref={ref}>
      <Link href={link} scroll={false}>
        <motion.article
          style={{ y }}
          className={`py-4 space-y-6 lg:max-w-5xl ${
            !toTheLeft && " lg:ml-auto"
          }`}
        >
          <div className="overflow-hidden relative bg-gradient-to-bl from-gray-100 to-gray-200 hover:cursor-pointer group">
            <Image
              src={src}
              width={1920}
              height={1080}
              alt={label}
              layout="responsive"
              objectFit="contain"
              className="group-hover:scale-105 ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-300"
            />
          </div>
          <div className="space-y-2">
            <div className="flex flex-row flex-wrap gap-3">
              {tags.map((tag) => (
                <Tag key={tags.indexOf(tag)}>{tag.tag}</Tag>
              ))}
            </div>
            <h2 className="font-medium text-2xl md:text-3xl">{label}</h2>
          </div>
        </motion.article>
      </Link>
    </div>
  );
};

export default Project;
