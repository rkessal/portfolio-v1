import BackToHome from "../components/backToHome";
import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import Section from "../layouts/section";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function Easybank() {
  const project = {
    title: "Easybank",
    desc: "Ce projet est un challenge du site \"frontendmentor\", le but étant de reproduire un site web en s'inspirant des images qui nous sont fournies. C'est un site qui présente les services pour une banque qui s'appelle Easybank. Durant ce projet, j'ai appri à utiliser le framework ChakraUI, ",
    stack: ["NextJS", "ChakraUI"],
    links: [
      {
        site: "https://easy-bank-website-rkessal.vercel.app/",
        repo: "https://github.com/rkessal/easy-bank-website",
      },
    ],
  };

  return (
    <Project title="Easybank" desc="Projet Easybank">
      <Section>
        <BackToHome />
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
        >
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 ">
            <Zoom>
              <Image
                src="/easy-bank.png"
                layout="responsive"
                width={1865}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/easybank-mobile.png"
                layout="responsive"
                width={437}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-2">
            <Zoom>
              <Image
                src="/easybank-2.png"
                layout="responsive"
                width={1865}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/easybank-2-mobile.png"
                layout="responsive"
                width={437}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-4">
            <Zoom>
              <Image
                src="/easybank-3.png"
                layout="responsive"
                width={1865}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1 md:order-5">
            <Zoom>
              <Image
                src="/easybank-3-mobile.png"
                layout="responsive"
                width={437}
                height={965}
              />
            </Zoom>
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
