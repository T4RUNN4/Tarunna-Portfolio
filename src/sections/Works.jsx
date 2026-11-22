import { motion } from "framer-motion";
import portfolio, { projectThemes } from "../data/portfolio";
import SafeImage from "../components/SafeImage";
import { ArrowIcon } from "../components/Icons";
import { FadeInView, LetterRevealInView, ease } from "../components/Motion";

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden>
      <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
    </svg>
  );
}

function ProjectTab({ project, index }) {
  const theme = projectThemes[project.theme];
  const isFirst = index === 0;
  const tabClip = isFirst
    ? "pl-5 [clip-path:polygon(0_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-9 sm:[clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)]"
    : "pl-16 [clip-path:polygon(44px_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-[6.75rem] sm:[clip-path:polygon(76px_0,calc(100%-76px)_0,100%_100%,0_100%)]";

  return (
    <div
      className="flex"
      style={{
        marginLeft: index === 0 ? 0 : `min(calc(${index * 21}% - 72px), calc(100% - 340px))`,
      }}
    >
      <span
        className={`ca-mono inline-flex items-center gap-2 py-3.5 pr-14 text-xs font-bold uppercase tracking-[0.2em] sm:gap-3.5 sm:py-6 sm:pr-28 sm:text-base ${theme.text} ${tabClip}`}
        style={{ backgroundColor: theme.bg }}
      >
        <SparkIcon />
        Project {project.number}
      </span>
    </div>
  );
}

function ProjectImage({ src, alt, tilt = -2.5 }) {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" style={{ transform: `rotate(${tilt}deg)` }}>
      <span aria-hidden className="absolute -left-4 -top-3 z-10 h-6 w-24 -rotate-[8deg] bg-white/70 shadow-[0_1px_3px_rgba(17,18,18,0.18)]" />
      <span aria-hidden className="absolute -right-3 -top-2 z-10 h-6 w-20 rotate-[12deg] bg-white/70 shadow-[0_1px_3px_rgba(17,18,18,0.18)]" />
      <div className="relative overflow-hidden border-[4px] border-white bg-[var(--ca-surface)] shadow-[6px_8px_0_rgba(17,18,18,0.18)]">
        <SafeImage
          src={src}
          alt={alt}
          className="ca-project-img block h-auto w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const theme = projectThemes[project.theme];

  return (
    <motion.article
      className="ca-project-card lg:sticky lg:top-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease }}
    >
      <ProjectTab project={project} index={index} />

      <div
        className="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:min-h-[calc(100vh-14rem)] lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12 lg:p-14"
        style={{ backgroundColor: theme.bg }}
      >
        <div className="flex flex-col">
          <span className={`ca-mono inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${theme.text}`}>
            <span className={`h-3 w-3 rounded-full ${theme.text.includes("white") ? "bg-white" : "bg-[var(--ca-ink)]"}`} />
            {project.date}
          </span>
          <h2 className={`mt-6 text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl ${theme.text}`}>
            {project.title}
          </h2>
          <p className={`mt-5 max-w-lg text-lg leading-relaxed ${theme.muted}`}>
            {project.description}
          </p>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`ca-mono mt-8 inline-flex items-center gap-2.5 self-start border-b-2 pb-1 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-80 ${theme.text}`}
          >
            View project
            <span className="ca-link-arrow inline-flex">
              <ArrowIcon />
            </span>
          </a>
          <div className="mt-auto flex flex-wrap gap-2.5 pt-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`ca-mono ca-hover-pop px-4 pb-2 pt-2.5 text-base font-bold uppercase tracking-wide [clip-path:polygon(0_28%,12%_0,100%_0,100%_100%,0_100%)] ${theme.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:self-center">
          <ProjectImage
            src={project.image}
            alt={project.title}
            tilt={index % 2 === 0 ? -2.5 : 2}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Works() {
  const { works } = portfolio;

  return (
    <section id="work" className="ca-grid scroll-mt-24 pb-24 pt-10 sm:pt-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 text-center sm:pb-24">
        <FadeInView y={16}>
          <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">{works.label}</p>
        </FadeInView>
        <h2 className="mt-4">
          <LetterRevealInView
            text={works.title}
            className="ca-display text-6xl uppercase leading-[0.9] tracking-tight text-[var(--ca-ink)] sm:text-8xl"
          />
        </h2>
        <FadeInView delay={0.2} y={20}>
          <p className="ca-hand mt-5 max-w-xl text-2xl leading-snug text-[var(--ca-ink)]/75 sm:text-3xl">
            {works.blurb}
          </p>
        </FadeInView>
      </div>

      <div className="flex flex-col gap-16 px-4 sm:px-8 lg:gap-[12vh] lg:px-20">
        {works.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
