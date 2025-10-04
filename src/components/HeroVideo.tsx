import { motion, useAnimation, useReducedMotion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  /** スクロール先の要素ID（例: "#concept"） */
  targetId?: string;
};

export const HeroVideo: React.FC<Props> = ({ targetId = "#concept" }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isDim, setIsDim] = useState(false);
  const titleControls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!videoRef.current) return;

    const el = videoRef.current;
    const onTimeUpdate = () => {
      if (!el.duration || Number.isNaN(el.duration)) return;
      const progress = el.currentTime / el.duration;
      if (progress >= 0.5 && !isDim) setIsDim(true);
    };

    const tryPlay = async () => { try { await el.play(); } catch {} };

    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("loadedmetadata", tryPlay, { once: true });

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("loadedmetadata", tryPlay);
    };
  }, [isDim]);

  useEffect(() => {
    if (isDim) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.0, ease: "easeOut" },
      });
    }
  }, [isDim, titleControls]);

  const handleScrollClick = () => {
    // targetId 要素があればそこへ、なければヒーロー高分だけ下へ
    const targetEl = document.querySelector(targetId) as HTMLElement | null;
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    } else {
      const hero = document.querySelector(".hero") as HTMLElement | null;
      const y = (hero?.clientHeight ?? window.innerHeight) - 1;
      window.scrollTo({
        top: y,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <div className="hero relative">
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

      {/* ↓ クリック（タップ）可能エリア */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center text-sm text-neutral-600 safe-bottom">
        <motion.button
          type="button"
          aria-label="次のセクションへスクロール"
          onClick={handleScrollClick}
          initial={{ opacity: 0, y: 6 }}
          animate={titleControls}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="
            pointer-events-auto
            flex flex-col items-center
            rounded-full px-4 py-3
            focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400
            active:opacity-80
          "
        >
          <span className="select-none">Scroll</span>
          <span
            aria-hidden
            className="mt-1 block w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-current"
          />
        </motion.button>
      </div>
    </div>
  );
};