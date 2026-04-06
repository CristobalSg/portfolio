import { contactContent, socialLinks } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.description}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="graphite-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300/80">Canales</p>

            <div className="mt-6 space-y-5">
              {contactContent.methods.map((method) => (
                <a key={method.label} href={method.href} className="block transition hover:text-orange-200">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {method.label}
                  </p>
                  <p className="mt-2 text-lg text-zinc-100">{method.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-white/6 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Redes</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="graphite-button-secondary rounded-full px-4 py-2 text-sm transition hover:text-orange-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="graphite-card rounded-[2rem] p-6 sm:p-8">
            {/* Conecta este formulario a tu servicio preferido cuando reemplaces los placeholders. */}
            <form onSubmit={(event) => event.preventDefault()} className="space-y-5">
              {contactContent.formFields.map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-2 block text-sm font-semibold text-zinc-100">{field.label}</span>

                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      rows={6}
                      placeholder={field.placeholder}
                      className="graphite-input w-full rounded-[1.5rem] px-4 py-3 transition"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="graphite-input w-full rounded-[1.5rem] px-4 py-3 transition"
                    />
                  )}
                </label>
              ))}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="graphite-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"
                >
                  {contactContent.submitLabel}
                </button>

                <p className="max-w-md text-sm leading-6 text-zinc-500">{contactContent.note}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
