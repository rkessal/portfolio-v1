import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

export default function Project({ id, link, src, label, tags }) {
  let toTheLeft = id % 2 === 0 ? true : false;
  console.log(id);
  return (
    <article
      className={`space-y-6 lg:max-w-5xl${toTheLeft ? "" : " lg:ml-auto"}`}
    >
      <div className="shadow-lg rounded-xl overflow-hidden relative bg-gray-200  hover:cursor-pointer group">
        <Link href={link}>
          <Image
            src={`/${src}`}
            width={1920}
            height={1080}
            alt={label}
            layout="responsive"
            objectFit="cover"
            className="group-hover:scale-105 ease-in-out duration-100"
          />
        </Link>
        <div className="absolute bottom-0 left-0 flex flex-col ml-5 mb-5">
          <div className="flex flex-row space-x-3">
            {tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-redMain font-medium text-2xl md:text-3xl">{label}</h2>
    </article>
  );
}
