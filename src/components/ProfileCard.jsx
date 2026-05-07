import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { ArrowUpRight, Mail, MapPin, Airplay, Phone } from "lucide-react";
import Tarunna from "../assets/tarunna.jpg";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative mx-auto w-full max-w-sm rounded-4xl] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl"
    >
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-full"
        viewBox="0 0 300 500"
        fill="none"
      >
        <path
          d="M20 40C120 80 50 200 160 250C260 300 210 430 280 460"
          stroke="#9810fa"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="overflow-hidden rounded-2xl bg-purple-600">
        <img src={Tarunna} alt="Profile" className="h-80 w-full object-cover" />
      </div>

      <div className="mt-5">
        <h3 className="text-3xl font-bold">Tarunna Sen</h3>

        <div className="mt-1 flex items-center gap-2 text-purple-400">
          <ArrowUpRight size={18} />
          <span className="text-sm font-medium">Frontend Developer</span>
        </div>

        <a
          href="https://maps.app.goo.gl/mEHmzr1jsQ2DSMYu9"
          target="_blank"
          className="flex gap-2 mt-5 text-sm leading-relaxed text-white/60 hover:text-purple-400 transition"
        >
          <MapPin /> Chattogram, Bangladesh
        </a>
        <a
          href="mailto:tarunnasen@gmail.com"
          target="_blank"
          className="flex gap-2 mt-1.5  text-sm leading-relaxed text-white/60 hover:text-purple-400 transition"
        >
          <Mail /> tarunnasen@gmail.com
        </a>
        <a
          href="https://wa.me/8801817320099"
          target="_blank"
          className="flex gap-2 mt-1.5  text-sm leading-relaxed text-white/60 hover:text-purple-400 transition"
        >
          <Phone /> +880 1817-320099
        </a>

        <div className="mt-6 flex items-center gap-4">
          <SocialIcon icon={<Airplay size={18} />} />
          <SocialIcon icon={<Airplay size={18} />} />
        </div>
      </div>
    </motion.div>
  );
}
