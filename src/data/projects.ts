import projectPlaceholder from "../assets/placeholders/project-placeholder.svg";
import type { Project } from "../types/content";

export const projectsSection = {
  eyebrow: "Proyectos",
  title: "Tarjetas reutilizables listas para mostrar trabajos reales.",
  description:
    "Cada proyecto usa la misma estructura para titulo, descripcion, tecnologias, enlaces e imagen, lo que facilita editar, duplicar o cargar contenido dinamico.",
};

// Sustituye estos mocks por tus proyectos reales.
export const projects: Project[] = [
  {
    slug: "project-alpha",
    title: "Proyecto Alpha",
    description:
      "Placeholder para un caso de estudio donde quieras explicar el problema, tu aporte y el resultado obtenido.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Demo", href: "https://example.com/demo-alpha" },
      { label: "Repositorio", href: "https://github.com/example/project-alpha" },
    ],
    image: {
      src: projectPlaceholder,
      alt: "Placeholder visual para Proyecto Alpha",
    },
  },
  {
    slug: "project-beta",
    title: "Proyecto Beta",
    description:
      "Espacio preparado para un proyecto de producto, landing o dashboard con foco en arquitectura y experiencia de usuario.",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    links: [
      { label: "Demo", href: "https://example.com/demo-beta" },
      { label: "Repositorio", href: "https://github.com/example/project-beta" },
    ],
    image: {
      src: projectPlaceholder,
      alt: "Placeholder visual para Proyecto Beta",
    },
  },
  {
    slug: "project-gamma",
    title: "Proyecto Gamma",
    description:
      "Ideal para mostrar un experimento, una colaboracion o una pieza de portafolio con impacto visual.",
    technologies: ["Vite", "Framer Motion", "Contentful"],
    links: [
      { label: "Demo", href: "https://example.com/demo-gamma" },
      { label: "Repositorio", href: "https://github.com/example/project-gamma" },
    ],
    image: {
      src: projectPlaceholder,
      alt: "Placeholder visual para Proyecto Gamma",
    },
  },
];
