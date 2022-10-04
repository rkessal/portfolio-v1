import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectShowcase({
  title,
  desc,
  stack,
  links,
  children,
}) {
  return (
    <>
      <h1 className="uppercase tracking-wider text-4xl text-redMain font-medium mb-24 lg:w-2/3 lg:text-6xl">
        {title}
      </h1>
      <div className="space-y-8">
        <div className="lg:w-4/5 xl:w-3/5">
          <h3 className="text-xl font-medium uppercase tracking-wider ">
            Description
          </h3>
          <p>{desc}</p>
        </div>
        <div className="flex flex-row space-x-24 ">
          <div className="flex flex-col">
            <h3 className="text-xl font-medium uppercase tracking-wider">
              Stack
            </h3>
            {stack.map((lang) => (
              <span>{lang}</span>
            ))}
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-medium uppercase tracking-wider">
              Liens
            </h3>
            {links.map((link) => (
              <>
                {link.site && (
                  <Link href={link.site}>
                    <a className="flex flex-row items-center space-x-3 group">
                      <span className="group-hover:underline">Site</span>
                      <FiExternalLink className="mb-[3px] group-hover:rotate-6" />
                    </a>
                  </Link>
                )}
                {link.repo && (
                  <Link href={link.repo}>
                    <a className="flex flex-row items-center space-x-3 group">
                      <span className="group-hover:underline">Repo</span>
                      <FiExternalLink className="mb-[3px] group-hover:rotate-6" />
                    </a>
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium uppercase tracking-wider">
            Images
          </h3>
          <div className="flex flex-col grid-cols-5 auto-rows-min space-y-3 md:gap-3 md:space-y-0 md:grid ">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
