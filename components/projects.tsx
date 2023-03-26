import Project from "./project";
import Section from "../layouts/section";
import { urlFor } from "../lib/sanity";

export default function Projects({ projectData }: { projectData: any[] }) {
  return (
    <Section>
      <div className="space-y-12">
        {projectData &&
          projectData.map((project: any) => (
            <Project
              key={project._id}
              pos={projectData.indexOf(project)}
              label={project.title}
              link={`/${project.link}`}
              src={urlFor(project.image).url()}
              tags={project.stack}
            />
          ))}
      </div>
    </Section>
  );
}
