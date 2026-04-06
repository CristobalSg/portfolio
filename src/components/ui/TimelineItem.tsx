import type { TimelineEntry } from "../../types/content";

type TimelineItemProps = {
  entry: TimelineEntry;
};

export default function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <article className="graphite-card rounded-[2rem] p-6 sm:p-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <span className="graphite-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {entry.type}
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-zinc-50">{entry.title}</h3>
          <p className="mt-2 text-base font-medium text-zinc-300">{entry.organization}</p>
        </div>

        <div className="text-sm leading-6 text-zinc-500 md:text-right">
          <p>{entry.period}</p>
          <p>{entry.location}</p>
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">{entry.summary}</p>

      <ul className="mt-5 space-y-3">
        {entry.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-zinc-400">
            <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
