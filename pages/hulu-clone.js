import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import Section from "../layouts/section";

export default function HuluClone() {
  const project = {
    id: 5,
    title: "Hulu Clone",
    desc: "Ce projet est un clone de la page d'accueil du site de streaming américain Hulu. Les images et les détails des films sont récupérés avec l'API de TMDB (The Movie Data Base). J'ai appris à utiliser les queries du router de NextJS pour afficher les films selon leur catégorie. J'ai utilisé le framework Tailwind pour le CSS.",
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
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 ">
            <Zoom>
              <Image
                src="/hulu.png"
                layout="responsive"
                width={1820}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/hulu-mobile.png"
                layout="responsive"
                width={437}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-2">
            <Zoom>
              <Image
                src="/hulu-2.png"
                layout="responsive"
                width={1820}
                height={965}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/hulu-2-mobile.png"
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
