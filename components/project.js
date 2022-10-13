import Image from "next/image";
import Link from "next/link";
import Section from "../layouts/section";
import Tag from "./tag";

export default function Project({ pos, link, src, label, tags }) {
  let toTheLeft = pos % 2 === 0 ? true : false;
  return (
    <Link href={link} scroll={false}>
      <article
        className={`py-4 space-y-6 lg:max-w-5xl${
          toTheLeft ? "" : " lg:ml-auto"
        }`}
      >
        <div className="overflow-hidden relative bg-gradient-to-bl from-gray-100 to-gray-200 rounded-md  hover:cursor-pointer group">
          <Image
            src={src}
            width={1920}
            height={1080}
            alt={label}
            layout="responsive"
            objectFit="contain"
            className="group-hover:scale-105 ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-100"
          />
        </div>
        <div className="space-y-2">
          <div className="flex flex-row space-x-3">
            {tags.map((tag) => (
              <Tag key={tags.indexOf(tag)}>{tag.tag}</Tag>
            ))}
          </div>
          <h2 className="font-medium text-2xl md:text-3xl">{label}</h2>
        </div>
      </article>
    </Link>
  );
}
