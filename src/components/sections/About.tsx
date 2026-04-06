import SectionHeading from "../ui/SectionHeading";

import { aboutContent } from "../../data/site";

export default function About() {
  return (
    <section id="about" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={aboutContent.intro}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="graphite-card rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-zinc-400">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {aboutContent.highlights.map((item) => (
              <article key={item.label} className="graphite-card rounded-[2rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200/75">{item.label}</p>
                <p className="mt-3 text-lg leading-7 text-zinc-100">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
