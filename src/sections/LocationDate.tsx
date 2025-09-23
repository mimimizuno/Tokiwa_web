import { motion } from "framer-motion";
import { festival } from "../shared/data";

export function LocationDate() {
  return (
    <>
      <h1 className="section-title">Location & Date</h1>
      <motion.div
        className="accent-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {festival.name}
      </motion.div>
      <motion.p
        className="main-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        {festival.periodText}
      </motion.p>
      {/* 開催日程 */}
      <motion.ul
          className="mt-4 mb-8 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {festival.days.map((d) => (
            <motion.li
              key={d.dateLabel}
              className="flex items-center justify-between bg-white px-4 py-3 text-sm"
              variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
            >
              <span className="font-medium text-neutral-800">{d.dateLabel}</span>
              <span className="tabular-nums text-neutral-700">{d.time}</span>
            </motion.li>
          ))}
        </motion.ul>
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="accent-text">会場</h3>
            <p className="mt-1 text-neutral-700">{festival.venue.name}</p>
            <p className="text-neutral-600">{festival.venue.address}</p>
          </div>
          <motion.div
            className="overflow-hidden rounded-2xl shadow-soft"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d456.94585251380806!2d139.58947571348637!3d35.474003485796686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDI4JzI2LjAiTiAxMznCsDM1JzI5LjgiRQ!5e0!3m2!1sen!2sjp!4v1758525816424!5m2!1sen!2sjp"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

    </>
  );
}