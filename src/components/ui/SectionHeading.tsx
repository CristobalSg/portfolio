type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">{eyebrow}</p>
      <h2 className="font-display mt-4 text-4xl leading-none text-zinc-50 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}
