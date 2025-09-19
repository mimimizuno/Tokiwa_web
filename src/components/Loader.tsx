import { motion } from "framer-motion";

type Props = { onFinish?: () => void };

export function Loader({ onFinish }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* ロード動画（/publicに配置） */}
      <video
        className="w-40 h-40 object-contain"
        src="/videos/loader.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      />
      <p className="mt-4 text-xs text-neutral-500">Loading…</p>
    </motion.div>
  );
}