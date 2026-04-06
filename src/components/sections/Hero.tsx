import { heroContent, siteMetadata } from "../../data/site";

export default function Hero() {
  return (
    <section id="home" className="px-6 pb-12 pt-16 sm:px-10 sm:pt-20 lg:px-12 lg:pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300/80">
            {heroContent.eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-5xl leading-none text-zinc-50 sm:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {heroContent.ctaLinks.map((link) => {
              const className =
                link.variant === "primary"
                  ? "graphite-button-primary"
                  : "graphite-button-secondary";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${className}`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <aside className="graphite-card rounded-[2rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100">Perfil rapido</p>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Rol</dt>
              <dd className="mt-2 text-lg font-medium text-zinc-100">{siteMetadata.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Ubicacion</dt>
              <dd className="mt-2 text-lg font-medium text-zinc-100">{siteMetadata.location}</dd>
            </div>
          </dl>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroContent.metrics.map((metric) => (
              <div key={metric.label} className="graphite-chip rounded-[1.5rem] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-200/75">
                  {metric.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-200">{metric.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
