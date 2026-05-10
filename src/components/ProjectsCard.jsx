import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
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
      className="flex flex-col rounded-3xl border border-white/10 bg-white/5 px-6 md:px-10 py-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:bg-white/10"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* <img
          src={project.image}
          alt={project.alt}
          className={`w-30 h-30`}
        /> */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-2">
            <span
              className={`text-xs rounded-full px-4 py-1 ${project.status === "ongoing" ? "bg-amber-400 text-black" : "bg-green-600"}`}
            >
              {project.status}
            </span>
          </h1>
          <h2 className="text-white font-medium md:text-xl lg:text-2xl">
            {project.name}
          </h2>
          <div className="flex gap-4">
            <a
              target="_blank"
              href={project.liveLink}
              className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-600"
            >
              Live Link <ArrowUpRight size={20} />{" "}
            </a>
            <a
              target="_blank"
              href={project.github}
              className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-600"
            >
              Github <ArrowUpRight size={20} />
            </a>
          </div>
          <h6 className="text-xs lg:text-sm text-justify text-white/50 mt-4">
            {project.description}
          </h6>
          <h6 className="text-xs lg:text-sm text-justify text-white/50 mt-4">
            Features
          </h6>
          <ul className="list-disc mt-2">
            {project.features.map((feature, index) => (
              <li
                className="text-xs leading-relaxed text-justify text-white/50 ml-3"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
          <h6 className="text-xs lg:text-sm text-justify text-white/50 mt-4">
            Improvements
          </h6>
          <ul className="list-disc mt-2">
            {project.improvements.map((improvement, index) => (
              <li
                className="text-xs leading-relaxed text-justify text-white/50 ml-3"
                key={index}
              >
                {improvement}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-2">
            {project.techs.map((tech, index) => (
              <p key={index}>
                <span className="text-xs rounded-full px-4 py-1 bg-purple-400 border border-solid border-purple-600 text-black">
                  {tech}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
