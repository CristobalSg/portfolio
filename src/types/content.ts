export type NavigationLink = {
  label: string;
  href: string;
};

export type CtaLink = NavigationLink & {
  variant: "primary" | "secondary";
};

export type HeroMetric = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: {
    src: string;
    alt: string;
  };
};

export type TimelineEntry = {
  id: string;
  type: "Experiencia" | "Educacion";
  title: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type ContactField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
