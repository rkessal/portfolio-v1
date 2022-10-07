import BackToHome from "../components/backToHome";
import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Section from "../layouts/section";

export default function Manage() {
  const project = {
    id: 5,
    title: "Manage Website",
    desc: "Ce projet est un challenge du site \"frontendmentor\", le but étant de reproduire un site web en s'inspirant des images qui nous sont fournies. C'est un site qui présente un outil de gestion qui s'appelle Manage. Durant ce projet, j'ai appri à utiliser le framework TailwindCSS.",
    stack: ["ReactJS", "TailwindCSS"],
    links: [
      {
        site: "http://rkessal.github.io/manage-website",
        repo: "https://www.github.com/rkessal/manage-website",
      },
    ],
  };

  return (
    <Project title="Manage" desc="Projet Manage">
      <Section>
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
          key={project.id}
        >
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 ">
            <Zoom>
              <Image
                src="/manage.png"
                layout="responsive"
                width={1865}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/manage-mobile.png"
                layout="responsive"
                width={437}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-2">
            <Zoom>
              <Image
                src="/manage-2.png"
                layout="responsive"
                width={1865}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/manage-2-mobile.png"
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
