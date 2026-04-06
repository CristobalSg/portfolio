import type { SkillCategory } from "../../types/content";

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export default function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <article className="graphite-card rounded-[2rem] p-6">
      <div className="max-w-sm">
        <h3 className="text-xl font-semibold text-zinc-50">{category.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{category.description}</p>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li
            key={item}
            className="graphite-chip rounded-full px-3 py-1.5 text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
