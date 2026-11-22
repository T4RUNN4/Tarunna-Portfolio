import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import SafeImage from "../components/SafeImage";
import { FadeInView, ease } from "../components/Motion";

function Polaroid({ photo, delay = 0 }) {
  return (
    <motion.figure
      className={`relative inline-block w-full max-w-xs bg-white p-2 pb-1 shadow-[0_6px_18px_rgba(17,18,18,0.22)] ${photo.rotate}`}
      initial={{ opacity: 0, y: 32, rotate: photo.rotate.includes("-") ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, rotate: photo.rotate.includes("-") ? -3 : 3 }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      <span aria-hidden className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--ca-cyan)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
      <span aria-hidden className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--ca-yellow-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
      <div className="aspect-[4/5] w-full overflow-hidden">
        <div className="relative h-full w-full overflow-hidden">
          <SafeImage
            src={photo.src}
            alt={photo.caption}
            className="ca-sharp-media absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <figcaption className="ca-hand mt-1 text-center text-lg leading-tight text-[var(--ca-ink)]/70">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

export default function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="ca-grid relative scroll-mt-24 px-4 pb-20 sm:pb-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <FadeInView y={16}>
          <p className="ca-hand text-2xl text-[var(--ca-ink)] sm:text-3xl">{about.label}</p>
        </FadeInView>

        <FadeInView
          delay={0.1}
          className="mt-6 w-full rounded-[2rem] border-[3px] border-[var(--ca-ink)] bg-white px-6 py-8 sm:px-10 sm:py-10"
        >
          <p className="ca-hand text-3xl text-[var(--ca-ink)] sm:text-4xl">{about.title}</p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ca-ink)]/85 sm:text-xl">
            {about.body}
          </p>
        </FadeInView>

        <div className="mt-12 flex w-full justify-center">
          {about.photos.map((photo, i) => (
            <Polaroid key={photo.caption} photo={photo} delay={0.08 + i * 0.1} />
          ))}
        </div>

        <div className="mt-12 flex w-full flex-wrap justify-center gap-3">
          {about.skills.map((skill, i) => (
            <FadeInView key={skill.label} delay={0.05 * i} y={18}>
              <span className="ca-mono ca-hover-pop inline-flex items-center gap-2.5 rounded-full border-[3px] border-white bg-[var(--ca-yellow-soft)] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[var(--ca-ink)] shadow-[0_4px_10px_rgba(25,21,16,0.18)]">
                {skill.label}
                <span className="inline-flex items-center gap-1.5">
                  {skill.logos.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="h-5 w-5 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </span>
              </span>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
