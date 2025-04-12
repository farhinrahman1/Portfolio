import About from "../../components/About";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import { ScrollProgress } from "../../components/scroll-progress";
import SkillsShowcase from "../../components/skills-showcase";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-900">
        <h1 className="font-playfair text-5xl font-bold text-white mb-2 tracking-tight">
          My Expertise
        </h1>
        <p className="font-raleway text-zinc-400 mb-12 italic">
          Discover my professional skillset
        </p>
        <SkillsShowcase />
      </main>
      <Footer />
    </>
  );
}
