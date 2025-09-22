import { motion } from "framer-motion";

export function LocationDate() {
  return (
    <>
      <h1 className="section-title">Location & Date</h1>
      <h3 className="main-text">出店期間：2025年10月31日〜11月2日</h3>
      <h3 className="main-text">場所：横浜国立大学（常盤祭）</h3>

      <motion.a
        href="https://maps.google.com/?q=%E6%A8%AA%E6%B5%9C%E5%9B%BD%E7%AB%8B%E5%A4%A7%E5%AD%A6"
        target="_blank"
        rel="noreferrer"
        className="block rounded-xl2 overflow-hidden border border-neutral-200 shadow-soft"
        whileHover={{ scale: 1.01 }}
      >
        {/* 簡易マップ（静的画像）: /public/images/map.png を用意 */}
        <img src="/images/map.png" alt="横浜国立大学 簡易マップ" className="w-full h-auto" />
        <div className="px-4 py-3 text-sm text-neutral-600 bg-white">Google Mapで開く</div>
      </motion.a>
    </>
  );
}