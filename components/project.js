import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

export default function Project({ id, link, src, label, tags }) {
  let toTheLeft = id % 2 === 0 ? true : false;
  return (
    <article
      className={`space-y-6 lg:max-w-5xl${toTheLeft ? "" : " lg:ml-auto"}`}
    >
      <div className="shadow-xl rounded-xl overflow-hidden relative bg-gray-100  hover:cursor-pointer group">
        <Link href={link} scroll={false}>
          <Image
            src={`/${src}`}
            width={1280}
            height={720}
            alt={label}
            layout="responsive"
            objectFit="contain"
            className="scale-50 group-hover:scale-[65%] ease-[cubic-bezier(0.6,0.01,-0.05,0.9)] duration-100"
          />
        </Link>
        <div className="absolute bottom-0 left-0 flex flex-col ml-5 mb-5">
          <div className="flex flex-row space-x-3">
            {tags.map((tag) => (
              <Tag key={tags.indexOf(tag)}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-redMain font-medium text-2xl md:text-3xl">{label}</h2>
    </article>
  );
}
