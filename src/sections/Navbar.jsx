import portfolio from "../data/portfolio";
import { LogoMark, NavIcon } from "../components/Icons";

export default function Navbar() {
  const { site, nav, socials } = portfolio;

  return (
    <header className="sticky top-0 z-50 bg-[var(--ca-surface)]/95 backdrop-blur-sm">
      <div className="relative flex items-stretch justify-between border-b border-[var(--ca-ink)]/10 pl-4 pr-3 sm:pl-5">
        <div className="flex items-stretch gap-2">
          <a aria-label={site.title} className="flex items-center pr-2 transition-transform hover:scale-110" href="#">
            <LogoMark />
          </a>
          <nav className="hidden items-stretch md:flex">
            {nav.map((item) => (
              <a
                key={item.label}
                aria-current={item.current ? "page" : undefined}
                href={item.href}
                className={`ca-mono flex items-center justify-center gap-2.5 px-5 py-4 text-sm font-bold uppercase leading-none tracking-widest transition-colors ${
                  item.current
                    ? "bg-[var(--ca-yellow)] text-white"
                    : "text-[var(--ca-ink)] hover:bg-[var(--ca-cyan)]"
                }`}
              >
                <span className="transition-transform group-hover:scale-110">
                  <NavIcon name={item.icon} />
                </span>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 py-2">
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
    </header>
  );
}
