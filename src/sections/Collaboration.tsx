import { motion } from "framer-motion";
import { COLLABS } from "../shared/data";

export function Collaboration() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Collabolation</h2>
      <div className="grid grid-cols-1 gap-4">
        {COLLABS.map((c) => (
          <motion.a
            key={c.id}
            href={c.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-4 border border-neutral-200 rounded-xl2 shadow-soft hover:bg-neutral-50"
            whileHover={{ scale: 1.01 }}
          >
            <img src={c.logo} alt={c.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="font-medium">{c.name}</p>
              <p className="text-sm text-neutral-600">{c.desc}</p>
              <span className="text-xs text-neutral-500">Instagramへ</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}