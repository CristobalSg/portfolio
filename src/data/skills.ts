import type { SkillCategory } from "../types/content";

export const skillsSection = {
  eyebrow: "Skills / Tech stack",
  title: "Habilidades organizadas para renderizarse facilmente desde datos.",
  description:
    "La estructura ya esta separada por categorias para que luego puedas moverla a un CMS, un JSON o una API sin rehacer la UI.",
};

// Reemplaza, agrega o quita categorias segun tu stack real.
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Tecnologias para construir interfaces modernas y mantenibles.",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend / Integracion",
    description: "Herramientas utiles cuando el proyecto necesita datos y servicios.",
    items: ["Node.js", "REST APIs", "GraphQL", "Firebase", "PostgreSQL"],
  },
  {
    title: "Diseno y workflow",
    description: "Soporte para prototipado, colaboracion y calidad del producto.",
    items: ["Figma", "GitHub", "Notion", "Testing Library", "Lighthouse"],
  },
];
