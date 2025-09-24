import { motion } from "framer-motion";
import { fadeIn } from "../shared/motion";
import { BEANS, COFFEES, SWEETS } from "../shared/data";

export function Menu() {
  return (
    <>
      <motion.h1 id="menu" className="section-title" {...fadeIn()} >
        Menu
      </motion.h1>
      <p className="main-text">
        コーヒー豆はみなとみらいの「BERTH COFFEE」の豆を使用しています。ハンドドリップとフレンチプレス（Hot or Ice）を選ぶことができます。
        ハンドドリップでは一杯ずつその場で淹れて提供します。フレンチプレスはすぐに提供することができます。
        <br />
        お菓子は星川の「メリハリベイク」からの提供になります。コーヒーと合うお菓子を用意しておりますのでぜひコーヒーと一緒にお楽しみください。
      </p>
      <motion.h2 className="accent-text mt-4" {...fadeIn(0.20)}>
        Beans
      </motion.h2>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
        {BEANS.map((b) => (
          <motion.article
            key={b.id}
            className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item card"
            {...fadeIn()}
          >
            <img src={b.image} alt={b.title} className="w-full h-40 object-cover" />
            <div className="main-text">
              <h4 className="main-text">{b.title}</h4>
              <p className="mt-1 text-sm">{b.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.h2 id="coffee-menu" className="accent-text mt-4" {...fadeIn(0.20)}>
        Coffee
      </motion.h2>
      <p className="main-text">
        ハンドドリップではエチオピアとコロンビアの２種類から選ぶことができます。フレンチプレスはエチオピアでの提供となります。
      </p>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
        {COFFEES.map((c) => (
          <motion.article
            key={c.id}
            className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item card"
            {...fadeIn()}
          >
            <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
            <div className="main-text">
              <h4 className="main-text">{c.title}</h4>
              <p className="mt-1 text-sm">{c.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Sweets */}
      <motion.h2 id="sweets-menu" className="accent-text mt-10" {...fadeIn(0.20)}>
        Sweets
      </motion.h2>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
        {SWEETS.map((s) => (
          <motion.article
            key={s.id}
            className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item card"
            {...fadeIn()}
          >
            <img src={s.image} alt={s.title} className="w-full h-40 object-cover" />
            <div className="main-text">
              <h4 className="main-text">{s.title}</h4>
              <p className="mt-1 text-sm">{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
