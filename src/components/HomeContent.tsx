"use client";

import dynamic from "next/dynamic";
import { ScrollProgress } from "../../components/scroll-progress";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import SkillsSection from "../../components/skills-reveal-section";
import About from "../../components/About";

const FooterComponent = dynamic(() => import("../../components/footer"), {
  ssr: false,
});

const ParticleBackground = dynamic(
  () => import("../../components/paticle-background"),
  {
    ssr: false,
  }
);

export default function HomeContent() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <SkillsSection />
      <About />
      <ParticleBackground />
      <FooterComponent />
    </>
  );
}
