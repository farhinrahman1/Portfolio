import About from "../../components/About";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { ScrollProgress } from "../../components/scroll-progress";
import SimpleSkillsSection from "../../components/simple-skills-section";
import InteractiveAbout from "../../components/interactive-about";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <InteractiveAbout />
      <SimpleSkillsSection />
      <About />
      <Footer />
    </>
  );
}
