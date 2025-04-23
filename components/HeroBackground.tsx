"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Code, Lightbulb, Monitor, Palette } from "lucide-react";
import TypeIntro from "./TypeIntro";

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
      <div
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-500 blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-blue-500 blur-[100px]" />
        </motion.div>

        <div className="container mx-auto px-4 py-16 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            {/* Avatar section */}
            <motion.div
              className="w-full md:w-2/5 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/placeholder.svg?height=256&width=256"
                  alt="Farhin Rahman"
                  className="w-full h-full object-cover"
                />

                {/* Floating skill badges */}
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="absolute bg-white/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20"
                    style={{
                      top: `${25 + index * 20}%`,
                      right: index % 2 === 0 ? "-20%" : "auto",
                      left: index % 2 !== 0 ? "-20%" : "auto",
                    }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }
                    }
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Text content */}
            <div className="w-full md:w-3/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <motion.h2
                  className="text-sm uppercase tracking-widest text-purple-400 font-medium mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  About Me
                </motion.h2>
                <motion.h3
                  className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Farhin Rahman
                </motion.h3>
              </motion.div>

              <div className="space-y-4">
                {/* Animated text paragraphs */}
                <AnimatedParagraph delay={0.4}>
                  A{" "}
                  <HighlightedText>
                    passionate Frontend Developer
                  </HighlightedText>{" "}
                  with over 2 years of experience in designing and building
                  responsive, user-friendly websites.
                </AnimatedParagraph>

                <AnimatedParagraph delay={0.6}>
                  I specialize in creating{" "}
                  <HighlightedText>
                    modern, scalable web applications
                  </HighlightedText>{" "}
                  using technologies like React, Next.js, and Tailwind CSS. My
                  goal is to make the web more accessible and engaging for users
                  through innovative design and seamless user interfaces.
                </AnimatedParagraph>

                <AnimatedParagraph delay={0.8}>
                  When I'm not coding, you can find me exploring new
                  technologies, experimenting with design. I'm always eager to
                  take on <HighlightedText>new challenges</HighlightedText> and
                  grow as a developer.
                </AnimatedParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper components for animations
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
