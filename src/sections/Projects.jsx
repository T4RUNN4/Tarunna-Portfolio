import { motion } from "framer-motion";

import Portfolio from "../assets/portfolio.png";
import Ctgbus from "../assets/Ctgbus.png";
import LegalEase from "../assets/LegalEase.jpeg";

import ProjectCard from "../components/ProjectsCard";

export default function Project() {
  const projects = [
    {
      name: "Legal Ease",
      status: "Completed",
      description:
        "Legal Ease is a marketplace for lawyers and clients similar to Fiverr and upwork. Here lawyers can come and registed their profile as well as clients can browse and hire lawyer for their legal process. A one stop solution for both lawyer and clients",
      liveLink: "https://legal-ease-tarunna.vercel.app/",
      github: "https://github.com/T4RUNN4/Legal-Ease",
      techs: ["NextJS", "ExpressJS", "ReactJS", "Mongodb"],
      features: [
        "Multiple Laywer Gigs under one unified profile",
        "Hiring conformation before payment processing",
        "Secured payment system with Stripe",
        "Confirmation fee for  clients to avoid scama",
      ],
      improvements: [],
      image: LegalEase,
      alt: "legal ease ui",
    },
    {
      name: "Personal Portfolio",
      status: "Completed",
      description:
        "As a web-developer, having a personal portfolio website is more important than breathing. So I did some researched, and made one for myself. My official portfolio website. I tried to fit the best possible info from my life and easy as well as fun for user.",
      liveLink: "https://tarunna-sen.vercel.app/",
      github: "https://github.com/T4RUNN4/Tarunna-Portfolio",
      techs: ["ReactJS", "Tailwindcss", "DaisyUI"],
      features: ["Interactive smooth animation", "Fully responsive UI"],
      improvements: ["Will work on a more unique UI"],
      image: Portfolio,
      alt: "portfolio ui",
    },
    {
      name: "Local Bus Chattogram",
      status: "Completed",
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
      alt: "Local Bus Chattogram ui",
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
