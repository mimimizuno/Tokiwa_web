import { motion } from "framer-motion";
import { COFFEES, SWEETS } from "../shared/data";

export function Menu() {
  return (
    <div className="max-w-screen-md mx-auto px-5">
      <h2 className="text-2xl font-semibold">Menu</h2>

      {/* Coffee */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-neutral-800">Coffee</h3>
        <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
          {COFFEES.map((c) => (
            <motion.article
              key={c.id}
              className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item bg-white border border-neutral-200 rounded-xl2 shadow-soft"
              whileHover={{ y: -2 }}
            >
              <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-1 text-sm text-neutral-600">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Sweets */}
      <div className="mt-10">
        <h3 className="text-lg font-medium text-neutral-800">Sweets</h3>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {SWEETS.map((s) => (
            <article key={s.id} className="bg-white border border-neutral-200 rounded-xl2 shadow-soft">
              <img src={s.image} alt={s.title} className="w-full h-32 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
