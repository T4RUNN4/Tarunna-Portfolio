import { motion } from "framer-motion";

import OLABU from "../assets/Olabu.png";
import LegalEase from "../assets/LegalEase.jpeg";

import ProjectCard from "../components/ProjectsCard";

export default function Project() {
  const projects = [
    {
      name: "OLABU",
      status: "Completed",
      description:
        "OLABU is a customized wallboards brand from Bangladesh that provides PVC wallboards in different size and design as per customers requirements. This website fulfils OLABU's purpose of showing their products and customer review",
      liveLink: "https://the-olabu.vercel.app/",
      github: "https://github.com/T4RUNN4/Olabu-Frontend",
      techs: ["TypeScript", "NextJS", "Mongodb"],
      features: [
        "Product Management with CRUD Operation",
        "Customer Review Functionality",
        "AI-powered content genertaion and Chat Support",
      ],
      improvements: [],
      image: OLABU,
      alt: "olabu ui",
    },
    {
      name: "Legal Ease",
      status: "Completed",
      description:
        "Legal Ease is a marketplace for lawyers and clients similar to Fiverr and upwork. Here lawyers can come and registed their profile as well as clients can browse and hire lawyer for their legal process. A one stop solution for both lawyer and clients",
      liveLink: "https://legal-ease-tarunna.vercel.app/",
      github: "https://github.com/T4RUNN4/Legal-Ease",
      techs: ["NextJS", "ExpressJS", "Mongodb"],
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
  ];

  return (
    <section id="projects" className="relative py-28">
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
