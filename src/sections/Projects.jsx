import { motion } from "framer-motion";

import Portfolio from "../assets/portfolio.png"
import Ctgbus from "../assets/ctgbus.png"
import Cpibus from "../assets/cpibus.png"

import ProjectCard from "../components/ProjectsCard";

export default function Project() {
  const projects = [
    {
      name: "Personal Portfolio",
      status: "finished",
      description:
        "As a web-developer, having a personal portfolio website is more important than breathing. So I did some researched, and made one for myself. My official portfolio website. I tried to fit the best possible info from my life and easy as well as fun for user.",
      liveLink: "https://tarunna-sen.vercel.app/",
      github: "https://github.com/T4RUNN4/Tarunna-Portfolio",
      techs: ["ReactJS", "Tailwindcss", "DaisyUI"],
      features: ["Interactive smooth animation", "Fully responsive UI"],
      improvements: ["Will work on a more unique UI"],
      image: Portfolio,
      alt: "portfolio ui"
    },
    {
      name: "Local Bus Chattogram",
      status: "ongoing",
      description:
        "The other day, almost every city has a system where users can find details about local trasnport routes and fare. But for my city Chattogram, there is nothing like this. So, I made one, where users can search for local buses available for their destination and possible fare amount.",
      liveLink: "https://local-bus-finder-chattogram.vercel.app/",
      github: "https://github.com/T4RUNN4/Local-Bus-finder-Chattogram",
      techs: ["JavaScript", "Tailwindcss"],
      features: [
        "Users can find buses and possible fare amount for their destination.",
        "English language support for non-Bangladeshi people.",
        "Users can report wrong data via Google Form.",
      ],
      improvements: [
        "Local Language of Chattogram will be added",
        "Data will be crowdsourced for improvements",
      ],
      image: Ctgbus,
      alt: "Local Bus Chattogram ui"
    },
    {
      name: "Chattogram Polytechnic Institute",
      status: "Finished",
      description:
        "So, on my Diploma curriculam, I were needed to present a website as project. As a Lead Developer of our team, I decided to build this project called 'Chattogram Polytechnic Institute Bus Tracker', which is initially a bus tracker for our campus. Although when we were making this project, there was no bus service on our campus. So our whole project was made based on mock data.",
      liveLink: "https://cpi-bus.vercel.app/",
      github: "https://github.com/T4RUNN4/Chattogram-Polytechnic-Institute-Bus",
      techs: ["ReactJS", "TailwindCSS", "ScrollReveal"],
      features: [
        "Track campus bus in real-time with the info number of seats and the possible required time to arrive at the user's stop",
        "A dedicated page for the user to check for their lost items with enough detail to ensure that it's theirs.",
        "Dedicated page for all the routes, all drivers and all the rules so the user can instantly refer to them.",
      ],
      improvements: ["Planned to include real-time bus data from API"],
      image: Cpibus,
      alt: "CPI Bus ui"
    },
  ];

  return (
    <section id="projects" className="relative px-10 md:px-20 py-28">
      <div className="absolute left-1/2 top-1/2 md:h-150 md:w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl overflow-x-hidden" />
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
              Projects
            </h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 items-center justify-center gap-10 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
}
