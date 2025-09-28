import { motion } from "framer-motion";
import { fadeIn } from "../shared/motion";
import { COLLABS } from "../shared/data";
import { InstaLinkCard } from "../components/InstaBookmarkCard";

export function Collaboration() {
  return (
    <>
      <motion.h1 className="section-title" {...fadeIn()}>
        Collabolation
      </motion.h1>
      <p className="main-text">
          豆を提供してくださる「BERTH COFFEE みなとみらい」、お菓子を提供してくださる「メリハリベイク」の店舗にもぜひ。
        </p>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {COLLABS.map((c) => (
          <InstaLinkCard key={c.id} name={c.name} url={c.url} image={c.image} desc={c.desc} />
        ))}
      </div>
    </>
  );
}