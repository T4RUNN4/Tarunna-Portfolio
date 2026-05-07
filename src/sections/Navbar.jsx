import NavIcon from "../components/NavIcon"
import { Home, Folder, User, Pencil, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-xl">
        <NavIcon icon={<Home size={18} />} />
        <NavIcon icon={<Folder size={18} />} />
        <NavIcon icon={<User size={18} />} />
        <NavIcon icon={<Pencil size={18} />} />
        <NavIcon icon={<Mail size={18} />} />
      </div>
    </nav>
  );
}
