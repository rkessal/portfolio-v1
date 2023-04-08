import Section from "../layouts/section";
import "react-medium-image-zoom/dist/styles.css";
import ProjectShowcase, {
  ProjectDescriptionText,
  ProjectPresentationText,
} from "../components/projectShowcase";
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
          <ProjectDescriptionText>
            <p>
              Pour répondre aux besoins du client, j&apos;ai opté pour un site
              web simple et facile d&apos;utilisation. J&apos;ai choisi des
              couleurs basiques, noir et blanc, avec une police Serif pour les
              titres et une police sans Serif pour le contenu.
            </p>
          </ProjectDescriptionText>
          <ProjectItemShowcase src={oms2} width={1903} height={2570} />
          <ProjectDescriptionText title="Design et ergonomie">
            <p>
              Le site web a été conçu pour être simple et facile à utiliser. Les
              couleurs basiques, noir et blanc, ainsi que les polices Serif et
              sans Serif, assurent une lecture facile et agréable.
            </p>
            <p>
              Le site est également responsive, c&apos;est-à-dire qu&apos;il
              s&apos;adapte à l&apos;affichage sur différents dispositifs tels
              que les ordinateurs, les tablettes et les téléphones mobiles.
            </p>
          </ProjectDescriptionText>

          <ProjectItemShowcase src={oms3} width={1903} height={3284} />

          <ProjectDescriptionText title="Fonctionnalité principale">
            <p>
              La fonctionnalité de don était la plus importante du site.
              C&apos;est pourquoi j&apos;ai créé une page dédiée à cette
              fonctionnalité. Elle permet aux visiteurs de faire un don
              facilement et en toute sécurité.
            </p>
            <p>
              Un bouton &quot;Faire un don&quot; a été placé en évidence dans le
              pied de page, reprenant la couleur principale du logo de
              l&apos;association.
            </p>
          </ProjectDescriptionText>
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <ProjectItemShowcase src={omsMobile2} width={437} height={965} />
            <ProjectItemShowcase src={omsMobile3} width={437} height={965} />
          </div>

          <ProjectDescriptionText title="Navigation">
            <p>
              La navigation sur le site est simple et intuitive. Les visiteurs
              peuvent facilement trouver les informations dont ils ont besoin
              grâce aux menus et aux liens vers les différentes pages.
            </p>
            <p>
              Les pages sont également interconnectées, ce qui permet une
              navigation fluide et efficace.
            </p>
          </ProjectDescriptionText>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
