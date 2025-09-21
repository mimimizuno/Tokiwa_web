import { SideMenu } from "./components/SideMenu";
import { HeroVideo } from "./components/HeroVideo";
import { Section } from "./components/Section";
import { Concept } from "./sections/Concept";
import { LocationDate } from "./sections/LocationDate";
import { Menu } from "./sections/Menu";
import { Collaboration } from "./sections/Collaboration";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div>
      <main>
        {/* ヒーロー：余白ゼロ/9:16 全面 */}
        <HeroVideo />
        <SideMenu />
        {/* 以降は Section で統一（横幅/余白/scroll-margin すべて共通化） */}
        <Section id="concept"><Concept /></Section>
        <Section id="location-date"><LocationDate /></Section>

        {/* 横スクロールが必要なところだけユーティリティを付与 */}
        <section id="menu" className="section px-0">
          <Menu /> 
          {/* Menu内のリストは <div className="flex overflow-x-auto row-snap gap-4 px-5"> ... */}
        </section>

        <Section id="collaboration"><Collaboration /></Section>
      </main>

      <Footer />
    </div>
  );
}