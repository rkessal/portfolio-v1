import Section from "../layouts/section";
import "react-medium-image-zoom/dist/styles.css";
import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import ProjectItemShowcase from "../components/projectItemShowcase";
import oms from "../assets/oms/oms.png";
import oms2 from "../assets/oms/oms-2.png";
import oms3 from "../assets/oms/oms-3.png";
import omsMobile2 from "../assets/oms/oms-2-mobile.png";
import omsMobile3 from "../assets/oms/oms-3-mobile.png";

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
      <Section>
        <ProjectShowcase
          title={project.title}
          desc={project.desc}
          stack={project.stack}
          links={project.links}
          key={project.id}
        >
          <ProjectItemShowcase src={oms} width={1903} height={1503} />
          <ProjectItemShowcase src={oms2} width={1903} height={2570} />
          <ProjectItemShowcase src={oms3} width={1903} height={3284} />
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <ProjectItemShowcase src={omsMobile2} width={437} height={965} />
            <ProjectItemShowcase src={omsMobile3} width={437} height={965} />
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
