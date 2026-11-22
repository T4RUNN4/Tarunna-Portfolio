import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import SafeImage from "../components/SafeImage";
import { ArrowIcon } from "../components/Icons";
import { FadeUp, LetterReveal, ease } from "../components/Motion";

function NotePill({ note, className = "", style }) {
  return (
    <span
      className={`ca-mono ca-hover-pop inline-block rounded-full border-[3px] border-white px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-[0_4px_10px_rgba(25,21,16,0.25)] ${className}`}
      style={{ color: note.ink || "var(--ca-ink)", ...style }}
    >
      {note.lines ? (
        <span className="flex flex-col items-center gap-0.5 leading-none">
          {note.lines.map((line) => (
            <span key={line} className="whitespace-nowrap">
              {line}
            </span>
          ))}
        </span>
      ) : (
        note.text
      )}
    </span>
  );
}

export default function Hero({ ready = false }) {
  const { hero } = portfolio;

  return (
    <section className="ca-grid relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-4 pb-12 pt-4 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {hero.floats.map((f, i) => (
          <motion.div
            key={f.className}
            className={`absolute ${f.className}`}
            initial={{ opacity: 0, scale: 0.7, y: 0 }}
            animate={ready ? { opacity: 1, scale: 1, y: [0, -8, 0] } : { opacity: 0, scale: 0.7, y: 0 }}
            transition={
              ready
                ? {
                    opacity: { duration: 0.55, delay: 0.3 + i * 0.1 },
                    scale: { duration: 0.55, delay: 0.3 + i * 0.1, ease },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 + i * 0.2 },
                  }
                : { duration: 0.3 }
            }
          >
            <span
              className={`flex h-20 w-20 items-center justify-center rounded-full bg-[var(--ca-orange)] p-1.5 ${
                f.className.includes("-rotate") ? "-rotate-6" : "rotate-6"
              }`}
            >
              <span className="relative h-full w-full overflow-hidden rounded-full">
                <SafeImage src={f.src} className="ca-sharp-media absolute inset-0 h-full w-full object-cover" decoding="async" />
              </span>
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center pt-1 text-center sm:pt-2">
        <FadeUp ready={ready} delay={0.05} y={16}>
          <div className="flex flex-col items-center text-[var(--ca-ink)]">
            <p className="ca-hand text-2xl sm:text-3xl">{hero.label}</p>
            <svg
              viewBox="0 0 64 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              className="mt-1 h-3 w-20"
              aria-hidden
            >
              <path d="M3 4c18-3 40-3 58 0" />
              <path d="M9 9c14-2.5 32-2.5 46 0" />
            </svg>
          </div>
        </FadeUp>

        <div className="relative mt-5">
          <motion.div
            className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 lg:block"
            initial={{ opacity: 0, x: 20, rotate: -14 }}
            animate={ready ? { opacity: 1, x: 0, rotate: -4 } : { opacity: 0, x: 20, rotate: -14 }}
            transition={{ duration: 0.65, delay: 0.35, ease }}
          >
            <NotePill
              note={hero.notes[0]}
              className="pointer-events-auto"
              style={{ backgroundColor: hero.notes[0].color }}
            />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute top-1/2 left-full ml-3 hidden -translate-y-1/2 lg:block"
            initial={{ opacity: 0, x: -20, rotate: 14 }}
            animate={ready ? { opacity: 1, x: 0, rotate: 4 } : { opacity: 0, x: -20, rotate: 14 }}
            transition={{ duration: 0.65, delay: 0.42, ease }}
          >
            <NotePill
              note={hero.notes[1]}
              className="pointer-events-auto"
              style={{ backgroundColor: hero.notes[1].color }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.55 }}
            animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.55 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="ca-doodle-box relative inline-block border-[3px] px-5 py-1 sm:px-10 sm:py-2"
            style={{ borderColor: "var(--ca-orange)" }}
          >
            <LetterReveal
              text={hero.name}
              ready={ready}
              delay={0.2}
              stagger={0.05}
              className="ca-display text-[24vw] leading-[0.95] tracking-tight text-[var(--ca-ink)] sm:text-9xl lg:text-[12rem]"
            />
          </motion.div>
        </div>

        <FadeUp ready={ready} delay={0.55} y={16}>
          <p className="ca-mono mt-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--ca-gray)] sm:text-sm">
            {hero.status}
          </p>
        </FadeUp>

        <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <FadeUp ready={ready} delay={0.62} y={18}>
            <span className="ca-mono ca-hover-pop -rotate-2 rounded-full border-[3px] border-white bg-[var(--ca-yellow)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_4px_10px_rgba(25,21,16,0.2)]">
              {hero.role}
            </span>
          </FadeUp>
          <FadeUp ready={ready} delay={0.7} y={18}>
            <span className="ca-mono ca-hover-pop rotate-2 rounded-full border-[3px] border-white bg-[var(--ca-pink-soft)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.2)]">
              {hero.location.city},{" "}
              <abbr title={hero.location.country} className="cursor-help no-underline">
                {hero.location.countryCode}
              </abbr>
            </span>
          </FadeUp>
        </div>

        <h1 className="mt-10 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--ca-ink)] sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.headline.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="relative mr-[0.28em] inline-block last:mr-0"
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: 0.75 + i * 0.05, ease }}
            >
              {i === hero.headlineAccentIndex && (
                <>
                  <span
                    className="ca-wobble absolute -left-3 -top-2 h-4 w-4 rounded-full bg-[var(--ca-green)] sm:-left-4 sm:h-5 sm:w-5"
                    aria-hidden
                  />
                  <span
                    className="absolute -bottom-1 -right-3 h-3.5 w-3.5 rounded-full bg-[var(--ca-magenta)] sm:-right-4 sm:h-4 sm:w-4"
                    aria-hidden
                  />
                </>
              )}
              {word}
            </motion.span>
          ))}
        </h1>

        <FadeUp ready={ready} delay={1.15} y={20}>
          <a
            href={hero.cta.href}
            className="ca-mono ca-hover-lift mt-10 inline-flex items-center gap-2.5 border-[3px] border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white"
          >
            {hero.cta.label}
            <span className="ca-link-arrow inline-flex">
              <ArrowIcon />
            </span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
