import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function DetailsCard({
  logo,
  alt,
  date,
  course,
  subject,
  description,
  rounded,
  href,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:bg-white/10"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <img
          src={logo}
          alt={alt}
          className={`w-30 h-30 ${rounded ? "rounded-full" : ""}`}
        />
        <div className="flex flex-col justify-center">
          <h6 className="text-xs leading-relaxed text-white/50 mb-0.5">
            {date}
          </h6>
          <h2 className="text-white font-medium md:text-xl lg:text-2xl">
            {href ? (
              <a
                target="_blank"
                href={href}
                className="flex items-center gap-1.5 hover:cursor-pointer hover:text-purple-400"
              >
                {course} <ArrowUpRight size={20} />{" "}
              </a>
            ) : (
              <>{course}</>
            )}
          </h2>
          <h6 className="md:text-sm lg:text-base leading-relaxed text-white/50">
            {subject}
          </h6>
          <h6 className="text-xs lg:text-sm leading-relaxed text-white/50 mt-4">
            {description}
          </h6>
        </div>
      </div>
    </motion.div>
  );
}
