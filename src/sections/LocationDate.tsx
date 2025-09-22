// import { motion } from "framer-motion";

// export function LocationDate() {
//   return (
//     <>
//       <h1 className="section-title">Location & Date</h1>
//       <h3 className="main-text">出店期間：2025年10月31日〜11月2日</h3>
//       <h3 className="main-text">場所：横浜国立大学（常盤祭）</h3>

//       <motion.a
//         href="https://maps.google.com/?q=%E6%A8%AA%E6%B5%9C%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6"
//         target="_blank"
//         rel="noreferrer"
//         className="block rounded-xl2 overflow-hidden border border-neutral-200 shadow-soft"
//         whileHover={{ scale: 1.01 }}
//       >
//         {/* 簡易マップ（静的画像）: /public/images/map.png を用意 */}
//         <img src="/images/map.png" alt="横浜国立大学 簡易マップ" className="w-full h-auto" />
//         <div className="px-4 py-3 text-sm text-neutral-600 bg-white">Google Mapで開く</div>
//       </motion.a>
//     </>
//   );
// }
import { motion } from "framer-motion";
import { festival } from "../shared/data";

export function LocationDate() {
  return (
      <div className="mx-auto max-w-screen-sm px-4 py-16">
        <header className="mb-8 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Access
          </motion.h2>
          <motion.p
            className="mt-2 text-neutral-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {festival.periodText} ／ {festival.name}
          </motion.p>
        </header>

        {/* 開催日程 */}
        <motion.ul
          className="mb-8 divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200"
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

        {/* 会場情報 */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="text-lg font-semibold text-neutral-900">会場</h3>
            <p className="mt-1 text-neutral-700">{festival.venue.name}</p>
            <p className="text-neutral-600">{festival.venue.address}</p>
            <div className="mt-4 flex gap-3">
              <a
                href={festival.venue.gmap}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]"
              >
                Google Mapsで開く
              </a>
              <a
                href="/images/map.png"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                学内簡易マップ
              </a>
            </div>
          </div>
          {/* Google Map 埋め込み */}
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

          {/* 交通アクセスメモ（必要なら追記） */}
          <div className="rounded-2xl border border-neutral-200 p-4 text-sm text-neutral-700">
            <p className="leading-relaxed">
              最寄り：JR横浜駅西口から相鉄バス（浜5/浜11系統）で「横浜国立大学正門前」下車すぐ ／ 地下鉄「三ツ沢上町」徒歩約16分 ／ 相鉄・JR直通「羽沢横浜国大」徒歩約15分
            </p>
          </div>
        </div>
      </div>
  );
}