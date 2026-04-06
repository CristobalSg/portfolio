import { experienceSection, timelineEntries } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={experienceSection.eyebrow}
          title={experienceSection.title}
          description={experienceSection.description}
        />

        <div className="mt-10 space-y-5">
          {timelineEntries.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
