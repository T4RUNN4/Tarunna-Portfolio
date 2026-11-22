import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import SafeImage from "../components/SafeImage";
import { FadeInView, LetterRevealInView, ease } from "../components/Motion";

export default function Contact() {
  const { contact } = portfolio;

  return (
    <section id="contact" className="ca-grid relative scroll-mt-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 pb-4 pt-16 text-center sm:gap-6 sm:pt-20">
        <motion.div
          className="cursor-default"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            className="h-52 w-52 overflow-visible sm:h-64 sm:w-64 [filter:drop-shadow(2px_3px_0_rgba(25,21,16,0.28))]"
            aria-hidden
          >
            <circle cx="100" cy="100" r="88" fill="#f7c948" stroke="var(--ca-ink)" strokeWidth="3" />
            <circle cx="56" cy="120" r="12" fill="var(--ca-magenta)" opacity="0.45" />
            <circle cx="144" cy="120" r="12" fill="var(--ca-magenta)" opacity="0.45" />
            <g className="ca-blink">
              <rect x="65" y="68" width="16" height="42" rx="8" fill="var(--ca-ink)" />
              <rect x="119" y="68" width="16" height="42" rx="8" fill="var(--ca-ink)" />
            </g>
            <path
              d="M62 130 Q100 172 138 130"
              fill="none"
              stroke="var(--ca-ink)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        <h2>
          <LetterRevealInView
            text={contact.title}
            className="ca-display text-7xl uppercase leading-[0.9] tracking-tight text-[var(--ca-ink)] sm:text-9xl"
          />
        </h2>
        <FadeInView delay={0.15}>
          <p className="ca-hand mx-auto max-w-xl text-2xl leading-snug text-[var(--ca-ink)]/80 sm:text-3xl">
            {contact.description}
          </p>
        </FadeInView>
      </div>

      <div className="px-4 pb-20 pt-10 sm:px-8 lg:px-20">
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 28, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="relative z-20 mb-6 flex justify-center lg:absolute lg:-left-24 lg:-top-14 lg:mb-0 lg:block lg:w-80"
          >
            <div className="relative w-full max-w-sm bg-[var(--ca-cyan)] p-5 pt-6 shadow-[2px_6px_18px_rgba(17,18,18,0.22)]">
              <span aria-hidden className="absolute -left-4 -top-2 z-10 h-5 w-16 -rotate-[38deg] bg-[var(--ca-yellow-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
              <span aria-hidden className="absolute -right-4 -top-2 z-10 h-5 w-16 rotate-[38deg] bg-[var(--ca-pink-soft)]/70 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
              <div className="flex items-start gap-3">
                <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <SafeImage
                    src={contact.comment.avatar}
                    alt={contact.comment.author}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </span>
                <div>
                  <p className="font-semibold text-[var(--ca-ink)]">{contact.comment.author}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ca-ink)]/75">
                    {contact.comment.note}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[var(--ca-blue)] px-2.5 py-1 text-xs font-bold text-[var(--ca-ink)]">
                    <svg viewBox="0 0 24 24" fill="var(--ca-yellow)" stroke="var(--ca-ink)" strokeWidth="1.5" className="h-3.5 w-3.5" aria-hidden>
                      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
                    </svg>
                    {contact.comment.reactions}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <a aria-label="Send email" className="group relative block" href={contact.card.href}>
            <span aria-hidden className="absolute -left-5 -top-3 z-10 h-6 w-28 -rotate-[8deg] bg-white/60 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
            <span aria-hidden className="absolute -right-4 top-8 z-10 h-6 w-24 rotate-[10deg] bg-white/60 shadow-[0_1px_3px_rgba(17,18,18,0.15)]" />
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden border-[4px] border-[var(--ca-ink)] bg-[var(--ca-yellow)] px-6 py-10 text-center sm:px-10 sm:py-14"
            >
              <p className="ca-hand text-2xl text-white sm:text-3xl">{contact.card.eyebrow}</p>
              <p className="ca-display mt-3 text-6xl uppercase tracking-tight text-white sm:text-8xl">
                {contact.card.title}
              </p>
              <p className="ca-mono mt-4 text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                {contact.card.hint}
              </p>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
