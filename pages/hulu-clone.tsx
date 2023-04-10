import "react-medium-image-zoom/dist/styles.css";
import huluMobile2 from "../assets/hulu/hulu-2-mobile.png";
import hulu2 from "../assets/hulu/hulu-2.png";
import huluMobile from "../assets/hulu/hulu-mobile.png";
import huluTablet from "../assets/hulu/hulu-tablet.png";
import hulu from "../assets/hulu/hulu.png";
import Project from "../layouts/Project";
import ProjectItemShowcase from "components/ProjectItemShowcase";
import ProjectShowcase from "components/ProjectShowcase";
import Section from "layouts/Section";

export default function HuluClone() {
  const project = {
    id: 5,
    title: "Hulu Clone",
    desc: "Ce projet est un clone de la page d'accueil du site de streaming américain Hulu. Les images et les détails des filmes sont récupérés avec l'API de TMDB (The Movie Data Base). J'ai appris à utiliser les queries du router de NextJS pour afficher les filmes selon leur catégorie. J'ai utilisé le framework Tailwind pour le CSS.",
    stack: ["NextJS", "TailwindCSS"],
    links: [
      {
        site: "https://hulu-clone-rkessal.vercel.app",
        repo: "https://github.com/rkessal/hulu-clone",
      },
    ],
  };
  return (
    <Project title="Hulu Clone" desc="Projet Hulu Clone">
      <Section>
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
          key={project.id}
        >
          <ProjectItemShowcase src={hulu} width={1903} height={955} />
          <ProjectItemShowcase src={hulu2} width={1903} height={965} />
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <ProjectItemShowcase src={huluMobile} width={437} height={965} />
            <ProjectItemShowcase src={huluMobile2} width={437} height={965} />
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
