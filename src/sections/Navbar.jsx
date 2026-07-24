import { useEffect, useState } from "react";
import NavIcon from "../components/NavIcon";
import { Home, User, Info, Award, Settings, FolderDot } from "lucide-react";

export default function Navbar() {
  const sections = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "achievements", name: "Achievements" },
  ];
  const [curr, setCurr] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.id === entry.target.id);

            if (section) {
              setCurr(section.name);
            }
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-xl">
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="Home"
          href="#home"
          icon={<Home size={18} />}
        />
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="About"
          href="#about"
          icon={<Info size={18} />}
        />
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="Experience"
          href="#experience"
          icon={<User size={18} />}
        />
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="Projects"
          href="#projects"
          icon={<FolderDot size={18} />}
        />
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="Skills"
          href="#skills"
          icon={<Settings size={18} />}
        />
        <NavIcon
          curr={curr}
          setCurr={setCurr}
          text="Achievements"
          href="#achievements"
          icon={<Award size={18} />}
        />
      </div>
    </nav>
  );
}
