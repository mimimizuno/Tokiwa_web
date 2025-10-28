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

        <motion.h2 className="accent-text" {...fadeIn(0.20)}>
         簡易マップ
        </motion.h2>
        <p className="main-text">サイトE-4にて出店いたします。理工学講義棟A沿いでテント出店します。Google Mapからもご参照ください。</p>

        <motion.div className="mt-6 space-y-4" {...fadeIn(0.3, 0.6)}>
          {/* 簡易マップ画像 */}
          <div className="map-frame">
            <img
              src="/images/map.png"
              alt="常盤祭マップ"
              className="w-full object-cover"
            />
          </div>

          {/* Google Mapリンク */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/1o5zUFGPSxWDQTA26"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-url underline decoration-url/40 underline-offset-4 group-hover:decoration-url"
            >
              Google Mapで見る
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}