import Image from "next/image";
import Section from "../layouts/section";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import BackToHome from "../components/backToHome";
import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";

export default function Oms() {
  const project = {
    id: 5,
    title: "Organisation Mondiale de la solidarité",
    desc: "L'organisation mondiale de la solidarité est une association située à Besançon dans l'Est de la France et qui a pour but de récolter des dons et aider les personnes dans le besoin.",
    stack: ["Wordpress", "Elementor"],
    links: [{ site: "http://organisationmondialedelasolidarite.com/" }],
  };

  return (
    <Project title="OMS" desc="Projet Organisation mondiale de la solidarité">
      <BackToHome />
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
                src="/oms.png"
                layout="responsive"
                width={1920}
                height={887}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/oms-mobile.png"
                layout="responsive"
                width={450}
                height={887}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-4 md:order-2">
            <Zoom>
              <Image
                src="/oms-2.png"
                layout="responsive"
                width={1920}
                height={887}
              />
            </Zoom>
          </div>
          <div className="rounded-lg shadow-lg overflow-hidden w-full md:col-span-1">
            <Zoom>
              <Image
                src="/oms-2-mobile.png"
                layout="responsive"
                width={450}
                height={887}
              />
            </Zoom>
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
