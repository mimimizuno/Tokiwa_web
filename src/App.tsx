// // ====== 設定（ここを書き換えるだけで全体が更新されます） ======
// const FESTIVAL = {
//   title: "Campus Coffee Stand",
//   catchcopy: "学祭で味わう、本気の一杯とスイーツ",
//   dateText: "2025/10/26 (Sun) 10:00–16:00",
//   placeText: "○○大学 □号館 1F ロビー（正門から徒歩3分）",
//   mapUrl: "https://maps.google.com/",
// };

// export type MenuItem = {
//   id: string;
//   name: string;
//   price: string;
//   desc?: string;
//   img?: string;
//   tag?: "おすすめ" | "限定";
// };

// const DRINKS: MenuItem[] = [
//   { id: "d1", name: "ドリップコーヒー", price: "¥300", desc: "シングルオリジン", img: "https://picsum.photos/seed/drip/800/600", tag: "おすすめ" },
//   { id: "d2", name: "カフェラテ", price: "¥400", img: "https://picsum.photos/seed/latte/800/600" },
//   { id: "d3", name: "アイスコーヒー", price: "¥300", img: "https://picsum.photos/seed/ice/800/600" },
// ];

// const SWEETS: MenuItem[] = [
//   { id: "s1", name: "ガトーショコラ", price: "¥350", img: "https://picsum.photos/seed/cake/800/600", tag: "限定" },
//   { id: "s2", name: "スコーン", price: "¥250", img: "https://picsum.photos/seed/scone/800/600" },
// ];

// export type Partner = {
//   role: string;
//   name: string;
//   instagramUrl: string;
//   logo?: string;
//   desc?: string;
// };

// const PARTNERS: Partner[] = [
//   {
//     role: "豆提供",
//     name: "〇〇コーヒー",
//     instagramUrl: "https://instagram.com/your_coffee_roaster",
//     logo: "https://picsum.photos/seed/roasterlogo/300/300",
//     desc: "スペシャルティコーヒー専門のロースター。学祭限定の焙煎をセレクト。",
//   },
//   {
//     role: "お菓子提供",
//     name: "△△カフェ",
//     instagramUrl: "https://instagram.com/your_cake_cafe",
//     logo: "https://picsum.photos/seed/cafelogo/300/300",
//     desc: "素材にこだわった焼き菓子が人気。コーヒーに合うラインナップを用意。",
//   },
// ];

// // ====== 共通ユーティリティ ======
// const scrollToId = (id: string) => {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
// };

// // ====== ページ本体 ======
// export default function App() {
//   return (
//     <div className="scroll-smooth font-sans text-slate-800">
//       <Nav />
//       <main>
//         <Hero />
//         <Info />
//         <Menu />
//         <Partners />
//         <Gallery />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function Nav() {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
//         <div className="font-extrabold">☕ {FESTIVAL.title}</div>
//         {/* モバイル: 横スクロールできるタブ型ナビ */}
//         <div className="flex gap-3 overflow-x-auto text-sm">
//           {[
//             { id: "hero", label: "Home" },
//             { id: "info", label: "Access" },
//             { id: "menu", label: "Menu" },
//             { id: "thanks", label: "Thanks" },
//             { id: "gallery", label: "Gallery" },
//           ].map((l) => (
//             <a
//               key={l.id}
//               href={`#${l.id}`}
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToId(l.id);
//               }}
//               className="whitespace-nowrap rounded-full px-3 py-1 hover:bg-slate-100"
//             >
//               {l.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// function Hero() {
//   return (
//     <section id="hero" className="px-4 pt-4 sm:pt-6">
//       <div className="relative mx-auto max-w-6xl">
//         <img
//           src="https://picsum.photos/seed/coffeehero/1400/800"
//           alt="coffee"
//           className="h-[52vh] w-full rounded-2xl object-cover sm:h-[60vh]"
//         />
//         <div className="absolute inset-0 grid place-items-center rounded-2xl bg-gradient-to-t from-black/50 to-black/25 text-center text-white p-4">
//           <div>
//             <h1 className="text-2xl font-black drop-shadow sm:text-4xl">{FESTIVAL.catchcopy}</h1>
//             <p className="mt-1 opacity-90">{FESTIVAL.title}</p>
//             <button
//               onClick={() => scrollToId("info")}
//               className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-white"
//             >
//               開催情報を見る
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ★ 学祭情報（2番目に固定）
// function Info() {
//   return (
//     <section id="info" className="py-10">
//       <header className="mx-auto mb-4 max-w-5xl px-4 text-center">
//         <h2 className="text-xl font-extrabold sm:text-2xl">開催情報</h2>
//         <p className="mt-1 text-slate-600">When & Where</p>
//       </header>
//       <div className="mx-auto grid max-w-5xl gap-3 px-4 sm:grid-cols-[1fr_auto]">
//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <div className="grid gap-2">
//             <InfoRow label="開催日程" value={FESTIVAL.dateText} />
//             <InfoRow label="場所" value={FESTIVAL.placeText} />
//           </div>
//         </div>
//         <a
//           href={FESTIVAL.mapUrl}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm hover:bg-slate-50"
//         >
//           Google Map を開く
//         </a>
//       </div>
//     </section>
//   );
// }

// function InfoRow({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex items-center gap-2 text-base">
//       <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// }

// function Menu() {
//   return (
//     <section id="menu" className="py-10">
//       <Header title="メニュー" sub="Our Lineup" />
//       <div className="mx-auto max-w-6xl px-4">
//         <h3 className="text-lg font-extrabold">Coffee</h3>
//         <CardGrid items={DRINKS} />
//         <h3 className="mt-6 text-lg font-extrabold">Sweets</h3>
//         <CardGrid items={SWEETS} />
//       </div>
//     </section>
//   );
// }

// function CardGrid({ items }: { items: MenuItem[] }) {
//   return (
//     <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
//       {items.map((m) => (
//         <article key={m.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           {m.img && <img src={m.img} alt={m.name} className="h-32 w-full object-cover sm:h-40" />}
//           <div className="p-3">
//             <div className="mb-1 flex items-center justify-between">
//               <h4 className="text-sm font-bold">{m.name}</h4>
//               <span className="text-sm font-extrabold">{m.price}</span>
//             </div>
//             {m.desc && <p className="text-xs text-slate-600">{m.desc}</p>}
//             {m.tag && (
//               <span className="mt-2 inline-block rounded-full bg-slate-900 px-2 py-0.5 text-[10px] text-white">
//                 {m.tag}
//               </span>
//             )}
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// }

// function Partners() {
//   return (
//     <section id="thanks" className="py-10">
//       <Header title="コラボ紹介" sub="Special Thanks" />
//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 sm:grid-cols-2 lg:grid-cols-3">
//         {PARTNERS.map((p, i) => (
//           <article key={i} className="grid grid-cols-[88px_1fr] gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//             {p.logo && <img src={p.logo} alt={p.name} className="h-22 w-22 rounded-lg object-cover" />}
//             <div className="grid gap-1">
//               <div className="text-xs text-slate-500">{p.role}</div>
//               <div className="text-lg font-extrabold">{p.name}</div>
//               {p.desc && <p className="text-sm text-slate-600">{p.desc}</p>}
//               <a
//                 href={p.instagramUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-2 inline-flex w-fit items-center rounded-full border border-slate-200 px-3 py-1 text-sm hover:bg-slate-50"
//               >
//                 Instagram を見る
//               </a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function Gallery() {
//   return (
//     <section id="gallery" className="py-10">
//       <Header title="ギャラリー" sub="Sneak peek" />
//       <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-4 sm:grid-cols-4 lg:grid-cols-6">
//         {Array.from({ length: 6 }).map((_, i) => (
//           <img key={i} src={`https://picsum.photos/seed/g${i}/800/600`} alt={`gallery-${i}`} className="h-24 w-full rounded-lg object-cover sm:h-28" />)
//         )}
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="mt-10 border-t border-slate-200 bg-slate-50">
//       <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
//         <div>© {new Date().getFullYear()} {FESTIVAL.title}</div>
//         <a
//           href="#hero"
//           onClick={(e) => {
//             e.preventDefault();
//             scrollToId("hero");
//           }}
//           className="rounded-full px-3 py-1 hover:bg-slate-100"
//         >
//           Top
//         </a>
//       </div>
//     </footer>
//   );
// }

// function Header({ title, sub }: { title: string; sub?: string }) {
//   return (
//     <header className="mx-auto mb-4 max-w-5xl px-4 text-center">
//       <h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>
//       {sub && <p className="mt-1 text-slate-600">{sub}</p>}
//     </header>
//   );
// }
import { useEffect } from "react";
import { motion } from "framer-motion";

// --- Inline tokens & font import (quick drop-in) ---
// もしGoogle Fontsをindex.html側で読み込むなら、以下は削除してOK
const InjectHeadBits = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap');
      :root {
        --bg:#ffffff;
        --ink:#0e0e0e;
        --muted:#6b7280;  /* gray-500 */
        --line:#e5e7eb;   /* gray-200 */
      }
      html,body,#root{height:100%}
      body{background:var(--bg); color:var(--ink); font-family:"Zen Maru Gothic","Hiragino Maru Gothic ProN","Yu Gothic","Noto Sans JP",system-ui,sans-serif;}
      a { color: inherit; text-decoration: none; }
      a:hover { text-decoration: underline; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

// --- Simple animation presets ---
const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
};

const floaty = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 8, ease: "easeInOut", repeat: Infinity },
  },
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <InjectHeadBits />
      {/* Header */}
      <header className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1024px] px-7 py-5 flex items-center justify-between">
          <div className="text-sm tracking-wide">the Tandem風</div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#works" className="hover:underline underline-offset-4">Works</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative">
          <div className="mx-auto max-w-[1024px] px-7 py-24 md:py-28">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(28px,4vw,48px)] leading-[1.2] tracking-[0.01em] font-medium"
            >
              ことばとデザインで、<br />静かな余白をつくる。
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-[46ch] text-[18px] leading-[1.9] text-[color:var(--muted)]"
            >
              余白と線で語る最小限のサイト。写真や色は控えめに、
              コピーと構図で印象を残すスタイル。
            </motion.p>

            {/* 線画アクセント */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute right-[12%] -bottom-6 opacity-75"
              variants={floaty}
              animate="animate"
              aria-hidden
            >
              <circle cx="60" cy="60" r="42" stroke="var(--line)" strokeWidth="2" />
              <path
                d="M60 18c8 10 8 24 0 34M60 52c12 6 24 6 36 0"
                stroke="var(--muted)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
        </section>

        {/* Works */}
        <section id="works" className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-[1024px] px-7 py-28">
            <div className="grid grid-cols-12 gap-5">
              {[
                { title: "Project A", desc: "言葉が先・ビジュアルは後。" },
                { title: "Project B", desc: "1pxの線と余白で構成。" },
              ].map((card, i) => (
                <motion.article
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-12 md:col-span-6 rounded-2xl border border-[color:var(--line)] p-6"
                >
                  <h3 className="m-0 text-lg font-medium">{card.title}</h3>
                  <p className="mt-2 text-[color:var(--muted)] leading-relaxed">{card.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-[760px] px-7 py-28">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-medium"
            >
              About
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-3 leading-[1.9] text-[color:var(--muted)]"
            >
              丸みのあるゴシック体、低彩度、ゆったり行間。
              過度な装飾を避け、情報密度を落として“読む速度”を落とす。
            </motion.p>
          </div>
        </section>

        {/* Contact / CTA（軽め） */}
        <section id="contact" className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-[1024px] px-7 py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between"
            >
              <p className="text-[18px] leading-[1.9] text-[color:var(--muted)]">
                ご相談はメールにて。まずは言葉を整えるところから。
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-5 py-2 text-sm hover:bg-neutral-50 transition"
              >
                Contact
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[color:var(--line)] text-[13px] text-[color:var(--muted)]">
        <div className="mx-auto max-w-[1024px] px-7 py-12">
          © 2025 Your Name / Tokyo, Japan
        </div>
      </footer>
    </div>
  );
}
