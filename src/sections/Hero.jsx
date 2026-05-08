import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import React from "../assets/React.svg";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden px-10 py-20 text-white">
      <div className="relative z-10 grid w-full max-w-7xl items-center  lg:grid-cols-2">
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
        >
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-8xl font-bold tracking-tight"
          >
            <span className="text-purple-500">Hello,</span>Visitor{" "}
            <span className="text-7xl">👋</span>
          </motion.h1>

          <div className="mt-8 max-w-xl text-lg leading-relaxed text-white/50">
           I am Tarunna Sen, a Full Stack Web Developer who builds websites that don't just work — they feel right. Blending logic, creativity, and real-world impact into every experience. Crafting thoughtful web experiences with the MERN stack.
            <br />
            <br />
            <div className="flex items-center gap-2">
              Favorite Tech: <img src={React} alt="React" className="w-7 h-7" />
            </div>
            <div className="flex items-center">
              Currently working on:{" "}
              <div className="flex ml-2 items-center text-purple-400 hover:cursor-pointer">
                <ArrowUpRight size={20} />
                <span className="ml-1">
                  Local Bus Chattgram
                </span>
              </div>
            </div>
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
            <button className="rounded-xl bg-purple-500 px-6 py-3 text-black transition hover:scale-105 hover:bg-purple-300">
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
