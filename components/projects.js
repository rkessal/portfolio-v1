import Project from "./project";
import Section from "../layouts/section";
import logo from "../assets/logo.svg";
import Image from "next/image";

export default function Projects({ data, error }) {
  if (!data)
    return (
      <div className="flex items-center">
        <Image src={logo} height={100} width={100} />
      </div>
    );

  data = JSON.parse(data);
  data = data.reverse();
  console.log(data);
  return (
    <Section>
      <div className="space-y-12">
        {data.map((project) => (
          <Project
            data={data}
            error={error}
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
