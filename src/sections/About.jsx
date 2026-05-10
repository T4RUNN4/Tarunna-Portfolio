import { motion } from "framer-motion";

import CPI from "../assets/CPI.png";
import Harvard from "../assets/Harvard.svg";
import PH from "../assets/PH.svg";

import DetailsCard from "../components/DetailsCard";

export default function About() {
  return (
    <section id="about" className="relative px-10 lg:px-20 py-28">
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
            <h2 className="text-purple-500 font-bold md:text-6xl lg:text-8xl">
              About <span className="text-white">Me</span>
            </h2>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <div className="leading-none">
                <motion.h2
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-purple-500 font-medium text-3xl"
                >
                  Education
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 group relative overflow-hidden "
              >
                <DetailsCard
                  logo={CPI}
                  alt="CPI"
                  date="2024 - 2027"
                  course="Diploma-in-Engineering"
                  subject="Computer Science and Technology"
                  description="Studying Diploma-in-Engineering from Chattogram Polytechnic Institute on Computer Science and Technolgy."
                />
              </motion.div>
            </div>
            <div className="mt-6">
              <div className="leading-none">
                <motion.h2
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-purple-500 font-medium text-3xl"
                >
                  Certification
                </motion.h2>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 group relative overflow-hidden "
              >
                <div className="grid grid-rows-2 gap-2">
                  <DetailsCard
                    logo={Harvard}
                    href="https://cs50.harvard.edu/certificates/dcef13b4-f103-4560-a406-f5931f14353d"
                    alt="Harvard"
                    date="June, 2025"
                    course="CS50x"
                    subject="Introduction to Computer Science"
                    description="Completed CS50 from Harvard and learned about C, Python, Web developement, Database and DSA by finishing 9 assignments and 1 final project."
                  />
                  <DetailsCard
                    logo={PH}
                    alt="Programming Hero"
                    date="2026"
                    course="Complete Web Develepment"
                    subject="MERN-stack web development course"
                    description="Compliting 6-month long bootcamp on web development along by finishing 11 assignments."
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg lg:text-xl leading-relaxed text-white/50"
          >
            Programming started as curiosity, but it quickly became something
            much bigger for me. From building small experiments in my early
            teens to developing full-stack web applications today, I've always
            been drawn to the process of turning ideas into something people can
            actually use and enjoy.
            <br />
            <br />
            I naturally enjoy the logic side of development — solving problems,
            structuring systems, and making things work the way they should. But
            at the same time, design has always been part of how I think. My
            background in graphics design shaped the way I approach interfaces,
            helping me build websites that feel clean, intentional, and human.
            <br />
            <br />
            I work mainly with the MERN stack and love creating projects that
            bring real value to everyday life instead of adding unnecessary
            complexity. I strongly believe functional websites leave a bigger
            impact than feature-heavy ones that forget the user experience.
            <br />
            <br />
            Outside of development, I spend time exploring Cyber Security,
            playing football, and diving into CTF challenges that sharpen both
            my creativity and problem-solving mindset. For me, tech has never
            been just about writing code — it's about building experiences
            people remember.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
