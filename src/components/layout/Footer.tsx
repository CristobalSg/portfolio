import { footerContent, navigationLinks, siteMetadata, socialLinks } from "../../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#171719]/70">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300/80">{siteMetadata.name}</p>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{footerContent.blurb}</p>
          <p className="mt-4 text-sm text-zinc-500">{footerContent.legal}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100">Secciones</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-zinc-50">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-100">Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-zinc-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
