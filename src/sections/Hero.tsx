import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="min-h-[78svh] pt-20 grid place-items-center px-6">
      <div className="text-center max-w-screen-sm">
        <motion.h1
          className="text-5xl leading-tight md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Coffee Stand 305
        </motion.h1>
        <motion.p
          className="mt-4 text-neutral-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          フルーティーなコーヒー、浅煎りの世界へようこそ。
        </motion.p>
        {/* シンプルなイラスト（SVG）をふわっと動かす */}
        <motion.div
          className="mt-10 mx-auto w-40 h-40"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ delay: 0.6, duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 128 128" className="w-full h-full">
            <g fill="none" stroke="#8b5e34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="32" y="40" width="64" height="56" rx="10" />
              <path d="M96 52h8a12 12 0 0 1 0 24h-8" />
              <path d="M48 96c8 8 24 8 32 0" />
              <path d="M56 32c-2 4 2 6 2 10m12-10c-2 4 2 6 2 10" />
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}