import { ScrollProgress } from "../../components/scroll-progress";
import SimpleSkillsSection from "../../components/simple-skills-section";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { Footer } from "../../components/footer";
import About from "../../components/About";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <SimpleSkillsSection />
      <About />
      <Footer />
    </>
  );
}
