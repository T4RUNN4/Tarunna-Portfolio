import { motion } from "framer-motion";

export default function SkillsCard({ index, logo, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:bg-white/10"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl text-purple-400">
          <img src={logo} alt={name} />
        </div>

        <h3 className="relative z-10 mt-6 text-lg text-center">{name}</h3>
      </div>
    </motion.div>
  );
}
