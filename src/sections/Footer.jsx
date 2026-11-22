import portfolio from "../data/portfolio";

export default function Footer() {
  const { footer, socials } = portfolio;

  return (
    <footer className="ca-grid relative">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 lg:px-20">
        <div className="flex flex-col gap-10 border-t border-[var(--ca-ink)]/15 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="ca-display text-4xl uppercase tracking-tight text-[var(--ca-ink)] sm:text-5xl">
              {footer.name}
            </p>
            <p className="ca-mono mt-2 text-sm font-bold uppercase tracking-[0.2em] text-[var(--ca-gray)]">
              {footer.role}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:items-end">
            <nav className="flex flex-wrap gap-5">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="ca-mono text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] transition-colors hover:text-[var(--ca-yellow)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="ca-hover-lift flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow-[1.5px_1.5px_0_rgba(25,21,16,0.25)] hover:scale-105"
                  style={{ backgroundColor: s.color, color: s.ink }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--ca-ink)]/10 pt-6">
          <p className="ca-mono text-xs font-bold uppercase tracking-widest text-[var(--ca-gray)]">
            {footer.copyright}
          </p>
          <p className="text-right text-[10px] leading-relaxed text-[var(--ca-gray)]/70">
            {footer.credit.label}{" "}
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              {footer.credit.href}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
