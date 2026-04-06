import { projects, projectsSection } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          description={projectsSection.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
