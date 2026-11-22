import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

export function FadeUp({ children, ready = true, delay = 0, className = "", y = 28, ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInView({ children, delay = 0, className = "", y = 28, ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, delay, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function LetterReveal({ text, ready = true, className = "", delay = 0, stagger = 0.04 }) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-block whitespace-nowrap">
        {[...text].map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            className="inline-block"
            initial={{ opacity: 0, y: "0.7em" }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: "0.7em" }}
            transition={{ duration: 0.45, delay: delay + i * stagger, ease }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

export function LetterRevealInView({ text, className = "", delay = 0, stagger = 0.035 }) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {text.split(" ").map((word, wi, words) => (
          <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap">
            {[...word].map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: "0.5em" },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: delay + (words.slice(0, wi).join(" ").length + wi + i) * stagger,
                      ease,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
