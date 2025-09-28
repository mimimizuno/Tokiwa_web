import { motion } from "framer-motion";

export type InstaLinkCardProps = {
  name: string;
  url: string;
  image: string;
  desc?: string;
  className?: string;
};

export function InstaLinkCard({ name,url, image, desc, className = "" }: InstaLinkCardProps) {

    return (
        <motion.a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} をInstagramで開く`}
          className={`group flex items-center gap-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-soft transition hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 ${className}`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="h-16 w-16 overflow-hidden rounded-xl bg-muted ring-1 ring-neutral-200">
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
            ) : (
              <div className="grid h-full w-full place-items-center text-subtext">IG</div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-xs text-subtext">Instagram</div>
            <h3 className="truncate text-base font-semibold text-main">{name}</h3>
            {desc && <p className="line-clamp-1 text-sm text-main/80">{desc}</p>}
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 text-subtext group-hover:text-main" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      );
}