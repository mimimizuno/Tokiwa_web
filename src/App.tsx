import { Navbar } from "./components/Navbar";
import { HeroVideo } from "./components/HeroVideo";
import { Concept } from "./sections/Concept";
import { LocationDate } from "./sections/LocationDate";
import { Menu } from "./sections/Menu";
import { Collaboration } from "./sections/Collaboration";
import { Footer } from "./sections/Footer";

export default function App() {
  // ナビの高さをCSS変数で管理しておくと後で楽
  // e.g., :root { --nav-h: 56px; } をglobals/tailwindで定義してもOK
  return (
    <div className="font-display bg-white text-neutral-900">
      {/* ナビは重ねる（透過→スクロールで半透明にするならNavbar側で制御） */}
      <Navbar />

      <main>
        {/* 余白ゼロ・9:16のヒーロー動画（HeroVideo側でobject-cover指定済み） */}
        <HeroVideo />

        {/* セクションはナビ分だけスクロール余白を確保 */}
        <section id="concept" className="scroll-mt-24 px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <Concept />
        </section>

        <section id="location-date" className="scroll-mt-24 px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <LocationDate />
        </section>

        {/* 横スクロールの都合で左右余白ゼロのままでもOK */}
        <section id="menu" className="scroll-mt-24 px-0 py-16 md:py-24">
          <Menu />
        </section>

        <section id="collaboration" className="scroll-mt-24 px-5 py-16 md:py-24 max-w-screen-md mx-auto">
          <Collaboration />
        </section>
      </main>

      <Footer />
    </div>
  );
}