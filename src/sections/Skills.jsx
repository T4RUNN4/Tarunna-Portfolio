import { motion } from "framer-motion";

import HTML5 from "../assets/HTML5.svg";
import CSS from "../assets/CSS.svg";
import JavaScript from "../assets/JavaScript.png";
import TailwindCSS from "../assets/TailwindCSS.svg";
import DaisyUI from "../assets/DaisyUI.svg";
import React from "../assets/React.svg";
import NextJS from "../assets/NextJS.svg";
import Mongodb from "../assets/Mongodb.svg";
import Firebase from "../assets/Firebase.svg";
import BetterAuth from "../assets/BetterAuth.svg";
import Github from "../assets/Github.svg";
import Git from "../assets/Git.svg";

import SkillsCard from "../components/SkillsCard";

const skills = [
  {
    name: "HTML",
    logo: HTML5,
  },
  {
    name: "CSS",
    logo: CSS,
  },
  {
    name: "JavaScript",
    logo: JavaScript,
  },
  {
    name: "TailwindCSS",
    logo: TailwindCSS,
  },
  {
    name: "daisyUI",
    logo: DaisyUI,
  },
  {
    name: "React",
    logo: React,
  },
  {
    name: "NextJS",
    logo: NextJS,
  },
  {
    name: "Mongodb",
    logo: Mongodb,
  },
  {
    name: "Firebase",
    logo: Firebase,
  },
  {
    name: "BetterAuth",
    logo: BetterAuth,
  },
  {
    name: "Git",
    logo: Git,
  },
  {
    name: "Github",
    logo: Github,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-10 md:px-20 py-28">
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

        <div className="mt-20 grid gap-5 grid-cols-2 lg:grid-cols-6">
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
