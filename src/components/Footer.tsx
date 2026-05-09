import { content } from "../content";

export default function Footer() {
  const { footer, site } = content;
  return (
    <footer className="border-t border-stone-200 bg-stone-100 py-12">
      <div className="container-page grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-xl font-bold text-forest-700">{site.name}</p>
          <p className="mt-2 text-sm text-stone-600">{site.description}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">
            Policy alignment
          </p>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            {footer.alignment}
          </p>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-stone-600">
        <p>{footer.contact.label}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {footer.sources.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-forest-700 underline-offset-4 hover:underline"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
