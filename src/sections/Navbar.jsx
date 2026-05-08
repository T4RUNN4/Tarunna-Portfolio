import NavIcon from "../components/NavIcon"
import { Home, User, Info, Award, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-xl">
        <NavIcon text="Home" href="#home" icon={<Home size={18} />} />
        <NavIcon text="About" href="#about" icon={<Info size={18} />} />
        <NavIcon text="Experience" href="#experience" icon={<User size={18} />} />
        <NavIcon text="Skills" href="#skills" icon={<Settings size={18} />} />
        <NavIcon text="Achievements" href="#Achievements" icon={<Award size={18} />} />
      </div>
    </nav>
  );
}
