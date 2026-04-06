import type { Project } from "../../types/content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="graphite-card group rounded-[2rem]">
      <div className="border-b border-white/6 bg-[linear-gradient(180deg,rgba(40,40,44,0.98),rgba(26,26,29,0.96))] p-5">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/6 bg-[#202023]">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-zinc-50">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-zinc-400">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="graphite-chip rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="graphite-button-secondary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
