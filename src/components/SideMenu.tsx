import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MenuItem = { href: string; label: string };
const menu: MenuItem[] = [
  { href: "#concept", label: "Concept" },
  { href: "#location-date", label: "Access" },
  { href: "#menu", label: "Menu" },
  { href: "#collaboration", label: "Collab" },
];

// export function SideMenu() {
//   const [open, setOpen] = useState(false);
//   const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

//   // ドロワー開閉時にスクロール固定
//   useEffect(() => {
//     document.documentElement.style.overflow = open ? "hidden" : "";
//     return () => { document.documentElement.style.overflow = ""; };
//   }, [open]);

//   useEffect(() => {
//     if (open) firstLinkRef.current?.focus();
//   }, [open]);

//   return (
//     <>
//       {/* Heroの直下に置く。stickyでスクロール上端に到達したら右上に固定される */}
//       <div className="relative z-50 mx-auto w-full max-w-screen-md px-4">
//         <div
//           className="sticky top-[calc(env(safe-area-inset-top)+8px)] flex w-full justify-end"
//           style={{ minHeight: 0 }}
//         >
//           <button
//             aria-label="Open menu"
//             onClick={() => setOpen(true)}
//             className="rounded-full bg-base/70 nav-glass shadow-[var(--shadow-soft)] p-2"
//           >
//             <img src="/images/menu_icon.png" alt="menu" className="h-7 w-7" />
//           </button>
//         </div>
//       </div>

//       {/* ドロワー + オーバーレイ */}
//       <AnimatePresence>
//         {open && (
//           <>
//             <motion.div
//               aria-hidden
//               className="fixed inset-0 z-50 bg-black/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//             />
//             <motion.aside
//               role="dialog"
//               aria-modal="true"
//               className="fixed right-0 top-0 z-[60] h-full w-72 max-w-[85vw] bg-base shadow-2xl flex flex-col"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.25 }}
//             >
//               <div className="flex items-center justify-between px-4" style={{ height: "max(12svh, 48px)" }}>
//                 <span className="text-lg font-semibold">Menu</span>
//                 <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">✕</button>
//               </div>
//               <nav className="flex-1 px-4 py-2">
//                 <ul className="space-y-3 text-main">
//                   {menu.map((m, i) => (
//                     <li key={m.href}>
//                       <a
//                         ref={i === 0 ? firstLinkRef : undefined}
//                         className="block rounded-2xl px-3 py-2 hover:bg-muted focus:bg-muted focus:outline-none"
//                         href={m.href}
//                         onClick={() => setOpen(false)}
//                       >
//                         {m.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
export function SideMenu() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* ★ stickyはフル幅。中で右寄せする */}
      <div
        className="sticky z-50 w-full"
        style={{ top: "calc(env(safe-area-inset-top) + 8px)" }}  // ← ここをstyleに
      >
        <div className="mx-auto flex max-w-screen-md justify-end px-4">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full bg-base/70 nav-glass shadow-[var(--shadow-soft)] p-2"
          >
            <img src="/images/menu_icon.png" alt="menu" className="h-12 w-12" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              aria-hidden
              className="fixed inset-0 z-50 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog" aria-modal="true"
              className="fixed right-0 top-0 z-[60] flex h-full w-72 max-w-[85vw] flex-col bg-base shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between px-4" style={{ height: "max(12svh, 48px)" }}>
                <span className="text-lg font-semibold">Menu</span>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">✕</button>
              </div>
              <nav className="flex-1 px-4 py-2">
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