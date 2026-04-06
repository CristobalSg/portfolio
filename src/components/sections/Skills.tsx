import { skillCategories, skillsSection } from "../../data/skills";
import SkillCategoryCard from "../ui/SkillCategoryCard";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={skillsSection.eyebrow}
          title={skillsSection.title}
          description={skillsSection.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
