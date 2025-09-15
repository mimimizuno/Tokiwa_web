import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "concept", label: "Concept" },
  { id: "location-date", label: "Location & Date" },
  { id: "menu", label: "Menu" },
  { id: "collaboration", label: "Colabolation" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64; // オフセット
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40"
      animate={{ backgroundColor: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)" }}
      style={{ backdropFilter: scrolled ? "saturate(1.2) blur(6px)" : undefined }}
    >
      <div className="mx-auto max-w-screen-md px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide">Coffee Stand 305</a>
          <div className="flex items-center gap-2 text-sm">
            {items.map((it) => (
              <button
                key={it.id}
                className="px-3 py-2 rounded-full hover:bg-neutral-100 transition"
                onClick={() => scrollToId(it.id)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
