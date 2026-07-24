import { motion } from "framer-motion";

import JavaScript from "../assets/JavaScript.png";
import TailwindCSS from "../assets/TailwindCSS.svg";
import DaisyUI from "../assets/DaisyUI.svg";
import React from "../assets/React.svg";
import NextJS from "../assets/NextJS.svg";
import Mongodb from "../assets/Mongodb.svg";
import BetterAuth from "../assets/BetterAuth.svg";
import Github from "../assets/Github.svg";
import Git from "../assets/Git.svg";
import ExpressJS from "../assets/ExpressJS.svg";
import Typescript from "../assets/Typescript.svg";
import NodeJS from "../assets/NodeJS.svg";

import SkillsCard from "../components/SkillsCard";

const skills = [
  {
    name: "Next.js",
    logo: NextJS,
  },
  {
    name: "Express.js",
    logo: ExpressJS,
  },
  {
    name: "React",
    logo: React,
  },
  {
    name: "MongoDB",
    logo: Mongodb,
  },
  {
    name: "TypeScript",
    logo: Typescript,
  },
  {
    name: "Node.js",
    logo: NodeJS,
  },
  {
    name: "Tailwind CSS",
    logo: TailwindCSS,
  },
  {
    name: "daisyUI",
    logo: DaisyUI,
  },
  {
    name: "Better Auth",
    logo: BetterAuth,
  },
  {
    name: "Git",
    logo: Git,
  },
  {
    name: "GitHub",
    logo: Github,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
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
              Skills
            </h2>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-5 grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              name={skill.name}
              index={index}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
