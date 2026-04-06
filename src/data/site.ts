import type {
  ContactField,
  ContactMethod,
  CtaLink,
  HeroMetric,
  NavigationLink,
  SocialLink,
} from "../types/content";

export const siteMetadata = {
  name: "Tu Nombre",
  monogram: "TN",
  role: "Frontend Developer / Product Builder",
  location: "Basado en tu ciudad, disponible remoto",
};

export const navigationLinks: NavigationLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre mi", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

// Reemplaza estos textos por tu propuesta de valor real.
export const heroContent = {
  eyebrow: "Portafolio personal",
  title: "Diseño y desarrollo experiencias digitales limpias, utiles y memorables.",
  subtitle:
    "Usa este espacio para resumir lo que haces, el tipo de problemas que resuelves y el valor que aportas en pocas lineas.",
  ctaLinks: [
    { label: "Ver proyectos", href: "#projects", variant: "primary" },
    { label: "Contactar", href: "#contact", variant: "secondary" },
  ] satisfies CtaLink[],
  metrics: [
    { label: "Especialidad", value: "Interfaces escalables" },
    { label: "Enfoque", value: "Producto + desarrollo" },
    { label: "Disponibilidad", value: "Abierto a oportunidades" },
  ] satisfies HeroMetric[],
};

// Divide o reordena estos bloques segun tu historia profesional.
export const aboutContent = {
  eyebrow: "Sobre mi",
  title: "Una seccion preparada para contar tu recorrido con claridad.",
  intro:
    "Este bloque esta pensado para que puedas escribir una presentacion breve y luego ampliar con parrafos mas personales o tecnicos.",
  paragraphs: [
    "Cuenta aqui tu perfil profesional, el tipo de proyectos en los que has trabajado y las industrias o productos que mejor conoces.",
    "Tambien puedes explicar tu forma de colaborar, tus fortalezas principales o aquello que te diferencia al construir interfaces y experiencias.",
  ],
  highlights: [
    { label: "Enfoque", value: "UX, performance y mantenibilidad" },
    { label: "Forma de trabajo", value: "Iterativo, colaborativo y orientado a resultados" },
    { label: "Objetivo actual", value: "Convertir ideas en productos claros y utiles" },
  ],
};

export const contactContent = {
  eyebrow: "Contacto",
  title: "Todo listo para que te escriban o agenden una conversacion.",
  description:
    "Puedes reemplazar estos datos por tus canales reales y conectar el formulario a un servicio externo o a tu propio backend cuando lo necesites.",
  methods: [
    { label: "Email", value: "hola@tuportafolio.dev", href: "mailto:hola@tuportafolio.dev" },
    { label: "Telefono", value: "+56 9 1234 5678", href: "tel:+56912345678" },
    { label: "Ubicacion", value: "Santiago, Chile", href: "https://maps.google.com" },
  ] satisfies ContactMethod[],
  formFields: [
    { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
    { name: "email", label: "Correo", type: "email", placeholder: "tu@correo.com" },
    {
      name: "message",
      label: "Mensaje",
      type: "textarea",
      placeholder: "Cuéntame sobre tu proyecto o necesidad.",
    },
  ] satisfies ContactField[],
  submitLabel: "Enviar consulta",
  note: "Placeholder listo para integrar con Formspree, EmailJS o un endpoint propio.",
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Behance", href: "https://www.behance.net" },
];

export const footerContent = {
  blurb: "Plantilla base de portafolio lista para reemplazar contenido placeholder por contenido real.",
  legal: `© ${new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.`,
};
