import { useEffect, useState } from "react";
import { AnimatePresence} from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Hero } from "./sections/Hero";
import { Concept } from "./sections/Concept";
import { LocationDate } from "./sections/LocationDate";
import { Menu } from "./sections/Menu";
import { Collaboration } from "./sections/Collaboration";
import { Footer } from "./sections/Footer";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // ローディング映像終了 or タイムアウトで解除
    const timer = setTimeout(() => setShowLoader(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-display">
      <AnimatePresence>{showLoader && <Loader onFinish={() => setShowLoader(false)} />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <section id="concept" className="px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <Concept />
        </section>
        <section id="location-date" className="px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <LocationDate />
        </section>
        <section id="menu" className="px-0 py-16 md:py-24">
          <Menu />
        </section>
        <section id="collaboration" className="px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <Collaboration />
        </section>
      </main>
      <Footer />
    </div>
  );
}