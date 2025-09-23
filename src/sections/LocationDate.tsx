import { motion } from "framer-motion";
import { fadeIn, fadeItem } from "../shared/motion";
import { festival } from "../shared/data";

export function LocationDate() {
  return (
    <>
      <motion.h1 className="section-title" {...fadeIn()}>
        Location & Date
      </motion.h1>

      <motion.h2 className="accent-text" {...fadeIn(0.20)}>
        {festival.name}
      </motion.h2>

      <p className="main-text">常盤祭で３日間出店いたします。オープンする期間と場所は以下の通りです。みなさんにお会いできるのを楽しみにしています。</p>

      <motion.ul
        className="list-split"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {festival.days.map((d) => (
          <motion.li
            key={d.dateLabel}
            className="flex items-center justify-between px-4 py-3"
            variants={fadeItem}
          >
            <span className="main-text">{d.dateLabel}</span>
            <span className="main-text">{d.time}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="space-y-4">
        <motion.div
          className="card"
          {...fadeIn(0.25, 0.55)}
        >
          <h2 className="accent-text">会場</h2>
          <p className="mt-1 main-text">{festival.venue.name}</p>
          <p>{festival.venue.address}</p>
        </motion.div>

        <motion.div
          className="map-frame"
          {...fadeIn(0.30, 0.6)}
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