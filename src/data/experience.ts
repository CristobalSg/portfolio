import type { TimelineEntry } from "../types/content";

export const experienceSection = {
  eyebrow: "Experiencia / Educacion",
  title: "Una linea de tiempo preparada para multiples etapas de tu perfil.",
  description:
    "Puedes usar esta misma estructura para roles profesionales, formacion academica, certificaciones o hitos relevantes.",
};

// Ajusta el orden y el contenido segun el recorrido que quieras contar.
export const timelineEntries: TimelineEntry[] = [
  {
    id: "experience-product-designer",
    type: "Experiencia",
    title: "Frontend Developer",
    organization: "Nombre de empresa",
    period: "2024 - Actualidad",
    location: "Remoto",
    summary: "Describe aqui tu rol principal, el contexto del equipo y el tipo de producto en el que trabajaste.",
    bullets: [
      "Placeholder para un logro concreto o mejora entregada.",
      "Placeholder para una responsabilidad tecnica o colaborativa.",
    ],
  },
  {
    id: "experience-freelance",
    type: "Experiencia",
    title: "Freelance / Consultoria",
    organization: "Clientes varios",
    period: "2022 - 2024",
    location: "Latam / Remoto",
    summary: "Espacio para resumir proyectos independientes, trabajo con clientes o colaboraciones externas.",
    bullets: [
      "Placeholder para proyectos desarrollados de punta a punta.",
      "Placeholder para mejoras de conversion, performance o experiencia.",
    ],
  },
  {
    id: "education-university",
    type: "Educacion",
    title: "Carrera o programa academico",
    organization: "Nombre de institucion",
    period: "2018 - 2022",
    location: "Ciudad / Pais",
    summary: "Usa este bloque para estudios formales, bootcamps, diplomados o certificaciones importantes.",
    bullets: [
      "Placeholder para enfasis, especializacion o proyecto final.",
      "Placeholder para una certificacion o reconocimiento relevante.",
    ],
  },
];
