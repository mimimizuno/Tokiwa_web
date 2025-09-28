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

      {/* Beans */}
      <motion.h2 className="accent-text mt-10" {...fadeIn(0.20)}>
        Beans
      </motion.h2>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
        {BEANS.map((b) => (
          <motion.a
            key={b.id}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item card"
            {...fadeIn(0.25)}
          >
            <img src={b.image} alt={b.title} className="w-full h-40 object-cover" />
            <h4 className="main-text">{b.title}</h4>
            <p className="mt-1 text-sm">{b.desc}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-sm text-url underline decoration-url/40 underline-offset-4 group-hover:decoration-url">
              豆の詳しい情報を見る
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </motion.a>
        ))}
      </div>

      {/* Coffee */}
      <motion.h2 id="coffee-menu" className="accent-text mt-10" {...fadeIn(0.20)}>
        Coffee
      </motion.h2>
      <p className="main-text mt-3">
        ハンドドリップではエチオピアとコロンビアの２種類から選ぶことができます。フレンチプレスはエチオピアでの提供となります。
      </p>
      <div className="mt-3 flex gap-4 overflow-x-auto pb-2 scroll-snap-x">
        {COFFEES.map((c) => (
          <motion.article
            key={c.id}
            className="min-w-[76%] max-w-[76%] md:min-w-[360px] md:max-w-[360px] scroll-snap-item card"
            {...fadeIn(0.25)}
          >
            <img src={c.image} alt={c.title} className="w-full h-40 object-cover" />
            <div>
              <h4 className="main-text">{c.title}</h4>
              <p>{c.price} 円</p>
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
            {...fadeIn(0.25)}
          >
            <img src={s.image} alt={s.title} className="w-full h-40 object-cover" />
            <div>
              <h4 className="main-text">{s.title}</h4>
              <p>{s.price} 円</p>
              <p className="mt-1 text-sm">{s.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Set */}
      <motion.h2 id="set-menu" className="accent-text mt-10" {...fadeIn(0.20)}>
        Set
      </motion.h2>
      <p className="main-text">
        ハンドドリップとお好きなお菓子１つで850円のセットにすることができます。ぜひ一杯一杯丁寧に淹れたコーヒーと美味しいお菓子の組み合わせをお試しください。
      </p>
    </>
  );
}
