import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import NextJS from "../assets/NextJS.svg";
import ExpressJS from "../assets/ExpressJS.svg";
import Mongodb from "../assets/Mongodb.svg";
import Typescript from "../assets/Typescript.svg";
import { ArrowUpRight } from "lucide-react";
import Resume from "../assets/Resume-Tarunna_Sen.pdf";

export default function About() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center py-20 text-white"
    >
      <div className="absolute md:h-150 md:w-150 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl overflow-x-hidden" />
      <div className="relative z-10 grid w-full items-center grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileCard />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 lg:mt-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-purple-500">Hello,</span>Visitor{" "}
            <span className="text-5xl lg:text-7xl">👋</span>
          </motion.h1>

          <div className="mt-8 text-sm lg:text-lg text-white/50 text-justify">
            I am <span className="font-bold text-white">Tarunna Sen</span>, a{" "}
            <span className="font-bold text-white">
              Full Stack Web Developer
            </span>{" "}
            who builds websites that don't just work — they feel right. Blending
            logic, creativity, and real-world impact into every experience.
            Crafting thoughtful web experiences with the{" "}
            <span className="font-bold text-white">MERN stack</span>.
            <br />
            <br />
            <div className="flex items-center gap-2">
              Favorite Tech:{" "}
              <img src={NextJS} alt="NextJS" className="ml-4 w-15 h-15" />
              <img src={ExpressJS} alt="ExpressJS" className="ml-2 w-15 h-15" />
              <img src={Mongodb} alt="Mongodb" className="w-10 h-10" />
              <img src={Typescript} alt="Typescript" className="w-8 h-8" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-2 flex gap-4"
          >
            <a
              href={Resume}
              download="resume-tarunna-sen.pdf"
              className="rounded-sm bg-purple-500 px-6 py-3 text-black hover:cursor-pointer hover:bg-purple-600 hover:scale-105 transition-transform duration-200"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
