import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/**
 * 8秒の縦型ドリップ動画を背景に全画面表示。
 * 後半(50%以降)で動画を薄くし(暗幕ではなくvideo自体のopacityを下げる)、
 * タイトル「Coffee Stand 305」を前面にフェードイン。
 * スクロールすれば通常のページに遷移できるヒーロー。
 */

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isDim, setIsDim] = useState(false); // 動画を薄くするフェーズ
  const titleControls = useAnimation();

  useEffect(() => {
    if (!videoRef.current) return;

    const el = videoRef.current;
    const onTimeUpdate = () => {
      if (!el.duration || Number.isNaN(el.duration)) return;
      const progress = el.currentTime / el.duration; // 0.0 - 1.0
      if (progress >= 0.5 && !isDim) {
        setIsDim(true);
      }
    };

    el.addEventListener("timeupdate", onTimeUpdate);

    // iOSの自動再生条件: muted + playsInline + autoPlay
    const tryPlay = async () => { try { await el.play(); } catch {} };
    el.addEventListener("loadedmetadata", tryPlay, { once: true });

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("loadedmetadata", tryPlay);
    };
  }, [isDim]);

  useEffect(() => {
    if (isDim) {
      titleControls.start({ opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" } });
    }
  }, [isDim, titleControls]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-white">
      {/* 9:16 固定のキャンバスを画面中央にフィット（はみ出しなし / 黒帯なし） */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full" style={{ aspectRatio: "9 / 16" }}>
          <video
            ref={videoRef}
            className={`h-full w-full object-cover transition-opacity duration-700 ${isDim ? "opacity-40" : "opacity-100"}`}
            src="/videos/drip_hero.mp4" // 602x1078など 9:16 素材を想定
            muted
            playsInline
            autoPlay
            preload="metadata"
          />

          {/* タイトル（後半で前面にフェードイン） */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={titleControls}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center font-[550] tracking-wide"
          >
            <span className="text-[12vw] leading-none md:text-6xl lg:text-7xl text-neutral-900">
              Coffee Stand 305
            </span>
          </motion.h1>
        </div>
      </div>

      {/* 底部にスクロールインジケータ */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex items-center justify-center text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <span>Scroll</span>
          <motion.span
            aria-hidden
            initial={{ y: 0, opacity: 0.6 }}
            animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="i-lucide-chevron-down block h-4 w-4"
          />
        </div>
      </div>
    </section>
  );
};
