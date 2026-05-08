import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

import Background from "./assets/background.jpg";

export default function App() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-repeat-y bg-fixed opacity-35"
            style={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "100% auto",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
