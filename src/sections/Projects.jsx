import { motion } from "framer-motion";

export default function Project() {
  return (
    <section id="projects" className="relative px-10 md:px-20 py-28">
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="leading-none">
            <h2 className="text-purple-500 font-bold text-4xl md:text-6xl lg:text-8xl">
              Projects
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
