import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  src: string;
  responsive?: boolean;           // default: true
  sizeRatio?: number;             // default: 0.26
  distanceRatio?: number;         // default: 0.82
  minSize?: number;               // default: 44
  maxSize?: number;               // default: 110
  duration?: number;              // default: 2200
  rotateTurns?: number;           // default: 2.2
  threshold?: number;             // default: 0.15
  once?: boolean;                 // default: true
  startOffsetX?: number;          // default: 0
  className?: string;
  size?: number;                  // responsive=false用
  distance?: number;              // responsive=false用
};

export function BeansRoll({
  src,
  responsive = true,
  sizeRatio = 0.26,
  distanceRatio = 0.82,
  minSize = 44,
  maxSize = 110,
  duration = 2200,
  rotateTurns = 2.2,
  threshold = 0.15,
  once = true,
  startOffsetX = 0,
  className = "",
  size: fixedSize = 56,
  distance: fixedDistance = 600,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef  = useRef<HTMLImageElement | null>(null);

  const [laneW, setLaneW] = useState(0);
  const [inView, setInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  // 進行状態の管理
  const startedRef  = useRef(false);
  const finishedRef = useRef(false);
  const rafRef      = useRef<number>(0);

  // 親幅
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setLaneW(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // 実際に使うpx
  const { sizePx, distancePx } = useMemo(() => {
    if (!responsive || laneW === 0) {
      return { sizePx: fixedSize, distancePx: fixedDistance };
    }
    const s = clamp(laneW * sizeRatio, minSize, maxSize);
    const safePad = 6;
    const d = Math.max(0, Math.min(laneW - s - safePad, laneW * distanceRatio));
    return { sizePx: s, distancePx: d };
  }, [responsive, laneW, sizeRatio, distanceRatio, minSize, maxSize, fixedSize, fixedDistance]);

  // 最終位置に固定する共通関数
  const finalize = () => {
    if (!imgRef.current) return;
    cancelAnimationFrame(rafRef.current);
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const totalRotateDeg = rotateTurns * 360;

    imgRef.current.style.transform =
      `translateX(${startOffsetX + distancePx}px) rotate(${prefersReduced ? 0 : totalRotateDeg}deg)`;
    imgRef.current.style.willChange = "auto";

    startedRef.current  = true;
    finishedRef.current = true;
    if (once) setHasPlayed(true);
  };

  // 可視判定：外れたら途中でも即ゴールへ
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const nowInView = !!entry?.isIntersecting;
        setInView(nowInView);
        if (!nowInView && startedRef.current && !finishedRef.current) {
          finalize();
        }
      },
      { threshold, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, distancePx, rotateTurns, startOffsetX, once]);

  // アニメーション
  useEffect(() => {
    if (!imgRef.current) return;
    if (once && hasPlayed) return;
    if (!inView) return;
    if (finishedRef.current) return; // 既に固定済み

    let start = 0;
    const img = imgRef.current;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const totalRotateDeg = rotateTurns * 360;

    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const ease = easeOutCubic(p);

      const x = startOffsetX + distancePx * ease;
      const r = prefersReduced ? 0 : totalRotateDeg * ease;

      img.style.transform = `translateX(${x}px) rotate(${r}deg)`;
      img.style.willChange = "transform";

      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        finishedRef.current = true;
        img.style.transform =
          `translateX(${startOffsetX + distancePx}px) rotate(${prefersReduced ? 0 : totalRotateDeg}deg)`;
        img.style.willChange = "auto";
        if (once) setHasPlayed(true);
      }
    };

    // 初期化
    img.style.transform = `translateX(${startOffsetX}px) rotate(0deg)`;
    startedRef.current  = true;
    finishedRef.current = false;
    rafRef.current = requestAnimationFrame(step);

    // タブが非表示になったら途中でも固定
    const onHidden = () => {
      if (document.visibilityState === "hidden" && startedRef.current && !finishedRef.current) {
        finalize();
      }
    };
    document.addEventListener("visibilitychange", onHidden);

    return () => {
      document.removeEventListener("visibilitychange", onHidden);
      if (!finishedRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, once, hasPlayed, startOffsetX, distancePx, duration, rotateTurns]);

  return (
    <div ref={wrapRef} className={`relative w-full overflow-visible ${className}`}>
      <div
      className="absolute left-0 right-0 border-t border-neutral-300"
      style={{ top: "70%" }}
      />
      <div className="relative" style={{ height: `${sizePx}px` }}>
        <img
          ref={imgRef}
          src={src}
          alt="coffee bean"
          height={sizePx}
          decoding="async"
          loading="lazy"
          style={{
            height: `${sizePx}px`,
            position: "absolute",
            left: 0,
            top: 0,
            transform: `translateX(${startOffsetX}px) rotate(0deg)`,
            transformOrigin: "50% 50%",
          }}
          className="select-none pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}

/* utils */
function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}