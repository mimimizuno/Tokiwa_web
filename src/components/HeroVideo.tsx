import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isDim, setIsDim] = useState(false); // 動画を薄くするフェーズ
  const titleControls = useAnimation();

  useEffect(() => {
    if (!videoRef.current) return;

    const el = videoRef.current;
    const onTimeUpdate = () => {
      if (!el.duration || Number.isNaN(el.duration)) return;
      const progress = el.currentTime / el.duration;
      // progressが0.5以上でisDimをtrueに
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
    <div className="hero">
      <div className="hero-canvas flex items-center justify-center">
        <div className="relative h-full" style={{ aspectRatio: "9 / 16" }}>
          <video
            ref={videoRef}
            className={`hero-video transition-opacity duration-700 ${isDim ? "opacity-40" : "opacity-100"}`}
            src="/videos/drip_hero.mp4"
            muted
            playsInline
            autoPlay
            preload="metadata"
          />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={titleControls}
            className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center font-[550] tracking-wide"
          >
            <span className="text-[12vw] leading-none md:text-6xl lg:text-7xl font-bold">
              Coffee Stand 305
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center text-sm text-neutral-600 safe-bottom">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={titleControls}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span>Scroll</span>
          <span className="mt-1 block w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-current" />
        </motion.div>
      </div>
    </div>
  );
};
