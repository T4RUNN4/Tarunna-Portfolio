import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import React from "../assets/React.svg";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center px-10 py-20 text-white"
    >
      <div className="absolute md:h-150 md:w-150 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl overflow-x-hidden" />
      <div className="relative z-10 grid w-full items-center grid-cols-1 md:grid-cols-2 gap-6">
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
            className="text-5xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-purple-500">Hello,</span>Visitor{" "}
            <span className="text-5xl lg:text-7xl">👋</span>
          </motion.h1>

          <div className="mt-8 text-sm lg:text-lg text-white/50 text-justify">
            I am Tarunna Sen, a Full Stack Web Developer who builds websites
            that don't just work — they feel right. Blending logic, creativity,
            and real-world impact into every experience. Crafting thoughtful web
            experiences with the MERN stack.
            <br />
            <br />
            <div className="flex items-center gap-2">
              Favorite Tech: <img src={React} alt="React" className="w-7 h-7" />
            </div>
            <a href="#projects" className="flex items-center">
              Currently working on:{" "}
              <span className="flex ml-2 items-center text-purple-400 hover:cursor-pointer">
                <ArrowUpRight size={20} />
                <span className="ml-1">Local Bus Chattgram</span>
              </span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-12 flex gap-4"
          >
            <a href="../assets/Resume.pdf" download="Resume - Tarunna Sen.pdf" className="rounded-xl bg-purple-500 px-6 py-3 text-black transition hover:cursor-pointer hover:bg-purple-600">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
