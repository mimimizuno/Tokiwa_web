import { motion } from "framer-motion";
import { fadeIn } from "../shared/motion";

export type InstaLinkCardProps = {
  name: string;
  url: string;
  image: string;
  desc: string;
  className?: string;
};

export function InstaLinkCard({ name, url, image, desc, className = "" }: InstaLinkCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`card group flex items-center gap-3 p-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-url/30 ${className}`}
      {...fadeIn(0.25)}
    >
      <div className="h-16 w-16 overflow-hidden rounded-2xl bg-muted ring-1 ring-neutral-200">
        <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="min-w-0">
        <span className="text-xs text-subtext">Instagram</span>
        <h3 className="truncate main-text">{name}</h3>
        <p className="line-clamp-1 text-sm text-main/80">{desc}</p>

        <span className="mt-1 inline-flex items-center gap-1 text-sm text-url underline decoration-url/40 underline-offset-4 group-hover:decoration-url">
          詳しく見る
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </motion.a>
  );
}