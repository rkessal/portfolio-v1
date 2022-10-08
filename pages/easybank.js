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
    desc: "Ce projet est un challenge du site \"frontendmentor\", le but étant de reproduire un site web en s'inspirant des images qui nous sont fournies. C'est un site qui présente les services pour une banque qui s'appelle Easybank. Durant ce projet, j'ai appri à utiliser le framework ChakraUI. ",
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
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
        >
          <div className="px-8 pt-8 overflow-hidden rounded-md max-h-256 lg:px-24 lg:pt-24 bg-gradient-to-bl from-gray-100 to-gray-200">
            <Zoom>
              <Image
                src="/easybank.png"
                layout="responsive"
                width={1903}
                height={1323}
              />
            </Zoom>
          </div>
          <div className="px-8 pt-8 overflow-hidden rounded-md max-h-256 lg:px-24 lg:pt-24 bg-gradient-to-bl from-gray-100 to-gray-200">
            <Zoom>
              <Image
                src="/easybank-2.png"
                layout="responsive"
                width={1903}
                height={893}
              />
            </Zoom>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <div className="px-8 pt-8 bg-gradient-to-bl from-gray-100 to-gray-200 overflow-hidden rounded-md bg-gray max-h-104 lg:max-h-120">
              <Zoom>
                <Image
                  src="/easybank-mobile.png"
                  layout="responsive"
                  width={437}
                  height={965}
                />
              </Zoom>
            </div>
            <div className="px-8 pt-8 bg-gradient-to-bl from-gray-100 to-gray-200 overflow-hidden rounded-md bg-gray max-h-104 lg:max-h-120">
              <Zoom>
                <Image
                  src="/easybank-2-mobile.png"
                  layout="responsive"
                  width={437}
                  height={965}
                />
              </Zoom>
            </div>
            <div className="px-8 pt-8 bg-gradient-to-bl from-gray-100 to-gray-200 overflow-hidden rounded-md bg-gray max-h-104 lg:max-h-120">
              <Zoom>
                <Image
                  src="/easybank-3-mobile.png"
                  layout="responsive"
                  width={437}
                  height={965}
                />
              </Zoom>
            </div>
            <div className="px-8 pt-8 bg-gradient-to-bl from-gray-100 to-gray-200 overflow-hidden rounded-md bg-gray max-h-104 lg:max-h-120">
              <Zoom>
                <Image
                  src="/easybank-4-mobile.png"
                  layout="responsive"
                  width={437}
                  height={965}
                />
              </Zoom>
            </div>
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
