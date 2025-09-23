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
        <HeroVideo />
        <SideMenu />
        <Section id="concept" className="section"><Concept /></Section>
        <Section id="location-date" className="section"><LocationDate /></Section>
        <Section id="menu" className="section"><Menu /></Section> 
        <Section id="collaboration" className="section"><Collaboration /></Section>
      </main>
      <Footer />
    </div>
  );
}