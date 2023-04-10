import Project from "./Project";
import Section from "../layouts/Section";
import { urlFor } from "../lib/sanity";

const Projects = ({ projectData }: { projectData: any[] }) => {
  return (
    <Section>
      <div className="space-y-12">
        {projectData &&
          projectData.map((project: any) => (
            <Project
              key={project._id}
              index={projectData.indexOf(project)}
              label={project.title}
              link={`/${project.link}`}
              src={urlFor(project.image).url()}
              tags={project.stack}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
