import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Section from "../layouts/section";
import ProjectItemShowcase from "../components/projectItemShowcase";
import manage from "../assets/manage/manage.png";
import manage2 from "../assets/manage/manage-2.png";
import manageMobile from "../assets/manage/manage-mobile.png";
import manageMobile2 from "../assets/manage/manage-2-mobile.png";

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
          <ProjectItemShowcase src={manage} width={1903} height={955} />
          <ProjectItemShowcase src={manage2} width={1903} height={965} />
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <ProjectItemShowcase src={manageMobile} width={437} height={965} />
            <ProjectItemShowcase src={manageMobile2} width={437} height={965} />
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
