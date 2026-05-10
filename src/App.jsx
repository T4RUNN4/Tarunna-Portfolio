import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

import Background from "./assets/background.jpg";
import Achievements from "./sections/Achievement";

export default function App() {
  return (
    <>
      <main className="relative min-h-screen w-full bg-black text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat-y bg-fixed opacity-35"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "100% auto",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute md:h-150 md:w-150 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl overflow-x-hidden" />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
