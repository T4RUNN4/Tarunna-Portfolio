import { useCallback, useState } from "react";
import "./style.css";
import Splash from "./components/Splash";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [ready, setReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const onSplashDone = useCallback(() => {
    setReady(true);
    setShowSplash(false);
  }, []);

  return (
    <div className="t-creative-artsy relative min-h-screen">
      {showSplash && <Splash onDone={onSplashDone} />}
      <div className="ca-grain pointer-events-none fixed inset-0 z-[1] mix-blend-multiply" aria-hidden />
      <div className="relative z-[2]">
        <Navbar />
        <main>
          <Hero ready={ready} />
          <About />
          <Works />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
