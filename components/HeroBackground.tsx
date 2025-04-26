"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
import TypeIntro from "./TypeIntro";
// import InteractiveAbout from "../components/interactive-about";
import dynamic from "next/dynamic";
const InteractiveAbout = dynamic(
  () => import("../components/interactive-about"),
  { ssr: false }
);

export default function AnimatedAbout() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Skills with icons
  const skills = [
    { name: "React", icon: <Code className="size-4" /> },
    { name: "Next.js", icon: <Monitor className="size-4" /> },
    { name: "Tailwind CSS", icon: <Palette className="size-4" /> },
    { name: "UI/UX", icon: <Lightbulb className="size-4" /> },
  ];

  return (
    <div className="relative">
      <div className="sticky top-0 flex flex-col items-center justify-center text-black h-screen">
        <TypeIntro />
      </div>
      <div className="">
        <InteractiveAbout />
      </div>
    </div>
  );

  {
    /* Helper components for animations */
  }
  function AnimatedParagraph({
    children,
    delay = 0,
  }: {
    children: React.ReactNode;
    delay?: number;
  }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
      <motion.p
        ref={ref}
        className="text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay, duration: 0.5 }}
      >
        {children}
      </motion.p>
    );
  }

  function HighlightedText({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.span
        ref={ref}
        className="relative inline-block font-medium text-white"
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-blue-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </motion.span>
    );
  }
}
