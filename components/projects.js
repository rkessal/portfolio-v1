import Project from "./project";
import Section from "../layouts/section";

export default function Projects({ data, error }) {
  if (!data) return <div>Loading...</div>;

  data = JSON.parse(data);
  data = data.reverse();
  console.log(data);
  return (
    <Section>
      <div className="space-y-12">
        {data.map((project) => (
          <Project
            key={project.id}
            id={data.indexOf(project)}
            label={project.title}
            link={project.link}
            src={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </Section>
  );
}
