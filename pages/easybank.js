import ProjectShowcase from "../components/projectShowcase";
import Project from "../layouts/project";
import Section from "../layouts/section";
import ProjectItemShowcase from "../components/projectItemShowcase";
import easybank from "../assets/easybank/easybank.png";
import easybank2 from "../assets/easybank/easybank-2.png";
import easybankMobile from "../assets/easybank/easybank-mobile.png";
import easybankMobile2 from "../assets/easybank/easybank-2-mobile.png";
import easybankMobile3 from "../assets/easybank/easybank-3-mobile.png";
import easybankMobile4 from "../assets/easybank/easybank-4-mobile.png";

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
          <ProjectItemShowcase src={easybank} width={1903} height={1323} />
          <ProjectItemShowcase src={easybank2} width={1903} height={893} />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-4">
            <ProjectItemShowcase
              src={easybankMobile}
              width={437}
              height={965}
            />
            <ProjectItemShowcase
              src={easybankMobile2}
              width={437}
              height={965}
            />
            <ProjectItemShowcase
              src={easybankMobile3}
              width={437}
              height={965}
            />
            <ProjectItemShowcase
              src={easybankMobile4}
              width={437}
              height={965}
            />
          </div>
        </ProjectShowcase>
      </Section>
    </Project>
  );
}
