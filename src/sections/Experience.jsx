import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="absolute md:h-150 md:w-150 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl overflow-x-hidden" />

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
              Experience
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 group relative overflow-hidden hover:scale-105 transition-transform duration-200"
        >
          <div className="flex flex-col rounded-sm border border-white/10 bg-white/5 px-6 md:px-10 py-6 backdrop-blur-xl hover:border-purple-400/30 hover:bg-white/10 transition-transform duration-200">
            <div className="flex items-center gap-8">
              <div className="flex flex-col justify-center">
                <h6 className="text-sm md:text-md leading-relaxed text-white/50 mb-2">
                  Sep, 2025 - Nov 2025
                </h6>
                <h2 className="text-white font-bold text-2xl md:text-4xl">
                  M/S Ridwan Sarker Trade
                </h2>
                <h6 className="text-sm md:text-md leading-relaxed text-purple-400">
                  Front End Developer
                </h6>
                <ul className="text-sm md:text-md leading-relaxed text-white/50 mt-4 list-disc ml-4">
                  <li>
                    Automated order management and inventory workflows, which
                    significantly reduced manual administrative work.
                  </li>
                  <li>
                    Delivered the project in a tight 8-week timeline, which
                    launched the company within the first month
                  </li>
                  <li>
                    Worked in collaboration with the UI/UX designer to match the
                    brand's identity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
