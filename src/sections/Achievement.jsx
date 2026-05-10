import { motion } from "framer-motion";
import DetailsCard from "../components/DetailsCard";
import TC from "../assets/TC.jpg";
import SPSC from "../assets/SPSC.png";

export default function Achievements() {
  return (
    <section id="Achievements" className="relative px-20 py-28">
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
            <h2 className="text-2xl text-purple-500 font-bold md:text-6xl lg:text-8xl">
              Achievements
            </h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 mt-14">
          <DetailsCard
            logo={SPSC}
            rounded="true"
            alt="SPSC"
            date="SPSC Computer Club"
            course="Champion"
            subject="SPSC ICT and Programming Contest 2022"
            description="Secured Champion position by competing at the Senior Category"
            href="https://i.ibb.co.com/PX2r17m/Image.jpg"
          />
          <DetailsCard
            logo={TC}
            rounded="true"
            alt="Tech Cluder"
            date="Tech Cluder"
            course="1st Runner's UP"
            subject="CodeStrom 2025"
            description="Secured 1st runner's up position in by solving 7 out of 8 problems"
            href="https://www.facebook.com/share/p/1bN1aGRR3X/"
          />
        </div>
      </div>
    </section>
  );
}
