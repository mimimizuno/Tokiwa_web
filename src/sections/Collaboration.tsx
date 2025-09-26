import { motion } from "framer-motion";
import { fadeIn } from "../shared/motion";
import { COLLABS } from "../shared/data";

export function Collaboration() {
  return (
    <>
      <motion.h1 className="section-title" {...fadeIn()}>
        Collabolation
      </motion.h1>
      <div className="grid grid-cols-1 gap-4">
        {COLLABS.map((c) => (
          <div
            key={c.id}
            className="flex card"
          >
            <img src={c.logo} alt={c.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="main-text">{c.name}</p>
              <p className="text-sm">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}