import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import PageTitle from "./pageTitle";
import { motion } from "framer-motion";

type Props = {
  title: string;
  desc?: string;
  stack?: string[];
  links?: Object[];
  children?: JSX.Element[];
};

export default function ProjectShowcase({
  title,
  desc,
  stack,
  links,
  children,
}: Props) {
  return (
    <>
      <PageTitle title={title} />
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row">
        <div className="flex flex-col mt-20 w-full space-y-10 order-2 lg:space-y-12 lg:max-w-xs lg:mt-0 lg:h-full xl:max-w-sm lg:sticky lg:top-16">
          <div className="space-y-3">
            <h2 className="text-xl font-medium uppercase tracking-wider">
              Stack
            </h2>
            <div className="flex flex-col space-y-1">
              {stack &&
                stack.map((tech: any) => (
                  <span key={stack.indexOf(tech)}>{tech}</span>
                ))}
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-medium uppercase tracking-wider">
              Liens
            </h2>
            <div className="flex flex-col space-y-1">
              {links &&
                links.map((link: any) => (
                  <div key={link}>
                    {link.site && (
                      <Link href={link.site}>
                        <a className="flex flex-row items-center space-x-3 group">
                          <span className="group-hover:underline">Site</span>

                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M18.48 16.834l-.116-11.198-11.198-.115.02 1.924 7.91.07L4.943 17.67l1.388 1.388L16.486 8.903l.081 7.924 1.912.007z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    )}
                    {link.repo && (
                      <Link href={link.repo}>
                        <a className="flex flex-row items-center space-x-3 group">
                          <span className="group-hover:underline">Repo</span>
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M18.48 16.834l-.116-11.198-11.198-.115.02 1.924 7.91.07L4.943 17.67l1.388 1.388L16.486 8.903l.081 7.924 1.912.007z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </a>
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="space-y-20 lg:order-3 w-full">
          {desc && (
            <p className="text-2xl mb-10 leading-normal lg:-mt-3 lg:leading-relaxed lg:text-4xl text-indent">
              {desc}
            </p>
          )}
          <div className="w-full space-y-10 lg:space-y-16">{children}</div>
        </div>
      </div>
    </>
  );
}

const transition = { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9] };

const animation = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition,
  },
};

export function ProjectPresentationText({ children }: { children: string }) {
  return (
    <p className="text-2xl mb-10 leading-normal lg:-mt-3 lg:leading-relaxed lg:text-4xl text-indent">
      {children}
    </p>
  );
}

export function ProjectDescriptionText({
  title,
  children,
}: {
  title?: string;
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={animation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-2xl space-y-4 text-xl leading-normal 2xl:max-w-3xl lg:leading-relaxed lg:text-2xl lg:space-y-6"
      >
        {title && (
          <h3 className="mb-4 text-3xl font-medium leading-tight lg:leading-tight lg:text-4xl">
            {title}
          </h3>
        )}
        {children}
      </motion.div>
    </div>
  );
}
