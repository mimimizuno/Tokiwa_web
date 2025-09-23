import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MenuItem = { href: `#${string}`; label: string };
const menu: MenuItem[] = [
  { href: "#concept", label: "Concept" },
  { href: "#location-date", label: "Location&Date" },
  { href: "#menu", label: "Coffee" },
  { href: "#menu", label: "Sweets" },
  { href: "#collaboration", label: "Collaboration" },
];

export function SideMenu() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // 開いている状態ではスクロールをロック
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = open ? "hidden" : prev || "";
    return () => { root.style.overflow = prev || ""; };
  }, [open]);

  // Escで閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <div className="sticky-safe">
        <div className="relative mx-auto flex max-w-screen-md justify-end px-4">
          <div style={{ perspective: 800 }}>
            <motion.button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="relative z-[90] nav-glass rounded-full p-2 shadow-[var(--shadow-soft)]"
              style={{ transformStyle: "preserve-3d" }}
              animate={prefersReduced ? {} : { rotateY: open ? 180 : 0 }}
              transition={prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
              whileTap={{ scale: 0.96 }}
            >
              <img
                src="/images/menu_icon.png"
                alt="menu"
                className="h-12 w-12"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              />
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {/* オーバーレイ */}
            <motion.div
              aria-hidden
              className="drawer-overlay"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}  // オーバーレイのクリックでドロワーを閉じる
            />

            {/* サイドドロワー本体 */}
            <motion.aside
              id="side-drawer"
              role="dialog"
              aria-modal="true"
              className="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="mt-16 px-4 py-3 text-lg font-semibold">
                Menu
              </div>

              <nav className="flex-1 px-4 py-4 overflow-auto">
                <ul className="space-y-3 text-main">
                  {menu.map((m, i) => (
                    <li key={m.href}>
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        className="block rounded-2xl px-3 py-2 hover:bg-muted focus:bg-muted focus:outline-none"
                        href={m.href}
                        onClick={() => setOpen(false)}
                      >
                        {m.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}